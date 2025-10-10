document.addEventListener('DOMContentLoaded', () => {
  // HTML要素を取得
  const lessonCheckboxesContainer = document.getElementById('lesson-checkboxes');
  const startButton = document.getElementById('start-button');
  const gameArea = document.getElementById('game-area');
  // ...（他の要素取得コードは同じなので省略）...
  const settingsContainer = document.querySelector('.settings-container');
  const flashcard = document.getElementById('flashcard');
  const nextButton = document.getElementById('next-button');
  const markLearnedButton = document.getElementById('mark-learned-button');
  const resetLearnedButton = document.getElementById('reset-learned-button');
  const progressIndicator = document.getElementById('progress-indicator');
  const cardFrontImage = document.querySelector('.card-front .card-image');
  const cardBackImage = document.querySelector('.card-back .card-image');
  
  let currentCardIndex = 0;
  let activeCards = [];
  let learnedCards = JSON.parse(localStorage.getItem('learnedCards')) || [];

  // 1課から15課までのチェックボックスを自動生成
  for (let i = 1; i <= 15; i++) {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = i;
    checkbox.className = 'lesson-checkbox';
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(`第${i}課`));
    lessonCheckboxesContainer.appendChild(label);
  }

  // ゲーム開始ボタンの処理
  startButton.addEventListener('click', () => {
    // ▼▼▼ テスト用メッセージ1 ▼▼▼
    alert("① ボタンがクリックされました！");

    const selectedLessons = Array.from(document.querySelectorAll('.lesson-checkbox:checked')).map(cb => parseInt(cb.value));
    
    // ▼▼▼ テスト用メッセージ2 ▼▼▼
    alert("② 選択された課は: 「" + selectedLessons + "」です。");

    if (selectedLessons.length === 0) {
      alert('エラー：課が選択されていません。処理を中断します。');
      return;
    }
    
    const contentType = document.querySelector('input[name="contentType"]:checked').value;
    
    activeCards = cardData
      .filter(data => selectedLessons.includes(data.lesson) && data.topic === contentType)
      .flatMap(data => data.words)
      .map((word, index) => ({ ...word, id: `${word.jp}-${index}` }));

    activeCards = activeCards.filter(card => !learnedCards.includes(card.id));

    // ▼▼▼ テスト用メッセージ3 ▼▼▼
    alert("③ 見つかったカードの数は: 「" + activeCards.length + "」枚です。");

    if (activeCards.length === 0) {
      alert('エラー：カードが見つかりませんでした。処理を中断します。');
      return;
    }

    if (document.getElementById('random-mode').checked) {
      activeCards.sort(() => Math.random() - 0.5);
    }
    
    currentCardIndex = 0;
    settingsContainer.style.display = 'none';
    gameArea.style.display = 'block';
    displayCard();
  });

  // カードを表示する関数 (この部分は変更なし)
  function displayCard() {
    if (currentCardIndex >= activeCards.length) {
      progressIndicator.textContent = '全問終了！お疲れ様でした。';
      flashcard.style.display = 'none';
      nextButton.disabled = true;
      markLearnedButton.disabled = true;
      return;
    }
    
    flashcard.style.display = 'block';
    const card = activeCards[currentCardIndex];
    
    const frontImagePath = card.image_jp ? `image/${card.image_jp}` : "";
    const backImagePath = card.image_es ? `image/${card.image_es}` : "";

    cardFrontImage.src = frontImagePath;
    cardBackImage.src = backImagePath;
    cardFrontImage.alt = frontImagePath ? card.jp : "画像なし";
    cardBackImage.alt = backImagePath ? card.es : "画像なし";

    flashcard.classList.remove('is-flipped');
    progressIndicator.textContent = `${currentCardIndex + 1} / ${activeCards.length}`;
    nextButton.disabled = false;
    markLearnedButton.disabled = false;
  }

  // 他の関数 (flipCard, nextCardなど) は変更なし
  flashcard.addEventListener('click', () => { flashcard.classList.toggle('is-flipped'); });
  nextButton.addEventListener('click', () => { currentCardIndex++; displayCard(); });
  markLearnedButton.addEventListener('click', () => {
    const cardId = activeCards[currentCardIndex].id;
    if (!learnedCards.includes(cardId)) {
        learnedCards.push(cardId);
        localStorage.setItem('learnedCards', JSON.stringify(learnedCards));
    }
    activeCards.splice(currentCardIndex, 1);
    if (currentCardIndex >= activeCards.length && activeCards.length > 0) {
      currentCardIndex = 0;
    }
    displayCard();
  });
  resetLearnedButton.addEventListener('click', () => {
    if (confirm('本当に「覚えた」リストをリセットしますか？')) {
      learnedCards = [];
      localStorage.removeItem('learnedCards');
      alert('リセットしました。');
      gameArea.style.display = 'none';
      settingsContainer.style.display = 'block';
    }
  });
});
