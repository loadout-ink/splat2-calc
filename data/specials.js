angular.module('splatApp').specials = function ($scope) {
  $scope.specials = [
    {
      name: "Tenta Missiles",
      localizedName: {
        en: "Tenta Missiles",
        jp: "マルチミサイル",
        es: "Lanzamisiles",
        fr: "Multi-missile"
      },
      image: "./assets/img/subspe/Wsp_SuperMissile.png",
      damage: {
        "Direct": 150,
        "Near": 50,
        "Far": 30
      }
    },
    {
      name: "Baller",
      localizedName: {
        en: "Baller",
        jp: "イカスフィア",
        es: "Baller",
        fr: "Chromo-sphère"
      },
      image: "./assets/img/subspe/Wsp_AquaBall.png",
      damage: {
        "Direct": 50,
        "Near": 180,
        "Far": 55
      }
    },
    {
      name: "Splashdown",
      localizedName: {
        en: "Splashdown",
        jp: "スーパーチャクチ",
        es: "Salto explosivo",
        fr: "Choc chromatique"
      },
      image: "./assets/img/subspe/Wsp_SuperLanding.png",
      damage: {
        "Direct": 180,
        "Near": 70,
        "Far": 55
      }
    },
    {
      name: "Bubble Blower",
      localizedName: {
        en: "Bubble Blower",
        jp: "バブルランチャー",
        es: "Bubble Blower",
        fr: "Lance-bulles"
      },
      image: "./assets/img/subspe/Wsp_SuperBubble.png"
    },
    {
      name: "Ink Armor",
      localizedName: {
        en: "Ink Armor",
        jp: "インクアーマー",
        es: "Ink Armor",
        fr: "Armure d'encre"
      },
      image: "./assets/img/subspe/Wsp_SuperArmor.png",
      duration: 8
    },
    {
      name: "Inkjet",
      localizedName: {
        en: "Inkjet",
        jp: "ジェットパック",
        es: "Propulsor",
        fr: "Chromo-jet"
      },
      image: "./assets/img/subspe/Wsp_Jetpack.png",
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
        en: "Sting Ray",
        jp: "ハイパープレッサー",
        es: "Rayo tintódico",
        fr: "Pigmalance"
      },
      image: "./assets/img/subspe/Wsp_WaterCutter.png",
      duration: 8
    },
    {
      name: "Ink Storm",
      localizedName: {
        en: "Ink Storm",
        jp: "アメフラシ",
        es: "Atormentador",
        fr: "Pluie d'encre"
      },
      image: "./assets/img/subspe/Wsp_RainCloud.png",
      duration: 8
    },
    {
      name: "Suction-Bomb Launcher",
      localizedName: {
        en: "Suction-Bomb Launcher",
        jp: "ボムピッチャー",
        es: "Bombardeos",
        fr: "Lanceur de bombes"
      },
      image: "./assets/img/subspe/Wsp_LauncherSuction.png",
      duration: 6
    },
    {
      name: "Autobomb Launcher",
      localizedName: {
        en: "Autobomb Launcher",
        jp: "ボムピッチャー",
        es: "Bombardeos",
        fr: "Lanceur de bombes"
      },
      image: "./assets/img/subspe/Wsp_LauncherRobo.png",
      duration: 6
    },
    {
      name: "Splat-Bomb Launcher",
      localizedName: {
        en: "Splat-Bomb Launcher",
        jp: "ボムピッチャー",
        es: "Bombardeos",
        fr: "Lanceur de bombes"
      },
      image: "./assets/img/subspe/Wsp_LauncherSplash.png",
      duration: 6
    },
    {
      name: "Burst-Bomb Launcher",
      localizedName: {
        en: "Burst-Bomb Launcher",
        jp: "ボムピッチャー",
        es: "Bombardeos",
        fr: "Lanceur de bombes"
      },
      image: "./assets/img/subspe/Wsp_LauncherQuick.png",
      duration: 6
    },
    {
      name: "Curling-Bomb Launcher",
      localizedName: {
        en: "Curling-Bomb Launcher",
        jp: "ボムピッチャー",
        es: "Bombardeos",
        fr: "Lanceur de bombes"
      },
      image: "./assets/img/subspe/Wsp_LauncherCurling.png",
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
