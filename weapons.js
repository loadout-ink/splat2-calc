function filter_available(weapon) {
  return !weapon.unreleased
}

angular.module('splatApp').weapons = function ($scope) {
$scope.weaponSets = [{
  type: "Shooters",
  shotUnit: "shots",
  weapons: [
    {
      name: "Splattershot Jr.",
      sub: "Splat Bomb",
      special: "Ink Armor",
      specialCost: 180,
      level: 1,
      inkSaver: "Middle",
      inkPerShot: 0.5
    },
    {
      name: "Splattershot",
      sub: "Burst Bomb",
      special: "Splashdown",
      specialCost: 180,
      level: 2,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: "Splat Dualies",
      sub: "Burst Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 4,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Tentatek Splattershot",
      sub: "Splat Bomb",
      special: "Inkjet",
      specialCost: 190,
      level: 4,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: "Aerospray MG",
      sub: "Suction Bomb",
      special: "Curling-Bomb Launcher",
      specialCost: 170,
      level: 6,
      inkSaver: "Middle",
      inkPerShot: 0.55
    },
    {
      name: "N-ZAP '85",
      sub: "Suction Bomb",
      special: "Ink Armor",
      specialCost: 180,
      level: 9,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Splattershot Pro",
      sub: "Point Sensor",
      special: "Ink Storm",
      specialCost: 180,
      level: 10,
      inkSaver: "High",
      inkPerShot: 2
    },
    {
      name: "Enperry Splat Dualies",
      sub: "Curling Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 11,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Dualie Squelchers",
      sub: "Point Sensor",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 12,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: ".52 Gal",
      sub: "Point Sensor",
      special: "Baller",
      specialCost: 180,
      level: 14,
      inkSaver: "Middle",
      inkPerShot: 1.3
    },
    {
      name: "Jet Squelcher",
      sub: "Toxic Mist",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 17,
      inkSaver: "Middle",
      inkPerShot: 1.6
    },
    {
      name: "L-3 Nozzlenose",
      sub: "Curling Bomb",
      special: "Baller",
      specialCost: 180,
      level: 18,
      inkSaver: "Middle",
      inkPerShot: 1
    },
    {
      name: ".96 Gal",
      sub: "Sprinkler",
      special: "Ink Armor",
      specialCost: 180,
      level: 21,
      inkSaver: "Middle",
      inkPerShot: 2.5
    },
    {
      name: "Splash-o-matic",
      sub: "Toxic Mist",
      special: "Inkjet",
      specialCost: 180,
      level: 25,
      inkSaver: "Middle",
      inkPerShot: 0.8
    },
    {
      name: "Dapple Dualies",
      sub: "Squid Beakon",
      special: "Suction-Bomb Launcher",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 0.9
    },
    {
      name: "Aerospray RG",
      sub: "Sprinkler",
      special: "Baller",
      specialCost: 180,
      level: 28,
      inkSaver: "Middle",
      inkPerShot: 0.55
    },
    {
      name: "H-3 Nozzlenose",
      sub: "Point Sensor",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 29,
      inkSaver: "High",
      inkPerShot: 1.8
    },
    {
      name: "Custom Splattershot Jr.",
      sub: "Autobomb",
      special: "Ink Storm",
      specialCost: 180,
      level: 4,
      inkSaver: "Middle",
      inkPerShot: 0.5,
      unreleased: true
    },
    {
      name: "N-ZAP '89",
      sub: "Autobomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 11,
      inkSaver: "Middle",
      inkPerShot: 0.8,
      unreleased: true
    },
    {
      name: "Custom Dualie Squelchers",
      sub: "Splat Bomb",
      special: "Ink Armor",
      specialCost: 190,
      level: 16,
      inkSaver: "Middle",
      inkPerShot: 1,
      unreleased: true
    },
    {
      name: "Forge Splattershot Pro",
      sub: "Suction Bomb",
      special: "Bubble Blower",
      specialCost: 180,
      level: 20,
      inkSaver: "High",
      inkPerShot: 2,
      unreleased: true
    },
    {
      name: ".52 Gal Deco",
      sub: "Curling Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 22,
      inkSaver: "Middle",
      inkPerShot: 1.3,
      unreleased: true
    },
    {
      name: "L-3 Nozzlenose D",
      sub: "Burst Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 23,
      inkSaver: "Middle",
      inkPerShot: 1,
      unreleased: true
    },
    {
      name: "Custom Jet Squelcher",
      sub: "Burst Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 27,
      inkSaver: "Middle",
      inkPerShot: 1.6,
      unreleased: true
    },
    {
      name: "Neo Splash-o-matic",
      sub: "Burst Bomb",
      special: "Suction-Bomb Launcher",
      specialCost: 180,
      level: 27,
      inkSaver: "Middle",
      inkPerShot: 0.8,
      unreleased: true
    },
    {
      name: ".96 Gal Deco",
      sub: "Splash Wall",
      special: "Splashdown",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 2.5,
      unreleased: true
    },
    {
      name: "Dapple Dualies Nouveau",
      sub: "Toxic Mist",
      special: "Ink Storm",
      specialCost: 180,
      level: 29,
      inkSaver: "Middle",
      inkPerShot: 0.9,
      unreleased: true
    },
    {
      name: "H-3 Nozzlenose D",
      sub: "Sprinkler",
      special: "Ink Armor",
      specialCost: 190,
      level: 30,
      inkSaver: "High",
      inkPerShot: 1.8,
      unreleased: true
    }
    ]
  },
  {
    type: "Rollers/Brushes",
    shotUnit: "flicks",
    weapons: [
      {
        name: "Splat Roller",
        sub: "Curling Bomb",
        special: "Splashdown",
        specialCost: 180,
        level: 3,
        inkSaver: "Middle",
        inkPerShot: 10,
        shotUnit: "flicks"
      },
      {
        name: "Inkbrush",
        sub: "Splat Bomb",
        special: "Splashdown",
        specialCost: 170,
        level: 5,
        inkSaver: "Middle",
        inkPerShot: 2
      },
      {
        name: "Carbon Roller",
        sub: "Autobomb",
        special: "Ink Storm",
        specialCost: 180,
        level: 7,
        inkSaver: "Middle",
        inkPerShot: 6
      },
      {
        name: "Octobrush",
        sub: "Autobomb",
        special: "Inkjet",
        specialCost: 180,
        level: 10,
        inkSaver: "Middle",
        inkPerShot: 3.2
      },
      {
        name: "Krak-On Splat Roller",
        sub: "Squid Beakon",
        special: "Baller",
        specialCost: 180,
        level: 12,
        inkSaver: "Middle",
        inkPerShot: 10
      },
      {
        name: "Dynamo Roller",
        sub: "Ink Mine",
        special: "Sting Ray",
        specialCost: 180,
        level: 20,
        inkSaver: "High",
        swimPenalty: true,
        inkPerShot: 18
      },
      {
        name: "Flingza Roller",
        sub: "Splash Wall",
        special: "Splat-Bomb Launcher",
        specialCost: 180,
        level: 24,
        inkSaver: "Middle",
        inkPerShot: 8
      },
      {
        name: "Inkbrush Nouveau",
        sub: "Ink Mine",
        special: "Baller",
        specialCost: 180,
        level: 7,
        inkSaver: "High",
        inkPerShot: 2,
        unreleased: true
      },
      {
        name: "Carbon Roller Deco",
        sub: "Sprinkler",
        special: "Inkjet",
        specialCost: 180,
        level: 10,
        inkSaver: "Middle",
        inkPerShot: 6,
        unreleased: true
      },
      {
        name: "Octobrush Nouveau",
        sub: "Squid Beakon",
        special: "Tenta Missiles",
        specialCost: 180,
        level: 15,
        inkSaver: "Middle",
        inkPerShot: 3.2,
        unreleased: true
      },
      {
        name: "Gold Dynamo Roller",
        sub: "Toxic Mist",
        special: "Ink Armor",
        specialCost: 180,
        level: 25,
        inkSaver: "High",
        inkPerShot: 18,
        unreleased: true
      },
      {
        name: "Foil Flingza Roller",
        sub: "Suction Bomb",
        special: "Tenta Missiles",
        specialCost: 180,
        level: 28,
        inkSaver: "Middle",
        inkPerShot: 8,
        unreleased: true
      }
  ]
},
{
  type: "Blasters/Brellas",
  shotUnit: "shots",
  weapons: [
    {
      name: "Blaster",
      sub: "Toxic Mist",
      special: "Splashdown",
      specialCost: 180,
      level: 5,
      inkSaver: "Middle",
      inkPerShot: 10
    },
    {
      name: "Rapid Blaster",
      sub: "Ink Mine",
      special: "Splat-Bomb Launcher",
      specialCost: 180,
      level: 13,
      inkSaver: "Middle",
      inkPerShot: 7
    },
    {
      name: "Luna Blaster",
      sub: "Splat Bomb",
      special: "Baller",
      specialCost: 180,
      level: 19,
      inkSaver: "High",
      inkPerShot: 9
    },
    {
      name: "Custom Blaster",
      sub: "Autobomb",
      special: "Inkjet",
      specialCost: 180,
      level: 27,
      inkSaver: "Middle",
      inkPerShot: 10
    },
    {
      name: "Clash Blaster",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 170,
      level: 30,
      inkSaver: "Middle",
      inkPerShot: 5
    },
    {
      name: "Splat Brella",
      sub: "Sprinkler",
      special: "Ink Storm",
      specialCost: 180,
      level: 9,
      inkSaver: "Middle",
      inkPerShot: 5
    },
    {
      name: "Sorella Brella",
      sub: "Toxic Mist",
      special: "Splat-Bomb Launcher",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      inkPerShot: 5,
      unreleased: true
    },
    {
      name: "Luna Blaster Neo",
      sub: "Ink Mine",
      special: "Suction-Bomb Launcher",
      specialCost: 180,
      level: 24,
      inkSaver: "High",
      inkPerShot: 9,
      unreleased: true
    },
    {
      name: "Clash Blaster Neo",
      sub: "Sprinkler",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 30,
      inkSaver: "Middle",
      inkPerShot: 5,
      unreleased: true
    },
    {
      name: "Rapid Blaster Deco",
      sub: "Suction Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 16,
      inkSaver: "Middle",
      inkPerShot: 7,
      unreleased: true
    }
  ]
},
{
  type: "Sloshers",
  shotUnit: "sloshes",
  weapons: [
    {
      name: "Slosher",
      sub: "Suction Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 5,
      inkSaver: "Middle",
      inkPerShot: 7
    },
    {
      name: "Tri-Slosher",
      sub: "Burst Bomb",
      special: "Ink Armor",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      inkPerShot: 6
    },
    {
      name: "Slosher Deco",
      sub: "Sprinkler",
      special: "Baller",
      specialCost: 190,
      level: 8,
      inkSaver: "Middle",
      inkPerShot: 7,
      unreleased: true
    },
    {
      name: "Tri-Slosher Nouveau",
      sub: "Splat Bomb",
      special: "Autobomb Launcher",
      specialCost: 180,
      level: 17,
      inkSaver: "Middle",
      inkPerShot: 6,
      unreleased: true
    }
  ]
},
{
  type: "Chargers/Splatlings",
  shotUnit: "full charges",
  weapons: [
    {
      name: "Splat Charger",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 3,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "Heavy Splatling",
      sub: "Sprinkler",
      special: "Sting Ray",
      specialCost: 180,
      level: 8,
      inkSaver: "Middle",
      inkPerShot: 22.5
    },
    {
      name: "Splatterscope",
      sub: "Splat Bomb",
      special: "Sting Ray",
      specialCost: 180,
      level: 15,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "Firefin Splat Charger",
      sub: "Splash Wall",
      special: "Suction-Bomb Launcher",
      specialCost: 190,
      level: 16,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "E-liter 4K",
      sub: "Ink Mine",
      special: "Ink Storm",
      specialCost: 190,
      level: 20,
      inkSaver: "High",
      inkPerShot: 25,
      swimPenalty: true
    },
    {
      name: "Goo Tuber",
      sub: "Suction Bomb",
      special: "Splashdown",
      specialCost: 180,
      level: 22,
      inkSaver: "Middle",
      inkPerShot: 15
    },
    {
      name: "Mini Splatling",
      sub: "Burst Bomb",
      special: "Tenta Missiles",
      specialCost: 180,
      level: 23,
      inkSaver: "Middle",
      inkPerShot: 15
    },
    {
      name: "Firefin Splatterscope",
      sub: "Splash Wall",
      special: "Suction-Bomb Launcher",
      specialCost: 190,
      level: 25,
      inkSaver: "Middle",
      inkPerShot: 18
    },
    {
      name: "E-liter 4K Scope",
      sub: "Ink Mine",
      special: "Ink Storm",
      specialCost: 190,
      level: 30,
      inkSaver: "High",
      inkPerShot: 25,
      swimPenalty: true
    },
    {
      name: "Heavy Splatling Deco",
      sub: "Splash Wall",
      special: "Bubble Blower",
      specialCost: 180,
      level: 12,
      inkSaver: "Middle",
      inkPerShot: 22.5,
      unreleased: true
    },
    {
      name: "Zink Mini Splatling",
      sub: "Curling Bomb",
      special: "Ink Storm",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 15,
      unreleased: true
    },
    {
      name: "Custom E-liter 4K",
      sub: "Squid Beakon",
      special: "Bubble Blower",
      specialCost: 180,
      level: 26,
      inkSaver: "Middle",
      inkPerShot: 25,
      unreleased: true
    },
    {
      name: "Custom Goo Tuber",
      sub: "Curling Bomb",
      special: "Inkjet",
      specialCost: 180,
      level: 28,
      inkSaver: "Middle",
      inkPerShot: 15,
      unreleased: true
    },
    {
      name: "Custom E-liter 4K Scope",
      sub: "Squid Beakon",
      special: "Bubble Blower",
      specialCost: 180,
      level: 30,
      inkSaver: "High",
      inkPerShot: 25,
      unreleased: true
    },
  ]
}
]

}
