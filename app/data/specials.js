angular.module('splatApp').specials = function ($scope) {
  $scope.specials = [
    {
      name: "Tenta Missiles",
      localizedName: {
        "ja_JP": "マルチミサイル",
        "en_US": "Tenta Missiles",
        "en_GB": "Tenta Missiles",
        "es_ES": "Lanzamisiles",
        "es_MX": "Lanzamisiles",
        "fr_FR": "Multi-missile",
        "fr_CA": "Multi-missile",
        "de_DE": "Schwarmraketen",
        "it_IT": "Lanciarazzi",
        "nl_NL": "Spetterraketten",
        "ru_RU": "Каракатница",
        "zh_HK": "マルチミサイル (導弾)"
      },
      image: "../common/assets/img/subspe/Wsp_SuperMissile.png",
      damage: {
        "Direct": 150,
        "Near": 50,
        "Far": 30
      }
    },
    {
      name: "Baller",
      localizedName: {
        "ja_JP": "イカスフィア",
        "en_US": "Baller",
        "en_GB": "Baller",
        "es_ES": "Esfera tintera",
        "es_MX": "Esfera tintera",
        "fr_FR": "Chromo-sphère",
        "fr_CA": "Chromo-sphère",
        "de_DE": "Sepisphäre",
        "it_IT": "Cromosfera",
        "nl_NL": "Barstbubbel",
        "ru_RU": "Шарокат",
        "zh_HK": "イカスフィア (倉鼠波)"
      },
      image: "../common/assets/img/subspe/Wsp_AquaBall.png",
      damage: {
        "Direct": 50,
        "Near": 180,
        "Far": 55
      }
    },
    {
      name: "Splashdown",
      localizedName: {
        "ja_JP": "スーパーチャクチ",
        "en_US": "Splashdown",
        "en_GB": "Splashdown",
        "es_ES": "Salto explosivo",
        "es_MX": "Clavado",
        "fr_FR": "Choc chromatique",
        "fr_CA": "Choc chromatique",
        "de_DE": "Tintenschock",
        "it_IT": "Vernischianto",
        "nl_NL": "Superlanding",
        "ru_RU": "Мегаплюх",
        "zh_HK": "スーパーチャクチ (爆地)"
      },
      image: "../common/assets/img/subspe/Wsp_SuperLanding.png",
      damage: {
        "Direct": 180,
        "Near": 70,
        "Far": 55
      }
    },
    {
      name: "Bubble Blower",
      localizedName: {
        "ja_JP": "バブルランチャー",
        "en_US": "Bubble Blower",
        "en_GB": "Bubble Blower",
        "es_ES": "Lanzapompas",
        "es_MX": "Lanzaburbujas",
        "fr_FR": "Lance-bulles",
        "fr_CA": "Lance-bulles",
        "de_DE": "Blubberwerfer",
        "it_IT": "Soffiabolle",
        "nl_NL": "Bellenblazer",
        "ru_RU": "Пузырятор",
        "zh_HK": "バブルランチャー (吹波波)"
      },
      image: "../common/assets/img/subspe/Wsp_SuperBubble.png",
      radius: {
        "Max": 30.0,
        "Min": 15.0,
      }
    },
    {
      name: "Ink Armor",
      localizedName: {
        "ja_JP": "インクアーマー",
        "en_US": "Ink Armor",
        "en_GB": "Ink Armor",
        "es_ES": "Membrana",
        "es_MX": "Membrana",
        "fr_FR": "Armure d'encre",
        "fr_CA": "Armure d'encre",
        "de_DE": "Tintenrüstung",
        "it_IT": "Armatura d'inchiostro",
        "nl_NL": "Inktharnas",
        "ru_RU": "Бронекраска",
        "zh_HK": "インクアーマー (保護盾)"
      },
      image: "../common/assets/img/subspe/Wsp_SuperArmor.png",
      duration: 8
    },
    {
      name: "Inkjet",
      localizedName: {
        "ja_JP": "ジェットパック",
        "en_US": "Inkjet",
        "en_GB": "Inkjet",
        "es_ES": "Propulsor",
        "es_MX": "Propulsor",
        "fr_FR": "Chromo-jet",
        "fr_CA": "Chromo-jet",
        "de_DE": "Tintendüser",
        "it_IT": "Jet splat",
        "nl_NL": "Inktjet",
        "ru_RU": "Красколет",
        "zh_HK": "インクアーマー (飛行背包)"
      },
      image: "../common/assets/img/subspe/Wsp_Jetpack.png",
      duration: 8,
      damage: {
        "Direct": 120,
        "Near": 50,
        "Far": 30
      }
    },
    {
      name: "Sting Ray",
      localizedName: {
        "ja_JP": "ハイパープレッサー",
        "en_US": "Sting Ray",
        "en_GB": "Sting Ray",
        "es_ES": "Rayo tintódico",
        "es_MX": "Rayo tintódico",
        "fr_FR": "Pigmalance",
        "fr_CA": "Pigmalance",
        "de_DE": "Magistraal",
        "it_IT": "Baccalaser",
        "nl_NL": "Magistraal",
        "ru_RU": "Струятор",
        "zh_HK": "ハイパープレッサー (Laser)"
      },
      image: "../common/assets/img/subspe/Wsp_WaterCutter.png",
      duration: 8
    },
    {
      name: "Ink Storm",
      localizedName: {
        "ja_JP": "アメフラシ",
        "en_US": "Ink Storm",
        "en_GB": "Ink Storm",
        "es_ES": "Atormentador",
        "es_MX": "Atormentador",
        "fr_FR": "Pluie d'encre",
        "fr_CA": "Pluie d'encre",
        "de_DE": "Tintenschauer",
        "it_IT": "Pioggia di colore",
        "nl_NL": "Spetterbui",
        "ru_RU": "Туча краски",
        "zh_HK": "アメフラシ (雨雲)"
      },
      image: "../common/assets/img/subspe/Wsp_RainCloud.png",
      duration: 8
    },
    {
      name: "Suction-Bomb Launcher",
      localizedName: {
        "ja_JP": "ボムピッチャー",
        "en_US": "Suction-Bomb Launcher",
        "en_GB": "Suction-Bomb Launcher",
        "es_ES": "Bombardeos",
        "es_MX": "Bombardeos pegajoso",
        "fr_FR": "Lanceur de bombes",
        "fr_CA": "Lance-bombes gluantes",
        "de_DE": "Haftbomber",
        "it_IT": "Lanciappiccibombe",
        "nl_NL": "Kleefbomkanon",
        "ru_RU": "Бомбомет (присоски)",
        "zh_HK": "ボムピッチャー (吸盤弾連射)"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherSuction.png",
      duration: 6
    },
    {
      name: "Autobomb Launcher",
      localizedName: {
        "ja_JP": "ボムピッチャー",
        "en_US": "Autobomb Launcher",
        "en_GB": "Autobomb Launcher",
        "es_ES": "Bombardeos",
        "es_MX": "Bombardeos",
        "fr_FR": "Lanceur de bombes",
        "fr_CA": "Lance-bombes",
        "de_DE": "Bomb Launcher",
        "it_IT": "Lanciabombe Robo",
        "nl_NL": "Robobomkanon",
        "ru_RU": "Бомбомет (Робобомб)",
        "zh_HK": "ボムピッチャー (自走弾連射)"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherRobo.png",
      duration: 6
    },
    {
      name: "Splat-Bomb Launcher",
      localizedName: {
        "ja_JP": "ボムピッチャー",
        "en_US": "Splat-Bomb Launcher",
        "en_GB": "Splat-Bomb Launcher",
        "es_ES": "Bombardeos",
        "es_MX": "Plasbombardeos",
        "fr_FR": "Lanceur de bombes",
        "fr_CA": "Lance-bombes",
        "de_DE": "Bomb Launcher",
        "it_IT": "Lanciabombe splash",
        "nl_NL": "Klodderbomkanon",
        "ru_RU": "Бомбомет (брызгающие)",
        "zh_HK": "ボムピッチャー (三角弾連射)"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherSplash.png",
      duration: 6
    },
    {
      name: "Burst-Bomb Launcher",
      localizedName: {
        "ja_JP": "ボムピッチャー",
        "en_US": "Burst-bomb Launcher",
        "en_GB": "Burst-bomb Launcher",
        "es_ES": "Bombardeos",
        "es_MX": "Bombardeos",
        "fr_FR": "Lanceur de bombes",
        "fr_CA": "Lance-bombes",
        "de_DE": "Bomb Launcher",
        "it_IT": "Lanciabombe granata",
        "nl_NL": "Ballonbomkanon",
        "ru_RU": "Бомбомет (Разрывная)",
        "zh_HK": "ボムピッチャー (水袋連射)"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherQuick.png",
      duration: 6
    },
    {
      name: "Curling-Bomb Launcher",
      localizedName: {
        "ja_JP": "ボムピッチャー",
        "en_US": "Curling-bomb Launcher",
        "en_GB": "Curling-bomb Launcher",
        "es_ES": "Bombardeos deslizante",
        "es_MX": "Bombardeos deslizante",
        "fr_FR": "Lanceur de bombes",
        "fr_CA": "Lance-bombes",
        "de_DE": "Bomb Launcher",
        "it_IT": "Lanciabombe curling",
        "nl_NL": "Curlingbomkanon",
        "ru_RU": "Бомбомет (керлинг)",
        "zh_HK": "ボムピッチャー (氷球連射)"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherCurling.png",
      duration: 6
    },
    {
      name: "Booyah Bomb",
      // TODO: These came from the Wiki or Google Translate. May not be correct.
      localizedName: {
        "ja_JP": "ナイスダマ",
        "en_US": "Booyah Bomb",
        "en_GB": "Booyah Bomb",
        "es_ES": "Bola genializante",
        "es_MX": "Bola genializante",
        "fr_FR": "Jolizator",
        "fr_CA": "Excellinator",
        "de_DE": "Cool-Kugel",
        "it_IT": "Granbotto",
        "nl_NL": "Coole bom",
        "ru_RU": "Йо-хо-плюхер Yo-kho-plyukher",
        "zh_HK": "好球"
      },
      image: "../common/assets/img/subspe/Wsp_BooyahBomb.png",
      duration: 8.5
    }
  ]

  $scope.getSpecialByName = function(name) {
    return $scope.specials.filter(function(special) {
      return special.name == name;
    })[0]
  }

  $scope.getDamagingSpecials = function() {
    return $scope.specials.filter(function(special) {
      return special.hasOwnProperty("damage")
    })
  }
}
