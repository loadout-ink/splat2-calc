angular.module('splatApp').controller('ModalDemoCtrl', function($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        selectedSet: function() {
          return $scope.selectedSet;
        },
        weaponSets: function() {
          return $scope.weaponSets;
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

angular.module('splatApp').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, weaponSets, selectedSet, selectedWeapon) {
  $scope.selectedSet = selectedSet;
  $scope.weaponSets = weaponSets;
  $scope.selectedWeapon = selectedWeapon;

  $scope.results = {'set' : selectedSet, 'weapon': selectedWeapon}

  $scope.switchSet = function() {
    $scope.selectedWeapon = $scope.availableWeapons()[0];
  }

  $scope.availableWeapons = function() {
    return $scope.selectedSet.weapons.filter(filter_available)
  }

  $scope.ok = function() {
    $uibModalInstance.close({'set' : $scope.selectedSet, 'weapon': $scope.selectedWeapon});
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
