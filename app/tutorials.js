angular.module('splatApp').tutorial = function(skillName) {
    var position = null;
    if(screen.width <= 480) { position = "bottom"; } else { position = "right"; }

    var tour = {
        id: "loadout-tutorial",
        showPrevButton: true,
        bubbleWidth: 350,
        i18n: {
            nextBtn: "Next",
            prevBtn: "Back",
            doneBtn: "Done",
            skipBtn: "Skip",
            closeTooltip: "Close"
          },
        steps: [
            {
                title: "<u>Weapon Card</u>",
                content: "The Weapon Card displays the following information:<br><ul>" +
                    "<li>Your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Main_weapon' target='_blank'>weapon</a>.</li>" +
                    "<li>Your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Sub_weapon' target='_blank'>sub weapon</a>.</li>" +
                    "<li>Your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_weapon' target='_blank'>special</a> and the points required to use it.</li></ul>" +
                    "Click the <span class='glyphicon glyphicon-pencil'></span> icon to change your weapon! " +
                    "The weapon's details will be displayed, along with its popularity." +
                    "<br><br>You can even earch for weapons by their <i>name</i>, <i>sub weapon</i>, or <i>special</i> too!",
                target: "weapon",
                placement: position
            },
            {
                title: "<u>Head Card</u>",
                content: "The Head Card displays the following information:<br><ul>" +
                    "<li>Your <a class='wiki-link' href='https://splatoonwiki.org/wiki/List_of_headgear_in_Splatoon_2' target='_blank'>headgear</a>.</li>" +
                    "<li>The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#List_of_abilities_2' target='_blank'>abilities</a> on your headgear.</li></ul>" +
                    "Click the <span class='glyphicon glyphicon-pencil'></span> icon to change your headgear! " +
                    "The headgear's details will be displayed, which includes the following information: " +
                    "<ul><li>The headgear's <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Primary_abilities' target='_blank'>primary ability</a>.</li>" +
                    "<li>The headgear's <a class='wiki-link' href='https://splatoonwiki.org/wiki/Brand' target='_blank'>brand</a>.</li></ul>" +
                    "You can even earch for headgear items by their <i>name</i>, <i>primary ability</i>, or <i>brand</i> too!",
                    target: "hats",
                placement: position
            },
            {
                title: "<u>Headgear Abilities</u>",
                content: "The four circles above represent the <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#List_of_abilities_2' target='_blank'>abilities</a> your <a class='wiki-link' href='https://splatoonwiki.org/wiki/List_of_headgear_in_Splatoon_2' target='_blank'>headgear</a> is equipped with. " +
                    "Abilities modify the various <i>stats</i> displayed on the right side of the Loadout display. " +
                    "<br><br>The one larger circle is a <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Primary_abilities' target='_blank'>primary ability</a> ability slot, and the three smaller circles are <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Secondary_abilities' target='_blank'>secondary ability</a> slots. " +
                    "A primary slot grants more than 3x the effect of a secondary slot, but they cannot be changed!" +
                    "<br><br>Additionally, some abilities may only be used in a primary slot. Such abilities are displayed below the dashed line in the ability selection area in Loadout.",
                target: "hat-abilities",
                placement: "bottom"
            },
            {
                title: "<u>Clothes Card</u>",
                content: "The Clothes Card displays the following information:<br><ul>" +
                    "<li>Your <a class='wiki-link' href='https://splatoonwiki.org/wiki/List_of_clothing_in_Splatoon_2' target='_blank'>clothes</a>.</li>" +
                    "<li>The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#List_of_abilities_2' target='_blank'>abilities</a> on your clothes.</li></ul>" +
                    "Click the <span class='glyphicon glyphicon-pencil'></span> icon to change your clothes! " +
                    "The clothes' details will be displayed, which includes the following information: " +
                    "<ul><li>The clothes' <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Primary_abilities' target='_blank'>primary ability</a>.</li>" +
                    "<li>The clothes' <a class='wiki-link' href='https://splatoonwiki.org/wiki/Brand' target='_blank'>brand</a>.</li></ul>" +
                    "You can even earch for clothes by their <i>name</i>, <i>primary ability</i>, or <i>brand</i> too!",
                    target: "clothes",
                placement: position
            },
            {
                title: "<u>Clothes Abilities</u>",
                content: "The four circles above represent the <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#List_of_abilities_2' target='_blank'>abilities</a> your <a class='wiki-link' href='https://splatoonwiki.org/wiki/List_of_clothing_in_Splatoon_2' target='_blank'>clothes</a> are equipped with. " +
                    "Abilities modify the various <i>stats</i> displayed on the right side of the Loadout display. " +
                    "<br><br>The one larger circle is a <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Primary_abilities' target='_blank'>primary ability</a> ability slot, and the three smaller circles are <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Secondary_abilities' target='_blank'>secondary ability</a> slots. " +
                    "A primary slot grants more than 3x the effect of a secondary slot, but they cannot be changed!" +
                    "<br><br>Additionally, some abilities may only be used in a primary slot. Such abilities are displayed below the dashed line in the ability selection area in Loadout.",
                target: "clothes-abilities",
                placement: "bottom"
            },
            {
                title: "<u>Shoes Card</u>",
                content: "The Shoes Card displays the following information:<br><ul>" +
                    "<li>Your <a class='wiki-link' href='https://splatoonwiki.org/wiki/List_of_shoes_in_Splatoon_2' target='_blank'>shoes</a>.</li>" +
                    "<li>The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#List_of_abilities_2' target='_blank'>abilities</a> on your shoes.</li></ul>" +
                    "Click the <span class='glyphicon glyphicon-pencil'></span> icon to change your shoes! " +
                    "The shoes' details will be displayed, which includes the following information: " +
                    "<ul><li>The shoes' <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Primary_abilities' target='_blank'>primary ability</a>.</li>" +
                    "<li>The shoes' <a class='wiki-link' href='https://splatoonwiki.org/wiki/Brand' target='_blank'>brand</a>.</li></ul>" +
                    "You can even earch for shoes by their <i>name</i>, <i>primary ability</i>, or <i>brand</i> too!",
                    target: "shoes",
                placement: position
            },
            {
                title: "<u>Shoes Abilities</u>",
                content: "The four circles above represent the <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#List_of_abilities_2' target='_blank'>abilities</a> your <a class='wiki-link' href='https://splatoonwiki.org/wiki/List_of_shoes_in_Splatoon_2' target='_blank'>shoes</a> are equipped with. " +
                    "Abilities modify the various <i>stats</i> displayed on the right side of the Loadout display. " +
                    "<br><br>The one larger circle is a <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Primary_abilities' target='_blank'>primary ability</a> ability slot, and the three smaller circles are <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ability#Secondary_abilities' target='_blank'>secondary ability</a> slots. " +
                    "A primary slot grants more than 3x the effect of a secondary slot, but they cannot be changed!" +
                    "<br><br>Additionally, some abilities may only be used in a primary slot. Such abilities are displayed below the dashed line in the ability selection area in Loadout.",
                target: "shoes-abilities",
                placement: "bottom"
            },
            {
                title: "<u>Ink Saver (Main)</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ink_Saver_(Main)' target='_blank'>Ink Saver (Main)</a> ability reduces the ink consumption of your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Main_weapon' target='_blank'>weapon</a>. " +
                    "This ability is displayed in Loadout as the <i>Ink Conumption (Main)</i> stat.",
                target: "icon:Ink Saver (Main)",
                placement: "top"         
            },
            {
                title: "<u>Ink Saver (Sub)</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ink_Saver_(Sub)' target='_blank'>Ink Saver (Sub)</a> ability reduces the ink consumption of your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Sub_weapon' target='_blank'>sub weapon</a>. " +
                    "This ability is displayed in Loadout as the <i>Ink Conumption (Sub)</i> stat.",
                target: "icon:Ink Saver (Sub)",
                placement: "top"         
            },
            {
                title: "<u>Ink Recovery Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ink_Recovery_Up' target='_blank'>Ink Recovery Up</a> ability increases the refill rate of the player's <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ink_Tank' target='_blank'>ink tank</a>. " +
                    "The refill rate is different depending on whether you are in <i>kid form</i> or <i>squid form</i>. Note that in order to begin recovering ink you must not be attacking." +
                    "<br><br>This ability is displayed in Loadout as both the <i>Ink Recovery Speed (Squid)</i> and <i>Ink Recovery Speed (Kid)</i> stats.",
                target: "icon:Ink Recovery Up",
                placement: "top"         
            },
            {
                title: "<u>Run Speed Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Run_Speed_Up' target='_blank'>Run Speed Up</a> ability improves movement speed while running and while firing the weapon. " +
                    "However, it does not affect rolling speed with roller or brush type weapons. Additionally, this effect provides no benefit in enemy ink." +
                    "<br><br>This ability is displayed in Loadout as both the <i>Run Speed</i> and <i>Run Speed (Firing)</i> stats.",
                target: "icon:Run Speed Up",
                placement: "top"         
            },
            {
                title: "<u>Swim Speed Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Swim_Speed_Up' target='_blank'>Swim Speed Up</a> ability increases movement speed while swimming in squid form. " +
                    "It is important to remember that you are unable to swim in enemy ink. Additionally, the effects of this stat are dramatically reduced when using the <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ninja_Squid' target='_blank'>Ninja Squid</a> primary ability." +
                    "<br><br>This ability is displayed in Loadout as the <i>Swim Speed</i> stat.",
                target: "icon:Swim Speed Up",
                placement: "top"
            },
            {
                title: "<u>Quick Super Jump</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Quick_Super_Jump' target='_blank'>Quick Super Jump</a> ability increases <a class='wiki-link' href='https://splatoonwiki.org/wiki/Super_Jump' target='_blank'>Super Jump</a> speed. " +
                    "The benefits of this ability take effect when jumping to your teammates, a <a class='wiki-link' href='https://splatoonwiki.org/wiki/Squid_Beakon' target='_blank'>Squid Beakon</a>, or your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Spawn_point' target='_blank'>Spawn Point</a>." +
                    "<br><br>This ability is displayed in Loadout as both the <i>Super Jump Time (Squid)</i> and <i>Super Jump Time (Kid)</i> stats.",
                target: "icon:Quick Super Jump",
                placement: "top"
            },
            {
                title: "<u>Ink Resistance Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Ink_Resistance_Up' target='_blank'>Ink Resistance Up</a> ability provides several benefits when you are standing in enemy ink." +
                    "It reduces the damage taken from enemy ink, increases your Run Speed and Jump Height in enemy ink, and even grants temporary immunity to the damage dealt by enemy ink." +
                    "<br><br>This ability is displayed in Loadout as the <i>Run Speed (Enemy Ink)</i> and <i>Ink Resistance Effects</i> table.",
                target: "icon:Ink Resistance Up",
                placement: "top"
            },
            {
                title: "<u>Bomb Defense Up DX</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Bomb_Defense_Up_DX' target='_blank'>Bomb Defense Up DX</a> ability provides the benefits of <a class='wiki-link' href='https://splatoonwiki.org/wiki/Bomb_Defense_Up' target='_blank'>Bomb Defense Up</a> and <a class='wiki-link' href='https://splatoonwiki.org/wiki/Cold-Blooded' target='_blank'>Cold-Blooded</a>. " +
                    "Bomb Defense Up reduces the damage taken from enemy <a class='wiki-link' href='https://splatoonwiki.org/wiki/Sub_weapon' target='_blank'>Sub Weapons</a> and <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_weapon' target='_blank'>Special Weapons</a>." +
                    "<br><br>This ability is displayed in Loadout as both the <i>Bomb Damage</i> and <i>Special Damage</i> tables.",
                target: "icon:Bomb Defense Up DX",
                placement: "top"
            },
            {
                title: "<u>Main Power Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Main_Power_Up' target='_blank'>Main Power Up</a> ability enhances the performance of your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Main_weapon' target='_blank'>Main Weapon</a>. It has different effects for each weapon." +
                    "<br><br>This ability is displayed in Loadout as both the <i>Main Power Up (1)</i> and <i>Main Power Up (2)</i> stats. The names will vary depending on the ability's effects granted for your weapon.",
                target: "icon:Main Power Up",
                placement: "top"
            },
            {
                title: "<u>Quick Respawn</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Quick_Respawn' target='_blank'>Quick Respawn</a> ability shortens your respawn time after getting splatted." +
                    "However, in order for Quick Respawn to activate, you must not splat an enemy during the time between your most recent death and current death." +
                    "<br><br>This ability is displayed in Loadout as the <i>Quick Respawn Time</i> stat.",
                target: "icon:Quick Respawn",
                placement: "top"
            },
            {
                title: "<u>Special Charge Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_Charge_Up' target='_blank'>Special Charge Up</a> ability reduces the points needed to fill your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_gauge' target='_blank'>Special Gauge</a>." +
                    "Each weapon has its own cost (points) required in order to activate its <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_weapon' target='_blank'>Special Weapon</a>." +
                    "<br><br>This ability is displayed in Loadout as the <i>Special Charge Speed</i> stat.",
                target: "icon:Special Charge Up",
                placement: "top"
            },
            {
                title: "<u>Special Saver</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_Saver' target='_blank'>Special Saver</a> ability reduces the points removed from your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_gauge' target='_blank'>Special Gauge</a> when splatted." +
                    "The effects of this stat are dramatically reduced when using the <a class='wiki-link' href='https://splatoonwiki.org/wiki/Respawn_Punisher' target='_blank'>Respawn Punisher</a> primary ability." +
                    "<br><br>This ability is displayed in Loadout as the <i>Special Saved</i> stat.",
                target: "icon:Special Saver",
                placement: "top"
            },
            {
                title: "<u>Special Power Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_Power_Up' target='_blank'>Special Power Up</a> ability enhances the performance of your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Special_weapon' target='_blank'>Special Weapon</a>. It has different effects for each special." +
                    "<br><br>This ability is displayed in Loadout as the <i>Special Power</i> stat. The name will vary depending on the ability's effects granted for your special weapon.",
                target: "icon:Special Power Up",
                placement: "top"
            },
            {
                title: "<u>Sub Power Up</u>",
                content: "The <a class='wiki-link' href='https://splatoonwiki.org/wiki/Sub_Power_Up' target='_blank'>Sub Power Up</a> ability enhances the performance of your <a class='wiki-link' href='https://splatoonwiki.org/wiki/Sub_weapon' target='_blank'>Sub Weapon</a>. It has different effects for each sub weapon." +
                    "<br><br>This ability is displayed in Loadout as the <i>Sub Power</i> stat. The name will vary depending on the ability's effects granted for your sub weapon.",
                target: "icon:Sub Power Up",
                placement: "top"
            },
            {
                title: "<u>Work In Progress</u>",
                content: "This tutorial for Loadout is a work in progress. More information cards will be added in future updates. " +
                    "If you have feedback, suggestions, or comments please reach out to <a class='wiki-link' href='https://twitter.com/Selicia2' target='_blank'>Selicia</a> on Twitter.",
                target: "version",
                placement: "bottom"
            },
        ]
    };

    var skillNameToIndex = {
        "Ink Saver (Main)": 7,
        "Ink Saver (Sub)": 8,
        "Ink Recovery Up": 9,
        "Run Speed Up": 10,
        "Swim Speed Up": 11,
        "Quick Super Jump": 12,
        "Ink Resistance Up": 13,
        "Bomb Defense Up DX": 14,
        "Main Power Up": 15,
        "Quick Respawn": 16,
        "Special Charge Up": 17,
        "Special Saver": 18,
        "Special Power Up": 19,
        "Sub Power Up": 20
    };

    if(skillNameToIndex[skillName]) {
        hopscotch.startTour(tour, skillNameToIndex[skillName]);
    }
    else {
        hopscotch.startTour(tour);
    }
};
  