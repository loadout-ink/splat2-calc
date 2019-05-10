var modalCloseDelay = 200;

angular.module('splatApp').controller('ModalCtrl', function($scope, $rootScope, $uibModal, $log, $timeout) {
  $scope.animationsEnabled = true;

  var templates = {
    weaponPickerNew : `
    <div class="row">
    <div class="col-md-12">
    <div class="card neonstripes" id="dialog">
    <div class="row cardheader">
    {{ UI_WEAPON_PICKER | translate }}
    </div>
    <div class="row">
    <div class="col-md-4">
    <div class="row">
    <div class="col-md-12 col-sm-6">
    <img id="weapon-picker-selected" fallback-img ng-src="{{selectedWeapon.image}}" />
    </div>
    <div class="col-md-12 col-sm-6">
    <div class="selected-label">
    <span>{{selectedWeapon.localizedName['{{ LANG_FULL | translate }}']}}</span></div>
    <div class="col-md-12">
    <div class="row">
    <div class="col-xs-4 nopadding">
    <img ng-src="{{getSubIcon(selectedWeapon.sub)}}" uib-tooltip="{{getSubByName(selectedWeapon.sub).localizedName['{{ LANG_FULL | translate }}']}}" tooltip-append-to-body="true"  class="subspeicon" />
    </div>
    <div class="col-xs-8 nopadding">
    <div class="subspe-bubble">
    <img ng-src="{{getSpecialIcon(selectedWeapon.special)}}" uib-tooltip="{{getSpecialByName(selectedWeapon.special).localizedName['{{ LANG_FULL | translate }}']}}" tooltip-append-to-body="true" class="subspeicon" />
    {{selectedWeapon.specialCost}}p
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-12" id="minibar-container">
      <div class="row" ng-repeat="(stat,value) in selectedWeapon.stats">
        <div class="col-sm-6 col-xs-3 nopadding minibar-label readable">
          {{stat}}
        </div>
        <div class="col-sm-6 col-xs-9 nopadding">
          <uib-progressbar max="100" type="pink" value="value" class="statbar mini" />
        </div>
      </div>
    </div>

    <div class="col-md-12" id="minibar-container">
      <div class="row">
        <div class="col-sm-6 col-xs-3 nopadding minibar-label readable">
        {{UI_X_RANK_POPULARITY | translate}}
        </div>
        <div class="col-sm-6 col-xs-9 nopadding">
          <uib-progressbar max="100" type="pink" tooltip-placement="bottom" uib-tooltip="{{UI_X_RANK_POPULARITY_TOOLTIP | translate}}" value="weaponRank" class="statbar mini" />
        </div>
      </div>
    </div>

    </div>
    </div>
    </div>
    <div class="col-md-8 picker-right">
    <div class="row">
    <div class="col-md-12">
    <select class="form-control dropdown-toggle" data-ng-options="x.localizedName['{{ LANG_SELECTOR | translate }}' || '{{ LANG_FULL | translate }}'] for x in weaponSets" data-ng-model="selectedSet" ng-change="switchSet()"></select>
    <input id="weaponSearchFilterText" ng-model="weaponSearchFilterText" class="form-control form-control-sm" type="text" placeholder="{{ UI_SEARCH | translate }}">
    </div>
    </div>
    <div class="col-md-12">
    <div class="row">
    <div class="picker">
    <div class="gear-wrapper" ng-repeat="weapon in availableWeapons() | filter:weaponSearchFilter">
    <img class="gear-icon" ng-src="{{::weapon.image}}" ng-click="selectWeapon(weapon)" uib-tooltip="{{::weapon.localizedName['{{ LANG_FULL | translate }}']}}" tooltip-append-to-body="true"/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="row buttons">
    <div class="col-xs-6 col-md-4 col-md-offset-2">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="cancel()"><span>{{ UI_CANCEL | translate }}</span></button>
    </div>
    <div class="col-xs-6 col-md-4">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="ok()"><span>{{ UI_OK | translate }}</span></button>
    </div>
    </div>
    </div>
    </div>
    `,
    // TODO / FIXME - handle grizzco more elegantly
    gearPicker : `<div class="row">
    <div class="col-md-12">
    <div class="card {{::background}}" id="dialog">
    <div class="row cardheader">
    {{ UI_GEAR_PICKER | translate }}
    </div>
    <div class="row">
    <div class="col-md-4">
    <div class="row">
    <div class="col-md-12 col-sm-6">
    <img fallback-img ng-src="{{selectedGear.image}}" />
    </div>
    <div class="col-md-12 col-sm-6">
    <div class="selected-label" class="selected-label">
    <span>{{selectedGear.localizedName['{{ LANG_FULL | translate }}']}}</span></div>
    <div id="gearpicker-stats">
    <span ng-if="selectedGear.main != undefined"><img ng-src="{{getSkillByName(selectedGear.main).image}}"/>  {{getSkillByName(selectedGear.main).localizedName['{{ LANG_FULL | translate }}']}}</span>
    <span ng-if="selectedGear.main == undefined"><img ng-src="../common/assets/img/skills/Unknown.png"/>  ???</span>
    <br>
    <img ng-src="{{brands[selectedGear.brand].image}}"/> {{brands[selectedGear.brand].localizedName['{{ LANG_FULL | translate }}']}}<br>
    <div>
    <span ng-if="brands[selectedGear.brand].common">
    <span class="fa green fa-arrow-up"></span><img ng-src="{{getSkillByName(brands[selectedGear.brand].common).image}}"/>
    <span class="fa red fa-arrow-down"></span><img ng-src="{{getSkillByName(brands[selectedGear.brand].uncommon).image}}"/>
    </span>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-8 picker-right">
    <input id="gearSearchFilterText" ng-model="gearSearchFilterText" class="form-control form-control-sm" type="text" placeholder="{{ UI_SEARCH | translate }}">
    <div class="picker">
    <div ng-click="selectGear(item)" ng-repeat="item in filtered.primary | filter:gearSearchFilter track by item.id" uib-tooltip="{{::item.localizedName['{{ LANG_FULL | translate }}']}}" tooltip-append-to-body="true" class="gear-wrapper">
    <img class="gear-icon" ng-src="{{item.image}}"/>
    <span class="brand-icon">
    <img ng-src="{{::brands[item.brand].image}}"/>
    </span>
    <span class="main-icon">
    <img ng-if="item.main != undefined" ng-src="{{::getSkillByName(item.main).image}}"/>
    </span>
    </div><!--
    --><div ng-click="selectGear(item)" ng-repeat="item in filtered.secondary | filter:gearSearchFilter track by item.id" uib-tooltip="{{::item.localizedName['{{ LANG_FULL | translate }}']}}" tooltip-append-to-body="true" class="gear-wrapper">
    <img class="gear-icon" ng-src="{{::item.image}}"/>
    <span class="brand-icon">
    <img ng-src="{{::brands[item.brand].image}}"/>
    </span>
    <span class="main-icon">
    <img ng-if="item.main != undefined" ng-src="{{::getSkillByName(item.main).image}}"/>
    </span>
    <span class="annie">
    <img ng-if="item.brand != 'Grizzco'?item.name != 'Splatfest Tee'?true:false:false" src="../common/assets/img/misc/annie.png" tooltip-append-to-body="true" tooltip-placement="bottom" uib-tooltip="{{ UI_NONSTANDARD_SPLATNET | translate }}"/>
    </span>
    </div><!--
    --><div ng-repeat="item in filtered.notEligible | filter:gearSearchFilter track by item.id" class="gear-wrapper">
    <img class="gear-icon" ng-src="{{::item.image}}"/>
    <span class="brand-icon">
    <img ng-src="{{::brands[item.brand].image}}"/>
    </span>
    <span class="main-icon">
    <img ng-if="item.main != undefined" ng-src="{{::getSkillByName(item.main).image}}"/>
    </span>
    <span class="not-possible" uib-tooltip="{{ UI_NOT_POSSIBLE | translate }}" tooltip-append-to-body="true">
    <span class="fa fa-5x fa-ban " ng-if="!isPossibleMain(loadout.clothes.equipped,loadout.clothes.main.name)"></span>
    </span>
    </div>

    </div>
    </div>
    </div>
    <div class="row buttons">
    <div class="col-xs-6 col-md-4 col-md-offset-2">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="cancel()"><span>{{ UI_CANCEL | translate }}</span></button>
    </div>
    <div class="col-xs-6 col-md-4">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="ok()"><span>{{ UI_OK | translate }}</span></button>
    </div>
    </div>
    </div>
    </div>`,

    //TODO: split this into its own file
    whatsNew: `<div class="row">
    <div class="col-md-12">
    <div class="card basic purplestripes" id="dialog">
    <div class="row cardheader">
    {{ UI_CHANGELOG | translate }}
    </div>
    <div class="row basic-content">
    <div id="changelog"</div>
    <h4>Development Notice</h4>
    <ul>
      <li>This is a fork of the original Loadout.ink code base being updated by <a href="https://twitter.com/Selicia2" target="_blank">Selicia</a>. Please consult the Trello Board for progress and status updates.</li>
      <li>Github Repo: <a href="https://github.com/selicia/splat2-calc" target="_blank">https://github.com/selicia/splat2-calc</a>.
      <li>Trello Board: <a href="https://trello.com/b/CjN9IRzJ/loadoutink" target="_blank">https://trello.com/b/CjN9IRzJ/loadoutink</a>.
    </ul>

    <h4>Version 2.1.0 (Current)</h4>
    <ul>
    <li>MPU stats will now retain the selected stat when changing gear, weapons, or abilities.</li>
    <li>Updated weapon special costs for v4.7.</li>
    <li>Updated ink costs for weapons for v4.7.</li>
    <li>Updated all MPU parameters and calculations to include missing values.</li>
    <li>Updated Sub Power Up calculations and stats for Point Sensor, Ink Mine, and Squid Beakon.</li>
    <li>Updated tutorial to include all regular abilities.</li>
    </ul>

    <h4>Version 2.0.16</h4>
    <ul>
    <li>Updated search/filter for weapons and gear to be language specific.</li>
    <li>Added first part of Loadout tutorial.</li>
    <li>Added rolling, ground, and jumping Ink Saver Main stats for all Rollers.</li>
    <li>Added flick and roll Ink Saver Main stats for all Brushes.</li>
    </ul>

    <h4>Version 2.0.15</h4>
    <ul>
    <li>Updated Special Power Up parameters for Sting Ray.</li>
    <li>Added X Rank weapon popularity bar to weapon picker.</li>
    <li>Added Ultra Stamp duration to Special Power Up.</li>
    <li>Added Ink Resistance Effects tables.</li>
    </ul>

    <h4>Version 2.0.14</h4>
    <ul>
    <li>Added UI indicator [+] for stats that may be toggled.</li>
    <li>Fixed Respawn Punisher penalty for Special Saver calculations.</li>
    <li>Updated Bomb Defense Up DX parameters and calculations.</li>
    <li>Added stat toggle for Tracking Time to switch between Point Sensor and Ink Mine.</li>
    </ul>

    <h4>Version 2.0.13</h4>
    <ul>
    <li>Fixed bugs for the weapon and gear search/filter.</li>
    <li>Updated Special Cost calculation.</li>
    <li>Updated Run Speed parameters for Mini Splatling.</li>
    </ul>    

    <h4>Version 2.0.12</h4>
    <ul>
    <li>Updated Run Speed (Firing) calculations for all weapons.</li>
    <li>Added Run Speed (Charging) calculations for Splatlings and Brellas.</li>
    <li>Added the ability to filter/search Weapons and Gear.</li>
    <li>Updated MPU parameters for several weapons.</li>
    <li>Fixed a bug preventing MPU stats from displaying for E-Liter weapons.</li>
    </ul>    

    <h4>Version 2.0.11</h4>
    <ul>
    <li>Updated the landing page to disable localisations that aren't finished.</li>
    <li>Added integration for the Spyke Discord app.</li>
    <li>Corrected the Run Speed (Firing) calculations for Splatlings.</li>
    <li>Updated MPU parameters for several weapons.</li>
    <li>Fixed a bug preventing MPU stats from displaying for E-Liter weapons.</li>
    </ul>

    <h4>Version 2.0.10</h4>
    <ul>
    <li>Added all hats through v4.6.</li>
    <li>Updated damage for several sub weapons.</li>
    <li>Added all shoes through v4.6.</li>
    <li>Updated the ink cost of all sub weapons.</li>
    </ul>

    <h4>Version 2.0.10</h4>
    <ul>
    <li>Added new v4.6 weapons.</li>
    <li>Added MPU damage caps for weapons with the Damage Up MPU effect.</li>
    <li>Updated Respawn Time calculations to include the penalty for Respawn Punisher.</li>
    <li>Updated several MPU parameters.</li>
    </ul>

    <h4>Version 2.0.9</h4>
    <ul>
    <li>Updated several parameters for Main Power Up.</li>
    <li>Updated parameters for Bubble Blower (Special Power Up).</li>
    <li>Added Ultra Stamp.</li>
    <li>Added several Main Power Up stats.</li>
    </ul> 

    <h4>Version 2.0.8</h4>
    <ul>
    <li>Added Main Power Up ability.</li>
    <li>Added update notifications to Loadout.</li>
    <li>Added Special Saved On Death for Splashdown.</li>
    <li>Fixed brand affinities.</li>
    <li>Added landing (home) page.</li>
    </ul>

    <h4>Version 2.0.7</h4>
    <ul>
    <li>Updated Ink Saver Sub parameters and calculations.</li>
    <li>Updated Quick Super Jump calculations.</li>
    <li>Updated Bomb Defense DX (Tracking Time) calculations.</li>
    <li>Updated Bomb Defense DX (Damage Reduction) calculations.</li>
    <li>Updated Japanese localisation file.</li>
    </ul>

    <h4>Version 2.0.6</h4>
    <ul>
    <li>Added all missing clothing gear.</li>
    <li>Updated Sub Power Up parameters for Point Sensor and Torpedo.</li>
    </ul>

    <h4>Version 2.0.5</h4>
    <ul>
    <li>Adding missing sub weapons (Fizzy Bomb & Torpedo).</li>
    <li>Added all missing weapons.</li>
    </ul>

    <h4>Version 2.0.4</h4>
    <ul>
    <li>Corrected calculations for Special Saver and added Respawn Punisher penalty.</li>
    <li>Added tooltip indicating when a stat is impacted by the Respawn Punisher penalty.</li>
    <li>Updated Special Power Up stat to use the new AP parameters and formula.</li>
    </ul>

    <h4>Version 2.0.3</h4>
    <ul>
    <li>Fixed a bug in the core stat formula.</li>
    <li>Updated the UI to more appropriately round values for stats.</li>
    <li>Added tooltips for several abilities.</li>
    <li>Added tooltips for several abilities.</li>
    <li>Updated Ink Saver Main stat to use the new AP parameters and formula.</li>
    <li>Updated Ink Saver Sub stat to use the new AP parameters and formula.</li>
    <li>Updated Special Charge Up stat to use the new AP parameters and formula.</li>
    <li>Updated Special Saver stat to use the new AP parameters and formula.</li>
    </ul>

    <h4>Version 2.0.2</h4>
    <ul>
    <li>Added a percentage change value for each stat.</li>
    <li>Corrected calculations for Swim Speed and added Ninja Squid penalty.</li>
    <li>Updated the Run Speed stat to use the new AP parameters and formula.</li>
    <li>Updated the Ink Resistance stat to use the new AP parameters and formula.</li>
    <li>Updated the Ink Recovery Up stat to use the new AP parameters and formula.</li>
    <li>Updated the Run Speed stat to use the new AP parameters and formula.</li>
    </ul>

    <h4>Version 2.0.1</h4>
    <ul>
    <li>Updated the core formula for calculating the effects of Ability Points (AP).</li>
    <li>Added <a href="https://twitter.com/LeanYoshi" target="_blank">Lean's</a> parameters for calculating stats using AP.
    <li>Updated the Swim Speed stat to use the new AP parameters and formula.</li>
    </ul>

    <h4>Version 1.2.0</h4>
    <ul>
    <li>Run Speed (Firing) and Ink Consumption (Main) values for most weapons are now up to date for game version 2.3.3.</li>
    <ul>
    <li>Many weapons that were missing these values, such as Hydra Splatling, now have them.</li>
    </ul>
    <li>loadout.ink is now available in Italian and Cantonese Chinese. Please report localization issues on <a href="https://github.com/DeviPotato/splat2-calc/" target="_blank">GitHub</a> or <a href="https://twitter.com/loadout_ink" target="_blank">Twitter.</a></li>
    <ul>
    <li>Italian contributed by <a href="https://twitter.com/marcolago" target="_blank">@marcolago</a>.</li>
    <li>Cantonese Chinese contributed by <a href="https://twitter.com/sam0737" target="_blank">@sam0307</a>.</li>
    </ul>
    <li>Several minor bugfixes and improvements.</li>
    </ul>
    <h4>Version 1.1.5</h4>
    <ul>
    <li>The look and feel of many aspects of the site has been updated. Contributed by <a href="https://github.com/lah7" target="_blank">Luke Horwell</a>.</li>
    <ul>
    <li>See <a href="https://github.com/DeviPotato/splat2-calc/commit/abebfe05d48595c4df1da95d1d1b759093d3eeb3" target="_blank">this commit</a> for details.</li>
    </ul>
    <li>Added all available gear as of game version 2.3.3.</li>
    <ul>
    <li>Some localizations for Spanish (Mexico) and French (Canada) may be incorrect. Please report these on <a href="https://github.com/DeviPotato/splat2-calc/" target="_blank">GitHub</a> or <a href="https://twitter.com/loadout_ink" target="_blank">Twitter.</a></li>
    </ul>
    <li>Grizzco gear no longer has a default ability.</li>
    </ul>
    <h4>Version 1.1.4</h4>
    <ul>
    <li>Updated for game balance changes through version 2.3.3.</li>
    <li>Added Clash Blaster Neo & Undercover Brella.</li>
    </ul>
    <h4>Version 1.1.3</h4>
    <ul>
    <li>Updated released weapons as of 4/6/18.</li>
    </ul>
    <h4>Version 1.1.2</h4>
    <ul>
    <li>Updated values for balance changes in game version 2.0.0.</li>
    <li>Fixed an incorrect subweapon on Gold Dynamo Roller.</li>
    <li>Added recently released weapons.</li>
    <li>The new gear added in 2.0.0 is coming soon.</li>
    </ul>
    <h4>Version 1.1.1</h4>
    <ul>
    <li>Updated most stats and weapons for game version 1.4.0. Cold-Blooded is still outdated and will be fixed soon.</li>
    <li>Splatfest Tee and Tenta Brella have been added.</li>
    <li>Fixed a visual bug due to missing Run Speed (Firing) and Ink Consumption (Main) for the Bamboozler.</li>
    <li>Data is incomplete for the Tenta Brella and the Bamboozler weapons. Firing speed and ink consumption will be added soon.</li>
    </ul>
    <h4>Version 1.1.0</h4>
    <ul>
    <li>loadout.ink is now available in English, Japanese, Spanish, and French. Translation errors can be reported via GitHub or Twitter.</li>
    </ul>
    <h4>Version 1.0.9</h4>
    <ul>
    <li>Fixed incorrect firing run speed for Sploosh-o-matic.</li>
    <li>Added Sub Power Up scaling for Splash Wall and Toxic Mist.</li>
    </ul>
    <h4>Version 1.0.8</h4>
    <ul>
    <li>Fixed incorrect Special cost for Splat Dualies/Hero Dualies.</li>
    <li>Fixed incorrect firing run speed for Heavy Splatling & variants.</li>
    </ul>
    <h4>Version 1.0.7</h4>
    <ul>
    <li>Fixed Run Speed Up incorrectly increasing the roll speed of rollers.</li>
    </ul>
    <h4>Version 1.0.6</h4>
    <ul>
    <li>Updated Special Charge Up scaling to round instead of floor.</li>
    <li>Updated Baller scaling to go from 400HP to 600HP.</li>
    </ul>
    <h4>Version 1.0.5</h4>
    <ul>
    <li>Updated values for game version 1.3.0. Official patch notes can be found <a href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/27028/p/897" target="_blank">here</a>.</li>
    </ul>
    <h4>Version 1.0.4</h4>
    <ul>
    <li>Updated Respawn Punisher to be more accurate.</li>
    <ul>
    <li>However, the values are EXTREMELY rough estimates due to lack of testing, but are more to give a general idea of the impact RSP has on Special Saver and Quick Respawn.</li>
    </ul>
    <li>Added disclaimer for when stats are known to be inaccurate.</li>
    </ul>
    <h4>Version 1.0.3</h4>
    <ul>
    <li>Some more value fixes.</li>
    <li>Ink Consumption (Main) now shows approximate shots per tank in the tooltip.</li>
    </ul>
    <h4>Version 1.0.2</h4>
    <ul>
    <li>Fixed missing Middle swim speed tier.</li>
    </ul>
    <h4>Version 1.0.1</h4>
    <ul>
    <li>Some mobile improvements and fixes for incorrect values.</li>
    </ul>
    <h4>Version 1.0</h4>
    <ul>
    <li>Initial release.</li>
    <li>Some special/sub scaling is still missing.</li>
    <li>Some values may be slightly inaccurate. Please leave an issue <a href="http://github.com/DeviPotato/splat2-calc/" target="_blank">on GitHub</a> with sources if you have corrections.</li>
    </ul>
    </div>
    <div class="row buttons">
    <div class="col-xs-12">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="ok()"><span>{{ UI_CONFIRM_CASUAL | translate }}</span></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `,
    // FIXME / LOCALIZE - Credit to Luke Horwell needs localization.
    about: `<div class="row">
    <div class="col-md-12">
    <div class="card purplestripes" id="dialog">
    <div class="row cardheader">
    {{ UI_ABOUT | translate }}
    </div>
    <div class="row basic-content readable" id="about">
    <p>{{ UI_ABOUT_CONTENT |translate}}</p>
    <p>
    Splatoon 2 UI Dialog/Buttons by <a href="https://github.com/lah7" target="_blank">Luke Horwell.</a>
    </p>
    <div class="row buttons">
    <div class="col-xs-12">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="ok()"><span>{{ UI_CONFIRM_CASUAL | translate }}</span></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `,
    update: `<div class="row">
    <div class="col-md-12">
    <div class="card purplestripes" id="dialog">
    <div class="row cardheader">
    {{ UI_UPDATE | translate }}
    </div>
    <div class="row basic-content readable" id="update">
    <img src="/common/assets/img/ui/update.jpg" width="100%" height="100%"></img>
    <h2 style="text-align:center;">
    {{ UI_VERSION_PREFIX | translate }}`
    +
    $scope.appVersionToString()
    +
    `</h2></div><div class="row buttons">
    <div class="col-xs-12">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="ok()"><span>{{ UI_CONFIRM_CASUAL | translate }}</span></button>
    </div>
    </div>`,
    excessiveAP: `<div class="row">
    <div class="col-md-12">
    <div class="card purplestripes" id="dialog">
    <div class="row cardheader">
    {{ UI_EXCESSIVE_AP_HEADER | translate }}
    </div>
    <div class="row basic-content readable" id="about">
    <p>{{ UI_EXCESSIVE_AP_WARNING | translate }}</p>
    <div class="row buttons">
    <div class="col-xs-12">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="ok()"><span>{{ UI_CONFIRM_CASUAL | translate }}</span></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`,
    spyke: `<div class="row">
    <div class="col-md-12">
    <div class="card purplestripes" id="dialog">
    <div class="row cardheader">
    {{ UI_SPYKE_TOOLTIP | translate }}
    </div>
    <div class="row basic-content readable" id="about">
    <p>{{ UI_SPYKE_WARNING | translate }}</p>
    <div class="row buttons">
    <div class="col-xs-6 col-md-4 col-md-offset-2">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="cancel()"><span>{{ UI_CANCEL | translate }}</span></button>
    </div>
    <div class="col-xs-6 col-md-4">
    <button class="btn" type="button" onclick="animateButton(this)" ng-click="ok()"><span>{{ UI_OK | translate }}</span></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`
  }

  $scope.openWeaponPicker = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["weaponPickerNew"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'WeaponPickerCtrl',
      size: size,
      resolve: {
        selectedSet: function() {
          return $scope.selectedSet;
        },
        weaponSets: function() {
          return $scope.weaponSets;
        },
        subs: function() {
          return $scope.subs;
        },
        selectedWeapon: function() {
          return $scope.loadout.weapon;
        },
        getSubByName: function() {
          return $scope.getSubByName;
        },
        getSpecialByName: function() {
          return $scope.getSpecialByName;
        }
      }
    });

    modalInstance.result.then(function(results) {
      $scope.$parent.selectedSet=results.set; // ???
      $scope.$parent.loadout.weapon=results.weapon;
    }, function() {
 
    });
  };

  $scope.openChangelog = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["whatsNew"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'BasicCtrl'
    });

    modalInstance.result.then(function(results) {

    }, function() {

    });
  };

  $scope.openAbout = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["about"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'BasicCtrl'
    });

    modalInstance.result.then(function(results) {

    }, function() {

    });
  };

  $scope.openGearPicker = function(gear, equipped, slot) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["gearPicker"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'GearPickerCtrl',
      resolve: {
        slot: function() {
          return eval("$scope.loadout." + slot)
        },
        getSkillByName: function() {
          return $scope.getSkillByName
        },
        set: function() {
          return gear
        },
        brands: function() {
          return $scope.brands
        },
        filterByMain: function() {
          return $scope.filterByMain
        },
        selectedGear: function() {
          return equipped
        },
        background: function() {
          if(slot=='head') {
            return 'redstripes'
          }
          else if(slot=='clothes') {
            return 'tealstripes'
          }
          else if(slot=='shoes') {
            return 'orangestripes'
          }
          else {
            return 'neonstripes'
          }
        }
      }
    });
    modalInstance.result.then(function(results) {
      $scope.equip(results.selected, slot)
      eval("$scope.loadout." + slot + ".equipped = results.selected")
      if(eval("$scope.loadout." + slot + ".main") == null) {
        eval(("$scope.loadout." + slot + ".main = $scope.getSkillByName('" + results.selected.main + "')"))
      }
      eval("$scope.loadout." + slot + ".equipped = results.selected")
    }, function() {

    });
  };

  $scope.openSpykeModal = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["spyke"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'BasicCtrl'
    });

    modalInstance.result.then(function(results) {
      var url = "http://spyke.h3xmani.ac/app/loadout?encoding=" + $scope.encodeLoadout();
      window.open(url,'_blank');
    }, function() {

    });    
  };

  $rootScope.openExcessiveAPModal = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["excessiveAP"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'BasicCtrl'
    });

    modalInstance.result.then(function(results) {

    }, function() {

    });
  };

  // Update modal
  var openUpdateModel = function() {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      template: templates["update"],
      windowTemplateUrl: 'blankModal.html',
      controller: 'BasicCtrl'
    });

    modalInstance.result.then(function(results) {

    }, function() {

    });  
  }
  if (typeof(Storage) !== "undefined") {
    if(!localStorage.appVersion || localStorage.appVersion < $scope.appVersion) {
      localStorage.appVersion = $scope.appVersion;
      openUpdateModel();
    }
  }
});

