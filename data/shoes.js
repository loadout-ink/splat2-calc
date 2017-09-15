angular.module('splatApp').shoes = function($scope) {
  $scope.shoes = [
  {
    image: "./assets/img/gear/Shs_FST000.png",
    name: "Cream Basics",
    localizedName: {
      "ja_JP": "キャンバス ホワイト",
      "en_US": "Cream Basics",
      "en_GB": "Cream Basics",
      "es_ES": "Tennis crème",
      "es_MX": "Tennis crème",
      "fr_FR": "Tennis crème",
      "fr_CA": "Tennis crème"
    },
    main: "Special Saver",
    brand: "Krak-On",
    stars: 1,
    id: 0
  },
  {
    image: "./assets/img/gear/Shs_SLO003.png",
    name: "White Seahorses",
    localizedName: {
      "ja_JP": "シーホース ホワイト",
      "en_US": "White Seahorses",
      "en_GB": "White Seahorses",
      "es_ES": "Hippo blanches",
      "es_MX": "Hippo blanches",
      "fr_FR": "Hippo blanches",
      "fr_CA": "Hippo blanches"
    },
    main: "Ink Recovery Up",
    brand: "Zink",
    stars: 1,
    id: 1
  },
  {
    image: "./assets/img/gear/Shs_SLO008.png",
    name: "Strapping Whites",
    localizedName: {
      "ja_JP": "ベリベリホワイト",
      "en_US": "Strapping Whites",
      "en_GB": "Strapping Whites",
      "es_ES": "Baskets à scratch blanches",
      "es_MX": "Baskets à scratch blanches",
      "fr_FR": "Baskets à scratch blanches",
      "fr_CA": "Baskets à scratch blanches"
    },
    main: "Ink Saver (Sub)",
    brand: "Splash Mob",
    stars: 3,
    id: 2
  },
  {
    image: "./assets/img/gear/Shs_SLO009.png",
    name: "Strapping Reds",
    localizedName: {
      "ja_JP": "ベリベリレッド",
      "en_US": "Strapping Reds",
      "en_GB": "Strapping Reds",
      "es_ES": "Baskets à scratch rouges",
      "es_MX": "Baskets à scratch rouges",
      "fr_FR": "Baskets à scratch rouges",
      "fr_CA": "Baskets à scratch rouges"
    },
    main: "Ink Resistance Up",
    brand: "Splash Mob",
    stars: 1,
    id: 3
  },
  {
    image: "./assets/img/gear/Shs_SLO011.png",
    name: "LE Soccer Shoes",
    localizedName: {
      "ja_JP": "レアスパイカ",
      "en_US": "LE Soccer Shoes",
      "en_GB": "LE Soccer Shoes",
      "es_ES": "Chaussures à crampons DX",
      "es_MX": "Chaussures à crampons DX",
      "fr_FR": "Chaussures à crampons DX",
      "fr_CA": "Chaussures à crampons DX"
    },
    main: "Ink Resistance Up",
    brand: "Takoroka",
    stars: 3,
    id: 4
  },
  {
    image: "./assets/img/gear/Shs_SLO012.png",
    name: "Sunny Climbing Shoes",
    localizedName: {
      "ja_JP": "ボルダーシューズ タイノエ",
      "en_US": "Sunny Climbing Shoes",
      "en_GB": "Sunny Climbing Shoes",
      "es_ES": "Souliers d'escalade été",
      "es_MX": "Souliers d'escalade été",
      "fr_FR": "Souliers d'escalade été",
      "fr_CA": "Souliers d'escalade été"
    },
    main: "Special Saver",
    brand: "Inkline",
    stars: 2,
    id: 5
  },
  {
    image: "./assets/img/gear/Shs_SLO013.png",
    name: "Birch Climbing Shoes",
    localizedName: {
      "ja_JP": "ボルダーシューズ ハザクラ",
      "en_US": "Birch Climbing Shoes",
      "en_GB": "Birch Climbing Shoes",
      "es_ES": "Souliers d'escalade printemps",
      "es_MX": "Souliers d'escalade printemps",
      "fr_FR": "Souliers d'escalade printemps",
      "fr_CA": "Souliers d'escalade printemps"
    },
    main: "Special Charge Up",
    brand: "Inkline",
    stars: 1,
    id: 6
  },
  {
    image: "./assets/img/gear/Shs_SHI000.png",
    name: "Red Hi-Horses",
    localizedName: {
      "ja_JP": "シーホースHi レッド",
      "en_US": "Red Hi-Horses",
      "en_GB": "Red Hi-Horses",
      "es_ES": "Hippo montantes rouges",
      "es_MX": "Hippo montantes rouges",
      "fr_FR": "Hippo montantes rouges",
      "fr_CA": "Hippo montantes rouges"
    },
    main: "Ink Saver (Main)",
    brand: "Zink",
    stars: 1,
    id: 7
  },
  {
    image: "./assets/img/gear/Shs_SHI003.png",
    name: "Purple Hi-Horses",
    localizedName: {
      "ja_JP": "シーホースHi パープル",
      "en_US": "Purple Hi-Horses",
      "en_GB": "Purple Hi-Horses",
      "es_ES": "Hippo montantes violettes",
      "es_MX": "Hippo montantes violettes",
      "fr_FR": "Hippo montantes violettes",
      "fr_CA": "Hippo montantes violettes"
    },
    main: "Special Power Up",
    brand: "Zink",
    stars: 1,
    id: 8
  },
  {
    image: "./assets/img/gear/Shs_SHI004.png",
    name: "Hunter Hi-Tops",
    localizedName: {
      "ja_JP": "キャンバスHi モロヘイヤ",
      "en_US": "Hunter Hi-Tops",
      "en_GB": "Hunter Hi-Tops",
      "es_ES": "Tennis montantes algue",
      "es_MX": "Tennis montantes algue",
      "fr_FR": "Tennis montantes algue",
      "fr_CA": "Tennis montantes algue"
    },
    main: "Ink Recovery Up",
    brand: "Krak-On",
    stars: 1,
    id: 9
  },
  {
    image: "./assets/img/gear/Shs_SHI006.png",
    name: "Gold Hi-Horses",
    localizedName: {
      "ja_JP": "シーホースHi ゴールド",
      "en_US": "Gold Hi-Horses",
      "en_GB": "Gold Hi-Horses",
      "es_ES": "Hippo montantes or",
      "es_MX": "Hippo montantes or",
      "fr_FR": "Hippo montantes or",
      "fr_CA": "Hippo montantes or"
    },
    main: "Run Speed Up",
    brand: "Zink",
    stars: 3,
    id: 10
  },
  {
    image: "./assets/img/gear/Shs_SHI009.png",
    name: "Mawcasins",
    localizedName: {
      "ja_JP": "ジョーズモカシン",
      "en_US": "Mawcasins",
      "en_GB": "Mawcasins",
      "es_ES": "Mocassins carnassier",
      "es_MX": "Mocassins carnassier",
      "fr_FR": "Mocassins carnassier",
      "fr_CA": "Mocassins carnassier"
    },
    main: "Ink Recovery Up",
    brand: "Splash Mob",
    stars: 2,
    id: 11
  },
  {
    image: "./assets/img/gear/Shs_SHI011.png",
    name: "Mint Dakroniks",
    localizedName: {
      "ja_JP": "デカロニックミント",
      "en_US": "Mint Dakroniks",
      "en_GB": "Mint Dakroniks",
      "es_ES": "Baskets montantes azur",
      "es_MX": "Baskets montantes azur",
      "fr_FR": "Baskets montantes azur",
      "fr_CA": "Baskets montantes azur"
    },
    main: "Drop Roller",
    brand: "Zink",
    stars: 1,
    id: 12
  },
  {
    image: "./assets/img/gear/Shs_SHI012.png",
    name: "Black Dakroniks",
    localizedName: {
      "ja_JP": "デカロニックブラック",
      "en_US": "Black Dakroniks",
      "en_GB": "Black Dakroniks",
      "es_ES": "Baskets montantes noires",
      "es_MX": "Baskets montantes noires",
      "fr_FR": "Baskets montantes noires",
      "fr_CA": "Baskets montantes noires"
    },
    main: "Cold-Blooded",
    brand: "Zink",
    stars: 2,
    id: 13
  },
  {
    image: "./assets/img/gear/Shs_SHI013.png",
    name: "Piranha Moccasins",
    localizedName: {
      "ja_JP": "ピラニアモカシン",
      "en_US": "Piranha Moccasins",
      "en_GB": "Piranha Moccasins",
      "es_ES": "Mocassins piranha",
      "es_MX": "Mocassins piranha",
      "fr_FR": "Mocassins piranha",
      "fr_CA": "Mocassins piranha"
    },
    main: "Stealth Jump",
    brand: "Splash Mob",
    stars: 3,
    id: 14
  },
  {
    image: "./assets/img/gear/Shs_SHI014.png",
    name: "White Norimaki 750s",
    localizedName: {
      "ja_JP": "ノリマキ750 ホワイト",
      "en_US": "White Norimaki 750s",
      "en_GB": "White Norimaki 750s",
      "es_ES": "Tennis high-tech blanches",
      "es_MX": "Tennis high-tech blanches",
      "fr_FR": "Tennis high-tech blanches",
      "fr_CA": "Tennis high-tech blanches"
    },
    main: "Swim Speed Up",
    brand: "Tentatek",
    stars: 2,
    id: 15
  },
  {
    image: "./assets/img/gear/Shs_SHI015.png",
    name: "Black Norimaki 750s",
    localizedName: {
      "ja_JP": "ノリマキ750 ブラック",
      "en_US": "Black Norimaki 750s",
      "en_GB": "Black Norimaki 750s",
      "es_ES": "Tennis high-tech noires",
      "es_MX": "Tennis high-tech noires",
      "fr_FR": "Tennis high-tech noires",
      "fr_CA": "Tennis high-tech noires"
    },
    main: "Special Charge Up",
    brand: "Tentatek",
    stars: 3,
    id: 16
  },
  {
    image: "./assets/img/gear/Shs_SHI016.png",
    name: "Sunset Orca Hi-Tops",
    localizedName: {
      "ja_JP": "オルカHiサンセット",
      "en_US": "Sunset Orca Hi-Tops",
      "en_GB": "Sunset Orca Hi-Tops",
      "es_ES": "Orques crépuscule",
      "es_MX": "Orques crépuscule",
      "fr_FR": "Orques crépuscule",
      "fr_CA": "Orques crépuscule"
    },
    main: "Drop Roller",
    brand: "Takoroka",
    stars: 2,
    id: 17
  },
  {
    image: "./assets/img/gear/Shs_SHI017.png",
    name: "Red & Black Squidkid IV",
    localizedName: {
      "ja_JP": "エギング4 アカクロ",
      "en_US": "Red & Black Squidkid IV",
      "en_GB": "Red & Black Squidkid IV",
      "es_ES": "Egings IV rouges et noires",
      "es_MX": "Egings IV rouges et noires",
      "fr_FR": "Egings IV rouges et noires",
      "fr_CA": "Egings IV rouges et noires"
    },
    main: "Special Charge Up",
    brand: "Enperry",
    stars: 3,
    id: 18
  },
  {
    image: "./assets/img/gear/Shs_SHI018.png",
    name: "Blue & Black Squidkid IV",
    localizedName: {
      "ja_JP": "エギング4 アオクロ",
      "en_US": "Blue & Black Squidkid IV",
      "en_GB": "Blue & Black Squidkid IV",
      "es_ES": "Egings IV bleues et noires",
      "es_MX": "Egings IV bleues et noires",
      "fr_FR": "Egings IV bleues et noires",
      "fr_CA": "Egings IV bleues et noires"
    },
    main: "Quick Super Jump",
    brand: "Enperry",
    stars: 3,
    id: 19
  },
  {
    image: "./assets/img/gear/Shs_SHI019.png",
    name: "Gray Sea-Slug Hi-Tops",
    localizedName: {
      "ja_JP": "ウミウシタウンHi グレー",
      "en_US": "Gray Sea-Slug Hi-Tops",
      "en_GB": "Gray Sea-Slug Hi-Tops",
      "es_ES": "Anguilles montantes grises",
      "es_MX": "Anguilles montantes grises",
      "fr_FR": "Anguilles montantes grises",
      "fr_CA": "Anguilles montantes grises"
    },
    main: "Bomb Defense Up",
    brand: "Tentatek",
    stars: 3,
    id: 20
  },
  {
    image: "./assets/img/gear/Shs_SHI020.png",
    name: "Orca Hi-Tops",
    localizedName: {
      "ja_JP": "オルカHi",
      "en_US": "Orca Hi-Tops",
      "en_GB": "Orca Hi-Tops",
      "es_ES": "Orques classiques",
      "es_MX": "Orques classiques",
      "fr_FR": "Orques classiques",
      "fr_CA": "Orques classiques"
    },
    main: "Special Saver",
    brand: "Takoroka",
    stars: 2,
    id: 21
  },
  {
    image: "./assets/img/gear/Shs_SHT000.png",
    name: "Pink Trainers",
    localizedName: {
      "ja_JP": "ピンクビーンズ",
      "en_US": "Pink Trainers",
      "en_GB": "Pink Trainers",
      "es_ES": "Baskets roses",
      "es_MX": "Baskets roses",
      "fr_FR": "Baskets roses",
      "fr_CA": "Baskets roses"
    },
    main: "Sub Power Up",
    brand: "Tentatek",
    stars: 1,
    id: 22
  },
  {
    image: "./assets/img/gear/Shs_SHT001.png",
    name: "Orange Arrows",
    localizedName: {
      "ja_JP": "オレンジアローズ",
      "en_US": "Orange Arrows",
      "en_GB": "Orange Arrows",
      "es_ES": "Flèches orange",
      "es_MX": "Flèches orange",
      "fr_FR": "Flèches orange",
      "fr_CA": "Flèches orange"
    },
    main: "Ink Saver (Main)",
    brand: "Takoroka",
    stars: 1,
    id: 23
  },
  {
    image: "./assets/img/gear/Shs_SHT002.png",
    name: "Neon Sea Slugs",
    localizedName: {
      "ja_JP": "ウミウシイエロー",
      "en_US": "Neon Sea Slugs",
      "en_GB": "Neon Sea Slugs",
      "es_ES": "Anguilles vert fluo",
      "es_MX": "Anguilles vert fluo",
      "fr_FR": "Anguilles vert fluo",
      "fr_CA": "Anguilles vert fluo"
    },
    main: "Ink Resistance Up",
    brand: "Tentatek",
    stars: 1,
    id: 24
  },
  {
    image: "./assets/img/gear/Shs_SHT007.png",
    name: "Purple Sea Slugs",
    localizedName: {
      "ja_JP": "ウミウシパープル",
      "en_US": "Purple Sea Slugs",
      "en_GB": "Purple Sea Slugs",
      "es_ES": "Anguilles violettes",
      "es_MX": "Anguilles violettes",
      "fr_FR": "Anguilles violettes",
      "fr_CA": "Anguilles violettes"
    },
    main: "Run Speed Up",
    brand: "Tentatek",
    stars: 2,
    id: 25
  },
  {
    image: "./assets/img/gear/Shs_SHT008.png",
    name: "Crazy Arrows",
    localizedName: {
      "ja_JP": "クレイジーアローズ",
      "en_US": "Crazy Arrows",
      "en_GB": "Crazy Arrows",
      "es_ES": "Flèches délirium",
      "es_MX": "Flèches délirium",
      "fr_FR": "Flèches délirium",
      "fr_CA": "Flèches délirium"
    },
    main: "Stealth Jump",
    brand: "Takoroka",
    stars: 2,
    id: 26
  },
  {
    image: "./assets/img/gear/Shs_SHT009.png",
    name: "Black Trainers",
    localizedName: {
      "ja_JP": "ブラックビーンズ",
      "en_US": "Black Trainers",
      "en_GB": "Black Trainers",
      "es_ES": "Baskets noires",
      "es_MX": "Baskets noires",
      "fr_FR": "Baskets noires",
      "fr_CA": "Baskets noires"
    },
    main: "Quick Respawn",
    brand: "Tentatek",
    stars: 1,
    id: 27
  },
  {
    image: "./assets/img/gear/Shs_SHT011.png",
    name: "Canary Trainers",
    localizedName: {
      "ja_JP": "カナリアビーンズ",
      "en_US": "Canary Trainers",
      "en_GB": "Canary Trainers",
      "es_ES": "Baskets canari",
      "es_MX": "Baskets canari",
      "fr_FR": "Baskets canari",
      "fr_CA": "Baskets canari"
    },
    main: "Quick Super Jump",
    brand: "Tentatek",
    stars: 1,
    id: 28
  },
  {
    image: "./assets/img/gear/Shs_SHT012.png",
    name: "Yellow-Mesh Sneakers",
    localizedName: {
      "ja_JP": "アロメッシュイエロー",
      "en_US": "Yellow-Mesh Sneakers",
      "en_GB": "Yellow-Mesh Sneakers",
      "es_ES": "Baskets filet jaune",
      "es_MX": "Baskets filet jaune",
      "fr_FR": "Baskets filet jaune",
      "fr_CA": "Baskets filet jaune"
    },
    main: "Cold-Blooded",
    brand: "Tentatek",
    stars: 1,
    id: 29
  },
  {
    image: "./assets/img/gear/Shs_SHT013.png",
    name: "Arrow Pull-Ons",
    localizedName: {
      "ja_JP": "アローズ タタキベッチュー",
      "en_US": "Arrow Pull-Ons",
      "en_GB": "Arrow Pull-Ons",
      "es_ES": "Flèches unies",
      "es_MX": "Flèches unies",
      "fr_FR": "Flèches unies",
      "fr_CA": "Flèches unies"
    },
    main: "Drop Roller",
    brand: "Toni Kensa",
    stars: 3,
    id: 30
  },
  {
    image: "./assets/img/gear/Shs_SHT014.png",
    name: "Red-Mesh Sneakers",
    localizedName: {
      "ja_JP": "アロメッシュバーミリオン",
      "en_US": "Red-Mesh Sneakers",
      "en_GB": "Red-Mesh Sneakers",
      "es_ES": "Baskets filet orange",
      "es_MX": "Baskets filet orange",
      "fr_FR": "Baskets filet orange",
      "fr_CA": "Baskets filet orange"
    },
    main: "Special Power Up",
    brand: "Tentatek",
    stars: 2,
    id: 31
  },
  {
    image: "./assets/img/gear/Shs_SDL000.png",
    name: "Oyster Clogs",
    localizedName: {
      "ja_JP": "オイスタークロッグ",
      "en_US": "Oyster Clogs",
      "en_GB": "Oyster Clogs",
      "es_ES": "Sabots huître",
      "es_MX": "Sabots huître",
      "fr_FR": "Sabots huître",
      "fr_CA": "Sabots huître"
    },
    main: "Run Speed Up",
    brand: "Krak-On",
    stars: 1,
    id: 32
  },
  {
    image: "./assets/img/gear/Shs_SDL001.png",
    name: "Choco Clogs",
    localizedName: {
      "ja_JP": "チョコクロッグ",
      "en_US": "Choco Clogs",
      "en_GB": "Choco Clogs",
      "es_ES": "Sabots chocolat",
      "es_MX": "Sabots chocolat",
      "fr_FR": "Sabots chocolat",
      "fr_CA": "Sabots chocolat"
    },
    main: "Quick Respawn",
    brand: "Krak-On",
    stars: 2,
    id: 33
  },
  {
    image: "./assets/img/gear/Shs_CFS000.png",
    name: "Blueberry Casuals",
    localizedName: {
      "ja_JP": "ブルーベリーコンフォート",
      "en_US": "Blueberry Casuals",
      "en_GB": "Blueberry Casuals",
      "es_ES": "Chaussures myrtille",
      "es_MX": "Chaussures myrtille",
      "fr_FR": "Chaussures myrtille",
      "fr_CA": "Chaussures myrtille"
    },
    main: "Ink Saver (Sub)",
    brand: "Krak-On",
    stars: 1,
    id: 34
  },
  {
    image: "./assets/img/gear/Shs_CFS001.png",
    name: "Plum Casuals",
    localizedName: {
      "ja_JP": "アケビコンフォート",
      "en_US": "Plum Casuals",
      "en_GB": "Plum Casuals",
      "es_ES": "Chaussures prune",
      "es_MX": "Chaussures prune",
      "fr_FR": "Chaussures prune",
      "fr_CA": "Chaussures prune"
    },
    main: "Object Shredder",
    brand: "Krak-On",
    stars: 2,
    id: 35
  },
  {
    image: "./assets/img/gear/Shs_SDL003.png",
    name: "Neon Delta Straps",
    localizedName: {
      "ja_JP": "デルタストラップ ネオン",
      "en_US": "Neon Delta Straps",
      "en_GB": "Neon Delta Straps",
      "es_ES": "Sandales fluo",
      "es_MX": "Sandales fluo",
      "fr_FR": "Sandales fluo",
      "fr_CA": "Sandales fluo"
    },
    main: "Sub Power Up",
    brand: "Inkline",
    stars: 2,
    id: 36
  },
  {
    image: "./assets/img/gear/Shs_SDL004.png",
    name: "Black Flip-Flops",
    localizedName: {
      "ja_JP": "BBサンダル",
      "en_US": "Black Flip-Flops",
      "en_GB": "Black Flip-Flops",
      "es_ES": "Tongs noires",
      "es_MX": "Tongs noires",
      "fr_FR": "Tongs noires",
      "fr_CA": "Tongs noires"
    },
    main: "Object Shredder",
    brand: "Zekko",
    stars: 1,
    id: 37
  },
  {
    image: "./assets/img/gear/Shs_SDL005.png",
    name: "Snow Delta Straps",
    localizedName: {
      "ja_JP": "デルタストラップ スノー",
      "en_US": "Snow Delta Straps",
      "en_GB": "Snow Delta Straps",
      "es_ES": "Sandales poudreuse",
      "es_MX": "Sandales poudreuse",
      "fr_FR": "Sandales poudreuse",
      "fr_CA": "Sandales poudreuse"
    },
    main: "Swim Speed Up",
    brand: "Inkline",
    stars: 3,
    id: 38
  },
  {
    image: "./assets/img/gear/Shs_TRS000.png",
    name: "Trail Boots",
    localizedName: {
      "ja_JP": "トレッキングライト",
      "en_US": "Trail Boots",
      "en_GB": "Trail Boots",
      "es_ES": "Chaussures rando",
      "es_MX": "Chaussures rando",
      "fr_FR": "Chaussures rando",
      "fr_CA": "Chaussures rando"
    },
    main: "Ink Recovery Up",
    brand: "Inkline",
    stars: 3,
    id: 39
  },
  {
    image: "./assets/img/gear/Shs_TRS002.png",
    name: "Pro Trail Boots",
    localizedName: {
      "ja_JP": "トレッキングプロ",
      "en_US": "Pro Trail Boots",
      "en_GB": "Pro Trail Boots",
      "es_ES": "Chaussures rando pro",
      "es_MX": "Chaussures rando pro",
      "fr_FR": "Chaussures rando pro",
      "fr_CA": "Chaussures rando pro"
    },
    main: "Ink Resistance Up",
    brand: "Inkline",
    stars: 3,
    id: 40
  },
  {
    image: "./assets/img/gear/Shs_BOT000.png",
    name: "Moto Boots",
    localizedName: {
      "ja_JP": "モトクロスブーツ",
      "en_US": "Moto Boots",
      "en_GB": "Moto Boots",
      "es_ES": "Bottes de moto",
      "es_MX": "Bottes de moto",
      "fr_FR": "Bottes de moto",
      "fr_CA": "Bottes de moto"
    },
    main: "Quick Respawn",
    brand: "Rockenberg",
    stars: 2,
    id: 41
  },
  {
    image: "./assets/img/gear/Shs_BOT003.png",
    name: "Blue Moto Boots",
    localizedName: {
      "ja_JP": "モトクロス ソリッドブルー",
      "en_US": "Blue Moto Boots",
      "en_GB": "Blue Moto Boots",
      "es_ES": "Bottes de moto bleues",
      "es_MX": "Bottes de moto bleues",
      "fr_FR": "Bottes de moto bleues",
      "fr_CA": "Bottes de moto bleues"
    },
    main: "Ink Resistance Up",
    brand: "Rockenberg",
    stars: 3,
    id: 42
  },
  {
    image: "./assets/img/gear/Shs_BOT005.png",
    name: "Acerola Rain Boots",
    localizedName: {
      "ja_JP": "レイニーアセロラ",
      "en_US": "Acerola Rain Boots",
      "en_GB": "Acerola Rain Boots",
      "es_ES": "Bottes de pluie cerise",
      "es_MX": "Bottes de pluie cerise",
      "fr_FR": "Bottes de pluie cerise",
      "fr_CA": "Bottes de pluie cerise"
    },
    main: "Run Speed Up",
    brand: "Inkline",
    stars: 1,
    id: 43
  },
  {
    image: "./assets/img/gear/Shs_BOT006.png",
    name: "Punk Whites",
    localizedName: {
      "ja_JP": "ロッキンホワイト",
      "en_US": "Punk Whites",
      "en_GB": "Punk Whites",
      "es_ES": "Bottines punk blanches",
      "es_MX": "Bottines punk blanches",
      "fr_FR": "Bottines punk blanches",
      "fr_CA": "Bottines punk blanches"
    },
    main: "Special Charge Up",
    brand: "Rockenberg",
    stars: 2,
    id: 44
  },
  {
    image: "./assets/img/gear/Shs_BOT012.png",
    name: "Hunting Boots",
    localizedName: {
      "ja_JP": "ハンティングブーツ",
      "en_US": "Hunting Boots",
      "en_GB": "Hunting Boots",
      "es_ES": "Bottes de chasse",
      "es_MX": "Bottes de chasse",
      "fr_FR": "Bottes de chasse",
      "fr_CA": "Bottes de chasse"
    },
    main: "Bomb Defense Up",
    brand: "Splash Mob",
    stars: 3,
    id: 45
  },
  {
    image: "./assets/img/gear/Shs_BOT013.png",
    name: "Punk Blacks",
    localizedName: {
      "ja_JP": "ロッキンブラック",
      "en_US": "Punk Blacks",
      "en_GB": "Punk Blacks",
      "es_ES": "Bottines punk noires",
      "es_MX": "Bottines punk noires",
      "fr_FR": "Bottines punk noires",
      "fr_CA": "Bottines punk noires"
    },
    main: "Cold-Blooded",
    brand: "Rockenberg",
    stars: 3,
    id: 46
  },
  {
    image: "./assets/img/gear/Shs_SLP000.png",
    name: "Blue Slip-Ons",
    localizedName: {
      "ja_JP": "スリッポン ブルー",
      "en_US": "Blue Slip-Ons",
      "en_GB": "Blue Slip-Ons",
      "es_ES": "Mocassins bleus",
      "es_MX": "Mocassins bleus",
      "fr_FR": "Mocassins bleus",
      "fr_CA": "Mocassins bleus"
    },
    main: "Sub Power Up",
    brand: "Krak-On",
    stars: 1,
    id: 47
  },
  {
    image: "./assets/img/gear/Shs_LTS000.png",
    name: "White Kicks",
    localizedName: {
      "ja_JP": "ラバーソール ホワイト",
      "en_US": "White Kicks",
      "en_GB": "White Kicks",
      "es_ES": "Compensées blanches",
      "es_MX": "Compensées blanches",
      "fr_FR": "Compensées blanches",
      "fr_CA": "Compensées blanches"
    },
    main: "Swim Speed Up",
    brand: "Rockenberg",
    stars: 1,
    id: 48
  },
  {
    image: "./assets/img/gear/Shs_LTS001.png",
    name: "Cherry Kicks",
    localizedName: {
      "ja_JP": "ラバーソール チェリー",
      "en_US": "Cherry Kicks",
      "en_GB": "Cherry Kicks",
      "es_ES": "Compensées roses",
      "es_MX": "Compensées roses",
      "fr_FR": "Compensées roses",
      "fr_CA": "Compensées roses"
    },
    main: "Stealth Jump",
    brand: "Rockenberg",
    stars: 2,
    id: 49
  },
  {
    image: "./assets/img/gear/Shs_LTS004.png",
    name: "Roasted Brogues",
    localizedName: {
      "ja_JP": "イカヤキチップ",
      "en_US": "Roasted Brogues",
      "en_GB": "Roasted Brogues",
      "es_ES": "Richelieu classiques",
      "es_MX": "Richelieu classiques",
      "fr_FR": "Richelieu classiques",
      "fr_CA": "Richelieu classiques"
    },
    main: "Bomb Defense Up",
    brand: "Rockenberg",
    stars: 1,
    id: 50
  },
  {
    image: "./assets/img/gear/Shs_LTS005.png",
    name: "Kid Clams",
    localizedName: {
      "ja_JP": "イカボウズキャメル",
      "en_US": "Kid Clams",
      "en_GB": "Kid Clams",
      "es_ES": "Chaussures double boucle",
      "es_MX": "Chaussures double boucle",
      "fr_FR": "Chaussures double boucle",
      "fr_CA": "Chaussures double boucle"
    },
    main: "Special Power Up",
    brand: "Rockenberg",
    stars: 3,
    id: 51
  },
  {
    image: "./assets/img/gear/Shs_LTS006.png",
    name: "Smoky Wingtips",
    localizedName: {
      "ja_JP": "スモークチップ",
      "en_US": "Smoky Wingtips",
      "en_GB": "Smoky Wingtips",
      "es_ES": "Richelieu fumés",
      "es_MX": "Richelieu fumés",
      "fr_FR": "Richelieu fumés",
      "fr_CA": "Richelieu fumés"
    },
    main: "Object Shredder",
    brand: "Rockenberg",
    stars: 3,
    id: 52
  },
  {
    image: "./assets/img/gear/Shs_AMB000.png",
    name: "School Shoes",
    localizedName: {
      "ja_JP": "スクールローファー",
      "en_US": "School Shoes",
      "en_GB": "School Shoes",
      "es_ES": "Mocassins scolaires",
      "es_MX": "Mocassins scolaires",
      "fr_FR": "Mocassins scolaires",
      "fr_CA": "Mocassins scolaires"
    },
    main: "Ink Saver (Sub)",
    brand: "amiibo",
    stars: 2,
    id: 53
  },
  {
    image: "./assets/img/gear/Shs_AMB001.png",
    name: "Samurai Shoes",
    localizedName: {
      "ja_JP": "サムライシューズ",
      "en_US": "Samurai Shoes",
      "en_GB": "Samurai Shoes",
      "es_ES": "Bottes de samouraï",
      "es_MX": "Bottes de samouraï",
      "fr_FR": "Bottes de samouraï",
      "fr_CA": "Bottes de samouraï"
    },
    main: "Special Power Up",
    brand: "amiibo",
    stars: 2,
    id: 54
  },
  {
    image: "./assets/img/gear/Shs_AMB002.png",
    name: "Power Boots",
    localizedName: {
      "ja_JP": "パワードレッグス",
      "en_US": "Power Boots",
      "en_GB": "Power Boots",
      "es_ES": "Bottes méca",
      "es_MX": "Bottes méca",
      "fr_FR": "Bottes méca",
      "fr_CA": "Bottes méca"
    },
    main: "Ink Saver (Main)",
    brand: "amiibo",
    stars: 2,
    id: 55
  },
  {
    image: "./assets/img/gear/Shs_AMB003.png",
    name: "Fringed Loafers",
    localizedName: {
      "ja_JP": "キルトローファー",
      "en_US": "Fringed Loafers",
      "en_GB": "Fringed Loafers",
      "es_ES": "Mocassins à franges",
      "es_MX": "Mocassins à franges",
      "fr_FR": "Mocassins à franges",
      "fr_CA": "Mocassins à franges"
    },
    main: "Cold-Blooded",
    brand: "amiibo",
    stars: 2,
    id: 56
  },
  {
    image: "./assets/img/gear/Shs_AMB004.png",
    name: "Squinja Boots",
    localizedName: {
      "ja_JP": "シノビアシ",
      "en_US": "Squinja Boots",
      "en_GB": "Squinja Boots",
      "es_ES": "Bottes de ninja",
      "es_MX": "Bottes de ninja",
      "fr_FR": "Bottes de ninja",
      "fr_CA": "Bottes de ninja"
    },
    main: "Swim Speed Up",
    brand: "amiibo",
    stars: 2,
    id: 57
  },
  {
    image: "./assets/img/gear/Shs_AMB005.png",
    name: "Power Boots Mk I",
    localizedName: {
      "ja_JP": "パワードレッグス オリジン",
      "en_US": "Power Boots Mk I",
      "en_GB": "Power Boots Mk I",
      "es_ES": "Bottes méca Mk I",
      "es_MX": "Bottes méca Mk I",
      "fr_FR": "Bottes méca Mk I",
      "fr_CA": "Bottes méca Mk I"
    },
    main: "Bomb Defense Up",
    brand: "amiibo",
    stars: 2,
    id: 58
  },
  {
    image: "./assets/img/gear/Shs_MSN000.png",
    name: "Hero Runner Replicas",
    localizedName: {
      "ja_JP": "ヒーローキックス レプリカ",
      "en_US": "Hero Runner Replicas",
      "en_GB": "Hero Runner Replicas",
      "es_ES": "Baskets héroïques (répliques)",
      "es_MX": "Baskets héroïques (répliques)",
      "fr_FR": "Baskets héroïques (répliques)",
      "fr_CA": "Baskets héroïques (répliques)"
    },
    main: "Quick Super Jump",
    brand: "Cuttlegear",
    stars: 2,
    id: 59
  },
  {
    image: "./assets/img/gear/Shs_MSN004.png",
    name: "Armor Boot Replicas",
    localizedName: {
      "ja_JP": "アーマーブーツ レプリカ",
      "en_US": "Armor Boot Replicas",
      "en_GB": "Armor Boot Replicas",
      "es_ES": "Bottes encrifugées (répliques)",
      "es_MX": "Bottes encrifugées (répliques)",
      "fr_FR": "Bottes encrifugées (répliques)",
      "fr_CA": "Bottes encrifugées (répliques)"
    },
    main: "Ink Saver (Main)",
    brand: "Cuttlegear",
    stars: 2,
    id: 60
  },
  {
    image: "./assets/img/gear/Shs_MSN101.png",
    name: "Hero Snowboots Replicas",
    localizedName: {
      "ja_JP": "ヒーローバインダー レプリカ",
      "en_US": "Hero Snowboots Replicas",
      "en_GB": "Hero Snowboots Replicas",
      "es_ES": "Bottes héroïques (répliques)",
      "es_MX": "Bottes héroïques (répliques)",
      "fr_FR": "Bottes héroïques (répliques)",
      "fr_CA": "Bottes héroïques (répliques)"
    },
    main: "Ink Saver (Sub)",
    brand: "Cuttlegear",
    stars: 2,
    id: 61
  }
]
}
