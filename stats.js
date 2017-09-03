function Stat(name, calc, max, unit) {
  this.name = name;
  this.calc = calc;
  this.max = max;
  this.unit = unit;
  this.value = 0;
  this.desc = null;
  this.label = null;
}

//TODO: clean all this up
angular.module('splatApp').stats = function ($scope) {
$scope.stats = {
  'Swim Speed': new Stat('Swim Speed', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Swim Speed Up');
      var baseSpeed = 2.02;
      var coeff = 150;
      if(loadout.weapon.speedLevel == 'Low') {
        baseSpeed = 1.74;
        coeff = 80;
      }
      var speed = baseSpeed * (1 + (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))/coeff);
      if(loadout.hasAbility('Ninja Squid')) {
        speed = speed * 0.9;
      }
      this.value = speed
      this.label = speed.toFixed(2) + ' DU/f';
      return speed.toFixed(2);
    }, 2.43),
    'Run Speed': new Stat('Run Speed', function(loadout) {
        var abilityScore = loadout.calcAbilityScore('Run Speed Up');
        var baseSpeed = 0.96;
        var coeff = 60;
        if(loadout.weapon.speedLevel == 'High') {
          baseSpeed = 1.04;
          coeff = 78;
        }
        if(loadout.weapon.speedLevel == 'Low') {
          baseSpeed = 0.88;
          coeff = (420/9);
        }
        var speed = baseSpeed * (1 + (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))/coeff);
        this.value = speed;
        this.label = speed.toFixed(2) + ' DU/f';
        return speed.toFixed(2);
      }, 1.44),
    'Run Speed (Enemy Ink)': new Stat('Run Speed (Enemy Ink)', function(loadout) {
        var abilityScore = loadout.calcAbilityScore('Ink Resistance Up');
        var baseSpeed = 0.32;
        var speed = baseSpeed * (1 + ((0.99 * abilityScore) - Math.pow(0.09 * abilityScore,2)) / 15)
        this.value = speed
        this.label = speed.toFixed(2) + ' DU/f';
        return this.value.toFixed(1);
      }, 1.44),
    'Run Speed (Firing)': new Stat('Run Speed (Firing)', function(loadout) {
        var abilityScore = loadout.calcAbilityScore('Run Speed Up');
        if(loadout.weapon.name.toLowerCase().indexOf('brush') != -1 || loadout.weapon.name.toLowerCase().indexOf('roller') != -1) {
          this.name = 'Run Speed (Rolling)'
        }
        else {
          this.name = 'Run Speed (Firing)'
        }
        var weaponRSU = 1 + (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))/120.452
        var speed = loadout.weapon.baseSpeed * (weaponRSU);
        this.value = ((speed / 0.96) * 100)
        this.label = speed.toFixed(2) + ' DU/f';
        return this.value.toFixed(1);
      }, 150),
    'Ink Recovery Speed (Squid)': new Stat('Ink Recovery Speed (Squid)', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Recovery Up');
      var seconds = 3 * (1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / (600 / 7))
      this.desc = (seconds.toFixed(2) + 's from empty to full')
      this.value = ((3 / seconds) * 100)
      this.label = this.value.toFixed(1) + '%';
      return this.value.toFixed(1);
    }, 154),
    'Ink Recovery Speed (Kid)': new Stat('Ink Recovery Speed (Kid)', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Recovery Up');
      var seconds = 10 * (1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 50)
      this.desc = (seconds.toFixed(2) + 's from empty to full')
      this.value = ((10 / seconds) * 100);
      this.label = this.value.toFixed(1) + '%';
      return this.value.toFixed(1);
    }, 251),
    'Ink Consumption (Main)': new Stat('Ink Consumption (Main)', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Saver (Main)');
      var coeff = (200 / 3)
      if(loadout.weapon.inkSaver == 'High') coeff = 60
      var reduction =  (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff
      var costPerShot = loadout.weapon.inkPerShot * (1 - reduction)
      this.desc = (reduction*100).toFixed(1) + '% reduction'
      this.label = costPerShot.toFixed(1) + ' ink/' + loadout.weapon.shotUnit;
      this.value = costPerShot;
      return costPerShot;
    }, 100),
    'Ink Consumption (Sub)': new Stat('Ink Consumption (Sub)', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Saver (Sub)');
      var coeff = (600 / 7)
      var sub = $scope.getSubByName(loadout.weapon.sub)
      if(sub.inkSaver == 'Low') coeff = 100
      var reduction =  (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff
      var costPerSub = sub.cost * (1 - reduction)
      this.value = costPerSub;
      this.desc = reduction.toFixed(1) + '% reduction';
      this.label = costPerSub.toFixed(1) + ' ink';
      return costPerSub;
    }, 100),
    'Special Charge Speed': new Stat('Special Charge Speed', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Special Charge Up');
      var chargeSpeed = (1 + (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 100)
      this.value = Math.floor(loadout.weapon.specialCost / chargeSpeed)
      this.desc = (Math.floor(loadout.weapon.specialCost / chargeSpeed) + 'p for special')
      this.label = (chargeSpeed * 100).toFixed(1) + '%';
      this.value = chargeSpeed;
      return (chargeSpeed * 100).toFixed(1);
    }, 1.3),
    'Special Saved': new Stat('Special Saved', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Special Saver');
      var baseKept = 0.5;
      if(loadout.hasAbility('Respawn Punisher')) {
        abilityScore = 0;
        baseKept = 0.425;
        this.value = baseKept;
        this.label = baseKept*100 + '%';
        this.desc = 'Special Saver nullified by Respawn Punisher.';
        return (kept * 100).toFixed(1);
      }
      var kept  = (baseKept + (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 60)
      this.value = kept;
      this.label = (kept * 100).toFixed(1) + '%';
      this.desc = null;
      return (kept * 100).toFixed(1);
    }, 1),
