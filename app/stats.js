function Stat(name, calc, max) {
  this.name = name;
  this.calc = calc;
  this.max = max;
  this.value = 0;
  this.desc = null;
  this.label = { label: null };
}

//TODO: clean all this up
angular.module('splatApp').stats = function ($scope, $translate) {
$scope.stats = {
  //TODO: come up with a better way to convey speed?
  'Swim Speed': new Stat("{{ STAT_SWIM_SPEED | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Swim Speed Up');
      var baseSpeed = 2.02;
      var coeff = 150;
      if(loadout.weapon.speedLevel == 'Low') {
        baseSpeed = 1.74;
        coeff = 80;
      }
      if(loadout.weapon.speedLevel == 'Middle') {
        baseSpeed = 1.92;
        coeff = 120;
      }
      var speed = baseSpeed * (1 + (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))/coeff);
      if(loadout.hasAbility('Ninja Squid')) {
        speed = speed * 0.9;
      }
      this.value = speed;
      this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: this.value.toFixed(2)})
      this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";
      return speed.toFixed(2);
    }, 2.43),
    'Run Speed': new Stat("{{ STAT_RUN_SPEED | translate }}", function(loadout) {
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
        this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: this.value.toFixed(2)})
        this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";
        return speed.toFixed(2);
      }, 1.44),
    'Run Speed (Enemy Ink)': new Stat("{{ STAT_RUN_SPEED_RESIST | translate }}", function(loadout) {
        var abilityScore = loadout.calcAbilityScore('Ink Resistance Up');
        var baseSpeed = 0.32;
        var speed = baseSpeed * (1 + ((0.99 * abilityScore) - Math.pow(0.09 * abilityScore,2)) / 15)
        this.value = speed
        this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: this.value.toFixed(2)});
        this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";
        return this.value.toFixed(1);
      }, 1.44),
    'Run Speed (Firing)': new Stat("{{ STAT_RUN_SPEED_FIRING | translate }}", function(loadout) {
        var abilityScore = loadout.calcAbilityScore('Run Speed Up');
        if(loadout.weapon.name.toLowerCase().indexOf('brush') != -1 || loadout.weapon.name.toLowerCase().indexOf('roller') != -1) {
          this.name = "{{ STAT_RUN_SPEED_ROLLING | translate }}"
          var speed = loadout.weapon.baseSpeed;
          this.value = speed;
          this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: this.value.toFixed(2)});
          return speed.toFixed(2);
        }
        else {
          this.name = "{{ STAT_RUN_SPEED_FIRING | translate }}"
        }
        var weaponRSU = 1 + (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))/120.452
        var speed = loadout.weapon.baseSpeed * (weaponRSU);
        this.value = speed
        this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: this.value.toFixed(2)});
        this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";
        return this.value.toFixed(1);
      }, 1.44),
    'Ink Recovery Speed (Squid)': new Stat("{{ STAT_RECOVERY_SQUID | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Recovery Up');
      var seconds = 3 * (1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / (600 / 7))
      this.desc = "{{ DESC_RECOVERY_TIME | translate }}".format({value: seconds.toFixed(2)})
      this.value = ((3 / seconds) * 100)
      this.label = "{{ LABEL_PERCENT | translate }}".format({value: this.value.toFixed(1)})
      return this.value.toFixed(1);
    }, 154),
    'Ink Recovery Speed (Kid)': new Stat("{{ STAT_RECOVERY_KID | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Recovery Up');
      var seconds = 10 * (1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 50)
      this.value = ((10 / seconds) * 100);
      this.desc = "{{ DESC_RECOVERY_TIME | translate }}".format({value: seconds.toFixed(2)})
      this.label = "{{ LABEL_PERCENT | translate }}".format({value: this.value.toFixed(1)})
      return this.value.toFixed(1);
    }, 251),
    'Ink Consumption (Main)': new Stat("{{ STAT_SAVER_MAIN | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Saver (Main)');
      var coeff = (200 / 3)
      if(loadout.weapon.inkSaver == 'High') coeff = 60
      var reduction =  (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff
      var costPerShot = loadout.weapon.inkPerShot * (1 - reduction)
      this.desc = "{{ DESC_MAIN_COST | translate }}".format({totalShots: Math.floor(100/costPerShot), 'reduction': (reduction*100).toFixed(1)});
      this.label = "{{ LABEL_MAIN_COST | translate }}".format({value: costPerShot.toFixed(1), unit: loadout.weapon.shotUnit})
      this.value = costPerShot;
      return costPerShot;
    }, 100),
    'Ink Consumption (Sub)': new Stat("{{ STAT_SAVER_SUB | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Ink Saver (Sub)');
      var coeff = (600 / 7)
      var sub = $scope.getSubByName(loadout.weapon.sub)
      if(sub.inkSaver == 'Low') coeff = 100
      var reduction =  (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff
      var costPerSub = sub.cost * (1 - reduction)
      this.value = costPerSub;
      this.localizedDesc = { reduction: reduction.toFixed(1), desc: 'DESC_SUB_COST' };
      this.desc = "{{ DESC_SUB_COST | translate }}".format({reduction: reduction.toFixed(1)})
      this.label = "{{ LABEL_SUB_COST | translate }}".format({value: this.value.toFixed(2)})
      return costPerSub;
    }, 100),
    'Special Charge Speed': new Stat("{{ STAT_SPECIAL_CHARGE | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Special Charge Up');
      var chargeSpeed = (1 + (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 100)
      this.value = chargeSpeed;
      this.desc = "{{ DESC_SPECIAL_COST | translate }}".format({value: Math.floor(loadout.weapon.specialCost / chargeSpeed)})
      this.label = "{{ LABEL_PERCENT | translate }}".format({value: (this.value*100).toFixed(1)});
      return (chargeSpeed * 100).toFixed(1);
    }, 1.3),
    //TODO: This is WRONG! Need more data!
    'Special Saved': new Stat("{{ STAT_SPECIAL_SAVER | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Special Saver');
      var baseKept = 0.5;
      this.localizedDesc = { desc: null };
      var mod = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 60
      if(loadout.hasAbility('Respawn Punisher')) {
        baseKept = 0.425;
        mod *= 0.7;
        this.desc = "{{ DESC_PUNISHER_DISCLAIMER | translate }}";
      }
      var kept  = baseKept + mod;
      this.value = kept;
      this.label = "{{ LABEL_PERCENT | translate }}".format({value: (this.value*100).toFixed(1)});
      return (kept * 100).toFixed(1);
    }, 1),
