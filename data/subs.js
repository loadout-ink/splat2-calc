angular.module('splatApp').subs = function ($scope) {
  $scope.subs = [
    {
      name: "Splat Bomb",
      localizedName: {
        en: "Splat Bomb",
        jp: "スプラッシュボム",
        es: "Bomba básica",
        fr: "Bombe splash"
      },
      image: "./assets/img/subspe/Wsb_Bomb_Splash.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Burst Bomb",
      localizedName: {
        en: "Burst Bomb",
        jp: "クイックボム",
        es: "Bomba rápida",
        fr: "Bombe ballon"
      },
      image: "./assets/img/subspe/Wsb_Bomb_Quick.png",
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
      localizedName: {
        en: "Suction Bomb",
        jp: "キューバンボム",
        es: "Bomba ventosa",
        fr: "Bombe gluante"
      },
      image: "./assets/img/subspe/Wsb_Bomb_Suction.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 180,
        "Far": 30
      }
    },
    {
      name: "Autobomb",
      localizedName: {
        en: "Autobomb",
        jp: "ロボットボム",
        es: "Autobomb",
        fr: "Bombe robot"
      },
      image: "./assets/img/subspe/Wsb_Bomb_Robo.png",
      cost: 70,
      inkSaver: "Low",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Curling Bomb",
      localizedName: {
        en: "Curling Bomb",
        jp: "カーリングボム",
        es: "Bomba deslizante",
        fr: "Bombe curling"
      },
      image: "./assets/img/subspe/Wsb_Bomb_Curling.png",
      cost: 70,
      inkSaver: "Normal",
      damage: {
        "Near": 150,
        "Far": 30
      }
    },
    {
      name: "Ink Mine",
      localizedName: {
        en: "Ink Mine",
        jp: "トラップ",
        es: "Bomba Trampa",
        fr: "Mine"
      },
      image: "./assets/img/subspe/Wsb_TimerTrap.png",
      cost: 60,
      inkSaver: "Normal",
      damage: {
        "Near": 35,
        "Far": 20
      }
    },
    {
      name: "Squid Beakon",
      localizedName: {
        en: "Squid Beakon",
        jp: "ジャンプビーコン",
        es: "Squid Beakon",
        fr: "Balise de saut"
      },
      image: "./assets/img/subspe/Wsb_Flag.png",
      cost: 75,
      inkSaver: "Normal"
    },
    {
      name: "Sprinkler",
      localizedName: {
        en: "Sprinkler",
        jp: "スプリンクラー",
        es: "Aspersor",
        fr: "Fontaine"
      },
      image: "./assets/img/subspe/Wsb_Sprinkler.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Toxic Mist",
      localizedName: {
        en: "Toxic Mist",
        jp: "ポイズンミスト",
        es: "Toxic Mist",
        fr: "Bombe ballon"
      },
      image: "./assets/img/subspe/Wsb_PoisonFog.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Point Sensor",
      localizedName: {
        en: "Point Sensor",
        jp: "ポイントセンサー",
        es: "Rastreador",
        fr: "Détecteur"
      },
      image: "./assets/img/subspe/Wsb_PointSensor.png",
      cost: 60,
      inkSaver: "Normal"
    },
    {
      name: "Splash Wall",
      localizedName: {
        en: "Splash Wall",
        jp: "スプラッシュシールド",
        es: "Splash Wall",
        fr: "Mur d'encre"
      },
      image: "./assets/img/subspe/Wsb_Shield.png",
      cost: 60,
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