//TODO: clean this up a bit
    'Special Power': new Stat('Special Power', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Special Power Up');
      var equippedSpecial = $scope.getSpecialByName(loadout.weapon.special)
      var coeff = 0;
      var base = 0;
      var results = 0;
      this.desc = null;
      this.label = "???";
      this.name = 'Special Power (???)'
      switch(equippedSpecial.name) {
        case 'Suction-Bomb Launcher':
        case 'Burst-Bomb Launcher':
        case 'Curling-Bomb Launcher':
        case 'Autobomb Launcher':
        case 'Splat-Bomb Launcher':
          coeff = 90;
          base = 360;
          this.max = 8.1;
          this.unit = 's'
          this.name = 'Special Power (Duration)'
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))/60
          this.label = results.toFixed(2) + 's'
          this.value = results;
          return results.toFixed(2);
          break;
        case 'Ink Armor':
          coeff = 60;
          base = 360;
          this.max = 9;
          this.unit = 's'
          this.name = 'Special Power (Duration)'
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))/60
          this.label = results.toFixed(2) + 's';
          this.value = results;
          return results.toFixed(2);
          break;
        case 'Inkjet':
        case 'Ink Storm':
          coeff = 120;
          base = 480;
          this.max = 10;
          this.unit = 's'
          this.name = 'Special Power (Duration)'
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))/60
          this.label = results.toFixed(2) + 's';
          this.value = results;
          return results.toFixed(2);
          break;
        case 'Sting Ray':
          coeff = 90;
          base = 450;
          this.max = 10;
          this.unit = 's'
          this.name = 'Special Power (Duration)'
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))/60
          this.label = results.toFixed(2) + 's';
          this.value = results;
          return results.toFixed(2);
          break;
        case 'Baller':
          coeff = 30;
          base = 300;
          this.max = 600;
          this.unit = ' HP'
          this.name = 'Special Power (Baller HP)'
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))
          this.label = results.toFixed(2) + ' HP';
          this.value = results;
          return results.toFixed(1);
          break;
        case 'Tenta Missiles':
          coeff = 45;
          base = 4.8;
          this.max = 8;
          this.unit = '%'
          this.max = '166'
          this.name = 'Special Power (Reticule Size)'
          results = (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff)*100
          this.label = results.toFixed(1) + '%'
          this.value = results;
          return results.toFixed(1);
          break;
        case 'Splashdown':
          coeff = 110;
          base = 110;
          this.max = 1.274;
          this.unit = '%'
          this.name = 'Special Power (Splash Diameter)'
          results = (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff)
          this.desc = (base*results).toFixed(1) + ' Distance Units'
          this.label = (results*100).toFixed(1) + '%';
          this.value = results;
          return (results*100).toFixed(1);
          break;
      }
      return results;
    }, 100),
