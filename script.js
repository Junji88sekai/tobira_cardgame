document.addEventListener('DOMContentLoaded', () => {
  // HTML要素を取得
  const lessonCheckboxesContainer = document.getElementById('lesson-checkboxes');
  const startButton = document.getElementById('start-button');
  const gameArea = document.getElementById('game-area');
  const settingsContainer = document.querySelector('.settings-container');
  const flashcard = document.getElementById('flashcard');
  const nextButton = document.getElementById('next-button');
  const markLearnedButton = document.getElementById('mark-learned-button');
  const resetLearnedButton = document.getElementById('reset-learned-button');
  const progressIndicator = document.getElementById('progress-indicator');
  
  // カードの表面・裏面の画像要素を取得
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
    const selectedLessons = Array.from(document.querySelectorAll('.lesson-checkbox:checked')).map(cb => parseInt(cb.value));
    if (selectedLessons.length === 0) {
      alert('課を1つ以上選択してください。');
      return;
    }
    
    const contentType = document.querySelector('input[name="contentType"]:checked').value;
    
    activeCards = cardData
      .filter(data => selectedLessons.includes(data.lesson) && data.topic === contentType)
      .flatMap(data => data.words)
      .map((word, index) => ({ ...word, id: `${word.jp}-${index}` }));

    activeCards = activeCards.filter(card => !learnedCards.includes(card.id));

    if (activeCards.length === 0) {
      alert('対象のカードがありません。学習済みのカードをリセットするか、別の課を選択してください。');
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

  // カードを表示する関数
  function displayCard() {
    if (currentCardIndex >= activeCards.length) {
      progressIndicator.textContent = '全問終了！お疲れ様でした。';
      flashcard.style.display = 'none'; // カードを隠す
      nextButton.disabled = true;
      markLearnedButton.disabled = true;
      return;
    }
    
    flashcard.style.display = 'block'; // カードを再表示
    const card = activeCards[currentCardIndex];
    
    // 表（日本語）と裏（スペイン語）の画像パスを設定
    const frontImagePath = card.image_jp ? `image/${card.image_jp}` : "";
    const backImagePath = card.image_es ? `image/${card.image_es}` : "";

    cardFrontImage.src = frontImagePath;
    cardBackImage.src = backImagePath;

    // 画像がない場合の代替テキスト
    cardFrontImage.alt = frontImagePath ? card.jp : "画像なし";
    cardBackImage.alt = backImagePath ? card.es : "画像なし";

    flashcard.classList.remove('is-flipped');
    progressIndicator.textContent = `${currentCardIndex + 1} / ${activeCards.length}`;
    nextButton.disabled = false;
    markLearnedButton.disabled = false;
  }

  // カードをクリックでめくる
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
  });

  // 「次へ」ボタンの処理
  nextButton.addEventListener('click', () => {
    currentCardIndex++;
    displayCard();
  });
  
  // 「覚えた！」ボタンの処理
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

  // 「覚えた」をリセットするボタンの処理
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
