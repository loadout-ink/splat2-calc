angular.module('splatApp').weapons = function ($scope) {

$scope.weapons = [
  {
    name: "Splattershot Jr.",
    sub: "Splat Bomb",
    special: "Ink Armor",
    specialCost: 180,
    level: 1,
    inkSaver: "Middle"
  },
  {
    name: "Splattershot",
    sub: "Burst Bomb",
    special: "Splashdown",
    specialCost: 180,
    level: 2,
    inkSaver: "Middle"
  },
  {
    name: "Splat Roller",
    sub: "Curling Bomb",
    special: "Splashdown",
    specialCost: 180,
    level: 3,
    inkSaver: "Middle"
  },
  {
    name: "Splat Charger",
    sub: "Splat Bomb",
    special: "Sting Ray",
    specialCost: 180,
    level: 3,
    inkSaver: "Middle"
  },
  {
    name: "Splat Dualies",
    sub: "Burst Bomb",
    special: "Tenta Missiles",
    specialCost: 180,
    level: 4,
    inkSaver: "Middle"
  },
  {
    name: "Tentatek Splattershot",
    sub: "Splat Bomb",
    special: "Inkjet",
    specialCost: 190,
    level: 4,
    inkSaver: "Middle"
  },
  {
    name: "Slosher",
    sub: "Suction Bomb",
    special: "Tenta Missiles",
    specialCost: 180,
    level: 5,
    inkSaver: "Middle"
  },
  {
    name: "Inkbrush",
    sub: "Splat Bomb",
    special: "Splashdown",
    specialCost: 170,
    level: 5,
    inkSaver: "Middle"
  },
  {
    name: "Blaster",
    sub: "Toxic Mist",
    special: "Splashdown",
    specialCost: 180,
    level: 5,
    inkSaver: "Middle"
  },
  {
    name: "Aerospray MG",
    sub: "Suction Bomb",
    special: "Curling-Bomb Launcher",
    specialCost: 170,
    level: 6,
    inkSaver: "Middle"
  },
  {
    name: "Carbon Roller",
    sub: "Autobomb",
    special: "Ink Storm",
    specialCost: 180,
    level: 7,
    inkSaver: "Middle"
  },
  {
    name: "Heavy Splatling",
    sub: "Sprinkler",
    special: "Sting Ray",
    specialCost: 180,
    level: 8,
    inkSaver: "Middle"
  },
  {
    name: "N-ZAP '85",
    sub: "Suction Bomb",
    special: "Ink Armor",
    specialCost: 180,
    level: 9,
    inkSaver: "Middle"
  },
  {
    name: "Octobrush",
    sub: "Autobomb",
    special: "Inkjet",
    specialCost: 180,
    level: 10,
    inkSaver: "Middle"
  },
  {
    name: "Splattershot Pro",
    sub: "Point Sensor",
    special: "Ink Storm",
    specialCost: 180,
    level: 10,
    inkSaver: "High"
  },
  {
    name: "Enperry Splat Dualies",
    sub: "Curling Bomb",
    special: "Inkjet",
    specialCost: 180,
    level: 11,
    inkSaver: "Middle"
  },
  {
    name: "Krak-On Splat Roller",
    sub: "Squid Beakon",
    special: "Baller",
    specialCost: 180,
    level: 12,
    inkSaver: "Middle"
  },
  {
    name: "Dualie Squelchers",
    sub: "Point Sensor",
    special: "Tenta Missiles",
    specialCost: 180,
    level: 12,
    inkSaver: "Middle"
  },
  {
    name: "Rapid Blaster",
    sub: "Ink Mine",
    special: "Splat-Bomb Launcher",
    specialCost: 180,
    level: 13,
    inkSaver: "Middle"
  },
  {
    name: ".52 Gal",
    sub: "Point Sensor",
    special: "Baller",
    specialCost: 180,
    level: 14,
    inkSaver: "Middle"
  },
  {
    name: "Tri-Slosher",
    sub: "Burst Bomb",
    special: "Ink Armor",
    specialCost: 180,
    level: 15,
    inkSaver: "Middle"
  },
  {
    name: "Splatterscope",
    sub: "Splat Bomb",
    special: "Sting Ray",
    specialCost: 180,
    level: 15,
    inkSaver: "Middle"
  },
  {
    name: "Firefin Splat Charger",
    sub: "Splash Wall",
    special: "Suction-Bomb Launcher",
    specialCost: 190,
    level: 16,
    inkSaver: "Middle"
  },
  {
    name: "Jet Squelcher",
    sub: "Toxic Mist",
    special: "Tenta Missiles",
    specialCost: 180,
    level: 17,
    inkSaver: "Middle"
  },
  {
    name: "L-3 Nozzlenose",
    sub: "Curling Bomb",
    special: "Baller",
    specialCost: 180,
    level: 18,
    inkSaver: "Middle"
  },
  {
    name: "Luna Blaster",
    sub: "Splat Bomb",
    special: "Baller",
    specialCost: 180,
    level: 19,
    inkSaver: "High"
  },
  {
    name: "E-liter 4K",
    sub: "Ink Mine",
    special: "Ink Storm",
    specialCost: 190,
    level: 20,
    inkSaver: "High",
    swimPenalty: true
  },
  {
    name: "Dynamo Roller",
    sub: "Ink Mine",
    special: "Sting Ray",
    specialCost: 180,
    level: 20,
    inkSaver: "High",
    swimPenalty: true
  },
  {
    name: ".96 Gal",
    sub: "Sprinkler",
    special: "Ink Armor",
    specialCost: 180,
    level: 21,
    inkSaver: "Middle"
  },
  {
    name: "Goo Tuber",
    sub: "Suction Bomb",
    special: "Splashdown",
    specialCost: 180,
    level: 22,
    inkSaver: "Middle"
  },
  {
    name: "Mini Splatling",
    sub: "Burst Bomb",
    special: "Tenta Missiles",
    specialCost: 180,
    level: 23,
    inkSaver: "Middle"
  },
  {
    name: "Flingza Roller",
    sub: "Splash Wall",
    special: "Splat-Bomb Launcher",
    specialCost: 180,
    level: 24,
    inkSaver: "Middle"
  },
  {
    name: "Firefin Splatterscope",
    sub: "Splash Wall",
    special: "Suction-Bomb Launcher",
    specialCost: 190,
    level: 25,
    inkSaver: "Middle"
  },
  {
    name: "Splash-o-matic",
    sub: "Toxic Mist",
    special: "Inkjet",
    specialCost: 180,
    level: 25,
    inkSaver: "Middle"
  },
  {
    name: "Dapple Dualies",
    sub: "Squid Beakon",
    special: "Suction-Bomb Launcher",
    specialCost: 180,
    level: 26,
    inkSaver: "Middle"
  },
  {
    name: "Custom Blaster",
    sub: "Autobomb",
    special: "Inkjet",
    specialCost: 180,
    level: 27,
    inkSaver: "Middle"
  },
  {
    name: "Aerospray RG",
    sub: "Sprinkler",
    special: "Baller",
    specialCost: 180,
    level: 28,
    inkSaver: "Middle"
  },
  {
    name: "H-3 Nozzlenose",
    sub: "Point Sensor",
    special: "Tenta Missiles",
    specialCost: 180,
    level: 29,
    inkSaver: "High"
  },
  {
    name: "E-liter 4K Scope",
    sub: "Ink Mine",
    special: "Ink Storm",
    specialCost: 190,
    level: 30,
    inkSaver: "High",
    swimPenalty: true
  },
  {
    name: "Clash Blaster",
    sub: "Splat Bomb",
    special: "Sting Ray",
    specialCost: 170,
    level: 30,
    inkSaver: "Middle"
  }
]
}
