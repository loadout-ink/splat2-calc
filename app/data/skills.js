angular.module('splatApp').skills = function ($scope) {
$scope.skills = [
  {
    name:"Ink Saver (Main)",
    localizedName: {
      en_US: "Ink Saver (Main)",
      ja_JP: "インク効率アップ（メイン）",
      es_ES: "Tintahorro (ppal.)",
      fr_FR: "Encrémenteur (pr.)"
    },
    image:"../common/assets/img/skills/MainInk_Save.png",
    id: 1
  },
  {
    name:"Ink Saver (Sub)",
    localizedName: {
      en_US: "Ink Saver (Sub)",
      ja_JP: "インク効率アップ（サブ）",
      es_ES: "Tintahorro (sec.)",
      fr_FR: "Encrémenteur (sec.)"
    },
    image:"../common/assets/img/skills/SubInk_Save.png",
    id: 2
  },
  {
    name:"Ink Recovery Up",
    localizedName: {
      en_US: "Ink Recovery Up",
      ja_JP: "インク回復力アップ",
      es_ES: "Recarga rápida",
      fr_FR: "Levée d'encre"
    },
    image:"../common/assets/img/skills/InkRecovery_Up.png",
    id: 3
  },
  {
    name:"Run Speed Up",
    localizedName: {
      en_US: "Run Speed Up",
      ja_JP: "ヒト移動速度アップ",
      es_ES: "Supercarrera",
      fr_FR: "Course à pied"
    },
    image:"../common/assets/img/skills/HumanMove_Up.png",
    id: 4
  },
  {
    name:"Swim Speed Up",
    localizedName: {
      en_US: "Swim Speed Up",
      ja_JP: "イカダッシュ速度アップ",
      es_ES: "Superbuceo",
      fr_FR: "Turbo-calamar"
    },
    image:"../common/assets/img/skills/SquidMove_Up.png",
    id: 5
  },
  {
    name:"Quick Super Jump",
    localizedName: {
      en_US: "Quick Super Jump",
      ja_JP: "スーパージャンプ時間短縮",
      es_ES: "Supersalto rápido",
      fr_FR: "Aérodynamisme"
    },
    image:"../common/assets/img/skills/JumpTime_Save.png",
    id: 6
  },
  {
    name:"Ink Resistance Up",
    localizedName: {
      en_US: "Ink Resistance Up",
      ja_JP: "相手インク影響軽減",
      es_ES: "Impermeabilidad",
      fr_FR: "Pieds au sec"
    },
    image:"../common/assets/img/skills/OpInkEffect_Reduction.png",
    id: 7
  },
  {
    name:"Bomb Defense Up",
    localizedName: {
      en_US: "Bomb Defense Up",
      ja_JP: "爆風ダメージ軽減",
      es_ES: "Resistencia explosiva",
      fr_FR: "Filtre à explosions"
    },
    image:"../common/assets/img/skills/BombDamage_Reduction.png",
    id: 8
  },
  {
    name:"Cold-Blooded",
    localizedName: {
      en_US: "Cold-Blooded",
      ja_JP: "マーキング時間短縮",
      es_ES: "Invisibilidad",
      fr_FR: "Furtivité"
    },
    image:"../common/assets/img/skills/MarkingTime_Reduction.png",
    id: 9
  },
  {
    name:"Quick Respawn",
    localizedName: {
      en_US: "Quick Respawn",
      ja_JP: "復活時間短縮",
      es_ES: "Retorno exprés",
      fr_FR: "Sans temps morts"
    },
    image:"../common/assets/img/skills/RespawnTime_Save.png",
    id: 10
  },
  {
    name:"Special Charge Up",
    localizedName: {
      en_US: "Special Charge Up",
      ja_JP: "スペシャル増加量アップ",
      es_ES: "Recarga especial",
      fr_FR: "Jauge spéciale +"
    },
    image:"../common/assets/img/skills/SpecialIncrease_Up.png",
    id: 11
  },
  {
    name:"Special Saver",
    localizedName: {
      en_US: "Special Saver",
      ja_JP: "スペシャル減少量ダウン",
      es_ES: "Reducción especial",
      fr_FR: "Baisse spéciale -"
    },
    image:"../common/assets/img/skills/RespawnSpecialGauge_Save.png",
    id: 12
  },
  {
    name:"Special Power Up",
    localizedName: {
      en_US: "Special Power Up",
      ja_JP: "スペシャル性能アップ",
      es_ES: "Superarma especial",
      fr_FR: "Arme spéciale +"
    },
    image:"../common/assets/img/skills/SpecialTime_Up.png",
    id: 13
  },
  {
    name:"Sub Power Up",
    localizedName: {
      en_US: "Sub Power Up",
      ja_JP: "サブ性能アップ",
      es_ES: "Superarma secundaria",
      fr_FR: "Arme secondaire +"
    },
    image:"../common/assets/img/skills/BombDistance_Up.png",
    id: 14
  },
  {
    name:"Opening Gambit",
    localizedName: {
      en_US: "Opening Gambit",
      ja_JP: "スタートダッシュ",
      es_ES: "Acelerón de salida",
      fr_FR: "Chapeaux de roue"
    },
    image:"../common/assets/img/skills/StartAllUp.png",
    exclusive:"loadout.head.main",
    id: 15
  },
  {
    name:"Last-Ditch Effort",
    localizedName: {
      en_US: "Last-Ditch Effort",
      ja_JP: "ラストスパート",
      es_ES: "Sprint Final",
      fr_FR: "Ultime sursaut"
    },
    image:"../common/assets/img/skills/EndAllUp.png",
    exclusive:"loadout.head.main",
    id: 16
  },
  {
    name:"Comeback",
    localizedName: {
      en_US: "Comeback",
      ja_JP: "カムバック",
      es_ES: "Remontada",
      fr_FR: "Come-back"
    },
    image:"../common/assets/img/skills/ComeBack.png",
    exclusive:"loadout.head.main",
    id: 17
  },
  {
    name:"Tenacity",
    localizedName: {
      en_US: "Tenacity",
      ja_JP: "逆境強化",
      es_ES: "Ventaja",
      fr_FR: "Justice"
    },
    image:"../common/assets/img/skills/MinorityUp.png",
    exclusive:"loadout.head.main",
    id: 18
  },
  {
    name:"Thermal Ink",
    localizedName: {
      en_US: "Thermal Ink",
      ja_JP: "サーマルインク",
      es_ES: "Señuelo",
      fr_FR: "Encre thermique"
    },
    image:"../common/assets/img/skills/ThermalInk.png",
    exclusive:"loadout.clothes.main",
    id: 19
  },
  {
    name:"Ninja Squid",
    localizedName: {
      en_US: "Ninja Squid",
      ja_JP: "イカニンジャ",
      es_ES: "Ninjalamar",
      fr_FR: "Ninjalamar"
    },
    image:"../common/assets/img/skills/SquidMoveSpatter_Reduction.png",
    exclusive:"loadout.clothes.main",
    id: 20
  },
  {
    name:"Haunt",
    localizedName: {
      en_US: "Haunt",
      ja_JP: "リベンジ",
      es_ES: "Represalia",
      fr_FR: "Revanche"
    },
    image:"../common/assets/img/skills/DeathMarking.png",
    exclusive:"loadout.clothes.main",
    id: 21
  },
  {
    name:"Respawn Punisher",
    localizedName: {
      en_US: "Respawn Punisher",
      ja_JP: "復活ペナルティアップ",
      es_ES: "Castigo póstumo",
      fr_FR: "Retour perdant"
    },
    image:"../common/assets/img/skills/Exorcist.png",
    exclusive:"loadout.clothes.main",
    id: 22
  },
  {
    name:"Drop Roller",
    localizedName: {
      en_US: "Ninja Squid",
      ja_JP: "受け身術",
      es_ES: "Amortiguador",
      fr_FR: "Super roulade"
    },
    image:"../common/assets/img/skills/SomersaultLanding.png",
    exclusive:"loadout.shoes.main",
    id: 23
  },
  {
    name:"Stealth Jump",
    localizedName: {
      en_US: "Stealth Jump",
      ja_JP: "ステルスジャンプ",
      es_ES: "Supersalto invisible",
      fr_FR: "Réception réussie"
    },
    image:"../common/assets/img/skills/SuperJumpSign_Hide.png",
    exclusive:"loadout.shoes.main",
    id: 24
  },
  {
    name:"Object Shredder",
    localizedName: {
      en_US: "Object Shredder",
      ja_JP: "対物攻撃力アップ",
      es_ES: "Demolición",
      fr_FR: "Démolition"
    },
    image:"../common/assets/img/skills/ObjectEffect_Up.png",
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
