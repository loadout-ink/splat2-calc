angular.module('splatApp').skills = function ($scope) {
$scope.skills = [
  {
    name:"Ink Saver (Main)",
    image:"img/skills/MainInk_Save.png",
    id: 1
  },
  {
    name:"Ink Saver (Sub)",
    image:"img/skills/SubInk_Save.png",
    id: 2
  },
  {
    name:"Ink Recovery Up",
    image:"img/skills/InkRecovery_Up.png",
    id: 3
  },
  {
    name:"Run Speed Up",
    image:"img/skills/HumanMove_Up.png",
    id: 4
  },
  {
    name:"Swim Speed Up",
    image:"img/skills/SquidMove_Up.png",
    id: 5
  },
  {
    name:"Quick Super Jump",
    image:"img/skills/JumpTime_Save.png",
    id: 6
  },
  {
    name:"Ink Resistance Up",
    image:"img/skills/OpInkEffect_Reduction.png",
    id: 7
  },
  {
    name:"Bomb Defense Up",
    image:"img/skills/BombDamage_Reduction.png",
    id: 8
  },
  {
    name:"Cold-Blooded",
    image:"img/skills/MarkingTime_Reduction.png",
    id: 9
  },
  {
    name:"Quick Respawn",
    image:"img/skills/RespawnTime_Save.png",
    id: 10
  },
  {
    name:"Special Charge Up",
    image:"img/skills/SpecialIncrease_Up.png",
    id: 11
  },
  {
    name:"Special Saver",
    image:"img/skills/RespawnSpecialGauge_Save.png",
    id: 12
  },
  {
    name:"Special Power Up",
    image:"img/skills/SpecialTime_Up.png",
    id: 13
  },
  {
    name:"Sub Power Up",
    image:"img/skills/BombDistance_Up.png",
    id: 14
  },
  {
    name:"Opening Gambit",
    image:"img/skills/StartAllUp.png",
    exclusive:"loadout.head.main",
    id: 15
  },
  {
    name:"Last-Ditch Effort",
    image:"img/skills/EndAllUp.png",
    exclusive:"loadout.head.main",
    id: 16
  },
  {
    name:"Comeback",
    image:"img/skills/ComeBack.png",
    exclusive:"loadout.head.main",
    id: 17
  },
  {
    name:"Tenacity",
    image:"img/skills/MinorityUp.png",
    exclusive:"loadout.head.main",
    id: 18
  },
  {
    name:"Thermal Ink",
    image:"img/skills/ThermalInk.png",
    exclusive:"loadout.clothes.main",
    id: 19
  },
  {
    name:"Ninja Squid",
    image:"img/skills/SquidMoveSpatter_Reduction.png",
    exclusive:"loadout.clothes.main",
    id: 20
  },
  {
    name:"Haunt",
    image:"img/skills/DeathMarking.png",
    exclusive:"loadout.clothes.main",
    id: 21
  },
  {
    name:"Respawn Punisher",
    image:"img/skills/Exorcist.png",
    exclusive:"loadout.clothes.main",
    id: 22
  },
  {
    name:"Drop Roller",
    image:"img/skills/SomersaultLanding.png",
    exclusive:"loadout.shoes.main",
    id: 23
  },
  {
    name:"Stealth Jump",
    image:"img/skills/SuperJumpSign_Hide.png",
    exclusive:"loadout.shoes.main",
    id: 24
  },
  {
    name:"Object Shredder",
    image:"img/skills/ObjectEffect_Up.png",
    exclusive:"loadout.shoes.main",
    id: 25
  }
]
$scope.getSkillByName = function(name) {
    return $scope.skills.filter(function(skill) {
      return skill.name == name;
    })[0]
}

$scope.getSkillById = function(skillid) {
  return $scope.skills.filter(function(skill) {
    return skill.id == skillid
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
