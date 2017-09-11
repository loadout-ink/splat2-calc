angular.module('splatApp').gear = function($scope) {
  angular.module('splatApp').hats($scope);
  angular.module('splatApp').clothes($scope);
  angular.module('splatApp').shoes($scope);

  $scope.brands = {
    "SquidForce" : {
      localizedName: {
        en: "SquidForce",
        jp: "バトロイカ",
        es: "Kalamas",
        fr: "Kalamarus Rex"
      },
      image: "assets/img/brands/B00.png",
      common: "Ink Resistance Up",
      uncommon: "Ink Saver (Main)"
    },
    "Zink" : {
      localizedName: {
        en: "Zink",
        jp: "アイロニック",
        es: "Tintaz",
        fr: "Leviathus"
      },
      image: "assets/img/brands/B01.png",
      common: "Quick Super Jump",
      uncommon: "Quick Respawn"
    },
    "Krak-On" : {
      localizedName: {
        en: "Krak-On",
        jp: "クラーゲス",
        es: "Meddux",
        fr: "Krakers"
      },
      image: "assets/img/brands/B02.png",
      common: "Swim Speed Up",
      uncommon: "Bomb Defense Up"
    },
    "Rockenberg" : {
      localizedName: {
        en: "Rockenberg",
        jp: "ロッケンベルグ",
        es: "Rockenberg",
        fr: "Iormungand"
      },
      image: "assets/img/brands/B03.png",
      common: "Run Speed Up",
      uncommon: "Swim Speed Up"
    },
    "Zekko" : {
      localizedName: {
        en: "Zekko",
        jp: "エゾッコ",
        es: "Ezko",
        fr: "Ezko"
      },
      image: "assets/img/brands/B04.png",
      common: "Special Saver",
      uncommon: "Special Charge Up"
    },
    "Forge" : {
      localizedName: {
        en: "Forge",
        jp: "フォーリマ",
        es: "Forima",
        fr: "Focus"
      },
      image: "assets/img/brands/B05.png",
      common: "Special Power Up",
      uncommon: "Ink Saver (Sub)"
    },
    "Firefin" : {
      localizedName: {
        en: "Firefin",
        jp: "ホッコリー",
        es: "Chokkor",
        fr: "Friture"
      },
      image: "assets/img/brands/B06.png",
      common: "Ink Saver (Sub)",
      uncommon: "Ink Recovery Up"
    },
    "Skalop" : {
      localizedName: {
        en: "Skalop",
        jp: "ホタックス",
        es: "Skalop",
        fr: "Jack"
      },
      image: "assets/img/brands/B07.png",
      common: "Quick Respawn",
      uncommon: "Special Saver"
    },
    "Splash Mob" : {
      localizedName: {
        en: "Splash Mob",
        jp: "ジモン",
        es: "Jimmon",
        fr: "Gédéon"
      },
      image: "assets/img/brands/B08.png",
      common: "Ink Saver (Main)",
      uncommon: "Run Speed Up"
    },
    "Inkline" : {
      localizedName: {
        en: "Inkline",
        jp: "シグレニ",
        es: "Moluskia",
        fr: "Abysma"
      },
      image: "assets/img/brands/B09.png",
      common: "Bomb Defense Up",
      uncommon: "Cold-Blooded"
    },
    "Tentatek" : {
      localizedName: {
        en: "Tentatek",
        jp: "アロメ",
        es: "Arome",
        fr: "OculR"
      },
      image: "assets/img/brands/B10.png",
      common: "Ink Recovery Up",
      uncommon: "Quick Super Jump"
    },
    "Takoroka" : {
      localizedName: {
        en: "Takoroka",
        jp: "ヤコ",
        es: "Sepioca",
        fr: "Cubic"
      },
      image: "assets/img/brands/B11.png",
      common: "Special Charge Up",
      uncommon: "Special Power Up"
    },
    "Annaki" : {
      localizedName: {
        en: "Annaki",
        jp: "アナアキ",
        es: "Annak",
        fr: "Aroz"
      },
      image: "assets/img/brands/B15.png",
      common: "Cold-Blooded",
      uncommon: "Special Saver"
    },
    "Enperry" : {
      localizedName: {
        en: "Enperry",
        jp: "エンペリー",
        es: "Krakien",
        fr: "DUX"
      },
      image: "assets/img/brands/B16.png",
      common: "Sub Power Up",
      uncommon: "Ink Resistance Up"
    },
    "Toni Kensa" : {
      localizedName: {
        en: "Toni Kensa",
        jp: "タタキケンサキ",
        es: "Tonken",
        fr: "Thony K"
      },
      image: "assets/img/brands/B17.png",
      common: "Cold-Blooded",
      uncommon: "Sub Power Up"
    },
    "Grizzco" : {
      localizedName: {
        en: "Grizzco",
        jp: "クマサン商会",
        es: "Don Oso, S.A.",
        fr: "M. Ours SA"
      },
      image: "assets/img/brands/B97.png"
    },
    "Cuttlegear" : {
      localizedName: {
        en: "Cuttlegear",
        jp: "アタリメイド",
        es: "Obvius",
        fr: "Macalamar"
      },
      image: "assets/img/brands/B98.png"
    },
    "amiibo" : {
      localizedName: {
        en: "amiibo",
        jp: "amiibo",
        es: "amiibo",
        fr: "amiibo"
      },
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
