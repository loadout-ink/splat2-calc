angular.module('splatApp').subs = function ($scope) {
  $scope.subs = [
    {
      name: "Splat Bomb",
      localizedName: {
        en_US: "Splat Bomb",
        ja_JP: "スプラッシュボム",
        es_ES: "Bomba básica",
        fr_FR: "Bombe splash"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Splash.png",
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
        en_US: "Burst Bomb",
        ja_JP: "クイックボム",
        es_ES: "Bomba rápida",
        fr_FR: "Bombe ballon"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Quick.png",
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
        en_US: "Suction Bomb",
        ja_JP: "キューバンボム",
        es_ES: "Bomba ventosa",
        fr_FR: "Bombe gluante"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Suction.png",
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
        en_US: "Autobomb",
        ja_JP: "ロボットボム",
        es_ES: "Autobomb",
        fr_FR: "Bombe robot"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Robo.png",
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
        en_US: "Curling Bomb",
        ja_JP: "カーリングボム",
        es_ES: "Bomba deslizante",
        fr_FR: "Bombe curling"
      },
      image: "../common/assets/img/subspe/Wsb_Bomb_Curling.png",
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
        en_US: "Ink Mine",
        ja_JP: "トラップ",
        es_ES: "Bomba Trampa",
        fr_FR: "Mine"
      },
      image: "../common/assets/img/subspe/Wsb_TimerTrap.png",
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
        en_US: "Squid Beakon",
        ja_JP: "ジャンプビーコン",
        es_ES: "Squid Beakon",
        fr_FR: "Balise de saut"
      },
      image: "../common/assets/img/subspe/Wsb_Flag.png",
      cost: 75,
      inkSaver: "Normal"
    },
    {
      name: "Sprinkler",
      localizedName: {
        en_US: "Sprinkler",
        ja_JP: "スプリンクラー",
        es_ES: "Aspersor",
        fr_FR: "Fontaine"
      },
      image: "../common/assets/img/subspe/Wsb_Sprinkler.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Toxic Mist",
      localizedName: {
        en_US: "Toxic Mist",
        ja_JP: "ポイズンミスト",
        es_ES: "Toxic Mist",
        fr_FR: "Bombe ballon"
      },
      image: "../common/assets/img/subspe/Wsb_PoisonFog.png",
      cost: 70,
      inkSaver: "Normal"
    },
    {
      name: "Point Sensor",
      localizedName: {
        en_US: "Point Sensor",
        ja_JP: "ポイントセンサー",
        es_ES: "Rastreador",
        fr_FR: "Détecteur"
      },
      image: "../common/assets/img/subspe/Wsb_PointSensor.png",
      cost: 60,
      inkSaver: "Normal"
    },
    {
      name: "Splash Wall",
      localizedName: {
        en_US: "Splash Wall",
        ja_JP: "スプラッシュシールド",
        es_ES: "Splash Wall",
        fr_FR: "Mur d'encre"
      },
      image: "../common/assets/img/subspe/Wsb_Shield.png",
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
