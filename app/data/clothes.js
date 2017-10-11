angular.module('splatApp').clothes = function($scope) {
  $scope.clothes = [
  {
    image: "../common/assets/img/gear/Clt_FST001.png",
    name: "Basic Tee",
    localizedName: {
      "ja_JP": "わかばイカＴ",
      "en_US": "Basic Tee",
      "en_GB": "Basic Tee",
      "es_ES": "Camiseta básica",
      "es_MX": "Camiseta básica",
      "fr_FR": "T-shirt basique",
      "fr_CA": "T-shirt de base"
    },
    main: "Quick Respawn",
    brand: "SquidForce",
    stars: 1,
    id: 0
  },
  {
    image: "../common/assets/img/gear/Clt_TES000.png",
    name: "White Tee",
    localizedName: {
      "ja_JP": "イカホワイト",
      "en_US": "White Tee",
      "en_GB": "White Tee",
      "es_ES": "Camiseta blanca",
      "es_MX": "Camiseta blanca",
      "fr_FR": "T-shirt blanc",
      "fr_CA": "T-shirt blanc"
    },
    main: "Ink Saver (Sub)",
    brand: "SquidForce",
    stars: 1,
    id: 1
  },
  {
    image: "../common/assets/img/gear/Clt_TES001.png",
    name: "Black Squideye",
    localizedName: {
      "ja_JP": "イカノメＴ ブラック",
      "en_US": "Black Squideye",
      "en_GB": "Black Squideye",
      "es_ES": "Ojos calamar negra",
      "es_MX": "Ojos calamar negra",
      "fr_FR": "T-shirt OculR noir",
      "fr_CA": "T-shirt OculR noir"
    },
    main: "Run Speed Up",
    brand: "Tentatek",
    stars: 1,
    id: 2
  },
  {
    image: "../common/assets/img/gear/Clt_TES006.png",
    name: "Black Tee",
    localizedName: {
      "ja_JP": "イカブラック",
      "en_US": "Black Tee",
      "en_GB": "Black Tee",
      "es_ES": "Camiseta negra",
      "es_MX": "Camiseta negra",
      "fr_FR": "T-shirt noir",
      "fr_CA": "T-shirt noir"
    },
    main: "Special Power Up",
    brand: "SquidForce",
    stars: 1,
    id: 3
  },
  {
    image: "../common/assets/img/gear/Clt_TES007.png",
    name: "Sunny-Day Tee",
    localizedName: {
      "ja_JP": "サニーオレンジＴ",
      "en_US": "Sunny-Day Tee",
      "en_GB": "Sunny-Day Tee",
      "es_ES": "Camiseta sol",
      "es_MX": "Camiseta sol",
      "fr_FR": "T-shirt belle journée",
      "fr_CA": "T-shirt belle journée"
    },
    main: "Special Charge Up",
    brand: "Krak-On",
    stars: 1,
    id: 4
  },
  {
    image: "../common/assets/img/gear/Clt_TES010.png",
    name: "Fugu Tee",
    localizedName: {
      "ja_JP": "マルフグＴ",
      "en_US": "Fugu Tee",
      "en_GB": "Fugu Tee",
      "es_ES": "Camiseta pez globo",
      "es_MX": "Camiseta pez globo",
      "fr_FR": "T-shirt Friture",
      "fr_CA": "T-shirt Friture"
    },
    main: "Swim Speed Up",
    brand: "Firefin",
    stars: 1,
    id: 5
  },
  {
    image: "../common/assets/img/gear/Clt_TES011.png",
    name: "Mint Tee",
    localizedName: {
      "ja_JP": "ミントＴ",
      "en_US": "Mint Tee",
      "en_GB": "Mint Tee",
      "es_ES": "Camiseta turquesa",
      "es_MX": "Camiseta turquesa",
      "fr_FR": "T-shirt menthe",
      "fr_CA": "T-shirt menthe"
    },
    main: "Bomb Defense Up",
    brand: "Skalop",
    stars: 1,
    id: 6
  },
  {
    image: "../common/assets/img/gear/Clt_TES013.png",
    name: "Red Vector Tee",
    localizedName: {
      "ja_JP": "ベクトルパターン レッド",
      "en_US": "Red Vector Tee",
      "en_GB": "Red Vector Tee",
      "es_ES": "Vectores roja",
      "es_MX": "Vectores roja",
      "fr_FR": "T-shirt fléché rouge",
      "fr_CA": "T-shirt fléché rouge"
    },
    main: "Ink Saver (Main)",
    brand: "Takoroka",
    stars: 1,
    id: 7
  },
  {
    image: "../common/assets/img/gear/Clt_TES015.png",
    name: "Blue Peaks Tee",
    localizedName: {
      "ja_JP": "ヤマビコＴ ブルー",
      "en_US": "Blue Peaks Tee",
      "en_GB": "Blue Peaks Tee",
      "es_ES": "Cumbres azul",
      "es_MX": "Cumbres azul",
      "fr_FR": "T-shirt Abysma bleu",
      "fr_CA": "T-shirt Abysma bleu"
    },
    main: "Ink Saver (Sub)",
    brand: "Inkline",
    stars: 1,
    id: 8
  },
  {
    image: "../common/assets/img/gear/Clt_TES019.png",
    name: "Sailor-Stripe Tee",
    localizedName: {
      "ja_JP": "マリンボーダー",
      "en_US": "Sailor-Stripe Tee",
      "en_GB": "Sailor-Stripe Tee",
      "es_ES": "Camiseta marinera",
      "es_MX": "Camiseta marinera",
      "fr_FR": "T-shirt rayé marin",
      "fr_CA": "T-shirt rayé marin"
    },
    main: "Run Speed Up",
    brand: "Splash Mob",
    stars: 1,
    id: 9
  },
  {
    image: "../common/assets/img/gear/Clt_TES020.png",
    name: "White 8-Bit FishFry",
    localizedName: {
      "ja_JP": "ヤキフグ8bit ホワイト",
      "en_US": "White 8-Bit FishFry",
      "en_GB": "White 8-Bit FishFry",
      "es_ES": "Retrocamiseta blanca",
      "es_MX": "Retrocamiseta blanca",
      "fr_FR": "T-shirt 8 bits blanc",
      "fr_CA": "T-shirt 8 bits blanc"
    },
    main: "Sub Power Up",
    brand: "Firefin",
    stars: 1,
    id: 10
  },
  {
    image: "../common/assets/img/gear/Clt_TES022.png",
    name: "White Anchor Tee",
    localizedName: {
      "ja_JP": "ガチホワイト",
      "en_US": "White Anchor Tee",
      "en_GB": "White Anchor Tee",
      "es_ES": "Ancla blanca",
      "es_MX": "Ancla blanca",
      "fr_FR": "T-shirt ancre blanc",
      "fr_CA": "T-shirt ancre blanc"
    },
    main: "Ninja Squid",
    brand: "SquidForce",
    stars: 2,
    id: 11
  },
  {
    image: "../common/assets/img/gear/Clt_TES030.png",
    name: "Black V-Neck Tee",
    localizedName: {
      "ja_JP": "イカブラックV",
      "en_US": "Black V-Neck Tee",
      "en_GB": "Black V-Neck Tee",
      "es_ES": "Camiseta negra pro",
      "es_MX": "Camiseta táctica negra",
      "fr_FR": "T-shirt col en V noir",
      "fr_CA": "T-shirt col en V noir"
    },
    main: "Thermal Ink",
    brand: "SquidForce",
    stars: 2,
    id: 12
  },
  {
    image: "../common/assets/img/gear/Clt_TES031.png",
    name: "White Deca Logo Tee",
    localizedName: {
      "ja_JP": "デカロゴＴ シロ",
      "en_US": "White Deca Logo Tee",
      "en_GB": "White Deca Logo Tee",
      "es_ES": "Camiseta logo blanca",
      "es_MX": "Camiseta blanca estampada",
      "fr_FR": "T-shirt blanc à logo",
      "fr_CA": "T-shirt blanc à logo"
    },
    main: "Ink Resistance Up",
    brand: "Zink",
    stars: 1,
    id: 13
  },
  {
    image: "../common/assets/img/gear/Clt_TES032.png",
    name: "Half-Sleeve Sweater",
    localizedName: {
      "ja_JP": "スウェットT ゴブ",
      "en_US": "Half-Sleeve Sweater",
      "en_GB": "Half-Sleeve Sweater",
      "es_ES": "Sudadera media manga",
      "es_MX": "Suéter media manga",
      "fr_FR": "Pull à manches 3/4",
      "fr_CA": "Gilet à manches 3/4"
    },
    main: "Ink Saver (Sub)",
    brand: "Toni Kensa",
    stars: 2,
    id: 14
  },
  {
    image: "../common/assets/img/gear/Clt_TES033.png",
    name: "King Jersey",
    localizedName: {
      "ja_JP": "キングHKシャツ",
      "en_US": "King Jersey",
      "en_GB": "King Jersey",
      "es_ES": "Camiseta hockey Theutik",
      "es_MX": "Camiseta hockey Theutik",
      "fr_FR": "Maillot de hockey DUX",
      "fr_CA": "Maillot de hockey DUX"
    },
    main: "Respawn Punisher",
    brand: "Enperry",
    stars: 2,
    id: 15
  },
  {
    image: "../common/assets/img/gear/Clt_TES034.png",
    name: "Gray 8-Bit FishFry",
    localizedName: {
      "ja_JP": "ヤキフグ8bit グレー",
      "en_US": "Gray 8-Bit FishFry",
      "en_GB": "Gray 8-Bit FishFry",
      "es_ES": "Retrocamiseta gris",
      "es_MX": "Camiseta retro gris",
      "fr_FR": "T-shirt 8 bits gris",
      "fr_CA": "T-shirt 8 bits gris"
    },
    main: "Special Charge Up",
    brand: "Firefin",
    stars: 1,
    id: 16
  },
  {
    image: "../common/assets/img/gear/Clt_TES035.png",
    name: "White V-Neck Tee",
    localizedName: {
      "ja_JP": "イカホワイトV",
      "en_US": "White V-Neck Tee",
      "en_GB": "White V-Neck Tee",
      "es_ES": "Camiseta blanca pro",
      "es_MX": "Camiseta táctica blanca",
      "fr_FR": "T-shirt col en V blanc",
      "fr_CA": "T-shirt col en V blanc"
    },
    main: "Special Saver",
    brand: "SquidForce",
    stars: 2,
    id: 17
  },
  {
    image: "../common/assets/img/gear/Clt_TES036.png",
    name: "White Urchin Rock Tee",
    localizedName: {
      "ja_JP": "ガンガゼロックT シロ",
      "en_US": "White Urchin Rock Tee",
      "en_GB": "White Urchin Rock Tee",
      "es_ES": "Camiseta auditorio blanca",
      "es_MX": "Camiseta auditorio blanca",
      "fr_FR": "T-shirt blanc oursin rock",
      "fr_CA": "T-shirt blanc oursin rock"
    },
    main: "Ink Saver (Main)",
    brand: "Rockenberg",
    stars: 1,
    id: 18
  },
  {
    image: "../common/assets/img/gear/Clt_TES037.png",
    name: "Black Urchin Rock Tee",
    localizedName: {
      "ja_JP": "ガンガゼロックT クロ",
      "en_US": "Black Urchin Rock Tee",
      "en_GB": "Black Urchin Rock Tee",
      "es_ES": "Camiseta auditorio negra",
      "es_MX": "Camiseta auditorio negra",
      "fr_FR": "T-shirt noir oursin rock",
      "fr_CA": "T-shirt noir oursin rock"
    },
    main: "Ink Recovery Up",
    brand: "Rockenberg",
    stars: 1,
    id: 19
  },
  {
    image: "../common/assets/img/gear/Clt_TES038.png",
    name: "Wet Floor Band Tee",
    localizedName: {
      "ja_JP": "バンドT WETFLOOR",
      "en_US": "Wet Floor Band Tee",
      "en_GB": "Wet Floor Band Tee",
      "es_ES": "Camiseta Wet Floor",
      "es_MX": "Camiseta Wet Floor",
      "fr_FR": "T-shirt Wet Floor",
      "fr_CA": "T-shirt Wet Floor"
    },
    main: "Swim Speed Up",
    brand: "Rockenberg",
    stars: 1,
    id: 20
  },
  {
    image: "../common/assets/img/gear/Clt_TES039.png",
    name: "Squid Squad Band Tee",
    localizedName: {
      "ja_JP": "バンドT SQUIDSQUAD",
      "en_US": "Squid Squad Band Tee",
      "en_GB": "Squid Squad Band Tee",
      "es_ES": "Camiseta Squid Squad",
      "es_MX": "Camiseta Squid Squad",
      "fr_FR": "T-shirt Squid Squad",
      "fr_CA": "T-shirt Squid Squad"
    },
    main: "Ink Resistance Up",
    brand: "Rockenberg",
    stars: 1,
    id: 21
  },
  {
    image: "../common/assets/img/gear/Clt_TES040.png",
    name: "Navy Deca Logo Tee",
    localizedName: {
      "ja_JP": "デカロゴT ノーコン",
      "en_US": "Navy Deca Logo Tee",
      "en_GB": "Navy Deca Logo Tee",
      "es_ES": "Camiseta logo añil",
      "es_MX": "Camiseta logo añil",
      "fr_FR": "T-shirt marine à logo",
      "fr_CA": "T-shirt marine à logo"
    },
    main: "Ink Saver (Main)",
    brand: "Zink",
    stars: 1,
    id: 22
  },
  {
    image: "../common/assets/img/gear/Clt_TES041.png",
    name: "Mister Shrug Tee",
    localizedName: {
      "ja_JP": "ミスターシュラッグT",
      "en_US": "Mister Shrug Tee",
      "en_GB": "Mister Shrug Tee",
      "es_ES": "Camiseta Don Pulpón",
      "es_MX": "Camiseta Don Pulpón",
      "fr_FR": "T-shirt Monsieur Plouf",
      "fr_CA": "T-shirt Monsieur Plouf"
    },
    main: "Ink Resistance Up",
    brand: "Krak-On",
    stars: 3,
    id: 23
  },
  {
    image: "../common/assets/img/gear/Clt_TES042.png",
    name: "Chirpy Chips Band Tee",
    localizedName: {
      "ja_JP": "バンドT ABXY",
      "en_US": "Chirpy Chips Band Tee",
      "en_GB": "Chirpy Chips Band Tee",
      "es_ES": "Camiseta Chirpy Chips",
      "es_MX": "Camiseta Chirpy Chips",
      "fr_FR": "T-shirt Chirpy Chips",
      "fr_CA": "T-shirt Chirpy Chips"
    },
    main: "Cold-Blooded",
    brand: "Rockenberg",
    stars: 1,
    id: 24
  },
  {
    image: "../common/assets/img/gear/Clt_TES043.png",
    name: "Hightide Era Band Tee",
    localizedName: {
      "ja_JP": "バンドT HIGHTIDEERA",
      "en_US": "Hightide Era Band Tee",
      "en_GB": "Hightide Era Band Tee",
      "es_ES": "Camiseta Hightide Era",
      "es_MX": "Camiseta Hightide Era",
      "fr_FR": "T-shirt Hightide Era",
      "fr_CA": "T-shirt Hightide Era"
    },
    main: "Thermal Ink",
    brand: "Rockenberg",
    stars: 1,
    id: 25
  },
  {
    image: "../common/assets/img/gear/Clt_TES044.png",
    name: "Red V-Neck Limited Tee",
    localizedName: {
      "ja_JP": "イカレッドV コラボ",
      "en_US": "Red V-Neck Limited Tee",
      "en_GB": "Red V-Neck Limited Tee",
      "es_ES": "Camiseta roja pro SP",
      "es_MX": "Camiseta roja pro SP",
      "fr_FR": "T-shirt col en V rouge",
      "fr_CA": "T-shirt col en V rouge"
    },
    main: "Quick Respawn",
    brand: "SquidForce",
    stars: 2,
    id: 26
  },
  {
    image: "../common/assets/img/gear/Clt_TES045.png",
    name: "Green V-Neck Limited Tee",
    localizedName: {
      "ja_JP": "イカグリーンV コラボ",
      "en_US": "Green V-Neck Limited Tee",
      "en_GB": "Green V-Neck Limited Tee",
      "es_ES": "Camiseta turquesa pro SP",
      "es_MX": "Camiseta turquesa pro SP",
      "fr_FR": "T-shirt col en V vert",
      "fr_CA": "T-shirt col en V vert"
    },
    main: "Quick Super Jump",
    brand: "SquidForce",
    stars: 2,
    id: 27
  },
  {
    image: "../common/assets/img/gear/Clt_TEL001.png",
    name: "Black LS",
    localizedName: {
      "ja_JP": "バニーポップ ブラック",
      "en_US": "Black LS",
      "en_GB": "Black LS",
      "es_ES": "Negra larga",
      "es_MX": "Negra larga",
      "fr_FR": "Haut noir",
      "fr_CA": "Haut noir"
    },
    main: "Quick Super Jump",
    brand: "Zekko",
    stars: 2,
    id: 28
  },
  {
    image: "../common/assets/img/gear/Clt_TEL002.png",
    name: "Purple Camo LS",
    localizedName: {
      "ja_JP": "カモフラパープル",
      "en_US": "Purple Camo LS",
      "en_GB": "Purple Camo LS",
      "es_ES": "Camuflaje morada",
      "es_MX": "Camuflaje morado manga larga",
      "fr_FR": "Haut à motif violet",
      "fr_CA": "Gilet à motif violet"
    },
    main: "Sub Power Up",
    brand: "Takoroka",
    stars: 1,
    id: 29
  },
  {
    image: "../common/assets/img/gear/Clt_TEL003.png",
    name: "Navy Striped LS",
    localizedName: {
      "ja_JP": "ボーダーネイビー",
      "en_US": "Navy Striped LS",
      "en_GB": "Navy Striped LS",
      "es_ES": "Marinera larga",
      "es_MX": "Marinera larga",
      "fr_FR": "Haut rayé marin",
      "fr_CA": "Haut rayé marin"
    },
    main: "Ink Recovery Up",
    brand: "Splash Mob",
    stars: 1,
    id: 30
  },
  {
    image: "../common/assets/img/gear/Clt_TEL004.png",
    name: "Zekko Baseball LS",
    localizedName: {
      "ja_JP": "エゾッコラグラン",
      "en_US": "Zekko Baseball LS",
      "en_GB": "Zekko Baseball LS",
      "es_ES": "Béisbol Ezko",
      "es_MX": "Béisbol Ezko",
      "fr_FR": "Haut sportif Ezko",
      "fr_CA": "Haut sportif Ezko"
    },
    main: "Bomb Defense Up",
    brand: "Zekko",
    stars: 1,
    id: 31
  },
  {
    image: "../common/assets/img/gear/Clt_TEL007.png",
    name: "White Baseball LS",
    localizedName: {
      "ja_JP": "ハラシロラグラン",
      "en_US": "White Baseball LS",
      "en_GB": "White Baseball LS",
      "es_ES": "Béisbol blanca",
      "es_MX": "Béisbol blanca",
      "fr_FR": "Haut sportif blanc",
      "fr_CA": "Haut sportif blanc"
    },
    main: "Quick Super Jump",
    brand: "Rockenberg",
    stars: 1,
    id: 32
  },
  {
    image: "../common/assets/img/gear/Clt_TEL013.png",
    name: "Pink Easy-Stripe Shirt",
    localizedName: {
      "ja_JP": "ゆとりボーダー ピンク",
      "en_US": "Pink Easy-Stripe Shirt",
      "en_GB": "Pink Easy-Stripe Shirt",
      "es_ES": "Camiseta holgada rosa",
      "es_MX": "Camiseta holgada rosa",
      "fr_FR": "Haut rayé saumon",
      "fr_CA": "Gilet rayé saumon"
    },
    main: "Quick Super Jump",
    brand: "Splash Mob",
    stars: 2,
    id: 33
  },
  {
    image: "../common/assets/img/gear/Clt_TEL014.png",
    name: "Inkopolis Squaps Jersey",
    localizedName: {
      "ja_JP": "トビウォーズHKユニ",
      "en_US": "Inkopolis Squaps Jersey",
      "en_GB": "Inkopolis Squaps Jersey",
      "es_ES": "Hockey larga",
      "es_MX": "Hockey larga",
      "fr_FR": "Maillot Chromapolis",
      "fr_CA": "Maillot Chromapolis"
    },
    main: "Cold-Blooded",
    brand: "Zink",
    stars: 1,
    id: 34
  },
  {
    image: "../common/assets/img/gear/Clt_TEL015.png",
    name: "Annaki Drive Tee",
    localizedName: {
      "ja_JP": "アナアキロンT ドライブ",
      "en_US": "Annaki Drive Tee",
      "en_GB": "Annaki Drive Tee",
      "es_ES": "Camiseta Annak clásica",
      "es_MX": "Camiseta Annak clásica",
      "fr_FR": "Haut grunge classique",
      "fr_CA": "Haut Aroz classique"
    },
    main: "Thermal Ink",
    brand: "Annaki",
    stars: 2,
    id: 35
  },
  {
    image: "../common/assets/img/gear/Clt_TEL016.png",
    name: "Lime Easy-Stripe Shirt",
    localizedName: {
      "ja_JP": "ゆとりボーダー ライム",
      "en_US": "Lime Easy-Stripe Shirt",
      "en_GB": "Lime Easy-Stripe Shirt",
      "es_ES": "Camiseta holgada lima",
      "es_MX": "Camiseta holgada verde",
      "fr_FR": "Haut rayé limette",
      "fr_CA": "Haut rayé lime"
    },
    main: "Ink Resistance Up",
    brand: "Splash Mob",
    stars: 2,
    id: 36
  },
  {
    image: "../common/assets/img/gear/Clt_TEL017.png",
    name: "Annaki Evolution Tee",
    localizedName: {
      "ja_JP": "アナアキロンT イボルブ",
      "en_US": "Annaki Evolution Tee",
      "en_GB": "Annaki Evolution Tee",
      "es_ES": "Camiseta Annak moderna",
      "es_MX": "Camiseta Annak moderna",
      "fr_FR": "Haut grunge évolution",
      "fr_CA": "Haut grunge évolution"
    },
    main: "Respawn Punisher",
    brand: "Annaki",
    stars: 3,
    id: 37
  },
  {
    image: "../common/assets/img/gear/Clt_TLY001.png",
    name: "Yellow Layered LS",
    localizedName: {
      "ja_JP": "マスタードガサネ",
      "en_US": "Yellow Layered LS",
      "en_GB": "Yellow Layered LS",
      "es_ES": "Mostaza doble",
      "es_MX": "Camiseta de capas amarilla",
      "fr_FR": "Haut double moutarde",
      "fr_CA": "Gilet double moutarde"
    },
    main: "Quick Super Jump",
    brand: "SquidForce",
    stars: 1,
    id: 38
  },
  {
    image: "../common/assets/img/gear/Clt_TLY004.png",
    name: "Zink Layered LS",
    localizedName: {
      "ja_JP": "アイロニックレイヤード",
      "en_US": "Zink Layered LS",
      "en_GB": "Zink Layered LS",
      "es_ES": "Tintaz doble",
      "es_MX": "Tintaz doble",
      "fr_FR": "Haut double Leviathus",
      "fr_CA": "Haut double Leviathus"
    },
    main: "Respawn Punisher",
    brand: "Zink",
    stars: 1,
    id: 39
  },
  {
    image: "../common/assets/img/gear/Clt_TLY005.png",
    name: "Layered Anchor LS",
    localizedName: {
      "ja_JP": "ガチガサネ",
      "en_US": "Layered Anchor LS",
      "en_GB": "Layered Anchor LS",
      "es_ES": "Ancla doble",
      "es_MX": "Ancla de capas",
      "fr_FR": "Haut double ancre",
      "fr_CA": "Gilet double ancre"
    },
    main: "Run Speed Up",
    brand: "SquidForce",
    stars: 2,
    id: 40
  },
  {
    image: "../common/assets/img/gear/Clt_TLY006.png",
    name: "Choco Layered LS",
    localizedName: {
      "ja_JP": "チョコガサネ",
      "en_US": "Choco Layered LS",
      "en_GB": "Choco Layered LS",
      "es_ES": "Chocolate doble",
      "es_MX": "Camiseta de capas chocolate",
      "fr_FR": "Haut double Cubic",
      "fr_CA": "Gilet double Pionic"
    },
    main: "Ink Saver (Sub)",
    brand: "Takoroka",
    stars: 1,
    id: 41
  },
  {
    image: "../common/assets/img/gear/Clt_TLY008.png",
    name: "Layered Vector LS",
    localizedName: {
      "ja_JP": "ベクトルラインガサネ",
      "en_US": "Layered Vector LS",
      "en_GB": "Layered Vector LS",
      "es_ES": "Vectores doble",
      "es_MX": "Vectores de capas",
      "fr_FR": "Haut double fléché",
      "fr_CA": "Gilet double fléché"
    },
    main: "Special Saver",
    brand: "Takoroka",
    stars: 1,
    id: 42
  },
  {
    image: "../common/assets/img/gear/Clt_TLY009.png",
    name: "Green Tee",
    localizedName: {
      "ja_JP": "グリーンＴ",
      "en_US": "Green Tee",
      "en_GB": "Green Tee",
      "es_ES": "Camiseta verde",
      "es_MX": "Camiseta verde oliva",
      "fr_FR": "T-shirt double vert",
      "fr_CA": "T-shirt double vert"
    },
    main: "Special Saver",
    brand: "Forge",
    stars: 1,
    id: 43
  },
  {
    image: "../common/assets/img/gear/Clt_TLY010.png",
    name: "Red Tentatek Tee",
    localizedName: {
      "ja_JP": "アロメテックT レッド",
      "en_US": "Red Tentatek Tee",
      "en_GB": "Red Tentatek Tee",
      "es_ES": "Camiseta Arome roja",
      "es_MX": "Camiseta Arome roja",
      "fr_FR": "Haut double rouge OculR",
      "fr_CA": "Haut double rouge Tentatek"
    },
    main: "Swim Speed Up",
    brand: "Tentatek",
    stars: 2,
    id: 44
  },
  {
    image: "../common/assets/img/gear/Clt_TLY011.png",
    name: "Blue Tentatek Tee",
    localizedName: {
      "ja_JP": "アロメテックT ブルー",
      "en_US": "Blue Tentatek Tee",
      "en_GB": "Blue Tentatek Tee",
      "es_ES": "Camiseta Arome azul",
      "es_MX": "Camiseta Tentáctica azul",
      "fr_FR": "Haut double bleu OculR",
      "fr_CA": "Haut double bleu Tentatek"
    },
    main: "Quick Respawn",
    brand: "Tentatek",
    stars: 2,
    id: 45
  },
  {
    image: "../common/assets/img/gear/Clt_PLO000.png",
    name: "Shrimp-Pink Polo",
    localizedName: {
      "ja_JP": "さくらエビポロ",
      "en_US": "Shrimp-Pink Polo",
      "en_GB": "Shrimp-Pink Polo",
      "es_ES": "Polo salmón",
      "es_MX": "Polo salmón",
      "fr_FR": "Polo rose crevette",
      "fr_CA": "Polo rose crevette"
    },
    main: "Ninja Squid",
    brand: "Splash Mob",
    stars: 1,
    id: 46
  },
  {
    image: "../common/assets/img/gear/Clt_PLO006.png",
    name: "Cycle King Jersey",
    localizedName: {
      "ja_JP": "チャリキングジャージ",
      "en_US": "Cycle King Jersey",
      "en_GB": "Cycle King Jersey",
      "es_ES": "Maillot rey de la montaña",
      "es_MX": "Jersey rey de la montaña",
      "fr_FR": "Maillot de cycliste pro",
      "fr_CA": "Maillot de cycliste pro"
    },
    main: "Bomb Defense Up",
    brand: "Tentatek",
    stars: 3,
    id: 47
  },
  {
    image: "../common/assets/img/gear/Clt_PLO007.png",
    name: "Slipstream United",
    localizedName: {
      "ja_JP": "FCカラスミ",
      "en_US": "Slipstream United",
      "en_GB": "Slipstream United",
      "es_ES": "Camiseta Chipirona FC",
      "es_MX": "Camiseta Chipirona FC",
      "fr_FR": "Maillot AS Vortex",
      "fr_CA": "Maillot AS Vortex"
    },
    main: "Bomb Defense Up",
    brand: "Takoroka",
    stars: 2,
    id: 48
  },
  {
    image: "../common/assets/img/gear/Clt_PLO008.png",
    name: "FC Albacore",
    localizedName: {
      "ja_JP": "アオサドーレ",
      "en_US": "FC Albacore",
      "en_GB": "FC Albacore",
      "es_ES": "Camiseta Rayo Rodaballo",
      "es_MX": "Camiseta Rayo Rodaballo",
      "fr_FR": "Maillot FC Germon",
      "fr_CA": "Maillot FC Germon"
    },
    main: "Respawn Punisher",
    brand: "Takoroka",
    stars: 1,
    id: 49
  },
  {
    image: "../common/assets/img/gear/Clt_JKT002.png",
    name: "Berry Ski Jacket",
    localizedName: {
      "ja_JP": "マウンテンベリー",
      "en_US": "Berry Ski Jacket",
      "en_GB": "Berry Ski Jacket",
      "es_ES": "Chubasquero frambuesa",
      "es_MX": "Rompevientos fresa",
      "fr_FR": "Anorak framboise",
      "fr_CA": "Anorak framboise"
    },
    main: "Special Power Up",
    brand: "Inkline",
    stars: 2,
    id: 50
  },
  {
    image: "../common/assets/img/gear/Clt_JKT003.png",
    name: "Varsity Jacket",
    localizedName: {
      "ja_JP": "スタジャンロゴマシ",
      "en_US": "Varsity Jacket",
      "en_GB": "Varsity Jacket",
      "es_ES": "Cazadora estudiante",
      "es_MX": "Cazadora estudiante",
      "fr_FR": "Blouson université",
      "fr_CA": "Manteau université"
    },
    main: "Ink Saver (Sub)",
    brand: "Zekko",
    stars: 3,
    id: 51
  },
  {
    image: "../common/assets/img/gear/Clt_JKT006.png",
    name: "Black Inky Rider",
    localizedName: {
      "ja_JP": "イカライダーBLACK",
      "en_US": "Black Inky Rider",
      "en_GB": "Black Inky Rider",
      "es_ES": "Chupa motera negra",
      "es_MX": "Chaqueta roquera negra",
      "fr_FR": "Blouson en cuir noir",
      "fr_CA": "Manteau cuir noir"
    },
    main: "Sub Power Up",
    brand: "Rockenberg",
    stars: 3,
    id: 52
  },
  {
    image: "../common/assets/img/gear/Clt_JKT007.png",
    name: "White Inky Rider",
    localizedName: {
      "ja_JP": "イカライダーWHITE",
      "en_US": "White Inky Rider",
      "en_GB": "White Inky Rider",
      "es_ES": "Chupa motera blanca",
      "es_MX": "Chaqueta roquera blanca",
      "fr_FR": "Blouson en cuir blanc",
      "fr_CA": "Blouson en cuir blanc"
    },
    main: "Special Power Up",
    brand: "Rockenberg",
    stars: 3,
    id: 53
  },
  {
    image: "../common/assets/img/gear/Clt_JKT012.png",
    name: "Blue Sailor Suit",
    localizedName: {
      "ja_JP": "イカセーラー ブルー",
      "en_US": "Blue Sailor Suit",
      "en_GB": "Blue Sailor Suit",
      "es_ES": "Uniforme marinero azul",
      "es_MX": "Uniforme naval azul",
      "fr_FR": "Uniforme marin bleu",
      "fr_CA": "Uniforme marin bleu"
    },
    main: "Sub Power Up",
    brand: "Forge",
    stars: 3,
    id: 54
  },
  {
    image: "../common/assets/img/gear/Clt_JKT014.png",
    name: "Squid Satin Jacket",
    localizedName: {
      "ja_JP": "イカスカジャン",
      "en_US": "Squid Satin Jacket",
      "en_GB": "Squid Satin Jacket",
      "es_ES": "Chaqueta satinada calamar",
      "es_MX": "Chaqueta satinada calamar",
      "fr_FR": "Blouson calamar",
      "fr_CA": "Manteau satin calamar"
    },
    main: "Quick Respawn",
    brand: "Zekko",
    stars: 3,
    id: 55
  },
  {
    image: "../common/assets/img/gear/Clt_JKT017.png",
    name: "Chilly Mountain Coat",
    localizedName: {
      "ja_JP": "マウンテンフローズン",
      "en_US": "Chilly Mountain Coat",
      "en_GB": "Chilly Mountain Coat",
      "es_ES": "Chubasquero glacial",
      "es_MX": "Chubasquero glacial",
      "fr_FR": "Anorak beau temps",
      "fr_CA": "Anorak beau temps"
    },
    main: "Swim Speed Up",
    brand: "Inkline",
    stars: 3,
    id: 56
  },
  {
    image: "../common/assets/img/gear/Clt_JKT018.png",
    name: "Takoroka Windcrusher",
    localizedName: {
      "ja_JP": "ヤコナイロンレトロ",
      "en_US": "Takoroka Windcrusher",
      "en_GB": "Takoroka Windcrusher",
      "es_ES": "Chándal Sepioca",
      "es_MX": "Rompevientos Pulpioka",
      "fr_FR": "Coupe-vent rétro Cubic",
      "fr_CA": "Coupe-vent rétro Pionic"
    },
    main: "Cold-Blooded",
    brand: "Takoroka",
    stars: 3,
    id: 57
  },
  {
    image: "../common/assets/img/gear/Clt_JKT019.png",
    name: "Matcha Down Jacket",
    localizedName: {
      "ja_JP": "マッチャ ライトダウン",
      "en_US": "Matcha Down Jacket",
      "en_GB": "Matcha Down Jacket",
      "es_ES": "Plumífero lima",
      "es_MX": "Plumífero yerba mate",
      "fr_FR": "Anorak matcha",
      "fr_CA": "Anorak matcha"
    },
    main: "Ninja Squid",
    brand: "Inkline",
    stars: 3,
    id: 58
  },
  {
    image: "../common/assets/img/gear/Clt_JKT020.png",
    name: "FA-01 Jacket",
    localizedName: {
      "ja_JP": "FA-01オモテ",
      "en_US": "FA-01 Jacket",
      "en_GB": "FA-01 Jacket",
      "es_ES": "Chaqueta aviador",
      "es_MX": "Chaqueta aviador",
      "fr_FR": "Blouson aviateur (endroit)",
      "fr_CA": "Blouson aviateur (endroit)"
    },
    main: "Ink Recovery Up",
    brand: "Forge",
    stars: 3,
    id: 59
  },
  {
    image: "../common/assets/img/gear/Clt_JKT021.png",
    name: "FA-01 Reversed",
    localizedName: {
      "ja_JP": "FA-01ウラ",
      "en_US": "FA-01 Reversed",
      "en_GB": "FA-01 Reversed",
      "es_ES": "Chaqueta aviador vuelta",
      "es_MX": "Chaqueta aviador vuelta",
      "fr_FR": "Blouson aviateur (envers)",
      "fr_CA": "Blouson aviateur (envers)"
    },
    main: "Quick Super Jump",
    brand: "Forge",
    stars: 3,
    id: 60
  },
  {
    image: "../common/assets/img/gear/Clt_JKT022.png",
    name: "Pullover Coat",
    localizedName: {
      "ja_JP": "プルオーバーコート",
      "en_US": "Pullover Coat",
      "en_GB": "Pullover Coat",
      "es_ES": "Cortavientos largo",
      "es_MX": "Cortavientos largo",
      "fr_FR": "Manteau en feutrine",
      "fr_CA": "Manteau en feutre"
    },
    main: "Thermal Ink",
    brand: "Toni Kensa",
    stars: 3,
    id: 61
  },
  {
    image: "../common/assets/img/gear/Clt_JKT024.png",
    name: "Birded Corduroy Jacket",
    localizedName: {
      "ja_JP": "トリスカベッチン",
      "en_US": "Birded Corduroy Jacket",
      "en_GB": "Birded Corduroy Jacket",
      "es_ES": "Chaqueta de pana bordada",
      "es_MX": "Abrigo aviar de pana",
      "fr_FR": "Blouson motif oiseaux",
      "fr_CA": "Blouson motif oiseaux"
    },
    main: "Run Speed Up",
    brand: "Zekko",
    stars: 3,
    id: 62
  },
  {
    image: "../common/assets/img/gear/Clt_JKT026.png",
    name: "Zekko Redleaf Coat",
    localizedName: {
      "ja_JP": "エゾッココーチ アカネ",
      "en_US": "Zekko Redleaf Coat",
      "en_GB": "Zekko Redleaf Coat",
      "es_ES": "Gabardina Ezko arce",
      "es_MX": "Gabardina Ezko arce",
      "fr_FR": "Blouson Ezko grenat",
      "fr_CA": "Blouson Ezko grenat"
    },
    main: "Haunt",
    brand: "Zekko",
    stars: 2,
    id: 63
  },
  {
    image: "../common/assets/img/gear/Clt_JKT027.png",
    name: "Eggplant Mountain Coat",
    localizedName: {
      "ja_JP": "マウンテンノリタマゴ",
      "en_US": "Eggplant Mountain Coat",
      "en_GB": "Eggplant Mountain Coat",
      "es_ES": "Chubasquero montañés",
      "es_MX": "Impermeable montañerof",
      "fr_FR": "Anorak salamandre",
      "fr_CA": "Anorak salamandre"
    },
    main: "Special Saver",
    brand: "Inkline",
    stars: 3,
    id: 64
  },
  {
    image: "../common/assets/img/gear/Clt_JKT028.png",
    name: "Zekko Jade Coat",
    localizedName: {
      "ja_JP": "エゾッココーチ モエギ",
      "en_US": "Zekko Jade Coat",
      "en_GB": "Zekko Jade Coat",
      "es_ES": "Gabardina Ezko turquesa",
      "es_MX": "Impermeable jade",
      "fr_FR": "Blouson Ezko vert",
      "fr_CA": "Blouson Ezko émeraude"
    },
    main: "Respawn Punisher",
    brand: "Zekko",
    stars: 2,
    id: 65
  },
  {
    image: "../common/assets/img/gear/Clt_JKT030.png",
    name: "Brown FA-11 Bomber",
    localizedName: {
      "ja_JP": "FA-11オモテ カスタム",
      "en_US": "Brown FA-11 Bomber",
      "en_GB": "Brown FA-11 Bomber",
      "es_ES": "Chaqueta FA-11",
      "es_MX": "Chaqueta FA-11",
      "fr_FR": "Blouson aviateur 11 (endroit)",
      "fr_CA": "Blouson aviateur 11 (endroit)"
    },
    main: "Bomb Defense Up",
    brand: "Forge",
    stars: 2,
    id: 66
  },
  {
    image: "../common/assets/img/gear/Clt_JKT031.png",
    name: "Gray FA-11 Bomber",
    localizedName: {
      "ja_JP": "FA-11ウラ カスタム",
      "en_US": "Gray FA-11 Bomber",
      "en_GB": "Gray FA-11 Bomber",
      "es_ES": "Chaqueta FA-11 vuelta",
      "es_MX": "Chaqueta FA-11 vuelta",
      "fr_FR": "Blouson aviateur 11 (envers)",
      "fr_CA": "Blouson aviateur 11 (envers)"
    },
    main: "Cold-Blooded",
    brand: "Forge",
    stars: 2,
    id: 67
  },
  {
    image: "../common/assets/img/gear/Clt_TNK001.png",
    name: "B-ball Jersey (Away)",
    localizedName: {
      "ja_JP": "バスケジャージ アウェイ",
      "en_US": "B-ball Jersey (Away)",
      "en_GB": "B-ball Jersey (Away)",
      "es_ES": "Baloncesto visitante",
      "es_MX": "Baloncesto visitante",
      "fr_FR": "Maillot de basket (extérieur)",
      "fr_CA": "Maillot de basket (extérieur)"
    },
    main: "Ink Saver (Sub)",
    brand: "Zink",
    stars: 1,
    id: 68
  },
  {
    image: "../common/assets/img/gear/Clt_TNK003.png",
    name: "White King Tank",
    localizedName: {
      "ja_JP": "キングタンク ホワイト",
      "en_US": "White King Tank",
      "en_GB": "White King Tank",
      "es_ES": "Tirantes blanca Theutik",
      "es_MX": "Tirantes blanca Theutik",
      "fr_FR": "Débardeur DUX blanc",
      "fr_CA": "Débardeur DUX blanc"
    },
    main: "Haunt",
    brand: "Enperry",
    stars: 1,
    id: 69
  },
  {
    image: "../common/assets/img/gear/Clt_TNK004.png",
    name: "Slash King Tank",
    localizedName: {
      "ja_JP": "キングタンク スラッシュ",
      "en_US": "Slash King Tank",
      "en_GB": "Slash King Tank",
      "es_ES": "Tirantes franja Theutik",
      "es_MX": "Tirantes franja Theutik",
      "fr_FR": "Débardeur DUX rayé",
      "fr_CA": "Débardeur DUX rayé"
    },
    main: "Thermal Ink",
    brand: "Enperry",
    stars: 1,
    id: 70
  },
  {
    image: "../common/assets/img/gear/Clt_TNK005.png",
    name: "Navy King Tank",
    localizedName: {
      "ja_JP": "キングタンク マリン",
      "en_US": "Navy King Tank",
      "en_GB": "Navy King Tank",
      "es_ES": "Tirantes azul Theutik",
      "es_MX": "Tirantes azul Theutik",
      "fr_FR": "Débardeur DUX marine",
      "fr_CA": "Débardeur DUX marine"
    },
    main: "Ink Resistance Up",
    brand: "Enperry",
    stars: 1,
    id: 71
  },
  {
    image: "../common/assets/img/gear/Clt_SWT002.png",
    name: "Retro Sweat",
    localizedName: {
      "ja_JP": "レトロジャッジ",
      "en_US": "Retro Sweat",
      "en_GB": "Retro Sweat",
      "es_ES": "Sudadera retro",
      "es_MX": "Sudadera retro",
      "fr_FR": "Sweat rétro",
      "fr_CA": "Sweat rétro"
    },
    main: "Bomb Defense Up",
    brand: "SquidForce",
    stars: 3,
    id: 72
  },
  {
    image: "../common/assets/img/gear/Clt_SWT005.png",
    name: "Reel Sweat",
    localizedName: {
      "ja_JP": "リールロールスウェット",
      "en_US": "Reel Sweat",
      "en_GB": "Reel Sweat",
      "es_ES": "Sudadera flechas",
      "es_MX": "Sudadera flechas",
      "fr_FR": "Sweat bobine",
      "fr_CA": "Sweat bobine"
    },
    main: "Special Power Up",
    brand: "Zekko",
    stars: 1,
    id: 73
  },
  {
    image: "../common/assets/img/gear/Clt_SWT006.png",
    name: "Anchor Sweat",
    localizedName: {
      "ja_JP": "イカリスウェット",
      "en_US": "Anchor Sweat",
      "en_GB": "Anchor Sweat",
      "es_ES": "Sudadera ancla",
      "es_MX": "Sudadera ancla",
      "fr_FR": "Sweat ancre",
      "fr_CA": "Coton ouaté ancre"
    },
    main: "Cold-Blooded",
    brand: "SquidForce",
    stars: 2,
    id: 74
  },
  {
    image: "../common/assets/img/gear/Clt_SWT007.png",
    name: "Negative Longcuff Sweater",
    localizedName: {
      "ja_JP": "ドロップスウェット ネガ",
      "en_US": "Negative Longcuff Sweater",
      "en_GB": "Negative Longcuff Sweater",
      "es_ES": "Sudadera ancha negativa",
      "es_MX": "Suéter negativo",
      "fr_FR": "Pull manches cintrées négatif",
      "fr_CA": "Chandail manches cintrées noir"
    },
    main: "Haunt",
    brand: "Toni Kensa",
    stars: 3,
    id: 75
  },
  {
    image: "../common/assets/img/gear/Clt_SWT008.png",
    name: "Short Knit Layers",
    localizedName: {
      "ja_JP": "ショートニットカサネ",
      "en_US": "Short Knit Layers",
      "en_GB": "Short Knit Layers",
      "es_ES": "Jersey con camisa",
      "es_MX": "Jersey con camisa",
      "fr_FR": "Chemise et pull court",
      "fr_CA": "Chemise et chandail court"
    },
    main: "Ink Saver (Main)",
    brand: "Toni Kensa",
    stars: 3,
    id: 76
  },
  {
    image: "../common/assets/img/gear/Clt_SWT009.png",
    name: "Positive Longcuff Sweater",
    localizedName: {
      "ja_JP": "ドロップスウェット ポジ",
      "en_US": "Positive Longcuff Sweater",
      "en_GB": "Positive Longcuff Sweater",
      "es_ES": "Sudadera ancha positiva",
      "es_MX": "Suéter positivo",
      "fr_FR": "Pull manches cintrées positif",
      "fr_CA": "Chandail manches cintrées blanc"
    },
    main: "Swim Speed Up",
    brand: "Toni Kensa",
    stars: 3,
    id: 77
  },
  {
    image: "../common/assets/img/gear/Clt_SHT002.png",
    name: "Green-Check Shirt",
    localizedName: {
      "ja_JP": "ギンガムチェック ミドリ",
      "en_US": "Green-Check Shirt",
      "en_GB": "Green-Check Shirt",
      "es_ES": "Camisa cuadros verdes",
      "es_MX": "Camisa cuadros verdes",
      "fr_FR": "Chemise vichy verte",
      "fr_CA": "Chemise vichy verte"
    },
    main: "Sub Power Up",
    brand: "Zekko",
    stars: 2,
    id: 78
  },
  {
    image: "../common/assets/img/gear/Clt_SHT004.png",
    name: "Urchins Jersey",
    localizedName: {
      "ja_JP": "ウーニーズBBシャツ",
      "en_US": "Urchins Jersey",
      "en_GB": "Urchins Jersey",
      "es_ES": "Camisa béisbol",
      "es_MX": "Camisa béisbol",
      "fr_FR": "Chemisette baseball",
      "fr_CA": "Chemisette baseball"
    },
    main: "Run Speed Up",
    brand: "Zink",
    stars: 1,
    id: 79
  },
  {
    image: "../common/assets/img/gear/Clt_SHT007.png",
    name: "Baby-Jelly Shirt",
    localizedName: {
      "ja_JP": "ベイビークラゲシャツ",
      "en_US": "Baby-Jelly Shirt",
      "en_GB": "Baby-Jelly Shirt",
      "es_ES": "Camisa medusas",
      "es_MX": "Camisa aguamalas",
      "fr_FR": "Chemise méduses",
      "fr_CA": "Chemise méduses"
    },
    main: "Bomb Defense Up",
    brand: "Splash Mob",
    stars: 1,
    id: 80
  },
  {
    image: "../common/assets/img/gear/Clt_SHT010.png",
    name: "Vintage Check Shirt",
    localizedName: {
      "ja_JP": "ヴィンテージチェック",
      "en_US": "Vintage Check Shirt",
      "en_GB": "Vintage Check Shirt",
      "es_ES": "Camisa cuadros retro",
      "es_MX": "Camisa cuadros retro",
      "fr_FR": "Chemise à carreaux rétro",
      "fr_CA": "Chemise à carreaux rétro"
    },
    main: "Haunt",
    brand: "Rockenberg",
    stars: 3,
    id: 81
  },
  {
    image: "../common/assets/img/gear/Clt_SHT012.png",
    name: "Logo Aloha Shirt",
    localizedName: {
      "ja_JP": "ロゴマシマシアロハ",
      "en_US": "Logo Aloha Shirt",
      "en_GB": "Logo Aloha Shirt",
      "es_ES": "Camisa marcas",
      "es_MX": "Camisa marcas",
      "fr_FR": "Chemisette à logos",
      "fr_CA": "Chemisette à logos"
    },
    main: "Ink Recovery Up",
    brand: "Zekko",
    stars: 2,
    id: 82
  },
  {
    image: "../common/assets/img/gear/Clt_SHT015.png",
    name: "Shirt & Tie",
    localizedName: {
      "ja_JP": "タイシャツ",
      "en_US": "Shirt & Tie",
      "en_GB": "Shirt & Tie",
      "es_ES": "Camisa con corbata",
      "es_MX": "Camisa con corbata",
      "fr_FR": "Chemise cravate",
      "fr_CA": "Chemise cravate"
    },
    main: "Special Saver",
    brand: "Splash Mob",
    stars: 3,
    id: 83
  },
  {
    image: "../common/assets/img/gear/Clt_SHT017.png",
    name: "Hula Punk Shirt",
    localizedName: {
      "ja_JP": "ピーターパンクシャツ",
      "en_US": "Hula Punk Shirt",
      "en_GB": "Hula Punk Shirt",
      "es_ES": "Camisa estampada",
      "es_MX": "Camiseta roquera tropical",
      "fr_FR": "Chemisette punk farniente",
      "fr_CA": "Chemisette punk tropicale"
    },
    main: "Ink Saver (Main)",
    brand: "Annaki",
    stars: 2,
    id: 84
  },
  {
    image: "../common/assets/img/gear/Clt_SHT018.png",
    name: "Octobowler Shirt",
    localizedName: {
      "ja_JP": "タコボウラーシャツ",
      "en_US": "Octobowler Shirt",
      "en_GB": "Octobowler Shirt",
      "es_ES": "Camisa bolos",
      "es_MX": "Camisa bolos",
      "fr_FR": "Chemisette de bowling",
      "fr_CA": "Chemisette de bowling"
    },
    main: "Ink Saver (Main)",
    brand: "Krak-On",
    stars: 2,
    id: 85
  },
  {
    image: "../common/assets/img/gear/Clt_SHT019.png",
    name: "Inkfall Shirt",
    localizedName: {
      "ja_JP": "スミカケシャツ",
      "en_US": "Inkfall Shirt",
      "en_GB": "Inkfall Shirt",
      "es_ES": "Camisa entintada",
      "es_MX": "Camisa entintada",
      "fr_FR": "Chemise tache d'encre",
      "fr_CA": "Chemise tache d'encre"
    },
    main: "Special Charge Up",
    brand: "Toni Kensa",
    stars: 2,
    id: 86
  },
  {
    image: "../common/assets/img/gear/Clt_SHT020.png",
    name: "Crimson Parashooter",
    localizedName: {
      "ja_JP": "パラシューター ザクロ",
      "en_US": "Crimson Parashooter",
      "en_GB": "Crimson Parashooter",
      "es_ES": "Paracaidista carmesí",
      "es_MX": "Paracaidista carmesí",
      "fr_FR": "Haut parachute grenat",
      "fr_CA": "Haut parachute grenat"
    },
    main: "Special Charge Up",
    brand: "Annaki",
    stars: 3,
    id: 87
  },
  {
    image: "../common/assets/img/gear/Clt_SHT021.png",
    name: "Baby-Jelly Shirt & Tie",
    localizedName: {
      "ja_JP": "タイツキベイビークラゲ",
      "en_US": "Baby-Jelly Shirt & Tie",
      "en_GB": "Baby-Jelly Shirt & Tie",
      "es_ES": "Camisa medusas con corbata",
      "es_MX": "Camisa medusas con corbata",
      "fr_FR": "Chemise cravate méduses",
      "fr_CA": "Chemise cravate méduses"
    },
    main: "Cold-Blooded",
    brand: "Splash Mob",
    stars: 2,
    id: 88
  },
  {
    image: "../common/assets/img/gear/Clt_SHT022.png",
    name: "Prune Parashooter",
    localizedName: {
      "ja_JP": "パラシューター プルーン",
      "en_US": "Prune Parashooter",
      "en_GB": "Prune Parashooter",
      "es_ES": "Paracaidista arándano",
      "es_MX": "Paracaidista arándano",
      "fr_FR": "Haut parachute bleu nuit",
      "fr_CA": "Manteau parachute bleu nuit"
    },
    main: "Ninja Squid",
    brand: "Annaki",
    stars: 3,
    id: 89
  },
  {
    image: "../common/assets/img/gear/Clt_VST002.png",
    name: "Dark Urban Vest",
    localizedName: {
      "ja_JP": "アーバンベスト ナイト",
      "en_US": "Dark Urban Vest",
      "en_GB": "Dark Urban Vest",
      "es_ES": "Anorak urbano noche",
      "es_MX": "Anorak urbano noche",
      "fr_FR": "Gilet urbain noir",
      "fr_CA": "Gilet urbain noir"
    },
    main: "Cold-Blooded",
    brand: "Firefin",
    stars: 3,
    id: 90
  },
  {
    image: "../common/assets/img/gear/Clt_VST003.png",
    name: "Yellow Urban Vest",
    localizedName: {
      "ja_JP": "アーバンベスト イエロー",
      "en_US": "Yellow Urban Vest",
      "en_GB": "Yellow Urban Vest",
      "es_ES": "Anorak urbano día",
      "es_MX": "Anorak urbano día",
      "fr_FR": "Gilet urbain jaune",
      "fr_CA": "Gilet urbain jaune"
    },
    main: "Haunt",
    brand: "Firefin",
    stars: 2,
    id: 91
  },
  {
    image: "../common/assets/img/gear/Clt_PRK000.png",
    name: "Camo Zip Hoodie",
    localizedName: {
      "ja_JP": "ジップアップ カモ",
      "en_US": "Camo Zip Hoodie",
      "en_GB": "Camo Zip Hoodie",
      "es_ES": "Sudadera camuflaje",
      "es_MX": "Sudadera camuflaje",
      "fr_FR": "Sweat zippé camouflage",
      "fr_CA": "Coton ouaté zippé camouflage"
    },
    main: "Quick Respawn",
    brand: "Firefin",
    stars: 3,
    id: 92
  },
  {
    image: "../common/assets/img/gear/Clt_PRK002.png",
    name: "Zekko Hoodie",
    localizedName: {
      "ja_JP": "エゾッコパーカー アズキ",
      "en_US": "Zekko Hoodie",
      "en_GB": "Zekko Hoodie",
      "es_ES": "Sudadera Ezko",
      "es_MX": "Sudadera Zekko",
      "fr_FR": "Sweat capuche Ezko",
      "fr_CA": "Sweat capuche Ezko"
    },
    main: "Ninja Squid",
    brand: "Zekko",
    stars: 2,
    id: 93
  },
  {
    image: "../common/assets/img/gear/Clt_PRK004.png",
    name: "Shirt with Blue Hoodie",
    localizedName: {
      "ja_JP": "シャツノゾキブルー",
      "en_US": "Shirt with Blue Hoodie",
      "en_GB": "Shirt with Blue Hoodie",
      "es_ES": "Sudadera con camisa",
      "es_MX": "Sudadera con camisa",
      "fr_FR": "Chemise et sweat marine",
      "fr_CA": "Chemise et sweat marine"
    },
    main: "Special Power Up",
    brand: "Splash Mob",
    stars: 2,
    id: 94
  },
  {
    image: "../common/assets/img/gear/Clt_PRK005.png",
    name: "Grape Hoodie",
    localizedName: {
      "ja_JP": "キングパーカー グレープ",
      "en_US": "Grape Hoodie",
      "en_GB": "Grape Hoodie",
      "es_ES": "Sudadera morada Theutik",
      "es_MX": "Sudadera morada Theutik",
      "fr_FR": "Sweat zippé violet DUX",
      "fr_CA": "Coton ouaté zippé mauve"
    },
    main: "Quick Respawn",
    brand: "Enperry",
    stars: 1,
    id: 95
  },
  {
    image: "../common/assets/img/gear/Clt_PRK006.png",
    name: "Gray Hoodie",
    localizedName: {
      "ja_JP": "ホタパーカー グレー",
      "en_US": "Gray Hoodie",
      "en_GB": "Gray Hoodie",
      "es_ES": "Sudadera gris con capucha",
      "es_MX": "Sudadera gris con capucha",
      "fr_FR": "Sweat capuche gris",
      "fr_CA": "Sweat capuche gris"
    },
    main: "Sub Power Up",
    brand: "Skalop",
    stars: 2,
    id: 96
  },
  {
    image: "../common/assets/img/gear/Clt_COP100.png",
    name: "Squiddor Polo",
    localizedName: {
      "ja_JP": "イカテンくんポロ",
      "en_US": "Squiddor Polo",
      "en_GB": "Squiddor Polo",
      "es_ES": "Polo corporativo",
      "es_MX": "Polo corporativo",
      "fr_FR": "Polo rayé",
      "fr_CA": "Polo rayé"
    },
    main: "Quick Respawn",
    brand: "Grizzco",
    stars: 3,
    id: 97
  },
  {
    image: "../common/assets/img/gear/Clt_COP101.png",
    name: "Anchor Life Vest",
    localizedName: {
      "ja_JP": "アンカーベスト",
      "en_US": "Anchor Life Vest",
      "en_GB": "Anchor Life Vest",
      "es_ES": "Chaleco de seguridad",
      "es_MX": "Chaleco de seguridad",
      "fr_FR": "Gilet de sauvetage",
      "fr_CA": "Gilet de sauvetage"
    },
    main: "Quick Respawn",
    brand: "Grizzco",
    stars: 3,
    id: 98
  },
  {
    image: "../common/assets/img/gear/Clt_COP102.png",
    name: "Juice Parka",
    localizedName: {
      "ja_JP": "フューエルブルゾン",
      "en_US": "Juice Parka",
      "en_GB": "Juice Parka",
      "es_ES": "Chaqueta gasolinera",
      "es_MX": "Chaqueta gasolinera",
      "fr_FR": "Blouson d'ingénieur pétrolier",
      "fr_CA": "Blouson d'ingénieur pétrolier"
    },
    main: "Quick Respawn",
    brand: "Grizzco",
    stars: 3,
    id: 99
  },
  {
    image: "../common/assets/img/gear/Clt_AMB000.png",
    name: "School Uniform",
    localizedName: {
      "ja_JP": "スクールブレザー",
      "en_US": "School Uniform",
      "en_GB": "School Uniform",
      "es_ES": "Uniforme escolar",
      "es_MX": "Uniforme escolar",
      "fr_FR": "Uniforme scolaire",
      "fr_CA": "Uniforme scolaire"
    },
    main: "Ink Recovery Up",
    brand: "amiibo",
    stars: 2,
    id: 100
  },
  {
    image: "../common/assets/img/gear/Clt_AMB001.png",
    name: "Samurai Jacket",
    localizedName: {
      "ja_JP": "サムライジャケット",
      "en_US": "Samurai Jacket",
      "en_GB": "Samurai Jacket",
      "es_ES": "Armadura samurái",
      "es_MX": "Armadura samurái",
      "fr_FR": "Haut de samouraï",
      "fr_CA": "Haut de samouraï"
    },
    main: "Special Charge Up",
    brand: "amiibo",
    stars: 2,
    id: 101
  },
  {
    image: "../common/assets/img/gear/Clt_AMB002.png",
    name: "Power Armor",
    localizedName: {
      "ja_JP": "パワードスーツ",
      "en_US": "Power Armor",
      "en_GB": "Power Armor",
      "es_ES": "Tecnoarmadura",
      "es_MX": "Tecnoarmadura",
      "fr_FR": "Armure méca",
      "fr_CA": "Armure méca"
    },
    main: "Quick Respawn",
    brand: "amiibo",
    stars: 2,
    id: 102
  },
  {
    image: "../common/assets/img/gear/Clt_AMB003.png",
    name: "School Cardigan",
    localizedName: {
      "ja_JP": "スクールカーデ",
      "en_US": "School Cardigan",
      "en_GB": "School Cardigan",
      "es_ES": "Traje escolar",
      "es_MX": "Traje escolar",
      "fr_FR": "Gilet scolaire",
      "fr_CA": "Gilet scolaire"
    },
    main: "Run Speed Up",
    brand: "amiibo",
    stars: 2,
    id: 103
  },
  {
    image: "../common/assets/img/gear/Clt_AMB004.png",
    name: "Squinja Suit",
    localizedName: {
      "ja_JP": "ニンジャスーツ",
      "en_US": "Squinja Suit",
      "en_GB": "Squinja Suit",
      "es_ES": "Atuendo ninja",
      "es_MX": "Atuendo ninja",
      "fr_FR": "Tenue de ninja",
      "fr_CA": "Tenue de ninja"
    },
    main: "Special Saver",
    brand: "amiibo",
    stars: 2,
    id: 104
  },
  {
    image: "../common/assets/img/gear/Clt_AMB005.png",
    name: "Power Armor Mk I",
    localizedName: {
      "ja_JP": "パワードスーツ オリジン",
      "en_US": "Power Armor Mk I",
      "en_GB": "Power Armor Mk I",
      "es_ES": "Prototipo de tecnoarmadura",
      "es_MX": "Prototipo de tecnoarmadura",
      "fr_FR": "Armure méca Mk I",
      "fr_CA": "Armure méca Mk I"
    },
    main: "Ink Resistance Up",
    brand: "amiibo",
    stars: 2,
    id: 105
  },
  {
    image: "../common/assets/img/gear/Clt_MSN000.png",
    name: "Hero Jacket Replica",
    localizedName: {
      "ja_JP": "フェスＴ",
      "en_US": "Hero Jacket Replica",
      "en_GB": "Hero Jacket Replica",
      "es_ES": "Camiseta festiva",
      "es_MX": "Camiseta festiva",
      "fr_FR": "T-shirt festif",
      "fr_CA": "T-shirt festif"
    },
    main: "Swim Speed Up",
    brand: "Cuttlegear",
    stars: 2,
    id: 106
  },
  {
    image: "../common/assets/img/gear/Clt_MSN004.png",
    name: "Armor Jacket Replica",
    localizedName: {
      "ja_JP": "ヒーロージャケット レプリカ",
      "en_US": "Armor Jacket Replica",
      "en_GB": "Armor Jacket Replica",
      "es_ES": "Sudadera de élite (réplica)",
      "es_MX": "Sudadera de élite (réplica)",
      "fr_FR": "Veste héroïque (réplique)",
      "fr_CA": "Veste héroïque (réplique)"
    },
    main: "Special Charge Up",
    brand: "Cuttlegear",
    stars: 2,
    id: 107
  },
  {
    image: "../common/assets/img/gear/Clt_MSN101.png",
    name: "Hero Hoodie Replica",
    localizedName: {
      "ja_JP": "アーマージャケット レプリカ",
      "en_US": "Hero Hoodie Replica",
      "en_GB": "Hero Hoodie Replica",
      "es_ES": "Chaqueta reforzada (réplica)",
      "es_MX": "Sudadera de élite réplica",
      "fr_FR": "Anorak encrifugé (réplique)",
      "fr_CA": "Coton ouaté héroïque (rép.)"
    },
    main: "Ink Recovery Up",
    brand: "Cuttlegear",
    stars: 2,
    id: 108
  },
  {
    image: "../common/assets/img/gear/Clt_HAP001.png",
    name: "Splatfest Tee",
    localizedName: {
      "ja_JP": "フェスＴ",
      "en_US": "Splatfest Tee",
      "en_GB": "Splatfest Tee",
      "es_ES": "Camiseta festiva",
      "es_MX": "Camiseta festiva",
      "fr_FR": "T-shirt festif",
      "fr_CA": "T-shirt festif"
    },
    main: "Ability Doubler",
    brand: "SquidForce",
    fixed: true,
    stars: 3,
    id: 109
  }
]
  }
