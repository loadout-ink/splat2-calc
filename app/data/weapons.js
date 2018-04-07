angular.module('splatApp').weapons = function ($scope) {
  $scope.weaponSets = [
    {
      type: "Shooters",
      localizedName: {
        "ja_JP": "シューター",
        "en_US": "Shooters",
        "en_GB": "Shooters",
        "es_ES": "Lanzatintas",
        "es_MX": "Rociadors",
        "fr_FR": "Lanceur",
        "fr_CA": "Lanceur",
        "de_DE": "Shooters"
      },
      id: 0,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Shooter_First_00.png",
          name: "Splattershot Jr.",
          localizedName: {
            "ja_JP": "わかばシューター",
            "en_US": "Splattershot Jr.",
            "en_GB": "Splattershot Jr.",
            "es_ES": "Lanzatintas novato",
            "es_MX": "Rociador básico",
            "fr_FR": "Liquidateur Jr.",
            "fr_CA": "Liquéficateur ultra",
            "de_DE": "Junior-Kleckser"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splat Bomb",
          special: "Ink Armor",
          level: 1,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.5,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 0,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_First_01.png",
          name: "Custom Splattershot Jr.",
          localizedName: {
            "ja_JP": "もみじシューター",
            "en_US": "Custom Splattershot Jr.",
            "en_GB": "Custom Splattershot Jr.",
            "es_ES": "Lanzatintas novato B",
            "es_MX": "Rociador básico adaptado",
            "fr_FR": "Liquidateur Sr.",
            "fr_CA": "Liquéficateur ultra modifié",
            "de_DE": "Junior-Kleckser Plus"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Autobomb",
          special: "Ink Storm",
          level: 4,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 0.5,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 1900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Normal_00.png",
          name: "Splattershot",
          localizedName: {
            "ja_JP": "スプラシューター",
            "en_US": "Splattershot",
            "en_GB": "Splattershot",
            "es_ES": "Lanzatintas",
            "es_MX": "Rociador",
            "fr_FR": "Liquidateur",
            "fr_CA": "Liquéficateur",
            "de_DE": "Kleckser"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Burst Bomb",
          special: "Splashdown",
          level: 2,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_FIRE_RATE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 45
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Normal_H.png",
          name: "Hero Shot Replica",
          localizedName: {
            "ja_JP": "ヒーローシューター レプリカ",
            "en_US": "Hero Shot Replica",
            "en_GB": "Hero Shot Replica",
            "es_ES": "Pistola de Élite (réplica)",
            "es_MX": "Rociador de élite réplica",
            "fr_FR": "Lanceur héroïque (réplique)",
            "fr_CA": "Liquéfi. héroïque (rép.)",
            "de_DE": "Heldenwaffe Replik"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Burst Bomb",
          special: "Splashdown",
          level: 2,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 1500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_FIRE_RATE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 45
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Normal_01.png",
          name: "Tentatek Splattershot",
          localizedName: {
            "ja_JP": "スプラシューターコラボ",
            "en_US": "Tentatek Splattershot",
            "en_GB": "Tentatek Splattershot",
            "es_ES": "Lanzatintas B",
            "es_MX": "Rociador Tentáctica",
            "fr_FR": "Liquidateur griffé",
            "fr_CA": "Liquéficateur Tentatek",
            "de_DE": "Tentatek-Kleckser"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splat Bomb",
          special: "Inkjet",
          level: 4,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 2100,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_FIRE_RATE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 45
          },
          id: 4
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Expert_00.png",
          name: "Splattershot Pro",
          localizedName: {
            "ja_JP": "プライムシューター",
            "en_US": "Splattershot Pro",
            "en_GB": "Splattershot Pro",
            "es_ES": "Lanzatintas plus",
            "es_MX": "Rociador Pro",
            "fr_FR": "Liquidateur pro",
            "fr_CA": "Liquéficateur pro",
            "de_DE": "Profi-Kleckser"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Point Sensor",
          special: "Ink Storm",
          level: 10,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 2,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 13800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_DAMAGE | translate }}": 60
          },
          id: 5
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Expert_01.png",
          name: "Forge Splattershot Pro",
          localizedName: {
            "ja_JP": "プライムシューターコラボ",
            "en_US": "Forge Splattershot Pro",
            "en_GB": "Forge Splattershot Pro",
            "es_ES": "Lanzatintas plus B",
            "es_MX": "Rociador Forima",
            "fr_FR": "Liquidateur pro griffé",
            "fr_CA": "Liquéficateur pro Fosia",
            "de_DE": "Focus-Profi-Kleckser"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Suction Bomb",
          special: "Bubble Blower",
          level: 20,
          specialCost: 200,
          inkSaver: "High",
          inkPerShot: 2,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 20800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_DAMAGE | translate }}": 60
          },
          id: 6
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Blaze_00.png",
          name: "Aerospray MG",
          localizedName: {
            "ja_JP": "プロモデラーMG",
            "en_US": "Aerospray MG",
            "en_GB": "Aerospray MG",
            "es_ES": "Aerógrafo pro",
            "es_MX": "Aerógrafo GP",
            "fr_FR": "Aérogun",
            "fr_CA": "Pouche-pouche",
            "de_DE": "Airbrush MG"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Suction Bomb",
          special: "Curling-Bomb Launcher",
          level: 6,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 0.55,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 4900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 90,
            "{{ SHELDON_DAMAGE | translate }}": 10
          },
          id: 7
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Blaze_01.png",
          name: "Aerospray RG",
          localizedName: {
            "ja_JP": "プロモデラーRG",
            "en_US": "Aerospray RG",
            "en_GB": "Aerospray RG",
            "es_ES": "Aerógrafo plus",
            "es_MX": "Aerógrafo GN",
            "fr_FR": "Aérogun premium",
            "fr_CA": "Pouche-pouche premium",
            "de_DE": "Airbrush RG"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Sprinkler",
          special: "Baller",
          level: 28,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.55,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 16900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 90,
            "{{ SHELDON_DAMAGE | translate }}": 10
          },
          id: 8
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_QuickMiddle_00.png",
          name: "N-ZAP '85",
          localizedName: {
            "ja_JP": "N-ZAP85",
            "en_US": "N-ZAP '85",
            "en_GB": "N-ZAP '85",
            "es_ES": "N-ZAP 85",
            "es_MX": "N-ZAP 85",
            "fr_FR": "N-ZAP 85",
            "fr_CA": "N-ZAP 85",
            "de_DE": "N-ZAP85"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Suction Bomb",
          special: "Ink Armor",
          level: 9,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.84,
          price: 7100,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 9
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_QuickMiddle_01.png",
          name: "N-ZAP '89",
          localizedName: {
            "ja_JP": "N-ZAP89",
            "en_US": "N-ZAP '89",
            "en_GB": "N-ZAP '89",
            "es_ES": "N-ZAP 89",
            "es_MX": "N-ZAP 89",
            "fr_FR": "N-ZAP 89",
            "fr_CA": "N-ZAP 89",
            "de_DE": "N-ZAP89"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Autobomb",
          special: "Tenta Missiles",
          level: 11,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.84,
          price: 8800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 10
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Short_00.png",
          name: "Sploosh-o-matic",
          localizedName: {
            "ja_JP": "ボールドマーカー",
            "en_US": "Sploosh-o-matic",
            "en_GB": "Sploosh-o-matic",
            "es_ES": "Marcador",
            "es_MX": "Marcador grueso",
            "fr_FR": "Marqueur lourd",
            "fr_CA": "Marqueur lourd",
            "de_DE": "Disperser"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 10,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 9700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 12,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 52
          },
          id: 11
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Short_01.png",
          name: "Neo Sploosh-o-matic",
          localizedName: {
            "ja_JP": "ボールドマーカーネオ",
            "en_US": "Neo Sploosh-o-matic",
            "en_GB": "Neo Sploosh-o-matic",
            "es_ES": "Marcador neo",
            "es_MX": "Marcador grueso neo",
            "fr_FR": "Marqueur lourd Néo",
            "fr_CA": "Marqueur lourd néo",
            "de_DE": "Neo Sploosh-o-matic"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Squid Beakon",
          special: "Tenta Missiles",
          level: 18,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 12200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 12,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 52
          },
          id: 12
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Precision_00.png",
          name: "Splash-o-matic",
          localizedName: {
            "ja_JP": "シャープマーカー",
            "en_US": "Splash-o-matic",
            "en_GB": "Splash-o-matic",
            "es_ES": "Marcador fino",
            "es_MX": "Plumón fino",
            "fr_FR": "Marqueur léger",
            "fr_CA": "Marqueur léger",
            "de_DE": "Fein-Disperser"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Toxic Mist",
          special: "Inkjet",
          level: 25,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 11200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 13
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Precision_01.png",
          name: "Neo Splash-o-matic",
          localizedName: {
            "ja_JP": "シャープマーカーネオ",
            "en_US": "Neo Splash-o-matic",
            "en_GB": "Neo Splash-o-matic",
            "es_ES": "Marcador fino neo",
            "es_MX": "Plumón neo",
            "fr_FR": "Marqueur léger Néo",
            "fr_CA": "Marqueur léger néo",
            "de_DE": "Neo Splash-o-matic"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Burst Bomb",
          special: "Suction-Bomb Launcher",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "High",
          baseSpeed: 0.72,
          price: 16800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 35,
            "{{ SHELDON_FIRE_RATE | translate }}": 75,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 14
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Gravity_00.png",
          name: ".52 Gal",
          localizedName: {
            "ja_JP": ".52ガロン",
            "en_US": ".52 Gal",
            "en_GB": ".52 Gal",
            "es_ES": "Salpicadora 2000",
            "es_MX": "Salpicadora 2000",
            "fr_FR": "Calibre 2000",
            "fr_CA": "Calibre 2000",
            "de_DE": ".52 Gallon"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Point Sensor",
          special: "Baller",
          level: 14,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.3,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 9500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_FIRE_RATE | translate }}": 25,
            "{{ SHELDON_DAMAGE | translate }}": 75
          },
          id: 15
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Gravity_01.png",
          name: ".52 Gal Deco",
          localizedName: {
            "ja_JP": ".52ガロンデコ",
            "en_US": ".52 Gal Deco",
            "en_GB": ".52 Gal Deco",
            "es_ES": "Salpicadora 2000 DX",
            "es_MX": "Salpicadora 2000 chic",
            "fr_FR": "Calibre 2000 chic",
            "fr_CA": "Calibre 2000 chic",
            "de_DE": ".52 Gal Deco"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Curling Bomb",
          special: "Sting Ray",
          level: 22,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 1.3,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 12700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_FIRE_RATE | translate }}": 25,
            "{{ SHELDON_DAMAGE | translate }}": 75
          },
          id: 16
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Heavy_00.png",
          name: ".96 Gal",
          localizedName: {
            "ja_JP": ".96ガロン",
            "en_US": ".96 Gal",
            "en_GB": ".96 Gal",
            "es_ES": "Salpicadora 3000",
            "es_MX": "Salpicadora 3000",
            "fr_FR": "Calibre 3000",
            "fr_CA": "Calibre 3000",
            "de_DE": ".96 Gallon"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Sprinkler",
          special: "Ink Armor",
          level: 21,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 2.5,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 12600,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 10,
            "{{ SHELDON_DAMAGE | translate }}": 75
          },
          id: 17
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Heavy_01.png",
          name: ".96 Gal Deco",
          localizedName: {
            "ja_JP": ".96ガロンデコ",
            "en_US": ".96 Gal Deco",
            "en_GB": ".96 Gal Deco",
            "es_ES": "Salpicadora 3000 DX",
            "es_MX": "Salpicadora 3000 chic",
            "fr_FR": "Calibre 3000 chic",
            "fr_CA": "Calibre 3000 chic",
            "de_DE": ".96 Gal Deco"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splash Wall",
          special: "Splashdown",
          level: 26,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 2.5,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 16200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 10,
            "{{ SHELDON_DAMAGE | translate }}": 75
          },
          id: 18
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Long_00.png",
          name: "Jet Squelcher",
          localizedName: {
            "ja_JP": "ジェットスイーパー",
            "en_US": "Jet Squelcher",
            "en_GB": "Jet Squelcher",
            "es_ES": "Megabarredora",
            "es_MX": "Megasoplador",
            "fr_FR": "Nettoyeur XL",
            "fr_CA": "Méganettoyeur",
            "de_DE": "Platscher"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Toxic Mist",
          special: "Tenta Missiles",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.6,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 11300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 82,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_DAMAGE | translate }}": 35
          },
          id: 19
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Long_01.png",
          name: "Custom Jet Squelcher",
          localizedName: {
            "ja_JP": "ジェットスイーパーカスタム",
            "en_US": "Custom Jet Squelcher",
            "en_GB": "Custom Jet Squelcher",
            "es_ES": "Megabarredora SP",
            "es_MX": "Megasoplador adaptado",
            "fr_FR": "Nettoyeur XL modifié",
            "fr_CA": "Méganettoyeur modifié",
            "de_DE": "Platscher SE"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Burst Bomb",
          special: "Sting Ray",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1.6,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 15900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 82,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_DAMAGE | translate }}": 35
          },
          id: 20
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_TripleQuick_00.png",
          name: "L-3 Nozzlenose",
          localizedName: {
            "ja_JP": "L3リールガン",
            "en_US": "L-3 Nozzlenose",
            "en_GB": "L-3 Nozzlenose",
            "es_ES": "Tintambor ligero",
            "es_MX": "Manguera ligera",
            "fr_FR": "Arroseur léger",
            "fr_CA": "Arroseur léger",
            "de_DE": "L3 Tintenwerfer"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Curling Bomb",
          special: "Baller",
          level: 18,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 10400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_FIRE_RATE | translate }}": 65,
            "{{ SHELDON_DAMAGE | translate }}": 25
          },
          id: 21
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_TripleQuick_01.png",
          name: "L-3 Nozzlenose D",
          localizedName: {
            "ja_JP": "L3リールガンD",
            "en_US": "L-3 Nozzlenose D",
            "en_GB": "L-3 Nozzlenose D",
            "es_ES": "Tintambor ligero D",
            "es_MX": "Manguera ligera D",
            "fr_FR": "Arroseur léger Cétacé",
            "fr_CA": "Arroseur léger requin",
            "de_DE": "L-3 Nozzlenose D"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Burst Bomb",
          special: "Inkjet",
          level: 23,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 12500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_FIRE_RATE | translate }}": 65,
            "{{ SHELDON_DAMAGE | translate }}": 25
          },
          id: 22
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_TripleMiddle_00.png",
          name: "H-3 Nozzlenose",
          localizedName: {
            "ja_JP": "H3リールガン",
            "en_US": "H-3 Nozzlenose",
            "en_GB": "H-3 Nozzlenose",
            "es_ES": "Tintambor pesado",
            "es_MX": "Manguera pesada",
            "fr_FR": "Arroseur lourd",
            "fr_CA": "Arroseur lourd",
            "de_DE": "S3 Tintenwerfer"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Point Sensor",
          special: "Tenta Missiles",
          level: 29,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 1.8,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 17200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_DAMAGE | translate }}": 58
          },
          id: 23
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_TripleMiddle_01.png",
          name: "H-3 Nozzlenose D",
          localizedName: {
            "ja_JP": "H3リールガンD",
            "en_US": "H-3 Nozzlenose D",
            "en_GB": "H-3 Nozzlenose D",
            "es_ES": "Tintambor pesado D",
            "es_MX": "Manguera pesada D",
            "fr_FR": "Arroseur lourd Cétacé",
            "fr_CA": "Arroseur lourd requin",
            "de_DE": "H-3 Nozzlenose D"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Suction Bomb",
          special: "Ink Armor",
          level: 30,
          specialCost: 190,
          inkSaver: "High",
          inkPerShot: 1.8,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 18400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_DAMAGE | translate }}": 58
          },
          id: 24
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Flash_00.png",
          name: "Squeezer",
          localizedName: {
            "ja_JP": "Squeezer",
            "en_US": "Squeezer",
            "en_GB": "Squeezer",
            "es_ES": "Squeezer",
            "es_MX": "Squeezer",
            "fr_FR": "Squeezer",
            "fr_CA": "Squeezer",
            "de_DE": "Squeezer"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splash Wall",
          special: "Sting Ray",
          level: 16,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 9400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 45,
            "{{ SHELDON_DAMAGE | translate }}": 52
          },
          id: 25
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_Flash_01.png",
          name: "Foil Squeezer",
          localizedName: {
            "ja_JP": "Foil Squeezer",
            "en_US": "Foil Squeezer",
            "en_GB": "Foil Squeezer",
            "es_ES": "Foil Squeezer",
            "es_MX": "Foil Squeezer",
            "fr_FR": "Foil Squeezer",
            "fr_CA": "Foil Squeezer",
            "de_DE": "Foil Squeezer"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splat Bomb",
          special: "Bubble Blower",
          level: 25,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 10900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_FIRE_RATE | translate }}": 45,
            "{{ SHELDON_DAMAGE | translate }}": 52
          },
          id: 26
        }
      ]
    },
    {
      type: "Dualies",
      localizedName: {
        "ja_JP": "マニューバー",
        "en_US": "Dualies",
        "en_GB": "Dualies",
        "es_ES": "Clase Dual",
        "es_MX": "Clase Dual",
        "fr_FR": "Armes doubles",
        "fr_CA": "Armes doubles"
      },
      id: 1,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Twins_Normal_00.png",
          name: "Splat Dualies",
          localizedName: {
            "ja_JP": "スプラマニューバー",
            "en_US": "Splat Dualies",
            "en_GB": "Splat Dualies",
            "es_ES": "Difusor dual",
            "es_MX": "Difusor dual",
            "fr_FR": "Double encreur",
            "fr_CA": "Double encreur",
            "de_DE": "Klecks-Doppler"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 4,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 2400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 39,
            "{{ SHELDON_MOBILITY | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Normal_H.png",
          name: "Hero Dualie Replicas",
          localizedName: {
            "ja_JP": "ヒーローマニューバー レプリカ",
            "en_US": "Hero Dualie Replicas",
            "en_GB": "Hero Dualie Replicas",
            "es_ES": "Difusor dual de élite (réplica)",
            "es_MX": "Difusor dual de élite réplica",
            "fr_FR": "D. encreur héroïque (réplique)",
            "fr_CA": "Double encreur héroïque (rép.)",
            "de_DE": "Helden-Doubler Replik"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 4,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 3100,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 39,
            "{{ SHELDON_MOBILITY | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Normal_01.png",
          name: "Enperry Splat Dualies",
          localizedName: {
            "ja_JP": "スプラマニューバーコラボ",
            "en_US": "Enperry Splat Dualies",
            "en_GB": "Enperry Splat Dualies",
            "es_ES": "Difusor dual B",
            "es_MX": "Difusor dual Emperi",
            "fr_FR": "Double encreur griffé",
            "fr_CA": "Double encreur DUX",
            "de_DE": "Enperry-Klecks-Doppler"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Curling Bomb",
          special: "Inkjet",
          level: 11,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.8,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 9000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 39,
            "{{ SHELDON_MOBILITY | translate }}": 70,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Dual_00.png",
          name: "Dualie Squelchers",
          localizedName: {
            "ja_JP": "デュアルスイーパー",
            "en_US": "Dualie Squelchers",
            "en_GB": "Dualie Squelchers",
            "es_ES": "Barredora dual",
            "es_MX": "Barredora dual",
            "fr_FR": "Double nettoyeur",
            "fr_CA": "Double nettoyeur",
            "de_DE": "Dual-Platscher"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Point Sensor",
          special: "Tenta Missiles",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 9800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_MOBILITY | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Dual_01.png",
          name: "Custom Dualie Squelchers",
          localizedName: {
            "ja_JP": "Custom Dualie Squelchers",
            "en_US": "Custom Dualie Squelchers",
            "en_GB": "Custom Dualie Squelchers",
            "es_ES": "Custom Dualie Squelchers",
            "es_MX": "Custom Dualie Squelchers",
            "fr_FR": "Custom Dualie Squelchers",
            "fr_CA": "Custom Dualie Squelchers",
            "de_DE": "Custom Dualie Squelchers"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 16,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 1,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 12900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 70,
            "{{ SHELDON_MOBILITY | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 4
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Short_00.png",
          name: "Dapple Dualies",
          localizedName: {
            "ja_JP": "スパッタリー",
            "en_US": "Dapple Dualies",
            "en_GB": "Dapple Dualies",
            "es_ES": "Atomizador dual",
            "es_MX": "Atomizador dual",
            "fr_FR": "Double moucheteur",
            "fr_CA": "Double moucheteur",
            "de_DE": "Sprenkler"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Squid Beakon",
          special: "Suction-Bomb Launcher",
          level: 26,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 0.9,
          speedLevel: "High",
          baseSpeed: 0.8,
          price: 14700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 24,
            "{{ SHELDON_MOBILITY | translate }}": 80,
            "{{ SHELDON_DAMAGE | translate }}": 47
          },
          id: 5
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Short_01.png",
          name: "Dapple Dualies Nouveau",
          localizedName: {
            "ja_JP": "Dapple Dualies Nouveau",
            "en_US": "Dapple Dualies Nouveau",
            "en_GB": "Dapple Dualies Nouveau",
            "es_ES": "Dapple Dualies Nouveau",
            "es_MX": "Dapple Dualies Nouveau",
            "fr_FR": "Dapple Dualies Nouveau",
            "fr_CA": "Dapple Dualies Nouveau",
            "de_DE": "Dapple Dualies Nouveau"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Toxic Mist",
          special: "Ink Storm",
          level: 29,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 0.9,
          speedLevel: "High",
          baseSpeed: 0.8,
          price: 17500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 24,
            "{{ SHELDON_MOBILITY | translate }}": 80,
            "{{ SHELDON_DAMAGE | translate }}": 47
          },
          id: 6
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Stepper_00.png",
          name: "Dark Tetra Dualies",
          localizedName: {
            "ja_JP": "Dark Tetra Dualies",
            "en_US": "Dark Tetra Dualies",
            "en_GB": "Dark Tetra Dualies",
            "es_ES": "Dark Tetra Dualies",
            "es_MX": "Dark Tetra Dualies",
            "fr_FR": "Dark Tetra Dualies",
            "fr_CA": "Dark Tetra Dualies",
            "de_DE": "Dark Tetra Dualies"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Autobomb",
          special: "Splashdown",
          level: 14,
          specialCost: 170,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 10700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 90,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 7
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Stepper_01.png",
          name: "Light Tetra Dualies",
          localizedName: {
            "ja_JP": "Light Tetra Dualies",
            "en_US": "Light Tetra Dualies",
            "en_GB": "Light Tetra Dualies",
            "es_ES": "Light Tetra Dualies",
            "es_MX": "Light Tetra Dualies",
            "fr_FR": "Light Tetra Dualies",
            "fr_CA": "Light Tetra Dualies",
            "de_DE": "Light Tetra Dualies"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Sprinkler",
          special: "Splat-Bomb Launcher",
          level: 21,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 13300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 90,
            "{{ SHELDON_DAMAGE | translate }}": 22
          },
          id: 8
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Gallon_00.png",
          name: "Glooga Dualies",
          localizedName: {
            "ja_JP": "ケルビン525",
            "en_US": "Glooga Dualies",
            "en_GB": "Glooga Dualies",
            "es_ES": "Fundidora 525 dual",
            "es_MX": "Fundidora 525 dual",
            "fr_FR": "Double Kelvin 525",
            "fr_CA": "Double Kelvin 525",
            "de_DE": "Kelvin 525"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Ink Mine",
          special: "Inkjet",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 11800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 56,
            "{{ SHELDON_MOBILITY | translate }}": 35,
            "{{ SHELDON_DAMAGE | translate }}": 76
          },
          id: 9
        },
        {
          image: "../common/assets/img/weapons/Wst_Twins_Gallon_01.png",
          name: "Glooga Dualies Deco",
          localizedName: {
            "ja_JP": "Glooga Dualies Deco",
            "en_US": "Glooga Dualies Deco",
            "en_GB": "Glooga Dualies Deco",
            "es_ES": "Glooga Dualies Deco",
            "es_MX": "Glooga Dualies Deco",
            "fr_FR": "Glooga Dualies Deco",
            "fr_CA": "Glooga Dualies Deco",
            "de_DE": "Glooga Dualies Deco"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splash Wall",
          special: "Baller",
          level: 24,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          price: 13700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 56,
            "{{ SHELDON_MOBILITY | translate }}": 35,
            "{{ SHELDON_DAMAGE | translate }}": 76
          },
          id: 10
        }
      ]
    },
    {
      type: "Rollers",
      localizedName: {
        "ja_JP": "ローラー",
        "en_US": "Rollers",
        "en_GB": "Rollers",
        "es_ES": "Rodillos",
        "es_MX": "Rodillos",
        "fr_FR": "Rouleau",
        "fr_CA": "Rouleau",
        "de_DE": "Rollers"
      },
      id: 2,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Roller_Normal_00.png",
          name: "Splat Roller",
          localizedName: {
            "ja_JP": "スプラローラー",
            "en_US": "Splat Roller",
            "en_GB": "Splat Roller",
            "es_ES": "Rodillo básico",
            "es_MX": "Rodillo básico",
            "fr_FR": "Rouleau",
            "fr_CA": "Rouleau",
            "de_DE": "Klecksroller"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 3,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 1800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 48,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 55
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Normal_H.png",
          name: "Hero Roller Replica",
          localizedName: {
            "ja_JP": "ヒーローローラー レプリカ",
            "en_US": "Hero Roller Replica",
            "en_GB": "Hero Roller Replica",
            "es_ES": "Rodillo de élite (réplica)",
            "es_MX": "Rodillo de élite réplica",
            "fr_FR": "Rouleau héroïque (réplique)",
            "fr_CA": "Rouleau héroïque (rép.)",
            "de_DE": "Helden-Roller Replik"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Curling Bomb",
          special: "Splashdown",
          level: 3,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 2300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 48,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 55
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Normal_01.png",
          name: "Krak-On Splat Roller",
          localizedName: {
            "ja_JP": "スプラローラーコラボ",
            "en_US": "Krak-On Splat Roller",
            "en_GB": "Krak-On Splat Roller",
            "es_ES": "Rodillo básico B",
            "es_MX": "Rodillo básico Meddux",
            "fr_FR": "Rouleau griffé",
            "fr_CA": "Rouleau Krakeurs",
            "de_DE": "Medusa-Klecksroller"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Squid Beakon",
          special: "Baller",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 9200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 48,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 55
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Compact_00.png",
          name: "Carbon Roller",
          localizedName: {
            "ja_JP": "カーボンローラー",
            "en_US": "Carbon Roller",
            "en_GB": "Carbon Roller",
            "es_ES": "Rodillo de carbono",
            "es_MX": "Rodillo de carbono",
            "fr_FR": "Rouleau carbone",
            "fr_CA": "Rouleau carbone",
            "de_DE": "Karbonroller"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Autobomb",
          special: "Ink Storm",
          level: 7,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 4.5,
          speedLevel: "High",
          baseSpeed: 1.28,
          price: 6200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 20,
            "{{ SHELDON_INK_SPEED | translate }}": 63,
            "{{ SHELDON_HANDLING | translate }}": 65
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Compact_01.png",
          name: "Carbon Roller Deco",
          localizedName: {
            "ja_JP": "カーボンローラーデコ",
            "en_US": "Carbon Roller Deco",
            "en_GB": "Carbon Roller Deco",
            "es_ES": "Rodillo de carbono DX",
            "es_MX": "Rodillo de carbono chic",
            "fr_FR": "Rouleau carbone chic",
            "fr_CA": "Rouleau carbone chic",
            "de_DE": "Carbon Roller Deco" // TODO
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Sprinkler",
          special: "Inkjet",
          level: 10,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 4.5,
          speedLevel: "High",
          baseSpeed: 1.28,
          price: 8500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 20,
            "{{ SHELDON_INK_SPEED | translate }}": 63,
            "{{ SHELDON_HANDLING | translate }}": 65
          },
          id: 4
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Heavy_00.png",
          name: "Dynamo Roller",
          localizedName: {
            "ja_JP": "ダイナモローラー",
            "en_US": "Dynamo Roller",
            "en_GB": "Dynamo Roller",
            "es_ES": "Dinamorrodillo",
            "es_MX": "Rodillo Pro",
            "fr_FR": "Dynamo-rouleau",
            "fr_CA": "Dynamo-rouleau",
            "de_DE": "Dynaroller"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Ink Mine",
          special: "Sting Ray",
          level: 20,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 18,
          speedLevel: "Low",
          baseSpeed: 0.88,
          price: 24500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 76,
            "{{ SHELDON_INK_SPEED | translate }}": 25,
            "{{ SHELDON_HANDLING | translate }}": 20
          },
          id: 5
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Heavy_01.png",
          name: "Gold Dynamo Roller",
          localizedName: {
            "ja_JP": "ダイナモローラーテスラ",
            "en_US": "Gold Dynamo Roller",
            "en_GB": "Gold Dynamo Roller",
            "es_ES": "Dinamorrodillo T",
            "es_MX": "Rodillo Pro dorado",
            "fr_FR": "Dynamo-rouleau tesla",
            "fr_CA": "Dynamo-rouleau pro",
            "de_DE": "Dynaroller Tesla"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Splat Bomb",
          special: "Ink Armor",
          level: 25,
          specialCost: 190,
          inkSaver: "High",
          inkPerShot: 18,
          speedLevel: "Low",
          baseSpeed: 0.88,
          price: 29000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 76,
            "{{ SHELDON_INK_SPEED | translate }}": 25,
            "{{ SHELDON_HANDLING | translate }}": 20
          },
          id: 6
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Hunter_00.png",
          name: "Flingza Roller",
          localizedName: {
            "ja_JP": "ヴァリアブルローラー",
            "en_US": "Flingza Roller",
            "en_GB": "Flingza Roller",
            "es_ES": "Rodillo versátil",
            "es_MX": "Rodillo versátil",
            "fr_FR": "Flexi-rouleau",
            "fr_CA": "Flexi-rouleau",
            "de_DE": "Flex-Roller"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK_HORIZ | translate }}",
          sub: "Splash Wall",
          special: "Splat-Bomb Launcher",
          level: 24,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 15700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 55,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 45
          },
          id: 7
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_Hunter_01.png",
          name: "Foil Flingza Roller",
          localizedName: {
            "ja_JP": "ヴァリアブルローラーフォイル",
            "en_US": "Foil Flingza Roller",
            "en_GB": "Foil Flingza Roller",
            "es_ES": "Rodillo versátil B",
            "es_MX": "Rodillo versátil Foil",
            "fr_FR": "Flexi-rouleau alu",
            "fr_CA": "Flexi-rouleau aluminium",
            "de_DE": "Flex-Roller Fol"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK_HORIZ | translate }}",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 28,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          baseSpeed: 1.08,
          price: 21300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 55,
            "{{ SHELDON_INK_SPEED | translate }}": 45,
            "{{ SHELDON_HANDLING | translate }}": 45
          },
          id: 8
        }
      ]
    },
    {
      type: "Brushes",
      localizedName: {
        "ja_JP": "フデ",
        "en_US": "Brushes",
        "en_GB": "Brushes",
        "es_ES": "Brochas",
        "es_MX": "Brochas",
        "fr_FR": "Épinceau",
        "fr_CA": "Épinceau",
        "de_DE": "Brushes"
      },
      id: 3,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Roller_BrushMini_00.png",
          name: "Inkbrush",
          localizedName: {
            "ja_JP": "パブロ",
            "en_US": "Inkbrush",
            "en_GB": "Inkbrush",
            "es_ES": "Pincel",
            "es_MX": "Pincel",
            "fr_FR": "Épinceau",
            "fr_CA": "Épinceau",
            "de_DE": "Quasto"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Splat Bomb",
          special: "Splashdown",
          level: 5,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 2,
          speedLevel: "High",
          baseSpeed: 1.92,
          price: 2600,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 5,
            "{{ SHELDON_INK_SPEED | translate }}": 100,
            "{{ SHELDON_HANDLING | translate }}": 100
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_BrushMini_01.png",
          name: "Inkbrush Nouveau",
          localizedName: {
            "ja_JP": "パブロ・ヒュー",
            "en_US": "Inkbrush Nouveau",
            "en_GB": "Inkbrush Nouveau",
            "es_ES": "Pincel maestro",
            "es_MX": "Pincel maestro",
            "fr_FR": "Épinceau nuancé",
            "fr_CA": "Épinceau nuancé",
            "de_DE": "Quasto Fresco"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Ink Mine",
          special: "Baller",
          level: 7,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 2,
          speedLevel: "High",
          baseSpeed: 1.92,
          price: 7000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 5,
            "{{ SHELDON_INK_SPEED | translate }}": 100,
            "{{ SHELDON_HANDLING | translate }}": 100
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_BrushNormal_00.png",
          name: "Octobrush",
          localizedName: {
            "ja_JP": "ホクサイ",
            "en_US": "Octobrush",
            "en_GB": "Octobrush",
            "es_ES": "Brocha",
            "es_MX": "Brocha",
            "fr_FR": "Épinceau brosse",
            "fr_CA": "Épinceau brosse",
            "de_DE": "Kalligraf"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Autobomb",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          baseSpeed: 1.68,
          price: 8200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 23,
            "{{ SHELDON_INK_SPEED | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 85
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_BrushNormal_H.png",
          name: "Herobrush Replica",
          localizedName: {
            "ja_JP": "ヒーローブラシ レプリカ",
            "en_US": "Herobrush Replica",
            "en_GB": "Herobrush Replica",
            "es_ES": "Brocha de élite (réplica)",
            "es_MX": "Pincel caligrafía de élite réplica",
            "fr_FR": "Épinceau héroïque (réplique)",
            "fr_CA": "Épinceau héroïque (rép.)",
            "de_DE": "Helden-Pinsel Replik"
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Autobomb",
          special: "Inkjet",
          level: 10,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          baseSpeed: 1.68,
          price: 9400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 23,
            "{{ SHELDON_INK_SPEED | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 85
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Roller_BrushNormal_01.png",
          name: "Octobrush Nouveau",
          localizedName: {
            "ja_JP": "ホクサイ・ヒュー",
            "en_US": "Octobrush Nouveau",
            "en_GB": "Octobrush Nouveau",
            "es_ES": "Brocha maestra",
            "es_MX": "Pincel caligrafía maestro",
            "fr_FR": "Épinceau brosse nuancé",
            "fr_CA": "Épinceau brosse nuancé",
            "de_DE": "Octobrush Nouveau" // TODO
          },
          shotUnit: "{{ SHOT_UNIT_FLICK | translate }}",
          sub: "Squid Beakon",
          special: "Tenta Missiles",
          level: 15,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 3.2,
          speedLevel: "Middle",
          baseSpeed: 1.68,
          price: 9900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 23,
            "{{ SHELDON_INK_SPEED | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 85
          },
          id: 4
        }
      ]
    },
    {
      type: "Blasters",
      localizedName: {
        "ja_JP": "ブラスター",
        "en_US": "Blasters",
        "en_GB": "Blasters",
        "es_ES": "Devastadors",
        "es_MX": "Lanzamotas",
        "fr_FR": "Éclablaster",
        "fr_CA": "Éclablasteur",
        "de_DE": "Blasters"
      },
      id: 4,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterMiddle_00.png",
          name: "Blaster",
          localizedName: {
            "ja_JP": "ホットブラスター",
            "en_US": "Blaster",
            "en_GB": "Blaster",
            "es_ES": "Devastador",
            "es_MX": "Lanzamotas",
            "fr_FR": "Éclablaster",
            "fr_CA": "Éclablasteur",
            "de_DE": "Blaster"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Toxic Mist",
          special: "Splashdown",
          level: 5,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 3000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 27,
            "{{ SHELDON_FIRE_RATE | translate }}": 20,
            "{{ SHELDON_IMPACT | translate }}": 70
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterMiddle_H.png",
          name: "Hero Blaster Replica",
          localizedName: {
            "ja_JP": "ヒーローブラスター レプリカ",
            "en_US": "Hero Blaster Replica",
            "en_GB": "Hero Blaster Replica",
            "es_ES": "Devastador de élite (réplica)",
            "es_MX": "Lanzamotas de élite réplica",
            "fr_FR": "Blaster héroïque (réplique)",
            "fr_CA": "Éclablasteur héroïque (rép.)",
            "de_DE": "Helden-Blaster Replik"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Toxic Mist",
          special: "Splashdown",
          level: 5,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 3800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 27,
            "{{ SHELDON_FIRE_RATE | translate }}": 20,
            "{{ SHELDON_IMPACT | translate }}": 70
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterMiddle_01.png",
          name: "Custom Blaster",
          localizedName: {
            "ja_JP": "ホットブラスターカスタム",
            "en_US": "Custom Blaster",
            "en_GB": "Custom Blaster",
            "es_ES": "Devastador SP",
            "es_MX": "Lanzamotas adaptado",
            "fr_FR": "Éclablaster modifié",
            "fr_CA": "Éclablasteur modifié",
            "de_DE": "Blaster SE"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Autobomb",
          special: "Inkjet",
          level: 27,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 10,
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 15300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 27,
            "{{ SHELDON_FIRE_RATE | translate }}": 20,
            "{{ SHELDON_IMPACT | translate }}": 70
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLong_00.png",
          name: "Range Blaster",
          localizedName: {
            "ja_JP": "ロングブラスター",
            "en_US": "Range Blaster",
            "en_GB": "Range Blaster",
            "es_ES": "Teledevastador",
            "es_MX": "Telelanzamotas",
            "fr_FR": "Éclablaster XL",
            "fr_CA": "Éclablasteur LP",
            "de_DE": "Fern-Blaster"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Suction Bomb",
          special: "Ink Storm",
          level: 14,
          specialCost: 200,
          inkSaver: "Middle",
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 9300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 56,
            "{{ SHELDON_FIRE_RATE | translate }}": 10,
            "{{ SHELDON_IMPACT | translate }}": 70
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLong_01.png",
          name: "Custom Range Blaster",
          localizedName: {
            "ja_JP": "ロングブラスターカスタム",
            "en_US": "Custom Range Blaster",
            "en_GB": "Custom Range Blaster",
            "es_ES": "Teledevastador SP",
            "es_MX": "Telelanzamotas adaptado",
            "fr_FR": "Éclablaster XL griffé",
            "fr_CA": "Éclablasteur LP modifié",
            "de_DE": "Custom Range Blaster" // TODO
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Curling Bomb",
          special: "Sting Ray",
          level: 18,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "Middle",
          baseSpeed: 0.45,
          price: 11400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 56,
            "{{ SHELDON_FIRE_RATE | translate }}": 10,
            "{{ SHELDON_IMPACT | translate }}": 70
          },
          id: 4
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLight_00.png",
          name: "Rapid Blaster",
          localizedName: {
            "ja_JP": "ラピッドブラスター",
            "en_US": "Rapid Blaster",
            "en_GB": "Rapid Blaster",
            "es_ES": "Devastador exprés",
            "es_MX": "Turbolanzamotas",
            "fr_FR": "Turboblaster",
            "fr_CA": "Turboblasteur",
            "de_DE": "Turbo-Blaster"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Ink Mine",
          special: "Splat-Bomb Launcher",
          level: 13,
          specialCost: 210,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 9800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_FIRE_RATE | translate }}": 40,
            "{{ SHELDON_IMPACT | translate }}": 35
          },
          id: 5
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLight_01.png",
          name: "Rapid Blaster Deco",
          localizedName: {
            "ja_JP": "ラピッドブラスターデコ",
            "en_US": "Rapid Blaster Deco",
            "en_GB": "Rapid Blaster Deco",
            "es_ES": "Devastador exprés DX",
            "es_MX": "Turbolanzamotas chic",
            "fr_FR": "Turboblaster chic",
            "fr_CA": "Turboblasteur chic",
            "de_DE": "Rapid Blaster Deco"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Suction Bomb",
          special: "Inkjet",
          level: 16,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 11500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_FIRE_RATE | translate }}": 40,
            "{{ SHELDON_IMPACT | translate }}": 35
          },
          id: 6
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLightLong_00.png",
          name: "Rapid Blaster Pro",
          localizedName: {
            "ja_JP": "Rブラスターエリート",
            "en_US": "Rapid Blaster Pro",
            "en_GB": "Rapid Blaster Pro",
            "es_ES": "Superdevastador",
            "es_MX": "Turbolanzamotas Pro",
            "fr_FR": "Turboblaster pro",
            "fr_CA": "Turboblasteur pro",
            "de_DE": "Rapid Blaster Pro"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Toxic Mist",
          special: "Ink Storm",
          level: 22,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 12800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 72,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_IMPACT | translate }}": 35
          },
          id: 7
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLightLong_01.png",
          name: "Rapid Blaster Pro Deco",
          localizedName: {
            "ja_JP": "Rブラスターエリートデコ",
            "en_US": "Rapid Blaster Pro Deco",
            "en_GB": "Rapid Blaster Pro Deco",
            "es_ES": "Superdevastador DX",
            "es_MX": "Turbolanzamotas Pro chic",
            "fr_FR": "Turboblaster pro chic",
            "fr_CA": "Turboblasteur pro chic",
            "de_DE": "Rapid Blaster Pro Deco"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Curling Bomb",
          special: "Ink Armor",
          level: 24,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 8,
          speedLevel: "Middle",
          baseSpeed: 0.55,
          price: 14000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 72,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_IMPACT | translate }}": 35
          },
          id: 8
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterShort_00.png",
          name: "Luna Blaster",
          localizedName: {
            "ja_JP": "ノヴァブラスター",
            "en_US": "Luna Blaster",
            "en_GB": "Luna Blaster",
            "es_ES": "Ultradevastador",
            "es_MX": "Lanzamotas Nova",
            "fr_FR": "Proxiblaster",
            "fr_CA": "Proxiblasteur",
            "de_DE": "Luna-Blaster"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splat Bomb",
          special: "Baller",
          level: 19,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 9,
          speedLevel: "Middle",
          baseSpeed: 0.5,
          price: 12100,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 9,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_IMPACT | translate }}": 70
          },
          id: 9
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterShort_01.png",
          name: "Luna Blaster Neo",
          localizedName: {
            "ja_JP": "ノヴァブラスターネオ",
            "en_US": "Luna Blaster Neo",
            "en_GB": "Luna Blaster Neo",
            "es_ES": "Ultradevastador neo",
            "es_MX": "Lanzamotas Nova neo",
            "fr_FR": "Proxiblaster Néo",
            "fr_CA": "Proxiblasteur néo",
            "de_DE": "Luna Blaster Neo"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Ink Mine",
          special: "Suction-Bomb Launcher",
          level: 24,
          specialCost: 180,
          inkSaver: "High",
          inkPerShot: 6,
          speedLevel: "Middle",
          baseSpeed: 0.5,
          price: 13600,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 9,
            "{{ SHELDON_FIRE_RATE | translate }}": 30,
            "{{ SHELDON_IMPACT | translate }}": 70
          },
          id: 10
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLightShort_00.png",
          name: "Clash Blaster",
          localizedName: {
            "ja_JP": "クラッシュブラスター",
            "en_US": "Clash Blaster",
            "en_GB": "Clash Blaster",
            "es_ES": "Turbodevastador",
            "es_MX": "Hiperlanzamotas",
            "fr_FR": "Rafablaster",
            "fr_CA": "Rafalblasteur",
            "de_DE": "Kontra-Blaster"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 30,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 4,
          speedLevel: "High",
          baseSpeed: 0.65,
          price: 18200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 21,
            "{{ SHELDON_FIRE_RATE | translate }}": 65,
            "{{ SHELDON_IMPACT | translate }}": 20
          },
          id: 11
        },
        {
          image: "../common/assets/img/weapons/Wst_Shooter_BlasterLightShort_01.png",
          name: "Clash Blaster Neo",
          localizedName: { // TODO
            "ja_JP": "Clash Blaster Neo",
            "en_US": "Clash Blaster Neo",
            "en_GB": "Clash Blaster Neo",
            "es_ES": "Turbodevastador neo",
            "es_MX": "Hiperlanzamotas neo",
            "fr_FR": "Rafablaster Néo",
            "fr_CA": "Rafalblasteur Néo"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Curling Bomb",
          special: "Tenta Missiles",
          level: 30,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 4,
          speedLevel: "High",
          baseSpeed: 0.65,
          price: 20500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 21,
            "{{ SHELDON_FIRE_RATE | translate }}": 65,
            "{{ SHELDON_IMPACT | translate }}": 20
          },
          id: 12
        }
      ]
    },
    {
      type: "Brellas",
      localizedName: {
        "ja_JP": "シェルター",
        "en_US": "Brellas",
        "en_GB": "Brellas",
        "es_ES": "Paratintas",
        "es_MX": "Paratintas",
        "fr_FR": "Para-encre",
        "fr_CA": "Para-encre"
      },
      id: 5,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Umbrella_Normal_00.png",
          name: "Splat Brella",
          localizedName: {
            "ja_JP": "パラシェルター",
            "en_US": "Splat Brella",
            "en_GB": "Splat Brella",
            "es_ES": "Paratintas",
            "es_MX": "Paratintas",
            "fr_FR": "Para-encre",
            "fr_CA": "Para-encre",
            "de_DE": "Parapluviator"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Sprinkler",
          special: "Ink Storm",
          level: 9,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          baseSpeed: 0.65,
          price: 8300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 43,
            "{{ SHELDON_DURABILITY | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 65
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Umbrella_Normal_H.png",
          name: "Hero Brella Replica",
          localizedName: {
            "ja_JP": "ヒーローシェルター レプリカ",
            "en_US": "Hero Brella Replica",
            "en_GB": "Hero Brella Replica",
            "es_ES": "Paratintas de élite (réplica)",
            "es_MX": "Paratintas de élite réplica",
            "fr_FR": "Para-encre héroïque (réplique)",
            "fr_CA": "Para-encre héroïque (rép.)",
            "de_DE": "Helden-Pluviator Replik"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Sprinkler",
          special: "Ink Storm",
          level: 9,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          baseSpeed: 0.65,
          price: 9000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 43,
            "{{ SHELDON_DURABILITY | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 65
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Umbrella_Normal_01.png",
          name: "Sorella Brella",
          localizedName: { // TODO
            "ja_JP": "Sorella Brella",
            "en_US": "Sorella Brella",
            "en_GB": "Sorella Brella",
            "es_ES": "Sorella Brella",
            "es_MX": "Sorella Brella",
            "fr_FR": "Sorella Brella",
            "fr_CA": "Sorella Brella"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Autobomb",
          special: "Splat-Bomb Launcher",
          level: 15,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 5,
          speedLevel: "Middle",
          baseSpeed: 0.65,
          price: 12000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 43,
            "{{ SHELDON_DURABILITY | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 65
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Umbrella_Large_00.png",
          name: "Tenta Brella",
          localizedName: {
            "ja_JP": "キャンピングシェルター",
            "en_US": "Tenta Brella",
            "en_GB": "Tenta Brella",
            "es_ES": "Paratintas maxi",
            "es_MX": "Paratintas forestal",
            "fr_FR": "Para-encre XL",
            "fr_CA": "Méga para-encre"
          },
          shotUnit: "{{ SHOT_UNIT_SHOT | translate }}",
          sub: "Squid Beakon",
          special: "Bubble Blower",
          level: 23,
          specialCost: 180,
          inkSaver: "High",
          speedLevel: "Middle",
          price: 14200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_DURABILITY | translate }}": 85,
            "{{ SHELDON_DAMAGE | translate }}": 85
          },
          id: 3
        }
      ]
    },
    {
      type: "Sloshers",
      localizedName: {
        "ja_JP": "スロッシャー",
        "en_US": "Sloshers",
        "en_GB": "Sloshers",
        "es_ES": "Derramatics",
        "es_MX": "Derramatics",
        "fr_FR": "Seauceur",
        "fr_CA": "Seauceur",
        "de_DE": "Sloshers"
      },
      id: 6,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Slosher_Strong_00.png",
          name: "Slosher",
          localizedName: {
            "ja_JP": "バケットスロッシャー",
            "en_US": "Slosher",
            "en_GB": "Slosher",
            "es_ES": "Derramatic",
            "es_MX": "Derramatic",
            "fr_FR": "Seauceur",
            "fr_CA": "Seauceur",
            "de_DE": "Schwapper"
          },
          shotUnit: "{{ SHOT_UNIT_SLOSHER | translate }}",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 5,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 2500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Slosher_Strong_H.png",
          name: "Hero Slosher Replica",
          localizedName: {
            "ja_JP": "ヒーロースロッシャー レプリカ",
            "en_US": "Hero Slosher Replica",
            "en_GB": "Hero Slosher Replica",
            "es_ES": "Derramatic de élite (réplica)",
            "es_MX": "Derramatic de élite réplica",
            "fr_FR": "Seauceur héroïque (réplique)",
            "fr_CA": "Seauceur héroïque (rép.)",
            "de_DE": "Helden-Schwapper Replik"
          },
          shotUnit: "{{ SHOT_UNIT_SLOSHER | translate }}",
          sub: "Suction Bomb",
          special: "Tenta Missiles",
          level: 5,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 3100,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Slosher_Strong_01.png",
          name: "Slosher Deco",
          localizedName: {
            "ja_JP": "バケットスロッシャーデコ",
            "en_US": "Slosher Deco",
            "en_GB": "Slosher Deco",
            "es_ES": "Derramatic DX",
            "es_MX": "Derramatic chic",
            "fr_FR": "Seauceur chic",
            "fr_CA": "Seauceur chic",
            "de_DE": "Slosher Deco"
          },
          shotUnit: "{{ SHOT_UNIT_SLOSHER | translate }}",
          sub: "Sprinkler",
          special: "Baller",
          level: 8,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.4,
          price: 8000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 58,
            "{{ SHELDON_DAMAGE | translate }}": 85,
            "{{ SHELDON_HANDLING | translate }}": 50
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Slosher_Diffusion_00.png",
          name: "Tri-Slosher",
          localizedName: {
            "ja_JP": "ヒッセン",
            "en_US": "Tri-Slosher",
            "en_GB": "Tri-Slosher",
            "es_ES": "Derramatic triple",
            "es_MX": "Derramatic triple",
            "fr_FR": "Dépoteur",
            "fr_CA": "Seauceur trio",
            "de_DE": "3R-Schwapper"
          },
          shotUnit: "{{ SHOT_UNIT_SLOSHER | translate }}",
          sub: "Burst Bomb",
          special: "Ink Armor",
          level: 15,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 6,
          speedLevel: "Middle",
          baseSpeed: 0.66,
          price: 10200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 39,
            "{{ SHELDON_DAMAGE | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 70
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Slosher_Diffusion_01.png",
          name: "Tri-Slosher Nouveau",
          localizedName: {
            "ja_JP": "ヒッセン・ヒュー",
            "en_US": "Tri-Slosher Nouveau",
            "en_GB": "Tri-Slosher Nouveau",
            "es_ES": "Derramatic triple maestro",
            "es_MX": "Derramatic triple maestro",
            "fr_FR": "Dépoteur nuancé",
            "fr_CA": "Seauceur nuancé",
            "de_DE": "Tri-Slosher Nouveau"
          },
          shotUnit: "{{ SHOT_UNIT_SLOSHER | translate }}",
          sub: "Splat Bomb",
          special: "Ink Storm",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 6,
          speedLevel: "Middle",
          baseSpeed: 0.6,
          price: 11700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 39,
            "{{ SHELDON_DAMAGE | translate }}": 80,
            "{{ SHELDON_HANDLING | translate }}": 70
          },
          id: 4
        },
        {
          image: "../common/assets/img/weapons/Wst_Slosher_Launcher_00.png",
          name: "Sloshing Machine",
          localizedName: {
            "ja_JP": "スクリュースロッシャー",
            "en_US": "Sloshing Machine",
            "en_GB": "Sloshing Machine",
            "es_ES": "Derramatic centrífugo",
            "es_MX": "Derramatic centrífugo",
            "fr_FR": "Encrifugeur",
            "fr_CA": "Encrifugeur",
            "de_DE": "Trommel-Schwapper"
          },
          shotUnit: "{{ SHOT_UNIT_SLOSHER | translate }}",
          sub: "Autobomb",
          special: "Sting Ray",
          level: 13,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          baseSpeed: 0.72,
          price: 12600,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 90,
            "{{ SHELDON_HANDLING | translate }}": 40
          },
          id: 5
        },
        {
          image: "../common/assets/img/weapons/Wst_Slosher_Launcher_01.png",
          name: "Sloshing Machine Neo",
          localizedName: {
            "ja_JP": "スクリュースロッシャーネオ",
            "en_US": "Sloshing Machine Neo",
            "en_GB": "Sloshing Machine Neo",
            "es_ES": "Derramatic centrífugo neo",
            "es_MX": "Derramatic centrífugo neo",
            "fr_FR": "Encrifugeur Néo",
            "fr_CA": "Encrifugeur néo",
            "de_DE": "Sloshing Machine Neo" // TODO
          },
          shotUnit: "{{ SHOT_UNIT_SLOSHER | translate }}",
          sub: "Point Sensor",
          special: "Splat-Bomb Launcher",
          level: 19,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 7,
          speedLevel: "Middle",
          price: 19800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 60,
            "{{ SHELDON_DAMAGE | translate }}": 90,
            "{{ SHELDON_HANDLING | translate }}": 40
          },
          id: 6
        }
      ]
    },
    {
      type: "Chargers",
      localizedName: {
        "ja_JP": "チャージャー",
        "en_US": "Chargers",
        "en_GB": "Chargers",
        "es_ES": "Cargatintas",
        "es_MX": "Cargatintas",
        "fr_FR": "Fusil",
        "fr_CA": "Fusil",
        "de_DE": "Chargers"
      },
      id: 7,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Charger_Normal_00.png",
          name: "Splat Charger",
          localizedName: {
            "ja_JP": "スプラチャージャー",
            "en_US": "Splat Charger",
            "en_GB": "Splat Charger",
            "es_ES": "Cargatintas",
            "es_MX": "Cargatintas",
            "fr_FR": "Concentraceur",
            "fr_CA": "Concentraceur",
            "de_DE": "Klecks-Konzentrator"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 3,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 2200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 88,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 40
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Normal_H.png",
          name: "Hero Charger Replica",
          localizedName: {
            "ja_JP": "ヒーローチャージャー レプリカ",
            "en_US": "Hero Charger Replica",
            "en_GB": "Hero Charger Replica",
            "es_ES": "Cargatintas de élite (réplica)",
            "es_MX": "Cargatintas de élite réplica",
            "fr_FR": "Conc. héroïque (réplique)",
            "fr_CA": "Conc. héroïque (rép.)",
            "de_DE": "Helden-Konzentrator Replik"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 3,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 2700,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 88,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 40
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Normal_01.png",
          name: "Firefin Splat Charger",
          localizedName: {
            "ja_JP": "スプラチャージャーコラボ",
            "en_US": "Firefin Splat Charger",
            "en_GB": "Firefin Splat Charger",
            "es_ES": "Cargatintas Chokkor",
            "es_MX": "Cargatintas Shachi",
            "fr_FR": "Concentraceur griffé",
            "fr_CA": "Concentraceur Arki",
            "de_DE": "Rilax-Klecks-Konzentrator"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Splash Wall",
          special: "Suction-Bomb Launcher",
          level: 16,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 10600,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 88,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 40
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_NormalScope_00.png",
          name: "Splatterscope",
          localizedName: {
            "ja_JP": "スプラスコープ",
            "en_US": "Splatterscope",
            "en_GB": "Splatterscope",
            "es_ES": "Cargatintas con mira",
            "es_MX": "Cargatintas con mira",
            "fr_FR": "Concentraceur zoom",
            "fr_CA": "Concentraceur zoom",
            "de_DE": "Ziel-Konzentrator"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Splat Bomb",
          special: "Sting Ray",
          level: 15,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 11400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 91,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 30
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_NormalScope_01.png",
          name: "Firefin Splatterscope",
          localizedName: {
            "ja_JP": "スプラスコープコラボ",
            "en_US": "Firefin Splatterscope",
            "en_GB": "Firefin Splatterscope",
            "es_ES": "Cargatintas con mira Chokkor",
            "es_MX": "Telecargatintas Shachi",
            "fr_FR": "Concentraceur zoom griffé",
            "fr_CA": "Concentraceur zoom Arki",
            "de_DE": "Rilax-Ziel-Konzentrator"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Splash Wall",
          special: "Suction-Bomb Launcher",
          level: 25,
          specialCost: 190,
          inkSaver: "Middle",
          inkPerShot: 18,
          speedLevel: "Middle",
          baseSpeed: 0.2,
          price: 13900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 91,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 50,
            "{{ SHELDON_MOBILITY | translate }}": 30
          },
          id: 4
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Quick_00.png",
          name: "Classic Squiffer",
          localizedName: {
            "ja_JP": "スクイックリンα",
            "en_US": "Classic Squiffer",
            "en_GB": "Classic Squiffer",
            "es_ES": "Kalarrapid α",
            "es_MX": "Delineador X",
            "fr_FR": "Décap'express Alpha",
            "fr_CA": "Lignizateur alpha",
            "de_DE": "Sepiator α"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Point Sensor",
          special: "Ink Armor",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 11,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 8900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 75,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 70,
            "{{ SHELDON_MOBILITY | translate }}": 60
          },
          id: 5
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Quick_01.png",
          name: "New Squiffer",
          localizedName: {
            "ja_JP": "スクイックリンβ",
            "en_US": "New Squiffer",
            "en_GB": "New Squiffer",
            "es_ES": "Kalarrapid β",
            "es_MX": "Delineador X",
            "fr_FR": "Décap'express Bêta",
            "fr_CA": "Lignizateur bêta",
            "de_DE": "Sepiator β" // TODO
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Autobomb",
          special: "Baller",
          level: 17,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 11,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 11000,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 75,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 70,
            "{{ SHELDON_MOBILITY | translate }}": 60
          },
          id: 6
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Long_00.png",
          name: "E-liter 4K",
          localizedName: {
            "ja_JP": "リッター4K",
            "en_US": "E-liter 4K",
            "en_GB": "E-liter 4K",
            "es_ES": "Entintador 4K",
            "es_MX": "Entintador 4K",
            "fr_FR": "Extraceur +",
            "fr_CA": "X-traceur +",
            "de_DE": "E-liter 4K"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Ink Mine",
          special: "Ink Storm",
          level: 20,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 13900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 96,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 15
          },
          id: 7
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Long_01.png",
          name: "Custom E-liter 4K",
          localizedName: {
            "ja_JP": "リッター4Kカスタム",
            "en_US": "Custom E-liter 4K",
            "en_GB": "Custom E-Litre 4K",
            "es_ES": "Entintador 4K SP",
            "es_MX": "Entintador 4K adaptado",
            "fr_FR": "Extraceur + modifié",
            "fr_CA": "X-traceur + modifié",
            "de_DE": "Custom E-liter 4K" //TODO
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Squid Beakon",
          special: "Bubble Blower",
          level: 26,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 17300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 96,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 15
          },
          id: 8
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_LongScope_00.png",
          name: "E-liter 4K Scope",
          localizedName: {
            "ja_JP": "4Kスコープ",
            "en_US": "E-liter 4K Scope",
            "en_GB": "E-liter 4K Scope",
            "es_ES": "Telentintador 4K",
            "es_MX": "Telentintador 4K",
            "fr_FR": "Extraceur + zoom",
            "fr_CA": "X-traceur + zoom",
            "de_DE": "Ziel-E-liter 4K"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Ink Mine",
          special: "Ink Storm",
          level: 30,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 23200,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 100,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 5
          },
          id: 9
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_LongScope_01.png",
          name: "Custom E-liter 4K Scope",
          localizedName: {
            "ja_JP": "4Kスコープカスタム",
            "en_US": "Custom E-liter 4K Scope",
            "en_GB": "Custom E-Litre 4K Scope",
            "es_ES": "Telentintador 4K SP",
            "es_MX": "Telentintador 4K adaptado",
            "fr_FR": "Extraceur + zoom modifié",
            "fr_CA": "X-traceur + modifié",
            "de_DE": "Custom E-liter 4K Scope" //TODO
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Squid Beakon",
          special: "Bubble Blower",
          level: 30,
          specialCost: 170,
          inkSaver: "High",
          inkPerShot: 25,
          speedLevel: "Low",
          baseSpeed: 0.15,
          price: 29900,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 100,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 20,
            "{{ SHELDON_MOBILITY | translate }}": 5
          },
          id: 10
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Keeper_00.png",
          name: "Goo Tuber",
          localizedName: {
            "ja_JP": "ソイチューバー",
            "en_US": "Goo Tuber",
            "en_GB": "Goo Tuber",
            "es_ES": "Tubofusil",
            "es_MX": "Tubofusil",
            "fr_FR": "Détubeur",
            "fr_CA": "Détubeur",
            "de_DE": "T-Tuber"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Suction Bomb",
          special: "Splashdown",
          level: 22,
          specialCost: 160,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 13400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 30,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          id: 11
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Keeper_01.png",
          name: "Custom Goo Tuber",
          localizedName: { // TODO
            "ja_JP": "Custom Goo Tuber",
            "en_US": "Custom Goo Tuber",
            "en_GB": "Custom Goo Tuber",
            "es_ES": "Custom Goo Tuber",
            "es_MX": "Custom Goo Tuber",
            "fr_FR": "Custom Goo Tuber",
            "fr_CA": "Custom Goo Tuber",
            "de_DE": "Custom Goo Tuber"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Curling Bomb",
          special: "Inkjet",
          level: 28,
          specialCost: 170,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.3,
          price: 19300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 30,
            "{{ SHELDON_MOBILITY | translate }}": 70
          },
          id: 12
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Light_00.png",
          name: "Bamboozler 14 Mk I",
          localizedName: {
            "ja_JP": "14式竹筒銃・甲",
            "en_US": "Bamboozler 14 Mk I",
            "en_GB": "Bamboozler 14 Mk I",
            "es_ES": "Bambufusil 14-I",
            "es_MX": "Bamzuka 14-I",
            "fr_FR": "Bimbamboum Mk I",
            "fr_CA": "Bimbamboum Mk I",
            "de_DE": "Bamboozler 14 Mk I"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Curling Bomb",
          special: "Tenta Missiles",
          level: 18,
          specialCost: 180,
          inkSaver: "Middle",
          speedLevel: "High",
          price: 9500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 90,
            "{{ SHELDON_MOBILITY | translate }}": 80
          },
          id: 13
        },
        {
          image: "../common/assets/img/weapons/Wst_Charger_Light_01.png",
          name: "Bamboozler 14 Mk II",
          localizedName: {
            "ja_JP": "14式竹筒銃・乙",
            "en_US": "Bamboozler 14 Mk II",
            "en_GB": "Bamboozler 14 Mk II",
            "es_ES": "Bambufusil 14-II",
            "es_MX": "Bamzuka 14-II",
            "fr_FR": "Bimbamboum Mk II",
            "fr_CA": "Bimbamboum Mk II",
            "de_DE": "Bamboozler 14 Mk II"
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Toxic Mist",
          special: "Burst-Bomb Launcher",
          level: 21,
          specialCost: 160,
          inkSaver: "Middle",
          speedLevel: "High",
          price: 10500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 90,
            "{{ SHELDON_MOBILITY | translate }}": 80
          },
          id: 14
        }
      ]
    },
    {
      type: "Splatlings",
      localizedName: {
        "ja_JP": "スピナー",
        "en_US": "Splatlings",
        "en_GB": "Splatlings",
        "es_ES": "Tintralladoras",
        "es_MX": "Garabateadors",
        "fr_FR": "Badigeonneur",
        "fr_CA": "Badigeonneur",
        "de_DE": "Splatlings"
      },
      id: 8,
      weapons: [
        {
          image: "../common/assets/img/weapons/Wst_Spinner_Standard_00.png",
          name: "Heavy Splatling",
          localizedName: {
            "ja_JP": "バレルスピナー",
            "en_US": "Heavy Splatling",
            "en_GB": "Heavy Splatling",
            "es_ES": "Tintralladora",
            "es_MX": "Garabateador Pro",
            "fr_FR": "Badigeonneur",
            "fr_CA": "Badigeonneur",
            "de_DE": "Splatling"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Sprinkler",
          special: "Sting Ray",
          level: 8,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          baseSpeed: 0.66,
          price: 7800,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 50
          },
          id: 0
        },
        {
          image: "../common/assets/img/weapons/Wst_Spinner_Standard_H.png",
          name: "Hero Splatling Replica",
          localizedName: {
            "ja_JP": "ヒーロースピナー レプリカ",
            "en_US": "Hero Splatling Replica",
            "en_GB": "Hero Splatling Replica",
            "es_ES": "Tintralladora de élite (réplica)",
            "es_MX": "Garabateador de élite réplica",
            "fr_FR": "Badigeon. héroïque (réplique)",
            "fr_CA": "Badigeonneur héroïque (rép.)",
            "de_DE": "Helden-Splatling Replik"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Sprinkler",
          special: "Sting Ray",
          level: 8,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          baseSpeed: 0.66,
          price: 8600,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 50
          },
          id: 1
        },
        {
          image: "../common/assets/img/weapons/Wst_Spinner_Standard_01.png",
          name: "Heavy Splatling Deco",
          localizedName: {
            "ja_JP": "バレルスピナーデコ",
            "en_US": "Heavy Splatling Deco",
            "en_GB": "Heavy Splatling Deco",
            "es_ES": "Tintralladora DX",
            "es_MX": "Garabateador Pro chic",
            "fr_FR": "Badigeonneur chic",
            "fr_CA": "Badigeonneur chic",
            "de_DE": "Splatling Deko"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Splash Wall",
          special: "Bubble Blower",
          level: 12,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 22.5,
          speedLevel: "Middle",
          baseSpeed: 0.66,
          price: 9600,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 78,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 38,
            "{{ SHELDON_MOBILITY | translate }}": 50
          },
          id: 2
        },
        {
          image: "../common/assets/img/weapons/Wst_Spinner_Quick_00.png",
          name: "Mini Splatling",
          localizedName: {
            "ja_JP": "スプラスピナー",
            "en_US": "Mini Splatling",
            "en_GB": "Mini Splatling",
            "es_ES": "Tintralladora ligera",
            "es_MX": "Garabateador",
            "fr_FR": "Badigeonneur XS",
            "fr_CA": "Badigeonneur XP",
            "de_DE": "Klecks-Splatling"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Burst Bomb",
          special: "Tenta Missiles",
          level: 23,
          specialCost: 180,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.8,
          price: 12300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 80,
            "{{ SHELDON_MOBILITY | translate }}": 90
          },
          id: 3
        },
        {
          image: "../common/assets/img/weapons/Wst_Spinner_Quick_01.png",
          name: "Zink Mini Splatling",
          localizedName: {
            "ja_JP": "スプラスピナーコラボ",
            "en_US": "Zink Mini Splatling",
            "en_GB": "Zink Mini Splatling",
            "es_ES": "Tintralladora ligera B",
            "es_MX": "Garabateador Tintaz",
            "fr_FR": "Badigeonneur XS griffé",
            "fr_CA": "Badigeonneur XP Leviathus",
            "de_DE": "Zink Mini Splatling" //TODO
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Curling Bomb",
          special: "Ink Storm",
          level: 26,
          specialCost: 200,
          inkSaver: "Middle",
          inkPerShot: 15,
          speedLevel: "Middle",
          baseSpeed: 0.7,
          price: 15400,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 62,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 80,
            "{{ SHELDON_MOBILITY | translate }}": 90
          },
          id: 4
        },
        {
          image: "../common/assets/img/weapons/Wst_Spinner_Hyper_00.png",
          name: "Hydra Splatling",
          localizedName: {
            "ja_JP": "ハイドラント",
            "en_US": "Hydra Splatling",
            "en_GB": "Hydra Splatling",
            "es_ES": "Extintador",
            "es_MX": "Garabateador HD",
            "fr_FR": "Exteinteur",
            "fr_CA": "Exteinteur",
            "de_DE": "Hydrant"
          },
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Autobomb",
          special: "Splashdown",
          level: 27,
          specialCost: 190,
          inkSaver: "High",
          speedLevel: "Low",
          price: 18500,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 10,
            "{{ SHELDON_MOBILITY | translate }}": 20
          },
          id: 5
        },
        {
          image: "../common/assets/img/weapons/Wst_Spinner_Hyper_01.png",
          name: "Custom Hydra Splatling",
          localizedName: {
            "ja_JP": "ハイドラントカスタム",
            "en_US": "Custom Hydra Splatling",
            "en_GB": "Custom Hydra Splatling",
            "es_ES": "Extintador SP",
            "es_MX": "Garabateador HD adaptado",
            "fr_FR": "Exteinteur modifié",
            "fr_CA": "Exteinteur modifié",
            "de_DE": "Custom Hydra Splatling" //TODO
          },
          unreleased: true,
          shotUnit: "{{ SHOT_UNIT_CHARGER | translate }}",
          sub: "Ink Mine",
          special: "Ink Armor",
          level: 29,
          specialCost: 180,
          inkSaver: "High",
          speedLevel: "Low",
          price: 33300,
          stats: {
            "{{ SHELDON_RANGE | translate }}": 85,
            "{{ SHELDON_CHARGE_SPEED | translate }}": 10,
            "{{ SHELDON_MOBILITY | translate }}": 20
          },
          id: 6
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
