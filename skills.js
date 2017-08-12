angular.module('splatApp').skills = function ($scope) {
$scope.skills = [
  {
    "Name":"Main Saver",
    "Image":"img/skills/MainInk_Save.png"
  },
  {
    "Name":"Sub Saver",
    "Image":"img/skills/SubInk_Save.png",
  },
  {
    "Name":"Ink Recovery Up",
    "Image":"img/skills/InkRecovery_Up.png",
  },
  {
    "Name":"Run Speed Up",
    "Image":"img/skills/HumanMove_Up.png",
  },
  {
    "Name":"Swim Speed Up",
    "Image":"img/skills/SquidMove_Up.png",
  },
  {
    "Name":"Thermal Ink",
    "Image":"img/skills/ThermalInk.png",
    "Exclusive":"loadout.clothes.Main"
  }

]
}
