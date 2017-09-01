angular.module('splatApp').hats = function($scope) {
$scope.hats = [
  {
    image: "./assets/img/gear/Hed_FST000.png",
    name: "White Headband",
    main: "Ink Recovery Up",
    brand: "SquidForce",
    stars: 1,
    id: 0
  },
  {
    image: "./assets/img/gear/Hed_CAP000.png",
    name: "Urchins Cap",
    main: "Sub Power Up",
    brand: "Skalop",
    stars: 1,
    id: 1
  },
  {
    image: "./assets/img/gear/Hed_CAP001.png",
    name: "Lightweight Cap",
    main: "Swim Speed Up",
    brand: "Inkline",
    stars: 1,
    id: 2
  },
  {
    image: "./assets/img/gear/Hed_CAP002.png",
    name: "Takoroka Mesh",
    main: "Bomb Defense Up",
    brand: "Takoroka",
    stars: 1,
    id: 3
  },
  {
    image: "./assets/img/gear/Hed_CAP005.png",
    name: "Squidvader Cap",
    main: "Special Charge Up",
    brand: "Skalop",
    stars: 1,
    id: 4
  },
  {
    image: "./assets/img/gear/Hed_CAP006.png",
    name: "Camo Mesh",
    main: "Swim Speed Up",
    brand: "Firefin",
    stars: 1,
    id: 5
  },
  {
    image: "./assets/img/gear/Hed_CAP007.png",
    name: "Five-Panel Cap",
    main: "Comeback",
    brand: "Zekko",
    stars: 2,
    id: 6
  },
  {
    image: "./assets/img/gear/Hed_CAP009.png",
    name: "Backwards Cap",
    main: "Quick Respawn",
    brand: "Zekko",
    stars: 1,
    id: 7
  },
  {
    image: "./assets/img/gear/Hed_CAP014.png",
    name: "Cycle King Cap",
    main: "Bomb Defense Up",
    brand: "Tentatek",
    stars: 2,
    id: 8
  },
  {
    image: "./assets/img/gear/Hed_CAP019.png",
    name: "King Flip Mesh",
    main: "Run Speed Up",
    brand: "Enperry",
    stars: 2,
    id: 9
  },
  {
    image: "./assets/img/gear/Hed_CAP020.png",
    name: "Hickory Work Cap",
    main: "Special Power Up",
    brand: "Krak-On",
    stars: 3,
    id: 10
  },
  {
    image: "./assets/img/gear/Hed_CAP023.png",
    name: "Jellyvader Cap",
    main: "Ink Saver (Sub)",
    brand: "Skalop",
    stars: 3,
    id: 11
  },
  {
    image: "./assets/img/gear/Hed_NCP000.png",
    name: "Bobble Hat",
    main: "Quick Super Jump",
    brand: "Splash Mob",
    stars: 2,
    id: 12
  },
  {
    image: "./assets/img/gear/Hed_NCP002.png",
    name: "Striped Beanie",
    main: "Opening Gambit",
    brand: "Splash Mob",
    stars: 1,
    id: 13
  },
  {
    image: "./assets/img/gear/Hed_NCP004.png",
    name: "Special Forces Beret",
    main: "Opening Gambit",
    brand: "Forge",
    stars: 3,
    id: 14
  },
  {
    image: "./assets/img/gear/Hed_NCP008.png",
    name: "Knitted Hat",
    main: "Ink Resistance Up",
    brand: "Firefin",
    stars: 1,
    id: 15
  },
  {
    image: "./assets/img/gear/Hed_NCP009.png",
    name: "Annaki Beret",
    main: "Ink Resistance Up",
    brand: "Annaki",
    stars: 3,
    id: 16
  },
  {
    image: "./assets/img/gear/Hed_EYE000.png",
    name: "Retro Specs",
    main: "Quick Respawn",
    brand: "Splash Mob",
    stars: 1,
    id: 17
  },
  {
    image: "./assets/img/gear/Hed_EYE002.png",
    name: "Pilot Goggles",
    main: "Sub Power Up",
    brand: "Forge",
    stars: 2,
    id: 18
  },
  {
    image: "./assets/img/gear/Hed_EYE003.png",
    name: "Tinted Shades",
    main: "Last-Ditch Effort",
    brand: "Zekko",
    stars: 1,
    id: 19
  },
  {
    image: "./assets/img/gear/Hed_EYE005.png",
    name: "Snorkel Mask",
    main: "Ink Saver (Sub)",
    brand: "Forge",
    stars: 2,
    id: 20
  },
  {
    image: "./assets/img/gear/Hed_EYE007.png",
    name: "Fake Contacts",
    main: "Special Charge Up",
    brand: "Tentatek",
    stars: 2,
    id: 21
  },
  {
    image: "./assets/img/gear/Hed_EYE008.png",
    name: "18K Aviators",
    main: "Last-Ditch Effort",
    brand: "Rockenberg",
    stars: 3,
    id: 22
  },
  {
    image: "./assets/img/gear/Hed_EYE011.png",
    name: "Half-Rim Glasses",
    main: "Special Power Up",
    brand: "Splash Mob",
    stars: 2,
    id: 23
  },
  {
    image: "./assets/img/gear/Hed_HAT000.png",
    name: "Safari Hat",
    main: "Last-Ditch Effort",
    brand: "Forge",
    stars: 2,
    id: 24
  },
  {
    image: "./assets/img/gear/Hed_HAT002.png",
    name: "Camping Hat",
    main: "Special Power Up",
    brand: "Inkline",
    stars: 1,
    id: 25
  },
  {
    image: "./assets/img/gear/Hed_HAT003.png",
    name: "Blowfish Bell Hat",
    main: "Ink Recovery Up",
    brand: "Firefin",
    stars: 1,
    id: 26
  },
  {
    image: "./assets/img/gear/Hed_HAT004.png",
    name: "Bamboo Hat",
    main: "Ink Saver (Main)",
    brand: "Inkline",
    stars: 2,
    id: 27
  },
  {
    image: "./assets/img/gear/Hed_HAT005.png",
    name: "Straw Boater",
    main: "Quick Super Jump",
    brand: "Skalop",
    stars: 1,
    id: 28
  },
  {
    image: "./assets/img/gear/Hed_HAT008.png",
    name: "Bucket Hat",
    main: "Special Saver",
    brand: "SquidForce",
    stars: 1,
    id: 29
  },
  {
    image: "./assets/img/gear/Hed_HAT009.png",
    name: "Patched Hat",
    main: "Cold-Blooded",
    brand: "Skalop",
    stars: 2,
    id: 30
  },
  {
    image: "./assets/img/gear/Hed_HDP000.png",
    name: "Studio Headphones",
    main: "Ink Saver (Main)",
    brand: "Forge",
    stars: 2,
    id: 31
  },
  {
    image: "./assets/img/gear/Hed_HDP002.png",
    name: "Noise Cancelers",
    main: "Quick Respawn",
    brand: "Forge",
    stars: 3,
    id: 32
  },
  {
    image: "./assets/img/gear/Hed_HDP003.png",
    name: "Squidfin Hook Cans",
    main: "Ink Resistance Up",
    brand: "Forge",
    stars: 2,
    id: 33
  },
  {
    image: "./assets/img/gear/Hed_VIS001.png",
    name: "FishFry Visor",
    main: "Special Charge Up",
    brand: "Firefin",
    stars: 1,
    id: 34
  },
  {
    image: "./assets/img/gear/Hed_VIS002.png",
    name: "Sun Visor",
    main: "Sub Power Up",
    brand: "Tentatek",
    stars: 2,
    id: 35
  },
  {
    image: "./assets/img/gear/Hed_VIS003.png",
    name: "Takoroka Visor",
    main: "Quick Super Jump",
    brand: "Takoroka",
    stars: 3,
    id: 36
  },
  {
    image: "./assets/img/gear/Hed_MET000.png",
    name: "Bike Helmet",
    main: "Ink Recovery Up",
    brand: "Skalop",
    stars: 2,
    id: 37
  },
  {
    image: "./assets/img/gear/Hed_MET005.png",
    name: "Visor Skate Helmet",
    main: "Last-Ditch Effort",
    brand: "Skalop",
    stars: 3,
    id: 38
  },
  {
    image: "./assets/img/gear/Hed_MET006.png",
    name: "MTB Helmet",
    main: "Tenacity",
    brand: "Zekko",
    stars: 3,
    id: 39
  },
  {
    image: "./assets/img/gear/Hed_MET007.png",
    name: "Hockey Helmet",
    main: "Cold-Blooded",
    brand: "Forge",
    stars: 3,
    id: 40
  },
  {
    image: "./assets/img/gear/Hed_MSK001.png",
    name: "Paintball Mask",
    main: "Comeback",
    brand: "Forge",
    stars: 3,
    id: 41
  },
  {
    image: "./assets/img/gear/Hed_MSK003.png",
    name: "Skull Bandana",
    main: "Special Saver",
    brand: "Forge",
    stars: 3,
    id: 42
  },
  {
    image: "./assets/img/gear/Hed_MSK004.png",
    name: "Painter's Mask",
    main: "Cold-Blooded",
    brand: "SquidForce",
    stars: 2,
    id: 43
  },
  {
    image: "./assets/img/gear/Hed_MSK005.png",
    name: "Annaki Mask",
    main: "Opening Gambit",
    brand: "Annaki",
    stars: 2,
    id: 44
  },
  {
    image: "./assets/img/gear/Hed_MSK007.png",
    name: "Squid Facemask",
    main: "Ink Saver (Main)",
    brand: "SquidForce",
    stars: 1,
    id: 45
  },
  {
    image: "./assets/img/gear/Hed_MSK008.png",
    name: "Firefin Facemask",
    main: "Run Speed Up",
    brand: "Firefin",
    stars: 1,
    id: 46
  },
  {
    image: "./assets/img/gear/Hed_MSK009.png",
    name: "King Facemask",
    main: "Ink Saver (Sub)",
    brand: "Enperry",
    stars: 1,
    id: 47
  },
  {
    image: "./assets/img/gear/Hed_HBD002.png",
    name: "Squash Headband",
    main: "Special Saver",
    brand: "Zink",
    stars: 1,
    id: 48
  },
  {
    image: "./assets/img/gear/Hed_HBD003.png",
    name: "Tennis Headband",
    main: "Comeback",
    brand: "Tentatek",
    stars: 1,
    id: 49
  },
  {
    image: "./assets/img/gear/Hed_HBD005.png",
    name: "Soccer Headband",
    main: "Tenacity",
    brand: "Tentatek",
    stars: 2,
    id: 50
  },
  {
    image: "./assets/img/gear/Hed_COP100.png",
    name: "Headlamp Helmet",
    main: "Quick Respawn",
    brand: "Grizzco",
    stars: 3,
    id: 51
  },
  {
    image: "./assets/img/gear/Hed_AMB000.png",
    name: "Squid Hairclip",
    main: "Swim Speed Up",
    brand: "amiibo",
    stars: 2,
    id: 52
  },
  {
    image: "./assets/img/gear/Hed_AMB001.png",
    name: "Samurai Helmet",
    main: "Quick Super Jump",
    brand: "amiibo",
    stars: 2,
    id: 53
  },
  {
    image: "./assets/img/gear/Hed_AMB002.png",
    name: "Power Mask",
    main: "Bomb Defense Up",
    brand: "amiibo",
    stars: 2,
    id: 54
  },
  {
    image: "./assets/img/gear/Hed_AMB003.png",
    name: "Squid Clip-Ons",
    main: "Opening Gambit",
    brand: "amiibo",
    stars: 2,
    id: 55
  },
  {
    image: "./assets/img/gear/Hed_AMB004.png",
    name: "Squinja Mask",
    main: "Quick Respawn",
    brand: "amiibo",
    stars: 2,
    id: 56
  },
  {
    image: "./assets/img/gear/Hed_AMB005.png",
    name: "Power Mask Mk I",
    main: "Ink Resistance Up",
    brand: "amiibo",
    stars: 2,
    id: 57
  },
  {
    image: "./assets/img/gear/Hed_MSN000.png",
    name: "Hero Headset Replica",
    main: "Run Speed Up",
    brand: "Cuttlegear",
    stars: 2,
    id: 58
  },
  {
    image: "./assets/img/gear/Hed_MSN004.png",
    name: "Armor Helmet Replica",
    main: "Tenacity",
    brand: "Cuttlegear",
    stars: 2,
    id: 59
  },
  {
    image: "./assets/img/gear/Hed_MSN101.png",
    name: "Hero Headphones Replica",
    main: "Special Saver",
    brand: "Cuttlegear",
    stars: 2,
    id: 60
  }
]
}
