angular.module('splatApp').skills = function ($scope) {
$scope.skills = [
  {
    name:"Main Saver",
    image:"img/skills/MainInk_Save.png"
  },
  {
    name:"Sub Saver",
    image:"img/skills/SubInk_Save.png",
  },
  {
    name:"Ink Recovery Up",
    image:"img/skills/InkRecovery_Up.png",
  },
  {
    name:"Run Speed Up",
    image:"img/skills/HumanMove_Up.png",
  },
  {
    name:"Swim Speed Up",
    image:"img/skills/SquidMove_Up.png",
  },
  {
    name:"Quick Super Jump",
    image:"img/skills/JumpTime_Save.png",
  },
  {
    name:"Ink Resistance Up",
    image:"img/skills/OpInkEffect_Reduction.png",
  },
  {
    name:"Bomb Defense Up",
    image:"img/skills/BombDamage_Reduction.png",
  },
  {
    name:"Cold Blooded",
    image:"img/skills/MarkingTime_Reduction.png",
  },
  {
    name:"Quick Respawn",
    image:"img/skills/RespawnTime_Save.png",
  },
  {
    name:"Special Charge Up",
    image:"img/skills/SpecialIncrease_Up.png",
  },
  {
    name:"Special Saver",
    image:"img/skills/RespawnSpecialGauge_Save.png",
  },
  {
    name:"Special Power Up",
    image:"img/skills/SpecialTime_Up.png",
  },
  {
    name:"Sub Power Up",
    image:"img/skills/BombDistance_Up.png",
  },
  {
    name:"Opening Gambit",
    image:"img/skills/StartAllUp.png",
    exclusive:"loadout.head.main"
  },
  {
    name:"Last-Ditch Effort",
    image:"img/skills/EndAllUp.png",
    exclusive:"loadout.head.main"
  },
  {
    name:"Comeback",
    image:"img/skills/ComeBack.png",
    exclusive:"loadout.head.main"
  },
  {
    name:"Tenacity",
    image:"img/skills/MinorityUp.png",
    exclusive:"loadout.head.main"
  },
  {
    name:"Thermal Ink",
    image:"img/skills/ThermalInk.png",
    exclusive:"loadout.clothes.main"
  },
  {
    name:"Ninja Squid",
    image:"img/skills/SquidMoveSpatter_Reduction.png",
    exclusive:"loadout.clothes.main"
  },
  {
    name:"Haunt",
    image:"img/skills/DeathMarking.png",
    exclusive:"loadout.clothes.main"
  },
  {
    name:"Respawn Punisher",
    image:"img/skills/Exorcist.png",
    exclusive:"loadout.clothes.main"
  },
  {
    name:"Drop Roller",
    image:"img/skills/SomersaultLanding.png",
    exclusive:"loadout.shoes.main"
  },
  {
    name:"Stealth Jump",
    image:"img/skills/SuperJumpSign_Hide.png",
    exclusive:"loadout.shoes.main"
  },
  {
    name:"Object Shredder",
    image:"img/skills/ObjectEffect_Up.png",
    exclusive:"loadout.shoes.main"
  }
]
$scope.getSkillByName = function(name) {
    return $scope.skills.filter(function(skill) {
      return skill.name == name;
    })[0]
}

$scope.getExclusiveSkills = function(slot) {
  return $scope.skills.filter(function(skill) {
    if(skill.exclusive) if(skill.exclusive==slot) return true;
  })
}

$scope.getStackableSkills = function() {
  return $scope.skills.filter(function(skill) {
    if(!skill.exclusive) return true;
  })
}


}
