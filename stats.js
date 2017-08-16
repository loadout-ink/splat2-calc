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
      if(!loadout.weapon.swimPenalty && loadout.hasAbility("Ninja Squid")) {
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
    new Stat("Ink Consumption (Main)", function(loadout) {
      var saverScore = loadout.calcAbilityScore("Main Saver");
      var coeff = (200 / 3)
      if(loadout.weapon.inkSaver == "High") coeff = 60
      var reduction =  (0.99 * saverScore - Math.pow((0.09 * saverScore),2)) / coeff
      var costPerShot = loadout.weapon.inkPerShot * (1 - reduction)
      this.desc = (Math.floor(100/costPerShot) + " " + loadout.weapon.shotUnit + " to empty")
      return (1 - reduction) * 100;
    }, 100, '%'),
    new Stat("Ink Consumption (Sub)", function(loadout) {
      var saverScore = loadout.calcAbilityScore("Sub Saver");
      var coeff = (600 / 7)
      var sub = $scope.getSubByName(loadout.weapon.sub)
      if(sub.inkSaver == "Low") coeff = 100
      var reduction =  (0.99 * saverScore - Math.pow((0.09 * saverScore),2)) / coeff
      var costPerSub = sub.cost * (1 - reduction)
      this.desc = (costPerSub.toFixed(1) + " ink per " + sub.name)
      return (1 - reduction) * 100;
    }, 100, '%'),
    new Stat("Special Charge Speed", function(loadout) {
      var chargeScore = loadout.calcAbilityScore("Special Charge Up");
      var chargeSpeed = (1 + (0.99 * chargeScore - Math.pow((0.09 * chargeScore),2)) / 100)
      this.desc = (Math.floor(loadout.weapon.specialCost / chargeSpeed) + "p for special")
      return chargeSpeed * 100;
    }, 130, '%'),
    new Stat("Sub Power (Bomb Range) *", function(loadout) {
      var powerScore = loadout.calcAbilityScore("Sub Power Up");
      var range = (1 + (0.99 * powerScore - Math.pow((0.09 * powerScore),2)) / 60)
      this.desc = ("No formulas available for some subs. Possibly inaccurate.")
      return range * 100;
    }, 150, '%'),
    new Stat("Bomb Damage Taken", function(loadout) {
      var defScore = loadout.calcAbilityScore("Bomb Defense Up");
      var damageTaken = (1 - (0.99 * defScore - Math.pow((0.09 * defScore),2)) / 75)
      this.desc = ("Possibly inaccurate.")
      return damageTaken * 100;
    }, 100, '%')
  ]
  $scope.getStatByName = function(name) {
    return $scope.stats.filter(function(stat) {
      return stat.name == name
    })[0]
  }
  $scope.getAdjustedSubSpeDamage = function(sub,loadout) {
  var stat = $scope.getStatByName("Bomb Damage Taken")
  var damageReduction = stat.calc(loadout)/100
    var results = {}
    for(damageValue in sub.damage) {
      subDamage = sub.damage[damageValue]
      results[damageValue] = (subDamage * damageReduction).toFixed(1);
    }
    return results
  }
}
