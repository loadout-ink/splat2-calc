angular.module('splatApp').gear = function($scope) {
$scope.brands = {
  "SquidForce" : {
    image: "img/brands/B00.png",
    common: "Ink Resistance Up",
    uncommon: "Ink Saver (Main)"
  },
  "Zink" : {
    image: "img/brands/B01.png",
    common: "Quick Super Jump",
    uncommon: "Quick Respawn"
  },
  "Krak-On" : {
    image: "img/brands/B02.png",
    common: "Swim Speed Up",
    uncommon: "Bomb Defense Up"
  },
  "Rockenberg" : {
    image: "img/brands/B03.png",
    common: "Run Speed Up",
    uncommon: "Swim Speed Up"
  },
  "Zekko" : {
    image: "img/brands/B04.png",
    common: "Special Saver",
    uncommon: "Special Charge Up"
  },
  "Forge" : {
    image: "img/brands/B05.png",
    common: "Special Power Up",
    uncommon: "Ink Saver (Sub)"
  },
  "Firefin" : {
    image: "img/brands/B06.png",
    common: "Ink Saver (Sub)",
    uncommon: "Ink Recovery Up"
  },
  "Skalop" : {
    image: "img/brands/B07.png",
    common: "Quick Respawn",
    uncommon: "Special Saver"
  },
  "Splash Mob" : {
    image: "img/brands/B08.png",
    common: "Ink Saver (Main)",
    uncommon: "Run Speed Up"
  },
  "Inkline" : {
    image: "img/brands/B09.png",
    common: "Bomb Defense Up",
    uncommon: "Cold-Blooded"
  },
  "Tentatek" : {
    image: "img/brands/B10.png",
    common: "Ink Recovery Up",
    uncommon: "Quick Super Jump"
  },
  "Takoroka" : {
    image: "img/brands/B11.png",
    common: "Special Charge Up",
    uncommon: "Special Power Up"
  },
  "Annaki" : {
    image: "img/brands/B15.png",
    common: "Cold-Blooded",
    uncommon: "Special Saver"
  },
  "Enperry" : {
    image: "img/brands/B16.png",
    common: "Sub Power Up",
    uncommon: "Ink Resistance Up"
  },
  "Toni Kensa" : {
    image: "img/brands/B17.png",
    common: "Cold-Blooded",
    uncommon: "Sub Power Up"
  },
  "Grizzco" : {
    image: "img/brands/B97.png"
  },
  "Cuttlegear" : {
    image: "img/brands/B98.png"
  },
  "amiibo" : {
    image: "img/brands/B99.png"
  }
}
$scope.hats = [
    {
      image: "img/gear/Hed_FST000.png",
      name: "White Headband",
      main: "Ink Recovery Up",
      brand: "SquidForce",
      stars: 1
    },
    {
      image: "img/gear/Hed_CAP000.png",
      name: "Urchins Cap",
      main: "Sub Power Up",
      brand: "Skalop",
      stars: 1
    },
    {
      image: "img/gear/Hed_CAP001.png",
      name: "Lightweight Cap",
      main: "Swim Speed Up",
      brand: "Inkline",
      stars: 1
    },
    {
      image: "img/gear/Hed_CAP002.png",
      name: "Takoroka Mesh",
      main: "Bomb Defense Up",
      brand: "Takoroka",
      stars: 1
    },
    {
      image: "img/gear/Hed_CAP005.png",
      name: "Squidvader Cap",
      main: "Special Charge Up",
      brand: "Skalop",
      stars: 1
    },
    {
      image: "img/gear/Hed_CAP006.png",
      name: "Camo Mesh",
      main: "Swim Speed Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Hed_CAP007.png",
      name: "Five-Panel Cap",
      main: "Comeback",
      brand: "Zekko",
      stars: 2
    },
    {
      image: "img/gear/Hed_CAP009.png",
      name: "Backwards Cap",
      main: "Quick Respawn",
      brand: "Zekko",
      stars: 1
    },
    {
      image: "img/gear/Hed_CAP014.png",
      name: "Cycle King Cap",
      main: "Bomb Defense Up",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Hed_CAP019.png",
      name: "King Flip Mesh",
      main: "Run Speed Up",
      brand: "Enperry",
      stars: 2
    },
    {
      image: "img/gear/Hed_CAP020.png",
      name: "Hickory Work Cap",
      main: "Special Power Up",
      brand: "Krak-On",
      stars: 3
    },
    {
      image: "img/gear/Hed_CAP023.png",
      name: "Jellyvader Cap",
      main: "Ink Saver (Sub)",
      brand: "Skalop",
      stars: 3
    },
    {
      image: "img/gear/Hed_NCP000.png",
      name: "Bobble Hat",
      main: "Quick Super Jump",
      brand: "Splash Mob",
      stars: 2
    },
    {
      image: "img/gear/Hed_NCP002.png",
      name: "Striped Beanie",
      main: "Opening Gambit",
      brand: "Splash Mob",
      stars: 1
    },
    {
      image: "img/gear/Hed_NCP004.png",
      name: "Special Forces Beret",
      main: "Opening Gambit",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Hed_NCP008.png",
      name: "Knitted Hat",
      main: "Ink Resistance Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Hed_NCP009.png",
      name: "Annaki Beret",
      main: "Ink Resistance Up",
      brand: "Annaki",
      stars: 3
    },
    {
      image: "img/gear/Hed_EYE000.png",
      name: "Retro Specs",
      main: "Quick Respawn",
      brand: "Splash Mob",
      stars: 1
    },
    {
      image: "img/gear/Hed_EYE002.png",
      name: "Pilot Goggles",
      main: "Sub Power Up",
      brand: "Forge",
      stars: 2
    },
    {
      image: "img/gear/Hed_EYE003.png",
      name: "Tinted Shades",
      main: "Last-Ditch Effort",
      brand: "Zekko",
      stars: 1
    },
    {
      image: "img/gear/Hed_EYE005.png",
      name: "Snorkel Mask",
      main: "Ink Saver (Sub)",
      brand: "Forge",
      stars: 2
    },
    {
      image: "img/gear/Hed_EYE007.png",
      name: "Fake Contacts",
      main: "Special Charge Up",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Hed_EYE008.png",
      name: "18K Aviators",
      main: "Last-Ditch Effort",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Hed_EYE011.png",
      name: "Half-Rim Glasses",
      main: "Special Power Up",
      brand: "Splash Mob",
      stars: 2
    },
    {
      image: "img/gear/Hed_HAT000.png",
      name: "Safari Hat",
      main: "Last-Ditch Effort",
      brand: "Forge",
      stars: 2
    },
    {
      image: "img/gear/Hed_HAT002.png",
      name: "Camping Hat",
      main: "Special Power Up",
      brand: "Inkline",
      stars: 1
    },
    {
      image: "img/gear/Hed_HAT003.png",
      name: "Blowfish Bell Hat",
      main: "Ink Recovery Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Hed_HAT004.png",
      name: "Bamboo Hat",
      main: "Ink Saver (Main)",
      brand: "Inkline",
      stars: 2
    },
    {
      image: "img/gear/Hed_HAT005.png",
      name: "Straw Boater",
      main: "Quick Super Jump",
      brand: "Skalop",
      stars: 1
    },
    {
      image: "img/gear/Hed_HAT008.png",
      name: "Bucket Hat",
      main: "Special Saver",
      brand: "SquidForce",
      stars: 1
    },
    {
      image: "img/gear/Hed_HAT009.png",
      name: "Patched Hat",
      main: "Cold-Blooded",
      brand: "Skalop",
      stars: 2
    },
    {
      image: "img/gear/Hed_HDP000.png",
      name: "Studio Headphones",
      main: "Ink Saver (Main)",
      brand: "Forge",
      stars: 2
    },
    {
      image: "img/gear/Hed_HDP002.png",
      name: "Noise Cancelers",
      main: "Quick Respawn",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Hed_HDP003.png",
      name: "Squidfin Hook Cans",
      main: "Ink Resistance Up",
      brand: "Forge",
      stars: 2
    },
    {
      image: "img/gear/Hed_VIS001.png",
      name: "FishFry Visor",
      main: "Special Charge Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Hed_VIS002.png",
      name: "Sun Visor",
      main: "Sub Power Up",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Hed_VIS003.png",
      name: "Takoroka Visor",
      main: "Quick Super Jump",
      brand: "Takoroka",
      stars: 3
    },
    {
      image: "img/gear/Hed_MET000.png",
      name: "Bike Helmet",
      main: "Ink Recovery Up",
      brand: "Skalop",
      stars: 2
    },
    {
      image: "img/gear/Hed_MET005.png",
      name: "Visor Skate Helmet",
      main: "Last-Ditch Effort",
      brand: "Skalop",
      stars: 3
    },
    {
      image: "img/gear/Hed_MET006.png",
      name: "MTB Helmet",
      main: "Tenacity",
      brand: "Zekko",
      stars: 3
    },
    {
      image: "img/gear/Hed_MET007.png",
      name: "Hockey Helmet",
      main: "Cold-Blooded",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Hed_MSK001.png",
      name: "Paintball Mask",
      main: "Comeback",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Hed_MSK003.png",
      name: "Skull Bandana",
      main: "Special Saver",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Hed_MSK004.png",
      name: "Painter's Mask",
      main: "Cold-Blooded",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Hed_MSK005.png",
      name: "Annaki Mask",
      main: "Opening Gambit",
      brand: "Annaki",
      stars: 2
    },
    {
      image: "img/gear/Hed_MSK007.png",
      name: "Squid Facemask",
      main: "Ink Saver (Main)",
      brand: "SquidForce",
      stars: 1
    },
    {
      image: "img/gear/Hed_MSK008.png",
      name: "Firefin Facemask",
      main: "Run Speed Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Hed_MSK009.png",
      name: "King Facemask",
      main: "Ink Saver (Sub)",
      brand: "Enperry",
      stars: 1
    },
    {
      image: "img/gear/Hed_HBD002.png",
      name: "Squash Headband",
      main: "Special Saver",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Hed_HBD003.png",
      name: "Tennis Headband",
      main: "Comeback",
      brand: "Tentatek",
      stars: 1
    },
    {
      image: "img/gear/Hed_HBD005.png",
      name: "Soccer Headband",
      main: "Tenacity",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Hed_COP100.png",
      name: "Headlamp Helmet",
      main: "Quick Respawn",
      brand: "Grizzco",
      stars: 3
    },
    {
      image: "img/gear/Hed_AMB000.png",
      name: "Squid Hairclip",
      main: "Swim Speed Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Hed_AMB001.png",
      name: "Samurai Helmet",
      main: "Quick Super Jump",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Hed_AMB002.png",
      name: "Power Mask",
      main: "Bomb Defense Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Hed_AMB003.png",
      name: "Squid Clip-Ons",
      main: "Opening Gambit",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Hed_AMB004.png",
      name: "Squinja Mask",
      main: "Quick Respawn",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Hed_AMB005.png",
      name: "Power Mask Mk I",
      main: "Ink Resistance Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Hed_MSN000.png",
      name: "Hero Headset Replica",
      main: "Run Speed Up",
      brand: "Cuttlegear",
      stars: 2
    },
    {
      image: "img/gear/Hed_MSN004.png",
      name: "Armor Helmet Replica",
      main: "Tenacity",
      brand: "Cuttlegear",
      stars: 2
    },
    {
      image: "img/gear/Hed_MSN101.png",
      name: "Hero Headphones Replica",
      main: "Special Saver",
      brand: "Cuttlegear",
      stars: 2
    }
  ]

$scope.clothes = [
    {
      image: "img/gear/Clt_FST001.png",
      name: "Basic Tee",
      main: "Quick Respawn",
      brand: "SquidForce",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES000.png",
      name: "White Tee",
      main: "Ink Saver (Sub)",
      brand: "SquidForce",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES001.png",
      name: "Black Squideye",
      main: "Run Speed Up",
      brand: "Tentatek",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES006.png",
      name: "Black Tee",
      main: "Special Power Up",
      brand: "SquidForce",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES007.png",
      name: "Sunny-Day Tee",
      main: "Special Charge Up",
      brand: "Krak-On",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES010.png",
      name: "Fugu Tee",
      main: "Swim Speed Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES011.png",
      name: "Mint Tee",
      main: "Bomb Defense Up",
      brand: "Skalop",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES013.png",
      name: "Red Vector Tee",
      main: "Ink Saver (Main)",
      brand: "Takoroka",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES015.png",
      name: "Blue Peaks Tee",
      main: "Ink Saver (Sub)",
      brand: "Inkline",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES019.png",
      name: "Sailor-Stripe Tee",
      main: "Run Speed Up",
      brand: "Splash Mob",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES020.png",
      name: "White 8-Bit FishFry",
      main: "Sub Power Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES022.png",
      name: "White Anchor Tee",
      main: "Ninja Squid",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Clt_TES030.png",
      name: "Black V-Neck Tee",
      main: "Thermal Ink",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Clt_TES031.png",
      name: "White Deca Logo Tee",
      main: "Ink Resistance Up",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES032.png",
      name: "Half-Sleeve Sweater",
      main: "Ink Saver (Sub)",
      brand: "Toni Kensa",
      stars: 2
    },
    {
      image: "img/gear/Clt_TES033.png",
      name: "King Jersey",
      main: "Respawn Punisher",
      brand: "Enperry",
      stars: 2
    },
    {
      image: "img/gear/Clt_TES034.png",
      name: "Gray 8-Bit FishFry",
      main: "Special Charge Up",
      brand: "Firefin",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES035.png",
      name: "White V-Neck Tee",
      main: "Special Saver",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Clt_TES036.png",
      name: "White Urchin Rock Tee",
      main: "Ink Saver (Main)",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES037.png",
      name: "Black Urchin Rock Tee",
      main: "Ink Recovery Up",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES038.png",
      name: "Wet Floor Band Tee",
      main: "Swim Speed Up",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES039.png",
      name: "Squid Squad Band Tee",
      main: "Ink Resistance Up",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES040.png",
      name: "Navy Deca Logo Tee",
      main: "Ink Saver (Main)",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES041.png",
      name: "Mister Shrug Tee",
      main: "Ink Resistance Up",
      brand: "Krak-On",
      stars: 3
    },
    {
      image: "img/gear/Clt_TES042.png",
      name: "Chirpy Chips Band Tee",
      main: "Cold-Blooded",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES043.png",
      name: "Hightide Era Band Tee",
      main: "Thermal Ink",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Clt_TES044.png",
      name: "Red V-Neck Limited Tee",
      main: "Quick Respawn",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Clt_TES045.png",
      name: "Green V-Neck Limited Tee",
      main: "Quick Super Jump",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Clt_TEL001.png",
      name: "Black LS",
      main: "Quick Super Jump",
      brand: "Zekko",
      stars: 2
    },
    {
      image: "img/gear/Clt_TEL002.png",
      name: "Purple Camo LS",
      main: "Sub Power Up",
      brand: "Takoroka",
      stars: 1
    },
    {
      image: "img/gear/Clt_TEL003.png",
      name: "Navy Striped LS",
      main: "Ink Recovery Up",
      brand: "Splash Mob",
      stars: 1
    },
    {
      image: "img/gear/Clt_TEL004.png",
      name: "Zekko Baseball LS",
      main: "Bomb Defense Up",
      brand: "Zekko",
      stars: 1
    },
    {
      image: "img/gear/Clt_TEL007.png",
      name: "White Baseball LS",
      main: "Quick Super Jump",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Clt_TEL013.png",
      name: "Pink Easy-Stripe Shirt",
      main: "Quick Super Jump",
      brand: "Splash Mob",
      stars: 2
    },
    {
      image: "img/gear/Clt_TEL014.png",
      name: "Inkopolis Squaps Jersey",
      main: "Cold-Blooded",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Clt_TEL015.png",
      name: "Annaki Drive Tee",
      main: "Thermal Ink",
      brand: "Annaki",
      stars: 2
    },
    {
      image: "img/gear/Clt_TEL016.png",
      name: "Lime Easy-Stripe Shirt",
      main: "Ink Resistance Up",
      brand: "Splash Mob",
      stars: 2
    },
    {
      image: "img/gear/Clt_TEL017.png",
      name: "Annaki Evolution Tee",
      main: "Respawn Punisher",
      brand: "Annaki",
      stars: 3
    },
    {
      image: "img/gear/Clt_TLY001.png",
      name: "Yellow Layered LS",
      main: "Quick Super Jump",
      brand: "SquidForce",
      stars: 1
    },
    {
      image: "img/gear/Clt_TLY004.png",
      name: "Zink Layered LS",
      main: "Respawn Punisher",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Clt_TLY005.png",
      name: "Layered Anchor LS",
      main: "Run Speed Up",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Clt_TLY006.png",
      name: "Choco Layered LS",
      main: "Ink Saver (Sub)",
      brand: "Takoroka",
      stars: 1
    },
    {
      image: "img/gear/Clt_TLY008.png",
      name: "Layered Vector LS",
      main: "Special Saver",
      brand: "Takoroka",
      stars: 1
    },
    {
      image: "img/gear/Clt_TLY009.png",
      name: "Green Tee",
      main: "Special Saver",
      brand: "Forge",
      stars: 1
    },
    {
      image: "img/gear/Clt_TLY010.png",
      name: "Red Tentatek Tee",
      main: "Swim Speed Up",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Clt_TLY011.png",
      name: "Blue Tentatek Tee",
      main: "Quick Respawn",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Clt_PLO000.png",
      name: "Shrimp-Pink Polo",
      main: "Ninja Squid",
      brand: "Splash Mob",
      stars: 1
    },
    {
      image: "img/gear/Clt_PLO006.png",
      name: "Cycle King Jersey",
      main: "Bomb Defense Up",
      brand: "Tentatek",
      stars: 3
    },
    {
      image: "img/gear/Clt_PLO007.png",
      name: "Slipstream United",
      main: "Bomb Defense Up",
      brand: "Takoroka",
      stars: 2
    },
    {
      image: "img/gear/Clt_PLO008.png",
      name: "FC Albacore",
      main: "Respawn Punisher",
      brand: "Takoroka",
      stars: 1
    },
    {
      image: "img/gear/Clt_JKT002.png",
      name: "Berry Ski Jacket",
      main: "Special Power Up",
      brand: "Inkline",
      stars: 2
    },
    {
      image: "img/gear/Clt_JKT003.png",
      name: "Varsity Jacket",
      main: "Ink Saver (Sub)",
      brand: "Zekko",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT006.png",
      name: "Black Inky Rider",
      main: "Sub Power Up",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT007.png",
      name: "White Inky Rider",
      main: "Special Power Up",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT012.png",
      name: "Blue Sailor Suit",
      main: "Sub Power Up",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT014.png",
      name: "Squid Satin Jacket",
      main: "Quick Respawn",
      brand: "Zekko",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT017.png",
      name: "Chilly Mountain Coat",
      main: "Swim Speed Up",
      brand: "Inkline",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT018.png",
      name: "Takoroka Windcrusher",
      main: "Cold-Blooded",
      brand: "Takoroka",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT019.png",
      name: "Matcha Down Jacket",
      main: "Ninja Squid",
      brand: "Inkline",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT020.png",
      name: "FA-01 Jacket",
      main: "Ink Recovery Up",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT021.png",
      name: "FA-01 Reversed",
      main: "Quick Super Jump",
      brand: "Forge",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT022.png",
      name: "Pullover Coat",
      main: "Thermal Ink",
      brand: "Toni Kensa",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT024.png",
      name: "Birded Corduroy Jacket",
      main: "Run Speed Up",
      brand: "Zekko",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT026.png",
      name: "Zekko Redleaf Coat",
      main: "Haunt",
      brand: "Zekko",
      stars: 2
    },
    {
      image: "img/gear/Clt_JKT027.png",
      name: "Eggplant Mountain Coat",
      main: "Special Saver",
      brand: "Inkline",
      stars: 3
    },
    {
      image: "img/gear/Clt_JKT028.png",
      name: "Zekko Jade Coat",
      main: "Respawn Punisher",
      brand: "Zekko",
      stars: 2
    },
    {
      image: "img/gear/Clt_JKT030.png",
      name: "Brown FA-11 Bomber",
      main: "Bomb Defense Up",
      brand: "Forge",
      stars: 2
    },
    {
      image: "img/gear/Clt_JKT031.png",
      name: "Gray FA-11 Bomber",
      main: "Cold-Blooded",
      brand: "Forge",
      stars: 2
    },
    {
      image: "img/gear/Clt_TNK001.png",
      name: "B-ball Jersey (Away)",
      main: "Ink Saver (Sub)",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Clt_TNK003.png",
      name: "White King Tank",
      main: "Haunt",
      brand: "Enperry",
      stars: 1
    },
    {
      image: "img/gear/Clt_TNK004.png",
      name: "Slash King Tank",
      main: "Thermal Ink",
      brand: "Enperry",
      stars: 1
    },
    {
      image: "img/gear/Clt_TNK005.png",
      name: "Navy King Tank",
      main: "Ink Resistance Up",
      brand: "Enperry",
      stars: 1
    },
    {
      image: "img/gear/Clt_SWT002.png",
      name: "Retro Sweat",
      main: "Bomb Defense Up",
      brand: "SquidForce",
      stars: 3
    },
    {
      image: "img/gear/Clt_SWT005.png",
      name: "Reel Sweat",
      main: "Special Power Up",
      brand: "Zekko",
      stars: 1
    },
    {
      image: "img/gear/Clt_SWT006.png",
      name: "Anchor Sweat",
      main: "Cold-Blooded",
      brand: "SquidForce",
      stars: 2
    },
    {
      image: "img/gear/Clt_SWT007.png",
      name: "Negative Longcuff Sweater",
      main: "Haunt",
      brand: "Toni Kensa",
      stars: 3
    },
    {
      image: "img/gear/Clt_SWT008.png",
      name: "Short Knit Layers",
      main: "Ink Saver (Main)",
      brand: "Toni Kensa",
      stars: 3
    },
    {
      image: "img/gear/Clt_SWT009.png",
      name: "Positive Longcuff Sweater",
      main: "Swim Speed Up",
      brand: "Toni Kensa",
      stars: 3
    },
    {
      image: "img/gear/Clt_SHT002.png",
      name: "Green-Check Shirt",
      main: "Sub Power Up",
      brand: "Zekko",
      stars: 2
    },
    {
      image: "img/gear/Clt_SHT004.png",
      name: "Urchins Jersey",
      main: "Run Speed Up",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Clt_SHT007.png",
      name: "Baby-Jelly Shirt",
      main: "Bomb Defense Up",
      brand: "Splash Mob",
      stars: 1
    },
    {
      image: "img/gear/Clt_SHT010.png",
      name: "Vintage Check Shirt",
      main: "Haunt",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Clt_SHT012.png",
      name: "Logo Aloha Shirt",
      main: "Ink Recovery Up",
      brand: "Zekko",
      stars: 2
    },
    {
      image: "img/gear/Clt_SHT015.png",
      name: "Shirt & Tie",
      main: "Special Saver",
      brand: "Splash Mob",
      stars: 3
    },
    {
      image: "img/gear/Clt_SHT017.png",
      name: "Hula Punk Shirt",
      main: "Ink Saver (Main)",
      brand: "Annaki",
      stars: 2
    },
    {
      image: "img/gear/Clt_SHT018.png",
      name: "Octobowler Shirt",
      main: "Ink Saver (Main)",
      brand: "Krak-On",
      stars: 2
    },
    {
      image: "img/gear/Clt_SHT019.png",
      name: "Inkfall Shirt",
      main: "Special Charge Up",
      brand: "Toni Kensa",
      stars: 2
    },
    {
      image: "img/gear/Clt_SHT020.png",
      name: "Crimson Parashooter",
      main: "Special Charge Up",
      brand: "Annaki",
      stars: 3
    },
    {
      image: "img/gear/Clt_SHT021.png",
      name: "Baby-Jelly Shirt & Tie",
      main: "Cold-Blooded",
      brand: "Splash Mob",
      stars: 2
    },
    {
      image: "img/gear/Clt_SHT022.png",
      name: "Prune Parashooter",
      main: "Ninja Squid",
      brand: "Annaki",
      stars: 3
    },
    {
      image: "img/gear/Clt_VST002.png",
      name: "Dark Urban Vest",
      main: "Cold-Blooded",
      brand: "Firefin",
      stars: 3
    },
    {
      image: "img/gear/Clt_VST003.png",
      name: "Yellow Urban Vest",
      main: "Haunt",
      brand: "Firefin",
      stars: 2
    },
    {
      image: "img/gear/Clt_PRK000.png",
      name: "Camo Zip Hoodie",
      main: "Quick Respawn",
      brand: "Firefin",
      stars: 3
    },
    {
      image: "img/gear/Clt_PRK002.png",
      name: "Zekko Hoodie",
      main: "Ninja Squid",
      brand: "Zekko",
      stars: 2
    },
    {
      image: "img/gear/Clt_PRK004.png",
      name: "Shirt with Blue Hoodie",
      main: "Special Power Up",
      brand: "Splash Mob",
      stars: 2
    },
    {
      image: "img/gear/Clt_PRK005.png",
      name: "Grape Hoodie",
      main: "Quick Respawn",
      brand: "Enperry",
      stars: 1
    },
    {
      image: "img/gear/Clt_PRK006.png",
      name: "Gray Hoodie",
      main: "Sub Power Up",
      brand: "Skalop",
      stars: 2
    },
    {
      image: "img/gear/Clt_COP100.png",
      name: "Squiddor Polo",
      main: "Quick Respawn",
      brand: "Grizzco",
      stars: 3
    },
    {
      image: "img/gear/Clt_COP101.png",
      name: "Anchor Life Vest",
      main: "Quick Respawn",
      brand: "Grizzco",
      stars: 3
    },
    {
      image: "img/gear/Clt_COP102.png",
      name: "Juice Parka",
      main: "Quick Respawn",
      brand: "Grizzco",
      stars: 3
    },
    {
      image: "img/gear/Clt_AMB000.png",
      name: "School Uniform",
      main: "Ink Recovery Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Clt_AMB001.png",
      name: "Samurai Jacket",
      main: "Special Charge Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Clt_AMB002.png",
      name: "Power Armor",
      main: "Quick Respawn",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Clt_AMB003.png",
      name: "School Cardigan",
      main: "Run Speed Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Clt_AMB004.png",
      name: "Squinja Suit",
      main: "Special Saver",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Clt_AMB005.png",
      name: "Power Armor Mk I",
      main: "Ink Resistance Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Clt_MSN000.png",
      name: "Hero Jacket Replica",
      main: "Swim Speed Up",
      brand: "Cuttlegear",
      stars: 2
    },
    {
      image: "img/gear/Clt_MSN004.png",
      name: "Armor Jacket Replica",
      main: "Special Charge Up",
      brand: "Cuttlegear",
      stars: 2
    },
    {
      image: "img/gear/Clt_MSN101.png",
      name: "Hero Hoodie Replica",
      main: "Ink Recovery Up",
      brand: "Cuttlegear",
      stars: 2
    }
  ]

$scope.shoes = [
    {
      image: "img/gear/Shs_FST000.png",
      name: "Cream Basics",
      main: "Special Saver",
      brand: "Krak-On",
      stars: 1
    },
    {
      image: "img/gear/Shs_SLO003.png",
      name: "White Seahorses",
      main: "Ink Recovery Up",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Shs_SLO008.png",
      name: "Strapping Whites",
      main: "Ink Saver (Sub)",
      brand: "Splash Mob",
      stars: 3
    },
    {
      image: "img/gear/Shs_SLO009.png",
      name: "Strapping Reds",
      main: "Ink Resistance Up",
      brand: "Splash Mob",
      stars: 1
    },
    {
      image: "img/gear/Shs_SLO011.png",
      name: "LE Soccer Shoes",
      main: "Ink Resistance Up",
      brand: "Takoroka",
      stars: 3
    },
    {
      image: "img/gear/Shs_SLO012.png",
      name: "Sunny Climbing Shoes",
      main: "Special Saver",
      brand: "Inkline",
      stars: 2
    },
    {
      image: "img/gear/Shs_SLO013.png",
      name: "Birch Climbing Shoes",
      main: "Special Charge Up",
      brand: "Inkline",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHI000.png",
      name: "Red Hi-Horses",
      main: "Ink Saver (Main)",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHI003.png",
      name: "Purple Hi-Horses",
      main: "Special Power Up",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHI004.png",
      name: "Hunter Hi-Tops",
      main: "Ink Recovery Up",
      brand: "Krak-On",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHI006.png",
      name: "Gold Hi-Horses",
      main: "Run Speed Up",
      brand: "Zink",
      stars: 3
    },
    {
      image: "img/gear/Shs_SHI009.png",
      name: "Mawcasins",
      main: "Ink Recovery Up",
      brand: "Splash Mob",
      stars: 2
    },
    {
      image: "img/gear/Shs_SHI011.png",
      name: "Mint Dakroniks",
      main: "Drop Roller",
      brand: "Zink",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHI012.png",
      name: "Black Dakroniks",
      main: "Cold-Blooded",
      brand: "Zink",
      stars: 2
    },
    {
      image: "img/gear/Shs_SHI013.png",
      name: "Piranha Moccasins",
      main: "Stealth Jump",
      brand: "Splash Mob",
      stars: 3
    },
    {
      image: "img/gear/Shs_SHI014.png",
      name: "White Norimaki 750s",
      main: "Swim Speed Up",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Shs_SHI015.png",
      name: "Black Norimaki 750s",
      main: "Special Charge Up",
      brand: "Tentatek",
      stars: 3
    },
    {
      image: "img/gear/Shs_SHI016.png",
      name: "Sunset Orca Hi-Tops",
      main: "Drop Roller",
      brand: "Takoroka",
      stars: 2
    },
    {
      image: "img/gear/Shs_SHI017.png",
      name: "Red & Black Squidkid IV",
      main: "Special Charge Up",
      brand: "Enperry",
      stars: 3
    },
    {
      image: "img/gear/Shs_SHI018.png",
      name: "Blue & Black Squidkid IV",
      main: "Quick Super Jump",
      brand: "Enperry",
      stars: 3
    },
    {
      image: "img/gear/Shs_SHI019.png",
      name: "Gray Sea-Slug Hi-Tops",
      main: "Bomb Defense Up",
      brand: "Tentatek",
      stars: 3
    },
    {
      image: "img/gear/Shs_SHI020.png",
      name: "Orca Hi-Tops",
      main: "Special Saver",
      brand: "Takoroka",
      stars: 2
    },
    {
      image: "img/gear/Shs_SHT000.png",
      name: "Pink Trainers",
      main: "Sub Power Up",
      brand: "Tentatek",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHT001.png",
      name: "Orange Arrows",
      main: "Ink Saver (Main)",
      brand: "Takoroka",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHT002.png",
      name: "Neon Sea Slugs",
      main: "Ink Resistance Up",
      brand: "Tentatek",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHT007.png",
      name: "Purple Sea Slugs",
      main: "Run Speed Up",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Shs_SHT008.png",
      name: "Crazy Arrows",
      main: "Stealth Jump",
      brand: "Takoroka",
      stars: 2
    },
    {
      image: "img/gear/Shs_SHT009.png",
      name: "Black Trainers",
      main: "Quick Respawn",
      brand: "Tentatek",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHT011.png",
      name: "Canary Trainers",
      main: "Quick Super Jump",
      brand: "Tentatek",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHT012.png",
      name: "Yellow-Mesh Sneakers",
      main: "Cold-Blooded",
      brand: "Tentatek",
      stars: 1
    },
    {
      image: "img/gear/Shs_SHT013.png",
      name: "Arrow Pull-Ons",
      main: "Drop Roller",
      brand: "Toni Kensa",
      stars: 3
    },
    {
      image: "img/gear/Shs_SHT014.png",
      name: "Red-Mesh Sneakers",
      main: "Special Power Up",
      brand: "Tentatek",
      stars: 2
    },
    {
      image: "img/gear/Shs_SDL000.png",
      name: "Oyster Clogs",
      main: "Run Speed Up",
      brand: "Krak-On",
      stars: 1
    },
    {
      image: "img/gear/Shs_SDL001.png",
      name: "Choco Clogs",
      main: "Quick Respawn",
      brand: "Krak-On",
      stars: 2
    },
    {
      image: "img/gear/Shs_CFS000.png",
      name: "Blueberry Casuals",
      main: "Ink Saver (Sub)",
      brand: "Krak-On",
      stars: 1
    },
    {
      image: "img/gear/Shs_CFS001.png",
      name: "Plum Casuals",
      main: "Object Shredder",
      brand: "Krak-On",
      stars: 2
    },
    {
      image: "img/gear/Shs_SDL003.png",
      name: "Neon Delta Straps",
      main: "Sub Power Up",
      brand: "Inkline",
      stars: 2
    },
    {
      image: "img/gear/Shs_SDL004.png",
      name: "Black Flip-Flops",
      main: "Object Shredder",
      brand: "Zekko",
      stars: 1
    },
    {
      image: "img/gear/Shs_SDL005.png",
      name: "Snow Delta Straps",
      main: "Swim Speed Up",
      brand: "Inkline",
      stars: 3
    },
    {
      image: "img/gear/Shs_TRS000.png",
      name: "Trail Boots",
      main: "Ink Recovery Up",
      brand: "Inkline",
      stars: 3
    },
    {
      image: "img/gear/Shs_TRS002.png",
      name: "Pro Trail Boots",
      main: "Ink Resistance Up",
      brand: "Inkline",
      stars: 3
    },
    {
      image: "img/gear/Shs_BOT000.png",
      name: "Moto Boots",
      main: "Quick Respawn",
      brand: "Rockenberg",
      stars: 2
    },
    {
      image: "img/gear/Shs_BOT003.png",
      name: "Blue Moto Boots",
      main: "Ink Resistance Up",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Shs_BOT005.png",
      name: "Acerola Rain Boots",
      main: "Run Speed Up",
      brand: "Inkline",
      stars: 1
    },
    {
      image: "img/gear/Shs_BOT006.png",
      name: "Punk Whites",
      main: "Special Charge Up",
      brand: "Rockenberg",
      stars: 2
    },
    {
      image: "img/gear/Shs_BOT012.png",
      name: "Hunting Boots",
      main: "Bomb Defense Up",
      brand: "Splash Mob",
      stars: 3
    },
    {
      image: "img/gear/Shs_BOT013.png",
      name: "Punk Blacks",
      main: "Cold-Blooded",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Shs_SLP000.png",
      name: "Blue Slip-Ons",
      main: "Sub Power Up",
      brand: "Krak-On",
      stars: 1
    },
    {
      image: "img/gear/Shs_LTS000.png",
      name: "White Kicks",
      main: "Swim Speed Up",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Shs_LTS001.png",
      name: "Cherry Kicks",
      main: "Stealth Jump",
      brand: "Rockenberg",
      stars: 2
    },
    {
      image: "img/gear/Shs_LTS004.png",
      name: "Roasted Brogues",
      main: "Bomb Defense Up",
      brand: "Rockenberg",
      stars: 1
    },
    {
      image: "img/gear/Shs_LTS005.png",
      name: "Kid Clams",
      main: "Special Power Up",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Shs_LTS006.png",
      name: "Smoky Wingtips",
      main: "Object Shredder",
      brand: "Rockenberg",
      stars: 3
    },
    {
      image: "img/gear/Shs_AMB000.png",
      name: "School Shoes",
      main: "Ink Saver (Sub)",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Shs_AMB001.png",
      name: "Samurai Shoes",
      main: "Special Power Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Shs_AMB002.png",
      name: "Power Boots",
      main: "Ink Saver (Main)",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Shs_AMB003.png",
      name: "Fringed Loafers",
      main: "Cold-Blooded",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Shs_AMB004.png",
      name: "Squinja Boots",
      main: "Swim Speed Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Shs_AMB005.png",
      name: "Power Boots Mk I",
      main: "Bomb Defense Up",
      brand: "amiibo",
      stars: 2
    },
    {
      image: "img/gear/Shs_MSN000.png",
      name: "Hero Runner Replicas",
      main: "Quick Super Jump",
      brand: "Cuttlegear",
      stars: 2
    },
    {
      image: "img/gear/Shs_MSN004.png",
      name: "Armor Boot Replicas",
      main: "Ink Saver (Main)",
      brand: "Cuttlegear",
      stars: 2
    },
    {
      image: "img/gear/Shs_MSN101.png",
      name: "Hero Snowboots Replicas",
      main: "Ink Saver (Sub)",
      brand: "Cuttlegear",
      stars: 2
    }
  ]

$scope.getGearByName = function(name) {
    return $scope.gear.filter(function(gear) {
      return gear.name == name;
    })[0]
}

$scope.filterByMain = function(set, abilityName) {
  if(abilityName == null) return {primary: set, secondary: []}

  var primary = set.filter(function(hat) {
    return hat.main == abilityName;
  })
  var secondary = set.filter(function(hat) {
      return (hat.brand != "amiibo" && hat.brand != "Cuttlegear" && hat.brand !="Grizzco" && hat.main != abilityName) || (hat.brand == "Grizzco" && hat.main != abilityName && !$scope.getSkillByName(abilityName).exclusive);
    })

  var notEligible = set.filter(function(hat) {
      return !$scope.isPossibleMain(hat,abilityName)
    })
  return {primary, secondary, notEligible};
}

$scope.isPossibleMain = function(item, abilityName) {
  return abilityName == undefined || item.main == abilityName || (item.brand != "amiibo" && item.brand != "Cuttlegear" && item.brand !="Grizzco" && item.main != abilityName) || (item.brand == "Grizzco" && item.main != abilityName && !$scope.getSkillByName(abilityName).exclusive);
}

}
