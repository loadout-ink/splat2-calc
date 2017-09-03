angular.module('splatApp').skills = function ($scope) {
$scope.skills = [
  {
    name:"Ink Saver (Main)",
    image:"./assets/img/skills/MainInk_Save.png",
    id: 1
  },
  {
    name:"Ink Saver (Sub)",
    image:"./assets/img/skills/SubInk_Save.png",
    id: 2
  },
  {
    name:"Ink Recovery Up",
    image:"./assets/img/skills/InkRecovery_Up.png",
    id: 3
  },
  {
    name:"Run Speed Up",
    image:"./assets/img/skills/HumanMove_Up.png",
    id: 4
  },
  {
    name:"Swim Speed Up",
    image:"./assets/img/skills/SquidMove_Up.png",
    id: 5
  },
  {
    name:"Quick Super Jump",
    image:"./assets/img/skills/JumpTime_Save.png",
    id: 6
  },
  {
    name:"Ink Resistance Up",
    image:"./assets/img/skills/OpInkEffect_Reduction.png",
    id: 7
  },
  {
    name:"Bomb Defense Up",
    image:"./assets/img/skills/BombDamage_Reduction.png",
    id: 8
  },
  {
    name:"Cold-Blooded",
    image:"./assets/img/skills/MarkingTime_Reduction.png",
    id: 9
  },
  {
    name:"Quick Respawn",
    image:"./assets/img/skills/RespawnTime_Save.png",
    id: 10
  },
  {
    name:"Special Charge Up",
    image:"./assets/img/skills/SpecialIncrease_Up.png",
    id: 11
  },
  {
    name:"Special Saver",
    image:"./assets/img/skills/RespawnSpecialGauge_Save.png",
    id: 12
  },
  {
    name:"Special Power Up",
    image:"./assets/img/skills/SpecialTime_Up.png",
    id: 13
  },
  {
    name:"Sub Power Up",
    image:"./assets/img/skills/BombDistance_Up.png",
    id: 14
  },
  {
    name:"Opening Gambit",
    image:"./assets/img/skills/StartAllUp.png",
    exclusive:"loadout.head.main",
    id: 15
  },
  {
    name:"Last-Ditch Effort",
    image:"./assets/img/skills/EndAllUp.png",
    exclusive:"loadout.head.main",
    id: 16
  },
  {
    name:"Comeback",
    image:"./assets/img/skills/ComeBack.png",
    exclusive:"loadout.head.main",
    id: 17
  },
  {
    name:"Tenacity",
    image:"./assets/img/skills/MinorityUp.png",
    exclusive:"loadout.head.main",
    id: 18
  },
  {
    name:"Thermal Ink",
    image:"./assets/img/skills/ThermalInk.png",
    exclusive:"loadout.clothes.main",
    id: 19
  },
  {
    name:"Ninja Squid",
    image:"./assets/img/skills/SquidMoveSpatter_Reduction.png",
    exclusive:"loadout.clothes.main",
    id: 20
  },
  {
    name:"Haunt",
    image:"./assets/img/skills/DeathMarking.png",
    exclusive:"loadout.clothes.main",
    id: 21
  },
  {
    name:"Respawn Punisher",
    image:"./assets/img/skills/Exorcist.png",
    exclusive:"loadout.clothes.main",
    id: 22
  },
  {
    name:"Drop Roller",
    image:"./assets/img/skills/SomersaultLanding.png",
    exclusive:"loadout.shoes.main",
    id: 23
  },
  {
    name:"Stealth Jump",
    image:"./assets/img/skills/SuperJumpSign_Hide.png",
    exclusive:"loadout.shoes.main",
    id: 24
  },
  {
    name:"Object Shredder",
    image:"./assets/img/skills/ObjectEffect_Up.png",
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
  var results = $scope.skills.filter(function(skill) {
    return skill.id == skillid
  })[0]
  if(results == undefined) {
    return null;
  }
  else return results;
}

$scope.getExclusiveSkills = function(slot) {
  return $scope.skills.filter(function(skill) {
    if(skill.exclusive) return true;
  })
}

$scope.getStackableSkills = function() {
  return $scope.skills.filter(function(skill) {
    if(!skill.exclusive) return true;
  })
}


}
