function Stat(name, calc, max, unit) {
  this.name = name;
  this.calc = calc;
  this.max = max;
  this.unit = unit;
  this.desc = null;
}

angular.module('splatApp').stats = function ($scope) {
$scope.stats = [
  new Stat("Swim Speed", function(loadout) {
      var swimScore = loadout.calcAbilityScore("Swim Speed Up");
      var baseSpeed = 2.02;
      var coeff = 150;
      if(loadout.weapon.swimPenalty && !loadout.hasAbility("Ninja Squid")) {
        baseSpeed = 1.74;
        coeff = 80;
      }
      if(loadout.weapon.swimPenalty && loadout.hasAbility("Ninja Squid")) {
        baseSpeed = 1.55;
        coeff = 75;
      }
      if(!loadout.weapon.swimPenalty && loadout.hasAbility("NinjaSquid")) {
        baseSpeed = 1.81;
      }
      var speed = baseSpeed * (1 + (0.99 * swimScore - Math.pow(0.09 * swimScore,2))/coeff);
      this.desc = speed.toFixed(2) + " Distance Units/frame";
      return (speed / 2.02) * 100;
    }, 120, '%'),
    new Stat("Run Speed", function(loadout) {
        var runScore = loadout.calcAbilityScore("Run Speed Up");
        var baseSpeed = 0.96;
        var speed = baseSpeed * (1 + (0.99 * runScore - Math.pow(0.09 * runScore,2))/60);
        this.desc = speed.toFixed(2) + " Distance Units/frame";
        return (speed / 0.96) * 100;
      }, 150, '%'),
    new Stat("Run Speed (Shooting)", function(loadout) {
        var runScore = loadout.calcAbilityScore("Run Speed Up");
        var baseSpeed = 0.72;
        var speed = baseSpeed * (1 + (0.99 * runScore - Math.pow(0.09 * runScore,2))/120);
        this.desc = speed.toFixed(2) + " Distance Units/frame";
        return (speed / 0.96) * 100;
      }, 100, '%'),
    new Stat("Run Speed (Enemy Ink)", function(loadout) {
        var resistScore = loadout.calcAbilityScore("Ink Resistance Up");
        var baseSpeed = 0.32;
        var speed = baseSpeed * (1 + ((0.99 * resistScore) - Math.pow(0.09 * resistScore,2)) * (2/31))
        this.desc = speed.toFixed(2) + " Distance Units/frame";
        return (speed / 0.96) * 100;
      }, 100, '%'),
    new Stat("Ink Recovery Speed (Squid)", function(loadout) {
      var recoveryScore = loadout.calcAbilityScore("Ink Recovery Up");
      var seconds = 3 * (1 - (0.99 * recoveryScore - Math.pow((0.09 * recoveryScore),2)) / (600 / 7))
      this.desc = (seconds.toFixed(2) + "s from empty to full")
      return (3 / seconds) * 100;
    }, 154, '%'),
    new Stat("Ink Recovery Speed (Kid)", function(loadout) {
      var recoveryScore = loadout.calcAbilityScore("Ink Recovery Up");
      var seconds = 10 * (1 - (0.99 * recoveryScore - Math.pow((0.09 * recoveryScore),2)) / 50)
      this.desc = (seconds.toFixed(2) + "s from empty to full")
      return (10 / seconds) * 100;
    }, 251, '%'),
  ]
}
