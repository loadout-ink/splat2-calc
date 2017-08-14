angular
  .module('splatApp', ['ui.bootstrap'])
  .controller('splatController', ['$scope', function splatCtrl($scope) {
    $scope.placeholder = ["PH Data", "More PH Data", "Hello"];
    $scope.dummy = $scope.placeholder[0];
    angular.module('splatApp').skills($scope);
    angular.module('splatApp').stats($scope);
    angular.module('splatApp').weapons($scope);
    angular.module('splatApp').subs($scope);
    $scope.loadout = new Loadout();

    $scope.switchSet = function() {
      $scope.loadout.weapon = $scope.availableWeapons()[0];
    }

    $scope.availableWeapons = function() {
      return $scope.selectedSet.weapons.filter(filter_available)
    }
    $scope.selectedSet = $scope.weaponSets[0];
    $scope.loadout.weapon = $scope.availableWeapons()[0];

  }])
