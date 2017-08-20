angular.module('splatApp').controller('ModalCtrl', function($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;


  var templates = {
    "weaponPicker" : `<div class="row">
            <div class="col-md-12">
              <div class="weapon neonstripes">
              <div class="row cardheader">
                <div class="col-md-6">
                  <select class="form-control dropdown-toggle" data-ng-options="x.type for x in weaponSets" data-ng-model="selectedSet" ng-change="switchSet()"></select>
                </div>
                <div class="col-md-6">
                  <select class="form-control dropdown-toggle" data-ng-options="x.name for x in availableWeapons()" data-ng-model="selectedWeapon"></select>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-5" style="min-height:180px" align="center">
                  <img fallback-img class="weaponicon " style="max-height:200px; width: auto;" ng-src="{{selectedWeapon.image}}"/>
                </div>
              <div class="col-xs-7" align="center">
                <img fallback-img ng-src="{{getSubIcon(selectedWeapon.sub)}}" uib-tooltip="{{selectedWeapon.sub}}" tooltip-placement="top" style="background:rgba(0,0,0,0.5); border-radius:8px; height:48px" />
                <img fallback-img ng-src="img/subspe/Wsp_Jetpack.png" uib-tooltip="{{selectedWeapon.sub}}" tooltip-placement="top" style="background:rgba(0,0,0,0.5); border-radius:8px; height:48px"  />
                <br>
                <span class="splatfont-white">{{selectedWeapon.specialCost}}p</span><br>
                  more stats blah blah
              </div>
            </div>
              <div class="row">
                <div class="col-xs-6">
                  <button class="btn" type="button" ng-click="ok()">OK</button>
                </div>
                <div class="col-xs-6">
                <button class="btn" type="button" ng-click="cancel()">Cancel</button>
                </div>
            </div>
          </div>
        </div>`,
        gearPicker : `<div class="row">
                <div class="col-md-12">
                  <div class="weapon neonstripes">
                  <div class="row cardheader">
                    Hat Picker
                  </div>
                  <div class="row">
                  <div class="col-md-4">
                  <img fallback-img ng-src="{{selectedGear.image}}" /><br>
                  {{selectedGear.name}}<br>
                  Main: {{selectedGear.main}}<br>
                  Brand: {{selectedGear.brand}}<br>
                  Likely: X<br>
                  Unlikely: Y
                  </div>
                  <div class="col-md-8">
                  <div style="height:250px; overflow-y:scroll">
                  <div ng-click="selectGear(item)" ng-repeat="item in filterByMain(set,slot.main.name).primary" class="gearWrapper" style="position:relative; display:inline-block; margin:0px">
                    <img class="gearicon" ng-src="{{item.image}}" style="height:80px; width:auto"/>
                    <span style="position:absolute; left:0px; bottom:0px;">
                      <img src="img/brands/B00.png" style="width:28px; height:auto; border-radius: 50%;"/>
                    </span>
                    <span style="position:absolute; right:0px; top:4px;">
                      <img ng-src="{{getSkillByName(item.main).image}}" style="width:28px; height:auto; border-radius: 50%; background: rgba(0,0,0,0.8);"/>
                    </span>
                  </div><div ng-click="selectGear(item)" ng-repeat="item in filterByMain(set,slot.main.name).secondary" class="gearWrapper" style="position:relative; display:inline-block; margin:0px">
                                    <img class="gearicon" ng-src="{{item.image}}" style="height:80px; width:auto; background:rgba(255,0,0,0.2)"/>
                                    <span style="position:absolute; left:0px; bottom:0px;">
                                      <img src="img/brands/B00.png" style="width:28px; height:auto; border-radius: 50%;"/>
                                    </span>
                                    <span style="position:absolute; right:0px; top:4px;">
                                      <img ng-src="{{getSkillByName(item.main).image}}" style="width:28px; height:auto; border-radius: 50%; background: rgba(0,0,0,0.8);"/>
                                    </span>
                                    </div>


                  </div>
                  </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6">
                      <button class="btn" type="button" ng-click="ok()">OK</button>
                    </div>
                    <div class="col-xs-6">
                    <button class="btn" type="button" ng-click="cancel()">Cancel</button>
                    </div>
                </div>
              </div>
            </div>`
  }

  $scope.openWeaponPicker = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["weaponPicker"],
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
        }
      }
    });

    modalInstance.result.then(function(results) {
      $scope.selectedSet=results.set;
      $scope.loadout.weapon=results.weapon;
    }, function() {
      $log.info('Weapon picker cancelled');
    });
  };

  $scope.openHatPicker = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["gearPicker"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'GearPickerCtrl',
      size: size,
      resolve: {
        slot: function() {
          return $scope.loadout.head
        },
        getGearByName: function() {
          return $scope.getGearByName
        },
        getSkillByName: function() {
          return $scope.getSkillByName
        },
        set: function() {
          return $scope.hats
        },
        filterByMain: function() {
          return $scope.filterByMain
        },
        selectedGear: function() {
          return $scope.loadout.head.equipped
        }
      }
    });

    modalInstance.result.then(function(results) {
      $scope.loadout.head.equipped = results.selected
    }, function() {
      $log.info('Gear picker cancelled');
    });
  };

  $scope.openClothesPicker = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["gearPicker"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'GearPickerCtrl',
      size: size,
      resolve: {
        slot: function() {
          return $scope.loadout.clothes
        },
        getGearByName: function() {
          return $scope.getGearByName
        },
        set: function() {
          return $scope.clothes
        },
        filterByMain: function() {
          return $scope.filterByMain
        },
        selectedGear: function() {
          return $scope.loadout.clothes.equipped
        }
      }
    });

    modalInstance.result.then(function(results) {
      $scope.loadout.head.equipped = results.selected
    }, function() {
      $log.info('Gear picker cancelled');
    });
  };


  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

angular.module('splatApp').controller('WeaponPickerCtrl', function($scope, $uibModalInstance, weaponSets, subs, selectedSet, selectedWeapon) {
  $scope.selectedSet = selectedSet;
  $scope.weaponSets = weaponSets;
  $scope.selectedWeapon = selectedWeapon;

  $scope.switchSet = function() {
    this.selectedWeapon = this.availableWeapons()[0];
  }

  $scope.availableWeapons = function() {
    return this.selectedSet.weapons.filter(filter_available)
  }

  $scope.getSubByName = function(name) {
      return subs.filter(function(sub) {
        return sub.name == name;
      })[0]
  }

  $scope.getSubIcon = function(name) {
    return $scope.getSubByName(name).image;
  }

  $scope.ok = function() {
    $uibModalInstance.close({'set' : this.selectedSet, 'weapon': this.selectedWeapon});
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});


angular.module('splatApp').controller('GearPickerCtrl', function($scope, $uibModalInstance, slot, set, filterByMain, selectedGear, getSkillByName) {
  $scope.slot = slot
  $scope.set = set
  $scope.filterByMain = filterByMain
  $scope.selectedGear = selectedGear
  $scope.getSkillByName = getSkillByName

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
