function Gear() {
  this.equipped = null;
  this.main = null;
  this.subs = [null,null,null],
  this.getmainIcon = function() {
    if(this.main != null) {
      return this.main.image
    }
    else return '../common/assets/img/skills/Unknown.png'
  };
  this.getSubIcon = function(x) {
    if(this.subs[x] != null) {
      return this.subs[x].image
    }
    else return '../common/assets/img/skills/Unknown.png'
  };
  this.setNextSlot = function(skill) {
    if(this.main == null){ this.main = skill; return; }
    if(this.subs[0] == null){ this.subs[0] = skill; return; }
    if(this.subs[1] == null){ this.subs[1] = skill; return; }
    if(this.subs[2] == null){ this.subs[2] = skill; return; }
  };
  this.hasEmptySlots = function() {
    if(this.main == null || this.subs[0]==null || this.subs[1]==null || this.subs[2]==null) return true;
    else return false;
  }
  this.hasAbility = function(skill) {
    if(this.main != null) if(this.main.name == skill) return true;
    for(var i=0; i<this.subs.length; i++) {
      if(this.subs[i] != null) if(this.subs[i].name == skill) return true;
    }
  }
  this.calcAbilityScore = function(skill, mod) {
    var total = 0;
    if(this.main != null) if(this.main.name == skill) total += 10;
    for(var i = 0; i < this.subs.length; i++) {
      var value = 3;
      if(this.main != null) if(this.main.name == 'Ability Doubler') value = 6;
      if(this.subs[i] != null) if(this.subs[i].name == skill) total += value;
    }
    return total;
  }
  this.clearAll = function() {
    this.subs = [null,null,null];
    if(this.equipped.fixed) return;
    this.main = null;
  }

}

function Loadout() {
  this.head = new Gear();
  this.clothes = new Gear();
  this.shoes = new Gear();

  this.weapon = null;

  this.setOpenSlot = function(skill) {
    if(skill.hasOwnProperty('exclusive')) {
      if(skill.exclusive=='loadout.head.main'){ this.head.main=skill; return true; }
      if(skill.exclusive=='loadout.clothes.main'){ this.clothes.main=skill; return true; }
      if(skill.exclusive=='loadout.shoes.main'){ this.shoes.main=skill; return true; }
      return false;
    }
    if(this.head.hasEmptySlots()){ this.head.setNextSlot(skill); return true; }
    else if(this.clothes.hasEmptySlots()){ this.clothes.setNextSlot(skill); return true; }
    else if(this.shoes.hasEmptySlots()){ this.shoes.setNextSlot(skill); return true; }
    return false;
  }

  this.calcAbilityScore = function(skill) {
      return this.head.calcAbilityScore(skill) + this.clothes.calcAbilityScore(skill) + this.shoes.calcAbilityScore(skill);
  }

  this.hasAbility = function(skill) {
    return this.head.hasAbility(skill) || this.clothes.hasAbility(skill) || this.shoes.hasAbility(skill);
  }

  this.swapSlots = function(s1, s2) {
    var slot1 = s1.replace("loadout.","")
    var slot2 = s2.replace("loadout.","")
    var slot1Value = eval('this.' + slot1)
    var slot2Value = eval('this.' + slot2)
    if(slot1Value != null) if(slot1Value.exclusive) return;
    if(slot2Value != null) if(slot2Value.exclusive) return;
    var tmp = slot1Value;
    eval('this.' + slot1 + '= slot2Value');
    eval('this.' + slot2 + '= tmp');
  }

  this.clearSlot = function(s) {
    var slot = s.replace('loadout.', 'this.');
    eval(slot + '= null');
  }

  this.clearAbilities = function() {
      this.head.clearAll();
      this.clothes.clearAll();
      this.shoes.clearAll();
  }

}