angular.module('splatApp').controller('WeaponPickerCtrl', function($scope, $rootScope, $uibModalInstance, getSubByName, getSpecialByName, weaponSets, subs, selectedSet, selectedWeapon, $timeout) {
  $scope.selectedSet = selectedSet;
  $scope.weaponSets = weaponSets;
  $scope.selectedWeapon = selectedWeapon;

  $scope.$watch('selectedWeapon', function (newValue, oldValue, scope) {
    if($rootScope.splatController.weaponRanks.indexOf(newValue.name) != -1) {
      $scope.weaponRank = 100 - $rootScope.splatController.weaponRanks.indexOf(newValue.name);
    }
    else {
      $scope.weaponRank = 0;
    }
  });

  $scope.weaponSearchFilter = function(value) {
    var current_lang = $rootScope.splatController.getCurrentLang();
    var searchText = document.getElementById("weaponSearchFilterText").value;
    
    if(value.localizedName[current_lang].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
      return true;
    }

    // Filter on SPECIAL
    var specials = $rootScope.splatController.specials;
    var special = null;
    for(var i = 0; i < specials.length; i++){
      if(value.special != null && specials[i].name == value.special) {
        special = specials[i];
        break;
      }
    }
    if(special != null) {
        if(special.localizedName[current_lang].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
          return true;
        }
    }

    // Filter on SUB ABILITY
    var subs = $rootScope.splatController.subs;
    var sub = null;
    for(var i = 0; i < subs.length; i++){
      if(value.sub != null && subs[i].name == value.sub) {
        sub = subs[i];
        break;
      }
    }
    if(sub != null) {
      if(sub.localizedName[current_lang].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
        return true;
      }
    }

    return false;
  };

  $scope.switchSet = function() {
    $scope.selectedWeapon = this.availableWeapons()[0];
  }

  $scope.selectWeapon = function(item) {
    $scope.selectedWeapon=item;
  }

  $scope.availableWeapons = function() {
    return this.selectedSet.weapons.filter(filter_available)
  }

  $scope.getSubByName = getSubByName

  $scope.getSubIcon = function(name) {
    return $scope.getSubByName(name).image;
  }

  $scope.getSpecialByName = getSpecialByName

  $scope.getSpecialIcon = function(name) {
    return $scope.getSpecialByName(name).image;
  }

  $scope.ok = function() {
    var scope = this;
    $timeout(function() {
      $uibModalInstance.close({'set' : scope.selectedSet, 'weapon': scope.selectedWeapon});
    }, modalCloseDelay);
  };

  $scope.cancel = function() {
    $timeout(function() {
      $uibModalInstance.dismiss('cancel');
    }, modalCloseDelay);
  };
});


