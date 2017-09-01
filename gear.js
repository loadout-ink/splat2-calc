angular.module('splatApp').gear = function($scope) {
  angular.module('splatApp').hats($scope);
  angular.module('splatApp').clothes($scope);
  angular.module('splatApp').shoes($scope);

  $scope.brands = {
    "SquidForce" : {
      image: "assets/img/brands/B00.png",
      common: "Ink Resistance Up",
      uncommon: "Ink Saver (Main)"
    },
    "Zink" : {
      image: "assets/img/brands/B01.png",
      common: "Quick Super Jump",
      uncommon: "Quick Respawn"
    },
    "Krak-On" : {
      image: "assets/img/brands/B02.png",
      common: "Swim Speed Up",
      uncommon: "Bomb Defense Up"
    },
    "Rockenberg" : {
      image: "assets/img/brands/B03.png",
      common: "Run Speed Up",
      uncommon: "Swim Speed Up"
    },
    "Zekko" : {
      image: "assets/img/brands/B04.png",
      common: "Special Saver",
      uncommon: "Special Charge Up"
    },
    "Forge" : {
      image: "assets/img/brands/B05.png",
      common: "Special Power Up",
      uncommon: "Ink Saver (Sub)"
    },
    "Firefin" : {
      image: "assets/img/brands/B06.png",
      common: "Ink Saver (Sub)",
      uncommon: "Ink Recovery Up"
    },
    "Skalop" : {
      image: "assets/img/brands/B07.png",
      common: "Quick Respawn",
      uncommon: "Special Saver"
    },
    "Splash Mob" : {
      image: "assets/img/brands/B08.png",
      common: "Ink Saver (Main)",
      uncommon: "Run Speed Up"
    },
    "Inkline" : {
      image: "assets/img/brands/B09.png",
      common: "Bomb Defense Up",
      uncommon: "Cold-Blooded"
    },
    "Tentatek" : {
      image: "assets/img/brands/B10.png",
      common: "Ink Recovery Up",
      uncommon: "Quick Super Jump"
    },
    "Takoroka" : {
      image: "assets/img/brands/B11.png",
      common: "Special Charge Up",
      uncommon: "Special Power Up"
    },
    "Annaki" : {
      image: "assets/img/brands/B15.png",
      common: "Cold-Blooded",
      uncommon: "Special Saver"
    },
    "Enperry" : {
      image: "assets/img/brands/B16.png",
      common: "Sub Power Up",
      uncommon: "Ink Resistance Up"
    },
    "Toni Kensa" : {
      image: "assets/img/brands/B17.png",
      common: "Cold-Blooded",
      uncommon: "Sub Power Up"
    },
    "Grizzco" : {
      image: "assets/img/brands/B97.png"
    },
    "Cuttlegear" : {
      image: "assets/img/brands/B98.png"
    },
    "amiibo" : {
      image: "assets/img/brands/B99.png"
    }
  }

  $scope.filterByMain = function(set, abilityName) {
    if(abilityName == null) return {primary: set, secondary: []}

    var primary = set.filter(function(item) {
      return item.main == abilityName;
    })
    var secondary = set.filter(function(item) {
      return (item.brand != "amiibo" && item.brand != "Cuttlegear" && item.brand !="Grizzco" && item.main != abilityName) || (item.brand == "Grizzco" && item.main != abilityName && !$scope.getSkillByName(abilityName).exclusive);
    })

    var notEligible = set.filter(function(item) {
      return !$scope.isPossibleMain(item,abilityName)
    })
    return {primary, secondary, notEligible};
  }

  $scope.isPossibleMain = function(item, abilityName) {
    return abilityName == undefined || item.main == abilityName || (item.brand != "amiibo" && item.brand != "Cuttlegear" && item.brand !="Grizzco" && item.main != abilityName) || (item.brand == "Grizzco" && item.main != abilityName && !$scope.getSkillByName(abilityName).exclusive);
  }

  $scope.getHatById = function(id) {
    return $scope.hats.filter(function(item) {
      return item.id == id
    })[0]
  }
  $scope.getClothesById = function(id) {
    return $scope.clothes.filter(function(item) {
      return item.id == id
    })[0]
  }
  $scope.getShoesById = function(id) {
    return $scope.shoes.filter(function(item) {
      return item.id == id
    })[0]
  }
}
