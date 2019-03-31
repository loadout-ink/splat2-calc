angular.module('splatApp').weapons = function($scope) {
  $scope.weaponSets = [
    {
      "type": "Shooters",
      "localizedName": {
        "ja_JP": "シューター",
        "en_US": "Shooters",
        "en_GB": "Shooters",
        "es_ES": "Lanzatintas",
        "es_MX": "Rociadors",
        "fr_FR": "Lanceur",
        "fr_CA": "Lanceur",
        "de_DE": "Kleckser",
        "it_IT": "Armi a ripetizione",
        "nl_NL": "Spetter",
        "ru_RU": "Armi a ripetizione",
        "zh_HK": "シューター (普通槍)"
      },
      "id": 0,
      "weapons": [
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Short_00.png",
          "name": "Sploosh-o-matic",
          "localizedName": {
            "ja_JP": "ボールドマーカー",
            "en_US": "Sploosh-o-matic",
            "en_GB": "Sploosh-o-matic",
            "es_ES": "Marcador",
            "es_MX": "Marcador grueso",
            "fr_FR": "Marqueur lourd",
            "fr_CA": "Marqueur lourd",
            "de_DE": "Disperser",
            "it_IT": "Marker",
            "nl_NL": "Spettertuit",
            "ru_RU": "Плюхотрон"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Splashdown",
          "level": 10,
          "specialCost": 160,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "High",
          "baseSpeed": 0.8,
          "price": 9700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 12,
            "{{ SHELDON_DAMAGE | translate }}": 52,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 0
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Short_01.png",
          "name": "Neo Sploosh-o-matic",
          "localizedName": {
            "ja_JP": "ボールドマーカーネオ",
            "en_US": "Neo Sploosh-o-matic",
            "en_GB": "Neo Sploosh-o-matic",
            "es_ES": "Marcador neo",
            "es_MX": "Marcador grueso neo",
            "fr_FR": "Marqueur lourd Néo",
            "fr_CA": "Marqueur lourd néo",
            "de_DE": "Disperser Neo",
            "it_IT": "Marker neo",
            "nl_NL": "Spettertuit Neo",
            "ru_RU": "Плюхотрон «Нео»"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Tenta Missiles",
          "level": 18,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "High",
          "baseSpeed": 0.8,
          "price": 12200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 12,
            "{{ SHELDON_DAMAGE | translate }}": 52,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 1
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_First_00.png",
          "name": "Splattershot Jr.",
          "localizedName": {
            "ja_JP": "わかばシューター",
            "en_US": "Splattershot Jr.",
            "en_GB": "Splattershot Jr.",
            "es_ES": "Lanzatintas novato",
            "es_MX": "Rociador básico",
            "fr_FR": "Liquidateur Jr.",
            "fr_CA": "Liquéficateur ultra",
            "de_DE": "Junior-Kleckser",
            "it_IT": "Sparacolore recluta",
            "nl_NL": "Superspetter jr.",
            "ru_RU": "Каплестрел-У"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Ink Armor",
          "level": 1,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 0.5,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 0,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 2
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_First_01.png",
          "name": "Custom Splattershot Jr.",
          "localizedName": {
            "ja_JP": "もみじシューター",
            "en_US": "Custom Splattershot Jr.",
            "en_GB": "Custom Splattershot Jr.",
            "es_ES": "Lanzatintas novato B",
            "es_MX": "Rociador básico adaptado",
            "fr_FR": "Liquidateur Sr.",
            "fr_CA": "Liquéficateur ultra modifié",
            "de_DE": "Junior-Kleckser Plus",
            "it_IT": "Sparacolore logo",
            "nl_NL": "Gemodde Superspetter jr.",
            "ru_RU": "Каплестрел-У 2.0"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Ink Storm",
          "level": 4,
          "specialCost": 160,
          "inkSaver": "Middle",
          "inkPerShot": 0.5,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 1900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 3
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_First_02.png",
          "name": "Kensa Splattershot Jr.",
          "localizedName": {
            "ja_JP": "おちばシューター",
            "en_US": "Kensa Splattershot Jr."
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Torpedo",
          "special": "Bubble Blower",
          "level": 9,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 0.5,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 8700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 4
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Precision_00.png",
          "name": "Splash-o-matic",
          "localizedName": {
            "ja_JP": "シャープマーカー",
            "en_US": "Splash-o-matic",
            "en_GB": "Splash-o-matic",
            "es_ES": "Marcador fino",
            "es_MX": "Plumón fino",
            "fr_FR": "Marqueur léger",
            "fr_CA": "Marqueur léger",
            "de_DE": "Fein-Disperser",
            "it_IT": "Marker d'assalto",
            "nl_NL": "Spetterspuit",
            "ru_RU": "Плюхомет"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Inkjet",
          "level": 25,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 11200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 42,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 5
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Precision_01.png",
          "name": "Neo Splash-o-matic",
          "localizedName": {
            "ja_JP": "シャープマーカーネオ",
            "en_US": "Neo Splash-o-matic",
            "en_GB": "Neo Splash-o-matic",
            "es_ES": "Marcador fino neo",
            "es_MX": "Plumón neo",
            "fr_FR": "Marqueur léger Néo",
            "fr_CA": "Marqueur léger néo",
            "de_DE": "Neo Splash-o-matic"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Suction-Bomb Launcher",
          "level": 27,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 16800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 42,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 6
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Blaze_00.png",
          "name": "Aerospray MG",
          "localizedName": {
            "ja_JP": "プロモデラーMG",
            "en_US": "Aerospray MG",
            "en_GB": "Aerospray MG",
            "es_ES": "Aerógrafo pro",
            "es_MX": "Aerógrafo GP",
            "fr_FR": "Aérogun",
            "fr_CA": "Pouche-pouche",
            "de_DE": "Airbrush MG",
            "it_IT": "Aerografo",
            "nl_NL": "Kladderwerper",
            "ru_RU": "Аэроспрей"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Curling-Bomb Launcher",
          "level": 6,
          "specialCost": 160,
          "inkSaver": "Middle",
          "inkPerShot": 0.55,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 4900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_DAMAGE | translate }}": 10,
            "{{ SHELDON_FIRE_RATE | translate }}": 90
          },
          "id": 7
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Blaze_01.png",
          "name": "Aerospray RG",
          "localizedName": {
            "ja_JP": "プロモデラーRG",
            "en_US": "Aerospray RG",
            "en_GB": "Aerospray RG",
            "es_ES": "Aerógrafo plus",
            "es_MX": "Aerógrafo GN",
            "fr_FR": "Aérogun premium",
            "fr_CA": "Pouche-pouche premium",
            "de_DE": "Airbrush RG",
            "it_IT": "Aerografo élite",
            "nl_NL": "Kladderwerper Pro",
            "ru_RU": "Аэроспрей ДЕЛЮКС"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Baller",
          "level": 28,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 0.55,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 16900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_DAMAGE | translate }}": 10,
            "{{ SHELDON_FIRE_RATE | translate }}": 90
          },
          "id": 8
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Normal_00.png",
          "name": "Splattershot",
          "localizedName": {
            "ja_JP": "スプラシューター",
            "en_US": "Splattershot",
            "en_GB": "Splattershot",
            "es_ES": "Lanzatintas",
            "es_MX": "Rociador",
            "fr_FR": "Liquidateur",
            "fr_CA": "Liquéficateur",
            "de_DE": "Kleckser",
            "it_IT": "Splasher",
            "nl_NL": "Superspetter",
            "ru_RU": "Каплестрел"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Splashdown",
          "level": 2,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 45,
            "{{ SHELDON_FIRE_RATE | translate }}": 60
          },
          "id": 9
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Normal_01.png",
          "name": "Tentatek Splattershot",
          "localizedName": {
            "ja_JP": "スプラシューターコラボ",
            "en_US": "Tentatek Splattershot",
            "en_GB": "Tentatek Splattershot",
            "es_ES": "Lanzatintas B",
            "es_MX": "Rociador Tentáctica",
            "fr_FR": "Liquidateur griffé",
            "fr_CA": "Liquéficateur Tentatek",
            "de_DE": "Tentatek-Kleckser",
            "it_IT": "Splasher logo",
            "nl_NL": "Tentatek Superspetter",
            "ru_RU": "Каплестрел «Щуччи»"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Inkjet",
          "level": 4,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 2100,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 45,
            "{{ SHELDON_FIRE_RATE | translate }}": 60
          },
          "id": 10
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Normal_02.png",
          "name": "Kensa Splattershot",
          "localizedName": {
            "ja_JP": "スプラシューターベッチュー",
            "en_US": "Kensa Splattershot"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Tenta Missiles",
          "level": 6,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 5300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 45,
            "{{ SHELDON_FIRE_RATE | translate }}": 60
          },
          "id": 11
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Normal_H.png",
          "name": "Hero Shot Replica",
          "localizedName": {
            "ja_JP": "ヒーローシューター レプリカ",
            "en_US": "Hero Shot Replica",
            "en_GB": "Hero Shot Replica",
            "es_ES": "Pistola de Élite (réplica)",
            "es_MX": "Rociador de élite réplica",
            "fr_FR": "Lanceur héroïque (réplique)",
            "fr_CA": "Liquéfi. héroïque (rép.)",
            "de_DE": "Heldenwaffe Replik",
            "it_IT": "Pistola élite replica",
            "nl_NL": "Heldenspetter (replica)",
            "ru_RU": "Каплестрел-004 (клон)"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Splashdown",
          "level": 2,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 1500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 45,
            "{{ SHELDON_FIRE_RATE | translate }}": 60
          },
          "id": 12
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Normal_Oct.png",
          "name": "Octo Shot Replica",
          "localizedName": {
            "ja_JP": "オクタシューター レプリカ",
            "en_US": "Octo Shot Replica"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Inkjet",
          "level": 1,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 0,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 45,
            "{{ SHELDON_FIRE_RATE | translate }}": 60
          },
          "id": 13
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Gravity_00.png",
          "name": ".52 Gal",
          "localizedName": {
            "ja_JP": ".52ガロン",
            "en_US": ".52 Gal",
            "en_GB": ".52 Gal",
            "es_ES": "Salpicadora 2000",
            "es_MX": "Salpicadora 2000",
            "fr_FR": "Calibre 2000",
            "fr_CA": "Calibre 2000",
            "de_DE": ".52 Gallon",
            "it_IT": "Calibro 2000",
            "nl_NL": ".52 Kaliter",
            "ru_RU": "Струевик .52"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Baller",
          "level": 14,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 1.3,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 9500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 55,
            "{{ SHELDON_DAMAGE | translate }}": 75,
            "{{ SHELDON_FIRE_RATE | translate }}": 25
          },
          "id": 14
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Gravity_01.png",
          "name": ".52 Gal Deco",
          "localizedName": {
            "ja_JP": ".52ガロンデコ",
            "en_US": ".52 Gal Deco",
            "en_GB": ".52 Gal Deco",
            "es_ES": "Salpicadora 2000 DX",
            "es_MX": "Salpicadora 2000 chic",
            "fr_FR": "Calibre 2000 chic",
            "fr_CA": "Calibre 2000 chic",
            "de_DE": ".52 Gallon Deko",
            "it_IT": "Calibro 2000 DX",
            "nl_NL": ".52 Kaliter Deco",
            "ru_RU": "Струевик .52 «Деко»"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Sting Ray",
          "level": 22,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 1.3,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 12700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 55,
            "{{ SHELDON_DAMAGE | translate }}": 75,
            "{{ SHELDON_FIRE_RATE | translate }}": 25
          },
          "id": 15
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Gravity_02.png",
          "name": "Kensa .52 Gal",
          "localizedName": {
            "ja_JP": ".52ガロンベッチュー",
            "en_US": "Kensa .52 Gal"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Booyah Bomb",
          "level": 25,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.3,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 15600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 55,
            "{{ SHELDON_DAMAGE | translate }}": 75,
            "{{ SHELDON_FIRE_RATE | translate }}": 25
          },
          "id": 16
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_QuickMiddle_00.png",
          "name": "N-ZAP '85",
          "localizedName": {
            "ja_JP": "N-ZAP85",
            "en_US": "N-ZAP '85",
            "en_GB": "N-ZAP '85",
            "es_ES": "N-ZAP 85",
            "es_MX": "N-ZAP 85",
            "fr_FR": "N-ZAP 85",
            "fr_CA": "N-ZAP 85",
            "de_DE": "N-ZAP85",
            "it_IT": "N-ZAP85",
            "nl_NL": "N-ZAP '85",
            "ru_RU": "N-ZAP 85"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Ink Armor",
          "level": 9,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "High",
          "baseSpeed": 0.84,
          "price": 7100,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 17
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_QuickMiddle_01.png",
          "name": "N-ZAP '89",
          "localizedName": {
            "ja_JP": "N-ZAP89",
            "en_US": "N-ZAP '89",
            "en_GB": "N-ZAP '89",
            "es_ES": "N-ZAP 89",
            "es_MX": "N-ZAP 89",
            "fr_FR": "N-ZAP 89",
            "fr_CA": "N-ZAP 89",
            "de_DE": "N-ZAP89",
            "it_IT": "N-ZAP89",
            "nl_NL": "N-ZAP '89",
            "ru_RU": "N-ZAP 89"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Tenta Missiles",
          "level": 11,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "High",
          "baseSpeed": 0.84,
          "price": 8800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_FIRE_RATE | translate }}": 75
          },
          "id": 18
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Expert_00.png",
          "name": "Splattershot Pro",
          "localizedName": {
            "ja_JP": "プライムシューター",
            "en_US": "Splattershot Pro",
            "en_GB": "Splattershot Pro",
            "es_ES": "Lanzatintas plus",
            "es_MX": "Rociador Pro",
            "fr_FR": "Liquidateur pro",
            "fr_CA": "Liquéficateur pro",
            "de_DE": "Profi-Kleckser",
            "it_IT": "Splasher élite",
            "nl_NL": "Superspetter Pro",
            "ru_RU": "Каплестрел ПРО"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Ink Storm",
          "level": 10,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 2.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.55,
          "price": 13800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 60,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 19
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Expert_01.png",
          "name": "Forge Splattershot Pro",
          "localizedName": {
            "ja_JP": "プライムシューターコラボ",
            "en_US": "Forge Splattershot Pro",
            "en_GB": "Forge Splattershot Pro",
            "es_ES": "Lanzatintas plus B",
            "es_MX": "Rociador Forima",
            "fr_FR": "Liquidateur pro griffé",
            "fr_CA": "Liquéficateur pro Fosia",
            "de_DE": "Focus-Profi-Kleckser",
            "it_IT": "Splasher élite logo",
            "nl_NL": "Forge Superspetter Pro",
            "ru_RU": "Каплестрел ПРО «Блиц»"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Bubble Blower",
          "level": 20,
          "specialCost": 200,
          "inkSaver": "High",
          "inkPerShot": 2.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.55,
          "price": 20800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 60,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 20
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Expert_02.png",
          "name": "Kensa Splattershot Pro",
          "localizedName": {
            "ja_JP": "プライムシューターベッチュー",
            "en_US": "Kensa Splattershot Pro"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Booyah Bomb",
          "level": 23,
          "specialCost": 200,
          "inkSaver": "High",
          "inkPerShot": 2.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.55,
          "price": 21900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 60,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 21
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Heavy_00.png",
          "name": ".96 Gal",
          "localizedName": {
            "ja_JP": ".96ガロン",
            "en_US": ".96 Gal",
            "en_GB": ".96 Gal",
            "es_ES": "Salpicadora 3000",
            "es_MX": "Salpicadora 3000",
            "fr_FR": "Calibre 3000",
            "fr_CA": "Calibre 3000",
            "de_DE": ".96 Gallon",
            "it_IT": "Calibro 3000",
            "nl_NL": ".96 Kaliter",
            "ru_RU": "Струевик .96"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Ink Armor",
          "level": 21,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 2.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.4,
          "price": 12600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 74,
            "{{ SHELDON_DAMAGE | translate }}": 80,
            "{{ SHELDON_FIRE_RATE | translate }}": 10
          },
          "id": 22
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Heavy_01.png",
          "name": ".96 Gal Deco",
          "localizedName": {
            "ja_JP": ".96ガロンデコ",
            "en_US": ".96 Gal Deco",
            "en_GB": ".96 Gal Deco",
            "es_ES": "Salpicadora 3000 DX",
            "es_MX": "Salpicadora 3000 chic",
            "fr_FR": "Calibre 3000 chic",
            "fr_CA": "Calibre 3000 chic",
            "de_DE": ".96 Gallon Deko",
            "it_IT": "Calibro 3000 DX",
            "nl_NL": ".96 Kaliter Deco",
            "ru_RU": "Струевик .96 «Деко»"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Splashdown",
          "level": 26,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 2.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.4,
          "price": 16200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 74,
            "{{ SHELDON_DAMAGE | translate }}": 80,
            "{{ SHELDON_FIRE_RATE | translate }}": 10
          },
          "id": 23
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Long_00.png",
          "name": "Jet Squelcher",
          "localizedName": {
            "ja_JP": "ジェットスイーパー",
            "en_US": "Jet Squelcher",
            "en_GB": "Jet Squelcher",
            "es_ES": "Megabarredora",
            "es_MX": "Megasoplador",
            "fr_FR": "Nettoyeur XL",
            "fr_CA": "Méganettoyeur",
            "de_DE": "Platscher",
            "it_IT": "Sweeper",
            "nl_NL": "Straalplonzer",
            "ru_RU": "Плескарь"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Tenta Missiles",
          "level": 17,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.6,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 11300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 82,
            "{{ SHELDON_DAMAGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 24
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Long_01.png",
          "name": "Custom Jet Squelcher",
          "localizedName": {
            "ja_JP": "ジェットスイーパーカスタム",
            "en_US": "Custom Jet Squelcher",
            "en_GB": "Custom Jet Squelcher",
            "es_ES": "Megabarredora SP",
            "es_MX": "Megasoplador adaptado",
            "fr_FR": "Nettoyeur XL modifié",
            "fr_CA": "Méganettoyeur modifié",
            "de_DE": "Platscher SE",
            "it_IT": "Sweeper CM",
            "nl_NL": "Gemodde Straalplonzer",
            "ru_RU": "Плескарь «Понт»"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Sting Ray",
          "level": 27,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.6,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 15900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 82,
            "{{ SHELDON_DAMAGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 25
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_TripleQuick_00.png",
          "name": "L-3 Nozzlenose",
          "localizedName": {
            "ja_JP": "L3リールガン",
            "en_US": "L-3 Nozzlenose",
            "en_GB": "L-3 Nozzlenose",
            "es_ES": "Tintambor ligero",
            "es_MX": "Manguera ligera",
            "fr_FR": "Arroseur léger",
            "fr_CA": "Arroseur léger",
            "de_DE": "L3 Tintenwerfer",
            "it_IT": "Triplete compatto",
            "nl_NL": "L-3 Stompsnuit",
            "ru_RU": "Каплетрон-компакт"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Baller",
          "level": 18,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 10400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 25,
            "{{ SHELDON_FIRE_RATE | translate }}": 65
          },
          "id": 26
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_TripleQuick_01.png",
          "name": "L-3 Nozzlenose D",
          "localizedName": {
            "ja_JP": "L3リールガンD",
            "en_US": "L-3 Nozzlenose D",
            "en_GB": "L-3 Nozzlenose D",
            "es_ES": "Tintambor ligero D",
            "es_MX": "Manguera ligera D",
            "fr_FR": "Arroseur léger Cétacé",
            "fr_CA": "Arroseur léger requin",
            "de_DE": "L3 Tintenwerfer D",
            "it_IT": "Triplete compatto D",
            "nl_NL": "L-3 Stompsnuit D",
            "ru_RU": "Каплетрон-компакт 2.0"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Inkjet",
          "level": 23,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 12500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 25,
            "{{ SHELDON_FIRE_RATE | translate }}": 65
          },
          "id": 27
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_TripleQuick_02.png",
          "name": "Kensa L-3 Nozzlenose",
          "localizedName": {
            "ja_JP": "L3リールガンベッチュー",
            "en_US": "Kensa L-3 Nozzlenose"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Ultra Stamp",
          "level": 27,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 17700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 25,
            "{{ SHELDON_FIRE_RATE | translate }}": 65
          },
          "id": 28
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_TripleMiddle_00.png",
          "name": "H-3 Nozzlenose",
          "localizedName": {
            "ja_JP": "H3リールガン",
            "en_US": "H-3 Nozzlenose",
            "en_GB": "H-3 Nozzlenose",
            "es_ES": "Tintambor pesado",
            "es_MX": "Manguera pesada",
            "fr_FR": "Arroseur lourd",
            "fr_CA": "Arroseur lourd",
            "de_DE": "S3 Tintenwerfer",
            "it_IT": "Triplete",
            "nl_NL": "H-3 Langsnuit",
            "ru_RU": "Тяжелый каплетрон"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Tenta Missiles",
          "level": 29,
          "specialCost": 180,
          "inkSaver": "High",
          "inkPerShot": 1.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 17200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 58,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 29
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_TripleMiddle_01.png",
          "name": "H-3 Nozzlenose D",
          "localizedName": {
            "ja_JP": "H3リールガンD",
            "en_US": "H-3 Nozzlenose D",
            "en_GB": "H-3 Nozzlenose D",
            "es_ES": "Tintambor pesado D",
            "es_MX": "Manguera pesada D",
            "fr_FR": "Arroseur lourd Cétacé",
            "fr_CA": "Arroseur lourd requin",
            "de_DE": "S3 Tintenwerfer D",
            "it_IT": "Triplete D",
            "nl_NL": "H-3 Langsnuit D",
            "ru_RU": "Тяжелый каплетрон 2.0"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Ink Armor",
          "level": 30,
          "specialCost": 220,
          "inkSaver": "High",
          "inkPerShot": 1.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 18400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 58,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 30
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Flash_00.png",
          "name": "Squeezer",
          "localizedName": {
            "ja_JP": "ボトルガイザー",
            "en_US": "Squeezer",
            "en_GB": "Squeezer",
            "es_ES": "Tintopresor",
            "es_MX": "Tintopresor",
            "fr_FR": "Compresseur",
            "fr_CA": "Compresseur",
            "de_DE": "Quetscher",
            "it_IT": "Strizzer",
            "nl_NL": "Floeper",
            "ru_RU": "Бутылятор"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Sting Ray",
          "level": 16,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 2.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 9400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 77,
            "{{ SHELDON_DAMAGE | translate }}": 52,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 31
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_Flash_01.png",
          "name": "Foil Squeezer",
          "localizedName": {
            "ja_JP": "Foil Squeezer",
            "en_US": "Foil Squeezer",
            "en_GB": "Foil Squeezer",
            "es_ES": "Foil Squeezer",
            "es_MX": "Foil Squeezer",
            "fr_FR": "Foil Squeezer",
            "fr_CA": "Foil Squeezer",
            "de_DE": "Foil Squeezer"
          },
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Bubble Blower",
          "level": 25,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 2.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 10900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 77,
            "{{ SHELDON_DAMAGE | translate }}": 52,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 32
        }
      ]
    },
    {
      "type": "Blasters",
      "localizedName": {
        "ja_JP": "ブラスター",
        "en_US": "Blasters",
        "en_GB": "Blasters",
        "es_ES": "Devastadors",
        "es_MX": "Lanzamotas",
        "fr_FR": "Éclablaster",
        "fr_CA": "Éclablasteur",
        "de_DE": "Blaster",
        "it_IT": "Blaster",
        "nl_NL": "Klodderblaster",
        "ru_RU": "Бластер",
        "zh_HK": "ブラスター (波波槍)"
      },
      "id": 1,
      "weapons": [  
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterShort_00.png",
          "name": "Luna Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Baller",
          "level": 19,
          "specialCost": 180,
          "inkSaver": "High",
          "inkPerShot": 9.0,
          "speedLevel": "High",
          "baseSpeed": 0.5,
          "price": 12100,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 9,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 200,
          "localizedName": {
            "ja_JP": "\u30ce\u30f4\u30a1\u30d6\u30e9\u30b9\u30bf\u30fc",
            "en_US": "Luna Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterShort_01.png",
          "name": "Luna Blaster Neo",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Suction-Bomb Launcher",
          "level": 24,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 9.0,
          "speedLevel": "High",
          "baseSpeed": 0.5,
          "price": 13600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 9,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 201,
          "localizedName": {
            "ja_JP": "\u30ce\u30f4\u30a1\u30d6\u30e9\u30b9\u30bf\u30fc\u30cd\u30aa",
            "en_US": "Luna Blaster Neo"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterShort_02.png",
          "name": "Kensa Luna Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Fizzy Bomb",
          "special": "Ink Storm",
          "level": 26,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 9.0,
          "speedLevel": "High",
          "baseSpeed": 0.5,
          "price": 16600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 9,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 202,
          "localizedName": {
            "ja_JP": "\u30ce\u30f4\u30a1\u30d6\u30e9\u30b9\u30bf\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Luna Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterMiddle_00.png",
          "name": "Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Splashdown",
          "level": 5,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 10.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.45,
          "price": 3000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 27,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 20
          },
          "id": 210,
          "localizedName": {
            "ja_JP": "\u30db\u30c3\u30c8\u30d6\u30e9\u30b9\u30bf\u30fc",
            "en_US": "Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterMiddle_01.png",
          "name": "Custom Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Inkjet",
          "level": 27,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 10.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.45,
          "price": 15300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 27,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 20
          },
          "id": 211,
          "localizedName": {
            "ja_JP": "\u30db\u30c3\u30c8\u30d6\u30e9\u30b9\u30bf\u30fc\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterMiddle_H.png",
          "name": "Hero Blaster Replica",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Splashdown",
          "level": 5,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 10.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.45,
          "price": 3800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 27,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 20
          },
          "id": 215,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30d6\u30e9\u30b9\u30bf\u30fc \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Hero Blaster Replica"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLong_00.png",
          "name": "Range Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Ink Storm",
          "level": 14,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 11.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.4,
          "price": 9300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 56,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 10
          },
          "id": 220,
          "localizedName": {
            "ja_JP": "\u30ed\u30f3\u30b0\u30d6\u30e9\u30b9\u30bf\u30fc",
            "en_US": "Range Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLong_01.png",
          "name": "Custom Range Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Bubble Blower",
          "level": 18,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 11.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.4,
          "price": 11400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 56,
            "{{ SHELDON_DAMAGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 10
          },
          "id": 221,
          "localizedName": {
            "ja_JP": "\u30ed\u30f3\u30b0\u30d6\u30e9\u30b9\u30bf\u30fc\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom Range Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLightShort_00.png",
          "name": "Clash Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Sting Ray",
          "level": 30,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 4.0,
          "speedLevel": "High",
          "baseSpeed": 0.65,
          "price": 18200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 21,
            "{{ SHELDON_DAMAGE | translate }}": 25,
            "{{ SHELDON_FIRE_RATE | translate }}": 65
          },
          "id": 230,
          "localizedName": {
            "ja_JP": "\u30af\u30e9\u30c3\u30b7\u30e5\u30d6\u30e9\u30b9\u30bf\u30fc",
            "en_US": "Clash Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLightShort_01.png",
          "name": "Clash Blaster Neo",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Tenta Missiles",
          "level": 30,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 4.0,
          "speedLevel": "High",
          "baseSpeed": 0.65,
          "price": 20500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 21,
            "{{ SHELDON_DAMAGE | translate }}": 25,
            "{{ SHELDON_FIRE_RATE | translate }}": 65
          },
          "id": 231,
          "localizedName": {
            "ja_JP": "\u30af\u30e9\u30c3\u30b7\u30e5\u30d6\u30e9\u30b9\u30bf\u30fc\u30cd\u30aa",
            "en_US": "Clash Blaster Neo"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLight_00.png",
          "name": "Rapid Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Splat-Bomb Launcher",
          "level": 13,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "Middle",
          "baseSpeed": 0.55,
          "price": 9800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 40
          },
          "id": 240,
          "localizedName": {
            "ja_JP": "\u30e9\u30d4\u30c3\u30c9\u30d6\u30e9\u30b9\u30bf\u30fc",
            "en_US": "Rapid Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLight_01.png",
          "name": "Rapid Blaster Deco",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Inkjet",
          "level": 16,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "Middle",
          "baseSpeed": 0.55,
          "price": 11500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 40
          },
          "id": 241,
          "localizedName": {
            "ja_JP": "\u30e9\u30d4\u30c3\u30c9\u30d6\u30e9\u30b9\u30bf\u30fc\u30c7\u30b3",
            "en_US": "Rapid Blaster Deco"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLight_02.png",
          "name": "Kensa Rapid Blaster",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Torpedo",
          "special": "Baller",
          "level": 21,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "Middle",
          "baseSpeed": 0.55,
          "price": 13500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 40
          },
          "id": 242,
          "localizedName": {
            "ja_JP": "\u30e9\u30d4\u30c3\u30c9\u30d6\u30e9\u30b9\u30bf\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Rapid Blaster"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLightLong_00.png",
          "name": "Rapid Blaster Pro",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Ink Storm",
          "level": 22,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 8.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.5,
          "price": 12800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 72,
            "{{ SHELDON_DAMAGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 250,
          "localizedName": {
            "ja_JP": "R\u30d6\u30e9\u30b9\u30bf\u30fc\u30a8\u30ea\u30fc\u30c8",
            "en_US": "Rapid Blaster Pro"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Shooter_BlasterLightLong_01.png",
          "name": "Rapid Blaster Pro Deco",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Ink Armor",
          "level": 24,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 8.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.5,
          "price": 14000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 72,
            "{{ SHELDON_DAMAGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 30
          },
          "id": 251,
          "localizedName": {
            "ja_JP": "R\u30d6\u30e9\u30b9\u30bf\u30fc\u30a8\u30ea\u30fc\u30c8\u30c7\u30b3",
            "en_US": "Rapid Blaster Pro Deco"
          }
        }
      ]
    },
    {
      "type": "Rollers",
      "localizedName": {
        "ja_JP": "ローラー",
        "en_US": "Rollers",
        "en_GB": "Rollers",
        "es_ES": "Rodillos",
        "es_MX": "Rodillos",
        "fr_FR": "Rouleau",
        "fr_CA": "Rouleau",
        "de_DE": "Roller",
        "it_IT": "Rullo",
        "nl_NL": "Roller",
        "ru_RU": "ролик",
        "zh_HK": "ローラー (Roller/掃)"
      },
      "id": 2,
      "weapons": [
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Compact_00.png",
          "name": "Carbon Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Ink Storm",
          "level": 7,
          "specialCost": 160,
          "inkSaver": "Middle",
          "inkPerShot": 4.5,
          "speedLevel": "High",
          "baseSpeed": 1.28,
          "price": 6200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 20,
            "{{ SHELDON_INK_SPEED | translate }}": 63,
            "{{ SHELDON_HANDLING | translate }}": 65
          },
          "id": 1000,
          "localizedName": {
            "ja_JP": "\u30ab\u30fc\u30dc\u30f3\u30ed\u30fc\u30e9\u30fc",
            "en_US": "Carbon Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Compact_01.png",
          "name": "Carbon Roller Deco",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Autobomb Launcher",
          "level": 10,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 4.5,
          "speedLevel": "High",
          "baseSpeed": 1.28,
          "price": 8500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 20,
            "{{ SHELDON_INK_SPEED | translate }}": 63,
            "{{ SHELDON_HANDLING | translate }}": 65
          },
          "id": 1001,
          "localizedName": {
            "ja_JP": "\u30ab\u30fc\u30dc\u30f3\u30ed\u30fc\u30e9\u30fc\u30c7\u30b3",
            "en_US": "Carbon Roller Deco"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Normal_00.png",
          "name": "Splat Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Splashdown",
          "level": 3,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 9.0,
          "speedLevel": "Middle",
          "baseSpeed": 1.08,
          "price": 1800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 48,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 55
          },
          "id": 1010,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30ed\u30fc\u30e9\u30fc",
            "en_US": "Splat Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Normal_01.png",
          "name": "Krak-On Splat Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Baller",
          "level": 12,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 9.0,
          "speedLevel": "Middle",
          "baseSpeed": 1.08,
          "price": 9200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 48,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 55
          },
          "id": 1011,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30ed\u30fc\u30e9\u30fc\u30b3\u30e9\u30dc",
            "en_US": "Krak-On Splat Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Normal_02.png",
          "name": "Kensa Splat Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Bubble Blower",
          "level": 14,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 9.0,
          "speedLevel": "Middle",
          "baseSpeed": 1.08,
          "price": 12300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 48,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 55
          },
          "id": 1012,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30ed\u30fc\u30e9\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Splat Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Normal_H.png",
          "name": "Hero Roller Replica",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Splashdown",
          "level": 3,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 9.0,
          "speedLevel": "Middle",
          "baseSpeed": 1.08,
          "price": 2300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 48,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 55
          },
          "id": 1015,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30ed\u30fc\u30e9\u30fc \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Hero Roller Replica"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Heavy_00.png",
          "name": "Dynamo Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Sting Ray",
          "level": 20,
          "specialCost": 180,
          "inkSaver": "High",
          "inkPerShot": 18.0,
          "speedLevel": "Low",
          "baseSpeed": 0.88,
          "price": 24500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 76,
            "{{ SHELDON_INK_SPEED | translate }}": 25,
            "{{ SHELDON_HANDLING | translate }}": 20
          },
          "id": 1020,
          "localizedName": {
            "ja_JP": "\u30c0\u30a4\u30ca\u30e2\u30ed\u30fc\u30e9\u30fc",
            "en_US": "Dynamo Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Heavy_01.png",
          "name": "Gold Dynamo Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Ink Armor",
          "level": 25,
          "specialCost": 190,
          "inkSaver": "High",
          "inkPerShot": 18.0,
          "speedLevel": "Low",
          "baseSpeed": 0.88,
          "price": 29000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 76,
            "{{ SHELDON_INK_SPEED | translate }}": 25,
            "{{ SHELDON_HANDLING | translate }}": 20
          },
          "id": 1021,
          "localizedName": {
            "ja_JP": "\u30c0\u30a4\u30ca\u30e2\u30ed\u30fc\u30e9\u30fc\u30c6\u30b9\u30e9",
            "en_US": "Gold Dynamo Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Heavy_02.png",
          "name": "Kensa Dynamo Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Booyah Bomb",
          "level": 29,
          "specialCost": 180,
          "inkSaver": "High",
          "inkPerShot": 18.0,
          "speedLevel": "Low",
          "baseSpeed": 0.88,
          "price": 32300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 76,
            "{{ SHELDON_INK_SPEED | translate }}": 25,
            "{{ SHELDON_HANDLING | translate }}": 20
          },
          "id": 1022,
          "localizedName": {
            "ja_JP": "\u30c0\u30a4\u30ca\u30e2\u30ed\u30fc\u30e9\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Dynamo Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Hunter_00.png",
          "name": "Flingza Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Splat-Bomb Launcher",
          "level": 24,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 8.0,
          "speedLevel": "Middle",
          "baseSpeed": 1.08,
          "price": 15700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 45
          },
          "id": 1030,
          "localizedName": {
            "ja_JP": "\u30f4\u30a1\u30ea\u30a2\u30d6\u30eb\u30ed\u30fc\u30e9\u30fc",
            "en_US": "Flingza Roller"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_Hunter_01.png",
          "name": "Foil Flingza Roller",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Tenta Missiles",
          "level": 28,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 8.0,
          "speedLevel": "Middle",
          "baseSpeed": 1.08,
          "price": 21300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 45
          },
          "id": 1031,
          "localizedName": {
            "ja_JP": "\u30f4\u30a1\u30ea\u30a2\u30d6\u30eb\u30ed\u30fc\u30e9\u30fc\u30d5\u30a9\u30a4\u30eb",
            "en_US": "Foil Flingza Roller"
          }
        }
      ]
    },
    {
      "type": "Brushes",
      "localizedName": {
        "ja_JP": "フデ",
        "en_US": "Brushes",
        "en_GB": "Brushes",
        "es_ES": "Brochas",
        "es_MX": "Brochas",
        "fr_FR": "Épinceau",
        "fr_CA": "Épinceau",
        "de_DE": "Pinsel",
        "it_IT": "Pennello",
        "nl_NL": "Inktkwast",
        "ru_RU": "Кисть",
        "zh_HK": "フデ (毛筆)"
      },
      "id": 3,
      "weapons": [
        {
          "image": "../common/assets/img/weapons/Wst_Roller_BrushMini_00.png",
          "name": "Inkbrush",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Splashdown",
          "level": 5,
          "specialCost": 150,
          "inkSaver": "Middle",
          "inkPerShot": 2.0,
          "speedLevel": "High",
          "baseSpeed": 1.92,
          "price": 2600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 5,
            "{{ SHELDON_INK_SPEED | translate }}": 100,
            "{{ SHELDON_HANDLING | translate }}": 100
          },
          "id": 1100,
          "localizedName": {
            "ja_JP": "\u30d1\u30d6\u30ed",
            "en_US": "Inkbrush"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_BrushMini_01.png",
          "name": "Inkbrush Nouveau",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Baller",
          "level": 7,
          "specialCost": 160,
          "inkSaver": "Middle",
          "inkPerShot": 2.0,
          "speedLevel": "High",
          "baseSpeed": 1.92,
          "price": 7000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 5,
            "{{ SHELDON_INK_SPEED | translate }}": 100,
            "{{ SHELDON_HANDLING | translate }}": 100
          },
          "id": 1101,
          "localizedName": {
            "ja_JP": "\u30d1\u30d6\u30ed\u30fb\u30d2\u30e5\u30fc",
            "en_US": "Inkbrush Nouveau"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_BrushNormal_00.png",
          "name": "Octobrush",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Inkjet",
          "level": 10,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 3.2,
          "speedLevel": "Middle",
          "baseSpeed": 1.68,
          "price": 8200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 23,
            "{{ SHELDON_INK_SPEED | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 85
          },
          "id": 1110,
          "localizedName": {
            "ja_JP": "\u30db\u30af\u30b5\u30a4",
            "en_US": "Octobrush"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_BrushNormal_01.png",
          "name": "Octobrush Nouveau",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Tenta Missiles",
          "level": 15,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 3.2,
          "speedLevel": "Middle",
          "baseSpeed": 1.68,
          "price": 9900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 23,
            "{{ SHELDON_INK_SPEED | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 85
          },
          "id": 1111,
          "localizedName": {
            "ja_JP": "\u30db\u30af\u30b5\u30a4\u30fb\u30d2\u30e5\u30fc",
            "en_US": "Octobrush Nouveau"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_BrushNormal_02.png",
          "name": "Kensa Octobrush",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Ultra Stamp",
          "level": 20,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 3.2,
          "speedLevel": "Middle",
          "baseSpeed": 1.68,
          "price": 13200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 23,
            "{{ SHELDON_INK_SPEED | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 85
          },
          "id": 1112,
          "localizedName": {
            "ja_JP": "\u30db\u30af\u30b5\u30a4\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Octobrush"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Roller_BrushNormal_H.png",
          "name": "Herobrush Replica",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Inkjet",
          "level": 10,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 3.2,
          "speedLevel": "Middle",
          "baseSpeed": 1.68,
          "price": 9400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 23,
            "{{ SHELDON_INK_SPEED | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 85
          },
          "id": 1115,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30d6\u30e9\u30b7 \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Herobrush Replica"
          }
        }
      ]
    },
    {
      "type": "Chargers",
      "localizedName": {
        "ja_JP": "チャージャー",
        "en_US": "Chargers",
        "en_GB": "Chargers",
        "es_ES": "Cargatintas",
        "es_MX": "Cargatintas",
        "fr_FR": "Fusil",
        "fr_CA": "Fusil",
        "de_DE": "Klecks-Konzentrator",
        "it_IT": "Splatter a carica",
        "nl_NL": "Bloplader",
        "ru_RU": "Сплатган",
        "zh_HK": "チャージャー (狙撃槍)"
      },
      "id": 4,
      "weapons": [
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Quick_00.png",
          "name": "Classic Squiffer",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Ink Armor",
          "level": 12,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 10.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.3,
          "price": 8900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 75,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 70,
            "{{ SHELDON_MOBILITY | translate }}": 60
          },
          "id": 2000,
          "localizedName": {
            "ja_JP": "\u30b9\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u03b1",
            "en_US": "Classic Squiffer"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Quick_01.png",
          "name": "New Squiffer",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Baller",
          "level": 17,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 10.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.3,
          "price": 11000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 75,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 70,
            "{{ SHELDON_MOBILITY | translate }}": 60
          },
          "id": 2001,
          "localizedName": {
            "ja_JP": "\u30b9\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u03b2",
            "en_US": "New Squiffer"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Normal_00.png",
          "name": "Splat Charger",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Sting Ray",
          "level": 3,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 18.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.2,
          "price": 2200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 88,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 40
          },
          "id": 2010,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30c1\u30e3\u30fc\u30b8\u30e3\u30fc",
            "en_US": "Splat Charger"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Normal_01.png",
          "name": "Firefin Splat Charger",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Suction-Bomb Launcher",
          "level": 16,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 18.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.2,
          "price": 10600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 88,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 40
          },
          "id": 2011,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30c1\u30e3\u30fc\u30b8\u30e3\u30fc\u30b3\u30e9\u30dc",
            "en_US": "Firefin Splat Charger"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Normal_02.png",
          "name": "Kensa Charger",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Baller",
          "level": 19,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 18.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.2,
          "price": 14500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 88,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 40
          },
          "id": 2012,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30c1\u30e3\u30fc\u30b8\u30e3\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Charger"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Normal_H.png",
          "name": "Hero Charger Replica",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Sting Ray",
          "level": 3,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 18.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.2,
          "price": 2700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 88,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 40
          },
          "id": 2015,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30c1\u30e3\u30fc\u30b8\u30e3\u30fc \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Hero Charger Replica"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_NormalScope_00.png",
          "name": "Splatterscope",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Sting Ray",
          "level": 15,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 18.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.2,
          "price": 11400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 91,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 30
          },
          "id": 2020,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30b9\u30b3\u30fc\u30d7",
            "en_US": "Splatterscope"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_NormalScope_01.png",
          "name": "Firefin Splatterscope",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Suction-Bomb Launcher",
          "level": 25,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 18.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.2,
          "price": 13900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 91,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 30
          },
          "id": 2021,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30b9\u30b3\u30fc\u30d7\u30b3\u30e9\u30dc",
            "en_US": "Firefin Splatterscope"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_NormalScope_02.png",
          "name": "Kensa Splatterscope",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Baller",
          "level": 28,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 18.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.2,
          "price": 20400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 91,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 30
          },
          "id": 2022,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30b9\u30b3\u30fc\u30d7\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Splatterscope"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Long_00.png",
          "name": "E-liter 4K",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Ink Storm",
          "level": 20,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 25.0,
          "speedLevel": "Low",
          "baseSpeed": 0.15,
          "price": 13900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 96,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 15
          },
          "id": 2030,
          "localizedName": {
            "ja_JP": "\u30ea\u30c3\u30bf\u30fc4K",
            "en_US": "E-liter 4K"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Long_01.png",
          "name": "Custom E-liter 4K",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Bubble Blower",
          "level": 26,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 25.0,
          "speedLevel": "Low",
          "baseSpeed": 0.15,
          "price": 17300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 96,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 15
          },
          "id": 2031,
          "localizedName": {
            "ja_JP": "\u30ea\u30c3\u30bf\u30fc4K\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom E-liter 4K"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_LongScope_00.png",
          "name": "E-liter 4K Scope",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Ink Storm",
          "level": 30,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 25.0,
          "speedLevel": "Low",
          "baseSpeed": 0.15,
          "price": 23200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 100,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 5
          },
          "id": 2040,
          "localizedName": {
            "ja_JP": "4K\u30b9\u30b3\u30fc\u30d7",
            "en_US": "E-liter 4K Scope"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_LongScope_01.png",
          "name": "Custom E-liter 4K Scope",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Bubble Blower",
          "level": 30,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 25.0,
          "speedLevel": "Low",
          "baseSpeed": 0.15,
          "price": 29900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 100,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 5
          },
          "id": 2041,
          "localizedName": {
            "ja_JP": "4K\u30b9\u30b3\u30fc\u30d7\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom E-liter 4K Scope"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Light_00.png",
          "name": "Bamboozler 14 Mk I",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Tenta Missiles",
          "level": 18,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "High",
          "baseSpeed": 0.6,
          "price": 9500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 90,
            "{{ SHELDON_MOBILITY | translate }}": 80
          },
          "id": 2050,
          "localizedName": {
            "ja_JP": "14\u5f0f\u7af9\u7b52\u9283\u30fb\u7532",
            "en_US": "Bamboozler 14 Mk I"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Light_01.png",
          "name": "Bamboozler 14 Mk II",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Burst-Bomb Launcher",
          "level": 21,
          "specialCost": 160,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "High",
          "baseSpeed": 0.6,
          "price": 10500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 90,
            "{{ SHELDON_MOBILITY | translate }}": 80
          },
          "id": 2051,
          "localizedName": {
            "ja_JP": "14\u5f0f\u7af9\u7b52\u9283\u30fb\u4e59",
            "en_US": "Bamboozler 14 Mk II"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Keeper_00.png",
          "name": "Goo Tuber",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Splashdown",
          "level": 22,
          "specialCost": 160,
          "inkSaver": "Middle",
          "inkPerShot": 15.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.3,
          "price": 13400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 2060,
          "localizedName": {
            "ja_JP": "\u30bd\u30a4\u30c1\u30e5\u30fc\u30d0\u30fc",
            "en_US": "Goo Tuber"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Charger_Keeper_01.png",
          "name": "Custom Goo Tuber",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Inkjet",
          "level": 28,
          "specialCost": 170,
          "inkSaver": "Middle",
          "inkPerShot": 15.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.3,
          "price": 19300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 2061,
          "localizedName": {
            "ja_JP": "\u30bd\u30a4\u30c1\u30e5\u30fc\u30d0\u30fc\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom Goo Tuber"
          }
        }
      ]
    },
    {
      "type": "Sloshers",
      "localizedName": {
        "ja_JP": "スロッシャー",
        "en_US": "Sloshers",
        "en_GB": "Sloshers",
        "es_ES": "Derramatics",
        "es_MX": "Derramatics",
        "fr_FR": "Seauceur",
        "fr_CA": "Seauceur",
        "de_DE": "Schwapper",
        "it_IT": "Secchiostro",
        "nl_NL": "Morser",
        "ru_RU": "Ведроган",
        "zh_HK": "スロッシャー (水桶)"
      },
      "id": 5,
      "weapons": [
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Strong_00.png",
          "name": "Slosher",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Tenta Missiles",
          "level": 5,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "Middle",
          "baseSpeed": 0.4,
          "price": 2500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          "id": 3000,
          "localizedName": {
            "ja_JP": "\u30d0\u30b1\u30c3\u30c8\u30b9\u30ed\u30c3\u30b7\u30e3\u30fc",
            "en_US": "Slosher"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Strong_01.png",
          "name": "Slosher Deco",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Baller",
          "level": 8,
          "specialCost": 220,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "Middle",
          "baseSpeed": 0.4,
          "price": 8000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          "id": 3001,
          "localizedName": {
            "ja_JP": "\u30d0\u30b1\u30c3\u30c8\u30b9\u30ed\u30c3\u30b7\u30e3\u30fc\u30c7\u30b3",
            "en_US": "Slosher Deco"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Strong_H.png",
          "name": "Hero Slosher Replica",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Tenta Missiles",
          "level": 5,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 7.000000000000001,
          "speedLevel": "Middle",
          "baseSpeed": 0.4,
          "price": 3100,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          "id": 3005,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30b9\u30ed\u30c3\u30b7\u30e3\u30fc \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Hero Slosher Replica"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Diffusion_00.png",
          "name": "Tri-Slosher",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Ink Armor",
          "level": 15,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 6.0,
          "speedLevel": "High",
          "baseSpeed": 0.66,
          "price": 10200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 31,
            "{{ SHELDON_DAMAGE | translate }}": 75,
            "{{ SHELDON_HANDLING | translate }}": 70
          },
          "id": 3010,
          "localizedName": {
            "ja_JP": "\u30d2\u30c3\u30bb\u30f3",
            "en_US": "Tri-Slosher"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Diffusion_01.png",
          "name": "Tri-Slosher Nouveau",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Ink Storm",
          "level": 17,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 6.0,
          "speedLevel": "High",
          "baseSpeed": 0.66,
          "price": 11700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 31,
            "{{ SHELDON_DAMAGE | translate }}": 75,
            "{{ SHELDON_HANDLING | translate }}": 70
          },
          "id": 3011,
          "localizedName": {
            "ja_JP": "\u30d2\u30c3\u30bb\u30f3\u30fb\u30d2\u30e5\u30fc",
            "en_US": "Tri-Slosher Nouveau"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Launcher_00.png",
          "name": "Sloshing Machine",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Sting Ray",
          "level": 13,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 8.4,
          "speedLevel": "Middle",
          "baseSpeed": 0.7,
          "price": 12600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 90,
            "{{ SHELDON_HANDLING | translate }}": 40
          },
          "id": 3020,
          "localizedName": {
            "ja_JP": "\u30b9\u30af\u30ea\u30e5\u30fc\u30b9\u30ed\u30c3\u30b7\u30e3\u30fc",
            "en_US": "Sloshing Machine"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Launcher_01.png",
          "name": "Sloshing Machine Neo",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Splat-Bomb Launcher",
          "level": 19,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 8.4,
          "speedLevel": "Middle",
          "baseSpeed": 0.7,
          "price": 19800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 90,
            "{{ SHELDON_HANDLING | translate }}": 40
          },
          "id": 3021,
          "localizedName": {
            "ja_JP": "\u30b9\u30af\u30ea\u30e5\u30fc\u30b9\u30ed\u30c3\u30b7\u30e3\u30fc\u30cd\u30aa",
            "en_US": "Sloshing Machine Neo"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Launcher_02.png",
          "name": "Kensa Sloshing Machine",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Fizzy Bomb",
          "special": "Splashdown",
          "level": 21,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 8.4,
          "speedLevel": "Middle",
          "baseSpeed": 0.7,
          "price": 20700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 90,
            "{{ SHELDON_HANDLING | translate }}": 40
          },
          "id": 3022,
          "localizedName": {
            "ja_JP": "\u30b9\u30af\u30ea\u30e5\u30fc\u30b9\u30ed\u30c3\u30b7\u30e3\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Sloshing Machine"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Bathtub_00.png",
          "name": "Bloblobber",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Ink Storm",
          "level": 11,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 8.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.5,
          "price": 10000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_DAMAGE | translate }}": 29,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          "id": 3030,
          "localizedName": {
            "ja_JP": "\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30c3\u30b7\u30e3\u30fc",
            "en_US": "Bloblobber"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Bathtub_01.png",
          "name": "Bloblobber Deco",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Suction-Bomb Launcher",
          "level": 20,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 8.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.5,
          "price": 17600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_DAMAGE | translate }}": 29,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          "id": 3031,
          "localizedName": {
            "ja_JP": "\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30c3\u30b7\u30e3\u30fc\u30c7\u30b3",
            "en_US": "Bloblobber Deco"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Washtub_00.png",
          "name": "Explosher",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Bubble Blower",
          "level": 18,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 11.5,
          "speedLevel": "Low",
          "baseSpeed": 0.45,
          "price": 10800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 77,
            "{{ SHELDON_DAMAGE | translate }}": 65,
            "{{ SHELDON_HANDLING | translate }}": 20
          },
          "id": 3040,
          "localizedName": {
            "ja_JP": "\u30a8\u30af\u30b9\u30d7\u30ed\u30c3\u30b7\u30e3\u30fc",
            "en_US": "Explosher"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Slosher_Washtub_01.png",
          "name": "Custom Explosher",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Baller",
          "level": 22,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 11.5,
          "speedLevel": "Low",
          "baseSpeed": 0.45,
          "price": 12400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 77,
            "{{ SHELDON_DAMAGE | translate }}": 65,
            "{{ SHELDON_HANDLING | translate }}": 20
          },
          "id": 3041,
          "localizedName": {
            "ja_JP": "\u30a8\u30af\u30b9\u30d7\u30ed\u30c3\u30b7\u30e3\u30fc\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom Explosher"
          }
        }
      ]
    },
    {
      "type": "Splatlings",
      "localizedName": {
        "ja_JP": "スピナー",
        "en_US": "Splatlings",
        "en_GB": "Splatlings",
        "es_ES": "Tintralladoras",
        "es_MX": "Garabateadors",
        "fr_FR": "Badigeonneur",
        "fr_CA": "Badigeonneur",
        "de_DE": "Splatling",
        "it_IT": "Splatting",
        "nl_NL": "Spetling",
        "ru_RU": "Брызгомет",
        "zh_HK": "スピナー (機関槍)"
      },
      "id": 6,
      "weapons": [
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Quick_00.png",
          "name": "Mini Splatling",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Tenta Missiles",
          "level": 23,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 15.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 12300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 80,
            "{{ SHELDON_MOBILITY | translate }}": 90
          },
          "id": 4000,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30b9\u30d4\u30ca\u30fc",
            "en_US": "Mini Splatling"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Quick_01.png",
          "name": "Zink Mini Splatling ",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Ink Storm",
          "level": 26,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 15.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 15400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 80,
            "{{ SHELDON_MOBILITY | translate }}": 90
          },
          "id": 4001,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30b9\u30d4\u30ca\u30fc\u30b3\u30e9\u30dc",
            "en_US": "Zink Mini Splatling "
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Quick_02.png",
          "name": "Kensa Mini Splatling",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Ultra Stamp",
          "level": 29,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 15.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 18800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 80,
            "{{ SHELDON_MOBILITY | translate }}": 90
          },
          "id": 4002,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30b9\u30d4\u30ca\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Mini Splatling"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Standard_00.png",
          "name": "Heavy Splatling",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Sting Ray",
          "level": 8,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 22.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.66,
          "price": 7800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 50
          },
          "id": 4010,
          "localizedName": {
            "ja_JP": "\u30d0\u30ec\u30eb\u30b9\u30d4\u30ca\u30fc",
            "en_US": "Heavy Splatling"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Standard_01.png",
          "name": "Heavy Splatling Deco",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Bubble Blower",
          "level": 12,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 22.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.66,
          "price": 9600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 50
          },
          "id": 4011,
          "localizedName": {
            "ja_JP": "\u30d0\u30ec\u30eb\u30b9\u30d4\u30ca\u30fc\u30c7\u30b3",
            "en_US": "Heavy Splatling Deco"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Standard_H.png",
          "name": "Hero Splatling Replica",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Sting Ray",
          "level": 8,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 22.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.66,
          "price": 8600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 50
          },
          "id": 4015,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30b9\u30d4\u30ca\u30fc \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Hero Splatling Replica"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Hyper_00.png",
          "name": "Hydra Splatling",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Splashdown",
          "level": 27,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 35.0,
          "speedLevel": "Low",
          "baseSpeed": 0.6,
          "price": 18500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 10,
            "{{ SHELDON_MOBILITY | translate }}": 20
          },
          "id": 4020,
          "localizedName": {
            "ja_JP": "\u30cf\u30a4\u30c9\u30e9\u30f3\u30c8",
            "en_US": "Hydra Splatling"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Hyper_01.png",
          "name": "Custom Hydra Splatling",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Ink Armor",
          "level": 29,
          "specialCost": 200,
          "inkSaver": "High",
          "inkPerShot": 35.0,
          "speedLevel": "Low",
          "baseSpeed": 0.6,
          "price": 33300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 10,
            "{{ SHELDON_MOBILITY | translate }}": 20
          },
          "id": 4021,
          "localizedName": {
            "ja_JP": "\u30cf\u30a4\u30c9\u30e9\u30f3\u30c8\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom Hydra Splatling"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Downpour_00.png",
          "name": "Ballpoint Splatling",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Inkjet",
          "level": 25,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 25.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.96,
          "price": 11600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 18,
            "{{ SHELDON_MOBILITY | translate }}": 60
          },
          "id": 4030,
          "localizedName": {
            "ja_JP": "\u30af\u30fc\u30b2\u30eb\u30b7\u30e5\u30e9\u30a4\u30d0\u30fc",
            "en_US": "Ballpoint Splatling"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Downpour_01.png",
          "name": "Ballpoint Splatling Nouveau",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Ink Storm",
          "level": 28,
          "specialCost": 230,
          "inkSaver": "Middle",
          "inkPerShot": 25.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.96,
          "price": 15800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 18,
            "{{ SHELDON_MOBILITY | translate }}": 60
          },
          "id": 4031,
          "localizedName": {
            "ja_JP": "\u30af\u30fc\u30b2\u30eb\u30b7\u30e5\u30e9\u30a4\u30d0\u30fc\u30fb\u30d2\u30e5\u30fc",
            "en_US": "Ballpoint Splatling Nouveau"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Serein_00.png",
          "name": "Nautilus 47",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Baller",
          "level": 26,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 15.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.7,
          "price": 14700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 74,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 37,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 4040,
          "localizedName": {
            "ja_JP": "\u30ce\u30fc\u30c1\u30e9\u30b947",
            "en_US": "Nautilus 47"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Spinner_Serein_01.png",
          "name": "Nautilus 79",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Inkjet",
          "level": 30,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 15.0,
          "speedLevel": "Middle",
          "baseSpeed": 0.7,
          "price": 27900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 74,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 37,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 4041,
          "localizedName": {
            "ja_JP": "\u30ce\u30fc\u30c1\u30e9\u30b979",
            "en_US": "Nautilus 79"
          }
        }
      ]
    },
    {
      "type": "Dualies",
      "localizedName": {
        "ja_JP": "マニューバー",
        "en_US": "Dualies",
        "en_GB": "Dualies",
        "es_ES": "Clase Dual",
        "es_MX": "Clase Dual",
        "fr_FR": "Armes doubles",
        "fr_CA": "Armes doubles",
        "de_DE": "Dopplerklasse",
        "it_IT": "Armi \"duplo\"",
        "nl_NL": "Dubbelknaller",
        "ru_RU": "Двойной класс",
        "zh_HK": "マニューバー (双槍)"
      },
      "id": 7,
      "weapons": [
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Short_00.png",
          "name": "Dapple Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Suction-Bomb Launcher",
          "level": 26,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 0.75,
          "speedLevel": "High",
          "baseSpeed": 0.8,
          "price": 14700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 24,
            "{{ SHELDON_DAMAGE | translate }}": 47,
            "{{ SHELDON_MOBILITY | translate }}": 80
          },
          "id": 5000,
          "localizedName": {
            "ja_JP": "\u30b9\u30d1\u30c3\u30bf\u30ea\u30fc",
            "en_US": "Dapple Dualies"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Short_01.png",
          "name": "Dapple Dualies Nouveau",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Toxic Mist",
          "special": "Ink Storm",
          "level": 29,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 0.75,
          "speedLevel": "High",
          "baseSpeed": 0.8,
          "price": 17500,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 24,
            "{{ SHELDON_DAMAGE | translate }}": 47,
            "{{ SHELDON_MOBILITY | translate }}": 80
          },
          "id": 5001,
          "localizedName": {
            "ja_JP": "\u30b9\u30d1\u30c3\u30bf\u30ea\u30fc\u30fb\u30d2\u30e5\u30fc",
            "en_US": "Dapple Dualies Nouveau"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Normal_00.png",
          "name": "Splat Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Tenta Missiles",
          "level": 4,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 2400,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 29,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 5010,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30de\u30cb\u30e5\u30fc\u30d0\u30fc",
            "en_US": "Splat Dualies"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Normal_01.png",
          "name": "Enperry Splat Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Curling Bomb",
          "special": "Inkjet",
          "level": 11,
          "specialCost": 220,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 9000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 29,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 5011,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30de\u30cb\u30e5\u30fc\u30d0\u30fc\u30b3\u30e9\u30dc",
            "en_US": "Enperry Splat Dualies"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Normal_02.png",
          "name": "Kensa Splat Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Suction Bomb",
          "special": "Baller",
          "level": 16,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 13000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 29,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 5012,
          "localizedName": {
            "ja_JP": "\u30b9\u30d7\u30e9\u30de\u30cb\u30e5\u30fc\u30d0\u30fc\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Splat Dualies"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Normal_H.png",
          "name": "Hero Dualie Replicas",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Burst Bomb",
          "special": "Tenta Missiles",
          "level": 4,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.8,
          "price": 3100,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 29,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 5015,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30de\u30cb\u30e5\u30fc\u30d0\u30fc \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Hero Dualie Replicas"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Gallon_00.png",
          "name": "Glooga Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Inkjet",
          "level": 17,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.6,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 11800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 66,
            "{{ SHELDON_DAMAGE | translate }}": 76,
            "{{ SHELDON_MOBILITY | translate }}": 35
          },
          "id": 5020,
          "localizedName": {
            "ja_JP": "\u30b1\u30eb\u30d3\u30f3525",
            "en_US": "Glooga Dualies"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Gallon_01.png",
          "name": "Glooga Dualies Deco",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Baller",
          "level": 24,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.6,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 13700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 66,
            "{{ SHELDON_DAMAGE | translate }}": 76,
            "{{ SHELDON_MOBILITY | translate }}": 35
          },
          "id": 5021,
          "localizedName": {
            "ja_JP": "\u30b1\u30eb\u30d3\u30f3525\u30c7\u30b3",
            "en_US": "Glooga Dualies Deco"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Gallon_02.png",
          "name": "Kensa Glooga Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Fizzy Bomb",
          "special": "Ink Armor",
          "level": 27,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 1.6,
          "speedLevel": "Middle",
          "baseSpeed": 0.6,
          "price": 17000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 66,
            "{{ SHELDON_DAMAGE | translate }}": 76,
            "{{ SHELDON_MOBILITY | translate }}": 35
          },
          "id": 5022,
          "localizedName": {
            "ja_JP": "\u30b1\u30eb\u30d3\u30f3525\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Glooga Dualies"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Dual_00.png",
          "name": "Dualie Squelchers",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Point Sensor",
          "special": "Tenta Missiles",
          "level": 12,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 1.2,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 9800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 5030,
          "localizedName": {
            "ja_JP": "\u30c7\u30e5\u30a2\u30eb\u30b9\u30a4\u30fc\u30d1\u30fc",
            "en_US": "Dualie Squelchers"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Dual_01.png",
          "name": "Custom Dualie Squelchers",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Ink Storm",
          "level": 16,
          "specialCost": 210,
          "inkSaver": "Middle",
          "inkPerShot": 1.2,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 12900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          "id": 5031,
          "localizedName": {
            "ja_JP": "\u30c7\u30e5\u30a2\u30eb\u30b9\u30a4\u30fc\u30d1\u30fc\u30ab\u30b9\u30bf\u30e0",
            "en_US": "Custom Dualie Squelchers"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Stepper_00.png",
          "name": "Dark Tetra Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Splashdown",
          "level": 14,
          "specialCost": 190,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 10700,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_MOBILITY | translate }}": 90
          },
          "id": 5040,
          "localizedName": {
            "ja_JP": "\u30af\u30a2\u30c3\u30c9\u30db\u30c3\u30d1\u30fc\u30d6\u30e9\u30c3\u30af",
            "en_US": "Dark Tetra Dualies"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Twins_Stepper_01.png",
          "name": "Light Tetra Dualies",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Autobomb Launcher",
          "level": 21,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 0.8,
          "speedLevel": "Middle",
          "baseSpeed": 0.72,
          "price": 13300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 22,
            "{{ SHELDON_MOBILITY | translate }}": 90
          },
          "id": 5041,
          "localizedName": {
            "ja_JP": "\u30af\u30a2\u30c3\u30c9\u30db\u30c3\u30d1\u30fc\u30db\u30ef\u30a4\u30c8",
            "en_US": "Light Tetra Dualies"
          }
        }
      ]
    },
    {
      "type": "Brellas",
      "localizedName": {
        "ja_JP": "シェルター",
        "en_US": "Brellas",
        "en_GB": "Brellas",
        "es_ES": "Paratintas",
        "es_MX": "Paratintas",
        "fr_FR": "Para-encre",
        "fr_CA": "Para-encre",
        "de_DE": "Regenschirm",
        "it_IT": "Sparasole",
        "nl_NL": "Plenzer",
        "ru_RU": "Сплат-зонт",
        "zh_HK": "シェルター (遮)"
      },
      "id": 8,
      "weapons": [    
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Normal_00.png",
          "name": "Splat Brella",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Ink Storm",
          "level": 9,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 5.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.65,
          "price": 8300,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 43,
            "{{ SHELDON_DAMAGE | translate }}": 65,
            "{{ SHELDON_DURABILITY | translate }}": 60
          },
          "id": 6000,
          "localizedName": {
            "ja_JP": "\u30d1\u30e9\u30b7\u30a7\u30eb\u30bf\u30fc",
            "en_US": "Splat Brella"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Normal_01.png",
          "name": "Sorella Brella",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Autobomb",
          "special": "Splat-Bomb Launcher",
          "level": 15,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 5.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.65,
          "price": 12000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 43,
            "{{ SHELDON_DAMAGE | translate }}": 65,
            "{{ SHELDON_DURABILITY | translate }}": 60
          },
          "id": 6001,
          "localizedName": {
            "ja_JP": "\u30d1\u30e9\u30b7\u30a7\u30eb\u30bf\u30fc\u30bd\u30ec\u30fc\u30e9",
            "en_US": "Sorella Brella"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Normal_H.png",
          "name": "Hero Brella Replica",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Sprinkler",
          "special": "Ink Storm",
          "level": 9,
          "specialCost": 200,
          "inkSaver": "Middle",
          "inkPerShot": 5.5,
          "speedLevel": "Middle",
          "baseSpeed": 0.65,
          "price": 9000,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 43,
            "{{ SHELDON_DAMAGE | translate }}": 65,
            "{{ SHELDON_DURABILITY | translate }}": 60
          },
          "id": 6005,
          "localizedName": {
            "ja_JP": "\u30d2\u30fc\u30ed\u30fc\u30b7\u30a7\u30eb\u30bf\u30fc \u30ec\u30d7\u30ea\u30ab",
            "en_US": "Hero Brella Replica"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Wide_00.png",
          "name": "Tenta Brella",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Squid Beakon",
          "special": "Bubble Blower",
          "level": 23,
          "specialCost": 190,
          "inkSaver": "High",
          "inkPerShot": 10.0,
          "speedLevel": "Low",
          "baseSpeed": 0.5,
          "price": 14200,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_DURABILITY | translate }}": 85
          },
          "id": 6010,
          "localizedName": {
            "ja_JP": "\u30ad\u30e3\u30f3\u30d4\u30f3\u30b0\u30b7\u30a7\u30eb\u30bf\u30fc",
            "en_US": "Tenta Brella"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Wide_01.png",
          "name": "Tenta Sorella Brella",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splash Wall",
          "special": "Curling-Bomb Launcher",
          "level": 28,
          "specialCost": 170,
          "inkSaver": "High",
          "inkPerShot": 10.0,
          "speedLevel": "Low",
          "baseSpeed": 0.5,
          "price": 18600,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_DURABILITY | translate }}": 85
          },
          "id": 6011,
          "localizedName": {
            "ja_JP": "\u30ad\u30e3\u30f3\u30d4\u30f3\u30b0\u30b7\u30a7\u30eb\u30bf\u30fc\u30bd\u30ec\u30fc\u30e9",
            "en_US": "Tenta Sorella Brella"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Compact_00.png",
          "name": "Undercover Brella",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Ink Mine",
          "special": "Splashdown",
          "level": 13,
          "specialCost": 150,
          "inkSaver": "Middle",
          "inkPerShot": 4.0,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 9100,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 30,
            "{{ SHELDON_DURABILITY | translate }}": 25
          },
          "id": 6020,
          "localizedName": {
            "ja_JP": "\u30b9\u30d1\u30a4\u30ac\u30b8\u30a7\u30c3\u30c8",
            "en_US": "Undercover Brella"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Compact_01.png",
          "name": "Undercover Sorella Brella",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Splat Bomb",
          "special": "Baller",
          "level": 19,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 4.0,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 11900,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 30,
            "{{ SHELDON_DURABILITY | translate }}": 25
          },
          "id": 6021,
          "localizedName": {
            "ja_JP": "\u30b9\u30d1\u30a4\u30ac\u30b8\u30a7\u30c3\u30c8\u30bd\u30ec\u30fc\u30e9",
            "en_US": "Undercover Sorella Brella"
          }
        },
        {
          "image": "../common/assets/img/weapons/Wst_Umbrella_Compact_02.png",
          "name": "Kensa Undercover Brella",
          "shotUnit": "{{ SHOT_UNIT_SHOT | translate }}",
          "sub": "Torpedo",
          "special": "Ink Armor",
          "level": 24,
          "specialCost": 180,
          "inkSaver": "Middle",
          "inkPerShot": 4.0,
          "speedLevel": "High",
          "baseSpeed": 0.72,
          "price": 14800,
          "stats": {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_DAMAGE | translate }}": 30,
            "{{ SHELDON_DURABILITY | translate }}": 25
          },
          "id": 6022,
          "localizedName": {
            "ja_JP": "\u30b9\u30d1\u30a4\u30ac\u30b8\u30a7\u30c3\u30c8\u30d9\u30c3\u30c1\u30e5\u30fc",
            "en_US": "Kensa Undercover Brella"
          }
        }
      ]
    }
  ]

  $scope.getWeaponSetById = function(setid) {
    return $scope.weaponSets.filter(function(set) {
      return set.id == setid
    })[0]
  }

  $scope.getWeaponById = function(setid, weaponid) {
    return $scope.getWeaponSetById(setid).weapons.filter(function(weapon) {
      return weapon.id == weaponid
    })[0]
  }
}