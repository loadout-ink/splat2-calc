angular
  .module('splatApp', ['ui.bootstrap', 'ngAnimate'])
  .controller('splatController', ['$scope', function splatCtrl($scope, $uibModal, $log) {
    $scope.placeholder = ["PH Data", "More PH Data", "Hello"];
    $scope.dummy = $scope.placeholder[0];
    angular.module('splatApp').skills($scope);
    angular.module('splatApp').stats($scope);
    angular.module('splatApp').weapons($scope);
    angular.module('splatApp').subs($scope);
    angular.module('splatApp').specials($scope);
    angular.module('splatApp').gear($scope);
    $scope.loadout = new Loadout();

    $scope.status = {}

    $scope.switchSet = function() {
      $scope.loadout.weapon = $scope.availableWeapons()[0];
    }

    $scope.availableWeapons = function() {
      return $scope.selectedSet.weapons.filter(filter_available)
    }

    $scope.selectedSet = $scope.weaponSets[0];
    $scope.loadout.weapon = $scope.availableWeapons()[1];
    $scope.loadout.head.equipped = $scope.hats[0]
    $scope.loadout.clothes.equipped = $scope.clothes[0]
    $scope.loadout.shoes.equipped = $scope.shoes[0]

  }])