angular.module('splatApp').controller('GearPickerCtrl', function($scope, $rootScope, $uibModalInstance, background, slot, set, brands, filterByMain, selectedGear, getSkillByName, $timeout) {
  $scope.slot = slot;
  $scope.set = set;
  $scope.filterByMain = filterByMain;
  $scope.selectedGear = selectedGear;
  $scope.getSkillByName = getSkillByName;
  $scope.brands = brands;
  $scope.background = background;

  $scope.gearSearchFilter = function(value) {
    var current_lang = $rootScope.splatController.getCurrentLang();
    var searchText = document.getElementById("gearSearchFilterText").value;
    
    // Filter on NAME
    if(value.localizedName[current_lang].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
      return true;
    }
    
    // Filter on BRAND
    var brand = $rootScope.splatController.brands[value.brand];
    if(brand.localizedName[current_lang].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
      return true;
    }
    
    // Filter on MAIN ABILITY
    var skills = $rootScope.splatController.skills;
    var skill = null;
    for(var i = 0; i < skills.length; i++){
      if(value.main != null && skills[i].name == value.main) {
        skill = skills[i];
        break;
      }
    }
    if(skill != null) {
      if(skill.localizedName[current_lang].toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
        return true;
      }
    }

    return false;
  };

  if(slot.main != null) {
    $scope.filtered = filterByMain(set,slot.main.name);
  }
  else {
    $scope.filtered = filterByMain(set,null);
  }

  $scope.selectGear = function(item) {
    $scope.selectedGear=item;
  }

  $scope.ok = function() {
    var scope = this;
    $timeout(function() {
      $uibModalInstance.close({selected : scope.selectedGear});
    }, modalCloseDelay);
  };

  $scope.cancel = function() {
    $timeout(function() {
      $uibModalInstance.dismiss('cancel');
    }, modalCloseDelay);
  };
});

angular.module('splatApp').controller('BasicCtrl', function($scope, $uibModalInstance, $timeout) {
  $scope.ok = function() {
    $timeout(function() {
      $uibModalInstance.close();
    }, modalCloseDelay);
  };

  $scope.cancel = function() {
    $timeout(function() {
      $uibModalInstance.dismiss('cancel');
    }, modalCloseDelay);
  };
});

function animateButton(self) {
    $(self).addClass("active");
    setTimeout(function() {
      $(".modal-backdrop").remove();
    }, modalCloseDelay);
}
