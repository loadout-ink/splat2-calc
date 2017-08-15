angular.module('splatApp').subs = function ($scope) {
  $scope.subs = [
    {
      name: "Splat Bomb",
      image: "img/subspe/Wsb_Bomb_Splash.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Burst Bomb",
      image: "img/subspe/Wsb_Bomb_Quick.png",
      cost: 40,
      inkSaver: "Low",
      damage: {
        "Direct": 60,
        "Near": 35,
        "Far": 25
      }
    },
    {
      name: "Suction Bomb",
      image: "img/subspe/Wsb_Bomb_Suction.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Autobomb",
      image: "img/subspe/Wsb_Bomb_Robo.png",
      cost: 70,
      inkSaver: "Low",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Curling Bomb",
      image: "img/subspe/Wsb_Bomb_Curling.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Ink Mine",
      image: "img/subspe/Wsb_TimerTrap.png",
      cost: 60,
      inkSaver: "Normal",
      damage: {
        "Near": 35,
        "Far": 20
      }
    },
    {
      name: "Squid Beakon",
      image: "img/subspe/Wsb_Flag.png",
      cost: 90,
      inkSaver: "Normal"
    },
    {
      name: "Sprinkler",
      image: "img/subspe/Wsb_Sprinkler.png",
      cost: 90,
      inkSaver: "Normal"
    },
    {
      name: "Toxic Mist",
      image: "img/subspe/Wsb_PoisonFog.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Point Sensor",
      image: "img/subspe/Wsb_PointSensor.png",
      cost: 60,
      inkSaver: "Normal"
    },
    {
      name: "Splash Wall",
      image: "img/subspe/Wsb_Shield.png",
      cost: 90,
      inkSaver: "Normal"
    }
  ]

  $scope.getSubByName = function(name) {
      return $scope.subs.filter(function(sub) {
        return sub.name == name;
      })[0]
  }

  $scope.getDamagingSubs = function() {
    return $scope.subs.filter(function(sub) {
      return sub.hasOwnProperty("damage")
    })
  }
}
