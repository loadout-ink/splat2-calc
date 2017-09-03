angular.module('splatApp').controller('ModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;


  var templates = {
    weaponPickerNew : `
    <div class="row">
    <div class="col-md-12">
    <div class="itemcard neonstripes" id="dialog">
    <div class="row cardheader">
    Weapon Picker
    </div>
    <div class="row">
    <div class="col-md-4" style="font-family:Splatfont" align="center">
    <div class="row">
    <div class="col-md-12 col-sm-6">
    <img fallback-img ng-src="{{selectedWeapon.image}}" />
    </div>
    <div class="col-md-12 col-sm-6">
    <div style=" height:3.2em; line-height:1.5em;">
    <span style="font-size: 14pt;">{{selectedWeapon.name}}</span></div>
    <div class="col-md-12">
    <div class="row">
    <div class="col-xs-4 nopadding">
    <img ng-src="{{getSubIcon(selectedWeapon.sub)}}" uib-tooltip="{{selectedWeapon.sub}}" tooltip-append-to-body="true"  class="subspeicon" />
    </div>
    <div class="col-xs-8 nopadding">
    <div class="subspe-bubble">
    <img ng-src="{{getSpecialIcon(selectedWeapon.special)}}" uib-tooltip="{{selectedWeapon.special}}" tooltip-append-to-body="true" class="subspeicon" />
    {{selectedWeapon.specialCost}}p
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-12" id="minibar-container">
    <div class="row" ng-repeat="(stat,value) in selectedWeapon.stats">
    <div class="col-sm-6 col-xs-3 nopadding minibar-label">
    {{::stat}}
    </div>
    <div class="col-sm-6 col-xs-9 nopadding">
    <uib-progressbar max="100" type="pink" value="value" class="statbar mini" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-8 picker-right">
    <div class="row">
    <div class="col-md-12">
    <select class="form-control dropdown-toggle" data-ng-options="x.type for x in weaponSets" data-ng-model="selectedSet" ng-change="switchSet()"></select>
    </div>
    </div>
    <div class="col-md-12">
    <div class="row">
    <div class="picker">
    <img ng-repeat="weapon in availableWeapons()" ng-src="{{::weapon.image}}" ng-click="selectWeapon(weapon)" uib-tooltip="{{::weapon.name}}" tooltip-append-to-body="true" style="width:80px;height:auto"/>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-6" align=left>
    <button class="btn" type="button" ng-click="ok()">OK</button>
    </div>
    <div class="col-xs-6" align=right>
    <button class="btn" type="button" ng-click="cancel()">Cancel</button>
    </div>
    </div>
    </div>
    </div>
    `,
    gearPicker : `<div class="row">
    <div class="col-md-12">
    <div class="itemcard {{::background}}" id="dialog">
    <div class="row cardheader">
    Gear Picker
    </div>
    <div class="row">
    <div class="col-md-4" style="font-family:Splatfont" align="center">
    <div class="row">
    <div class="col-md-12 col-sm-6">
    <img fallback-img ng-src="{{selectedGear.image}}" />
    </div>
    <div class="col-md-12 col-sm-6">
    <div style=" height:3.2em; line-height:1.5em;">
    <span style="font-size: 14pt;">{{selectedGear.name}}</span></div>
    <div id="gearpicker-stats">
    <img ng-src="{{getSkillByName(selectedGear.main).image}}" style="width:28px; height:auto"/>  {{selectedGear.main}}<br>
    <img ng-src="{{brands[selectedGear.brand].image}}" style="width:28px; height:auto"/> {{selectedGear.brand}}<br>
    <div style=" height:2.2em; line-height:1em;">
    <span ng-if="brands[selectedGear.brand].common">
    <span class="fa green fa-arrow-up"></span><img ng-src="{{getSkillByName(brands[selectedGear.brand].common).image}}" style="width:28px; height:auto"/>
    <span class="fa red fa-arrow-down"></span><img ng-src="{{getSkillByName(brands[selectedGear.brand].uncommon).image}}" style="width:28px; height:auto"/>
    </span>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-8" style="text-align:center; padding-left:0px">
    <div class="picker">
    <div ng-click="selectGear(item)"  ng-repeat="item in filtered.primary track by item.id" uib-tooltip="{{::item.name}}" tooltip-append-to-body="true" class="gearWrapper" style="position:relative; display:inline-block; margin:0px">
    <img class="gearicon" ng-src="{{item.image}}" style="height:80px; width:auto"/>
    <span style="position:absolute; left:0px; bottom:0px;">
    <img ng-src="{{::brands[item.brand].image}}" style="width:28px; height:auto;"/>
    </span>
    <span style="position:absolute; right:0px; top:4px;">
    <img ng-src="{{::getSkillByName(item.main).image}}" style="width:28px; height:auto; border-radius: 50%; background: rgba(0,0,0,0.8);"/>
    </span>
    </div>
    <div ng-click="selectGear(item)" ng-repeat="item in filtered.secondary track by item.id" uib-tooltip="{{::item.name}}" tooltip-append-to-body="true" class="gearWrapper" style="position:relative; display:inline-block; margin:0px">
    <img class="gearicon" ng-src="{{::item.image}}" style="height:80px; width:auto;"/>
    <span style="position:absolute; left:0px; bottom:0px;">
    <img ng-src="{{::brands[item.brand].image}}" style="width:28px; height:auto;"/>
    </span>
    <span style="position:absolute; right:0px; top:4px;">
    <img ng-src="{{::getSkillByName(item.main).image}}" style="width:28px; height:auto; border-radius: 50%; background: rgba(0,0,0,0.8);"/>
    </span>
    <span style="position:absolute; right:0px; bottom:4px;">
    <img ng-if="item.brand!='Grizzco'" src="assets/img/misc/annie.png" style="width:24px;" />
    </span>
    </div>
    <div ng-repeat="item in filtered.notEligible track by item.id" class="gearWrapper" style="position:relative; display:inline-block; margin:0px">
    <img class="gearicon" ng-src="{{::item.image}}" style="height:80px; width:auto;"/>
    <span style="position:absolute; left:0px; bottom:0px;">
    <img ng-src="{{::brands[item.brand].image}}" style="width:28px; height:auto;"/>
    </span>
    <span style="position:absolute; right:0px; top:4px;">
    <img ng-src="{{::getSkillByName(item.main).image}}" style="width:28px; height:auto; border-radius: 50%; background: rgba(0,0,0,0.8);"/>
    </span>
    <span style="position:absolute;left:10px;top:5px;" uib-tooltip="Not possible with selected main" tooltip-append-to-body="true">
    <span class="fa fa-5x fa-ban " ng-if="!isPossibleMain(loadout.clothes.equipped,loadout.clothes.main.name)"></span>
    </span>
    </div>

    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-6" align=left>
    <button class="btn" type="button" ng-click="ok()">OK</button>
    </div>
    <div class="col-xs-6" align=right>
    <button class="btn" type="button" ng-click="cancel()">Cancel</button>
    </div>
    </div>
    </div>
    </div>`,
    whatsNew: `<div class="row">
    <div class="col-md-12">
    <div class="itemcard basic purplestripes" id="dialog">
    <div class="row cardheader">
    What's New?
    </div>
    <div class="row basic-content">
    <h4>Version 1.0</h4>
    <ul>
    <li>Initial release.</li>
    <li>Some special/sub scaling is still missing, as well as Bomb Defense Up.</li>
    <li>Some values may be slightly inaccurate. Please leave an issue <a href="http://github.com/DeviPotato/splat2-calc/" target="_blank">on GitHub</a> with sources if you have corrections.</li>
    </ul>
    <div class="row" style="text-align:center">
    <div class="col-xs-12">
    <button class="btn" type="button" ng-click="ok()">Got it!</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `,
    about: `<div class="row">
    <div class="col-md-12">
    <div class="itemcard purplestripes" id="dialog">
    <div class="row cardheader">
    About
    </div>
    <div class="row basic-content" align=center>
    Built primarily with AngularJS 1.6.5 and Bootstrap 3.<br><br>
    This calculator was developed using info and assets datamined by <a href="https://twitter.com/LeanYoshi" target="_blank">Lean</a>, as well as information provided by several members of the Inkademy and Splatoon Developers servers on Discord.
    <br><br>Thanks to everyone who gave me help and data!<br><br>
    Many of the formulas used can be seen on <a href="https://splatoonwiki.org/wiki/User:Heddy/Charts" target="_blank">Heddy's charts</a> on Inkipedia.<br><br>
    Any feature suggestions, bug reports, and feedback can be left as issues on the project's <a href="https://github.com/DeviPotato/splat2-calc" target="_blank">GitHub</a>.
    <div class="row" style="text-align:center">
    <div class="col-xs-12">
    <button class="btn" type="button" ng-click="ok()">Got it!</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
  }

  $scope.openWeaponPicker = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["weaponPickerNew"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'WeaponPickerCtrl',
      size: size,
      resolve: {
        selectedSet: function() {
          return $scope.selectedSet;
        },
        weaponSets: function() {
          return $scope.weaponSets;
        },
        subs: function() {
          return $scope.subs;
        },
        selectedWeapon: function() {
          return $scope.loadout.weapon;
        },
        getSubByName: function() {
          return $scope.getSubByName;
        },
        getSpecialByName: function() {
          return $scope.getSpecialByName
        }
      }
    });

    modalInstance.result.then(function(results) {
      $scope.$parent.selectedSet=results.set; // ???
      $scope.$parent.loadout.weapon=results.weapon;
    }, function() {
      $log.info('Weapon picker cancelled');
    });
  };



  $scope.openChangelog = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["whatsNew"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'BasicCtrl'
    });

    modalInstance.result.then(function(results) {

    }, function() {

    });
  };

  $scope.openAbout = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["about"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'BasicCtrl'
    });

    modalInstance.result.then(function(results) {

    }, function() {

    });
  };

  $scope.openGearPicker = function(gear, equipped, slot) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["gearPicker"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'GearPickerCtrl',
      resolve: {
        slot: function() {
          return eval("$scope.loadout." + slot)
        },
        getSkillByName: function() {
          return $scope.getSkillByName
        },
        set: function() {
          return gear
        },
        brands: function() {
          return $scope.brands
        },
        filterByMain: function() {
          return $scope.filterByMain
        },
        selectedGear: function() {
          return equipped
        },
        background: function() {
          if(slot=='head') {
            return 'redstripes'
          }
          else if(slot=='clothes') {
            return 'tealstripes'
          }
          else if(slot=='shoes') {
            return 'orangestripes'
          }
          else {
            return 'neonstripes'
          }
        }
      }
    });
    modalInstance.result.then(function(results) {
      eval("$scope.loadout." + slot + ".equipped = results.selected")
      if(eval("$scope.loadout." + slot + ".main") == null) {
        eval(("$scope.loadout." + slot + ".main = $scope.getSkillByName('" + results.selected.main + "')"))
      }
      eval("$scope.loadout." + slot + ".equipped = results.selected")
    }, function() {
      $log.info('Gear picker cancelled');
    });
  };
});

angular.module('splatApp').controller('WeaponPickerCtrl', function($scope, $uibModalInstance, getSubByName, getSpecialByName, weaponSets, subs, selectedSet, selectedWeapon) {
  $scope.selectedSet = selectedSet;
  $scope.weaponSets = weaponSets;
  $scope.selectedWeapon = selectedWeapon;

  $scope.switchSet = function() {
    $scope.selectedWeapon = this.availableWeapons()[0];
  }

  $scope.selectWeapon = function(item) {
    $scope.selectedWeapon=item;
  }

  $scope.availableWeapons = function() {
    return this.selectedSet.weapons.filter(filter_available)
  }

  $scope.getSubByName = getSubByName

  $scope.getSubIcon = function(name) {
    return $scope.getSubByName(name).image;
  }

  $scope.getSpecialByName = getSpecialByName

  $scope.getSpecialIcon = function(name) {
    return $scope.getSpecialByName(name).image;
  }

  $scope.ok = function() {
    $uibModalInstance.close({'set' : this.selectedSet, 'weapon': this.selectedWeapon});
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});


angular.module('splatApp').controller('GearPickerCtrl', function($scope, $uibModalInstance, background, slot, set, brands, filterByMain, selectedGear, getSkillByName) {
  $scope.slot = slot
  $scope.set = set
  $scope.filterByMain = filterByMain
  $scope.selectedGear = selectedGear
  $scope.getSkillByName = getSkillByName
  $scope.brands = brands
  $scope.background = background
  if(slot.main != null) $scope.filtered = filterByMain(set,slot.main.name)
  else $scope.filtered = filterByMain(set,null)

  $scope.selectGear = function(item) {
    $scope.selectedGear=item;
  }

  $scope.ok = function() {
    $uibModalInstance.close({selected : this.selectedGear});
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});

angular.module('splatApp').controller('BasicCtrl', function($scope, $uibModalInstance) {
  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
