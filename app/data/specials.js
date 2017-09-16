angular.module('splatApp').specials = function ($scope) {
  $scope.specials = [
    {
      name: "Tenta Missiles",
      localizedName: {
        en_US: "Tenta Missiles",
        ja_JP: "マルチミサイル",
        es_ES: "Lanzamisiles",
        fr_FR: "Multi-missile"
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
        en_US: "Baller",
        ja_JP: "イカスフィア",
        es_ES: "Baller",
        fr_FR: "Chromo-sphère"
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
        en_US: "Splashdown",
        ja_JP: "スーパーチャクチ",
        es_ES: "Salto explosivo",
        fr_FR: "Choc chromatique"
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
        en_US: "Bubble Blower",
        ja_JP: "バブルランチャー",
        es_ES: "Bubble Blower",
        fr_FR: "Lance-bulles"
      },
      image: "../common/assets/img/subspe/Wsp_SuperBubble.png"
    },
    {
      name: "Ink Armor",
      localizedName: {
        en_US: "Ink Armor",
        ja_JP: "インクアーマー",
        es_ES: "Ink Armor",
        fr_FR: "Armure d'encre"
      },
      image: "../common/assets/img/subspe/Wsp_SuperArmor.png",
      duration: 8
    },
    {
      name: "Inkjet",
      localizedName: {
        en_US: "Inkjet",
        ja_JP: "ジェットパック",
        es_ES: "Propulsor",
        fr_FR: "Chromo-jet"
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
        en_US: "Sting Ray",
        ja_JP: "ハイパープレッサー",
        es_ES: "Rayo tintódico",
        fr_FR: "Pigmalance"
      },
      image: "../common/assets/img/subspe/Wsp_WaterCutter.png",
      duration: 8
    },
    {
      name: "Ink Storm",
      localizedName: {
        en_US: "Ink Storm",
        ja_JP: "アメフラシ",
        es_ES: "Atormentador",
        fr_FR: "Pluie d'encre"
      },
      image: "../common/assets/img/subspe/Wsp_RainCloud.png",
      duration: 8
    },
    {
      name: "Suction-Bomb Launcher",
      localizedName: {
        en_US: "Suction-Bomb Launcher",
        ja_JP: "ボムピッチャー",
        es_ES: "Bombardeos",
        fr_FR: "Lanceur de bombes"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherSuction.png",
      duration: 6
    },
    {
      name: "Autobomb Launcher",
      localizedName: {
        en_US: "Autobomb Launcher",
        ja_JP: "ボムピッチャー",
        es_ES: "Bombardeos",
        fr_FR: "Lanceur de bombes"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherRobo.png",
      duration: 6
    },
    {
      name: "Splat-Bomb Launcher",
      localizedName: {
        en_US: "Splat-Bomb Launcher",
        ja_JP: "ボムピッチャー",
        es_ES: "Bombardeos",
        fr_FR: "Lanceur de bombes"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherSplash.png",
      duration: 6
    },
    {
      name: "Burst-Bomb Launcher",
      localizedName: {
        en_US: "Burst-Bomb Launcher",
        ja_JP: "ボムピッチャー",
        es_ES: "Bombardeos",
        fr_FR: "Lanceur de bombes"
      },
      image: "../common/assets/img/subspe/Wsp_LauncherQuick.png",
      duration: 6
    },
    {
      name: "Curling-Bomb Launcher",
      localizedName: {
        en_US: "Curling-Bomb Launcher",
        ja_JP: "ボムピッチャー",
        es_ES: "Bombardeos",
        fr_FR: "Lanceur de bombes"
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
