function Stat(name, calc, max) {
  this.name = name;
  this.calc = calc;
  this.max = max;
  this.value = 0;
  this.desc = null;
  this.label = { label: null };
  this.calcMod = function(abilityScore) {
    return (0.99 * abilityScore - Math.pow(0.09 * abilityScore,2))
  }
  this.calcP = function(abilityScore) {
    return Math.min(3.3*abilityScore - 0.027*Math.pow(abilityScore,2),100);
  }
  this.calcS = function(values) {
    var max = values[0];
    var mid = values[1];
    var min = values[2];
    return (mid-min) / (max-min);
  }
  this.calcRes = function(values, p, s) {
    var max = values[0];
    var mid = values[1];
    var min = values[2];
    return min + (max-min) * this.lerpN(p/100, s);
  }
  this.lerpN = function(p, s) {
    if(s.toFixed(3) == 0.5) {
      return p;
    }
    if(p == 0.0) {
      return p;
    }
    if(p == 1.0) {
      return p;
    }
    if(s != 0.5) {
      return Math.pow(Math.E,-1 * (Math.log(p) * Math.log(s) / Math.log(2)))
    }
  }
}

angular.module('splatApp').stats = function ($scope) {
  $scope.stats = {
    'Swim Speed': new Stat("{{ STAT_SWIM_SPEED | translate }}", function(loadout) {
      var default_swim_speed = null;
      var swim_speed_parameters = null;
      if(loadout.weapon.speedLevel == 'Low') {
        swim_speed_parameters = $scope.parameters["Swim Speed"]["Heavy"];
      }
      if(loadout.weapon.speedLevel == 'Middle') {
        swim_speed_parameters = $scope.parameters["Swim Speed"]["Mid"];
      }
      if(loadout.weapon.speedLevel == "High") {
        swim_speed_parameters = $scope.parameters["Swim Speed"]["Light"];
      }

      var abilityScore = loadout.calcAbilityScore('Swim Speed Up');      
      var p = this.calcP(abilityScore);

      if(loadout.hasAbility('Ninja Squid')) {
        p = p * 0.8;
      }

      var s = this.calcS(swim_speed_parameters);
      var swim_speed = this.calcRes(swim_speed_parameters, p, s);

      if(loadout.hasAbility('Ninja Squid')) {
        swim_speed = swim_speed * 0.9;
      }

      var delta = ((swim_speed / swim_speed_parameters[2] - 1) * 100).toFixed(1).toString();

      if($scope.logging) {
        var swim_speed_debug_log = {"Swim Speed":swim_speed,"AP":abilityScore,"P":p,"S":s,"Delta":delta}
        console.log(swim_speed_debug_log);        
      }

      this.value = swim_speed;
      this.percentage = delta;
      this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: $scope.toFixedTrimmed(this.value,4)});
      this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";
      return this.value.toFixed(4);
    }, 2.4),

    'Run Speed': new Stat("{{ STAT_RUN_SPEED | translate }}", function(loadout) {
        var default_run_speed = null;
        var run_speed_parameters = null;
        if(loadout.weapon.speedLevel == 'Low') {
          run_speed_parameters = $scope.parameters["Run Speed"]["Heavy"];
        }
        if(loadout.weapon.speedLevel == 'Middle') {
          run_speed_parameters = $scope.parameters["Run Speed"]["Mid"];
        }
        if(loadout.weapon.speedLevel == "High") {
          run_speed_parameters = $scope.parameters["Run Speed"]["Light"];
        }

        var abilityScore = loadout.calcAbilityScore('Run Speed Up');        
        var p = this.calcP(abilityScore);       
        var s = this.calcS(run_speed_parameters);
        var run_speed = this.calcRes(run_speed_parameters, p, s);
        var delta = ((run_speed / run_speed_parameters[2] - 1) * 100).toFixed(1).toString();        
        
        if($scope.logging) {
          var run_speed_debug_log = {"Run Speed":run_speed,"AP":abilityScore,"P":p,"S":s,"Delta":delta}
          console.log(run_speed_debug_log);
        }

        this.value = run_speed;
        this.percentage = delta;
        this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: $scope.toFixedTrimmed(this.value,4)})
        this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";
        return this.value.toFixed(4);
      }, 1.44),

    'Run Speed (Enemy Ink)': new Stat("{{ STAT_RUN_SPEED_RESIST | translate }}", function(loadout) {
        // TODO: Verify these results with Leanny
        var ink_resistance_parameters = $scope.parameters["Ink Resistance"]["Run"];
        var abilityScore = loadout.calcAbilityScore('Ink Resistance Up');
        var p = this.calcP(abilityScore);       
        var s = this.calcS(ink_resistance_parameters);
        var run_speed = this.calcRes(ink_resistance_parameters, p, s);
        var delta = ((run_speed / ink_resistance_parameters[2] - 1) * 100).toFixed(1).toString();        
        
        if($scope.logging) {
          var run_speed_debug_log = {"Enemy Ink Run Speed":run_speed,"AP":abilityScore,"P":p,"S":s,"Delta":delta}
          console.log(run_speed_debug_log);
        }
        /*  Not sure why the old Loadout site had significantly different values for
            this stat then Leanny's formula. His follows the same results here:
            See: https://gamefaqs.gamespot.com/boards/200279-splatoon-2/75638591#5 
        */

        this.value = run_speed
        this.percentage = delta;
        this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: $scope.toFixedTrimmed(this.value,4)});
        this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";
        return this.value.toFixed(4);
      }, 0.72),

    'Run Speed (Firing)': new Stat("{{ STAT_RUN_SPEED_FIRING | translate }}", function(loadout) {
      if(loadout.weapon.name.toLowerCase().indexOf('brush') != -1 || loadout.weapon.name.toLowerCase().indexOf('roller') != -1) {
          this.value = loadout.weapon.baseSpeed;
          this.percentage = 0.0;
          this.name = "{{ STAT_RUN_SPEED_ROLLING | translate }}"
          this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: this.value.toFixed(2)});
          this.desc = "{{ ROLL_SPEED | translate }}";
          return this.value.toFixed(2);
        }
        else {
          this.name = "{{ STAT_RUN_SPEED_FIRING | translate }}"
        }

        var run_speed_parameters = $scope.parameters["Run Speed"]["Shooting"];
        var abilityScore = loadout.calcAbilityScore('Run Speed Up');
        var p = this.calcP(abilityScore);       
        var s = this.calcS(run_speed_parameters);
        var run_speed = this.calcRes(run_speed_parameters, p, s) * loadout.weapon.baseSpeed;
        var delta = ((run_speed / loadout.weapon.baseSpeed - 1) * 100).toFixed(1).toString();        

        if($scope.logging) {
          var run_speed_debug_log = {"Run Speed (Firing)":run_speed,"AP":abilityScore,"P":p,"S":s,"Delta":delta}
          console.log(run_speed_debug_log);
        }

        this.value = run_speed
        this.percentage = delta;
        this.label = "{{ LABEL_DISTANCE_PER_FRAME | translate }}".format({value: $scope.toFixedTrimmed(this.value,4)});
        this.desc = "{{ UNIT_DISTANCE_UNITS_PER_FRAME | translate }}";

        if(isNaN(this.value)) {
          this.value = 0;
          this.label = "{{ UNAVAILABLE | translate}}";
          this.desc = null;
        }
        return this.value.toFixed(4);
      }, 1.44),

    'Ink Recovery Speed (Squid)': new Stat("{{ STAT_RECOVERY_SQUID | translate }}", function(loadout) {
      var ink_recovery_parameters = $scope.parameters["Ink Recovery Up"]["In Ink"];
      var abilityScore = loadout.calcAbilityScore('Ink Recovery Up');
      var p = this.calcP(abilityScore);       
      var s = this.calcS(ink_recovery_parameters);
      var refill_rate = this.calcRes(ink_recovery_parameters, p, s);
      var refill_time = refill_rate / 60;
      var delta = 3 / refill_time * 100;

      if($scope.logging) {
        var refill_speed_squid_debug_log = {"Ink Recovery Speed (Squid)":refill_rate,"time":refill_time,"AP":abilityScore,"P":p,"S":s,"Delta":delta}
        console.log(refill_speed_squid_debug_log);
      }

      this.value = delta;
      this.percentage = (100 - (100 / delta) * 100).toFixed(1);
      this.desc = "{{ DESC_RECOVERY_TIME | translate }}".format({value: refill_time.toFixed(2)})
      this.label = "{{ LABEL_TIME | translate }}".format({value: refill_time.toFixed(2)})
      return this.value.toFixed(2);
    }, 154),

    'Ink Recovery Speed (Kid)': new Stat("{{ STAT_RECOVERY_KID | translate }}", function(loadout) {
      var ink_recovery_parameters = $scope.parameters["Ink Recovery Up"]["Standing"];
      var abilityScore = loadout.calcAbilityScore('Ink Recovery Up');
      var p = this.calcP(abilityScore);       
      var s = this.calcS(ink_recovery_parameters);
      var refill_rate = this.calcRes(ink_recovery_parameters, p, s);
      var refill_time = refill_rate / 60;
      var delta = 10 / refill_time * 100;

      if($scope.logging) {
        var refill_speed_squid_debug_log = {"Ink Recovery Speed (Kid)":refill_rate,"time":refill_time,"AP":abilityScore,"P":p,"S":s,"Delta":delta}
        console.log(refill_speed_squid_debug_log);
      }

      this.value = delta;
      this.percentage = (100 - (100 / delta) * 100).toFixed(1);
      this.desc = "{{ DESC_RECOVERY_TIME | translate }}".format({value: refill_time.toFixed(2)})      
      this.label = "{{ LABEL_TIME | translate }}".format({value: refill_time.toFixed(2)})
      return this.value.toFixed(2);
    }, 273),

    'Ink Consumption (Main)': new Stat("{{ STAT_SAVER_MAIN | translate }}", function(loadout) {
      var ink_saver_parameters = null;
      if(loadout.weapon.inkSaver == 'Low') {
        ink_saver_parameters = $scope.parameters["Ink Saver Main"]["Low"];
      }
      if(loadout.weapon.inkSaver == 'Middle') {
        ink_saver_parameters = $scope.parameters["Ink Saver Main"]["Mid"];
      }
      if(loadout.weapon.inkSaver == "High") {
        ink_saver_parameters = $scope.parameters["Ink Saver Main"]["High"];
      }

      var abilityScore = loadout.calcAbilityScore('Ink Saver (Main)');
      var p = this.calcP(abilityScore);       
      var s = this.calcS(ink_saver_parameters);
      var reduction = this.calcRes(ink_saver_parameters, p, s);
      
      var costPerShot = loadout.weapon.inkPerShot * reduction;
      this.desc = "{{ DESC_MAIN_COST | translate }}".format({totalShots: Math.floor(100/costPerShot), reduction: (100 - (reduction*100)).toFixed(1)})
      this.label = "{{ LABEL_MAIN_COST | translate }}".format({value: $scope.toFixedTrimmed(costPerShot,3), unit: loadout.weapon.shotUnit})
      this.value = costPerShot;
      this.percentage = (100 - (reduction*100)).toFixed(1);

      if($scope.logging) {
        var ink_saver_debug_log = {"Ink Saver (Main)":costPerShot,"AP":abilityScore,"P":p,"S":s,"Delta":reduction}
        console.log(ink_saver_debug_log);
      }

      if(isNaN(this.value)) {
        this.value = 0;
        this.label = "{{ UNAVAILABLE | translate}}";
        this.desc = null;
      }
      return this.value;
    }, 100),

    'Ink Consumption (Sub)': new Stat("{{ STAT_SAVER_SUB | translate }}", function(loadout) {
      var ink_saver_sub_parameters = null;
      var sub = $scope.getSubByName(loadout.weapon.sub)
      
      if(sub.inkSaver == 'A') {
        ink_saver_sub_parameters = $scope.parameters["Ink Saver Sub"]["A"];
      }
      if(sub.inkSaver == 'B') {
        ink_saver_sub_parameters = $scope.parameters["Ink Saver Sub"]["B"];
      }
      if(sub.inkSaver == 'C') {
        ink_saver_sub_parameters = $scope.parameters["Ink Saver Sub"]["C"];
      }
      if(sub.inkSaver == 'D') {
        ink_saver_sub_parameters = $scope.parameters["Ink Saver Sub"]["D"];
      }
      if(sub.inkSaver == 'E') {
        ink_saver_sub_parameters = $scope.parameters["Ink Saver Sub"]["E"];
      }
      if(sub.inkSaver == 'F') {
        ink_saver_sub_parameters = $scope.parameters["Ink Saver Sub"]["F"];
      }

      var abilityScore = loadout.calcAbilityScore('Ink Saver (Sub)');
      var p = this.calcP(abilityScore);       
      var s = this.calcS(ink_saver_sub_parameters);
      var reduction = this.calcRes(ink_saver_sub_parameters, p, s);      
      var costPerSub = sub.cost * reduction;

      this.desc = "{{ DESC_SUB_COST | translate }}".format({reduction: (100 - (reduction*100)).toFixed(1)})
      this.label = "{{ LABEL_SUB_COST | translate }}".format({value: $scope.toFixedTrimmed(costPerSub,3)})      
      this.localizedDesc = { reduction: (100 - (reduction*100)).toFixed(1), desc: 'DESC_SUB_COST' };
      this.value = costPerSub;
      this.percentage = (100 - (reduction*100)).toFixed(1);

      if($scope.logging) {
        var ink_saver_sub_debug_log = {"Ink Saver (Sub)":costPerSub,"AP":abilityScore,"P":p,"S":s,"Delta":reduction}
        console.log(ink_saver_sub_debug_log);
      }

      return costPerSub;
    }, 100),

    'Special Charge Speed': new Stat("{{ STAT_SPECIAL_CHARGE | translate }}", function(loadout) {
      var special_charge_speed_parameters = $scope.parameters["Special Charge Up"]["default"]
      var abilityScore = loadout.calcAbilityScore('Special Charge Up');
      var p = this.calcP(abilityScore);       
      var s = this.calcS(special_charge_speed_parameters);
      var special_charge_speed = this.calcRes(special_charge_speed_parameters, p, s);      

      this.value = special_charge_speed;
      this.percentage = ((special_charge_speed*100) - 100).toFixed(1);
      this.desc = "{{ DESC_SPECIAL_COST | translate }}".format({value: Math.round(loadout.weapon.specialCost / special_charge_speed)})
      this.label = "{{ LABEL_PERCENT | translate }}".format({value: (this.value*100).toFixed(1)});

      if($scope.logging) {
        var special_charge_speed_debug_log = {"Special Charge Speed":special_charge_speed,"AP":abilityScore,"P":p,"S":s,"Delta":this.percentage}
        console.log(special_charge_speed_debug_log);
      }

      return (special_charge_speed * 100).toFixed(1);
    }, 1.3),

    'Special Saved': new Stat("{{ STAT_SPECIAL_SAVER | translate }}", function(loadout) {
      var special_saver_parameters = null;
      if(loadout.weapon.special == "Splashdown") {
        special_saver_parameters = $scope.parameters["Special Saver"]["Splashdown"];
      }
      else {
        special_saver_parameters = $scope.parameters["Special Saver"]["default"];        
      }
      
      var abilityScore = loadout.calcAbilityScore('Special Saver');
      if(loadout.hasAbility('Respawn Punisher')) {
        abilityScore = abilityScore * 0.7;
        this.desc = "{{ DESC_PUNISHER_DISCLAIMER | translate }}";
      }

      var p = this.calcP(abilityScore);       
      var s = this.calcS(special_saver_parameters);
      var modifier = this.calcRes(special_saver_parameters, p, s);
      
      var special_saved = 100.0 * modifier;

      if(loadout.hasAbility('Respawn Punisher')) {
        special_saved = special_saved * .225;
      }

      if($scope.logging) {
        var special_saver_debug_log = {"Special Saver":special_saved,"AP":abilityScore,"Delta":modifier}
        console.log(special_saver_debug_log);
      }

      this.value = special_saved;
      this.percentage = $scope.toFixedTrimmed((modifier - 0.5) * 100, 2);
      this.localizedDesc = { desc: null }; // TODO: Verify what this actually does      
      this.label = "{{ LABEL_PERCENT | translate }}".format({value: (special_saved).toFixed(1)});
      return special_saved.toFixed(1);
    }, 100),

    'Special Power': new Stat("{{ STAT_SPECIAL_POWER | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Special Power Up');
      var equippedSpecial = $scope.getSpecialByName(loadout.weapon.special)
      this.desc = null;
      this.name = "{{ STAT_SPECIAL_POWER_UNKNOWN | translate }}"

      var special_power_up_parameters = null;
      switch(equippedSpecial.name) {
        case 'Curling-Bomb Launcher':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Curling Bomb Launcher"];
          var p = this.calcP(abilityScore);
          var s = this.calcS(special_power_up_parameters);
          var duration = this.calcRes(special_power_up_parameters, p, s) / 60;
          var max_duration = special_power_up_parameters[0] / 60;
          var min_duration = special_power_up_parameters[2] / 60;

          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}";

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Curling Bomb Launcher)":duration,"AP:":abilityScore,"P":p,"S":s}
            console.log(special_power_up_log);
          }

          this.percentage = $scope.toFixedTrimmed((((duration/min_duration) - 1) * 100),2);
          this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)});
          return duration;

        case 'Suction-Bomb Launcher':
        case 'Burst-Bomb Launcher':
        case 'Autobomb Launcher':
        case 'Splat-Bomb Launcher':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Other Bomb Launcher"];
          var p = this.calcP(abilityScore);
          var s = this.calcS(special_power_up_parameters);
          var duration = this.calcRes(special_power_up_parameters, p, s) / 60;
          var max_duration = special_power_up_parameters[0] / 60;
          var min_duration = special_power_up_parameters[2] / 60;

          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}";

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Other Bomb Launcher)":duration,"AP:":abilityScore,"P":p,"S":s}
            console.log(special_power_up_log);
          }

          this.percentage = $scope.toFixedTrimmed((((duration/min_duration) - 1) * 100),2);
          this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)});
          return duration;

        case 'Ink Armor':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Ink Armor Duration"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var duration = this.calcRes(special_power_up_parameters, p, s) / 60;
          var max_duration = special_power_up_parameters[0] / 60;
          var min_duration = special_power_up_parameters[2] / 60;

          this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
          this.percentage = ((duration/min_duration - 1) * 100).toFixed(1);

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Ink Armor)":duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }
          
          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}";
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)});
          return duration;

        case 'Inkjet':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Inkjet Duration"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var duration = this.calcRes(special_power_up_parameters, p, s) / 60;
          var max_duration = special_power_up_parameters[0] / 60;
          var min_duration = special_power_up_parameters[2] / 60;

          this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
          this.percentage = ((duration/min_duration - 1) * 100).toFixed(1);

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Inkjet)":duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }
          
          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}";
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)});
          return duration;

        case 'Ink Storm':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Ink Storm Duration"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var duration = this.calcRes(special_power_up_parameters, p, s) / 60;
          var max_duration = special_power_up_parameters[0] / 60;
          var min_duration = special_power_up_parameters[2] / 60;

          this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
          this.percentage = ((duration/min_duration - 1) * 100).toFixed(1);

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Ink Storm)":duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }
          
          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}";     
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)});
          return duration;

        case 'Sting Ray':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Ink Storm Duration"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var duration = this.calcRes(special_power_up_parameters, p, s) / 60;
          var max_duration = special_power_up_parameters[0] / 60;
          var min_duration = special_power_up_parameters[2] / 60;

          this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
          this.percentage = ((duration/min_duration - 1) * 100).toFixed(1);

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Ink Storm)":duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }
          
          this.name = "{{ STAT_SPECIAL_POWER_DURATION | translate }}";        
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)});
          return duration;

        case 'Baller':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Baller HP"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var health = this.calcRes(special_power_up_parameters, p, s) / 10;
          var max_health = special_power_up_parameters[0] / 10;
          var min_health = special_power_up_parameters[2] / 10;

          this.value = $scope.toFixedTrimmed((health/max_health) * 100,2);
          this.percentage = ((health/min_health - 1) * 100).toFixed(1);

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Baller)":health,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }
          
          this.name = "{{ STAT_SPECIAL_POWER_BALLER | translate }}";       
          this.label = "{{ LABEL_HP | translate }}".format({value: $scope.toFixedTrimmed(health,2)});
          return health;

        case 'Tenta Missiles':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Tenta Missiles Target Circle Radius"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var targeting_radius = this.calcRes(special_power_up_parameters, p, s);
          var max_targeting_radius = special_power_up_parameters[0];
          var min_targeting_radius = special_power_up_parameters[2];

          this.value = $scope.toFixedTrimmed((targeting_radius/max_targeting_radius) * 100,2);
          this.percentage = ((targeting_radius/min_targeting_radius - 1) * 100).toFixed(1);

          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Tenta Missiles)":targeting_radius,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }

          this.name = "{{ STAT_SPECIAL_POWER_TENTA | translate }}";
          this.label = "{{ LABEL_NO_UNIT | translate }}".format({value: $scope.toFixedTrimmed(targeting_radius,2)})
          return targeting_radius;

        case 'Splashdown':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Splash Down Burst Radius Close"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var lethal_radius = this.calcRes(special_power_up_parameters, p, s);
          var max_lethal_radius = special_power_up_parameters[0];
          var min_lethal_radius = special_power_up_parameters[2];

          this.value = $scope.toFixedTrimmed((lethal_radius/max_lethal_radius) * 100,2);
          this.percentage = ((lethal_radius/min_lethal_radius - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Splashdown)":lethal_radius,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }

          this.name = "{{ STAT_SPECIAL_POWER_SPLASHDOWN | translate }}";
          this.label = "{{ LABEL_NO_UNIT | translate }}".format({value: $scope.toFixedTrimmed(lethal_radius,2)})
          // TODO: Ask Leanny how to convert the Lethal Radius values to Distance Units (DU/f)
          // this.desc = "{{ DESC_DISTANCE | translate }}".format({value: (base*results).toFixed(1)})
          return lethal_radius;

        case 'Bubble Blower':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Bubble Blower Bubble Radius Multiplier"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var modifier = this.calcRes(special_power_up_parameters, p, s);
          var max_bubble_radius = special_power_up_parameters[0] * equippedSpecial.radius["Max"];
          var min_bubble_radius = special_power_up_parameters[2] * equippedSpecial.radius["Max"];
          var bubble_radius = modifier * equippedSpecial.radius["Max"];

          this.value = $scope.toFixedTrimmed((bubble_radius/max_bubble_radius) * 100,2);
          this.percentage = ((bubble_radius/min_bubble_radius - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Bubble Blower)":bubble_radius,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }

          this.name = "{{ STAT_SPECIAL_POWER_BUBBLE | translate }}";
          this.label = "{{ LABEL_NO_UNIT | translate }}".format({value: $scope.toFixedTrimmed(bubble_radius,2)})
          return bubble_radius;

        case 'Booyah Bomb':
          special_power_up_parameters = $scope.parameters["Special Power Up"]["Booyah Ball Auto Charge Increase"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(special_power_up_parameters);
          var modifier = this.calcRes(special_power_up_parameters, p, s);
          var charge_time = equippedSpecial.duration - (equippedSpecial.duration * modifier);
          var max_charge_time = equippedSpecial.duration - (equippedSpecial.duration * special_power_up_parameters[2]);
          var min_charge_time = equippedSpecial.duration - (equippedSpecial.duration * special_power_up_parameters[0]);
        
          this.percentage = Math.abs(((charge_time/max_charge_time - 1) * 100).toFixed(2));
          this.value = 100 - (this.percentage * 100);
          
          if($scope.logging) {
            var special_power_up_log = {"Special Power Up (Booyah Bomb)":charge_time,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(special_power_up_log);
          }

          this.name = "{{ STAT_SPECIAL_POWER_BOOYAH | translate }}";
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(charge_time,4)})
          return charge_time;
      }
      return 0;
    }, 100),

    'Sub Power': new Stat("{{ STAT_SUB_POWER | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Sub Power Up');
      var equippedSub = $scope.getSubByName(loadout.weapon.sub)
      this.name = "{{ STAT_SUB_POWER_RANGE | translate }}"
      this.value = 0;

      var sub_power_up_parameters = null;
      switch(equippedSub.name) {
        case 'Autobomb':    
        case 'Burst Bomb':
        case 'Curling Bomb':
        case 'Splat Bomb':
        case 'Suction Bomb':
          sub_power_up_parameters = $scope.parameters["Sub Power Up"]["General Bomb Distance Up"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(sub_power_up_parameters);
          var sub_range = this.calcRes(sub_power_up_parameters, p, s);
          var max_sub_range = sub_power_up_parameters[0];          
          var min_sub_range = sub_power_up_parameters[2];

          this.value = $scope.toFixedTrimmed((sub_range/max_sub_range) * 100,2);
          this.percentage = ((sub_range/min_sub_range - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (General Bombs)":sub_range,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_RANGE | translate }}";
          this.label = "{{ LABEL_NO_UNIT | translate }}".format({value: $scope.toFixedTrimmed(sub_range,2)})
          return sub_range;

        case 'Fizzy Bomb':
          sub_power_up_parameters = $scope.parameters["Sub Power Up"]["Fizzy Bomb Distance Up"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(sub_power_up_parameters);
          var sub_range = this.calcRes(sub_power_up_parameters, p, s);
          var max_sub_range = sub_power_up_parameters[0];          
          var min_sub_range = sub_power_up_parameters[2];

          this.value = $scope.toFixedTrimmed((sub_range/max_sub_range) * 100,2);
          this.percentage = ((sub_range/min_sub_range - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Fizzy Bomb)":sub_range,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_RANGE | translate }}";
          this.label = "{{ LABEL_NO_UNIT | translate }}".format({value: $scope.toFixedTrimmed(sub_range,2)})
          return sub_range;     

        case 'Point Sensor':
          sub_power_up_parameters = $scope.parameters["Sub Power Up"]["Point Sensor Distance Up"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(sub_power_up_parameters);
          var scan_radius = this.calcRes(sub_power_up_parameters, p, s);
          var max_scan_radius = sub_power_up_parameters[0];          
          var min_scan_radius = sub_power_up_parameters[2];

          this.value = $scope.toFixedTrimmed((scan_radius/max_scan_radius) * 100,2);
          this.percentage = ((scan_radius/min_scan_radius - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Fizzy Bomb)":scan_radius,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_RANGE | translate }}";
          this.label = "{{ LABEL_NO_UNIT | translate }}".format({value: $scope.toFixedTrimmed(scan_radius,2)})
          return scan_radius;

        case 'Toxic Mist':
          // TODO: Get confirmation from Lean that these values work for Toxic Mist
          sub_power_up_parameters = $scope.parameters["Sub Power Up"]["Ink Mine Mark Time Duration"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(sub_power_up_parameters);
          var duration = this.calcRes(sub_power_up_parameters, p, s) / 60;
          var max_duration = sub_power_up_parameters[0] / 60;
          var min_duration = sub_power_up_parameters[2] / 60;

          this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
          this.percentage = ((duration/min_duration - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Toxic Mist)":duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_DURATION | translate }}";
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)})
          return duration;

        case 'Ink Mine':
          sub_power_up_parameters = $scope.parameters["Sub Power Up"]["Ink Mine Mark Radius"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(sub_power_up_parameters);
          var radius = this.calcRes(sub_power_up_parameters, p, s);
          var max_radius = sub_power_up_parameters[0];
          var min_radius = sub_power_up_parameters[2];

          this.value = $scope.toFixedTrimmed((radius/max_radius) * 100,2);
          this.percentage = ((radius/min_radius - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Ink Mine)":radius,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_MINE | translate }}";
          this.label = "{{ LABEL_PERCENT | translate }}".format({value: $scope.toFixedTrimmed(radius*100,2)})
          return $scope.toFixedTrimmed(radius*100,2);

        case 'Splash Wall':
          sub_power_up_parameters = $scope.parameters["Sub Power Up"]["Splash Wall Max HP"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(sub_power_up_parameters);
          var wall_hp = this.calcRes(sub_power_up_parameters, p, s) / 10;
          var max_wall_hp = sub_power_up_parameters[0] / 10;
          var min_wall_hp = sub_power_up_parameters[2] / 10;

          this.value = $scope.toFixedTrimmed((wall_hp/max_wall_hp) * 100,2);
          this.percentage = ((wall_hp/min_wall_hp - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Splash Wall)":wall_hp,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_WALL | translate }}";
          this.label = "{{ LABEL_HP | translate }}".format({value: $scope.toFixedTrimmed(wall_hp,2)})
          return wall_hp;

        case 'Sprinkler':
          /* To simplify conceptualizing how SPU affects the Sprinkler, this stat will 
             display the total time (phases 1 & 2) of the Sprinkler. */
          var phase_one_parameters = $scope.parameters["Sub Power Up"]["Sprinkler First Phase Duration"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(phase_one_parameters);
          var phase_one_duration = this.calcRes(phase_one_parameters, p, s);

          var phase_two_parameters = $scope.parameters["Sub Power Up"]["Sprinkler Second Phase Duration"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(phase_two_parameters);
          var phase_two_duration = this.calcRes(phase_two_parameters, p, s);

          var total_duration = (phase_one_duration + phase_two_duration) / 60;
          var max_duration = (phase_one_parameters[0] + phase_two_parameters[0]) / 60;
          var min_duration = (phase_one_parameters[2] + phase_two_parameters[2]) / 60;

          this.value = $scope.toFixedTrimmed((total_duration/max_duration) * 100,2);
          this.percentage = ((total_duration/min_duration - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Sprinkler)":total_duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_DURATION | translate }}";
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(total_duration,2)})
          return total_duration;          

        case 'Squid Beakon':
          // Squid Beakon grants the effects of Quick Super Jump.
          var jump_parameters = $scope.parameters["Quick Super Jump"]["Jump"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(jump_parameters);
          var jump_duration = this.calcRes(jump_parameters, p, s);

          var prepare_parameters = $scope.parameters["Quick Super Jump"]["Prepare"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(prepare_parameters);
          var prepare_duration = this.calcRes(prepare_parameters, p, s);

          var total_duration = (jump_duration + prepare_duration) / 60;
          var max_duration = (jump_parameters[2] + prepare_parameters[2]) / 60;

          this.percentage = Math.abs(((total_duration/max_duration - 1) * 100).toFixed(2));
          this.value = 100 - this.percentage;
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Squid Beakon)":total_duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_BEAKON | translate }}";
          this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(total_duration,2)})
          return total_duration;             

        case 'Torpedo':
          sub_power_up_parameters = $scope.parameters["Sub Power Up"]["Torpedo Distance Up"];
          var p = this.calcP(abilityScore);      
          var s = this.calcS(sub_power_up_parameters);
          var distance = this.calcRes(sub_power_up_parameters, p, s);
          var max_distance = sub_power_up_parameters[0];          
          var min_distance = sub_power_up_parameters[2];

          this.value = $scope.toFixedTrimmed((distance/max_distance) * 100,2);
          this.percentage = ((distance/min_distance - 1) * 100).toFixed(1);
          
          if($scope.logging) {
            var sub_power_up_debug_log = {"Sub Power Up (Torpedo)":distance,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
            console.log(sub_power_up_debug_log);
          }

          this.name = "{{ STAT_SUB_POWER_RANGE | translate }}";
          this.label = "{{ LABEL_NO_UNIT | translate }}".format({value: $scope.toFixedTrimmed(distance,2)})
          return distance;
      }
      return 0;
    }, 100),

    'Super Jump Time (Squid)': new Stat("{{ STAT_JUMP_SQUID | translate }} ", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Super Jump');
      var jump_parameters = $scope.parameters["Quick Super Jump"]["Jump"];
      var p = this.calcP(abilityScore);      
      var s = this.calcS(jump_parameters);
      var jump_duration = this.calcRes(jump_parameters, p, s);

      var prepare_parameters = $scope.parameters["Quick Super Jump"]["Prepare"];
      var p = this.calcP(abilityScore);      
      var s = this.calcS(prepare_parameters);
      var prepare_duration = this.calcRes(prepare_parameters, p, s);

      var total_duration = (jump_duration + prepare_duration) / 60;
      var max_duration = (jump_parameters[2] + prepare_parameters[2]) / 60;

      this.percentage = Math.abs(((total_duration/max_duration - 1) * 100).toFixed(2));
      this.value = 100 - this.percentage;
      
      if($scope.logging) {
        var super_jump_squid_debug_log = {"Super Jump Time (Squid Form)":total_duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
        console.log(super_jump_squid_debug_log);
      }

      this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(total_duration,2)})
      return total_duration;
    }, 100),

    'Super Jump Time (Kid)': new Stat("{{ STAT_JUMP_KID | translate }} ", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Super Jump');
      var jump_parameters = $scope.parameters["Quick Super Jump"]["Jump"];
      var p = this.calcP(abilityScore);      
      var s = this.calcS(jump_parameters);
      var jump_duration = this.calcRes(jump_parameters, p, s);

      var prepare_parameters = $scope.parameters["Quick Super Jump"]["Prepare"];
      var p = this.calcP(abilityScore);      
      var s = this.calcS(prepare_parameters);
      var prepare_duration = this.calcRes(prepare_parameters, p, s);

      var total_duration = ((jump_duration + prepare_duration) / 60) + 0.35;
      var max_duration = ((jump_parameters[2] + prepare_parameters[2]) / 60) + 0.35;

      this.percentage = Math.abs(((total_duration/max_duration - 1) * 100).toFixed(2));
      this.value = 100 - this.percentage;
      
      if($scope.logging) {
        var super_jump_kid_debug_log = {"Super Jump Time (Kid Form)":total_duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
        console.log(super_jump_kid_debug_log);
      }

      this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(total_duration,2)})
      return total_duration;
    }, 100),

    'Quick Respawn Time': new Stat("{{ STAT_QUICK_RESPAWN | translate }}", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Quick Respawn');
      this.name = "{{ STAT_QUICK_RESPAWN | translate }}";
      this.desc = "{{ DESC_QUICK_RESPAWN | translate }}";

      var death_frames_parameters = $scope.parameters["Quick Respawn"]["Die Frames"];
      var p = this.calcP(abilityScore);      
      var s = this.calcS(death_frames_parameters);
      var death_duration = this.calcRes(death_frames_parameters, p, s);

      var deathcam_parameters = $scope.parameters["Quick Respawn"]["Deathcam Frames"];
      var p = this.calcP(abilityScore);      
      var s = this.calcS(deathcam_parameters);
      var deathcam_duration = this.calcRes(deathcam_parameters, p, s);

      var total_duration = ((death_duration + deathcam_duration) / 60) + 2.5;
      var max_duration = ((death_frames_parameters[2] + deathcam_parameters[2]) / 60) + 2.5;

      this.percentage = Math.abs(((total_duration/max_duration - 1) * 100).toFixed(2));
      this.value = 100 - this.percentage;
      
      if($scope.logging) {
        var quick_respawn_debug_log = {"Quick Respawn":total_duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
        console.log(quick_respawn_debug_log);
      }

      this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(total_duration,2)})
      return total_duration;
    }, 100),

    'Tracking Time': new Stat("{{ STAT_TRACKING_TIME | translate }} ", function(loadout) {
      var abilityScore = loadout.calcAbilityScore('Bomb Defense Up DX');
      var tracking_time_parameters = $scope.parameters["Cold Blooded"]["Point Sensor"];
      var p = this.calcP(abilityScore);      
      var s = this.calcS(tracking_time_parameters);
      var modifier = this.calcRes(tracking_time_parameters, p, s);

      var duration = 8 * modifier;
      var max_duration = 8;
      var min_duration = tracking_time_parameters[2] * 8;

      this.value = $scope.toFixedTrimmed((duration/max_duration) * 100,2);
      this.percentage = ((duration/min_duration - 1) * 100).toFixed(1);
      
      if($scope.logging) {
        var tracking_time_debug_log = {"(Bomb Defense Up DX (Tracking Time)":duration,"AP:":abilityScore,"P":p,"S":s,"Delta:":this.percentage}
        console.log(tracking_time_debug_log);
      }

      this.label = "{{ LABEL_TIME | translate }}".format({value: $scope.toFixedTrimmed(duration,2)})
      this.desc = "{{ DESC_TRACKING | translate }}";
      return duration;
    }, 100),

    'Main Power Up': new Stat("{{ STAT_MAIN_POWER_UP | translate }} *", function(loadout) {
      this.value = 0;
      this.label = "{{ UNAVAILABLE | translate}}";
      this.desc = null;
      return this.value;
    }, 100),
  }

  $scope.getStatByName = function(name) {
    return $scope.stats[name]
  }

  $scope.getAdjustedSubDamage = function(sub,loadout) {
    var abilityScore = loadout.calcAbilityScore('Bomb Defense Up DX');
    var modifier = null;

    switch(sub.name) {
      // TODO: Confirm with Lean that the new subs (Fizzy & Torpedo) use the same params as these other subs.
      case "Autobomb":
      case "Curling Bomb":
      case "Fizzy Bomb":
      case "Ink Mine":
      case "Splat Bomb":
      case "Suction Bomb":
      case "Torpedo":
        var bomb_defense_parameters = $scope.parameters["Bomb Defense"]["Heavy Sub"];
        break;
      case "Burst Bomb":
        var bomb_defense_parameters = $scope.parameters["Bomb Defense"]["Heavy Light"];
        break;
      default:
        var bomb_defense_parameters = $scope.parameters["Bomb Defense"]["Additional"];;
    }

    var p = $scope.calcP(abilityScore);      
    var s = $scope.calcS(bomb_defense_parameters);
    var modifier = $scope.calcRes(bomb_defense_parameters, p, s);

    if($scope.logging) {
      var sub_damage_reduction_debug_log = {"(Bomb Defense Up DX (Sub Reduction)":modifier,"AP:":abilityScore,"P":p,"S":s}
      console.log(sub_damage_reduction_debug_log);
    }

    var results = {}
    for(damageValue in sub.damage) {
      var subDamage = sub.damage[damageValue]
      if(subDamage >= 100) {
        results[damageValue] = subDamage.toFixed(1);
      } else {
        results[damageValue] = (subDamage * modifier).toFixed(1);
      }
    }
    return results
  }

  $scope.getAdjustedSpecialDamage = function(special,loadout) {
    var abilityScore = loadout.calcAbilityScore('Bomb Defense Up DX');
    var modifier = null;

    switch(special.name) {
      case "Baller":
      case "Inkjet":
      case "Splashdown":
      case "Tenta Missiles":
        var bomb_defense_parameters = $scope.parameters["Bomb Defense"]["Special"];
        break;
      default:
        var bomb_defense_parameters = $scope.parameters["Bomb Defense"]["Additional"];;
    }

    var p = $scope.calcP(abilityScore);      
    var s = $scope.calcS(bomb_defense_parameters);
    var modifier = $scope.calcRes(bomb_defense_parameters, p, s);
    
    if($scope.logging) {
      var special_damage_reduction_debug_log = {"Bomb Defense Up DX":modifier,"Special":special.name,"parameters":bomb_defense_parameters,"AP:":abilityScore,"P":p,"S":s}
      console.log(special_damage_reduction_debug_log);
    }

    var results = {}
    for(damageValue in special.damage) {
      var specialDamage = special.damage[damageValue]
      if(specialDamage >= 100) {
        results[damageValue] = specialDamage.toFixed(1);
      } else {
        results[damageValue] = (specialDamage * modifier).toFixed(1);
      }
    }
    return results
  }

  $scope.getAdjustedSpecialCost = function(loadout) {
    var stat = $scope.getStatByName('Special Charge Speed');
    return Math.floor(loadout.weapon.specialCost / (stat.value))
  }
}
