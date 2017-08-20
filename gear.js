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
      name: "White Headband",
      image: "img/gear/Hed_FST000.png",
      brand: "SquidForce",
      main: "Ink Recovery Up",
      stars: 1,
      price: 300
    },
    {
      name: "Urchins Cap",
      image: "img/gear/Hed_CAP000.png",
      brand: "Skalop",
      main: "Sub Power Up",
      stars: 1,
      price: 600
    },
    {
      name: "Lightweight Cap",
      image: "img/gear/Hed_CAP001.png",
      brand: "Inkline",
      main: "Swim Speed Up",
      stars: 1,
      price: 800
    },
    {
      name: "Takoroka Mesh",
      image: "img/gear/Hed_CAP002.png",
      brand: "Takoroka",
      main: "Bomb Defense Up",
      stars: 1,
      price: 400
    },
    {
      name: "Squidvader Cap",
      image: "img/gear/Hed_CAP005.png",
      brand: "Skalop",
      main: "Special Charge Up",
      stars: 1,
      price: 1300
    },
    {
      name: "Camo Mesh",
      image: "img/gear/Hed_CAP006.png",
      brand: "Firefin",
      main: "Swim Speed Up",
      stars: 1,
      price: 1400
    },
    {
      name: "Five-Panel Cap",
      image: "img/gear/Hed_CAP007.png",
      brand: "Zekko",
      main: "Comeback",
      stars: 2,
      price: 1800
    },
    {
      name: "Backwards Cap",
      image: "img/gear/Hed_CAP009.png",
      brand: "Zekko",
      main: "Quick Respawn",
      stars: 1,
      price: 700
    },
    {
      name: "Cycle King Cap",
      image: "img/gear/Hed_CAP014.png",
      brand: "Tentatek",
      main: "Bomb Defense Up",
      stars: 2,
      price: 2400
    },
    {
      name: "King Flip Mesh",
      image: "img/gear/Hed_CAP019.png",
      brand: "Enperry",
      main: "Run Speed Up",
      stars: 2,
      price: 3200
    },
    {
      name: "Hickory Work Cap",
      image: "img/gear/Hed_CAP020.png",
      brand: "Krak-On",
      main: "Special Power Up",
      stars: 3,
      price: 8700
    },
    {
      name: "Jellyvader Cap",
      image: "img/gear/Hed_CAP023.png",
      brand: "Skalop",
      main: "Ink Saver (Sub)",
      stars: 3,
      price: 10000
    },
    {
      name: "Bobble Hat",
      image: "img/gear/Hed_NCP000.png",
      brand: "Splash Mob",
      main: "Quick Super Jump",
      stars: 2,
      price: 2000
    },
    {
      name: "Striped Beanie",
      image: "img/gear/Hed_NCP002.png",
      brand: "Splash Mob",
      main: "Opening Gambit",
      stars: 1,
      price: 900
    },
    {
      name: "Special Forces Beret",
      image: "img/gear/Hed_NCP004.png",
      brand: "Forge",
      main: "Opening Gambit",
      stars: 3,
      price: 9700
    },
    {
      name: "Knitted Hat",
      image: "img/gear/Hed_NCP008.png",
      brand: "Firefin",
      main: "Ink Resistance Up",
      stars: 1,
      price: 1400
    },
    {
      name: "Annaki Beret",
      image: "img/gear/Hed_NCP009.png",
      brand: "Annaki",
      main: "Ink Resistance Up",
      stars: 3,
      price: 11500
    },
    {
      name: "Retro Specs",
      image: "img/gear/Hed_EYE000.png",
      brand: "Splash Mob",
      main: "Quick Respawn",
      stars: 1,
      price: 500
    },
    {
      name: "Pilot Goggles",
      image: "img/gear/Hed_EYE002.png",
      brand: "Forge",
      main: "Sub Power Up",
      stars: 2,
      price: 5500
    },
    {
      name: "Tinted Shades",
      image: "img/gear/Hed_EYE003.png",
      brand: "Zekko",
      main: "Last-Ditch Effort",
      stars: 1,
      price: 350
    },
    {
      name: "Snorkel Mask",
      image: "img/gear/Hed_EYE005.png",
      brand: "Forge",
      main: "Ink Saver (Sub)",
      stars: 2,
      price: 3000
    },
    {
      name: "Fake Contacts",
      image: "img/gear/Hed_EYE007.png",
      brand: "Tentatek",
      main: "Special Charge Up",
      stars: 2,
      price: 2000
    },
    {
      name: "18K Aviators",
      image: "img/gear/Hed_EYE008.png",
      brand: "Rockenberg",
      main: "Last-Ditch Effort",
      stars: 3,
      price: 12000
    },
    {
      name: "Half-Rim Glasses",
      image: "img/gear/Hed_EYE011.png",
      brand: "Splash Mob",
      main: "Special Power Up",
      stars: 2,
      price: 4100
    },
    {
      name: "Safari Hat",
      image: "img/gear/Hed_HAT000.png",
      brand: "Forge",
      main: "Last-Ditch Effort",
      stars: 2,
      price: 2300
    },
    {
      name: "Camping Hat",
      image: "img/gear/Hed_HAT002.png",
      brand: "Inkline",
      main: "Special Power Up",
      stars: 1,
      price: 800
    },
    {
      name: "Blowfish Bell Hat",
      image: "img/gear/Hed_HAT003.png",
      brand: "Firefin",
      main: "Ink Recovery Up",
      stars: 1,
      price: 850
    },
    {
      name: "Bamboo Hat",
      image: "img/gear/Hed_HAT004.png",
      brand: "Inkline",
      main: "Ink Saver (Main)",
      stars: 2,
      price: 2200
    },
    {
      name: "Straw Boater",
      image: "img/gear/Hed_HAT005.png",
      brand: "Skalop",
      main: "Quick Super Jump",
      stars: 1,
      price: 550
    },
    {
      name: "Bucket Hat",
      image: "img/gear/Hed_HAT008.png",
      brand: "SquidForce",
      main: "Special Saver",
      stars: 1,
      price: 400
    },
    {
      name: "Patched Hat",
      image: "img/gear/Hed_HAT009.png",
      brand: "Skalop",
      main: "Cold-Blooded",
      stars: 2,
      price: 3600
    },
    {
      name: "Studio Headphones",
      image: "img/gear/Hed_HDP000.png",
      brand: "Forge",
      main: "Ink Saver (Main)",
      stars: 2,
      price: 2800
    },
    {
      name: "Noise Cancelers",
      image: "img/gear/Hed_HDP002.png",
      brand: "Forge",
      main: "Quick Respawn",
      stars: 3,
      price: 9200
    },
    {
      name: "Squidfin Hook Cans",
      image: "img/gear/Hed_HDP003.png",
      brand: "Forge",
      main: "Ink Resistance Up",
      stars: 2,
      price: 3800
    },
    {
      name: "FishFry Visor",
      image: "img/gear/Hed_VIS001.png",
      brand: "Firefin",
      main: "Special Charge Up",
      stars: 1,
      price: 500
    },
    {
      name: "Sun Visor",
      image: "img/gear/Hed_VIS002.png",
      brand: "Tentatek",
      main: "Sub Power Up",
      stars: 2,
      price: 2600
    },
    {
      name: "Takoroka Visor",
      image: "img/gear/Hed_VIS003.png",
      brand: "Takoroka",
      main: "Quick Super Jump",
      stars: 3,
      price: 7500
    },
    {
      name: "Bike Helmet",
      image: "img/gear/Hed_MET000.png",
      brand: "Skalop",
      main: "Ink Recovery Up",
      stars: 2,
      price: 4800
    },
    {
      name: "Visor Skate Helmet",
      image: "img/gear/Hed_MET005.png",
      brand: "Skalop",
      main: "Last-Ditch Effort",
      stars: 3,
      price: 8000
    },
    {
      name: "MTB Helmet",
      image: "img/gear/Hed_MET006.png",
      brand: "Zekko",
      main: "Tenacity",
      stars: 3,
      price: 10500
    },
    {
      name: "Hockey Helmet",
      image: "img/gear/Hed_MET007.png",
      brand: "Forge",
      main: "Cold-Blooded",
      stars: 3,
      price: 9900
    },
    {
      name: "Paintball Mask",
      image: "img/gear/Hed_MSK001.png",
      brand: "Forge",
      main: "Comeback",
      stars: 3,
      price: 10000
    },
    {
      name: "Skull Bandana",
      image: "img/gear/Hed_MSK003.png",
      brand: "Forge",
      main: "Special Saver",
      stars: 3,
      price: 7800
    },
    {
      name: "Painter's Mask",
      image: "img/gear/Hed_MSK004.png",
      brand: "SquidForce",
      main: "Cold-Blooded",
      stars: 2,
      price: 4500
    },
    {
      name: "Annaki Mask",
      image: "img/gear/Hed_MSK005.png",
      brand: "Annaki",
      main: "Opening Gambit",
      stars: 2,
      price: 3600
    },
    {
      name: "Squid Facemask",
      image: "img/gear/Hed_MSK007.png",
      brand: "SquidForce",
      main: "Ink Saver (Main)",
      stars: 1,
      price: 300
    },
    {
      name: "Firefin Facemask",
      image: "img/gear/Hed_MSK008.png",
      brand: "Firefin",
      main: "Run Speed Up",
      stars: 1,
      price: 650
    },
    {
      name: "King Facemask",
      image: "img/gear/Hed_MSK009.png",
      brand: "Enperry",
      main: "Ink Saver (Sub)",
      stars: 1,
      price: 500
    },
    {
      name: "Squash Headband",
      image: "img/gear/Hed_HBD002.png",
      brand: "Zink",
      main: "Special Saver",
      stars: 1,
      price: 400
    },
    {
      name: "Tennis Headband",
      image: "img/gear/Hed_HBD003.png",
      brand: "Tentatek",
      main: "Comeback",
      stars: 1,
      price: 300
    },
    {
      name: "Soccer Headband",
      image: "img/gear/Hed_HBD005.png",
      brand: "Tentatek",
      main: "Tenacity",
      stars: 2,
      price: 3000
    },
    {
      name: "Squid Hairclip",
      image: "img/gear/Hed_AMB000.png",
      brand: "amiibo",
      main: "Swim Speed Up",
      stars: 2,
      price: 0
    },
    {
      name: "Samurai Helmet",
      image: "img/gear/Hed_AMB001.png",
      brand: "amiibo",
      main: "Quick Super Jump",
      stars: 2,
      price: 0
    },
    {
      name: "Power Mask",
      image: "img/gear/Hed_AMB002.png",
      brand: "amiibo",
      main: "Bomb Defense Up",
      stars: 2,
      price: 0
    },
    {
      name: "Squid Clip-Ons",
      image: "img/gear/Hed_AMB003.png",
      brand: "amiibo",
      main: "Opening Gambit",
      stars: 2,
      price: 0
    },
    {
      name: "Squinja Mask",
      image: "img/gear/Hed_AMB004.png",
      brand: "amiibo",
      main: "Quick Respawn",
      stars: 2,
      price: 0
    },
    {
      name: "Power Mask Mk I",
      image: "img/gear/Hed_AMB005.png",
      brand: "amiibo",
      main: "Ink Resistance Up",
      stars: 2,
      price: 0
    },
    {
      name: "Hero Headset Replica",
      image: "img/gear/Hed_MSN000.png",
      brand: "Cuttlegear",
      main: "Run Speed Up",
      stars: 2,
      price: 0
    },
    {
      name: "Armor Helmet Replica",
      image: "img/gear/Hed_MSN004.png",
      brand: "Cuttlegear",
      main: "Tenacity",
      stars: 2,
      price: 0
    },
    {
      name: "Hero Headphones Replica",
      image: "img/gear/Hed_MSN101.png",
      brand: "Cuttlegear",
      main: "Special Saver",
      stars: 2,
      price: 0
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
      return hat.brand != "amiibo" && hat.brand != "Cuttlegear" && hat.main != abilityName;
    })
  return {primary, secondary};
}

}
