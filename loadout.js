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
}

function Loadout() {
  this.head = new Gear();
  this.clothes = new Gear();
  this.shoes = new Gear();

  this.setOpenSlot = function(skill) {
    if(skill.hasOwnProperty('exclusive')) {
      if(this.head.main==null && skill.exclusive=="loadout.head.main") this.head.main=skill;
      if(this.clothes.main==null && skill.exclusive=="loadout.clothes.main") this.clothes.main=skill;
      if(this.shoes.main==null && skill.exclusive=="loadout.shoes.main") this.shoes.main=skill;
      return false;
    }
    if(this.head.hasEmptySlots()){ this.head.setNextSlot(skill); return true; }
    else if(this.clothes.hasEmptySlots()){ this.clothes.setNextSlot(skill); return true; }
    else if(this.shoes.hasEmptySlots()){ this.shoes.setNextSlot(skill); return true; }
    return false;
  }
}
