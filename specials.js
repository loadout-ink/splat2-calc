angular.module('splatApp').specials = function ($scope) {
  $scope.specials = [
    {
      name: "Tenta Missiles",
      image: "img/subspe/Wsp_SuperMissile.png",
      damage: {
        "Direct": 150,
        "Near": 30
      }
    },
    {
      name: "Baller",
      image: "img/subspe/Wsp_AquaBall.png",
      damage: {
        "Direct": 50,
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Splashdown",
      image: "img/subspe/Wsp_SuperLanding.png",
      damage: {
        "Direct": 180,
        "Near": 70,
        "Far": 40
      }
    },
    {
      name: "Bubble Blower",
      image: "img/subspe/Wsp_SuperBubble.png"
    },
    {
      name: "Ink Armor",
      image: "img/subspe/Wsp_SuperArmor.png",
      duration: 8
    },
    {
      name: "Inkjet",
      image: "img/subspe/Wsp_Jetpack.png",
      duration: 8,
      damage: {
        "Direct": 120,
        "Near": 50,
        "Far": 30
      }
    },
    {
      name: "Sting Ray",
      image: "img/subspe/Wsp_WaterCutter.png",
      duration: 7.5
    },
    {
      name: "Ink Storm",
      image: "img/subspe/Wsp_RainCloud.png",
      duration: 8
    },
    {
      name: "Suction-Bomb Launcher",
      image: "img/subspe/Wsp_LauncherSuction.png",
      duration: 6
    },
    {
      name: "Autobomb Launcher",
      image: "img/subspe/Wsp_LauncherRobo.png",
      duration: 6
    },
    {
      name: "Splat-Bomb Launcher",
      image: "img/subspe/Wsp_LauncherSplash.png",
      duration: 6
    },
    {
      name: "Burst-Bomb Launcher",
      image: "img/subspe/Wsp_LauncherQuick.png",
      duration: 6
    },
    {
      name: "Curling-Bomb Launcher",
      image: "img/subspe/Wsp_LauncherCurling.png",
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
