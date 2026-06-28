// DATASET KOTOBA INTEGRASI PENUH DARI FILE EXCEL
const flashcardDataset = [
    { ruby: "<ruby>一般衛生管理<rt>いっぱんえいせいかんり</rt></ruby>", arti: "Sanitasi dasar", cat: "衛生" },
    { ruby: "<ruby>個人の衛生<rt>こじんのえいせい</rt></ruby>", arti: "Kebersihan diri", cat: "衛生" },
    { ruby: "<ruby>手洗い<rt>てあらい</rt></ruby>", arti: "Mencuci tangan", cat: "衛生" },
    { ruby: "<ruby>消毒<rt>しょうどく</rt></ruby>", arti: "Disinfeksi/sterilisasi", cat: "衛生" },
    { ruby: "<ruby>粘着ローラー<rt>ねんちゃくろーらー</rt></ruby>", arti: "Rol perekat", cat: "衛生" },
    { ruby: "<ruby>作業着<rt>さぎょうぎ</rt></ruby>", arti: "Pakaian kerja", cat: "衛生" },
    { ruby: "<ruby>毛髪混入<rt>もうはつこんにゅう</rt></ruby>", arti: "Kontaminasi/kemasukan rambut", cat: "衛生" },
    { ruby: "<ruby>異物混入<rt>いぶつこんにゅう</rt></ruby>", arti: "Kontaminasi benda asing (rambut, plastik, logam, dll)", cat: "衛生" },
    { ruby: "<ruby>爪切り<rt>つめきり</rt></ruby>", arti: "Memotong kuku", cat: "衛生" },
    { ruby: "<ruby>健康状態<rt>けんこうじょうたい</rt></ruby>", arti: "Kondisi kesehatan", cat: "衛生" },
    { ruby: "<ruby>危害要因<rt>きがいよういん</rt></ruby>", arti: "Faktor bahaya (Hazard)", cat: "HACCP" },
    { ruby: "<ruby>重要管理点<rt>じゅうようかんりてん</rt></ruby>", arti: "CCP - Critical Control Point", cat: "HACCP" },
    { ruby: "<ruby>管理基準<rt>かんりきじゅん</rt></ruby>", arti: "Batas kritis / standar manajemen", cat: "HACCP" },
    { ruby: "<ruby>食中毒<rt>しょくちゅうどく</rt></ruby>", arti: "Keracunan makanan", cat: "HACCP" },
    { ruby: "<ruby>微生物<rt>びせいぶつ</rt></ruby>", arti: "Mikroorganisme / bakteri", cat: "HACCP" },
    { ruby: "<ruby>加熱死滅<rt>かねつしめつ</rt></ruby>", arti: "Sterilisasi/pembunuhan bakteri dengan pemanasan", cat: "HACCP" },
    { ruby: "<ruby>交差汚染<rt>こうさおせん</rt></ruby>", arti: "Kontaminasi silang", cat: "HACCP" },
    { ruby: "<ruby>温度管理<rt>おんどかんり</rt></ruby>", arti: "Manajemen suhu", cat: "HACCP" },
    { ruby: "<ruby>記録<rt>きろく</rt></ruby>", arti: "Dokumentasi data", cat: "HACCP" },
    { ruby: "<ruby>原材料<rt>げんざいりょう</rt></ruby>", arti: "Bahan baku / bahan mentah", cat: "生産" },
    { ruby: "<ruby>受け入れ<rt>うけいれ</rt></ruby>", arti: "Penerimaan (barang/bahan baku)", cat: "生産" },
    { ruby: "<ruby>保管<rt>ほかん</rt></ruby>", arti: "Penyimpanan", cat: "生産" },
    { ruby: "<ruby>冷蔵<rt>れいぞう</rt></ruby>", arti: "Pendinginan (biasanya suhu 0°C - 10°C)", cat: "生産" },
    { ruby: "<ruby>冷凍<rt>れいとう</rt></ruby>", arti: "Pembekuan (biasanya suhu di bawah -15°C)", cat: "生産" },
    { ruby: "<ruby>解凍<rt>かいとう</rt></ruby>", arti: "Pencairan (Thawing) bahan beku", cat: "生産" },
    { ruby: "<ruby>包装<rt>ほうそう</rt></ruby>", arti: "Pengemasan / pembungkusan", cat: "生産" },
    { ruby: "<ruby>出荷<rt>しゅっか</rt></ruby>", arti: "Distribusi barang jadi", cat: "生産" },
    { ruby: "<ruby>賞味期限<rt>しょうみきげん</rt></ruby>", arti: "Best before date", cat: "生産" },
    { ruby: "<ruby>消費期限<rt>しょうひきげん</rt></ruby>", arti: "Expiry date", cat: "生産" },
    { ruby: "<ruby>先入れ先出し<rt>さきいれさきだし</rt></ruby>", arti: "FIFO (First In First Out)", cat: "生産" },
    { ruby: "<ruby>調理する<rt>ちょうりする</rt></ruby>", arti: "memasak (ada kesan profesional dan pakai teknik tertentu)", cat: "生産" },
    { ruby: "<ruby>野菜<rt>やさい</rt></ruby>", arti: "sayuran", cat: "生産" },
    { ruby: "<ruby>果物<rt>くだもの</rt></ruby>", arti: "buah", cat: "生産" },
    { ruby: "<ruby>お肉<rt>おにく</rt></ruby>", arti: "daging", cat: "生産" },
    { ruby: "<ruby>お弁当<rt>おべんとう</rt></ruby>", arti: "makanan box", cat: "生産" },
    { ruby: "<ruby>生鮮食品<rt>せいせんしょくひん</rt></ruby>", arti: "makanan segar (sebutan lain 新鮮食品 / しんせんしょくひん)", cat: "生産" },
    { ruby: "<ruby>冷凍食品<rt>れいとうしょくひん</rt></ruby>", arti: "makanan beku, makanan frozen", cat: "生産" },
    { ruby: "<ruby>原材料<rt>げんざいりょう</rt></ruby>", arti: "bahan baku mentah", cat: "生産" },
    { ruby: "<ruby>生もの<rt>なまもの</rt></ruby>", arti: "makanan mentah", cat: "生産" },
    { ruby: "<ruby>畜産食料品<rt>ちくさんしょくりょうひん</rt></ruby>", arti: "bahan makanan hewani (telur, susu, dll)", cat: "生産" },
    { ruby: "<ruby>水産食料品<rt>すいさんしょくりょうひん</rt></ruby>", arti: "makanan berbahan ikan-ikanan", cat: "生産" },
    { ruby: "<ruby>野菜缶詰<rt>やさいかんづめ</rt></ruby>", arti: "sayuran kaleng", cat: "生産" },
    { ruby: "<ruby>果実缶詰<rt>かじつかんづめ</rt></ruby>", arti: "buah-buahan kaleng", cat: "生産" },
    { ruby: "<ruby>農産保存食料品<rt>のうさんほぜんしょくりょうひん</rt></ruby>", arti: "buah dan sayuran yang diawetkan", cat: "生産" },
    { ruby: "<ruby>調味料<rt>ちょうみりょう</rt></ruby>", arti: "bumbu", cat: "生産" },
    { ruby: "<ruby>糖類<rt>とうるい</rt></ruby>", arti: "gula (sebutan zat, untuk gula pasir disebut 砂糖 / さとう)", cat: "生産" },
    { ruby: "<ruby>精穀<rt>せいこく</rt></ruby>", arti: "biji-bijian", cat: "生産" },
    { ruby: "<ruby>穀物<rt>こくもつ</rt></ruby>", arti: "gandum", cat: "生産" },
    { ruby: "<ruby>製粉<rt>せいふん</rt></ruby>", arti: "pembuatan tepung dari biji-bijian", cat: "生産" },
    { ruby: "<ruby>パン<rt>ぱん</rt></ruby>", arti: "roti", cat: "生産" },
    { ruby: "<ruby>菓子<rt>かし</rt></ruby>", arti: "kue, cemilan", cat: "生産" },
    { ruby: "<ruby>動植物油脂<rt>どうぶつゆし</rt></ruby>", arti: "minyak hewani", cat: "生産" },
    { ruby: "<ruby>豚油脂<rt>ぶたゆし</rt></ruby>", arti: "minyak babi", cat: "生産" },
    { ruby: "<ruby>植物油脂<rt>しょくぶつゆし</rt></ruby>", arti: "minyak nabati", cat: "生産" },
    { ruby: "<ruby>仕分け<rt>しwake</rt></ruby>", arti: "proses memilah bahan", cat: "生産" },
    { ruby: "<ruby>包装<rt>ほうそう</rt></ruby>", arti: "pengepakan, pengemasan", cat: "生産" },
    { ruby: "<ruby>食材<rt>しょくざい</rt></ruby>", arti: "bahan makanan", cat: "生産" },
    { ruby: "<ruby>加工する<rt>かこうする</rt></ruby>", arti: "mengolah", cat: "生産" },
    { ruby: "<ruby>食材を加工する<rt>しょくざいをかこうする</rt></ruby>", arti: "mengolah bahan makanan", cat: "生産" },
    { ruby: "<ruby>魚の捌き方<rt>さかなのさばきかた</rt></ruby>", arti: "cara memotong ikan", cat: "生産" },
    { ruby: "<ruby>お肉の切り分け<rt>おにくのきりわけ</rt></ruby>", arti: "pemotongan bagian daging", cat: "生産" },
    { ruby: "<ruby>ベルトコンベアー<rt>べるとこんべあー</rt></ruby>", arti: "belt conveyor, mesin pembawa material", cat: "生産" },
    { ruby: "<ruby>ベルトコンベアーに乗せられて運ばれる<rt>べるとこんべあーにのせられてはこばれる</rt></ruby>", arti: "ditaruh dan diangkut belt conveyor", cat: "生産" },
    { ruby: "<ruby>ツヤ出し用<rt>つやだしよう</rt></ruby>", arti: "cairan pengkilap roti", cat: "生産" },
    { ruby: "<ruby>パン生地<rt>ぱんきじ</rt></ruby>", arti: "adonan roti", cat: "生産" },
    { ruby: "<ruby>塗る<rt>ぬる</rt></ruby>", arti: "mengoles", cat: "生産" },
    { ruby: "<ruby>パン生地にツヤ出し用の卵をハケで塗ったりします<rt>ぱんきじにつやだしようのたまごをはけでぬったりします</rt></ruby>", arti: "pan kiji ni tsuyadashiyou no tamago o hake de nuttari shimasu", cat: "生産" },
    { ruby: "<ruby>パウチ<rt>ぱうち</rt></ruby>", arti: "kantung", cat: "生産" },
    { ruby: "<ruby>パウチごとに分けられる<rt>ぱうちごとにわけられる</rt></ruby>", arti: "dipisah/dibagi tiap kemasan", cat: "生産" },
    { ruby: "<ruby>総菜<rt>そうざい</rt></ruby>", arti: "makanan jadi, makanan masak, makanan yang bisa langsung dimakan, lauk-pauk", cat: "生産" },
    { ruby: "<ruby>総菜を詰める<rt>そうざいをつめる</rt></ruby>", arti: "menaruh (mengepak ke dalam kemasan) makanan jadi", cat: "生産" },
    { ruby: "<ruby>シール<rt>しーる</rt></ruby>", arti: "label", cat: "生産" },
    { ruby: "<ruby>袋<rt>ふくろ</rt></ruby>", arti: "kantung", cat: "生産" },
    { ruby: "<ruby>パッケージや袋に表示シールを貼る<rt>ぱっけーじやふくろにひょうじしーるをはる</rt></ruby>", arti: "menempelkan label pada kemasan atau kantung", cat: "生産" },
    { ruby: "<ruby>蓋<rt>ふた</rt></ruby>", arti: "tutup kemasan (tutup botol, dll)", cat: "生産" },
    { ruby: "<ruby>蓋をする作業<rt>ふたをするさぎょう</rt></ruby>", arti: "pekerjaan memasang tutup kemasan", cat: "生産" },
    { ruby: "<ruby>腐敗<rt>ふはい</rt></ruby>", arti: "busuk", cat: "衛生" },
    { ruby: "<ruby>食品の腐敗<rt>しょくひんのふはい</rt></ruby>", arti: "makanan busuk", cat: "衛生" },
    { ruby: "<ruby>保存する<rt>ほぞんする</rt></ruby>", arti: "menyimpan", cat: "衛生" },
    { ruby: "<ruby>温室<rt>おんしつ</rt></ruby>", arti: "suhu ruangan", cat: "衛生" },
    { ruby: "<ruby>室温保存<rt>しつおんほぜん</rt></ruby>", arti: "penyimpanan di suhu ruangan", cat: "衛生" },
    { ruby: "<ruby>日勤<rt>にっきん</rt></ruby>", arti: "shift siang", cat: "生産" },
    { ruby: "<ruby>夜勤<rt>やきん</rt></ruby>", arti: "shift malam", cat: "生産" },
    { ruby: "<ruby>下処理する<rt>したしょりする</rt></ruby>", arti: "menyiapkan", cat: "生産" },
    { ruby: "<ruby>材料を下処理する<rt>ざいりょうをしたしょりする</rt></ruby>", arti: "menyiapkan bahan", cat: "生産" },
    { ruby: "<ruby>盛りつける<rt>もりつける</rt></ruby>", arti: "menghias atau menata makanan jadi", cat: "生産" },
    { ruby: "<ruby>異物<rt>いぶつ</rt></ruby>", arti: "benda asing", cat: "衛生" },
    { ruby: "<ruby>混入<rt>こんにゅう</rt></ruby>", arti: "kontaminasi", cat: "衛生" },
    { ruby: "<ruby>異物混入が起こらないように<rt>いぶつこんにゅうがおこらないように</rt></ruby>", arti: "usahakan tidak terjadi kontaminasi benda asing", cat: "衛生" },
    { ruby: "<ruby>賞味期限<rt>しょうみきげん</rt></ruby>", arti: "tanggal kadaluarsa konsumsi", cat: "衛生" },
    { ruby: "<ruby>衛生面<rt>えいせいめん</rt></ruby>", arti: "higienis, sisi kebersihan", cat: "衛生" },
    { ruby: "<ruby>消毒<rt>しょうどく</rt></ruby>", arti: "disinfeksi, menyemprotkan tangan dengan alkohol pembunuh kuman", cat: "衛生" },
    { ruby: "<ruby>着替え<rt>きがえ</rt></ruby>", arti: "ganti baju (dengan baju khusus kerja)", cat: "衛生" },
    { ruby: "<ruby>毛髪やほこりを取り除く<rt>もうはつやほこりをとりのぞく</rt></ruby>", arti: "menghilangkan rambut dan debu", cat: "衛生" },
    { ruby: "<ruby>パン工場<rt>ぱんこうじょう</rt></ruby>", arti: "pabrik roti", cat: "生産" },
    { ruby: "<ruby>弁当工場<rt>べんとうこうじょう</rt></ruby>", arti: "pabrik bentou (makanan box)", cat: "生産" },
    { ruby: "<ruby>カップ麺の製造工場<rt>かっぷめんのせいぞうこうじょう</rt></ruby>", arti: "pabrik pembuatan mie", cat: "生産" },
    { ruby: "<ruby>食品製造工場<rt>しょくひんせいぞうこうじょう</rt></ruby>", arti: "pabrik pengolahan makanan", cat: "生産" },
    { ruby: "<ruby>冷凍食品工場<rt>れいとうしょくひんこうじょう</rt></ruby>", arti: "pabrik pengolahan makanan beku", cat: "生産" },
    { ruby: "<ruby>食品包装<rt>しょくひんほうそう</rt></ruby>", arti: "kemasan produk makanan", cat: "生産" },
    { ruby: "<ruby>梱包<rt>こんぽう</rt></ruby>", arti: "packing, pengemasan", cat: "生産" },
    { ruby: "<ruby>出荷<rt>しゅっか</rt></ruby>", arti: "pengiriman", cat: "生産" },
    { ruby: "<ruby>マイナス15度以下<rt>まいなすじゅうごどいか</rt></ruby>", arti: "di bawah 15 derajat celcius", cat: "生産" },
    { ruby: "<ruby>飲料メーカー工場<rt>いんりょうめーかーこうじょう</rt></ruby>", arti: "pabrik pembuatan minuman kemasan", cat: "生産" },
    { ruby: "<ruby>殺菌<rt>さっきん</rt></ruby>", arti: "sterilisasi", cat: "衛生" },
    { ruby: "<ruby>機械<rt>きかい</rt></ruby>", arti: "mesin", cat: "生産" },
    { ruby: "<ruby>操作<rt>そうさ</rt></ruby>", arti: "pengoperasian", cat: "生産" },
    { ruby: "<ruby>検品<rt>けんぴん</rt></ruby>", arti: "inspeksi kualitas", cat: "生産" },
    { ruby: "<ruby>機械の操作や検品<rt>きかいのそうさやけんぴん</rt></ruby>", arti: "pengoperasian dan pengecekan mesin", cat: "生産" },
    { ruby: "<ruby>整理<rt>せいり</rt></ruby>", arti: "Ringkas (Memilah barang yang diperlukan & tidak)", cat: "5S" },
    { ruby: "<ruby>整頓<rt>せいとん</rt></ruby>", arti: "Rapi (Menata barang pada tempatnya)", cat: "5S" },
    { ruby: "<ruby>清掃<rt>せいそう</rt></ruby>", arti: "Resik (Membersihkan tempat kerja)", cat: "5S" },
    { ruby: "<ruby>清潔<rt>せいけつ</rt></ruby>", arti: "Rawat (Maintaining kebersihan diri dan lingkungan)", cat: "5S" },
    { ruby: "<ruby>しつけ<rt>しつけ</rt></ruby>", arti: "Rajin (Membiasakan diri patuh aturan)", cat: "5S" },
    { ruby: "<ruby>労働災害<rt>ろうどうさいがい</rt></ruby>", arti: "Kecelakaan kerja", cat: "労働安全" },
    { ruby: "<ruby>安全第一<rt>あんぜんだいいち</rt></ruby>", arti: "Utamakan keselamatan", cat: "労働安全" },
    { ruby: "<ruby>ヒヤリハット<rt>ひやりはっと</rt></ruby>", arti: "Near-miss incident", cat: "労働安全" },
    { ruby: "<ruby>非常ボタン<rt>ひじょうぼたん</rt></ruby>", arti: "Tombol darurat", cat: "労働安全" },
    { ruby: "<ruby>保護具<rt>ほごぐ</rt></ruby>", arti: "Alat Pelindung Diri (APD)", cat: "労働安全" },
    { ruby: "<ruby>食品<rt>しょくひん</rt></ruby>", arti: "Produk Makanan", cat: "将軍" },
    { ruby: "<ruby>原材料<rt>げんざいりょう</rt></ruby>", arti: "Bahan Baku", cat: "将軍" },
    { ruby: "<ruby>野菜<rt>やさい</rt></ruby>", arti: "Sayuran", cat: "Sayuran" },
    { ruby: "<ruby>魚<rt>さかな</rt></ruby>", arti: "Ikan", cat: "将軍" },
];

