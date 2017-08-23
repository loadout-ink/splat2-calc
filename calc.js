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
    new Clipboard('#copybtn');
    $scope.status = {}

    $scope.switchSet = function() {
      $scope.loadout.weapon = $scope.availableWeapons()[0];
    }

    $scope.availableWeapons = function() {
      return $scope.selectedSet.weapons.filter(filter_available)
    }

    $scope.selectedSet = $scope.weaponSets[0];
    $scope.loadout.weapon = $scope.availableWeapons()[0];
    $scope.loadout.head.equipped = $scope.hats[0]
    $scope.loadout.clothes.equipped = $scope.clothes[0]
    $scope.loadout.shoes.equipped = $scope.shoes[0]

     $scope.$watch('loadout', function() {
       history.replaceState(undefined, undefined, "#" + $scope.encode())
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
      return window.location.protocol +"//"+ window.location.hostname + window.location.pathname + "#" + $scope.encodeLoadout()
    }

    $scope.copyLink = function() {
      window.prompt("Copy to Clipboard", window.location.protocol +"//"+ window.location.hostname + window.location.pathname + "#" + $scope.encodeLoadout())
    }

    if(window.location.hash) {
      var newLoadout = $scope.loadCode(window.location.hash.replace('#',''))
      if(newLoadout) {
        $scope.loadout = newLoadout
      }
    }

  }])