//TODO: clean this up a bit
    'Special Power': new Stat("{{ STAT_SPECIAL_POWER | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Special Power Up');
      var equippedSpecial = $scope.getSpecialByName(loadout.weapon.special)
      var coeff = 0;
      var base = 0;
      var results = 0;
      this.localizedDesc = { desc: null };
      this.name = "{{ STAT_SPECIAL_POWER_UNKNOWN | translate }}"
      switch(equippedSpecial.name) {
        case 'Suction-Bomb Launcher':
        case 'Burst-Bomb Launcher':
        case 'Curling-Bomb Launcher':
        case 'Autobomb Launcher':
        case 'Splat-Bomb Launcher':
          coeff = 90;
          base = 360;
          this.max = 8.1;
          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}"
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))/60
          this.value = results;
          this.label = "{{ LABEL_TIME | translate }}".format({value: this.value.toFixed(2)});
          return results.toFixed(2);
          break;
        case 'Ink Armor':
          coeff = 60;
          base = 360;
          this.max = 9;
          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}"
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))/60
          this.value = results;
          this.label = "{{ LABEL_TIME | translate }}".format({value: this.value.toFixed(2)});
          return results.toFixed(2);
          break;
        case 'Inkjet':
        case 'Ink Storm':
        case 'Sting Ray':
          coeff = 120;
          base = 480;
          this.max = 10;
          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}"
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))/60
          this.value = results;
          this.label = "{{ LABEL_TIME | translate }}".format({value: this.value.toFixed(2)});
          return results.toFixed(2);
          break;
        case 'Baller':
          coeff = 60;
          base = 400;
          this.max = 600;
          this.name = "{{ STAT_SPECIAL_POWER_BALLER | translate }}"
          results = (base * (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff))
          this.value = results;
          this.label = { value: this.value.toFixed(2), label: 'LABEL_HP' };
          return results.toFixed(1);
          break;
        case 'Tenta Missiles':
          coeff = 45;
          base = 4.8;
          this.max = 8;
          this.max = '166'
          this.name = "{{ STAT_SPECIAL_POWER_TENTA | translate }}"
          results = (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff)*100
          this.value = results;
          this.label = "{{ LABEL_PERCENT | translate }}".format({value: this.value.toFixed(1)})
          return results.toFixed(1);
          break;
        case 'Splashdown':
          coeff = 110;
          base = 110;
          this.max = 1.274;
          this.name = "{{ STAT_SPECIAL_POWER_SPLASHDOWN | translate }}"
          results = (1 +(0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff)*100
          this.desc = "{{ DESC_DISTANCE | translate }}".format({value: (base*results).toFixed(1)})
          this.value = results;
          this.label = "{{ LABEL_PERCENT | translate }}".format({value: this.value.toFixed(1)})
          return (results*100).toFixed(1);
          break;
        case 'Bubble Blower':
          this.name = "{{ STAT_SPECIAL_POWER_BUBBLE | translate }}";
          this.value = 0;
          this.label = "{{ UNAVAILABLE | translate }}";
          break;
      }
      return results;
    }, 100),
