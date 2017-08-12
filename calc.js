angular
  .module('splatApp', ['ui.bootstrap'])
  .controller('splatController', ['$scope', function splatCtrl($scope) {
    $scope.placeholder = ["PH Data", "More PH Data", "Hello"];
    $scope.dummy = $scope.placeholder[0];
    angular.module('splatApp').skills($scope);

    $scope.loadout = new Loadout();

  }])
