function Gear() {
  this.Equipped = "";
  this.Main = null;
  this.Subs = [null,null,null],
  this.getMainIcon = function() {
    if(this.Main != null) {
      return this.Main.Image
    }
    else return "img/skills/Unknown.png"
  };
  this.getSubIcon = function(x) {
    if(this.Subs[x] != null) {
      return this.Subs[x].Image
    }
    else return "img/skills/Unknown.png"
  };
  this.setNextSlot = function(skill) {
    if(this.Main == null){ this.Main = skill; return;}
    if(this.Subs[0] == null){ this.Subs[0] = skill; return;}
    if(this.Subs[1] == null){ this.Subs[1] = skill; return;}
    if(this.Subs[2] == null){ this.Subs[2] = skill; return;}
  };
  this.hasEmptySlots = function() {
    if(this.Main == null || this.Subs[0]==null || this.Subs[1]==null || this.Subs[2]==null) return true;
    else return false;
  }
}

function Loadout() {
  this.head = new Gear();
  this.clothes = new Gear();
  this.shoes = new Gear();

  this.setOpenSlot = function(skill) {
    if(skill.hasOwnProperty('Exclusive')) {
      if(this.head.Main==null && skill.Exclusive=="loadout.head.Main") this.head.Main=skill;
      if(this.clothes.Main==null && skill.Exclusive=="loadout.clothes.Main") this.clothes.Main=skill;
      if(this.shoes.Main==null && skill.Exclusive=="loadout.shoes.Main") this.shoes.Main=skill;
      return false;
    }
    if(this.head.hasEmptySlots()){ this.head.setNextSlot(skill); return true; }
    else if(this.clothes.hasEmptySlots()){ this.clothes.setNextSlot(skill); return true; }
    else if(this.shoes.hasEmptySlots()){ this.shoes.setNextSlot(skill); return true; }
    return false;
  }
}