//TODO: get effects for all subs
    'Sub Power': new Stat('Sub Power', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Sub Power Up');
      var equippedSub = $scope.getSubByName(loadout.weapon.sub)
      this.name = 'Sub Power (???)'
      this.value = 0;
      this.label = 'Unavailable'
      switch(equippedSub.name) {
        case 'Burst Bomb':
        case 'Splat Bomb':
        case 'Suction Bomb':
        case 'Autobomb':
        case 'Point Sensor':
          var range = (1 + (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 60)
          this.label = (range * 100).toFixed(1) + '%';
          this.value = range*100;
          this.name = 'Sub Power (Bomb Range)';
          return (range * 100).toFixed(1);
          break;
        case 'Curling Bomb':
          this.name = 'Sub Power (Bomb Speed)';
          break;
        case 'Ink Mine':
          this.name = 'Sub Power (Mine Radius)';
          break;
        case 'Splash Wall':
          this.name = 'Sub Power (Wall HP)';
          break;
        case 'Sprinkler':
          this.name = 'Sub Power (Full-Power Duration)';
          break;
        case 'Squid Beakon':
          this.name = 'Sub Power (Jump Speed to Beakon)';
          break;
      }
      return (range * 100).toFixed(1);
    }, 150),
    'Bomb Damage Taken': new Stat('Bomb Damage Taken', function(loadout) {
      // var defScore = loadout.calcAbilityScore('Bomb Defense Up');
      // var damageTaken = (1 - (0.99 * defScore - Math.pow((0.09 * defScore),2)) / 75)
      // this.desc = ('Possibly inaccurate.');
      // this.label = (damageTaken * 100).toFixed(1) + '%';
      // this.value = damageTaken*100;
      // return (damageTaken * 100).toFixed(1);
      this.label = 'Unavailable';
      this.value = 0;
      return 0;
    }, 100),
    'Super Jump Time (Squid)': new Stat('Super Jump Time (Squid)', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Super Jump');
      var windup = 71
      var airtime = 108
      var action = 30
      var mod = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2))
      var windupFrames = 10 +(windup * (1 - mod/45))
      var mainFrames = action + (airtime * (1 - mod/78))
      this.value = (windupFrames + mainFrames) / 60
      this.label = this.value.toFixed(2) + 's';
      return ((windupFrames + mainFrames) / 60).toFixed(2);
    }, 3.65),
    'Super Jump Time (Kid)': new Stat('Super Jump Time (Kid)', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Super Jump');
      var windup = 92
      var airtime = 108
      var action = 30
      var mod = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2))
      var windupFrames = 10 +(windup * (1 - mod/45))
      var mainFrames = action + (airtime * (1 - mod/78))
      this.value = (windupFrames + mainFrames) / 60
      this.label = this.value.toFixed(2) + 's';
      return ((windupFrames + mainFrames) / 60).toFixed(2);
    }, 4),
    'Quick Respawn Time': new Stat('Quick Respawn Time', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Respawn');
      this.name = 'Quick Respawn Time';
      var death = 30;
      var splatcam = 354;
      var spawn = 120;
      if(loadout.hasAbility('Respawn Punisher')) {
        abilityScore = 0;
        splatcam += 74;
        var spawnFrames = death + splatcam + spawn;
        this.value = spawnFrames/60;
        this.name = 'Respawn Time';
        this.label = (spawnFrames/60).toFixed(2) + 's';
        this.desc = 'Quick Respawn nullified by Respawn Punisher.';
        return this.value.toFixed(2);
      }
      var mod = 1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2))/60
      var spawnFrames = death + (splatcam*mod) + spawn;
      this.value = spawnFrames/60
      this.label = (spawnFrames/60).toFixed(2) + 's';
      this.desc = "Respawn time when splatted without splatting others."
      return this.value.toFixed(2)
    }, 9.6),
    'Tracking Time': new Stat('Tracking Time', function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Cold-Blooded');
      var trackReduction = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 40
      this.label = (8 * (1 - trackReduction)).toFixed(2) + 's';
      this.value = (8 * (1 - trackReduction))
      this.desc = "Tracking time of Point Sensor/Ink Mine"
      return (8 * (1 - trackReduction)).toFixed(2);
    }, 8)
  }
  $scope.getStatByName = function(name) {
    return $scope.stats[name]
  }
  $scope.getAdjustedSubSpeDamage = function(sub,loadout) {
  var stat = $scope.getStatByName('Bomb Damage Taken')
  var damageReduction = stat.calc(loadout)/100
    var results = {}
    for(damageValue in sub.damage) {
      var subDamage = sub.damage[damageValue]
      if(subDamage >= 100) {
        results[damageValue] = subDamage.toFixed(1);
      } else {
        results[damageValue] = (subDamage * damageReduction).toFixed(1);
      }
    }
    return results
  }
  $scope.getAdjustedSpecialCost = function(loadout) {
    var stat = $scope.getStatByName('Special Charge Speed');
    return Math.floor(loadout.weapon.specialCost / (stat.value))
  }
}
