angular.module('splatApp').gear = function($scope) {
  angular.module('splatApp').hats($scope);
  angular.module('splatApp').clothes($scope);
  angular.module('splatApp').shoes($scope);

  $scope.brands = {
    "SquidForce" : {
      localizedName: {
        en_US: "SquidForce",
        ja_JP: "バトロイカ",
        es_ES: "Kalamas",
        fr_FR: "Kalamarus Rex"
      },
      image: "../common/assets/img/brands/B00.png",
      common: "Ink Resistance Up",
      uncommon: "Ink Saver (Main)"
    },
    "Zink" : {
      localizedName: {
        en_US: "Zink",
        ja_JP: "アイロニック",
        es_ES: "Tintaz",
        fr_FR: "Leviathus"
      },
      image: "../common/assets/img/brands/B01.png",
      common: "Quick Super Jump",
      uncommon: "Quick Respawn"
    },
    "Krak-On" : {
      localizedName: {
        en_US: "Krak-On",
        ja_JP: "クラーゲス",
        es_ES: "Meddux",
        fr_FR: "Krakers"
      },
      image: "../common/assets/img/brands/B02.png",
      common: "Swim Speed Up",
      uncommon: "Bomb Defense Up"
    },
    "Rockenberg" : {
      localizedName: {
        en_US: "Rockenberg",
        ja_JP: "ロッケンベルグ",
        es_ES: "Rockenberg",
        fr_FR: "Iormungand"
      },
      image: "../common/assets/img/brands/B03.png",
      common: "Run Speed Up",
      uncommon: "Swim Speed Up"
    },
    "Zekko" : {
      localizedName: {
        en_US: "Zekko",
        ja_JP: "エゾッコ",
        es_ES: "Ezko",
        fr_FR: "Ezko"
      },
      image: "../common/assets/img/brands/B04.png",
      common: "Special Saver",
      uncommon: "Special Charge Up"
    },
    "Forge" : {
      localizedName: {
        en_US: "Forge",
        ja_JP: "フォーリマ",
        es_ES: "Forima",
        fr_FR: "Focus"
      },
      image: "../common/assets/img/brands/B05.png",
      common: "Special Power Up",
      uncommon: "Ink Saver (Sub)"
    },
    "Firefin" : {
      localizedName: {
        en_US: "Firefin",
        ja_JP: "ホッコリー",
        es_ES: "Chokkor",
        fr_FR: "Friture"
      },
      image: "../common/assets/img/brands/B06.png",
      common: "Ink Saver (Sub)",
      uncommon: "Ink Recovery Up"
    },
    "Skalop" : {
      localizedName: {
        en_US: "Skalop",
        ja_JP: "ホタックス",
        es_ES: "Skalop",
        fr_FR: "Jack"
      },
      image: "../common/assets/img/brands/B07.png",
      common: "Quick Respawn",
      uncommon: "Special Saver"
    },
    "Splash Mob" : {
      localizedName: {
        en_US: "Splash Mob",
        ja_JP: "ジモン",
        es_ES: "Jimmon",
        fr_FR: "Gédéon"
      },
      image: "../common/assets/img/brands/B08.png",
      common: "Ink Saver (Main)",
      uncommon: "Run Speed Up"
    },
    "Inkline" : {
      localizedName: {
        en_US: "Inkline",
        ja_JP: "シグレニ",
        es_ES: "Moluskia",
        fr_FR: "Abysma"
      },
      image: "../common/assets/img/brands/B09.png",
      common: "Bomb Defense Up",
      uncommon: "Cold-Blooded"
    },
    "Tentatek" : {
      localizedName: {
        en_US: "Tentatek",
        ja_JP: "アロメ",
        es_ES: "Arome",
        fr_FR: "OculR"
      },
      image: "../common/assets/img/brands/B10.png",
      common: "Ink Recovery Up",
      uncommon: "Quick Super Jump"
    },
    "Takoroka" : {
      localizedName: {
        en_US: "Takoroka",
        ja_JP: "ヤコ",
        es_ES: "Sepioca",
        fr_FR: "Cubic"
      },
      image: "../common/assets/img/brands/B11.png",
      common: "Special Charge Up",
      uncommon: "Special Power Up"
    },
    "Annaki" : {
      localizedName: {
        en_US: "Annaki",
        ja_JP: "アナアキ",
        es_ES: "Annak",
        fr_FR: "Aroz"
      },
      image: "../common/assets/img/brands/B15.png",
      common: "Cold-Blooded",
      uncommon: "Special Saver"
    },
    "Enperry" : {
      localizedName: {
        en_US: "Enperry",
        ja_JP: "エンペリー",
        es_ES: "Krakien",
        fr_FR: "DUX"
      },
      image: "../common/assets/img/brands/B16.png",
      common: "Sub Power Up",
      uncommon: "Ink Resistance Up"
    },
    "Toni Kensa" : {
      localizedName: {
        en_US: "Toni Kensa",
        ja_JP: "タタキケンサキ",
        es_ES: "Tonken",
        fr_FR: "Thony K"
      },
      image: "../common/assets/img/brands/B17.png",
      common: "Cold-Blooded",
      uncommon: "Sub Power Up"
    },
    "Grizzco" : {
      localizedName: {
        en_US: "Grizzco",
        ja_JP: "クマサン商会",
        es_ES: "Don Oso, S.A.",
        fr_FR: "M. Ours SA"
      },
      image: "../common/assets/img/brands/B97.png"
    },
    "Cuttlegear" : {
      localizedName: {
        en_US: "Cuttlegear",
        ja_JP: "アタリメイド",
        es_ES: "Obvius",
        fr_FR: "Macalamar"
      },
      image: "../common/assets/img/brands/B98.png"
    },
    "amiibo" : {
      localizedName: {
        en_US: "amiibo",
        ja_JP: "amiibo",
        es_ES: "amiibo",
        fr_FR: "amiibo"
      },
      image: "../common/assets/img/brands/B99.png"
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
