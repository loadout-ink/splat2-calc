angular
  .module('splatApp', ['ui.bootstrap', 'ngAnimate', 'ngAria'])
  .controller('splatController', ['$scope', '$rootScope', '$timeout', '$locale', function splatCtrl($scope, $rootScope, $timeout, $locale, $translate, $uibModal, $log) {
    $scope.placeholder = ["PH Data", "More PH Data", "Hello"];
    $scope.dummy = $scope.placeholder[0];
    angular.module('splatApp').skills($scope);
    angular.module('splatApp').stats($scope, $translate);
    angular.module('splatApp').weapons($scope);
    angular.module('splatApp').subs($scope);
    angular.module('splatApp').specials($scope);
    angular.module('splatApp').gear($scope);

    angular.module('splatApp').clipboard($scope, $timeout);
    angular.module('splatApp').util($scope);

    $scope.loadout = new Loadout();
    $scope.status = {}
    $scope.logging = false;
    $scope.appVersion = 200; // 2.0.0

    $scope.screenshotMode = false;

    $scope.appVersionToString = function() {
      var appVersionString = "";
      for(i = 0; i < $scope.appVersion.toString().length; i++) {
        appVersionString += $scope.appVersion.toString()[i];
        if(i < $scope.appVersion.toString().length - 1) {
          appVersionString += ".";
        }
      }
      return appVersionString;
    }

    $scope.switchSet = function() {
      $scope.loadout.weapon = $scope.availableWeapons()[0];
    }

    $scope.availableWeapons = function() {
      return $scope.selectedSet.weapons.filter(filter_available)
    }

    $scope.selectedSet = $scope.weaponSets[0];
    $scope.loadout.weapon = $scope.availableWeapons()[0];
    $scope.loadout.head.equipped = $scope.hats[0];
    $scope.loadout.clothes.equipped = $scope.clothes[0];
    $scope.loadout.shoes.equipped = $scope.shoes[0];

    $scope.refreshStats = function() {
      Object.keys($scope.stats).forEach(function(currentKey) {
          $scope.stats[currentKey].calc($scope.loadout);
      });
    }

     $scope.$watch('loadout', function() {
       $scope.refreshStats();
       history.replaceState(undefined, undefined, "#" + $scope.encodeLoadout())
     },true);

    $scope.encodeLoadout = function() {
      return encode($scope.selectedSet.id,$scope.loadout)
    }

    $scope.loadCode = function(code) {
      var newLoadout = new Loadout();
      var results = decode(code)
      if(results) {
      $scope.selectedSet = $scope.getWeaponSetById(results.set)
      newLoadout.weapon = $scope.getWeaponById(results.set,results.weapon)
      newLoadout.head.equipped = $scope.getHatById(results.head.gear)
      newLoadout.clothes.equipped = $scope.getClothesById(results.clothes.gear)
      newLoadout.shoes.equipped = $scope.getShoesById(results.shoes.gear)
      newLoadout.head.main = $scope.getSkillById(results.head.main)
      for(var i=0; i<3; i++) {
        newLoadout.head.subs[i] = $scope.getSkillById(results.head.subs[i])
      }
      newLoadout.clothes.main = $scope.getSkillById(results.clothes.main)
      for(var i=0; i<3; i++) {
        newLoadout.clothes.subs[i] = $scope.getSkillById(results.clothes.subs[i])
      }
      newLoadout.shoes.main = $scope.getSkillById(results.shoes.main)
      for(var i=0; i<3; i++) {
        newLoadout.shoes.subs[i] = $scope.getSkillById(results.shoes.subs[i])
      }

      return newLoadout
    }
      return false;
    }

    $scope.encodedURL = function() {
      return window.location.protocol +"//"+ window.location.hostname + "/#" + $scope.encodeLoadout()
    }

    $scope.randomizeBuild = function() {
      var randomized = new Loadout()
      $scope.selectedSet = randomFrom($scope.weaponSets)
      randomized.weapon = randomFrom($scope.availableWeapons())
      randomized.head.equipped = randomFrom($scope.hats)
      randomized.clothes.equipped = randomFrom($scope.clothes)
      randomized.shoes.equipped = randomFrom($scope.shoes)
      $scope.loadout = randomized
    }

    $scope.resetLoadout = function() {
      $scope.selectedSet = $scope.weaponSets[0];
      $scope.loadout.weapon = $scope.availableWeapons()[0];
      $scope.loadout.head.equipped = $scope.hats[0];
      $scope.loadout.clothes.equipped = $scope.clothes[0];
      $scope.loadout.shoes.equipped = $scope.shoes[0];
      $scope.loadout.clearAbilities();
    }

    if(window.location.hash) {
      var newLoadout = $scope.loadCode(window.location.hash.replace('#',''))
      if(newLoadout) {
        $scope.loadout = newLoadout
      }
    }

    $scope.equip = function(item,slot) {
      console.log(eval("$scope.loadout." + slot + ".equipped.name") == "Splatfest Tee")
      if(eval("$scope.loadout." + slot + ".main") == null || eval("$scope.loadout." + slot + ".equipped.name") == "Splatfest Tee" || item.name == "Splatfest Tee") {
        eval(("$scope.loadout." + slot + ".main = $scope.getSkillByName('" + item.main + "')"))
      }
      eval("$scope.loadout." + slot + ".equipped = item")
    }

    $scope.toFixedTrimmed = function(number, precision) {
      return Number(number.toFixed(precision)).toString();
    }

    $scope.calcMod = function(abilityScore) {
      return (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))
    }

    $scope.calcP = function(abilityScore) {
      return Math.min(3.3*abilityScore - 0.027*Math.pow(abilityScore,2),100);
    }

    $scope.calcS = function(values) {
      var max = values[0];
      var mid = values[1];
      var min = values[2];
      return (mid-min) / (max-min);
    }

    $scope.calcRes = function(values, p, s) {
      var max = values[0];
      var mid = values[1];
      var min = values[2];
      return min + (max-min) * this.lerpN(p/100, s);
    }

    $scope.lerpN = function(p, s) {
      if(s.toFixed(3) == 0.5) {
        return p;
      }
      if(p == 0.0) {
        return p;
      }
      if(p == 1.0) {
        return p;
      }
      if(s != 0.5) {
        return Math.pow(Math.E,-1 * (Math.log(p) * Math.log(s) / Math.log(2)))
      }
    }

    $scope.languages = {
      'en_US': 'English',
      'ja_JP': '日本語',
      'es_ES': 'Español (ES)',
      'es_MX': 'Español (MX)',
      'fr_FR': 'Français (FR)',
      'fr_CA': 'Français (CA)',
      'it_IT': 'Italiano',
      'zh_HK': '中文 (香港)'
    }

    $scope.parameters = {
      "Ink Saver Sub": {
          "A": [0.8, 0.9, 1.0],
          "B": [0.7, 0.85, 1.0],
          "C": [0.65, 0.825, 1.0],
          "D": [0.6, 0.8, 1.0],
          "E": [0.5, 0.75, 1.0],
          "F": [1.0, 1.0, 1.0]
      },
  
      "Ink Saver Main": {
          "Low": [0.6, 0.8, 1.0],
          "High": [0.5, 0.7, 1.0],
          "Mid": [0.55, 0.775, 1.0]
      },
  
      "Bomb Defense": {
          "Special": [0.65, 0.825, 1.0],
          "Additional": [1.0, 1.0, 1.0],
          "Heavy Light": [0.6, 0.8, 1.0],
          "Heavy Sub": [0.5, 0.75, 1.0]
      },
  
      "Special Charge Up": {
          "default": [1.3, 1.15, 1.0]
      },
  
      "Quick Respawn": {
          "Die Frames": [30.0, 60.0, 90.0],
          "Deathcam Frames": [90.0, 180.0, 270.0]
      },
  
      "Special Saver": {
          "Splashdown": [1.25, 1.05, 0.75],
          "default": [1.0, 0.8, 0.5]
      },
  
      "Swim Speed": {
          "Light": [2.4, 2.208, 2.016],
          "Heavy": [2.4, 2.064, 1.728],
          "Mid": [2.4, 2.16, 1.92]
      },
  
      "Special Power Up": {
          "Curling Bomb Launcher": [520, 460, 400],
          "Other Bomb Launcher": [480, 420, 360],
          "Inkjet Duration": [510, 480, 450],
          "Tenta Missiles Cross Paint Ray Length": [30.0, 30.0, 30.0],
          "Ultra Stamp Duration": [660, 600, 540],
          "Baller HP": [6000, 5000, 4000],
          "Tenta Missiles Paint Radius": [34, 32, 30],
          "Booyah Ball Auto Charge Increase": [0.01, 0.006, 0.002],
          "Splash Down Burst Radius Far (Stealth Jump)": [140.0, 140.0, 140.0],
          "Ink Armor Duration": [540, 450, 360],
          "Ink Armor Wind Up Time": [30, 60, 90],
          "Booyah Ball Object Shredder Multiplier": [1.05, 1.025, 1.0],
          "Splash Down Burst Radius Far": [140.0, 140.0, 140.0],
          "Inkjet Explosion Paint Splash Velocity L": [5.2, 5.05, 4.9],
          "Ink Storm Duration": [600, 540, 480],
          "Inkjet Explosion Paint Splash Radius": [7, 6.65, 6.3],
          "Tenta Missiles Cross Paint Radius": [20.0, 20.0, 20.0],
          "Tenta Missiles Target Circle Radius": [240.0, 190.0, 140.0],
          "Splash Down Jump-In Additional Height (Stealth Jump)": [40.0, 20.0, 0.0],
          "Splash Down Jump-In Height (Stealth Jump)": [100.0, 60.0, 20.0],
          "Splash Down Burst Radius Midle (Stealth Jump)": [112.5, 112.5, 112.5],
          "Splash Down Jump-In Additional Height": [40.0, 20.0, 0.0],
          "Inkjet Bullet Damage Radius Multiplier": [1.3, 1.15, 1.0],
          "Sting Ray Duration": [585, 525, 465],
          "Bubble Blower Bubble Radius Multiplier": [1.3, 1.15, 1.0],
          "Splash Down Burst Radius Close (Stealth Jump)": [90.0, 90.0, 90.0],
          "Splash Down Jump-In Height": [100.0, 60.0, 20.0],
          "Bubble Blower Burst Paint Radius": [80, 68, 56],
          "Bubble Blower Object Shredder Multiplier": [1.3, 1.3, 1.0],
          "Inkjet Explosion Paint Radius": [40, 36, 32],
          "Splash Down Burst Radius Close": [110.0, 90.0, 70.0],
          "Splash Down Burst Radius Middle": [125.0, 112.5, 100.0],
          "Bubble Blower Maximum Collision Player Radius": [35, 27.5, 20],
          "Ink Armor Object Shredder Multiplier": [3.0, 3.0, 1.0],
          "Inkjet Explosion Paint Splash Velocity H": [3.5, 3.4, 3.3]
      },
  
      "Ink Recovery Up": {
          "Standing": [220.0, 410.0, 600.0],
          "In Ink": [117.0, 148.5, 180.0]
      },
  
      "Cold Blooded": {
          "Thermal Ink Time Reduction": [1.0, 1.0, 1.0],
          "Silhouette Close": [250.0, 190.0, 130.0],
          "Silhouette Far": [290.0, 230.0, 170.0],
          "Point Sensor": [0.1, 0.55, 1.0],
          "Ink Mine": [0.1, 0.55, 1.0]
      },
  
      "Ink Resistance": {
          "Dmg Per Frame": [0.0015, 0.00225, 0.003],
          "Run": [0.768, 0.5568, 0.24],
          "Dmg Limit": [0.2, 0.3, 0.4],
          "Shoot K": [1.0, 0.75, 0.5],
          "Jump": [1.1, 0.98, 0.8],
          "Shoot": [0.4, 0.26, 0.12],
          "Jump(story)": [1.05, 0.825, 0.6]
      },
  
      "Quick Super Jump": {
          "Jump": [96.6, 132.3, 138.0],
          "Prepare": [20.0, 35.0, 80.0]
      },
  
      "Run Speed": {
          "Shooting": [1.25, 1.125, 1.0],
          "Shooting, Splatling": [1.3, 1.15, 1.0],
          "Light": [1.44, 1.24, 1.04],
          "Heavy": [1.44, 1.16, 0.88],
          "Mid": [1.44, 1.2, 0.96]
      },
  
      "Sub Power Up": {
          "Point Sensor Distance Up": [19.0, 17.0, 15.0],
          "Splash Wall Max HP": [15000, 11500, 8000],
          "Ink Mine Mark Radius": [1.375, 1.1875, 1.0],
          "Ink Mine Mark Time Duration": [600, 450, 300],
          "Sprinkler First Phase Duration": [600, 450, 300],
          "Splash Wall Object Shredder Multiplier": [1.5, 1.5, 1.5],
          "Torpedo Distance Up": [18.4, 16.0, 13.6],
          "Beakon Object Shredder Multiplier": [10.0, 10.0, 10.0],
          "Fizzy Bomb Distance Up": [18.4, 16.0, 13.6],
          "Sprinkler Object Shredder Multiplier": [10.0, 10.0, 10.0],
          "Sprinkler Second Phase Duration": [1020, 960, 900],
          "General Bomb Distance Up": [16.8, 14.0, 11.2],
          "Point Sensor Mark Time Duration": [960, 720, 480]
      },

      "Main Power Up": {
        ".52 Gal": {
          "desc": "Jump Shot Randomization",
          "params": [
            6.0,
            9.0,
            12.0
          ]
        },
        ".96 Gal": {
          "desc": "Damage Up",
          "min_params": [
            38.7,
            34.85,
            31.0
          ],
          "max_params": [
            77.5,
            69.75,
            62.0
          ]
        },
        "Aerospray": {
          "desc": "Increased Ink Coverage",
          "params": [
            14.0,
            13.0,
            12.0
          ]
        },
        "Ballpoint Splatling": {
          "desc": "Damage Up",
          "min_params": [
            17.6,
            16.8,
            16.0
          ],
          "max_params": [
            33.3,
            32.65,
            32.0
          ]
        },
        "Bamboozler 14": {
          "desc": "Base Damage Up",
          "min_params": [
            36.0,
            33.0,
            30.0
          ],
          "max_params": [
            99.9,
            92.45,
            85.0
          ]
        },
        "Blaster": {
          "desc": "Increased Shot Accuracy",
          "params": [
            6.0,
            8.0,
            10.0
          ]
        },
        "Bloblobber": {
          "desc": "Increased Ink Coverage",
          "params": [
            1.2,
            1.1,
            1.0
          ]
        },
        "Carbon Roller": {
          "desc": "Vertical Flick Damage Up",
          "min_params": [
            40.2,
            37.6,
            35.0
          ],
          "max_params": [
            138.0,
            129.0,
            120.0
          ]
        },
        "Clash Blaster": {
          "desc": "Increased Shot Accuracy",
          "params": [
            4.0,
            6.0,
            8.0
          ]
        },
        "Dapple Dualies": {
          "desc": "Damage Up",
          "min_params": [
            21.6,
            19.8,
            18.0
          ],
          "max_params": [
            43.2,
            39.6,
            36.0
          ]
        },
        "Dualie Squelchers": {
          "desc": "Damage Up",
          "min_params": [
            16.8,
            15.4,
            14.0
          ],
          "max_params": [
            33.3,
            30.65,
            28.0
          ]
        },
        "Dynamo Roller": {
          "desc": "Vertical Flick Damage Up",
          "min_params": [
            45.9,
            42.95,
            40.0
          ],
          "max_params": [
            207.0,
            193.5,
            180.0
          ]
        },
        "E-Liter 4k Scope": {
          "desc": "Full Charge Distance",
          "params": [
            325.5,
            318.0,
            310.5
          ]
        },
        "E-Liter 4k": {
          "desc": "Full Charge Distance",
          "params": [
            350.5,
            320.5,
            290.5
          ]
        },
        "Explosher": {
          "desc": "Increased Ink Coverage",
          "params": [
            1.3,
            1.15,
            1.0
          ]
        },
        "Flingza Roller": {
          "desc": "Vertical Flick Damage Up",
          "min_params": [
            45.9,
            42.95,
            40.0
          ],
          "max_params": [
            172.4,
            161.2,
            150.0
          ]
        },
        "Glooga Dualies": {
          "desc": "Damage Up",
          "min_params": [
            21.6,
            19.8,
            18.0
          ],
          "max_params": [
            43.2,
            39.6,
            36.0
          ]
        },
        "Goo Tuber": {
          "desc": "Base Damage Up",
          "min_params": [
            45.9,
            42.95,
            40.0
          ],
          "max_params": [
            149.4,
            139.7,
            130.0
          ]
        },
        "H-3 Nozzlenose": {
          "desc": "Damage Up",
          "min_params": [
            25.6,
            23.05,
            20.5
          ],
          "max_params": [
            49.9,
            45.45,
            41.0
          ]
        },
        "Heavy Splatling": {
          "desc": "Burst Duration",
          "params": [
            179.0,
            161.5,
            144.0
          ]
        },
        "Hydra Splatling": {
          "desc": "Full Charge Damage Up",
          "min_params": [
            19.2,
            17.6,
            16.0
          ],
          "max_params": [
            48.0,
            44.0,
            40.0
          ]
        },
        "Inkbrush": {
          "desc": "Roll Speed",
          "params": [
            2.016,
            1.968,
            1.92
          ]
        },
        "Jet Squelcher": {
          "desc": "Bullet Velocity Multiplier",
          "params": [
            36.4426,
            35.0213,
            33.6
          ]
        },
        "L-3 Nozzlenose": {
          "desc": "Damage Up",
          "min_params": [
            18.8,
            16.65,
            14.5
          ],
          "max_params": [
            33.3,
            31.15,
            29.0
          ]
        },
        "Luna Blaster": {
          "desc": "Increased High-Damage Radius",
          "params": [
            30.0,
            20.0,
            10.0
          ]
        },
        "Mini Splatling": {
          "desc": "Burst Duration",
          "params": [
            94.0,
            83.0,
            72.0
          ]
        },
        "N-ZAP": {
          "desc": "Increased Ink Coverage",
          "params": [
            13.2,
            12.1,
            11.0
          ]
        },
        "Nautilus": {
          "desc": "Burst Duration",
          "params": [
            136.0,
            120.0,
            104.0
          ]
        },
        "Octo Brush": {
          "desc": "Roll Speed",
          "params": [
            1.8816,
            1.7808,
            1.68
          ]
        },
        "Range Blaster": {
          "desc": "Increased Shot Accuracy",
          "params": [
            5.0,
            6.5,
            8.0
          ]
        },
        "Rapid Blaster Pro": {
          "desc": "Increased Shot Accuracy",
          "params": [
            4.0,
            6.0,
            8.0
          ]
        },
        "Rapid Blaster": {
          "desc": "Increased Shot Accuracy",
          "params": [
            4.0,
            6.0,
            8.0
          ]
        },
        "Slosher": {
          "desc": "Max Damage Range",
          "params": [
            -55.0,
            -35.0,
            -15.0
          ]
        },
        "Sloshing Machine": {
          "desc": "Increased Ink Coverage",
          "params": [
            1.15,
            1.075,
            1.0
          ]
        },
        "Splash-o-matic": {
          "desc": "Damage Up",
          "min_params": [
            17.5,
            15.75,
            14.0
          ],
          "max_params": [
            33.3,
            30.65,
            28.0
          ]
        },
        "Splat Brella": {
          "desc": "Canopy Regeneration Time",
          "params": [
            210.0,
            300.0,
            390.0
          ]
        },
        "Splat Charger": {
          "desc": "Base Damage Up",
          "min_params": [
            48.0,
            44.0,
            40.0
          ],
          "max_params": [
            96.0,
            88.0,
            80.0
          ]
        },
        "Splat Dualies": {
          "desc": "Damage Up",
          "min_params": [
            17.4,
            16.2,
            15.0
          ],
          "max_params": [
            33.3,
            31.65,
            30.0
          ]
        },
        "Splat Roller": {
          "desc": "Vertical Flick Damage Up",
          "min_params": [
            45.9,
            42.95,
            40.0
          ],
          "max_params": [
            207.0,
            193.5,
            180.0
          ]
        },
        "Splattershot Jr.": {
          "desc": "Increased Ink Coverage",
          "params": [
            15.5,
            14.2,
            12.9
          ]
        },
        "Splattershot Pro": {
          "desc": "Damage Up",
          "min_params": [
            26.2,
            23.6,
            21.0
          ],
          "max_params": [
            49.9,
            45.95,
            42.0
          ]
        },
        "Splattershot": {
          "desc": "Jump Shot Randomization",
          "params": [
            6.0,
            9.0,
            12.0
          ]
        },
        "Sploosh-o-matic": {
          "desc": "Damage Up",
          "min_params": [
            24.7,
            21.85,
            19.0
          ],
          "max_params": [
            49.4,
            43.7,
            38.0
          ]
        },
        "Squeezer": {
          "desc": "Damage Up",
          "min_params": [
            24.7,
            21.85,
            19.0
          ],
          "max_params": [
            49.4,
            43.7,
            38.0
          ]
        },
        "Squiffer": {
          "desc": "Full Charge Distance",
          "params": [
            182.65,
            175.15,
            167.65
          ]
        },
        "Tenta Brella": {
          "desc": "Canopy HP",
          "params": [
            10000.0,
            8500.0,
            7000.0
          ]
        },
        "Tetra Dualies": {
          "desc": "Damage Up",
          "min_params": [
            16.8,
            15.4,
            14.0
          ],
          "max_params": [
            33.3,
            30.65,
            28.0
          ]
        },
        "Tri-Slosher": {
          "desc": "Increased Ink Coverage",
          "params": [
            1.1,
            1.05,
            1.0
          ]
        },
        "Undercover Brella": {
          "desc": "Canopy Regeneration Time",
          "params": [
            150.0,
            210.0,
            270.0
          ]
        }
      }
    }

  }])
  .filter("trust", ['$sce', function($sce) {
    return function(htmlCode){
      return $sce.trustAsHtml(htmlCode);
    }
  }]);
