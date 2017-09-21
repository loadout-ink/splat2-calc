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
        "de_DE": "Schwarmraketen"
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
        "de_DE": "Sepisphäre"
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
        "de_DE": "Tintenschock"
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
        "de_DE": "Blubberwerfer"
      },
      image: "../common/assets/img/subspe/Wsp_SuperBubble.png"
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
        "de_DE": "Tintenrüstung"
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
        "de_DE": "Tintendüser"
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
        "de_DE": "Magistraal"
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
        "de_DE": "Tintenschauer"
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
        "fr_CA": "Lance-bombes",
        "de_DE": "Bomb Launcher"
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
        "de_DE": "Bomb Launcher"
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
        "de_DE": "Bomb Launcher"
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
        "de_DE": "Bomb Launcher"
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
        "de_DE": "Bomb Launcher"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherCurling.png",
      duration: 6
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
