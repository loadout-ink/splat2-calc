angular.module('splatApp').weapons = function ($scope) {
  $scope.weaponSets = [
    {
      type: "Shooters",
      id: 0,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Shooter_First_00.png",
          name: "Splattershot Jr.",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Splat Bomb",
          special: "Ink Armor",
          level: 1,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.5,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 0,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_First_01.png",
          name: "Custom Splattershot Jr.",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Autobomb",
          special: "Ink Storm",
          level: 4,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.5,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 1900,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Normal_00.png",
          name: "Splattershot",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Splashdown",
          level: 2,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 900,
          stats: {
            "Range": 50,
            "Fire Rate": 60,
            "Damage": 45
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Normal_H.png",
          name: "Hero Shot Replica",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Splashdown",
          level: 2,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 1500,
          stats: {
            "Range": 50,
            "Fire Rate": 60,
            "Damage": 45
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Normal_01.png",
          name: "Tentatek Splattershot",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Splat Bomb",
          special: "Inkjet",
          level: 4,
          specialCost: 230,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 2100,
          stats: {
            "Range": 50,
            "Fire Rate": 60,
            "Damage": 45
          },
          id: 4
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Expert_00.png",
          name: "Splattershot Pro",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Point Sensor",
          special: "Ink Storm",
          level: 10,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 2,
          speedLevel: "Middle",
          baseSpeed: 0.5,
          price: 13800,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 60
          },
          id: 5
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Expert_01.png",
          name: "Forge Splattershot Pro",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Suction Bomb",
          special: "Bubble Blower",
          level: 20,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 2,
          speedLevel: "Middle",
          baseSpeed: 0.5,
          price: 20800,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 60
          },
          id: 6
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Blaze_00.png",
          name: "Aerospray MG",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Suction Bomb",
          special: "Curling-Bomb Launcher",
          level: 6,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.55,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 4900,
          stats: {
            "Range": 35,
            "Fire Rate": 90,
            "Damage": 10
          },
          id: 7
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Blaze_01.png",
          name: "Aerospray RG",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Sprinkler",
          special: "Baller",
          level: 28,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.55,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 16900,
          stats: {
            "Range": 35,
            "Fire Rate": 90,
            "Damage": 10
          },
          id: 8
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_QuickMiddle_00.png",
          name: "N-ZAP '85",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Suction Bomb",
          special: "Ink Armor",
          level: 9,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 7100,
          stats: {
            "Range": 50,
            "Fire Rate": 75,
            "Damage": 22
          },
          id: 9
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_QuickMiddle_01.png",
          name: "N-ZAP '89",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Autobomb",
          special: "Tenta Missiles",
          level: 11,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 8800,
          stats: {
            "Range": 50,
            "Fire Rate": 75,
            "Damage": 22
          },
          id: 10
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Short_00.png",
          name: "Sploosh-o-matic",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 10,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 9700,
          stats: {
            "Range": 12,
            "Fire Rate": 75,
            "Damage": 52
          },
          id: 11
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Short_01.png",
          name: "Neo Sploosh-o-matic",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Squid Beakon",
          special: "Tenta Missiles",
          level: 18,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 12200,
          stats: {
            "Range": 12,
            "Fire Rate": 75,
            "Damage": 52
          },
          id: 12
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Precision_00.png",
          name: "Splash-o-matic",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Toxic Mist",
          special: "Inkjet",
          level: 25,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 11200,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          },
          id: 13
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Precision_01.png",
          name: "Neo Splash-o-matic",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Suction-Bomb Launcher",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 16800,
          stats: {
            "Range": 35,
            "Fire Rate": 75,
            "Damage": 22
          },
          id: 14
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Gravity_00.png",
          name: ".52 Gal",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Point Sensor",
          special: "Baller",
          level: 14,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.3,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 9500,
          stats: {
            "Range": 50,
            "Fire Rate": 25,
            "Damage": 75
          },
          id: 15
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Gravity_01.png",
          name: ".52 Gal Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Curling Bomb",
          special: "Sting Ray",
          level: 22,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.3,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 12700,
          stats: {
            "Range": 50,
            "Fire Rate": 25,
            "Damage": 75
          },
          id: 16
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Heavy_00.png",
          name: ".96 Gal",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Sprinkler",
          special: "Ink Armor",
          level: 21,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 2.5,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 12600,
          stats: {
            "Range": 70,
            "Fire Rate": 10,
            "Damage": 75
          },
          id: 17
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Heavy_01.png",
          name: ".96 Gal Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Splash Wall",
          special: "Splashdown",
          level: 26,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 2.5,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 16200,
          stats: {
            "Range": 70,
            "Fire Rate": 10,
            "Damage": 75
          },
          id: 18
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Long_00.png",
          name: "Jet Squelcher",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Toxic Mist",
          special: "Tenta Missiles",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.6,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 11300,
          stats: {
            "Range": 82,
            "Fire Rate": 30,
            "Damage": 35
          },
          id: 19
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Long_01.png",
          name: "Custom Jet Squelcher",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Sting Ray",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.6,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 15900,
          stats: {
            "Range": 82,
            "Fire Rate": 30,
            "Damage": 35
          },
          id: 20
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_TripleQuick_00.png",
          name: "L-3 Nozzlenose",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Curling Bomb",
          special: "Baller",
          level: 18,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 10400,
          stats: {
            "Range": 62,
            "Fire Rate": 65,
            "Damage": 25
          },
          id: 21
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_TripleQuick_01.png",
          name: "L-3 Nozzlenose D",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Inkjet",
          level: 23,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 12500,
          stats: {
            "Range": 62,
            "Fire Rate": 65,
            "Damage": 25
          },
          id: 22
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_TripleMiddle_00.png",
          name: "H-3 Nozzlenose",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Point Sensor",
          special: "Tenta Missiles",
          level: 29,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 1.8,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 17200,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 58
          },
          id: 23
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_TripleMiddle_01.png",
          name: "H-3 Nozzlenose D",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Sprinkler",
          special: "Ink Armor",
          level: 30,
          specialCost: 190,
          inkSaver: "High",
          inkPerShot: 1.8,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 18400,
          stats: {
            "Range": 70,
            "Fire Rate": 30,
            "Damage": 58
          },
          id: 24
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Flash_00.png",
          name: "Squeezer",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
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
          },
          id: 25
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_Flash_01.png",
          name: "Foil Squeezer",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
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
          },
          id: 26
        }
      ]
    },
    {
      type: "Dualies",
      id: 1,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Twins_Normal_00.png",
          name: "Splat Dualies",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 4,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 2400,
          stats: {
            "Range": 39,
            "Mobility": 70,
            "Damage": 22
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Normal_H.png",
          name: "Hero Dualie Replicas",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 4,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 3100,
          stats: {
            "Range": 39,
            "Mobility": 70,
            "Damage": 22
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Normal_01.png",
          name: "Enperry Splat Dualies",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Curling Bomb",
          special: "Inkjet",
          level: 11,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 9000,
          stats: {
            "Range": 39,
            "Mobility": 70,
            "Damage": 22
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Dual_00.png",
          name: "Dualie Squelchers",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Point Sensor",
          special: "Tenta Missiles",
          level: 12,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 9800,
          stats: {
            "Range": 70,
            "Mobility": 60,
            "Damage": 22
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Dual_01.png",
          name: "Custom Dualie Squelchers",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Splat Bomb",
          special: "Ink Armor",
          level: 16,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 12900,
          stats: {
            "Range": 70,
            "Mobility": 60,
            "Damage": 22
          },
          id: 4
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Short_00.png",
          name: "Dapple Dualies",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Squid Beakon",
          special: "Suction-Bomb Launcher",
          level: 26,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.9,
          speedLevel: "High",
          baseSpeed: 0.8,
          price: 14700,
          stats: {
            "Range": 24,
            "Mobility": 80,
            "Damage": 47
          },
          id: 5
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Short_01.png",
          name: "Dapple Dualies Nouveau",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Toxic Mist",
          special: "Ink Storm",
          level: 29,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.9,
          speedLevel: "High",
          baseSpeed: 0.8,
          price: 17500,
          stats: {
            "Range": 24,
            "Mobility": 80,
            "Damage": 47
          },
          id: 6
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Stepper_00.png",
          name: "Dark Tetra Dualies",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
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
          },
          id: 7
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Stepper_01.png",
          name: "Light Tetra Dualies",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
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
          },
          id: 8
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Gallon_00.png",
          name: "Glooga Dualies",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
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
          },
          id: 9
        },
        {
          image: "./assets/img/weapons/Wst_Twins_Gallon_01.png",
          name: "Glooga Dualies Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
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
          },
          id: 10
        }
      ]
    },
    {
      type: "Rollers",
      id: 2,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Roller_Normal_00.png",
          name: "Splat Roller",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 3,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 1800,
          stats: {
            "Range": 48,
            "Ink Speed": 45,
            "Handling": 55
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Normal_H.png",
          name: "Hero Roller Replica",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 3,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 2300,
          stats: {
            "Range": 48,
            "Ink Speed": 45,
            "Handling": 55
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Normal_01.png",
          name: "Krak-On Splat Roller",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Squid Beakon",
          special: "Baller",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 9200,
          stats: {
            "Range": 48,
            "Ink Speed": 45,
            "Handling": 55
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Compact_00.png",
          name: "Carbon Roller",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Autobomb",
          special: "Ink Storm",
          level: 7,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 4.5,
          speedLevel: "High",
          baseSpeed: 1.28,
          price: 6200,
          stats: {
            "Range": 20,
            "Ink Speed": 63,
            "Handling": 65
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Compact_01.png",
          name: "Carbon Roller Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Sprinkler",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 4.5,
          speedLevel: "High",
          baseSpeed: 1.28,
          price: 8500,
          stats: {
            "Range": 20,
            "Ink Speed": 63,
            "Handling": 65
          },
          id: 4
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Heavy_00.png",
          name: "Dynamo Roller",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Ink Mine",
          special: "Sting Ray",
          level: 20,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 18,
          speedLevel: "Low",
          baseSpeed: 0.88,
          price: 24500,
          stats: {
            "Range": 76,
            "Ink Speed": 25,
            "Handling": 20
          },
          id: 5
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Heavy_01.png",
          name: "Gold Dynamo Roller",
          unreleased: true,
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Toxic Mist",
          special: "Ink Armor",
          level: 25,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 18,
          speedLevel: "Low",
          baseSpeed: 0.88,
          price: 29000,
          stats: {
            "Range": 76,
            "Ink Speed": 25,
            "Handling": 20
          },
          id: 6
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Hunter_00.png",
          name: "Flingza Roller",
          shotUnit: "SHOT_UNIT_FLICK_HORIZ",
          sub: "Splash Wall",
          special: "Splat-Bomb Launcher",
          level: 24,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 15700,
          stats: {
            "Range": 55,
            "Ink Speed": 45,
            "Handling": 45
          },
          id: 7
        },
        {
          image: "./assets/img/weapons/Wst_Roller_Hunter_01.png",
          name: "Foil Flingza Roller",
          unreleased: true,
          shotUnit: "SHOT_UNIT_FLICK_HORIZ",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 28,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 21300,
          stats: {
            "Range": 55,
            "Ink Speed": 45,
            "Handling": 45
          },
          id: 8
        }
      ]
    },
    {
      type: "Brushes",
      id: 3,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Roller_BrushMini_00.png",
          name: "Inkbrush",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Splat Bomb",
          special: "Splashdown",
          level: 5,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 2,
          speedLevel: "High",
          baseSpeed: 1.92,
          price: 2600,
          stats: {
            "Range": 5,
            "Ink Speed": 100,
            "Handling": 100
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Roller_BrushMini_01.png",
          name: "Inkbrush Nouveau",
          unreleased: true,
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Ink Mine",
          special: "Baller",
          level: 7,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 2,
          speedLevel: "High",
          baseSpeed: 1.92,
          price: 7000,
          stats: {
            "Range": 5,
            "Ink Speed": 100,
            "Handling": 100
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Roller_BrushNormal_00.png",
          name: "Octobrush",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Autobomb",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          baseSpeed: 1.68,
          price: 8200,
          stats: {
            "Range": 23,
            "Ink Speed": 80,
            "Handling": 85
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Roller_BrushNormal_H.png",
          name: "Herobrush Replica",
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Autobomb",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          baseSpeed: 1.68,
          price: 9400,
          stats: {
            "Range": 23,
            "Ink Speed": 80,
            "Handling": 85
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Roller_BrushNormal_01.png",
          name: "Octobrush Nouveau",
          unreleased: true,
          shotUnit: "SHOT_UNIT_FLICK",
          sub: "Squid Beakon",
          special: "Tenta Missiles",
          level: 15,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          baseSpeed: 1.68,
          price: 9900,
          stats: {
            "Range": 23,
            "Ink Speed": 80,
            "Handling": 85
          },
          id: 4
        }
      ]
    },
    {
      type: "Blasters",
      id: 4,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterMiddle_00.png",
          name: "Blaster",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Toxic Mist",
          special: "Splashdown",
          level: 5,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 3000,
          stats: {
            "Range": 27,
            "Fire Rate": 20,
            "Impact": 70
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterMiddle_H.png",
          name: "Hero Blaster Replica",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Toxic Mist",
          special: "Splashdown",
          level: 5,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 3800,
          stats: {
            "Range": 27,
            "Fire Rate": 20,
            "Impact": 70
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterMiddle_01.png",
          name: "Custom Blaster",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Autobomb",
          special: "Inkjet",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 15300,
          stats: {
            "Range": 27,
            "Fire Rate": 20,
            "Impact": 70
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLong_00.png",
          name: "Range Blaster",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Suction Bomb",
          special: "Ink Storm",
          level: 14,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 9300,
          stats: {
            "Range": 56,
            "Fire Rate": 10,
            "Impact": 70
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLong_01.png",
          name: "Custom Range Blaster",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Burst Bomb",
          special: "Sting Ray",
          level: 18,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 11400,
          stats: {
            "Range": 56,
            "Fire Rate": 10,
            "Impact": 70
          },
          id: 4
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLight_00.png",
          name: "Rapid Blaster",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Ink Mine",
          special: "Splat-Bomb Launcher",
          level: 13,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 9800,
          stats: {
            "Range": 62,
            "Fire Rate": 40,
            "Impact": 35
          },
          id: 5
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLight_01.png",
          name: "Rapid Blaster Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Suction Bomb",
          special: "Inkjet",
          level: 16,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 11500,
          stats: {
            "Range": 62,
            "Fire Rate": 40,
            "Impact": 35
          },
          id: 6
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLightLong_00.png",
          name: "Rapid Blaster Pro",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Toxic Mist",
          special: "Ink Storm",
          level: 22,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 12800,
          stats: {
            "Range": 72,
            "Fire Rate": 30,
            "Impact": 35
          },
          id: 7
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLightLong_01.png",
          name: "Rapid Blaster Pro Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Curling Bomb",
          special: "Ink Armor",
          level: 24,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 14000,
          stats: {
            "Range": 72,
            "Fire Rate": 30,
            "Impact": 35
          },
          id: 8
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterShort_00.png",
          name: "Luna Blaster",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Splat Bomb",
          special: "Baller",
          level: 19,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 0.5,
          price: 12100,
          stats: {
            "Range": 9,
            "Fire Rate": 30,
            "Impact": 70
          },
          id: 9
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterShort_01.png",
          name: "Luna Blaster Neo",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Ink Mine",
          special: "Suction-Bomb Launcher",
          level: 24,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 0.5,
          price: 13600,
          stats: {
            "Range": 9,
            "Fire Rate": 30,
            "Impact": 70
          },
          id: 10
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLightShort_00.png",
          name: "Clash Blaster",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 30,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 4,
          speedLevel: "High",
          baseSpeed: 0.65,
          price: 18200,
          stats: {
            "Range": 21,
            "Fire Rate": 65,
            "Impact": 20
          },
          id: 11
        },
        {
          image: "./assets/img/weapons/Wst_Shooter_BlasterLightShort_01.png",
          name: "Clash Blaster Neo",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Sprinkler",
          special: "Tenta Missiles",
          level: 30,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 4,
          speedLevel: "High",
          baseSpeed: 0.65,
          price: 20500,
          stats: {
            "Range": 21,
            "Fire Rate": 65,
            "Impact": 20
          },
          id: 12
        }
      ]
    },
    {
      type: "Brellas",
      id: 5,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Umbrella_Normal_00.png",
          name: "Splat Brella",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Sprinkler",
          special: "Ink Storm",
          level: 9,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          baseSpeed: 0.65,
          price: 8300,
          stats: {
            "Range": 43,
            "Durability": 60,
            "Damage": 65
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Umbrella_Normal_H.png",
          name: "Hero Brella Replica",
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Sprinkler",
          special: "Ink Storm",
          level: 9,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          baseSpeed: 0.65,
          price: 9000,
          stats: {
            "Range": 43,
            "Durability": 60,
            "Damage": 65
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Umbrella_Normal_01.png",
          name: "Sorella Brella",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SHOT",
          sub: "Toxic Mist",
          special: "Splat-Bomb Launcher",
          level: 15,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          baseSpeed: 0.65,
          price: 12000,
          stats: {
            "Range": 43,
            "Durability": 60,
            "Damage": 65
          },
          id: 2
        }
      ]
    },
    {
      type: "Sloshers",
      id: 6,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Slosher_Strong_00.png",
          name: "Slosher",
          shotUnit: "SHOT_UNIT_SLOSHER",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 5,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 2500,
          stats: {
            "Range": 58,
            "Damage": 85,
            "Handling": 50
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Slosher_Strong_H.png",
          name: "Hero Slosher Replica",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 5,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 3100,
          stats: {
            "Range": 58,
            "Damage": 85,
            "Handling": 50
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Slosher_Strong_01.png",
          name: "Slosher Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SLOSHER",
          sub: "Sprinkler",
          special: "Baller",
          level: 8,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 8000,
          stats: {
            "Range": 58,
            "Damage": 85,
            "Handling": 50
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Slosher_Diffusion_00.png",
          name: "Tri-Slosher",
          shotUnit: "SHOT_UNIT_SLOSHER",
          sub: "Burst Bomb",
          special: "Ink Armor",
          level: 15,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 6,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 10200,
          stats: {
            "Range": 39,
            "Damage": 80,
            "Handling": 70
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Slosher_Diffusion_01.png",
          name: "Tri-Slosher Nouveau",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SLOSHER",
          sub: "Splat Bomb",
          special: "Autobomb Launcher",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 6,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 11700,
          stats: {
            "Range": 39,
            "Damage": 80,
            "Handling": 70
          },
          id: 4
        },
        {
          image: "./assets/img/weapons/Wst_Slosher_Launcher_00.png",
          name: "Sloshing Machine",
          shotUnit: "SHOT_UNIT_SLOSHER",
          sub: "Autobomb",
          special: "Sting Ray",
          level: 13,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 12600,
          stats: {
            "Range": 60,
            "Damage": 90,
            "Handling": 40
          },
          id: 5
        },
        {
          image: "./assets/img/weapons/Wst_Slosher_Launcher_01.png",
          name: "Sloshing Machine Neo",
          unreleased: true,
          shotUnit: "SHOT_UNIT_SLOSHER",
          sub: "Point Sensor",
          special: "Splat-Bomb Launcher",
          level: 19,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 19800,
          stats: {
            "Range": 60,
            "Damage": 90,
            "Handling": 40
          },
          id: 6
        }
      ]
    },
    {
      type: "Chargers",
      id: 7,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Charger_Normal_00.png",
          name: "Splat Charger",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 3,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 2200,
          stats: {
            "Range": 88,
            "Charge Speed": 50,
            "Mobility": 40
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Normal_H.png",
          name: "Hero Charger Replica",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 3,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 2700,
          stats: {
            "Range": 88,
            "Charge Speed": 50,
            "Mobility": 40
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Normal_01.png",
          name: "Firefin Splat Charger",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Splash Wall",
          special: "Suction-Bomb Launcher",
          level: 16,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 10600,
          stats: {
            "Range": 88,
            "Charge Speed": 50,
            "Mobility": 40
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Charger_NormalScope_00.png",
          name: "Splatterscope",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 15,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 11400,
          stats: {
            "Range": 91,
            "Charge Speed": 50,
            "Mobility": 30
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Charger_NormalScope_01.png",
          name: "Firefin Splatterscope",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Splash Wall",
          special: "Suction-Bomb Launcher",
          level: 25,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 13900,
          stats: {
            "Range": 91,
            "Charge Speed": 50,
            "Mobility": 30
          },
          id: 4
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Quick_00.png",
          name: "Classic Squiffer",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Point Sensor",
          special: "Ink Armor",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 11,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 8900,
          stats: {
            "Range": 75,
            "Charge Speed": 70,
            "Mobility": 60
          },
          id: 5
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Quick_01.png",
          name: "New Squiffer",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Autobomb",
          special: "Baller",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 11,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 11000,
          stats: {
            "Range": 75,
            "Charge Speed": 70,
            "Mobility": 60
          },
          id: 6
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Long_00.png",
          name: "E-liter 4K",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Ink Mine",
          special: "Ink Storm",
          level: 20,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 13900,
          stats: {
            "Range": 96,
            "Charge Speed": 20,
            "Mobility": 15
          },
          id: 7
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Long_01.png",
          name: "Custom E-liter 4K",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Squid Beakon",
          special: "Bubble Blower",
          level: 26,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 17300,
          stats: {
            "Range": 96,
            "Charge Speed": 20,
            "Mobility": 15
          },
          id: 8
        },
        {
          image: "./assets/img/weapons/Wst_Charger_LongScope_00.png",
          name: "E-liter 4K Scope",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Ink Mine",
          special: "Ink Storm",
          level: 30,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 23200,
          stats: {
            "Range": 100,
            "Charge Speed": 20,
            "Mobility": 5
          },
          id: 9
        },
        {
          image: "./assets/img/weapons/Wst_Charger_LongScope_01.png",
          name: "Custom E-liter 4K Scope",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Squid Beakon",
          special: "Bubble Blower",
          level: 30,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 29900,
          stats: {
            "Range": 100,
            "Charge Speed": 20,
            "Mobility": 5
          },
          id: 10
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Keeper_00.png",
          name: "Goo Tuber",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Suction Bomb",
          special: "Splashdown",
          level: 22,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 13400,
          stats: {
            "Range": 78,
            "Charge Speed": 30,
            "Mobility": 70
          },
          id: 11
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Keeper_01.png",
          name: "Custom Goo Tuber",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Curling Bomb",
          special: "Inkjet",
          level: 28,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 19300,
          stats: {
            "Range": 78,
            "Charge Speed": 30,
            "Mobility": 70
          },
          id: 12
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Light_00.png",
          name: "Bamboozler 14 Mk I",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
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
          },
          id: 13
        },
        {
          image: "./assets/img/weapons/Wst_Charger_Light_01.png",
          name: "Bamboozler 14 Mk II",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
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
          },
          id: 14
        }
      ]
    },
    {
      type: "Splatlings",
      id: 8,
      weapons: [
        {
          image: "./assets/img/weapons/Wst_Spinner_Standard_00.png",
          name: "Heavy Splatling",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Sprinkler",
          special: "Sting Ray",
          level: 8,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          baseSpeed: 0.64,
          price: 7800,
          stats: {
            "Range": 78,
            "Charge Speed": 38,
            "Mobility": 50
          },
          id: 0
        },
        {
          image: "./assets/img/weapons/Wst_Spinner_Standard_H.png",
          name: "Hero Splatling Replica",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Sprinkler",
          special: "Sting Ray",
          level: 8,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          baseSpeed: 0.64,
          price: 8600,
          stats: {
            "Range": 78,
            "Charge Speed": 38,
            "Mobility": 50
          },
          id: 1
        },
        {
          image: "./assets/img/weapons/Wst_Spinner_Standard_01.png",
          name: "Heavy Splatling Deco",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Splash Wall",
          special: "Bubble Blower",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          baseSpeed: 0.64,
          price: 9600,
          stats: {
            "Range": 78,
            "Charge Speed": 38,
            "Mobility": 50
          },
          id: 2
        },
        {
          image: "./assets/img/weapons/Wst_Spinner_Quick_00.png",
          name: "Mini Splatling",
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 23,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.7,
          price: 12300,
          stats: {
            "Range": 62,
            "Charge Speed": 80,
            "Mobility": 90
          },
          id: 3
        },
        {
          image: "./assets/img/weapons/Wst_Spinner_Quick_01.png",
          name: "Zink Mini Splatling",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
          sub: "Curling Bomb",
          special: "Ink Storm",
          level: 26,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.7,
          price: 15400,
          stats: {
            "Range": 62,
            "Charge Speed": 80,
            "Mobility": 90
          },
          id: 4
        },
        {
          image: "./assets/img/weapons/Wst_Spinner_Hyper_00.png",
          name: "Hydra Splatling",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
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
          },
          id: 5
        },
        {
          image: "./assets/img/weapons/Wst_Spinner_Hyper_01.png",
          name: "Custom Hydra Splatling",
          unreleased: true,
          shotUnit: "SHOT_UNIT_CHARGER",
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
          },
          id: 6
        }
      ]
    }
  ]

  $scope.getWeaponSetById = function(setid) {
    return $scope.weaponSets.filter(function(set) {
      return set.id == setid
    })[0]
  }

  $scope.getWeaponById = function(setid, weaponid) {
    return $scope.getWeaponSetById(setid).weapons.filter(function(weapon) {
      return weapon.id == weaponid
    })[0]
  }
}
