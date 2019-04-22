angular.module('splatApp').tutorial = function() {
    var tour = {
        id: "loadout-tutorial",
        showPrevButton: true,
        bubbleWidth: 350,
        i18n: {
            nextBtn: "Next",
            prevBtn: "Back",
            doneBtn: "Done",
            skipBtn: "Skip",
            closeTooltip: "Close",
            stepNums : ["1", "2", "3"]
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
                placement: "right"
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
                placement: "right"
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
                placement: "right"
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
                placement: "right"
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
                title: "<u>Work In Progress</u>",
                content: "This tutorial for Loadout is a work in progress. More information cards will be added in future updates. " +
                    "If you have feedback, suggestions, or comments please reach out to <a class='wiki-link' href='https://twitter.com/Selicia2' target='_blank'>Selicia</a> on Twitter.",
                target: "version",
                placement: "bottom"
            },
        ]
    };

    hopscotch.startTour(tour);
};
  