const examDataset = [
    // SESI 1: 60 SOAL TEORI (INFORMASI & PENGETAHUAN)
    { 
        type: "teori", 
        q: "HACCPの7<ruby>原則<rt>げんそく</rt></ruby>において、<ruby>最初<rt>さいしょ</rt></ruby>に行う<ruby>手順<rt>てじゅん</rt></ruby>（<ruby>原則<rt>げんそく</rt></ruby>1）は何ですか。", 
        ans: "危害要因分析（ハザード分析）", 
        opts: ["危害要因分析（ハザード分析）", "重要管理点の決定", "管理基準の設定"] 
    },
    { 
        type: "teori", 
        q: "<ruby>食品<rt>しょくひん</rt></ruby>の<ruby>製造工程<rt>せいぞうこうてい</rt></ruby>で、ハザードを「なくす」または「<ruby>安全<rt>あんぜん</rt></ruby>なレベルまで<ruby>減<rt>へ</rt></ruby>らす」ための特に<ruby>重要<rt>じゅうよう</rt></ruby>な<ruby>工程<rt>こうてい</rt></ruby>を何と言いますか。", 
        ans: "重要管理点（CCP）", 
        opts: ["一般衛生管理工程", "重要管理点（CCP）", "出荷検査工程"] 
    },
    { 
        type: "teori", 
        q: "<ruby>食中毒<rt>しょくちゅうどく</rt></ruby>を<ruby>引き起こす<rt>ひきおこす</rt></ruby><ruby>原因<rt>げんいん</rt></ruby>として、<ruby>間違<rt>まちが</rt></ruby>っているものはどれですか。", 
        ans: "食品の賞味期限が長いこと", 
        opts: ["細菌やウイルス", "化学物質（洗剤など）", "食品の賞味期限が長いこと"] 
    },
    { 
        type: "teori", 
        q: "<ruby>食中毒菌<rt>しょくちゅうどくきん</rt></ruby>の多くが最も<ruby>活発<rt>かっぱつ</rt></ruby>に<ruby>増殖<rt>ぞうしょく</rt></ruby>する（増える）<ruby>温度帯<rt>おんどたい</rt></ruby>はどれですか。", 
        ans: "20℃〜50℃", 
        opts: ["0℃〜10℃", "20℃〜50℃", "75℃以上"] 
    },
    { 
        type: "teori", 
        q: "<ruby>加熱<rt>かねつ</rt></ruby>しても<ruby>死<rt>し</rt></ruby>なない「<ruby>芽胞<rt>がほう</rt></ruby>」を作る、カレーやスープなどで<ruby>発生<rt>hatsusei</rt></ruby>しやすい<ruby>食中毒菌<rt>しょくちゅうどくきん</rt></ruby>はどれですか。", 
        ans: "ウエルシュ菌", 
        opts: ["サルモネラ属菌", "ウエルシュ菌", "黄色ブドウ球菌"] 
    },
    { 
        type: "teori", 
        q: "<ruby>鶏肉<rt>とりにく</rt></ruby>や<ruby>卵<rt>たまご</rt></ruby>が主な<ruby>原因<rt>げんいん</rt></ruby>となり、しっかり<ruby>加熱<rt>かねつ</rt></ruby>することで<ruby>予防<rt>よぼう</rt></ruby>できる<ruby>食中毒菌<rt>しょくちゅうどくきん</rt></ruby>はどれですか。", 
        ans: "サルモネラ属菌", 
        opts: ["サルモネラ属菌", "ノロウイルス", "ボツリヌス菌"] 
    },
    { 
        type: "teori", 
        q: "<ruby>作業者<rt>さぎょうしゃ</rt></ruby>の手の<ruby>傷口<rt>きずぐち</rt></ruby>などにある<ruby>黄色<rt>おうしょく</rt></ruby>ブドウ<ruby>球菌<rt>きゅうきん</rt></ruby>が作る、<ruby>熱<rt>ねつ</rt></ruby>に非常に<ruby>強い<rt>つよいい</rt></ruby><ruby>毒素<rt>どくそ</rt></ruby>の名前は何ですか。", 
        ans: "エンテロトキシン", 
        opts: ["エンテロトキシン", "ベロ毒素", "テトロドトキシン"] 
    },
    { 
        type: "teori", 
        q: "ノロウイルスに関する<ruby>説明<rt>せつめい</rt></ruby>として、<ruby>正しい<rt>ただしい</rt></ruby>ものはどれですか。", 
        ans: "食品の中では増えず、人の腸の中で増える", 
        opts: ["食品の中では増えず、人の腸の中で増える", "乾燥に非常に弱い", "アルコール消毒だけで完全に死滅する"] 
    },
    { 
        type: "teori", 
        q: "<ruby>生<rt>なま</rt></ruby>の<ruby>肉<rt>にく</rt></ruby>を切った後の<ruby>包丁<rt>ほうちょう</rt></ruby>で、洗わずにそのまま<ruby>加熱<rt>かねつ</rt></ruby>しないサラダの<ruby>野菜<rt>やさい</rt></ruby>を切ることで起きる<ruby>汚染<rt>おせん</rt></ruby>を何と言いますか。", 
        ans: "交差汚染（二次汚染）", 
        opts: ["単独汚染", "交差汚染（二次汚染）", "初期汚染"] 
    },
    { 
        type: "teori", 
        q: "<ruby>冷凍<rt>れいとう</rt></ruby>された<ruby>肉<rt>にく</rt></ruby>や<ruby>魚<rt>さかな</rt></ruby>などの<ruby>原材料<rt>げんざいりょう</rt></ruby>を<ruby>解凍<rt>かいとう</rt></ruby>する<ruby>際<rt>さい</rt></ruby>、最も<ruby>衛生的な<rt>えいせいてきな</rt></ruby><ruby>方法<rt>ほうほう</rt></ruby>はどれですか。", 
        ans: "冷蔵庫の中などの低い温度で解凍する", 
        opts: ["作業場（室温）に長時間放置して解凍する", "冷蔵庫の中などの低い温度で解凍する", "お湯の中につけて急いで解凍する"] 
    },
    { 
        type: "teori", 
        q: "<ruby>原材料<rt>げんざいりょう</rt></ruby>や<ruby>製品<rt>せいひん</rt></ruby>の<ruby>保管<rt>ほかん</rt></ruby>において、<ruby>古い<rt>ふるい</rt></ruby>ものから<ruby>順番<rt>じゅんばん</rt></ruby>に使うための<ruby>原則<rt>げんそく</rt></ruby>を何と言いますか。", 
        ans: "先入れ先出し（FIFO）", 
        opts: ["後入れ先出し", "先入れ先出し（FIFO）", "一括管理の原則"] 
    },
    { 
        type: "teori", 
        q: "<ruby>食品工場<rt>しょくひんこうじょう</rt></ruby>における「5S」<ruby>活動<rt>かつどう</rt></ruby>のうち、「<ruby>必要<rt>ひつよう</rt></ruby>なものと<ruby>不要<rt>ふよう</rt></ruby>なものを分け、不要なものを捨てること」はどれですか。", 
        ans: "整理", 
        opts: ["整理", "整頓", "清掃"] 
    },
    { 
        type: "teori", 
        q: "「<ruby>清潔<rt>せいけつ</rt></ruby>」の正しい<ruby>説明<rt>せつめい</rt></ruby>はどれですか。", 
        ans: "「整理・整頓・清掃」を徹底し、きれいな状態を保つこと", 
        opts: ["汚れたらその都度きれいにすること", "「整理・整頓・清掃」を徹底し、きれいな状態を保つこと", "自分の服や体を洗うことだけ"] 
    },
    { 
        type: "teori", 
        q: "「しつけ（<ruby>習慣<rt>しゅうかん</rt></ruby>）」の<ruby>意味<rt>いみ</rt></ruby>として正しいものはどれですか。", 
        ans: "職場のルールや決まりごとを正しく守る習慣をつけること", 
        opts: ["後輩に厳しく仕事を教えること", "職場のルールや決まりごとを正しく守る習慣をつけること", "毎日新しいルールを作ること"] 
    },
    { 
        type: "teori", 
        q: "<ruby>手洗い<rt>てあらい</rt></ruby>を行うタイミングとして、<ruby>間違<rt>まちが</rt></ruby>っているものはどれですか。", 
        ans: "同じ作業を続けている最中（15分ごと）", 
        opts: ["トイレに行った後", "作業場（ライン）に入る直前", "同じ作業を続けている最中（15分ごと）"] 
    },
    { 
        type: "teori", 
        q: "<ruby>爪<rt>つめ</rt></ruby>の中に<ruby>汚れ<rt>よごれ</rt></ruby>や<ruby>菌<rt>きん</rt></ruby>がたまるのを<ruby>防ぐ<rt>ふせぐ</rt></ruby>ため、<ruby>作業者<rt>さぎょうしゃ</rt></ruby>が守るべきルールはどれですか。", 
        ans: "爪は短く切り、マニキュアは塗らない", 
        opts: ["爪は短く切り、マニキュアは塗らない", "手袋をすれば爪が長くても良い", "マニキュアを塗って爪を保護する"] 
    },
    { 
        type: "teori", 
        q: "<ruby>作業着<rt>さぎょうぎ</rt></ruby>（<ruby>衛生服<rt>えいせいふく</rt></ruby>）を着る際、<ruby>髪の毛<rt>かみのけ</rt></ruby>が外に出ないようにするために最も<ruby>重要<rt>じゅうよう</rt></ruby>なことはどれですか。", 
        ans: "インナーネット（髪の毛用ネット）の中に髪をすべて収める", 
        opts: ["帽子を大きめのサイズにする", "インナーネット（髪の毛用ネット）の中に髪をすべて収める", "作業着の襟（えり）を立てる"] 
    },
    { 
        type: "teori", 
        q: "<ruby>製造<rt>せいぞう</rt></ruby>ラインに入る前に、<ruby>衣服<rt>いふく</rt></ruby>に付いた<ruby>髪の毛<rt>かみのけ</rt></ruby>やホコリを<ruby>取り除く<rt>とりのぞく</rt></ruby>ために行う<ruby>行動<rt>こうどう</rt></ruby>はどれですか。", 
        ans: "粘着ローラー（コロコロ）を全身にかける", 
        opts: ["手袋で服をはたく", "粘着ローラー（コロコロ）を全身にかける", "エアーシャワーの中でジャンプする"] 
    },
    { 
        type: "teori", 
        q: "アレルギー<ruby>物質<rt>ぶっしつ</rt></ruby>（<ruby>特定原材料<rt>とくていげんざいりょう</rt></ruby>）の「7<ruby>品目<rt>ひんもく</rt></ruby>」に含まれないものはどれですか。", 
        ans: "大豆", 
        opts: ["卵", "小麦", "大豆"] 
    },
    { 
        type: "teori", 
        q: "<ruby>軟質異物<rt>なんしついぶつ</rt></ruby>に<ruby>該当<rt>がいとう</rt></ruby>するものはどれですか。", 
        ans: "髪の毛やビニールの破片", 
        opts: ["髪の毛やビニールの破片", "ガラス of 破片", "金属のネジ"] 
    },
    { 
        type: "teori", 
        q: "<ruby>作業者<rt>さぎょうしゃ</rt></ruby>が<ruby>下痢<rt>げり</rt></ruby>や<ruby>発熱<rt>はつねつ</rt></ruby>、<ruby>吐き気<rt>はきけ</rt></ruby>などの<ruby>症状<rt>しょうじょう</rt></ruby>がある場合、最初にするべきことはどれですか。", 
        ans: "すぐに管理者に報告し、作業に入らない", 
        opts: ["薬を飲んで黙って作業を続ける", "すぐに管理者に報告し、作業に入らない", "同僚にだけ話して休憩を多くもらう"] 
    },
    { 
        type: "teori", 
        q: "<ruby>一般的な<rt>いっぱんてきな</rt></ruby><ruby>冷蔵管理<rt>れいぞうかんり</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>として、<ruby>適切な<rt>てきせつな</rt></ruby>ものはどれですか。", 
        ans: "10℃以下", 
        opts: ["10℃以下", "15℃〜20℃", "0℃以下（凍結）"] 
    },
    { 
        type: "teori", 
        q: "<ruby>一般的な<rt>いっぱんてきな</rt></ruby><ruby>冷凍管理<rt>れいとうかんり</rt></ruby>の<ruby>温度<rt>おんど</rt></ruby>として、<ruby>適切な<rt>てきせつな</rt></ruby>ものはどれですか。", 
        ans: "-15℃以下", 
        opts: ["0℃", "-15℃以下", "-5℃"] 
    },
    { 
        type: "teori", 
        q: "<ruby>食品<rt>しょくひん</rt></ruby>の<ruby>包装<rt>ほうそう</rt></ruby>（パッケージ）に<ruby>表示<rt>ひょうじ</rt></ruby>される「<ruby>消費期限<rt>しょうひきげん</rt></ruby>」の正しい<ruby>意味<rt>いみ</rt></ruby>はどれですか。", 
        ans: "安全に食べることができる期限（過ぎたら食べない方が良い）", 
        opts: ["美味しく食べることができる期限", "安全に食べることができる期限（過ぎたら食べない方が良い）", "工場から出荷した日付"] 
    },
    { 
        type: "teori", 
        q: "「<ruby>安全第一<rt>あんぜんだいいち</rt></ruby>」という言葉の<ruby>意味<rt>いみ</rt></ruby>として、正しいものはどれですか。", 
        ans: "生産スピードや品質よりも、作業者の安全を最優先すること", 
        opts: ["生産スピードや品質よりも、作業者の安全を最優先すること", "機械の安全装置を外して速く動かすこと", "製品 of 安全（HACCP）だけを考えること"] 
    },
    { 
        type: "teori", 
        q: "<ruby>仕事中<rt>しごとちゅう</rt></ruby>に大きなケガにはならなかったが、「ハッとした」「ヒヤッとした」出来事のことを何と言いますか。", 
        ans: "ヒヤリ・ハット", 
        opts: ["ヒヤリ・ハット", "労働災害", "安全確認"] 
    },
    { 
        type: "teori", 
        q: "<ruby>工場内<rt>こうじょうない</rt></ruby>で安全に<ruby>通路<rt>つうろ</rt></ruby>を歩くためのルールとして、正しいものはどれですか。", 
        ans: "歩行者用の通路を歩き、曲がり角では一時停止して安全確認をする", 
        opts: ["急いでいる時は走っても良い", "フォークリフトのすぐ後ろを歩く", "歩行者用の通路を歩き、曲がり角では一時停止して安全確認をする"] 
    },
    { 
        type: "teori", 
        q: "<ruby>機械<rt>きかい</rt></ruby>の<ruby>清掃<rt>せいそう</rt></ruby>やメンテナンスを行う際、<ruby>事故<rt>じこ</rt></ruby>を<ruby>防ぐ<rt>ふせぐ</rt></ruby>ために必ず行わなければならないことは何ですか。", 
        ans: "機械の電源を切り、プラグを抜いて「清掃中」の標識を出す", 
        opts: ["機械を動かしたまま素快速に行う", "機械の電源を切り、プラグを抜いて「清掃中」の標識を出す", "手袋を二重にはめて作業する"] 
    },
    { 
        type: "teori", 
        q: "<ruby>作業中<rt>さぎょうちゅう</rt></ruby>に<ruby>床<rt>ゆか</rt></ruby>に<ruby>油<rt>あぶら</rt></ruby>や<ruby>水<rt>みず</rt></ruby>がこぼれているのを見つけました。どうするべきですか。", 
        ans: "すぐに拭き取るか、周囲の人に知らせて立ち入りを制限する", 
        opts: ["自分の担当ではないので無視する", "仕事が終わるまでそのままにしておく", "すぐに拭き取るか、周囲の人に知らせて立ち入りを制限する"] 
    },
    { 
        type: "teori", 
        q: "万が一、<ruby>労働災害<rt>ろうどうさいがい</rt></ruby>（ケガ）が<ruby>発生<rt>はつせい</rt></ruby>してしまった場合、最初に行うべき<ruby>行動<rt>こうどう</rt></ruby>はどれですか。", 
        ans: "すぐに機械を止め、大声で管理者に報告する", 
        opts: ["怒られるのが怖いので隠す", "すぐに機械を止め、大声で管理者に報告する", "仕事を最後まで終わらせてから病院に行く"] 
    },
    { 
        type: "teori", 
        q: "すべての<ruby>製造業<rt>せいぞうぎょう</rt></ruby>のなかで、<ruby>未熟練<rt>みじゅくれん</rt></ruby><ruby>作業者<rt>さぎょうしゃ</rt></ruby>（<ruby>経験<rt>けいけん</rt></ruby>が3<ruby>年<rt>ねん</rt></ruby><ruby>未満<rt>みまん</rt></ruby>）の<ruby>死傷<rt>ししょう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が最も多いのはどの<ruby>業種<rt>ぎょうしゅ</rt></ruby>ですか。", 
        ans: "食料品製造業", 
        opts: ["機械器具製造業", "食料品製造業", "化学工業"] 
    },
    { 
        type: "teori", 
        q: "<ruby>食品<rt>しょくひん</rt></ruby><ruby>製造<rt>せいぞう</rt></ruby><ruby>工場<rt>こうじょう</rt></ruby>で起きる<ruby>労働<rt>ろうどう</rt></ruby><ruby>災害<rt>さいがい</rt></ruby>のうち、<ruby>件数<rt>けんすう</rt></ruby>が最も多い上位3つ（全体の約60%）の正しい組み合わせはどれですか。", 
        ans: "①転倒、②はさまれ・巻き込まれ、③切れ・こすれ", 
        opts: ["①転倒、②はさまれ・巻き込まれ、③切れ・こすれ", "①墜落、②やけど、③熱中症", "①激突、②腰痛、③感電"] 
    },
    { 
        type: "teori", 
        q: "<ruby>食品<rt>しょくひん</rt></ruby><ruby>衛生<rt>えいせい</rt></ruby>の<ruby>基本<rt>きほん</rt></ruby>となる「どんな食品を作るときも共通しておこなう<ruby>基本的<rt>きほんてき</rt></ruby>な<ruby>衛生<rt>えいせい</rt></ruby><ruby>管理<rt>かんり</rt></ruby>」を何と言いますか。", 
        ans: "一般衛生管理", 
        opts: ["HACCPプラン", "特定原材料管理", "一般衛生管理"] 
    },
    { 
        type: "teori", 
        q: "<ruby>異物<rt>いぶつ</rt></ruby>のなかで、<ruby>金属<rt>きんぞく</rt></ruby>片、ガラス片、<ruby>石<rt>いし</rt></ruby>のように硬いものを何と言いますか。", 
        ans: "硬質異物", 
        opts: ["軟質異物", "硬質異物", "生物ハザード"] 
    },
    { 
        type: "teori", 
        q: "カビや<ruby>虫<rt>むし</rt></ruby>、<ruby>髪の毛<rt>かみのけ</rt></ruby>などの<ruby>硬く<rt>かたく</rt></ruby>ない<ruby>異物<rt>いぶつ</rt></ruby>が食品に入った場合、どのような問題につながりますか。", 
        ans: "苦情（クレーム）や返品になり、会社の信用を落とす", 
        opts: ["口の中やのどに傷を作る", "毒素が発生して人が死ぬ", "苦情（クレーム）や返品になり、会社の信用を落とす"] 
    },
    { 
        type: "teori", 
        q: "2024<ruby>年<rt>ねん</rt></ruby>3<ruby>月<rt>がつ</rt></ruby>の<ruby>法律<rt>ほうりつ</rt></ruby><ruby>改正<rt>かいせい</rt></ruby>により、<ruby>特定<rt>tくてい</rt></ruby><ruby>原材料<rt>げんざいりょう</rt></ruby>（<ruby>表示<rt>ひょうじ</rt></ruby><ruby>義務<rt>ぎむ</rt></ruby>）は<ruby>何<rt>なん</rt></ruby>品目になりましたか。", 
        ans: "8品目", 
        opts: ["7品目", "8品目", "20品目"] 
    },
    { 
        type: "teori", 
        q: "<ruby>特定<rt>とくてい</rt></ruby><ruby>原材料<rt>げんざいりょう</rt></ruby>に「<ruby>準ずる<rt>じゅんずる</rt></ruby>もの」（<ruby>表示<rt>ひょうじ</rt></ruby><ruby>推奨<rt>すいしょう</rt></ruby>）として、新しく<ruby>追加<rt>ついか</rt></ruby>された品目はどれですか。", 
        ans: "マカダミアナッツ", 
        opts: ["まつたけ", "大豆", "マカダミアナッツ"] 
    },
    { 
        type: "teori", 
        q: "<ruby>冷蔵<rt>れいぞう</rt></ruby>管理が必要な<ruby>食肉<rt>しょくにく</rt></ruby>の<ruby>一般的<rt>いっぱんてき</rt></ruby>な<ruby>保管<rt>ほかん</rt></ruby><ruby>温度<rt>おんど</rt></ruby>として、<ruby>食品<rt>しょくひん</rt></ruby><ruby>衛生<rt>えいせい</rt></ruby><ruby>法<rt>ほう</rt></ruby>で決められているものはどれですか。", 
        ans: "10℃以下", 
        opts: ["10℃以下", "15℃以下", "-15℃以下"] 
    },
    { 
        type: "teori", 
        q: "<ruby>冷凍<rt>れいとう</rt></ruby>庫の<ruby>温度<rt>おんど</rt></ruby>として、<ruby>食品<rt>しょくひん</rt></ruby><ruby>衛生<rt>えいせい</rt></ruby><ruby>法<rt>ほう</rt></ruby>で決められている<ruby>基準<rt>きじゅん</rt></ruby>はどれですか。", 
        ans: "-15℃以下", 
        opts: ["0℃以下", "-15℃以下", "-18℃以下"] 
    },
    { 
        type: "teori", 
        q: "マグロやサバなどの<ruby>赤身<rt>あかみ</rt></ruby>魚を悪い条件で保存すると増える、アレルギーによく似た<ruby>食中毒<rt>しょくちゅうどく</rt></ruby>の原因物質は何ですか。", 
        ans: "ヒスタミン", 
        opts: ["ソラニン", "ヒスタミン", "エンテロトキシン"] 
    },
    { 
        type: "teori", 
        q: "「加熱しても死なない<ruby>殻<rt>から</rt></ruby>を被った細菌の<ruby>種<rt>たね</rt></ruby>のようなもの」を何と言いますか。", 
        ans: "芽胞（がほう）", 
        opts: ["芽胞（がほう）", "ウイルス", "毒素"] 
    },
    { 
        type: "teori", 
        q: "<ruby>加熱<rt>かねつ</rt></ruby><ruby>調理<rt>ちょうり</rt></ruby>のあと、食品がゆっくり冷える間に増えやすい、カレーやシチューなどで発生する<ruby>芽胞<rt>がほう</rt></ruby>菌はどれですか。", 
        ans: "ウェルシュ菌", 
        opts: ["サルモネラ属菌", "黄色ブドウ球菌", "ウェルシュ菌"] 
    },
    { 
        type: "teori", 
        q: "ノロウイルスを<ruby>加熱<rt>かねつ</rt></ruby>でやっつける（殺す）ための正しい<ruby>中心<rt>ちゅうしん</rt></ruby><ruby>温度<rt>おんど</rt></ruby>と時間の条件はどれですか。", 
        ans: "85℃〜90℃で90秒間以上", 
        opts: ["75℃で1分間以上", "85℃〜90℃で90秒間以上", "120℃で4分間以上"] 
    },
    { 
        type: "teori", 
        q: "ノロウイルスによる<ruby>食中毒<rt>しょくちゅうどく</rt></ruby>を<ruby>予防<rt>よぼう</rt></ruby>するための「4<ruby>原則<rt>げんそく</rt></ruby>」の正しい組み合わせはどれですか。", 
        ans: "①持ち込まない、②つけない、③やっつける、④拡げない", 
        opts: ["①持ち込まない、②つけない、③やっつける、④拡げない", "①つけない、②増やさない、③やっつける", "①整理、②整頓、③清掃、④清潔"] 
    },
    { 
        type: "teori", 
        q: "<ruby>加熱<rt>かねつ</rt></ruby>が終わってから細菌の増殖を防ぐためにおこなう、<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>冷却<rt>れいきゃく</rt></ruby>条件として正しいものはどれですか。", 
        ans: "30分間以内に中心温度を20℃まで下げる（または60分間以内に10℃まで下げる）", 
        opts: ["2時間以内に中心温度を10℃まで下げる", "30分間以内に中心温度を20℃まで下げる（または60分間以内に10℃まで下げる）", "室温で自然に冷めるまで放置する"] 
    },
    { 
        type: "teori", 
        q: "<ruby>加熱<rt>かねつ</rt></ruby>しない野菜サラダなどを<ruby>薬剤<rt>やくざい</rt></ruby>で殺菌する場合、次亜塩素酸ナトリウム溶液の濃度200ppmでの処理時間は何分ですか。", 
        ans: "5分間", 
        opts: ["1分間", "5分間", "10分間"] 
    },
    { 
        type: "teori", 
        q: "<ruby>金属<rt>きんぞく</rt></ruby><ruby>探知<rt>たんち</rt></ruby>機の管理において、金属を正しく探知できているか確認するために使う道具を何と言いますか。", 
        ans: "テストピース", 
        opts: ["テストピース", "安全カバー", "インナーネット"] 
    },
    { 
        type: "teori", 
        q: "石やガラスなど、金属探知機では見つけることができない硬質異物を検出するために使われる機械は何ですか。", 
        ans: "X線異物検出機", 
        opts: ["金属探知機", "X線異物検出機", "エアータオル"] 
    },
    { 
        type: "teori", 
        q: "1つの大きな<ruby>労働<rt>ろうどう</rt></ruby><ruby>災害<rt>さいがい</rt></ruby>が起こる背景には、300件のヒヤリ・ハットが隠れているという法則を何と言いますか。", 
        ans: "ハインリッヒの法則", 
        opts: ["HACCPの原則", "ハインリッヒの法則", "5Sの法則"] 
    },
    { 
        type: "teori", 
        q: "<ruby>作業<rt>さぎょう</rt></ruby>の手順や機械のスイッチを入れる前に、危険を予防するために指をさして声に出して確認することを何と言いますか。", 
        ans: "指差呼称（しさこしょう）", 
        opts: ["5S活動", "危険予知訓練（KYT）", "指差呼称（しさこしょう）"] 
    },
    { 
        type: "teori", 
        q: "部品が壊れたり、製品がつまったりしたときに、機械が自動的に止まる安全装置の仕組みを何と言いますか。", 
        ans: "フェールセーフ", 
        opts: ["フェールセーフ", "フールプルーフ", "ゾーニング"] 
    },
    { 
        type: "teori", 
        q: "間違って機械に手を入れてしまわないための安全カバーのように、人がうっかりミスをしても災害にならない仕組みを何と言いますか。", 
        ans: "フールプルーフ", 
        opts: ["フェールセーフ", "フールプルーフ", "ハザード分析"] 
    },
    { 
        type: "teori", 
        q: "<ruby>塩素<rt>えんそ</rt></ruby>系の洗剤と、ある洗剤を混ぜて同時に使うと有害な塩素ガスが発生して大変危険です。混ぜてはいけない洗剤はどれですか。", 
        ans: "酸性洗剤", 
        opts: ["アルカリ性洗剤", "中性洗剤", "酸性洗剤"] 
    },
    { 
        type: "teori", 
        q: "温度や濃度、時間はいつ記録しなければいけませんか。", 
        ans: "はかったとき、確認したときにすぐ記録する", 
        opts: ["一日の仕事が終わったあとにまとめて記録する", "はかる前にあらかじめ記録しておく", "はかったとき、確認したときにすぐ記録する"] 
    },
    { 
        type: "teori", 
        q: "食品工場の中が「清潔作業区域」「準清潔作業区域」「汚染作業区域」などに分かれている衛生管理（ゾーニング）を何と言いますか。", 
        ans: "区分衛生管理", 
        opts: ["区分衛生管理", "重要管理点", "ハインリッヒ管理"] 
    },
    { 
        type: "teori", 
        q: "アレルギー物質を含む食品を同じ設備で製造する場合、混入を防ぐための最も適切な製造計画はどれですか。", 
        ans: "アレルギー物質を含む食品は、一日の終わりに製造してその後に丁寧に洗浄する", 
        opts: ["一日の最初に製造し、そのまま次の製品を作る", "アレルギー物質を含む食品は、一日の終わりに製造してその後に丁寧に洗浄する", "機械を洗わずにスピードを優先して製造する"] 
    },
    { 
        type: "teori", 
        q: "未開封の加工食品を決められた条件で保存した場合に、「美味しく食べられる期間の最後の日」を何と言いますか。", 
        ans: "賞味期限", 
        opts: ["使用期限", "消費期限", "賞味期限"] 
    },
    { 
        type: "teori", 
        q: "<ruby>消費<rt>しょうひ</rt></ruby><ruby>期限<rt>きげん</rt></ruby>を過ぎた原材料を使ってはいけない最も大きな理由は何ですか。", 
        ans: "食中毒の原因になる可能性が高くなり安全ではないから", 
        opts: ["味が少し薄くなるから", "食中毒の原因になる可能性が高くなり安全ではないから", "値段が安くなるから"] 
    },
    { 
        type: "teori", 
        q: "ケガをした人や倒れている人を見つけたとき（労働災害発生時）、二次災害を防ぐために最初に取るべき正しい行動はどれですか。", 
        ans: "あわてて近づかず、何が起こっているかを確認して大声で周りや責任者に知らせる", 
        opts: ["すぐに一人で駆け寄って抱き起こす", "あわてて近づかず、何が起こっているかを確認して大声で周りや責任者に知らせる", "気づかないふりをして自分の作業を続ける"] 
    },
    { 
        type: "teori", 
        q: "<ruby>作業場<rt>さぎょうじょう</rt></ruby>にホチキスの針やクリップ、シャープペンシルを持ち込んではいけない理由は何ですか。", 
        ans: "折れた芯や針が製品に入ると、異物混入の原因になるから", 
        opts: ["作業のスピードが遅くなるから", "工場の電気が消えてしまうから", "折れた芯や針が製品に入ると、異物混入の原因になるから"] 
    },

    // SESI 2: 20 SOAL PRAKTIK (DENGAN ILUSTRASI GAMBAR)

    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-1.png", 
        q: "このイラストの手洗い方法の<ruby>問題点<rt>もんだいてん</rt></ruby>はどこですか。", 
        ans: "ハンドソープ（石けん）を使っていないため、菌が落ちない", 
        opts: ["水が冷たすぎる", "ハンドソープ（石けん）を使っていないため、菌が落ちない", "ペーパータオルを2枚使っている"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-2.png", 
        q: "このイラストの<ruby>保管方法<rt>ほかんほうほう</rt></ruby> の どこが<ruby>間違<rt>まちがえ</rt></ruby>っていますか。", 
        ans: "先入れ先出し（FIFO）ができておらず、古い原材料が残ってしまう", 
        opts: ["先入れ先出し（FIFO）ができておらず、古い原材料が残ってしまう", "箱の向きがバラバラである", "天井が高すぎる"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-3.png", 
        q: "イラストの<ruby>状態<rt>じょうたい</rt></ruby>でお勧め作業をすると、どのようなリスク（危険）がありますか。", 
        ans: "指輪や時計に付いた菌が食品に混ざる、または時計が異物混入する危険", 
        opts: ["手が重くなる危険", "指輪や時計に付いた菌が食品に混ざる、または時計が異物混入する危険", "生地が固くなる危険"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-4.png", 
        q: "この状態のまま作業を続けると、どのような衛生上の問題が起きますか。", 
        ans: "交差汚染（二次汚染）が発生して食中毒の原因になる", 
        opts: ["交差汚染（二次汚染）が発生して食中毒の原因になる", "調理のスピードが遅くなる", "食材の味が混ざって美味しくなくなる"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-5.png", 
        q: "このイラストの清掃作業のどこが不適切（ダメ）ですか。", 
        ans: "床の汚れや跳ね上がった水が、食品（製品）を汚染してしまう", 
        opts: ["水の量が少なすぎる", "床の汚れや跳ね上がった水が、食品（製品）を汚染してしまう", "ブラシを使っていない"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-6.png", 
        q: "イラストの歩行方法において、発生する可能性が高い危険はどれですか。", 
        ans: "転倒（てんとう）する、または危険に気づかずケガをする危険", 
        opts: ["スマホが壊れる危険", "転倒（てんとう）する、または危険に気づかずケガをする危険", "工場の電気が消える危険"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-7.png", 
        q: "このruby>状態<rt>じょうたい</rt></ruby>での作業において、最も<ruby>懸念<rt>けねん</rt></ruby>される労働安全上のリスクは何ですか。", 
        ans: "集中力が低下し、機械に手を巻き込まれるなどの大ケガをする危険", 
        opts: ["製品のデザインが変わってしまう危険", "集中力が低下し、機械に手を巻き込まれるなどの大ケガをする危険", "給料が減ってしまう危険"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-8.png", 
        q: "このイラストの行動において、予測される不安全行動（危険）は何ですか。", 
        ans: "椅子が動いてバランスを崩し、墜落・転落（高いところから落ちる）する危険", 
        opts: ["椅子が壊れる危険", "衣服が汚れる危険", "椅子が動いてバランスを崩し、墜落・転落（高いところから落ちる）する危険"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-9.png", 
        q: "<ruby>機械<rt>きかい</rt></ruby>の安全カバーを外して作業することについて、正しい説明はどれですか。", 
        ans: "絶対にやってはいけない（巻き込まれ事故の最大の原因になる）", 
        opts: ["作業が速くなるなら外しても良い", "絶対にやってはいけない（巻き込まれ事故の最大の原因になる）", "管理者の許可があれば、外したままでずっと作業して良い"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-10.png", 
        q: "このイラストのような状態のままだと、火災や地震などの<ruby>緊急<rt>きんきゅう</rt></ruby>時にどのような問題が起きますか。", 
        ans: "避難（ひなん）が遅れ、逃げ遅れて命の危険が生じる", 
        opts: ["荷物が濡れてしまう", "避難（ひなん）が遅れ、逃げ遅れて命の危険が生じる", "泥棒に入られやすくなる"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-11.png", 
        q: "<ruby>排水<rt>はいすい</rt></ruby>溝や大きな機械の下を清掃するときの注意点として、正しいものはどれですか。", 
        ans: "排水溝は蓋を外してしっかり洗い、床に微生物が増えないよう濡れたままにしない", 
        opts: ["水を流すだけで蓋は外さなくてよい", "排水溝は蓋を外してしっかり洗い、床に微生物が増えないよう濡れたままにしない", "作業を早く終わらせるために床を濡らしたままにする"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-12.png", 
        q: "イラストのように箱を重ねて運ぶとき、<ruby>転倒<rt>てんとう</rt></ruby>災害を防ぐための正しいルールはどれですか。", 
        ans: "前が見える（足元が確認できる）数の箱を持って運ぶ", 
        opts: ["一回で多く運ぶためにできるだけ高く積み上げる", "前が見える（足元が確認できる）数の箱を持って運ぶ", "走りながら素早く運ぶ"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-13.png", 
        q: "このイラストのように、機械に製品がつまって止まった（ように見える）ときの正しい対応はどれですか。", 
        ans: "必ず停止ボタンを押し、機械が完全に止まったことを確認してからトラブルを取り除く", 
        opts: ["動く力が遅いので、そのまま手を入れて製品を取り除く", "必ず停止ボタンを押し、機械が完全に止まったことを確認してからトラブルを取り除く", "カバーを開けたまま別のスイッチを入れる"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-14.png", 
        q: "冷凍した魚や硬い野菜を切る作業での「切れ・こすれ」災害を防ぐために、着用すべき安全保護具はどれですか。", 
        ans: "耐切創手袋（切れ防止用の保護手袋）", 
        opts: ["薄手のビニール手袋", "耐切創手袋（切れ防止用の保護手袋）", "手袋は何もつけなくてよい"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-15.png", 
        q: "イラストのように脚立（きゃたつ）を使って作業するとき、墜落・転落を防ぐための正しい使い方はどれですか。", 
        ans: "必ず「開き止め金具」をセットして使い、乗り降りは片手を空けて脚立をつかむ", 
        opts: ["「開き止め金具」はセットしなくてもバランスを取ればよい", "必ず「開き止め金具」をセットして使い、乗り降りは片手を空けて脚立をつかむ", "荷物を両手に持ったまま勢いよく飛び降りる"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-16.png", 
        q: "オーブンの鉄板や鍋、釜を運ぶときの「やけど」災害対策として、正しい行動はどれですか。", 
        ans: "必ず保護手袋を着用し、運ぶ前に周囲の人へ「高温注意」の声をかける", 
        opts: ["素手で触って熱さを確かめてから運ぶ", "必ず保護手袋を着用し、運ぶ前に周囲の人へ「高温注意」の声をかける", "冷めるまで2時間機械の中に放置する"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-17.png", 
        q: "<ruby>消毒<rt>しょうどく</rt></ruby>用アルコールの置き場所として、イラストのどこが危険（火災の原因）ですか。", 
        ans: "オーブンなど高温になる機械の近くに置くと、アルコールに火がつく危険がある", 
        opts: ["オーブンなど高温になる機械の近くに置くと、アルコールに火がつく危険がある", "アルコールが蒸発して中身が美味しくなる", "特に危険はない"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-18.png", 
        q: "この<ruby>安全<rt>あんぜん</rt></ruby><ruby>標識<rt>ひょうしき</rt></ruby>（イエローサイン）が示している正しい意味はどれですか。", 
        ans: "やけど注意（高温注意）", 
        opts: ["立入禁止", "感電注意", "やけど注意（高温注意）"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-19.png", 
        q: "この<ruby>安全<rt>あんぜん</rt></ruby><ruby>標識<rt>ひょうしき</rt></ruby>が作業場内で禁止している行動は何ですか。", 
        ans: "走ること（走行禁止）", 
        opts: ["歩くこと", "走ること（走行禁止）", "物を持って移動すること"] 
    },
    { 
        type: "praktik", 
        img_src: "ilustrasi-soal-praktik-20.png", 
        q: "この<ruby>安全<rt>あんぜん</rt></ruby><ruby>標識<rt>ひょうしき</rt></ruby>が警告している、機械作業時のリスクは何ですか。", 
        ans: "はさまれ・巻き込まれ注意", 
        opts: ["はさまれ・巻き込まれ注意", "頭上注意", "足元注意"] 
    }
];

let currentMode = ""; 
let activeQuizList = [];
let currentIndex = 0;
let answered = false;
let examTimerInterval = null;
let totalExamSeconds = 70 * 60; 

let scoreCorrect = 0;
let scoreWrong = 0;
let wrongAnswersHistory = [];

const correctSound = new Audio("correct-sound-effect.mp3");
const wrongSound = new Audio("wrong-sound-effect.mp3");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function backToMenu() {
    clearInterval(examTimerInterval);
    document.getElementById("main-menu").classList.remove("hidden");
    document.getElementById("app-container").classList.add("hidden");
    document.getElementById("review-container").classList.add("hidden");
}

function startFlashcardMode() {
    currentMode = "flashcard";
    scoreCorrect = 0;
    scoreWrong = 0;
    wrongAnswersHistory = [];
    
    document.getElementById("exam-timer").classList.add("hidden");
    document.getElementById("image-container").classList.replace("flex", "hidden");
    document.getElementById("live-counter").classList.remove("hidden");
    updateLiveCounter();
    
    // 1. Acak seluruh database kotoba terlebih dahulu
    let shuffledDb = shuffle([...flashcardDataset]);
    
    // 2. Ambil maksimal 50 kotoba saja untuk sesi ini (User akan selalu dapat kombinasi baru)
    activeQuizList = shuffledDb.slice(0, 50); 
    currentIndex = 0;
    
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("review-container").classList.add("hidden");
    document.getElementById("app-container").classList.remove("hidden");
    showFlashcard();
}

function updateLiveCounter() {
    document.getElementById("count-correct").innerText = scoreCorrect;
    document.getElementById("count-wrong").innerText = scoreWrong;
}

function showFlashcard() {
    answered = false;
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("feedback").innerText = "";
    
    const item = activeQuizList[currentIndex];
    document.getElementById("progress-text").innerText = `${currentIndex + 1}/${activeQuizList.length}`;
    
    document.getElementById("question-box").innerHTML = `
        <div id="fc-card" class="flip-card w-full h-36 cursor-pointer">
            <div class="flip-card-inner relative w-full h-full">
                <div class="flip-card-front absolute inset-0 bg-white rounded-xl flex flex-col items-center justify-center border border-slate-200">
                    <span class="absolute top-1 left-2 text-[10px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded">${item.cat}</span>
                    <div class="text-2xl font-bold text-slate-800 tracking-wider ruby-container">${item.ruby}</div>
                    <p class="text-[10px] text-slate-400 mt-2">(Klik untuk melihat arti kata)</p>
                </div>
                <div class="flip-card-back absolute inset-0 bg-slate-800 text-white rounded-xl flex items-center justify-center p-4">
                    <div class="text-lg font-bold text-center">${item.arti}</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById("fc-card").onclick = function() { this.classList.toggle("flipped"); };

    let opts = [item.arti];
    let wrongOpts = flashcardDataset.filter(d => d.arti !== item.arti).map(d => d.arti);
    shuffle(wrongOpts);
    opts.push(wrongOpts[0], wrongOpts[1]);
    shuffle(opts);

    renderOptions(opts, item.arti);
}

function startExamMode() {
    currentMode = "exam";
    scoreCorrect = 0;
    scoreWrong = 0;
    currentIndex = 0;
    totalExamSeconds = 70 * 60; 
    wrongAnswersHistory = [];
    
    document.getElementById("exam-timer").classList.remove("hidden");
    document.getElementById("live-counter").classList.add("hidden");
    document.getElementById("main-menu").classList.add("hidden");
    document.getElementById("review-container").classList.add("hidden");
    document.getElementById("app-container").classList.remove("hidden");
    
    // 1. Ambil semua soal berdasarkan tipenya, lalu acak masing-masing kelompoknya
    let semuaTeori = shuffle([...examDataset.filter(d => d.type === "teori")]);
    let semuaPraktik = shuffle([...examDataset.filter(d => d.type === "praktik")]);
    
    // 2. Batasi jumlahnya: Ambil 30 teori pertama dan 10 praktik pertama hasil acakan
    let teoriTerpilih = semuaTeori.slice(0, 30);
    let praktikTerpilih = semuaPraktik.slice(0, 10);
    
    // 3. Gabungkan menjadi total 40 soal untuk ujian
    activeQuizList = teoriTerpilih.concat(praktikTerpilih); 
    
    // Add (//) to turn off shuffle mode:
    //activeQuizList = shuffle(activeQuizList);
    
    startTimer();
    showExamQuestion();
}

function startTimer() {
    clearInterval(examTimerInterval);
    examTimerInterval = setInterval(() => {
        totalExamSeconds--;
        let mins = Math.floor(totalExamSeconds / 60);
        let secs = totalExamSeconds % 60;
        document.getElementById("exam-timer").innerText = `⏱️ Sisa Waktu: ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (totalExamSeconds <= 0) {
            clearInterval(examTimerInterval);
            alert("Waktu Habis! Mengakhiri Ujian.");
            finishSession();
        }
    }, 1000);
}

function showExamQuestion() {
    answered = false;
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("feedback").innerText = "";
    
    const item = activeQuizList[currentIndex];
    document.getElementById("progress-text").innerText = `${currentIndex + 1}/${activeQuizList.length}`;

    const imgContainer = document.getElementById("image-container");
    if (item.type === "praktik") {
        // Menggunakan kombinasi remove/add yang aman serta mengganti kelas hidden menjadi flex secara eksplisit
        imgContainer.classList.remove("hidden");
        imgContainer.classList.add("flex"); 
        imgContainer.innerHTML = `<img src="${item.img_src}" alt="Ilustrasi Soal" class="h-full w-auto object-contain p-2 relative z-10">`;
    } else {
        imgContainer.classList.remove("flex");
        imgContainer.classList.add("hidden");
        imgContainer.innerHTML = "";
    }

    document.getElementById("question-box").innerHTML = `<div class="text-xl font-medium leading-relaxed text-slate-800 ruby-container">${item.q}</div>`;

    let opts = shuffle([...item.opts]);
    renderOptions(opts, item.ans);
}

function renderOptions(optionsArray, correctAns) {
    const container = document.getElementById("options-container");
    container.innerHTML = "";
    
    optionsArray.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerHTML = opt; 
        btn.className = "w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-xl text-left transition shadow-sm focus:outline-none";
        btn.onclick = () => checkUserSelection(btn, opt, correctAns);
        container.appendChild(btn);
    });
}

function checkUserSelection(btnElement, selectedVal, correctVal) {
    if (answered) return;
    answered = true;

    const feedback = document.getElementById("feedback");
    const currentQuestionItem = activeQuizList[currentIndex];
    
    if (selectedVal === correctVal) {
        scoreCorrect++;
        feedback.innerText = "🎉 正解 (Benar)";
        feedback.className = "text-center h-6 text-base font-semibold text-emerald-600";
        btnElement.className = "w-full py-3 px-4 bg-emerald-100 border border-emerald-500 text-emerald-800 font-bold rounded-xl text-left shadow-sm";
        
        correctSound.currentTime = 0;
        correctSound.play().catch(e => console.log(e));
    } else {
        scoreWrong++;
        feedback.innerText = "❌ 不正解 (Salah)";
        feedback.className = "text-center h-6 text-base font-semibold text-rose-600";
        btnElement.className = "w-full py-3 px-4 bg-rose-100 border border-rose-500 text-rose-800 font-bold rounded-xl text-left shadow-sm";
        
        wrongSound.currentTime = 0;
        wrongSound.play().catch(e => console.log(e));

        wrongAnswersHistory.push({
            question: currentMode === "flashcard" ? currentQuestionItem.ruby : currentQuestionItem.q,
            userAns: selectedVal,
            correctAns: correctVal
        });

    }

    if (currentMode === "flashcard") {
        updateLiveCounter();
        if (document.getElementById("fc-card")) {
            setTimeout(() => { document.getElementById("fc-card").classList.add("flipped"); }, 400);
        }
    }

    const isAutoNext = document.getElementById("auto-next-toggle").checked;

    if (isAutoNext) {
        document.getElementById("next-btn").classList.add("hidden");
        setTimeout(() => {
            goToNextQuestion();
        }, 1500); 
    } else {
        document.getElementById("next-btn").classList.remove("hidden");
    }
}

function goToNextQuestion() {
    currentIndex++;
    if (currentIndex < activeQuizList.length) {
        if (currentMode === "flashcard") showFlashcard();
        if (currentMode === "exam") showExamQuestion();
    } else {
        finishSession();
    }
}

document.getElementById("next-btn").onclick = () => {
    goToNextQuestion();
};

function finishSession() {
    clearInterval(examTimerInterval);
    
    document.getElementById("app-container").classList.add("hidden");
    
    const reviewContainer = document.getElementById("review-container");
    reviewContainer.classList.remove("hidden");

    const totalQuestions = activeQuizList.length;
    const finalScore = Math.round((scoreCorrect / totalQuestions) * 100);
    
    let statusText = finalScore >= 60 ? "合格 (LULUS)" : "不合格 (BELUM LULUS)";
    let statusClass = finalScore >= 60 ? "text-emerald-600" : "text-rose-600";
    
    document.getElementById("review-score-title").innerText = `Hasil Sesi ${currentMode === "flashcard" ? "Kotoba" : "Simulasi Ujian"}`;
    document.getElementById("review-status").innerText = statusText;
    document.getElementById("review-status").className = `text-2xl font-black ${statusClass}`;
    document.getElementById("review-score-details").innerText = `Skor Akhir: ${finalScore}% (${scoreCorrect} Benar dari ${totalQuestions} Soal)`;

    const listBody = document.getElementById("review-list-body");
    listBody.innerHTML = "";

    if (wrongAnswersHistory.length === 0) {
        listBody.innerHTML = `
            <div class="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold rounded-xl text-center">
                💯 Sempurna! Tidak ada kesalahan jawaban pada sesi ini.
            </div>
        `;
    } else {
        wrongAnswersHistory.forEach((item, idx) => {
            const row = document.createElement("div");
            row.className = "bg-slate-50 border border-slate-200 p-3 rounded-xl flex flex-col gap-1 text-sm";
            row.innerHTML = `
                <div class="font-bold text-slate-700 flex gap-1.5">
                    <span>${idx + 1}.</span>
                    <span class="leading-relaxed ruby-container">${item.question}</span>
                </div>
                <div class="mt-1 text-xs grid grid-cols-1 gap-0.5">
                    <p class="text-rose-600 font-medium">❌ Jawaban Anda: ${item.userAns}</p>
                    <p class="text-emerald-600 font-semibold">✅ Kunci Benar: ${item.correctAns}</p>
                </div>
            `;
            listBody.appendChild(row);
        });
    }
}