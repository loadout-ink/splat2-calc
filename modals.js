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
                  {{selectedGear.name}}
                  </div>
                  <div class="col-md-8">
                  <div style="height:150px; overflow-y:scroll">
                    <img ng-click="selectGear(item)" ng-repeat="item in filterByMain(set,loadout.head.main.name).primary" fallback-img ng-src="{{item.image}}" style="height:65px"/><img ng-repeat="item in filterByMain(set,loadout.head.main.name).secondary" fallback-img ng-src="{{item.image}}" style="height:65px; background:rgba(255,0,0,0.3)"/>
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

  $scope.openGearPicker = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["gearPicker"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'GearPickerCtrl',
      size: size,
      resolve: {
        loadout: function() {
          return $scope.loadout
        },
        getGearByName: function() {
          return $scope.getGearByName
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


angular.module('splatApp').controller('GearPickerCtrl', function($scope, $uibModalInstance, loadout, set, filterByMain, selectedGear) {
  $scope.loadout = loadout
  $scope.set = set
  $scope.filterByMain = filterByMain
  $scope.selectedGear = selectedGear

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
