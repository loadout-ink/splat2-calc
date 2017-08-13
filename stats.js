function Stat(name, calc, max, unit) {
  this.name = name;
  this.calc = calc;
  this.max = max;
  this.unit = unit;
  this.desc = null;
}

angular.module('splatApp').stats = function ($scope) {
$scope.stats = [
  new Stat("Swim Speed (FIXME)", function(loadout) {
      var swimScore = loadout.calcAbilityScore($scope.getSkillByName("Swim Speed Up"));
      var speed = 1.92 * (1 + (0.99 * swimScore - Math.pow(0.09 * swimScore,2))/120);
      this.desc = speed.toFixed(2) + " Distance Units/frame";
      return (speed / 1.92) * 100;
    }, 125, '%'),
    new Stat("Ink Recovery Speed (Squid)", function(loadout) {
      var recoveryScore = loadout.calcAbilityScore($scope.getSkillByName("Ink Recovery Up"));
      var seconds = 3 * (1 - (0.99 * recoveryScore - Math.pow((0.09 * recoveryScore),2)) / (600 / 7))
      this.desc = (seconds.toFixed(2) + "s from empty to full")
      return (3 / seconds) * 100;
    }, 154, '%'),
    new Stat("Ink Recovery Speed (Kid)", function(loadout) {
      var recoveryScore = loadout.calcAbilityScore($scope.getSkillByName("Ink Recovery Up"));
      var seconds = 10 * (1 - (0.99 * recoveryScore - Math.pow((0.09 * recoveryScore),2)) / 50)
      this.desc = (seconds.toFixed(2) + "s from empty to full")
      return (10 / seconds) * 100;
    }, 251, '%'),
  ]
}
