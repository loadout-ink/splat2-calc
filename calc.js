angular
  .module('splatApp', ['ui.bootstrap'])
  .controller('splatController', ['$scope', function splatCtrl($scope) {
    $scope.placeholder = ["PH Data", "More PH Data", "Hello"];
    $scope.dummy = $scope.placeholder[0];
    angular.module('splatApp').skills($scope);
    angular.module('splatApp').stats($scope);
    angular.module('splatApp').weapons($scope);
    $scope.loadout = new Loadout();
    $scope.loadout.weapon = $scope.weapons[0]

  }])