//TODO: get effects for all subs
    'Sub Power': new Stat("{{ STAT_SUB_POWER | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Sub Power Up');
      var equippedSub = $scope.getSubByName(loadout.weapon.sub)
      this.name = "{{ Sub Power (???) | translate }}"
      this.value = 0;
      switch(equippedSub.name) {
        case 'Burst Bomb':
        case 'Splat Bomb':
        case 'Suction Bomb':
        case 'Autobomb':
        case 'Point Sensor':
          var range = (1 + (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 60)
          this.value = range*100;
          this.label = "{{ LABEL_PERCENT | translate }}".format({value: this.value.toFixed(1)})
          this.name = "{{ STAT_SUB_POWER_RANGE | translate }}";
          return (range * 100).toFixed(1);
          break;
        case 'Curling Bomb':
          this.name = "{{ STAT_SUB_POWER_CURLING | translate }}";
          this.label = { label: 'UNAVAILABLE' };
          break;
        case 'Ink Mine':
          this.name = "{{ STAT_SUB_POWER_MINE | translate }}";
          this.label = { label: 'UNAVAILABLE' };
          break;
        case 'Splash Wall':
          this.name = "{{ STAT_SUB_POWER_WALL | translate }}";
          this.label = { label: 'UNAVAILABLE' };
          break;
        case 'Sprinkler':
          this.name = "{{ STAT_SUB_POWER_SPRINKLER | translate }}";
          this.label = { label: 'UNAVAILABLE' };
          break;
        case 'Squid Beakon':
          this.name = "{{ STAT_SUB_POWER_BEAKON | translate }}";
          this.label = { label: 'UNAVAILABLE' };
          break;
      }
      return (range * 100).toFixed(1);
    }, 150),
    'Super Jump Time (Squid)': new Stat("{{ STAT_JUMP_SQUID | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Super Jump');
      var windup = 71
      var airtime = 108
      var action = 30
      var mod = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2))
      var windupFrames = 10 +(windup * (1 - mod/45))
      var mainFrames = action + (airtime * (1 - mod/78))
      this.value = (windupFrames + mainFrames) / 60
      this.label = "{{ LABEL_TIME | translate }}".format({value: this.value.toFixed(2)});
      return ((windupFrames + mainFrames) / 60).toFixed(2);
    }, 3.65),
    'Super Jump Time (Kid)': new Stat("{{ STAT_JUMP_KID | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Super Jump');
      var windup = 92
      var airtime = 108
      var action = 30
      var mod = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2))
      var windupFrames = 10 +(windup * (1 - mod/45))
      var mainFrames = action + (airtime * (1 - mod/78))
      this.value = (windupFrames + mainFrames) / 60
      this.label = "{{ LABEL_TIME | translate }}".format({value: this.value.toFixed(2)});
      return ((windupFrames + mainFrames) / 60).toFixed(2);
    }, 4),
    //TODO: This is WRONG! Need more data on Respawn Punisher!
    'Quick Respawn Time': new Stat("{{ STAT_QUICK_RESPAWN | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Respawn');
      this.name = "{{ STAT_QUICK_RESPAWN | translate }}";
      this.desc = "{{ DESC_QUICK_RESPAWN | translate }}";
      var death = 30;
      var splatcam = 354;
      var spawn = 120;
      var mod = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2))/60
      if(loadout.hasAbility('Respawn Punisher')) {
        this.name = "{{ STAT_QUICK_RESPAWN_PUNISHER | translate }}";
        this.desc = "{{ DESC_PUNISHER_DISCLAIMER | translate }}";
        mod *= 0.5;
        splatcam += 74;
      }
      var spawnFrames = death + (splatcam*(1-mod)) + spawn;
      this.value = spawnFrames/60
      this.label = "{{ LABEL_TIME | translate }}".format({value: this.value.toFixed(2)});
      return this.value.toFixed(2)
    }, 9.6),
    'Tracking Time': new Stat("{{ STAT_TRACKING_TIME | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Cold-Blooded');
      var trackReduction = (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / 40
      this.value = (8 * (1 - trackReduction))
      this.label = "{{ LABEL_TIME | translate }}".format({value: this.value.toFixed(2)});
      this.desc = "{{ DESC_TRACKING | translate }}";
      return (8 * (1 - trackReduction)).toFixed(2);
    }, 8)
  }
  $scope.getStatByName = function(name) {
    return $scope.stats[name]
  }
  $scope.getAdjustedSubSpeDamage = function(sub,loadout) {
  var abilityScore = loadout.calcAbilityScore('Bomb Defense Up');
  var coeff;
  switch(sub.name) {
    case 'Burst Bomb':
      coeff = 75;
      break;
    case 'Splat Bomb':
    case 'Suction Bomb':
    case 'Autobomb':
    case 'Curling Bomb':
    case 'Ink Mine':
      coeff = 60;
      break;
    default:
      coeff = (600/7);
      break;
  }
  var damageReduction = (1 - (0.99 * abilityScore - Math.pow((0.09 * abilityScore),2)) / coeff)
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
