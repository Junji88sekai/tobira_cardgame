const cardData = [
  // ===================================
  // == 第1課のデータ (パス修正済み) ==
  // ===================================
  {
    lesson: 1,
    topic: 'kaiwa',
    words: [
      { jp: 'mukashibanashi', es: 'mukashibanashi', image_jp: 'U1/kaiwa/U1_01_mukashibanashi_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_01_mukashibanashi_es_kaiwa.png' },
      { jp: 'senkou', es: 'senkou', image_jp: 'U1/kaiwa/U1_02_senkou_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_02_senkou_es_kaiwa.png' },
      { jp: 'iroiroto', es: 'iroiroto', image_jp: 'U1/kaiwa/U1_03_iroiroto_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_03_iroiroto_es_kaiwa.png' },
      { jp: 'senmon', es: 'senmon', image_jp: 'U1/kaiwa/U1_04_senmon_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_04_senmon_es_kaiwa.png' },
      { jp: 'chihou', es: 'chihou', image_jp: 'U1/kaiwa/U1_05_chihou_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_05_chihou_es_kaiwa.png' },
      { jp: 'inaka', es: 'inaka', image_jp: 'U1/kaiwa/U1_06_inaka_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_06_inaka_es_kaiwa.png' },
      { jp: 'kantouchihou', es: 'kantouchihou', image_jp: 'U1/kaiwa/U1_07_kantouchihou_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_07_kantouchihou_es_kaiwa.png' },
      { jp: 'kansaichihou', es: 'kansaichihou', image_jp: 'U1/kaiwa/U1_08_kansaichihou_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_08_kansaichihou_es_kaiwa.png' },
      { jp: 'hairu', es: 'hairu', image_jp: 'U1/kaiwa/U1_09_hairu_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_09_hairu_es_kaiwa.png' },
      { jp: 'naiyou', es: 'naiyou', image_jp: 'U1/kaiwa/U1_10_naiyou_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_10_naiyou_es_kaiwa.png' },
      { jp: 'meibutsu', es: 'meibutsu', image_jp: 'U1/kaiwa/U1_11_meibutsu_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_11_meibutsu_es_kaiwa.png' },
      { jp: 'dentouteki', es: 'dentouteki', image_jp: 'U1/kaiwa/U1_12_dentouteki_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_12_dentouteki_es_kaiwa.png' },
      { jp: 'gyouji', es: 'gyouji', image_jp: 'U1/kaiwa/U1_13_gyouji_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_13_gyouji_es_kaiwa.png' },
      { jp: 'toshi', es: 'toshi', image_jp: 'U1/kaiwa/U1_14_toshi_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_14_toshi_es_kaiwa.png' },
      { jp: 'tokubetsu', es: 'tokubetsu', image_jp: 'U1/kaiwa/U1_15_tokubetsu_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_15_tokubetsu_es_kaiwa.png' },
      { jp: 'okonau', es: 'okonau', image_jp: 'U1/kaiwa/U1_16_okonau_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_16_okonau_es_kaiwa.png' },
      { jp: 'oshougatsu', es: 'oshougatsu', image_jp: 'U1/kaiwa/U1_17_oshougatsu_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_17_oshougatsu_es_kaiwa.png' },
      { jp: 'tachi', es: 'tachi', image_jp: 'U1/kaiwa/U1_18_tachi_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_18_tachi_es_kaiwa.png' },
      { jp: 'ippan', es: 'ippan', image_jp: 'U1/kaiwa/U1_19_ippan_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_19_ippan_es_kaiwa.png' },
      { jp: 'ippanteki', es: 'ippanteki', image_jp: 'U1/kaiwa/U1_20_ippanteki_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_20_ippanteki_es_kaiwa.png' },
      { jp: 'e', es: 'e', image_jp: 'U1/kaiwa/U1_21_e_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_21_e_es_kaiwa.png' },
      { jp: 'taihen', es: 'taihen', image_jp: 'U1/kaiwa/U1_22_taihen_jp_kaiwa.png', image_es: 'U1/kaiwa/U2_22_taihen_es_kaiwa.png' },
      { jp: 'hontou', es: 'hontou', image_jp: 'U1/kaiwa/U1_23_hontou_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_23_hontou_es_kaiwa.png' },
      { jp: 'shusshin', es: 'shusshin', image_jp: 'U1/kaiwa/U1_24_shusshin_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_24_shusshin_es_kaiwa.png' },
      { jp: 'shizen', es: 'shizen', image_jp: 'U1/kaiwa/U1_25_shizen_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_25_shizen_es_kaiwa.png' },
      { jp: 'kibishii', es: 'kibishii', image_jp: 'U1/kaiwa/U1_26_kibishii_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_26_kibishii_es_kaiwa.png' },
      { jp: 'kimochi', es: 'kimochi', image_jp: 'U1/kaiwa/U1_27_kimochi_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_27_kimochi_es_kaiwa.png' },
      { jp: 'hajime', es: 'hajime', image_jp: 'U1/kaiwa/U1_28_hajime_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_28_hajime_es_kaiwa.png' },
      { jp: 'matsuri', es: 'matsuri', image_jp: 'U1/kaiwa/U1_29_matsuri_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_29_matsuri_es_kaiwa.png' },
      { jp: 'sugoi', es: 'sugoi', image_jp: 'U1/kaiwa/U1_30_sugoi_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_30_sugoi_es_kaiwa.png' },
      { jp: 'boku', es: 'boku', image_jp: 'U1/kaiwa/U1_31_boku_jp_kaiwa.png', image_es: 'U1/kaiwa/U1_31_boku_es_kaiwa.png' }
    ]
  },
  {
    lesson: 1,
    topic: 'yomi',
    words: [
      { jp: 'chiri', es: 'chiri', image_jp: 'U1/yomimono/U1_01_chiri_jp_yomi.png', image_es: 'U1/yomimono/U1_01_chiri_es_yomi.png' },
      { jp: 'minasan', es: 'minasan', image_jp: 'U1/yomimono/U1_02_minasan_jp_yomi.png', image_es: 'U1/yomimono/U1_02_minasan_es_yomi.png' },
      { jp: 'ookina', es: 'ookina', image_jp: 'U1/yomimono/U1_03_ookina_jp_yomi.png', image_es: 'U1/yomimono/U1_03_ookina_es_yomi.png' },
      { jp: 'shima', es: 'shima', image_jp: 'U1/yomimono/U1_04_shima_jp_yomi.png', image_es: 'U1/yomimono/U1_04_shima_es_yomi.png' },
      { jp: 'tairiku', es: 'tairiku', image_jp: 'U1/yomimono/U1_05_tairiku_jp_yomi.png', image_es: 'U1/yomimono/U1_05_tairiku_es_yomi.png' },
      { jp: 'toshi', es: 'toshi', image_jp: 'U1/yomimono/U1_06_toshi_jp_yomi.png', image_es: 'U1/yomimono/U1_06_toshi_es_yomi.png' },
      { jp: 'hokkaido', es: 'hokkaido', image_jp: 'U1/yomimono/U1_07_hokkaido_jp_yomi.png', image_es: 'U1/yomimono/U1_07_hokkaido_es_yomi.png' },
      { jp: 'honshu', es: 'honshu', image_jp: 'U1/yomimono/U1_08_honshu_jp_yomi.png', image_es: 'U1/yomimono/U1_08_honshu_es_yomi.png' },
      { jp: 'shikoku', es: 'shikoku', image_jp: 'U1/yomimono/U1_09_shikoku_jp_yomi.png', image_es: 'U1/yomimono/U1_09_shikoku_es_yomi.png' },
      { jp: 'kyushu', es: 'kyushu', image_jp: 'U1/yomimono/U1_10_kyushu_jp_yomi.png', image_es: 'U1/yomimono/U1_10_kyushu_es_yomi.png' },
      { jp: 'zentai', es: 'zentai', image_jp: 'U1/yomimono/U1_11_zentai_jp_yomi.png', image_es: 'U1/yomimono/U1_11_zentai_es_yomi.png' },
      { jp: 'bunnoichi', es: 'bunnoichi', image_jp: 'U1/yomimono/U1_12_bunnoichi_jp_yomi.png', image_es: 'U1/yomimono/U1_12_bunnoichi_es_yomi.png' },
      { jp: 'todofuken', es: 'todofuken', image_jp: 'U1/yomimono/U1_13_todofuken_jp_yomi.png', image_es: 'U1/yomimono/U1_13_todofuken_es_yomi.png' },
      { jp: 'shuto', es: 'shuto', image_jp: 'U1/yomimono/U1_14_shuto_jp_yomi.png', image_es: 'U1/yomimono/U1_14_shuto_es_yomi.png' },
      { jp: 'senso', es: 'senso', image_jp: 'U1/yomimono/U1_15_senso_jp_yomi.png', image_es: 'U1/yomimono/U1_15_senso_es_yomi.png' },
      { jp: 'heiwa', es: 'heiwa', image_jp: 'U1/yomimono/U1_16_heiwa_jp_yomi.png', image_es: 'U1/yomimono/U1_16_heiwa_es_yomi.png' },
      { jp: 'tsutaeru', es: 'tsutaeru', image_jp: 'U1/yomimono/U1_17_tsutaeru_jp_yomi.png', image_es: 'U1/yomimono/U1_17_tsutaeru_es_yomi.png' },
      { jp: 'genbaku', es: 'genbaku', image_jp: 'U1/yomimono/U1_18_genbaku_jp_yomi.png', image_es: 'U1/yomimono/U1_18_genbaku_es_yomi.png' },
      { jp: 'kiko', es: 'kiko', image_jp: 'U1/yomimono/U1_19_kiko_jp_yomi.png', image_es: 'U1/yomimono/U1_19_kiko_es_yomi.png' },
      { jp: 'hi', es: 'hi', image_jp: 'U1/yomimono/U1_20_hi_jp_yomi.png', image_es: 'U1/yomimono/U1_20_hi_es_yomi.png' },
      { jp: 'kion', es: 'kion', image_jp: 'U1/yomimono/U1_21_kion_jp_yomi.png', image_es: 'U1/yomimono/U1_21_kion_es_yomi.png' },
      { jp: 'sa', es: 'sa', image_jp: 'U1/yomimono/U1_22_sa_jp_yomi.png', image_es: 'U1/yomimono/U1_22_sa_es_yomi.png' },
      { jp: 'sakura', es: 'sakura', image_jp: 'U1/yomimono/U1_23_sakura_jp_yomi.png', image_es: 'U1/yomimono/U1_23_sakura_es_yomi.png' },
      { jp: 'owari', es: 'owari', image_jp: 'U1/yomimono/U1_24_owari_jp_yomi.png', image_es: 'U1/yomimono/U1_24_owari_es_yomi.png' },
      { jp: 'hitobito', es: 'hitobito', image_jp: 'U1/yomimono/U1_25_hitobito_jp_yomi.png', image_es: 'U1/yomimono/U1_25_hitobito_es_yomi.png' },
      { jp: 'tanoshimu', es: 'tanoshimu', image_jp: 'U1/yomimono/U1_26_tanoshimu_jp_yomi.png', image_es: 'U1/yomimono/U1_26_tanoshimu_es_yomi.png' },
      { jp: 'meisho', es: 'meisho', image_jp: 'U1/yomimono/U1_27_meisho_jp_yomi.png', image_es: 'U1/yomimono/U1_27_meisho_es_yomi.png' },
      { jp: 'tatoeba', es: 'tatoeba', image_jp: 'U1/yomimono/U1_28_tatoeba_jp_yomi.png', image_es: 'U1/yomimono/U1_28_tatoeba_es_yomi.png' },
      { jp: 'mottomo', es: 'mottomo', image_jp: 'U1/yomimono/U1_29_mottomo_jp_yomi.png', image_es: 'U1/yomimono/U1_29_mottomo_es_yomi.png' },
      { jp: 'utsukushii', es: 'utsukushii', image_jp: 'U1/yomimono/U1_30_utsukushii_jp_yomi.png', image_es: 'U1/yomimono/U1_30_utsukushii_es_yomi.png' },
      { jp: 'oshiro', es: 'oshiro', image_jp: 'U1/yomimono/U1_31_oshiro_jp_yomi.png', image_es: 'U1/yomimono/U1_31_oshiro_es_yomi.png' },
      { jp: 'mae', es: 'mae', image_jp: 'U1/yomimono/U1_32_mae_jp_yomi.png', image_es: 'U1/yomimono/U1_32_mae_es_yomi.png' },
      { jp: 'kabe', es: 'kabe', image_jp: 'U1/yomimono/U1_33_kabe_jp_yomi.png', image_es: 'U1/yomimono/U1_33_kabe_es_yomi.png' },
      { jp: 'nokoru', es: 'nokoru', image_jp: 'U1/yomimono/U1_34_nokoru_jp_yomi.png', image_es: 'U1/yomimono/U1_34_nokoru_es_yomi.png' },
      { jp: 'tatemono', es: 'tatemono', image_jp: 'U1/yomimono/U1_35_tatemono_jp_yomi.png', image_es: 'U1/yomimono/U1_35_tatemono_es_yomi.png' },
      { jp: 'katachi', es: 'katachi', image_jp: 'U1/yomimono/U1_36_katachi_jp_yomi.png', image_es: 'U1/yomimono/U1_36_katachi_es_yomi.png' },
      { jp: 'satsuei', es: 'satsuei', image_jp: 'U1/yomimono/U1_37_satsuei_jp_yomi.png', image_es: 'U1/yomimono/U1_37_satsuei_es_yomi.png' },
      { jp: 'kanko', es: 'kanko', image_jp: 'U1/yomimono/U1_38_kanko_jp_yomi.png', image_es: 'U1/yomimono/U1_38_kanko_es_yomi.png' },
      { jp: 'mokuteki', es: 'mokuteki', image_jp: 'U1/yomimono/U1_39_mokuteki_jp_yomi.png', image_es: 'U1/yomimono/U1_39_mokuteki_es_yomi.png' },
      { jp: 'rirakkusu', es: 'rirakkusu', image_jp: 'U1/yomimono/U1_40_rirakkusu_jp_yomi.png', image_es: 'U1/yomimono/U1_40_rirakkusu_es_yomi.png' },
      { jp: 'keshiki', es: 'keshiki', image_jp: 'U1/yomimono/U1_41_keshiki_jp_yomi.png', image_es: 'U1/yomimono/U1_41_keshiki_es_yomi.png' },
      { jp: 'tokuni', es: 'tokuni', image_jp: 'U1/yomimono/U1_42_tokuni_jp_yomi.png', image_es: 'U1/yomimono/U1_42_tokuni_es_yomi.png' },
      { jp: 'shi', es: 'shi', image_jp: 'U1/yomimono/U1_43_shi_jp_yomi.png', image_es: 'U1/yomimono/U1_43_shi_es_yomi.png' },
      { jp: 'kai', es: 'kai', image_jp: 'U1/yomimono/U1_44_kai_jp_yomi.png', image_es: 'U1/yomimono/U1_44_kai_es_yomi.png' },
      { jp: 'kengaku', es: 'kengaku', image_jp: 'U1/yomimono/U1_45_kengaku_jp_yomi.png', image_es: 'U1/yomimono/U1_45_kengaku_es_yomi.png' }
    ]
  },
  承知いたしました。第2課（U2）の「読み物」（topic: 'yomi'）のデータをご提供いただいたファイル名とナンバリングに基づいて追加します。

このデータは、既存の第2課のプレースホルダーを置き換える形で挿入します。

✅ 第2課データの修正案
💻 修正点
既存の第2課のプレースホルダー（会話と読み物）を削除します。

第2課の「読み物」（topic: 'yomi'）ブロックを新規作成し、ご提供のリストに従って単語とパス（U2/yomimono/）を定義します。

今回は会話データがないため、第2課の「会話」（topic: 'kaiwa'）については後で追加するためのプレースホルダーを残しておきます。

📄 修正後の cardData（抜粋）
以下のコードを、あなたのdata.jsファイルの第1課と第3課の間に正確に挿入してください。

JavaScript

// ===================================
// == 第2課のデータ (読み物追加、会話はプレースホルダー) ==
// ===================================

// 第2課 会話 (プレースホルダーを維持)
{ lesson: 2, topic: 'kaiwa', words: [ { jp: '第2課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },

// 第2課 読み物 (新規追加)
{ 
    lesson: 2, 
    topic: 'yomi', 
    words: [ 
      { jp: 'keigo', es: 'Lenguaje honorífico', image_jp: 'U2/yomimono/U2_01_keigo_jp_yomi.png', image_es: 'U2/yomimono/U2_01_keigo_es_yomi.png' },
      { jp: 'kudaketa', es: 'Lenguaje informal', image_jp: 'U2/yomimono/U2_02_kudaketa_jp_yomi.png', image_es: 'U2/yomimono/U2_02_kudaketa_es_yomi.png' },
      { jp: 'jitsuwa', es: 'En realidad', image_jp: 'U2/yomimono/U2_03_jitsuwa_jp_yomi.png', image_es: 'U2/yomimono/U2_03_jitsuwa_es_yomi.png' },
      { jp: 'fukuzatsu', es: 'Complicado', image_jp: 'U2/yomimono/U2_04_fukuzatsu_jp_yomi.png', image_es: 'U2/yomimono/U2_04_fukuzatsu_es_yomi.png' },
      { jp: 'kimari', es: 'Regla', image_jp: 'U2/yomimono/U2_05_kimari_jp_yomi.png', image_es: 'U2/yomimono/U2_05_kimari_es_yomi.png' },
      { jp: 'ka', es: '（疑問詞）', image_jp: 'U2/yomimono/U2_06_ka_jp_yomi.png', image_es: 'U2/yomimono/U2_06_ka_es_yomi.png' },
      { jp: 'teinei', es: 'Educado', image_jp: 'U2/yomimono/U2_07_teinei_jp_yomi.png', image_es: 'U2/yomimono/U2_07_teinei_es_yomi.png' },
      { jp: 'tsukaiwake', es: 'Uso adecuado', image_jp: 'U2/yomimono/U2_08_tsukaiwake_jp_yomi.png', image_es: 'U2/yomimono/U2_08_tsukaiwake_es_yomi.png' },
      { jp: 'gengo', es: 'Idioma', image_jp: 'U2/yomimono/U2_09_gengo_jp_yomi.png', image_es: 'U2/yomimono/U2_09_gengo_es_yomi.png' },
      { jp: 'aite', es: 'Interlocutor', image_jp: 'U2/yomimono/U2_10_aite_jp_yomi.png', image_es: 'U2/yomimono/U2_10_aite_es_yomi.png' },
      { jp: 'kaeru', es: '変える', image_jp: 'U2/yomimono/U2_11_kaeru_jp_yomi.png', image_es: 'U2/yomimono/U2_11_kaeru_es_yomi.png' },
      { jp: 'bubun', es: 'Parte', image_jp: 'U2/yomimono/U2_12_bubun_jp_yomi.png', image_es: 'U2/yomimono/U2_12_bubun_es_yomi.png' },
      { jp: 'dansei', es: 'Hombre', image_jp: 'U2/yomimono/U2_13_dansei_jp_yomi.png', image_es: 'U2/yomimono/U2_13_dansei_es_yomi.png' },
      { jp: 'josei', es: 'Mujer', image_jp: 'U2/yomimono/U2_14_josei_jp_yomi.png', image_es: 'U2/yomimono/U2_14_josei_es_yomi.png' },
      { jp: 'kuraberu', es: '比べる', image_jp: 'U2/yomimono/U2_15_kuraberu_jp_yomi.png', image_es: 'U2/yomimono/U2_15_kuraberu_es_yomi.png' },
      { jp: 'bunmatsu', es: 'Final de la frase', image_jp: 'U2/yomimono/U2_16_bunmatsu_jp_yomi.png', image_es: 'U2/yomimono/U2_16_bunmatsu_es_yomi.png' },
      { jp: 'arawareru', es: '現れる', image_jp: 'U2/yomimono/U2_17_arawareru_jp_yomi.png', image_es: 'U2/yomimono/U2_17_arawareru_es_yomi.png' },
      { jp: 'anokata', es: 'Esa persona (formal)', image_jp: 'U2/yomimono/U2_18_anokata_jp_yomi.png', image_es: 'U2/yomimono/U2_18_anokata_es_yomi.png' },
      { jp: 'aitsu', es: 'Ese tipo (muy informal)', image_jp: 'U2/yomimono/U2_19_aitsu_jp_yomi.png', image_es: 'U2/yomimono/U2_19_aitsu_es_yomi.png' },
      { jp: 'kanji', es: 'Sentimiento', image_jp: 'U2/yomimono/U2_20_kanji_jp_yomi.png', image_es: 'U2/yomimono/U2_20_kanji_es_yomi.png' },
      { jp: 'ooku', es: '多くの', image_jp: 'U2/yomimono/U2_21_ooku_jp_yomi.png', image_es: 'U2/yomimono/U2_21_ooku_es_yomi.png' },
      { jp: 'bamen', es: 'Escena / Situación', image_jp: 'U2/yomimono/U2_22_bamen_jp_yomi.png', image_es: 'U2/yomimono/U2_22_bamen_es_yomi.png' },
      { jp: 'kansatsu', es: 'Observación', image_jp: 'U2/yomimono/U2_23_kansatsu_jp_yomi.png', image_es: 'U2/yomimono/U2_23_kansatsu_es_yomi.png' },
      { jp: 'omote', es: 'Parte frontal', image_jp: 'U2/yomimono/U2_24_omote_jp_yomi.png', image_es: 'U2/yomimono/U2_24_omote_es_yomi.png' },
      { jp: 'danjo', es: 'Hombres y mujeres', image_jp: 'U2/yomimono/U2_25_danjo_jp_yomi.png', image_es: 'U2/yomimono/U2_25_danjo_es_yomi.png' },
      { jp: 'ore', es: 'Yo (informal masculino)', image_jp: 'U2/yomimono/U2_26_ore_jp_yomi.png', image_es: 'U2/yomimono/U2_26_ore_es_yomi.png' },
      { jp: 'konoatari', es: 'Alrededor de aquí', image_jp: 'U2/yomimono/U2_27_konoatari_jp_yomi.png', image_es: 'U2/yomimono/U2_27_konoatari_es_yomi.png' },
      { jp: 'ogoru', es: 'Invitar', image_jp: 'U2/yomimono/U2_28_ogoru_jp_yomi.png', image_es: 'U2/yomimono/U2_28_ogoru_es_yomi.png' },
      { jp: 'zuibun', es: 'Bastante', image_jp: 'U2/yomimono/U2_29_zuibun_jp_yomi.png', image_es: 'U2/yomimono/U2_29_zuibun_es_yomi.png' },
      { jp: 'moji', es: '文字', image_jp: 'U2/yomimono/U2_30_moji_jp_yomi.png', image_es: 'U2/yomimono/U2_30_moji_es_yomi.png' },
      { jp: 'koibito', es: 'Pareja', image_jp: 'U2/yomimono/U2_31_koibito_jp_yomi.png', image_es: 'U2/yomimono/U2_31_koibito_es_yomi.png' },
      { jp: 'rei', es: '例', image_jp: 'U2/yomimono/U2_32_rei_jp_yomi.png', image_es: 'U2/yomimono/U2_32_rei_es_yomi.png' },
      { jp: 'hyougen', es: '表現', image_jp: 'U2/yomimono/U2_33_hyougen_jp_yomi.png', image_es: 'U2/yomimono/U2_33_hyougen_es_yomi.png' },
      { jp: 'shouryaku', es: '省略', image_jp: 'U2/yomimono/U2_34_shouryaku_jp_yomi.png', image_es: 'U2/yomimono/U2_34_shouryaku_es_yomi.png' },
      { jp: 'tanshukukei', es: '短縮形', image_jp: 'U2/yomimono/U2_35_tanshukukei_jp_yomi.png', image_es: 'U2/yomimono/U2_35_tanshukukei_es_yomi.png' },
      { jp: 'saigo', es: '最後', image_jp: 'U2/yomimono/U2_36_saigo_jp_yomi.png', image_es: 'U2/yomimono/U2_36_saigo_es_yomi.png' },
      { jp: 'renraku', es: '連絡', image_jp: 'U2/yomimono/U2_37_renraku_jp_yomi.png', image_es: 'U2/yomimono/U2_37_renraku_es_yomi.png' },
      { jp: 'hakkiri', es: 'Claramente', image_jp: 'U2/yomimono/U2_38_hakkiri_jp_yomi.png', image_es: 'U2/yomimono/U2_38_hakkiri_es_yomi.png' },
      { jp: 'sasou', es: '誘う', image_jp: 'U2/yomimono/U2_39_sasou_jp_yomi.png', image_es: 'U2/yomimono/U2_39_sasou_es_yomi.png' },
      { jp: 'kotowaru', es: '断る', image_jp: 'U2/yomimono/U2_40_kotowaru_jp_yomi.png', image_es: 'U2/yomimono/U2_40_kotowaru_es_yomi.png' },
      { jp: 'tsugouwarui', es: '不都合', image_jp: 'U2/yomimono/U2_41_tsugouwarui_jp_yomi.png', image_es: 'U2/yomimono/U2_41_tsugouwarui_es_yomi.png' },
      { jp: 'kibun', es: '気分', image_jp: 'U2/yomimono/U2_42_kibun_jp_yomi.png', image_es: 'U2/yomimono/U2_42_kibun_es_yomi.png' },
      { jp: 'onegai', es: '願い', image_jp: 'U2/yomimono/U2_43_onegai_jp_yomi.png', image_es: 'U2/yomimono/U2_43_onegai_es_yomi.png' },
      { jp: 'taisetsunisuru', es: '大切にする', image_jp: 'U2/yomimono/U2_44_taisetsunisuru_jp_yomi.png', image_es: 'U2/yomimono/U2_44_taisetsunisuru_es_yomi.png' },
      { jp: 'hanashikotoba', es: '話し言葉', image_jp: 'U2/yomimono/U2_45_hanashikotoba_jp_yomi.png', image_es: 'U2/yomimono/U2_45_hanashikotoba_es_yomi.png' },
      { jp: 'kantanna', es: '簡単な', image_jp: 'U2/yomimono/U2_46_kantanna_jp_yomi.png', image_es: 'U2/yomimono/U2_46_kantanna_es_yomi.png' },
      { jp: 'kouiu', es: 'こういう', image_jp: 'U2/yomimono/U2_47_kouiu_jp_yomi.png', image_es: 'U2/yomimono/U2_47_kouiu_es_yomi.png' },
      { jp: 'nareru', es: '慣れる', image_jp: 'U2/yomimono/U2_48_nareru_jp_yomi.png', image_es: 'U2/yomimono/U2_48_nareru_es_yomi.png' },
      { jp: 'funiki', es: '雰囲気', image_jp: 'U2/yomimono/U2_49_funiki_jp_yomi.png', image_es: 'U2/yomimono/U2_49_funiki_es_yomi.png' },
      { jp: 'riyuu', es: '理由', image_jp: 'U2/yomimono/U2_50_riyuu_jp_yomi.png', image_es: 'U2/yomimono/U2_50_riyuu_es_yomi.png' },
      { jp: 'joukyou', es: '状況', image_jp: 'U2/yomimono/U2_51_joukyou_jp_yomi.png', image_es: 'U2/yomimono/U2_51_joukyou_es_yomi.png' },
      { jp: 'konoyouna', es: 'このような', image_jp: 'U2/yomimono/U2_52_konoyouna_jp_yomi.png', image_es: 'U2/yomimono/U2_52_konoyouna_es_yomi.png' },
      { jp: 'tokuchou', es: '特徴', image_jp: 'U2/yomimono/U2_53_tokuchou_jp_yomi.png', image_es: 'U2/yomimono/U2_53_tokuchou_es_yomi.png' },
      { jp: 'tokuchou_kakikotoba', es: '特徴（書き言葉）', image_jp: 'U2/yomimono/U2_54_tokuchou_kakikotoba_jp_yomi.png', image_es: 'U2/yomimono/U2_54_tokuchou_kakikotoba_es_yomi.png' },
      { jp: 'hitsuyou', es: '必要', image_jp: 'U2/yomimono/U2_55_hitsuyou_jp_yomi.png', image_es: 'U2/yomimono/U2_55_hitsuyou_es_yomi.png' },
      { jp: 'keitai', es: '形態', image_jp: 'U2/yomimono/U2_56_keitai_jp_yomi.png', image_es: 'U2/yomimono/U2_56_keitai_es_yomi.png' },
      { jp: 'futsuu', es: '普通', image_jp: 'U2/yomimono/U2_57_futsuu_jp_yomi.png', image_es: 'U2/yomimono/U2_57_futsuu_es_yomi.png' },
      { jp: 'tai', es: '体', image_jp: 'U2/yomimono/U2_58_tai_jp_yomi.png', image_es: 'U2/yomimono/U2_58_tai_es_yomi.png' },
      { jp: 'ronbun', es: '論文', image_jp: 'U2/yomimono/U2_59_ronbun_jp_yomi.png', image_es: 'U2/yomimono/U2_59_ronbun_es_yomi.png' },
      { jp: 'kyoumikubukai', es: '興味深い', image_jp: 'U2/yomimono/U2_60_kyoumikubukai_jp_yomi.png', image_es: 'U2/yomimono/U2_60_kyoumikubukai_es_yomi.png' },
      { jp: 'kakikotoba_hanashikotobateki', es: '書き言葉・話し言葉的', image_jp: 'U2/yomimono/U2_61_kakikotoba_hanashikotobateki_jp_yomi.png', image_es: 'U2/yomimono/U2_61_kakikotoba_hanashikotobateki_es_yomi.png' },
      { jp: 'au', es: '合う', image_jp: 'U2/yomimono/U2_62_au_jp_yomi.png', image_es: 'U2/yomimono/U2_62_au_es_yomi.png' }
    ] 
},
  // ===================================
  // == 第3課のデータ (新規追加) ==
  // ===================================
{ 
    lesson: 3, 
   topic: 'yomi', 
    words: [ 
    { jp: 'gijutsu', es: 'Tecnología', image_jp: 'U3/yomimono/U3_01_gijutsu_jp_yomi.png', image_es: 'U3/yomimono/U3_01_gijutsu_es_yomi.png' },
      { jp: 'hattatsu', es: 'Desarrollo', image_jp: 'U3/yomimono/U3_02_hattatsu_jp_yomi.png', image_es: 'U3/yomimono/U3_02_hattatsu_es_yomi.png' },
      { jp: 'kaijou', es: 'Lugar de reunión', image_jp: 'U3/yomimono/U3_03_kaijou_jp_yomi.png', image_es: 'U3/yomimono/U3_03_kaijou_es_yomi.png' },
      { jp: 'nigaoue', es: 'Retrato', image_jp: 'U3/yomimono/U3_04_nigaoue_jp_yomi.png', image_es: 'U3/yomimono/U3_04_nigaoue_es_yomi.png' },
      { jp: 'kaku', es: 'Dibujar', image_jp: 'U3/yomimono/U3_05_kaku_jp_yomi.png', image_es: 'U3/yomimono/U3_05_kaku_es_yomi.png' },
      { jp: 'kumo', es: 'Nube', image_jp: 'U3/yomimono/U3_06_kumo_jp_yomi.png', image_es: 'U3/yomimono/U3_06_kumo_es_yomi.png' },
      { jp: 'tenjou', es: 'Techo', image_jp: 'U3/yomimono/U3_07_tenjou_jp_yomi.png', image_es: 'U3/yomimono/U3_07_tenjou_es_yomi.png' },
      { jp: 'shujutsu', es: 'Operación', image_jp: 'U3/yomimono/U3_08_shujutsu_jp_yomi.png', image_es: 'U3/yomimono/U3_08_shujutsu_es_yomi.png' },
      { jp: 'sudeni', es: 'Ya', image_jp: 'U3/yomimono/U3_09_sudeni_jp_yomi.png', image_es: 'U3/yomimono/U3_09_sudeni_es_yomi.png' },
      { jp: 'jissaini', es: 'De hecho', image_jp: 'U3/yomimono/U3_10_jissaini_jp_yomi.png', image_es: 'U3/yomimono/U3_10_jissaini_es_yomi.png' },
      { jp: 'shakai', es: '社会', image_jp: 'U3/yomimono/U3_11_shakai_jp_yomi.png', image_es: 'U3/yomimono/U3_11_shakai_es_yomi.png' },
      { jp: 'katsuyaku', es: 'Estar activo', image_jp: 'U3/yomimono/U3_12_katsuyaku_jp_yomi.png', image_es: 'U3/yomimono/U3_12_katsuyaku_es_yomi.png' },
      { jp: 'rusuban', es: 'Cuidar la casa', image_jp: 'U3/yomimono/U3_13_rusuban_jp_yomi.png', image_es: 'U3/yomimono/U3_13_rusuban_es_yomi.png' },
      { jp: 'hakobu', es: 'Transportar', image_jp: 'U3/yomimono/U3_14_hakobu_jp_yomi.png', image_es: 'U3/yomimono/U3_14_hakobu_es_yomi.png' },
      { jp: 'ningen', es: 'Ser humano', image_jp: 'U3/yomimono/U3_15_ningen_jp_yomi.png', image_es: 'U3/yomimono/U3_15_ningen_es_yomi.png' },
      { jp: 'kurasu', es: 'Vivir', image_jp: 'U3/yomimono/U3_16_kurasu_jp_yomi.png', image_es: 'U3/yomimono/U3_16_kurasu_es_yomi.png' },
      { jp: 'toshi', es: 'Edad', image_jp: 'U3/yomimono/U3_17_toshi_jp_yomi.png', image_es: 'U3/yomimono/U3_17_toshi_es_yomi.png' },
      { jp: 'carehouse', es: 'Residencia de ancianos', image_jp: 'U3/yomimono/U3_18_carehouse_jp_yomi.png', image_es: 'U3/yomimono/U3_18_carehouse_es_yomi.png' },
    ]
  },
  // =============================================
  // == ▼▼▼ 第2課～第15課のテスト用データ ▼▼▼ ==
  // =============================================
  { lesson: 2, topic: 'kaiwa', words: [ { jp: '第2課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 2, topic: 'yomi', words: [ { jp: '第2課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 3, topic: 'kaiwa', words: [ { jp: '第3課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 3, topic: 'yomi', words: [ { jp: '第3課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  {
    lesson: 4,
    topic: 'kaiwa',
    words: [
      { jp: 'bukatsu', es: 'bukatsu', image_jp: 'U4/kaiwa/U4_01_bukatsu_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_01_bukatsu_es_kaiwa.png' },
      { jp: 'bu', es: 'bu', image_jp: 'U4/kaiwa/U4_02_bu_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_02_bu_es_kaiwa.png' },
      { jp: 'senpai', es: 'senpai', image_jp: 'U4/kaiwa/U4_03_senpai_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_03_senpai_es_kaiwa.png' },
      { jp: 'kouhai', es: 'kouhai', image_jp: 'U4/kaiwa/U4_04_kouhai_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_04_kouhai_es_kaiwa.png' },
      { jp: 'kankei', es: 'kankei', image_jp: 'U4/kaiwa/U4_05_kankei_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_05_kankei_es_kaiwa.png' },
      { jp: 'nyuubu', es: 'nyuubu', image_jp: 'U4/kaiwa/U4_06_nyuubu_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_06_nyuubu_es_kaiwa.png' },
      { jp: 'buin', es: 'buin', image_jp: 'U4/kaiwa/U4_07_buin_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_07_buin_es_kaiwa.png' },
      { jp: 'kyuukei', es: 'kyuukei', image_jp: 'U4/kaiwa/U4_08_kyuukei_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_08_kyuukei_es_kaiwa.png' },
      { jp: 'saakuru', es: 'saakuru', image_jp: 'U4/kaiwa/U4_09_saakuru_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_09_saakuru_es_kaiwa.png' },
      { jp: 'kuwashii', es: 'kuwashii', image_jp: 'U4/kaiwa/U4_10_kuwashii_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_10_kuwashii_es_kaiwa.png' },
      { jp: 'saseteitadakemasenka', es: 'saseteitadakemasenka', image_jp: 'U4/kaiwa/U4_11_saseteitadakemasenka_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_11_saseteitadakemasenka_es_kaiwa.png' },
      { jp: 'hantoshi', es: 'hantoshi', image_jp: 'U4/kaiwa/U4_12_hantoshi_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_12_hantoshi_es_kaiwa.png' },
      { jp: 'obi', es: 'obi', image_jp: 'U4/kaiwa/U4_13_obi_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_13_obi_es_kaiwa.png' },
      { jp: 'dougu', es: 'dougu', image_jp: 'U4/kaiwa/U4_14_dougu_jp_kaiwa.png', image_es: 'U4/kaiwa/U4_14_dougu_es_kaiwa.png' }
    ]
  },
  {
    lesson: 4,
    topic: 'yomi',
    words: [
      { jp: 'wotooshite', es: 'wotooshite', image_jp: 'U4/yomimono/U4_01_wotooshite_jp_yomi.png', image_es: 'U4/yomimono/U4_01_wotooshite_es_yomi.png' },
      { jp: 'manabu', es: 'manabu', image_jp: 'U4/yomimono/U4_02_manabu_jp_yomi.png', image_es: 'U4/yomimono/U4_02_manabu_es_yomi.png' },
      { jp: 'gendai', es: 'gendai', image_jp: 'U4/yomimono/U4_03_gendai_jp_yomi.png', image_es: 'U4/yomimono/U4_03_gendai_es_yomi.png' },
      { jp: 'otoshiyori', es: 'otoshiyori', image_jp: 'U4/yomimono/U4_04_otoshiyori_jp_yomi.png', image_es: 'U4/yomimono/U4_04_otoshiyori_es_yomi.png' },
      { jp: 'shurui', es: 'shurui', image_jp: 'U4/yomimono/U4_05_shurui_jp_yomi.png', image_es: 'U4/yomimono/U4_05_shurui_es_yomi.png' },
      { jp: 'kenkou', es: 'kenkou', image_jp: 'U4/yomimono/U4_06_kenkou_jp_yomi.png', image_es: 'U4/yomimono/U4_06_kenkou_es_yomi.png' },
      { jp: 'bangumi', es: 'bangumi', image_jp: 'U4/yomimono/U4_07_bangumi_jp_yomi.png', image_es: 'U4/yomimono/U4_07_bangumi_es_yomi.png' },
      { jp: 'daihyouteki', es: 'daihyouteki', image_jp: 'U4/yomimono/U4_08_daihyouteki_jp_yomi.png', image_es: 'U4/yomimono/U4_08_daihyouteki_es_yomi.png' },
      { jp: 'sumou', es: 'sumou', image_jp: 'U4/yomimono/U4_09_sumou_jp_yomi.png', image_es: 'U4/yomimono/U4_09_sumou_es_yomi.png' },
      { jp: 'kokunai', es: 'kokunai', image_jp: 'U4/yomimono/U4_10_kokunai_jp_yomi.png', image_es: 'U4/yomimono/U4_10_kokunai_es_yomi.png' },
      { jp: 'shiai', es: 'shiai', image_jp: 'U4/yomimono/U4_11_shiai_jp_yomi.png', image_es: 'U4/yomimono/U4_11_shiai_es_yomi.png' },
      { jp: 'senshu', es: 'senshu', image_jp: 'U4/yomimono/U4_12_senshu_jp_yomi.png', image_es: 'U4/yomimono/U4_12_senshu_es_yomi.png' },
      { jp: 'subete', es: 'subete', image_jp: 'U4/yomimono/U4_13_subete_jp_yomi.png', image_es: 'U4/yomimono/U4_13_subete_es_yomi.png' },
      { jp: 'kansen', es: 'kansen', image_jp: 'U4/yomimono/U4_14_kansen_jp_yomi.png', image_es: 'U4/yomimono/U4_14_kansen_es_yomi.png' },
      { jp: 'katsu', es: 'katsu', image_jp: 'U4/yomimono/U4_15_katsu_jp_yomi.png', image_es: 'U4/yomimono/U4_15_katsu_es_yomi.png' },
      { jp: 'seichou', es: 'seichou', image_jp: 'U4/yomimono/U4_16_seichou_jp_yomi.png', image_es: 'U4/yomimono/U4_16_seichou_es_yomi.png' },
      { jp: 'egao', es: 'egao', image_jp: 'U4/yomimono/U4_17_egao_jp_yomi.png', image_es: 'U4/yomimono/U4_17_egao_es_yomi.png' },
      { jp: 'oogoe', es: 'oogoe', image_jp: 'U4/yomimono/U4_18_oogoe_jp_yomi.png', image_es: 'U4/yomimono/U4_18_oogoe_es_yomi.png' },
      { jp: 'sakebu', es: 'sakebu', image_jp: 'U4/yomimono/U4_19_sakebu_jp_yomi.png', image_es: 'U4/yomimono/U4_19_sakebu_es_yomi.png' },
      { jp: 'makeru', es: 'makeru', image_jp: 'U4/yomimono/U4_20_makeru_jp_yomi.png', image_es: 'U4/yomimono/U4_20_makeru_es_yomi.png' },
      { jp: 'kuyashii', es: 'kuyashii', image_jp: 'U4/yomimono/U4_21_kuyashii_jp_yomi.png', image_es: 'U4/yomimono/U4_21_kuyashii_es_yomi.png' },
      { jp: 'wobakanisuru', es: 'wobakanisuru', image_jp: 'U4/yomimono/U4_22_wobakanisuru_jp_yomi.png', image_es: 'U4/yomimono/U4_22_wobakanisuru_es_yomi.png' },
      { jp: 'zettaini', es: 'zettaini', image_jp: 'U4/yomimono/U4_23_zettaini_jp_yomi.png', image_es: 'U4/yomimono/U4_23_zettaini_es_yomi.png' },
      { jp: 'budou', es: 'budou', image_jp: 'U4/yomimono/U4_24_budou_jp_yomi.png', image_es: 'U4/yomimono/U4_24_budou_es_yomi.png' },
      { jp: 'rei', es: 'rei', image_jp: 'U4/yomimono/U4_25_rei_jp_yomi.png', image_es: 'U4/yomimono/U4_25_rei_es_yomi.png' },
      { jp: 'nimukatte', es: 'nimukatte', image_jp: 'U4/yomimono/U4_26_nimukatte_jp_yomi.png', image_es: 'U4/yomimono/U4_26_nimukatte_es_yomi.png' },
      { jp: 'otagaini', es: 'otagaini', image_jp: 'U4/yomimono/U4_27_otagaini_jp_yomi.png', image_es: 'U4/yomimono/U4_27_otagaini_es_yomi.png' },
      { jp: 'aisatsu', es: 'aisatsu', image_jp: 'U4/yomimono/U4_28_aisatsu_jp_yomi.png', image_es: 'U4/yomimono/U4_28_aisatsu_es_yomi.png' },
      { jp: 'sonkei', es: 'sonkei', image_jp: 'U4/yomimono/U4_29_sonkei_jp_yomi.png', image_es: 'U4/yomimono/U4_29_sonkei_es_yomi.png' },
      { jp: 'kansha', es: 'kansha', image_jp: 'U4/yomimono/U4_30_kansha_jp_yomi.png', image_es: 'U4/yomimono/U4_30_kansha_es_yomi.png' },
      { jp: 'arawasu', es: 'arawasu', image_jp: 'U4/yomimono/U4_31_arawasu_jp_yomi.png', image_es: 'U4/yomimono/U4_31_arawasu_es_yomi.png' },
      { jp: 'fukumu', es: 'fukumu', image_jp: 'U4/yomimono/U4_32_fukumu_jp_yomi.png', image_es: 'U4/yomimono/U4_32_fukumu_es_yomi.png' },
      { jp: 'reigitadashii', es: 'reigitadashii', image_jp: 'U4/yomimono/U4_33_reigitadashii_jp_yomi.png', image_es: 'U4/yomimono/U4_33_reigitadashii_es_yomi.png' },
      { jp: 'sodatsu', es: 'sodatsu', image_jp: 'U4/yomimono/U4_34_sodatsu_jp_yomi.png', image_es: 'U4/yomimono/U4_34_sodatsu_es_yomi.png' },
      { jp: 'kayou', es: 'kayou', image_jp: 'U4/yomimono/U4_35_kayou_jp_yomi.png', image_es: 'U4/yomimono/U4_35_kayou_es_yomi.png' },
      { jp: 'seishin', es: 'seishin', image_jp: 'U4/yomimono/U4_36_seishin_jp_yomi.png', image_es: 'U4/yomimono/U4_36_seishin_es_yomi.png' },
      { jp: 'nouryoku', es: 'nouryoku', image_jp: 'U4/yomimono/U4_37_nouryoku_jp_yomi.png', image_es: 'U4/yomimono/U4_37_nouryoku_es_yomi.png' },
      { jp: 'puree', es: 'puree', image_jp: 'U4/yomimono/U4_38_puree_jp_yomi.png', image_es: 'U4/yomimono/U4_38_puree_es_yomi.png' },
      { jp: 'oru', es: 'oru', image_jp: 'U4/yomimono/U4_39_oru_jp_yomi.png', image_es: 'U4/yomimono/U4_39_oru_es_yomi.png' },
      { jp: 'utsu', es: 'utsu', image_jp: 'U4/yomimono/U4_40_utsu_jp_yomi.png', image_es: 'U4/yomimono/U4_40_utsu_es_yomi.png' },
      { jp: 'nageru', es: 'nageru', image_jp: 'U4/yomimono/U4_41_nageru_jp_yomi.png', image_es: 'U4/yomimono/U4_41_nageru_es_yomi.png' },
      { jp: 'odoroku', es: 'odoroku', image_jp: 'U4/yomimono/U4_42_odoroku_jp_yomi.png', image_es: 'U4/yomimono/U4_42_odoroku_es_yomi.png' },
      { jp: 'ataeru', es: 'ataeru', image_jp: 'U4/yomimono/U4_43_ataeru_jp_yomi.png', image_es: 'U4/yomimono/U4_43_ataeru_es_yomi.png' },
      { jp: 'kin', es: 'kin', image_jp: 'U4/yomimono/U4_44_kin_jp_yomi.png', image_es: 'U4/yomimono/U4_44_kin_es_yomi.png' },
      { jp: 'sodateru', es: 'sodateru', image_jp: 'U4/yomimono/U4_45_sodateru_jp_yomi.png', image_es: 'U4/yomimono/U4_45_sodateru_es_yomi.png' },
      { jp: 'seki', es: 'seki', image_jp: 'U4/yomimono/U4_46_seki_jp_yomi.png', image_es: 'U4/yomimono/U4_46_seki_es_yomi.png' },
      { jp: 'yuzuru', es: 'yuzuru', image_jp: 'U4/yomimono/U4_47_yuzuru_jp_yomi.png', image_es: 'U4/yomimono/U4_47_yuzuru_es_yomi.png' },
      { jp: 'mayou', es: 'mayou', image_jp: 'U4/yomimono/U4_48_mayou_jp_yomi.png', image_es: 'U4/yomimono/U4_48_mayou_es_yomi.png' },
      { jp: 'ippantekina', es: 'ippantekina', image_jp: 'U4/yomimono/U4_49_ippantekina_jp_yomi.png', image_es: 'U4/yomimono/U4_49_ippantekina_es_yomi.png' }
    ]
  },
  { lesson: 5, topic: 'kaiwa', words: [ { jp: '第5課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 5, topic: 'yomi', words: [ { jp: '第5課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 6, topic: 'kaiwa', words: [ { jp: '第6課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 6, topic: 'yomi', words: [ { jp: '第6課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 7, topic: 'kaiwa', words: [ { jp: '第7課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 7, topic: 'yomi', words: [ { jp: '第7課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 8, topic: 'kaiwa', words: [ { jp: '第8課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 8, topic: 'yomi', words: [ { jp: '第8課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 9, topic: 'kaiwa', words: [ { jp: '第9課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 9, topic: 'yomi', words: [ { jp: '第9課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 10, topic: 'kaiwa', words: [ { jp: '第10課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 10, topic: 'yomi', words: [ { jp: '第10課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 11, topic: 'kaiwa', words: [ { jp: '第11課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 11, topic: 'yomi', words: [ { jp: '第11課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 12, topic: 'kaiwa', words: [ { jp: '第12課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 12, topic: 'yomi', words: [ { jp: '第12課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 13, topic: 'kaiwa', words: [ { jp: '第13課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 13, topic: 'yomi', words: [ { jp: '第13課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 14, topic: 'kaiwa', words: [ { jp: '第14課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 14, topic: 'yomi', words: [ { jp: '第14課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 15, topic: 'kaiwa', words: [ { jp: '第15課会話テスト', es: 'Prueba', image_jp: '', image_es: '' } ] },
  { lesson: 15, topic: 'yomi', words: [ { jp: '第15課読物テスト', es: 'Prueba', image_jp: '', image_es: '' } ] }
];







