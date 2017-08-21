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
    type: "Rollers/Brushes",
    weapons: [
      {
        name: "Splat Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Normal_00.png",
        sub: "Curling Bomb",
        special: "Splashdown",
        specialCost: 180,
        level: 3,
        inkSaver: "Middle",
        speedLevel: "Middle",
        inkPerShot: 10,
        shotUnit: "flicks"
      },
      {
        name: "Inkbrush",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushMini_00.png",
        sub: "Splat Bomb",
        special: "Splashdown",
        specialCost: 170,
        level: 5,
        inkSaver: "Middle",
        speedLevel: "High",
        inkPerShot: 2
      },
      {
        name: "Carbon Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Compact_00.png",
        sub: "Autobomb",
        special: "Ink Storm",
        specialCost: 180,
        level: 7,
        inkSaver: "Middle",
        speedLevel: "High",
        inkPerShot: 6
      },
      {
        name: "Octobrush",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushNormal_00.png",
        sub: "Autobomb",
        special: "Inkjet",
        specialCost: 180,
        level: 10,
        inkSaver: "Middle",
        speedLevel: "Middle",
        inkPerShot: 3.2
      },
      {
        name: "Krak-On Splat Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Normal_01.png",
        sub: "Squid Beakon",
        special: "Baller",
        specialCost: 180,
        level: 12,
        inkSaver: "Middle",
        speedLevel: "Middle",
        inkPerShot: 10
      },
      {
        name: "Dynamo Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Heavy_00.png",
        sub: "Ink Mine",
        special: "Sting Ray",
        specialCost: 180,
        level: 20,
        inkSaver: "High",
        speedLevel: "Low",
        inkPerShot: 18
      },
      {
        name: "Flingza Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Hunter_00.png",
        sub: "Splash Wall",
        special: "Splat-Bomb Launcher",
        specialCost: 180,
        level: 24,
        inkSaver: "Middle",
        speedLevel: "Middle",
        inkPerShot: 8
      },
      {
        name: "Inkbrush Nouveau",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushMini_01.png",
        sub: "Ink Mine",
        special: "Baller",
        specialCost: 180,
        level: 7,
        inkSaver: "High",
        speedLevel: "High",
        inkPerShot: 2,
        unreleased: true
      },
      {
        name: "Carbon Roller Deco",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Compact_01.png",
        sub: "Sprinkler",
        special: "Inkjet",
        specialCost: 180,
        level: 10,
        inkSaver: "Middle",
        speedLevel: "High",
        inkPerShot: 6,
        unreleased: true
      },
      {
        name: "Octobrush Nouveau",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_BrushNormal_01.png",
        sub: "Squid Beakon",
        special: "Tenta Missiles",
        specialCost: 180,
        level: 15,
        inkSaver: "Middle",
        speedLevel: "Middle",
        inkPerShot: 3.2,
        unreleased: true
      },
      {
        name: "Gold Dynamo Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Heavy_01.png",
        sub: "Toxic Mist",
        special: "Ink Armor",
        specialCost: 180,
        level: 25,
        inkSaver: "High",
        speedLevel: "Low",
        inkPerShot: 18,
        unreleased: true
      },
      {
        name: "Foil Flingza Roller",
        shotUnit: "flicks",
        image: "img/weapons/Wst_Roller_Hunter_01.png",
        sub: "Suction Bomb",
        special: "Tenta Missiles",
        specialCost: 180,
        level: 28,
        inkSaver: "Middle",
        speedLevel: "Middle",
        inkPerShot: 8,
        unreleased: true
      }
  ]
},
{
  type: "Blasters/Brellas",
  weapons: [
    {
      name: "Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterMiddle_00.png",
      sub: "Toxic Mist",
      special: "Splashdown",
      specialCost: 180,
      level: 5,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 10
    },
    {
      name: "Rapid Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLight_00.png",
      sub: "Ink Mine",
      special: "Splat-Bomb Launcher",
      specialCost: 180,
      level: 13,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 7
    },
    {
      name: "Luna Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterShort_00.png",
      sub: "Splat Bomb",
      special: "Baller",
      specialCost: 180,
      level: 19,
      inkSaver: "High",
      speedLevel: "Middle",
      inkPerShot: 9
    },
    {
      name: "Custom Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterMiddle_01.png",
      sub: "Autobomb",
      special: "Inkjet",
      specialCost: 180,
      level: 27,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 10
    },
    {
      name: "Clash Blaster",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLightShort_00.png",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 170,
      level: 30,
      inkSaver: "Middle",
      speedLevel: "High",
      inkPerShot: 5
    },
    {
      name: "Splat Brella",
      shotUnit: "shots",
      image: "img/weapons/Wst_Umbrella_Normal_00.png",
      sub: "Sprinkler",
      special: "Ink Storm",
      specialCost: 180,
      level: 9,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 5
    },
    {
      name: "Sorella Brella",
      shotUnit: "shots",
      image: "img/weapons/Wst_Umbrella_Normal_01.png",
      sub: "Toxic Mist",
      special: "Splat-Bomb Launcher",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 5,
      unreleased: true
    },
    {
      name: "Luna Blaster Neo",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterShort_01.png",
      sub: "Ink Mine",
      special: "Suction-Bomb Launcher",
      specialCost: 180,
      level: 24,
      inkSaver: "High",
      speedLevel: "Middle",
      inkPerShot: 9,
      unreleased: true
    },
    {
      name: "Clash Blaster Neo",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLightShort_01.png",
      sub: "Sprinkler",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 30,
      inkSaver: "Middle",
      speedLevel: "High",
      inkPerShot: 5,
      unreleased: true
    },
    {
      name: "Rapid Blaster Deco",
      shotUnit: "shots",
      image: "img/weapons/Wst_Shooter_BlasterLight_01.png",
      sub: "Suction Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 16,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 7,
      unreleased: true
    }
  ]
},
{
  type: "Sloshers",
  weapons: [
    {
      name: "Slosher",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Strong_00.png",
      sub: "Suction Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 5,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 7
    },
    {
      name: "Tri-Slosher",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Diffusion_00.png",
      sub: "Burst Bomb",
      special: "Ink Armor",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 6
    },
    {
      name: "Slosher Deco",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Strong_01.png",
      sub: "Sprinkler",
      special: "Baller",
      specialCost: 190,
      level: 8,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 7,
      unreleased: true
    },
    {
      name: "Tri-Slosher Nouveau",
      shotUnit: "sloshes",
      image: "img/weapons/Wst_Slosher_Diffusion_01.png",
      sub: "Splat Bomb",
      special: "Autobomb Launcher",
      specialCost: 180,
      level: 17,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 6,
      unreleased: true
    }
  ]
},
{
  type: "Chargers/Splatlings",
  weapons: [
    {
      name: "Splat Charger",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Normal_00.png",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 3,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 18
    },
    {
      name: "Heavy Splatling",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Standard_00.png",
      sub: "Sprinkler",
      special: "Sting Ray",
      specialCost: 180,
      level: 8,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 22.5
    },
    {
      name: "Splatterscope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_NormalScope_00.png",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 18
    },
    {
      name: "Firefin Splat Charger",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Normal_01.png",
      sub: "Splash Wall",
      special: "Suction-Bomb Launcher",
      specialCost: 190,
      level: 16,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 18
    },
    {
      name: "E-liter 4K",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Long_00.png",
      sub: "Ink Mine",
      special: "Ink Storm",
      specialCost: 190,
      level: 20,
      inkSaver: "High",
      speedLevel: "Low",
      inkPerShot: 25,
    },
    {
      name: "Goo Tuber",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Keeper_00.png",
      sub: "Suction Bomb",
      special: "Splashdown",
      specialCost: 180,
      level: 22,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 15
    },
    {
      name: "Mini Splatling",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Quick_00.png",
      sub: "Burst Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 23,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 15
    },
    {
      name: "Firefin Splatterscope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_NormalScope_01.png",
      sub: "Splash Wall",
      special: "Suction-Bomb Launcher",
      specialCost: 190,
      level: 25,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 18
    },
    {
      name: "E-liter 4K Scope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_LongScope_00.png",
      sub: "Ink Mine",
      special: "Ink Storm",
      specialCost: 190,
      level: 30,
      inkSaver: "High",
      speedLevel: "Low",
      inkPerShot: 25,
    },
    {
      name: "Heavy Splatling Deco",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Standard_01.png",
      sub: "Splash Wall",
      special: "Bubble Blower",
      specialCost: 180,
      level: 12,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 22.5,
      unreleased: true
    },
    {
      name: "Zink Mini Splatling",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Spinner_Quick_01.png",
      sub: "Curling Bomb",
      special: "Ink Storm",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 15,
      unreleased: true
    },
    {
      name: "Custom E-liter 4K",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Long_01.png",
      sub: "Squid Beakon",
      special: "Bubble Blower",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      speedLevel: "Low",
      inkPerShot: 25,
      unreleased: true
    },
    {
      name: "Custom Goo Tuber",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_Keeper_01.png",
      sub: "Curling Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 28,
      inkSaver: "Middle",
      speedLevel: "Middle",
      inkPerShot: 15,
      unreleased: true
    },
    {
      name: "Custom E-liter 4K Scope",
      shotUnit: "full charges",
      image: "img/weapons/Wst_Charger_LongScope_01.png",
      sub: "Squid Beakon",
      special: "Bubble Blower",
      specialCost: 180,
      level: 30,
      inkSaver: "High",
      speedLevel: "Low",
      inkPerShot: 25,
      unreleased: true
    },
  ]
}
]

}
