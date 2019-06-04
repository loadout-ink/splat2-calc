angular.module('splatApp').gear = function($scope) {
  angular.module('splatApp').hats($scope);
  angular.module('splatApp').clothes($scope);
  angular.module('splatApp').shoes($scope);

  $scope.brands = {
    "SquidForce" : {
      localizedName: {
        "ja_JP": "バトロイカ",
        "en_US": "SquidForce",
        "en_GB": "SquidForce",
        "es_ES": "Kalamas",
        "es_MX": "Kalamas",
        "fr_FR": "Kalamarus Rex",
        "fr_CA": "Kalamarus",
        "de_DE": "TintactiX",
        "nl_NL": "SquidForce",
        "ru_RU": "Кальмари",
        "it_IT": "CalamaX"
      },
      image: "../common/assets/img/brands/B00.png",
      common: "Ink Resistance Up",
      uncommon: "Ink Saver (Main)"
    },
    "Zink" : {
      localizedName: {
        "ja_JP": "アイロニック",
        "en_US": "Zink",
        "en_GB": "Zink",
        "es_ES": "Tintaz",
        "es_MX": "Tintaz",
        "fr_FR": "Leviathus",
        "fr_FR": "Leviathus",
        "de_DE": "Sagitron",
        "nl_NL": "Zink",
        "ru_RU": "Шпротус",
        "it_IT": "Totanic"
      },
      image: "../common/assets/img/brands/B01.png",
      common: "Quick Super Jump",
      uncommon: "Quick Respawn"
    },
    "Krak-On" : {
      localizedName: {
        "ja_JP": "クラーゲス",
        "en_US": "Krak-On",
        "en_GB": "Krak-On",
        "es_ES": "Meddux",
        "es_MX": "Meddux",
        "fr_FR": "Krakers",
        "fr_CA": "Krakeurs",
        "de_DE": "Medusa",
        "nl_NL": "Krak-On",
        "ru_RU": "Кра-Кен",
        "it_IT": "Cnidarya"
      },
      image: "../common/assets/img/brands/B02.png",
      common: "Swim Speed Up",
      uncommon: "Bomb Defense Up DX"
    },
    "Rockenberg" : {
      localizedName: {
        "ja_JP": "ロッケンベルグ",
        "en_US": "Rockenberg",
        "en_GB": "Rockenberg",
        "es_ES": "Rockenberg",
        "es_MX": "Rockenberg",
        "fr_FR": "Iormungand",
        "fr_CA": "Iormungand",
        "de_DE": "Rockberg",
        "nl_NL": "Rockenberg",
        "ru_RU": "Угрок",
        "it_IT": "Rockenburg"
      },
      image: "../common/assets/img/brands/B03.png",
      common: "Run Speed Up",
      uncommon: "Swim Speed Up"
    },
    "Zekko" : {
      localizedName: {
        "ja_JP": "エゾッコ",
        "en_US": "Zekko",
        "en_GB": "Zekko",
        "es_ES": "Ezko",
        "es_MX": "Zekko",
        "fr_FR": "Ezko",
        "fr_CA": "Ezko",
        "de_DE": "Zekko",
        "nl_NL": "Zekko",
        "ru_RU": "Йожко",
        "it_IT": "Ezko"
      },
      image: "../common/assets/img/brands/B04.png",
      common: "Special Saver",
      uncommon: "Special Charge Up"
    },
    "Forge" : {
      localizedName: {
        "ja_JP": "フォーリマ",
        "en_US": "Forge",
        "en_GB": "Forge",
        "es_ES": "Forima",
        "es_MX": "Forima",
        "fr_FR": "Focus",
        "fr_CA": "Fosia",
        "de_DE": "Focus",
        "nl_NL": "Forge",
        "ru_RU": "Блиц",
        "it_IT": "Fortia"
      },
      image: "../common/assets/img/brands/B05.png",
      common: "Special Power Up",
      uncommon: "Ink Saver (Sub)"
    },
    "Firefin" : {
      localizedName: {
        "ja_JP": "ホッコリー",
        "en_US": "Firefin",
        "en_GB": "Firefin",
        "es_ES": "Chokkor",
        "es_MX": "Shachi",
        "fr_FR": "Friture",
        "fr_CA": "Arki",
        "de_DE": "Rilax",
        "nl_NL": "Firefin",
        "ru_RU": "Фритюр",
        "it_IT": "Torryd"
      },
      image: "../common/assets/img/brands/B06.png",
      common: "Ink Saver (Sub)",
      uncommon: "Ink Recovery Up"
    },
    "Skalop" : {
      localizedName: {
        "ja_JP": "ホタックス",
        "en_US": "Skalop",
        "en_GB": "Skalop",
        "es_ES": "Skalop",
        "es_MX": "Skalop",
        "fr_FR": "Jack",
        "fr_CA": "P. Tonk",
        "de_DE": "Jakomu",
        "nl_NL": "Skalop",
        "ru_RU": "Гребершко",
        "it_IT": "Capasaint"
      },
      image: "../common/assets/img/brands/B07.png",
      common: "Quick Respawn",
      uncommon: "Special Saver"
    },
    "Splash Mob" : {
      localizedName: {
        "ja_JP": "ジモン",
        "en_US": "Splash Mob",
        "en_GB": "Splash Mob",
        "es_ES": "Jimmon",
        "es_MX": "Tinta comunal",
        "fr_FR": "Gédéon",
        "fr_CA": "Fréma",
        "de_DE": "Gian",
        "nl_NL": "Splash Mob",
        "ru_RU": "Морлюкс",
        "it_IT": "Chimmon"
      },
      image: "../common/assets/img/brands/B08.png",
      common: "Ink Saver (Main)",
      uncommon: "Run Speed Up"
    },
    "Inkline" : {
      localizedName: {
        "ja_JP": "シグレニ",
        "en_US": "Inkline",
        "en_GB": "Inkline",
        "es_ES": "Moluskia",
        "es_MX": "Moluskia",
        "fr_FR": "Abysma",
        "fr_FR": "Abysma",
        "de_DE": "Alpomar",
        "nl_NL": "Inkline",
        "ru_RU": "Волногор",
        "it_IT": "Maremont"
      },
      image: "../common/assets/img/brands/B09.png",
      common: "Bomb Defense Up DX",
      uncommon: "Cold-Blooded"
    },
    "Tentatek" : {
      localizedName: {
        "ja_JP": "アロメ",
        "en_US": "Tentatek",
        "en_GB": "Tentatek",
        "es_ES": "Arome",
        "es_MX": "Tentáctica",
        "fr_FR": "OculR",
        "fr_CA": "Tentatek",
        "de_DE": "Tentatek",
        "nl_NL": "Tentatek",
        "ru_RU": "Щуччи",
        "it_IT": "Arome"
      },
      image: "../common/assets/img/brands/B10.png",
      common: "Ink Recovery Up",
      uncommon: "Quick Super Jump"
    },
    "Takoroka" : {
      localizedName: {
        "ja_JP": "ヤコ",
        "en_US": "Takoroka",
        "en_GB": "Takoroka",
        "es_ES": "Sepioca",
        "es_MX": "Pulpicka",
        "fr_FR": "Cubic",
        "fr_CA": "Pionic",
        "de_DE": "Kalamati",
        "nl_NL": "Takoroka",
        "ru_RU": "Рыбок",
        "it_IT": "Sepia"
      },
      image: "../common/assets/img/brands/B11.png",
      common: "Special Charge Up",
      uncommon: "Special Power Up"
    },
    "Annaki" : {
      localizedName: {
        "ja_JP": "アナアキ",
        "en_US": "Annaki",
        "en_GB": "Annaki",
        "es_ES": "Annak",
        "es_MX": "Annak",
        "fr_FR": "Aroz",
        "fr_CA": "Aroz",
        "de_DE": "Annaki",
        "nl_NL": "Annaki",
        "ru_RU": "Панкасиус",
        "it_IT": "Annak"
      },
      image: "../common/assets/img/brands/B15.png",
      common: "Main Power Up",
      uncommon: "Special Saver"
    },
    "Enperry" : {
      localizedName: {
        "ja_JP": "エンペリー",
        "en_US": "Enperry",
        "en_GB": "Enperry",
        "es_ES": "Krakien",
        "es_MX": "Emperi",
        "fr_FR": "DUX",
        "fr_CA": "DUX",
        "de_DE": "Enperry",
        "nl_NL": "Enperry",
        "ru_RU": "Кальмар Кляр",
        "it_IT": "Imperial"
      },
      image: "../common/assets/img/brands/B16.png",
      common: "Sub Power Up",
      uncommon: "Ink Resistance Up"
    },
    "Toni Kensa" : {
      localizedName: {
        "ja_JP": "タタキケンサキ",
        "en_US": "Toni Kensa",
        "en_GB": "Toni Kensa",
        "es_ES": "Tonken",
        "es_MX": "Tonken",
        "fr_FR": "Thony K",
        "fr_CA": "Thony K",
        "de_DE": "Toni Kensa",
        "nl_NL": "Toni Kensa",
        "ru_RU": "Сушаки Кусаки",
        "it_IT": "Nero Marlin"
      },
      image: "../common/assets/img/brands/B17.png",
      common: "Main Power Up",
      uncommon: "Sub Power Up"
    },
    "Grizzco" : {
      localizedName: {
        "ja_JP": "クマサン商会",
        "en_US": "Grizzco",
        "en_GB": "Grizzco",
        "es_ES": "Don Oso, S.A.",
        "es_MX": "Don Oso, S.A.",
        "fr_FR": "M. Ours SA",
        "fr_CA": "M. Ours SA",
        "de_DE": "Bär GmbH",
        "nl_NL": "Beer & Co",
        "ru_RU": "Beer & Co",
        "it_IT": "Ursus & Co"
      },
      image: "../common/assets/img/brands/B97.png"
    },
    "Cuttlegear" : {
      localizedName: {
        "ja_JP": "アタリメイド",
        "en_US": "Cuttlegear",
        "en_GB": "Cuttlegear",
        "es_ES": "Obvius",
        "es_MX": "Sepichón",
        "fr_FR": "Macalamar",
        "fr_CA": "Radmaré",
        "de_DE": "Kuttelkorps",
        "nl_NL": "Kraakwaar",
        "ru_RU": "Каракат",
        "it_IT": "Krakensen"
      },
      image: "../common/assets/img/brands/B98.png"
    },
    "amiibo" : {
      localizedName: {
        "ja_JP": "amiibo",
        "en_US": "amiibo",
        "en_GB": "amiibo",
        "es_ES": "amiibo",
        "es_MX": "amiibo",
        "fr_FR": "amiibo",
        "fr_CA": "amiibo",
        "de_DE": "amiibo",
        "nl_NL": "amiibo",
        "ru_RU": "amiibo",
        "it_IT": "amiibo"
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
    return abilityName == undefined || item.main == abilityName || (item.brand != "amiibo" && item.brand != "Cuttlegear" && item.brand !="Grizzco" && item.main != abilityName) || (item.brand == "Grizzco" && item.main != abilityName && !$scope.getSkillByName(abilityName).exclusive) || (item.splatnetShop != null && item.splatnetShop);
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
