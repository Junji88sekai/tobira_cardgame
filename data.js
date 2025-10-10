const cardData = [
  // =============================================
  // == 第1課のデータ (これは既存のデータです) ==
  // =============================================
  {
    lesson: 1,
    topic: 'kaiwa',
    words: [
      { jp: 'mukashibanashi', es: 'Cuento antiguo', image_jp: 'kaiwa/1/mukashibanashi_jp.png', image_es: 'kaiwa/1/mukashibanashi_es.png' },
      { jp: 'senkou', es: 'Especialidad', image_jp: 'kaiwa/1/senkou_jp.png', image_es: 'kaiwa/1/senkou_es.png' },
      // ...第1課の会話データをここに追加...
    ]
  },
  {
    lesson: 1,
    topic: 'yomi',
    words: [
      { jp: 'chiri', es: 'Geografía', image_jp: 'yomi/1/chiri_jp.png', image_es: 'yomi/1/chiri_es.png' },
      // ...第1課の読み物データをここに追加...
    ]
  },

  // ==========================================================
  // == ▼▼▼ ここから第2課～第15課のテスト用データ ▼▼▼ ==
  // ==========================================================
  {
    lesson: 2,
    topic: 'kaiwa',
    words: [ { jp: '第2課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 2,
    topic: 'yomi',
    words: [ { jp: '第2課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 3,
    topic: 'kaiwa',
    words: [ { jp: '第3課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 3,
    topic: 'yomi',
    words: [ { jp: '第3課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 4,
    topic: 'kaiwa',
    words: [ { jp: '第4課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 4,
    topic: 'yomi',
    words: [ { jp: '第4課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 5,
    topic: 'kaiwa',
    words: [ { jp: '第5課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 5,
    topic: 'yomi',
    words: [ { jp: '第5課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 6,
    topic: 'kaiwa',
    words: [ { jp: '第6課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 6,
    topic: 'yomi',
    words: [ { jp: '第6課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 7,
    topic: 'kaiwa',
    words: [ { jp: '第7課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 7,
    topic: 'yomi',
    words: [ { jp: '第7課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 8,
    topic: 'kaiwa',
    words: [ { jp: '第8課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 8,
    topic: 'yomi',
    words: [ { jp: '第8課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 9,
    topic: 'kaiwa',
    words: [ { jp: '第9課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 9,
    topic: 'yomi',
    words: [ { jp: '第9課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 10,
    topic: 'kaiwa',
    words: [ { jp: '第10課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 10,
    topic: 'yomi',
    words: [ { jp: '第10課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 11,
    topic: 'kaiwa',
    words: [ { jp: '第11課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 11,
    topic: 'yomi',
    words: [ { jp: '第11課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 12,
    topic: 'kaiwa',
    words: [ { jp: '第12課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 12,
    topic: 'yomi',
    words: [ { jp: '第12課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 13,
    topic: 'kaiwa',
    words: [ { jp: '第13課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 13,
    topic: 'yomi',
    words: [ { jp: '第13課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 14,
    topic: 'kaiwa',
    words: [ { jp: '第14課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 14,
    topic: 'yomi',
    words: [ { jp: '第14課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 15,
    topic: 'kaiwa',
    words: [ { jp: '第15課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  },
  {
    lesson: 15,
    topic: 'yomi',
    words: [ { jp: '第15課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ]
  }
];
