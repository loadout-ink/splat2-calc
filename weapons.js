function filter_available(weapon) {
  return !weapon.unreleased
}

angular.module('splatApp').weapons = function ($scope) {
  $scope.weaponSets = [
    {
      type: "Shooters",
      weapons: [
        {
          image: "img/weapons/Wst_Shooter_First_00.png",
          name: "Splattershot Jr.",
          shotUnit: "shots",
          sub: "Splat Bomb",
          special: "Ink Armor",
          level: 1,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.5,
          speedLevel: "High",
          price: 0,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Normal_H.png",
          name: "Hero Shot Replica",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Splashdown",
          level: 2,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          price: 1500,
          stats: {
            "Range": 50,
            "Fire Rate": 60,
            "Damage": 45
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Normal_00.png",
          name: "Splattershot",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Splashdown",
          level: 2,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          price: 900,
          stats: {
            "Range": 50,
            "Fire Rate": 60,
            "Damage": 45
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Normal_01.png",
          name: "Tentatek Splattershot",
          shotUnit: "shots",
          sub: "Splat Bomb",
          special: "Inkjet",
          level: 4,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          price: 2100,
          stats: {
            "Range": 50,
            "Fire Rate": 60,
            "Damage": 45
          }
        },
        {
          image: "img/weapons/Wst_Shooter_First_01.png",
          name: "Custom Splattershot Jr.",
          shotUnit: "shots",
          sub: "Autobomb",
          special: "Ink Storm",
          level: 4,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.5,
          speedLevel: "High",
          price: 1900,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Blaze_00.png",
          name: "Aerospray MG",
          shotUnit: "shots",
          sub: "Suction Bomb",
          special: "Curling-Bomb Launcher",
          level: 6,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.55,
          speedLevel: "High",
          price: 4900,
          stats: {
            "Range": 35,
            "Fire Rate": 90,
            "Damage": 10
          }
        },
        {
          image: "img/weapons/Wst_Shooter_QuickMiddle_00.png",
          name: "N-ZAP '85",
          shotUnit: "shots",
          sub: "Suction Bomb",
          special: "Ink Armor",
          level: 9,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          price: 7100,
          stats: {
            "Range": 50,
            "Fire Rate": 75,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Short_00.png",
          name: "Sploosh-o-matic",
          shotUnit: "shots",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          price: 9700,
          stats: {
            "Range": 12,
            "Fire Rate": 75,
            "Damage": 52
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Expert_00.png",
          name: "Splattershot Pro",
          shotUnit: "shots",
          sub: "Point Sensor",
          special: "Ink Storm",
          level: 10,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 2,
          speedLevel: "Middle",
          price: 13800,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 60
          }
        },
        {
          image: "img/weapons/Wst_Shooter_QuickMiddle_01.png",
          name: "N-ZAP '89",
          shotUnit: "shots",
          sub: "Autobomb",
          special: "Tenta Missiles",
          level: 11,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          price: 8800,
          stats: {
            "Range": 50,
            "Fire Rate": 75,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Gravity_00.png",
          name: ".52 Gal",
          shotUnit: "shots",
          sub: "Point Sensor",
          special: "Baller",
          level: 14,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.3,
          speedLevel: "Middle",
          price: 9500,
          stats: {
            "Range": 50,
            "Fire Rate": 25,
            "Damage": 75
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Flash_00.png",
          name: "Squeezer",
          shotUnit: "shots",
          sub: "Splash Wall",
          special: "Sting Ray",
          level: 16,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 9400,
          stats: {
            "Range": 70,
            "Fire Rate": 45,
            "Damage": 52
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Long_00.png",
          name: "Jet Squelcher",
          shotUnit: "shots",
          sub: "Toxic Mist",
          special: "Tenta Missiles",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.6,
          speedLevel: "Middle",
          price: 11300,
          stats: {
            "Range": 82,
            "Fire Rate": 30,
            "Damage": 35
          }
        },
        {
          image: "img/weapons/Wst_Shooter_TripleQuick_00.png",
          name: "L-3 Nozzlenose",
          shotUnit: "shots",
          sub: "Curling Bomb",
          special: "Baller",
          level: 18,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          price: 10400,
          stats: {
            "Range": 62,
            "Fire Rate": 65,
            "Damage": 25
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Short_01.png",
          name: "Neo Sploosh-o-matic",
          shotUnit: "shots",
          sub: "Squid Beakon",
          special: "Tenta Missiles",
          level: 18,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          price: 12200,
          stats: {
            "Range": 12,
            "Fire Rate": 75,
            "Damage": 52
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Expert_01.png",
          name: "Forge Splattershot Pro",
          shotUnit: "shots",
          sub: "Suction Bomb",
          special: "Bubble Blower",
          level: 20,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 2,
          speedLevel: "Middle",
          price: 20800,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 60
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Heavy_00.png",
          name: ".96 Gal",
          shotUnit: "shots",
          sub: "Sprinkler",
          special: "Ink Armor",
          level: 21,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 2.5,
          speedLevel: "Middle",
          price: 12600,
          stats: {
            "Range": 70,
            "Fire Rate": 10,
            "Damage": 75
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Gravity_01.png",
          name: ".52 Gal Deco",
          shotUnit: "shots",
          sub: "Curling Bomb",
          special: "Sting Ray",
          level: 22,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.3,
          speedLevel: "Middle",
          price: 12700,
          stats: {
            "Range": 50,
            "Fire Rate": 25,
            "Damage": 75
          }
        },
        {
          image: "img/weapons/Wst_Shooter_TripleQuick_01.png",
          name: "L-3 Nozzlenose D",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Inkjet",
          level: 23,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          price: 12500,
          stats: {
            "Range": 62,
            "Fire Rate": 65,
            "Damage": 25
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Precision_00.png",
          name: "Splash-o-matic",
          shotUnit: "shots",
          sub: "Toxic Mist",
          special: "Inkjet",
          level: 25,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          price: 11200,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Flash_01.png",
          name: "Foil Squeezer",
          shotUnit: "shots",
          sub: "Splat Bomb",
          special: "Bubble Blower",
          level: 25,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 10900,
          stats: {
            "Range": 70,
            "Fire Rate": 45,
            "Damage": 52
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Heavy_01.png",
          name: ".96 Gal Deco",
          shotUnit: "shots",
          sub: "Splash Wall",
          special: "Splashdown",
          level: 26,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 2.5,
          speedLevel: "Middle",
          price: 16200,
          stats: {
            "Range": 70,
            "Fire Rate": 10,
            "Damage": 75
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Precision_01.png",
          name: "Neo Splash-o-matic",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Suction-Bomb Launcher",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          price: 16800,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Long_01.png",
          name: "Custom Jet Squelcher",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Sting Ray",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.6,
          speedLevel: "Middle",
          price: 15900,
          stats: {
            "Range": 82,
            "Fire Rate": 30,
            "Damage": 35
          }
        },
        {
          image: "img/weapons/Wst_Shooter_Blaze_01.png",
          name: "Aerospray RG",
          shotUnit: "shots",
          sub: "Sprinkler",
          special: "Baller",
          level: 28,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.55,
          speedLevel: "High",
          price: 16900,
          stats: {
            "Range": 35,
            "Fire Rate": 90,
            "Damage": 10
          }
        },
        {
          image: "img/weapons/Wst_Shooter_TripleMiddle_00.png",
          name: "H-3 Nozzlenose",
          shotUnit: "shots",
          sub: "Point Sensor",
          special: "Tenta Missiles",
          level: 29,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 1.8,
          speedLevel: "Middle",
          price: 17200,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 58
          }
        },
        {
          image: "img/weapons/Wst_Shooter_TripleMiddle_01.png",
          name: "H-3 Nozzlenose D",
          shotUnit: "shots",
          sub: "Sprinkler",
          special: "Ink Armor",
          level: 30,
          specialCost: 190,
          inkSaver: "High",
          inkPerShot: 1.8,
          speedLevel: "Middle",
          price: 18400,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 58
          }
        }
      ]
    },
    {
      type: "Dualies",
      weapons: [
        {
          image: "img/weapons/Wst_Twins_Normal_00.png",
          name: "Splat Dualies",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 4,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          price: 2400,
          stats: {
            "Range": 39,
            "Mobility": 70,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Twins_Normal_H.png",
          name: "Hero Dualie Replicas",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 4,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          price: 3100,
          stats: {
            "Range": 39,
            "Mobility": 70,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Twins_Normal_01.png",
          name: "Enperry Splat Dualies",
          shotUnit: "shots",
          sub: "Curling Bomb",
          special: "Inkjet",
          level: 11,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          price: 9000,
          stats: {
            "Range": 39,
            "Mobility": 70,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Twins_Dual_00.png",
          name: "Dualie Squelchers",
          shotUnit: "shots",
          sub: "Point Sensor",
          special: "Tenta Missiles",
          level: 12,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          price: 9800,
          stats: {
            "Range": 70,
            "Mobility": 60,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Twins_Stepper_00.png",
          name: "Dark Tetra Dualies",
          shotUnit: "shots",
          sub: "Autobomb",
          special: "Splashdown",
          level: 14,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 10700,
          stats: {
            "Range": 50,
            "Mobility": 90,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Twins_Dual_01.png",
          name: "Custom Dualie Squelchers",
          shotUnit: "shots",
          sub: "Splat Bomb",
          special: "Ink Armor",
          level: 16,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          price: 12900,
          stats: {
            "Range": 70,
            "Mobility": 60,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Twins_Gallon_00.png",
          name: "Glooga Dualies",
          shotUnit: "shots",
          sub: "Ink Mine",
          special: "Inkjet",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 11800,
          stats: {
            "Range": 56,
            "Mobility": 35,
            "Damage": 76
          }
        },
        {
          image: "img/weapons/Wst_Twins_Stepper_01.png",
          name: "Light Tetra Dualies",
          shotUnit: "shots",
          sub: "Sprinkler",
          special: "Splat-Bomb Launcher",
          level: 21,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 13300,
          stats: {
            "Range": 50,
            "Mobility": 90,
            "Damage": 22
          }
        },
        {
          image: "img/weapons/Wst_Twins_Gallon_01.png",
          name: "Glooga Dualies Deco",
          shotUnit: "shots",
          sub: "Splash Wall",
          special: "Baller",
          level: 24,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 13700,
          stats: {
            "Range": 56,
            "Mobility": 35,
            "Damage": 76
          }
        },
        {
          image: "img/weapons/Wst_Twins_Short_00.png",
          name: "Dapple Dualies",
          shotUnit: "shots",
          sub: "Squid Beakon",
          special: "Suction-Bomb Launcher",
          level: 26,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.9,
          speedLevel: "High",
          price: 14700,
          stats: {
            "Range": 24,
            "Mobility": 80,
            "Damage": 47
          }
        },
        {
          image: "img/weapons/Wst_Twins_Short_01.png",
          name: "Dapple Dualies Nouveau",
          shotUnit: "shots",
          sub: "Toxic Mist",
          special: "Ink Storm",
          level: 29,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.9,
          speedLevel: "High",
          price: 17500,
          stats: {
            "Range": 24,
            "Mobility": 80,
            "Damage": 47
          }
        }
      ]
    },
    {
      type: "Rollers/Brushes",
      weapons: [
        {
          image: "img/weapons/Wst_Roller_Normal_00.png",
          name: "Splat Roller",
          shotUnit: "flicks",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 3,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          price: 1800,
          stats: {
            "Range": 48,
            "Ink Speed": 45,
            "Handling": 55
          }
        },
        {
          image: "img/weapons/Wst_Roller_Normal_H.png",
          name: "Hero Roller Replica",
          shotUnit: "flicks",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 3,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          price: 2300,
          stats: {
            "Range": 48,
            "Ink Speed": 45,
            "Handling": 55
          }
        },
        {
          image: "img/weapons/Wst_Roller_BrushMini_00.png",
          name: "Inkbrush",
          shotUnit: "flicks",
          sub: "Splat Bomb",
          special: "Splashdown",
          level: 5,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 2,
          speedLevel: "High",
          price: 2600,
          stats: {
            "Range": 5,
            "Ink Speed": 100,
            "Handling": 100
          }
        },
        {
          image: "img/weapons/Wst_Roller_BrushMini_01.png",
          name: "Inkbrush Nouveau",
          shotUnit: "flicks",
          sub: "Ink Mine",
          special: "Baller",
          level: 7,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 2,
          speedLevel: "High",
          price: 7000,
          stats: {
            "Range": 5,
            "Ink Speed": 100,
            "Handling": 100
          }
        },
        {
          image: "img/weapons/Wst_Roller_Compact_00.png",
          name: "Carbon Roller",
          shotUnit: "flicks",
          sub: "Autobomb",
          special: "Ink Storm",
          level: 7,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 4.5,
          speedLevel: "High",
          price: 6200,
          stats: {
            "Range": 20,
            "Ink Speed": 63,
            "Handling": 65
          }
        },
        {
          image: "img/weapons/Wst_Roller_BrushNormal_00.png",
          name: "Octobrush",
          shotUnit: "flicks",
          sub: "Autobomb",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          price: 8200,
          stats: {
            "Range": 23,
            "Ink Speed": 80,
            "Handling": 85
          }
        },
        {
          image: "img/weapons/Wst_Roller_BrushNormal_H.png",
          name: "Herobrush Replica",
          shotUnit: "flicks",
          sub: "Autobomb",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          price: 9400,
          stats: {
            "Range": 23,
            "Ink Speed": 80,
            "Handling": 85
          }
        },
        {
          image: "img/weapons/Wst_Roller_Compact_01.png",
          name: "Carbon Roller Deco",
          shotUnit: "flicks",
          sub: "Sprinkler",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 4.5,
          speedLevel: "High",
          price: 8500,
          stats: {
            "Range": 20,
            "Ink Speed": 63,
            "Handling": 65
          }
        },
        {
          image: "img/weapons/Wst_Roller_Normal_01.png",
          name: "Krak-On Splat Roller",
          shotUnit: "flicks",
          sub: "Squid Beakon",
          special: "Baller",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          price: 9200,
          stats: {
            "Range": 48,
            "Ink Speed": 45,
            "Handling": 55
          }
        },
        {
          image: "img/weapons/Wst_Roller_BrushNormal_01.png",
          name: "Octobrush Nouveau",
          shotUnit: "flicks",
          sub: "Squid Beakon",
          special: "Tenta Missiles",
          level: 15,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          price: 9900,
          stats: {
            "Range": 23,
            "Ink Speed": 80,
            "Handling": 85
          }
        },
        {
          image: "img/weapons/Wst_Roller_Heavy_00.png",
          name: "Dynamo Roller",
          shotUnit: "flicks",
          sub: "Ink Mine",
          special: "Sting Ray",
          level: 20,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 18,
          speedLevel: "Low",
          price: 24500,
          stats: {
            "Range": 76,
            "Ink Speed": 25,
            "Handling": 20
          }
        },
        {
          image: "img/weapons/Wst_Roller_Hunter_00.png",
          name: "Flingza Roller",
          shotUnit: "horizontal flicks",
          sub: "Splash Wall",
          special: "Splat-Bomb Launcher",
          level: 24,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          price: 15700,
          stats: {
            "Range": 55,
            "Ink Speed": 45,
            "Handling": 45
          }
        },
        {
          image: "img/weapons/Wst_Roller_Heavy_01.png",
          name: "Gold Dynamo Roller",
          shotUnit: "flicks",
          sub: "Toxic Mist",
          special: "Ink Armor",
          level: 25,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 18,
          speedLevel: "Low",
          price: 29000,
          stats: {
            "Range": 76,
            "Ink Speed": 25,
            "Handling": 20
          }
        },
        {
          image: "img/weapons/Wst_Roller_Hunter_01.png",
          name: "Foil Flingza Roller",
          shotUnit: "horizontal flicks",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 28,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          price: 21300,
          stats: {
            "Range": 55,
            "Ink Speed": 45,
            "Handling": 45
          }
        }
      ]
    },
    {
      type: "Blasters",
      weapons: [
        {
          image: "img/weapons/Wst_Shooter_BlasterMiddle_00.png",
          name: "Blaster",
          shotUnit: "shots",
          sub: "Toxic Mist",
          special: "Splashdown",
          level: 5,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          price: 3000,
          stats: {
            "Range": 27,
            "Fire Rate": 20,
            "Impact": 70
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterMiddle_H.png",
          name: "Hero Blaster Replica",
          shotUnit: "shots",
          sub: "Toxic Mist",
          special: "Splashdown",
          level: 5,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          price: 3800,
          stats: {
            "Range": 27,
            "Fire Rate": 20,
            "Impact": 70
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLight_00.png",
          name: "Rapid Blaster",
          shotUnit: "shots",
          sub: "Ink Mine",
          special: "Splat-Bomb Launcher",
          level: 13,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 9800,
          stats: {
            "Range": 62,
            "Fire Rate": 40,
            "Impact": 35
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLong_00.png",
          name: "Range Blaster",
          shotUnit: "shots",
          sub: "Suction Bomb",
          special: "Ink Storm",
          level: 14,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 9300,
          stats: {
            "Range": 56,
            "Fire Rate": 10,
            "Impact": 70
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLight_01.png",
          name: "Rapid Blaster Deco",
          shotUnit: "shots",
          sub: "Suction Bomb",
          special: "Inkjet",
          level: 16,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 11500,
          stats: {
            "Range": 62,
            "Fire Rate": 40,
            "Impact": 35
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLong_01.png",
          name: "Custom Range Blaster",
          shotUnit: "shots",
          sub: "Burst Bomb",
          special: "Sting Ray",
          level: 18,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 11400,
          stats: {
            "Range": 56,
            "Fire Rate": 10,
            "Impact": 70
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterShort_00.png",
          name: "Luna Blaster",
          shotUnit: "shots",
          sub: "Splat Bomb",
          special: "Baller",
          level: 19,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 9,
          speedLevel: "Middle",
          price: 12100,
          stats: {
            "Range": 9,
            "Fire Rate": 30,
            "Impact": 70
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLightLong_00.png",
          name: "Rapid Blaster Pro",
          shotUnit: "shots",
          sub: "Toxic Mist",
          special: "Ink Storm",
          level: 22,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 12800,
          stats: {
            "Range": 72,
            "Fire Rate": 30,
            "Impact": 35
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLightLong_01.png",
          name: "Rapid Blaster Pro Deco",
          shotUnit: "shots",
          sub: "Curling Bomb",
          special: "Ink Armor",
          level: 24,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 14000,
          stats: {
            "Range": 72,
            "Fire Rate": 30,
            "Impact": 35
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterShort_01.png",
          name: "Luna Blaster Neo",
          shotUnit: "shots",
          sub: "Ink Mine",
          special: "Suction-Bomb Launcher",
          level: 24,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 9,
          speedLevel: "Middle",
          price: 13600,
          stats: {
            "Range": 9,
            "Fire Rate": 30,
            "Impact": 70
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterMiddle_01.png",
          name: "Custom Blaster",
          shotUnit: "shots",
          sub: "Autobomb",
          special: "Inkjet",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          price: 15300,
          stats: {
            "Range": 27,
            "Fire Rate": 20,
            "Impact": 70
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLightShort_00.png",
          name: "Clash Blaster",
          shotUnit: "shots",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 30,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 4,
          speedLevel: "High",
          price: 18200,
          stats: {
            "Range": 21,
            "Fire Rate": 65,
            "Impact": 20
          }
        },
        {
          image: "img/weapons/Wst_Shooter_BlasterLightShort_01.png",
          name: "Clash Blaster Neo",
          shotUnit: "shots",
          sub: "Sprinkler",
          special: "Tenta Missiles",
          level: 30,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 4,
          speedLevel: "High",
          price: 20500,
          stats: {
            "Range": 21,
            "Fire Rate": 65,
            "Impact": 20
          }
        }
      ]
    },
    {
      type: "Brellas",
      weapons: [
        {
          image: "img/weapons/Wst_Umbrella_Normal_H.png",
          name: "Hero Brella Replica",
          shotUnit: "shots",
          sub: "Sprinkler",
          special: "Ink Storm",
          level: 9,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          price: 9000,
          stats: {
            "Range": 43,
            "Durability": 60,
            "Damage": 65
          }
        },
        {
          image: "img/weapons/Wst_Umbrella_Normal_00.png",
          name: "Splat Brella",
          shotUnit: "shots",
          sub: "Sprinkler",
          special: "Ink Storm",
          level: 9,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          price: 8300,
          stats: {
            "Range": 43,
            "Durability": 60,
            "Damage": 65
          }
        },
        {
          image: "img/weapons/Wst_Umbrella_Normal_01.png",
          name: "Sorella Brella",
          shotUnit: "shots",
          sub: "Toxic Mist",
          special: "Splat-Bomb Launcher",
          level: 15,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          price: 12000,
          stats: {
            "Range": 43,
            "Durability": 60,
            "Damage": 65
          }
        }
      ]
    },
    {
      type: "Sloshers",
      weapons: [
        {
          image: "img/weapons/Wst_Slosher_Strong_H.png",
          name: "Hero Slosher Replica",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 5,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 3100,
          stats: {
            "Range": 58,
            "Damage": 85,
            "Handling": 50
          }
        },
        {
          image: "img/weapons/Wst_Slosher_Strong_00.png",
          name: "Slosher",
          shotUnit: "sloshes",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 5,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 2500,
          stats: {
            "Range": 58,
            "Damage": 85,
            "Handling": 50
          }
        },
        {
          image: "img/weapons/Wst_Slosher_Strong_01.png",
          name: "Slosher Deco",
          shotUnit: "sloshes",
          sub: "Sprinkler",
          special: "Baller",
          level: 8,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 8000,
          stats: {
            "Range": 58,
            "Damage": 85,
            "Handling": 50
          }
        },
        {
          image: "img/weapons/Wst_Slosher_Launcher_00.png",
          name: "Sloshing Machine",
          shotUnit: "sloshes",
          sub: "Autobomb",
          special: "Sting Ray",
          level: 13,
          specialCost: 170,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 12600,
          stats: {
            "Range": 60,
            "Damage": 90,
            "Handling": 40
          }
        },
        {
          image: "img/weapons/Wst_Slosher_Diffusion_00.png",
          name: "Tri-Slosher",
          shotUnit: "sloshes",
          sub: "Burst Bomb",
          special: "Ink Armor",
          level: 15,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 6,
          speedLevel: "Middle",
          price: 10200,
          stats: {
            "Range": 39,
            "Damage": 80,
            "Handling": 70
          }
        },
        {
          image: "img/weapons/Wst_Slosher_Diffusion_01.png",
          name: "Tri-Slosher Nouveau",
          shotUnit: "sloshes",
          sub: "Splat Bomb",
          special: "Autobomb Launcher",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 6,
          speedLevel: "Middle",
          price: 11700,
          stats: {
            "Range": 39,
            "Damage": 80,
            "Handling": 70
          }
        },
        {
          image: "img/weapons/Wst_Slosher_Launcher_01.png",
          name: "Sloshing Machine Neo",
          shotUnit: "sloshes",
          sub: "Point Sensor",
          special: "Splat-Bomb Launcher",
          level: 19,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 19800,
          stats: {
            "Range": 60,
            "Damage": 90,
            "Handling": 40
          }
        }
      ]
    },
    {
      type: "Chargers/Splatlings",
      weapons: [
        {
          image: "img/weapons/Wst_Charger_Normal_H.png",
          name: "Hero Charger Replica",
          shotUnit: "full charges",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 3,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          price: 2700,
          stats: {
            "Range": 88,
            "Charge Speed": 50,
            "Mobility": 40
          }
        },
        {
          image: "img/weapons/Wst_Charger_Normal_00.png",
          name: "Splat Charger",
          shotUnit: "full charges",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 3,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          price: 2200,
          stats: {
            "Range": 88,
            "Charge Speed": 50,
            "Mobility": 40
          }
        },
        {
          image: "img/weapons/Wst_Spinner_Standard_H.png",
          name: "Hero Splatling Replica",
          shotUnit: "full charges",
          sub: "Sprinkler",
          special: "Sting Ray",
          level: 8,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          price: 8600,
          stats: {
            "Range": 78,
            "Charge Speed": 38,
            "Mobility": 50
          }
        },
        {
          image: "img/weapons/Wst_Spinner_Standard_00.png",
          name: "Heavy Splatling",
          shotUnit: "full charges",
          sub: "Sprinkler",
          special: "Sting Ray",
          level: 8,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          price: 7800,
          stats: {
            "Range": 78,
            "Charge Speed": 38,
            "Mobility": 50
          }
        },
        {
          image: "img/weapons/Wst_Spinner_Standard_01.png",
          name: "Heavy Splatling Deco",
          shotUnit: "full charges",
          sub: "Splash Wall",
          special: "Bubble Blower",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          price: 9600,
          stats: {
            "Range": 78,
            "Charge Speed": 38,
            "Mobility": 50
          }
        },
        {
          image: "img/weapons/Wst_Charger_Quick_00.png",
          name: "Classic Squiffer",
          shotUnit: "full charges",
          sub: "Point Sensor",
          special: "Ink Armor",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 11,
          speedLevel: "Middle",
          price: 8900,
          stats: {
            "Range": 75,
            "Charge Speed": 70,
            "Mobility": 60
          }
        },
        {
          image: "img/weapons/Wst_Charger_NormalScope_00.png",
          name: "Splatterscope",
          shotUnit: "full charges",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 15,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          price: 11400,
          stats: {
            "Range": 91,
            "Charge Speed": 50,
            "Mobility": 30
          }
        },
        {
          image: "img/weapons/Wst_Charger_Normal_01.png",
          name: "Firefin Splat Charger",
          shotUnit: "full charges",
          sub: "Splash Wall",
          special: "Suction-Bomb Launcher",
          level: 16,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          price: 10600,
          stats: {
            "Range": 88,
            "Charge Speed": 50,
            "Mobility": 40
          }
        },
        {
          image: "img/weapons/Wst_Charger_Quick_01.png",
          name: "New Squiffer",
          shotUnit: "full charges",
          sub: "Autobomb",
          special: "Baller",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 11,
          speedLevel: "Middle",
          price: 11000,
          stats: {
            "Range": 75,
            "Charge Speed": 70,
            "Mobility": 60
          }
        },
        {
          image: "img/weapons/Wst_Charger_Light_00.png",
          name: "Bamboozler 14 Mk I",
          shotUnit: "full charges",
          sub: "Curling Bomb",
          special: "Tenta Missiles",
          level: 18,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "High",
          price: 9500,
          stats: {
            "Range": 78,
            "Charge Speed": 90,
            "Mobility": 80
          }
        },
        {
          image: "img/weapons/Wst_Charger_Long_00.png",
          name: "E-liter 4K",
          shotUnit: "full charges",
          sub: "Ink Mine",
          special: "Ink Storm",
          level: 20,
          specialCost: 190,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          price: 13900,
          stats: {
            "Range": 96,
            "Charge Speed": 20,
            "Mobility": 15
          }
        },
        {
          image: "img/weapons/Wst_Charger_Light_01.png",
          name: "Bamboozler 14 Mk II",
          shotUnit: "full charges",
          sub: "Toxic Mist",
          special: "Burst-Bomb Launcher",
          level: 21,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "High",
          price: 10500,
          stats: {
            "Range": 78,
            "Charge Speed": 90,
            "Mobility": 80
          }
        },
        {
          image: "img/weapons/Wst_Charger_Keeper_00.png",
          name: "Goo Tuber",
          shotUnit: "full charges",
          sub: "Suction Bomb",
          special: "Splashdown",
          level: 22,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          price: 13400,
          stats: {
            "Range": 78,
            "Charge Speed": 30,
            "Mobility": 70
          }
        },
        {
          image: "img/weapons/Wst_Spinner_Quick_00.png",
          name: "Mini Splatling",
          shotUnit: "full charges",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 23,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          price: 12300,
          stats: {
            "Range": 62,
            "Charge Speed": 80,
            "Mobility": 90
          }
        },
        {
          image: "img/weapons/Wst_Charger_NormalScope_01.png",
          name: "Firefin Splatterscope",
          shotUnit: "full charges",
          sub: "Splash Wall",
          special: "Suction-Bomb Launcher",
          level: 25,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          price: 13900,
          stats: {
            "Range": 91,
            "Charge Speed": 50,
            "Mobility": 30
          }
        },
        {
          image: "img/weapons/Wst_Charger_Long_01.png",
          name: "Custom E-liter 4K",
          shotUnit: "full charges",
          sub: "Squid Beakon",
          special: "Bubble Blower",
          level: 26,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          price: 17300,
          stats: {
            "Range": 96,
            "Charge Speed": 20,
            "Mobility": 15
          }
        },
        {
          image: "img/weapons/Wst_Spinner_Quick_01.png",
          name: "Zink Mini Splatling",
          shotUnit: "full charges",
          sub: "Curling Bomb",
          special: "Ink Storm",
          level: 26,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          price: 15400,
          stats: {
            "Range": 62,
            "Charge Speed": 80,
            "Mobility": 90
          }
        },
        {
          image: "img/weapons/Wst_Spinner_Hyper_00.png",
          name: "Hydra Splatling",
          shotUnit: "full charges",
          sub: "Autobomb",
          special: "Ink Armor",
          level: 27,
          specialCost: 190,
          inkSaver: "High",
          speedLevel: "Low",
          price: 18500,
          stats: {
            "Range": 85,
            "Charge Speed": 10,
            "Mobility": 20
          }
        },
        {
          image: "img/weapons/Wst_Charger_Keeper_01.png",
          name: "Custom Goo Tuber",
          shotUnit: "full charges",
          sub: "Curling Bomb",
          special: "Inkjet",
          level: 28,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          price: 19300,
          stats: {
            "Range": 78,
            "Charge Speed": 30,
            "Mobility": 70
          }
        },
        {
          image: "img/weapons/Wst_Spinner_Hyper_01.png",
          name: "Custom Hydra Splatling",
          shotUnit: "full charges",
          sub: "Ink Mine",
          special: "Splashdown",
          level: 29,
          specialCost: 180,
          inkSaver: "High",
          speedLevel: "Low",
          price: 33300,
          stats: {
            "Range": 85,
            "Charge Speed": 10,
            "Mobility": 20
          }
        },
        {
          image: "img/weapons/Wst_Charger_LongScope_01.png",
          name: "Custom E-liter 4K Scope",
          shotUnit: "full charges",
          sub: "Squid Beakon",
          special: "Bubble Blower",
          level: 30,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          price: 29900,
          stats: {
            "Range": 100,
            "Charge Speed": 20,
            "Mobility": 5
          }
        },
        {
          image: "img/weapons/Wst_Charger_LongScope_00.png",
          name: "E-liter 4K Scope",
          shotUnit: "full charges",
          sub: "Ink Mine",
          special: "Ink Storm",
          level: 30,
          specialCost: 190,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          price: 23200,
          stats: {
            "Range": 100,
            "Charge Speed": 20,
            "Mobility": 5
          }
        }
      ]
    }
  ]

}
