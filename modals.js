angular.module('splatApp').controller('ModalDemoCtrl', function($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      windowTemplateUrl: 'custom.html',
      controller: 'ModalInstanceCtrl',
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
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('splatApp').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, weaponSets, subs, selectedSet, selectedWeapon) {
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
    console.log(this.selectedWeapon)
    $uibModalInstance.close({'set' : this.selectedSet, 'weapon': this.selectedWeapon});
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
