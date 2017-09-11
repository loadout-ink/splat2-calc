angular.module('splatApp').skills = function ($scope) {
$scope.skills = [
  {
    name:"Ink Saver (Main)",
    localizedName: {
      en: "Ink Saver (Main)",
      jp: "インク効率アップ（メイン）",
      es: "Tintahorro (ppal.)",
      fr: "Encrémenteur (pr.)"
    },
    image:"./assets/img/skills/MainInk_Save.png",
    id: 1
  },
  {
    name:"Ink Saver (Sub)",
    localizedName: {
      en: "Ink Saver (Sub)",
      jp: "インク効率アップ（サブ）",
      es: "Tintahorro (sec.)",
      fr: "Encrémenteur (sec.)"
    },
    image:"./assets/img/skills/SubInk_Save.png",
    id: 2
  },
  {
    name:"Ink Recovery Up",
    localizedName: {
      en: "Ink Recovery Up",
      jp: "インク回復力アップ",
      es: "Recarga rápida",
      fr: "Levée d'encre"
    },
    image:"./assets/img/skills/InkRecovery_Up.png",
    id: 3
  },
  {
    name:"Run Speed Up",
    localizedName: {
      en: "Run Speed Up",
      jp: "ヒト移動速度アップ",
      es: "Supercarrera",
      fr: "Course à pied"
    },
    image:"./assets/img/skills/HumanMove_Up.png",
    id: 4
  },
  {
    name:"Swim Speed Up",
    localizedName: {
      en: "Swim Speed Up",
      jp: "イカダッシュ速度アップ",
      es: "Superbuceo",
      fr: "Turbo-calamar"
    },
    image:"./assets/img/skills/SquidMove_Up.png",
    id: 5
  },
  {
    name:"Quick Super Jump",
    localizedName: {
      en: "Quick Super Jump",
      jp: "スーパージャンプ時間短縮",
      es: "Supersalto rápido",
      fr: "Aérodynamisme"
    },
    image:"./assets/img/skills/JumpTime_Save.png",
    id: 6
  },
  {
    name:"Ink Resistance Up",
    localizedName: {
      en: "Ink Resistance Up",
      jp: "相手インク影響軽減",
      es: "Impermeabilidad",
      fr: "Pieds au sec"
    },
    image:"./assets/img/skills/OpInkEffect_Reduction.png",
    id: 7
  },
  {
    name:"Bomb Defense Up",
    localizedName: {
      en: "Bomb Defense Up",
      jp: "爆風ダメージ軽減",
      es: "Resistencia explosiva",
      fr: "Filtre à explosions"
    },
    image:"./assets/img/skills/BombDamage_Reduction.png",
    id: 8
  },
  {
    name:"Cold-Blooded",
    localizedName: {
      en: "Cold-Blooded",
      jp: "マーキング時間短縮",
      es: "Invisibilidad",
      fr: "Furtivité"
    },
    image:"./assets/img/skills/MarkingTime_Reduction.png",
    id: 9
  },
  {
    name:"Quick Respawn",
    localizedName: {
      en: "Quick Respawn",
      jp: "復活時間短縮",
      es: "Retorno exprés",
      fr: "Sans temps morts"
    },
    image:"./assets/img/skills/RespawnTime_Save.png",
    id: 10
  },
  {
    name:"Special Charge Up",
    localizedName: {
      en: "Special Charge Up",
      jp: "スペシャル増加量アップ",
      es: "Recarga especial",
      fr: "Jauge spéciale +"
    },
    image:"./assets/img/skills/SpecialIncrease_Up.png",
    id: 11
  },
  {
    name:"Special Saver",
    localizedName: {
      en: "Special Saver",
      jp: "スペシャル減少量ダウン",
      es: "Reducción especial",
      fr: "Baisse spéciale -"
    },
    image:"./assets/img/skills/RespawnSpecialGauge_Save.png",
    id: 12
  },
  {
    name:"Special Power Up",
    localizedName: {
      en: "Special Power Up",
      jp: "スペシャル性能アップ",
      es: "Superarma especial",
      fr: "Arme spéciale +"
    },
    image:"./assets/img/skills/SpecialTime_Up.png",
    id: 13
  },
  {
    name:"Sub Power Up",
    localizedName: {
      en: "Sub Power Up",
      jp: "サブ性能アップ",
      es: "Superarma secundaria",
      fr: "Arme secondaire +"
    },
    image:"./assets/img/skills/BombDistance_Up.png",
    id: 14
  },
  {
    name:"Opening Gambit",
    localizedName: {
      en: "Opening Gambit",
      jp: "スタートダッシュ",
      es: "Acelerón de salida",
      fr: "Chapeaux de roue"
    },
    image:"./assets/img/skills/StartAllUp.png",
    exclusive:"loadout.head.main",
    id: 15
  },
  {
    name:"Last-Ditch Effort",
    localizedName: {
      en: "Last-Ditch Effort",
      jp: "ラストスパート",
      es: "Sprint Final",
      fr: "Ultime sursaut"
    },
    image:"./assets/img/skills/EndAllUp.png",
    exclusive:"loadout.head.main",
    id: 16
  },
  {
    name:"Comeback",
    localizedName: {
      en: "Comeback",
      jp: "カムバック",
      es: "Remontada",
      fr: "Come-back"
    },
    image:"./assets/img/skills/ComeBack.png",
    exclusive:"loadout.head.main",
    id: 17
  },
  {
    name:"Tenacity",
    localizedName: {
      en: "Tenacity",
      jp: "逆境強化",
      es: "Ventaja",
      fr: "Justice"
    },
    image:"./assets/img/skills/MinorityUp.png",
    exclusive:"loadout.head.main",
    id: 18
  },
  {
    name:"Thermal Ink",
    localizedName: {
      en: "Thermal Ink",
      jp: "サーマルインク",
      es: "Señuelo",
      fr: "Encre thermique"
    },
    image:"./assets/img/skills/ThermalInk.png",
    exclusive:"loadout.clothes.main",
    id: 19
  },
  {
    name:"Ninja Squid",
    localizedName: {
      en: "Ninja Squid",
      jp: "イカニンジャ",
      es: "Ninjalamar",
      fr: "Ninjalamar"
    },
    image:"./assets/img/skills/SquidMoveSpatter_Reduction.png",
    exclusive:"loadout.clothes.main",
    id: 20
  },
  {
    name:"Haunt",
    localizedName: {
      en: "Haunt",
      jp: "リベンジ",
      es: "Represalia",
      fr: "Revanche"
    },
    image:"./assets/img/skills/DeathMarking.png",
    exclusive:"loadout.clothes.main",
    id: 21
  },
  {
    name:"Respawn Punisher",
    localizedName: {
      en: "Respawn Punisher",
      jp: "復活ペナルティアップ",
      es: "Castigo póstumo",
      fr: "Retour perdant"
    },
    image:"./assets/img/skills/Exorcist.png",
    exclusive:"loadout.clothes.main",
    id: 22
  },
  {
    name:"Drop Roller",
    localizedName: {
      en: "Ninja Squid",
      jp: "受け身術",
      es: "Amortiguador",
      fr: "Super roulade"
    },
    image:"./assets/img/skills/SomersaultLanding.png",
    exclusive:"loadout.shoes.main",
    id: 23
  },
  {
    name:"Stealth Jump",
    localizedName: {
      en: "Stealth Jump",
      jp: "ステルスジャンプ",
      es: "Supersalto invisible",
      fr: "Réception réussie"
    },
    image:"./assets/img/skills/SuperJumpSign_Hide.png",
    exclusive:"loadout.shoes.main",
    id: 24
  },
  {
    name:"Object Shredder",
    localizedName: {
      en: "Object Shredder",
      jp: "対物攻撃力アップ",
      es: "Demolición",
      fr: "Démolition"
    },
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
