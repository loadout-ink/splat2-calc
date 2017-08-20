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
      var abilityScore = loadout.calcAbilityScore("Swim Speed Up");
      var baseSpeed = 2.02;
      var coeff = 150;
      if(loadout.weapon.speedLevel == "Low" && !loadout.hasAbility("Ninja Squid")) {
        baseSpeed = 1.74;
        coeff = 80;
      }
      if(loadout.weapon.speedLevel == "Low" && loadout.hasAbility("Ninja Squid")) {
        baseSpeed = 1.55;
        coeff = 75;
      }
      if(!loadout.weapon.speedLevel == "Low" && loadout.hasAbility("Ninja Squid")) {
        baseSpeed = 1.81;
      }
      var speed = baseSpeed * (1 + (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))/coeff);
      this.desc = speed.toFixed(2) + " Distance Units/frame";
      return ((speed / 2.02) * 100).toFixed(1);
    }, 120, '%'),
    new Stat("Run Speed", function(loadout) {
        var abilityScore = loadout.calcAbilityScore("Run Speed Up");
        var baseSpeed = 0.96;
        var coeff = 60;
        if(loadout.weapon.speedLevel == "High") {
          baseSpeed = 1.04;
          coeff = 78;
        }
        if(loadout.weapon.speedLevel == "Low") {
          baseSpeed = 0.88;
          coeff = (420/9);
        }
        var speed = baseSpeed * (1 + (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))/coeff);
        this.desc = speed.toFixed(2) + " Distance Units/frame";
        return ((speed / 0.96) * 100).toFixed(1);
      }, 150, '%'),
    new Stat("Run Speed (Enemy Ink)", function(loadout) {
        var abilityScore = loadout.calcAbilityScore("Ink Resistance Up");
        var baseSpeed = 0.32;
        var speed = baseSpeed * (1 + ((0.99 * abilityScore) - Math.pow(0.09 * abilityScore,2)) / 15)
        this.desc = speed.toFixed(2) + " Distance Units/frame";
        return ((speed / 0.96) * 100).toFixed(1);
      }, 100, '%'),
    new Stat("Ink Recovery Speed (Squid)", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Ink Recovery Up");
      var seconds = 3 * (1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / (600 / 7))
      this.desc = (seconds.toFixed(2) + "s from empty to full")
      return ((3 / seconds) * 100).toFixed(1);
    }, 154, '%'),
    new Stat("Ink Recovery Speed (Kid)", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Ink Recovery Up");
      var seconds = 10 * (1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 50)
      this.desc = (seconds.toFixed(2) + "s from empty to full")
      return ((10 / seconds) * 100).toFixed(1);
    }, 251, '%'),
    new Stat("Ink Consumption (Main)", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Ink Saver (Main)");
      var coeff = (200 / 3)
      if(loadout.weapon.inkSaver == "High") coeff = 60
      var reduction =  (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff
      var costPerShot = loadout.weapon.inkPerShot * (1 - reduction)
      this.desc = (Math.floor(100/costPerShot) + " " + loadout.weapon.shotUnit + " to empty")
      return ((1 - reduction) * 100).toFixed(1);
    }, 100, '%'),
    new Stat("Ink Consumption (Sub)", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Ink Saver (Sub)");
      var coeff = (600 / 7)
      var sub = $scope.getSubByName(loadout.weapon.sub)
      if(sub.inkSaver == "Low") coeff = 100
      var reduction =  (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff
      var costPerSub = sub.cost * (1 - reduction)
      this.desc = (costPerSub.toFixed(1) + " ink per " + sub.name)
      return ((1 - reduction) * 100).toFixed(1);
    }, 100, '%'),
    new Stat("Special Charge Speed", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Special Charge Up");
      var chargeSpeed = (1 + (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 100)
      this.desc = (Math.floor(loadout.weapon.specialCost / chargeSpeed) + "p for special")
      return (chargeSpeed * 100).toFixed(1);
    }, 130, '%'),
    new Stat("Sub Power (Bomb Range) *", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Sub Power Up");
      var range = (1 + (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 60)
      this.desc = ("No formulas available for some subs. Possibly inaccurate.")
      return (range * 100).toFixed(1);
    }, 150, '%'),
    new Stat("Bomb Damage Taken *", function(loadout) {
      var defScore = loadout.calcAbilityScore("Bomb Defense Up");
      var damageTaken = (1 - (0.99 * defScore - Math.pow((0.09 * defScore),2)) / 75)
      this.desc = ("Possibly inaccurate.")
      return (damageTaken * 100).toFixed(1);
    }, 100, '%'),
    new Stat("Super Jump Time", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Quick Super Jump");
      var jumpReduction = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 60
      var prepPhase = 20 + 60 * (1 - jumpReduction)
      var mainPhase = 130 * (1 - jumpReduction)
      var actionPhase = 30
      this.desc = ("Splatoon 1 data. Possibly inaccurate.")
      return ((prepPhase + mainPhase + actionPhase + (loadout.hasAbility("Stealth Jump")?50:0)) / 60).toFixed(2);
    }, 4.8, 's'),
    new Stat("Tracking Time", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Cold-Blooded");
      var trackReduction = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 40
      this.desc = ("Point sensor/ink mine duration")
      return (8 * (1 - trackReduction)).toFixed(2);
    }, 8, 's'),
    new Stat("Special Power (Duration)", function(loadout) {
      var abilityScore = loadout.calcAbilityScore("Special Power Up");
      var equippedSpecial = $scope.getSpecialByName(loadout.weapon.special)
      var coeff = 0;
      var base = 0;
      switch(equippedSpecial.name) {
        case "Suction-Bomb Launcher":
        case "Burst-Bomb Launcher":
        case "Curling-Bomb Launcher":
        case "Autobomb Launcher":
        case "Splat-Bomb Launcher":
          coeff = (600/7);
          base = 6;
          this.max = 8.1;
          break;
        case "Ink Armor":
          coeff = 80;
          base = 8;
          this.max = 11;
          break;
        case "Inkjet":
        case "Ink Storm":
          coeff = 120;
          base = 8;
          this.max = 10;
          break;
        case "Sting Ray":
          coeff = 90;
          base = 7.5;
          this.max = 10;
          break;
      }
      var increase = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff
      this.desc = null;
      this.unit = 's'
      if(base == 0) {
        this.desc = ("Not applicable for " + equippedSpecial.name)
        this.unit = ""
        return "N/A"
      }
      return (base * (1 + increase)).toFixed(2);
    }, 10, 's')
  ]
  $scope.getStatByName = function(name) {
    return $scope.stats.filter(function(stat) {
      return stat.name == name
    })[0]
  }
  $scope.getAdjustedSubSpeDamage = function(sub,loadout) {
  var stat = $scope.getStatByName("Bomb Damage Taken *")
  var damageReduction = stat.calc(loadout)/100
    var results = {}
    for(damageValue in sub.damage) {
      subDamage = sub.damage[damageValue]
      results[damageValue] = (subDamage * damageReduction).toFixed(1);
    }
    return results
  }
}
