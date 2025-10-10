document.addEventListener('DOMContentLoaded', () => {
  // HTML要素を取得
  const lessonCheckboxesContainer = document.getElementById('lesson-checkboxes');
  const startButton = document.getElementById('start-button');
  const gameArea = document.getElementById('game-area');
  const settingsContainer = document.querySelector('.settings-container');
  const flashcard = document.getElementById('flashcard');
  const prevButton = document.getElementById('prev-button'); // ★追加
  const nextButton = document.getElementById('next-button');
  const markLearnedButton = document.getElementById('mark-learned-button');
  const resetLearnedButton = document.getElementById('reset-learned-button');
  const progressIndicator = document.getElementById('progress-indicator');
  const jumpInput = document.getElementById('jump-input'); // ★追加
  const jumpButton = document.getElementById('jump-button'); // ★追加
  
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
    
    jumpInput.max = activeCards.length; // ジャンプの上限を設定
    currentCardIndex = 0;
    settingsContainer.style.display = 'none';
    gameArea.style.display = 'block';
    displayCard();
  });

  // カードを表示する関数
  function displayCard() {
    if (activeCards.length === 0) {
      progressIndicator.textContent = '全問終了！お疲れ様でした。';
      flashcard.style.display = 'none';
      prevButton.disabled = true;
      nextButton.disabled = true;
      markLearnedButton.disabled = true;
      return;
    }

    if (currentCardIndex >= activeCards.length) {
      currentCardIndex = activeCards.length - 1;
    }
    if (currentCardIndex < 0) {
      currentCardIndex = 0;
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
    jumpInput.value = currentCardIndex + 1;
    
    prevButton.disabled = false;
    nextButton.disabled = false;
    markLearnedButton.disabled = false;
  }

  // カードをクリックでめくる
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
  });

  // 「戻る」ボタンの処理
  prevButton.addEventListener('click', () => {
    currentCardIndex--;
    displayCard();
  });
  
  // 「次へ」ボタンの処理
  nextButton.addEventListener('click', () => {
    currentCardIndex++;
    displayCard();
  });

  // ジャンプボタンの処理
  jumpButton.addEventListener('click', () => {
    const page = parseInt(jumpInput.value);
    if (page >= 1 && page <= activeCards.length) {
      currentCardIndex = page - 1;
      displayCard();
    } else {
      alert(`1から${activeCards.length}までの数字を入力してください。`);
    }
  });

  // ジャンプフォームでEnterキーを押した時の処理
  jumpInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      jumpButton.click();
    }
  });
  
  // 「覚えた！」ボタンの処理
  markLearnedButton.addEventListener('click', () => {
    const cardId = activeCards[currentCardIndex].id;
    if (!learnedCards.includes(cardId)) {
        learnedCards.push(cardId);
        localStorage.setItem('learnedCards', JSON.stringify(learnedCards));
    }
    activeCards.splice(currentCardIndex, 1);
    jumpInput.max = activeCards.length; // ジャンプの上限を更新
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
  
  // キーボード操作のコード
  document.addEventListener('keydown', (event) => {
    if (gameArea.style.display === 'block') {
      // ジャンプフォームに入力中はキー操作を無効にする
      if (document.activeElement === jumpInput) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          prevButton.click();
          break;
        case 'ArrowRight':
          nextButton.click();
          break;
        case 'ArrowDown':
        case 'ArrowUp':
        case ' ': // スペースキーでも裏返せるように追加
          event.preventDefault(); // スペースキーでの画面スクロールを防止
          flashcard.click();
          break;
      }
    }
  });
});
