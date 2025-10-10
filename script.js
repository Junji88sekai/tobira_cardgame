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
  
  // カードの表面・裏面の要素を取得
  const cardFrontText = document.querySelector('.card-front .card-text');
  const cardBackText = document.querySelector('.card-back .card-text');
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
    // 選択された課を取得
    const selectedLessons = Array.from(document.querySelectorAll('.lesson-checkbox:checked')).map(cb => parseInt(cb.value));
    if (selectedLessons.length === 0) {
      alert('課を1つ以上選択してください。');
      return;
    }
    
    // 選択された内容（読み物/会話）を取得
    const contentType = document.querySelector('input[name="contentType"]:checked').value;
    
    // 対象となるカードをフィルタリング
    activeCards = cardData
      .filter(data => selectedLessons.includes(data.lesson) && data.topic === contentType)
      .flatMap(data => data.words)
      .map((word, index) => ({ ...word, id: `${word.jp}-${index}` })); // 各カードにユニークIDを付与

    // 「覚えた」カードを除外
    activeCards = activeCards.filter(card => !learnedCards.includes(card.id));

    if (activeCards.length === 0) {
      alert('対象の単語がありません。学習済みの単語をリセットするか、別の課を選択してください。');
      return;
    }

    // ランダム表示がオンならシャッフル
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
      cardFrontText.textContent = '完了！';
      cardBackText.textContent = 'お疲れ様でした！';
      cardFrontImage.style.display = 'none';
      cardBackImage.style.display = 'none';
      nextButton.disabled = true;
      markLearnedButton.disabled = true;
      progressIndicator.textContent = '全問終了';
      return;
    }
    
    const card = activeCards[currentCardIndex];
    const cardSide = document.querySelector('input[name="card-side"]:checked').value;
    const imagePath = card.image ? `image/${card.image}` : "";

    // 以前の表示をクリア
    cardFrontImage.style.display = 'none';
    cardBackImage.style.display = 'none';

    // 表面と裏面の内容を設定
    if (cardSide === 'jp') {
      cardFrontText.textContent = card.jp;
      cardBackText.textContent = card.es;
    } else {
      cardFrontText.textContent = card.es;
      cardBackText.textContent = card.jp;
    }
    
    // 画像データがある場合のみ、画像を表示
    if (imagePath) {
      cardFrontImage.src = imagePath;
      cardBackImage.src = imagePath; // 裏面にも同じ画像を設定
      cardFrontImage.style.display = 'block';
      cardBackImage.style.display = 'block';
    }

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
    activeCards.splice(currentCardIndex, 1); // 現在のカードをリストから削除
    if (currentCardIndex >= activeCards.length) {
      currentCardIndex = 0; // 最後尾のカードを覚えたら先頭に戻る
    }
    displayCard();
  });

  // 「覚えた」をリセットするボタンの処理
  resetLearnedButton.addEventListener('click', () => {
    if (confirm('本当に「覚えた」リストをリセットしますか？')) {
      learnedCards = [];
      localStorage.removeItem('learnedCards');
      alert('リセットしました。ページを再読み込みするか、新しいゲームを開始してください。');
      gameArea.style.display = 'none';
      settingsContainer.style.display = 'block';
    }
  });
});
