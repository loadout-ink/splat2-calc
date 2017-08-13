function Gear() {
  this.equipped = "";
  this.main = null;
  this.subs = [null,null,null],
  this.getmainIcon = function() {
    if(this.main != null) {
      return this.main.image
    }
    else return "img/skills/Unknown.png"
  };
  this.getSubIcon = function(x) {
    if(this.subs[x] != null) {
      return this.subs[x].image
    }
    else return "img/skills/Unknown.png"
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
  this.calcAbilityScore = function(skill) {
    var total = 0;
    if(this.main != null) if(this.main.name == skill) total += 10;
    for(var i = 0; i < this.subs.length; i++) {
      if(this.subs[i] != null) if(this.subs[i].name == skill) total +=3;
    }
    return total;
  }
}

function Loadout() {
  this.head = new Gear();
  this.clothes = new Gear();
  this.shoes = new Gear();

  this.weapon = null;

  this.setOpenSlot = function(skill) {
    if(skill.hasOwnProperty('exclusive')) {
      if(skill.exclusive=="loadout.head.main"){ this.head.main=skill; return true; }
      if(skill.exclusive=="loadout.clothes.main"){ this.clothes.main=skill; return true; }
      if(skill.exclusive=="loadout.shoes.main"){ this.shoes.main=skill; return true; }
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

}
