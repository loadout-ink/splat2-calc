// TRANSLATION INSTRUCTIONS
// * Don't translate locale variables - just their values
//// (i.e. "HAT_SLOT": "<translation here>")
// * Don't translate comments (like these)
// * Don't translate variables (double bracket words) within phrases ("{{value}} HP")
//// Move the variable to where it makes sense in the translation.
// * Try not to make things much longer than necessary
// * Use in-game terms where possible
// * "Distance Units"/"Distance Units per Frame" should always be translated the same way
//// You can call them something different, but make sure it can be abbreviated as a unit!
//// (Distance Units/frame -> DU/f)

var it_strings = {
  // Gear section
  // These should match the equipment screen in-game
  "WEAPON_SLOT": "Weapon",
  "HAT_SLOT": "Head",
  "CLOTHES_SLOT": "Clothes",
  "SHOES_SLOT": "Shoes",

  // Stats section
  "STATS_HEADER": "Stats",
  "INACCURATE_DISCLAIMER": "Stat is inaccurate due to lack of data.",
  "BOMB_HEADER": "Bomb Damage",
  // Will be used in tables - keep these short
  "BOMB_TABLE_BOMB": "Bomb",
  "TABLE_DIRECT": "Direct",
  "TABLE_NEAR": "Near",
  "TABLE_FAR": "Far",
  "TABLE_HIT": "Hit",
  "TABLE_EFFECT": "Effect",
  "TABLE_VALUE": "Value",
  "SPECIAL_HEADER": "Special Damage",
  "SPECIAL_TABLE_SPECIAL": "Special",
  "INK_RESISTANCE_HEADER": "Ink Resistance Effects",
  "INVULN_TIME": "Invulnerability Time",
  "DAMAGE_PER_SECOND": "Damage Per Second",
  "DAMAGE_LIMIT": "Damage Limit",
  "JUMP_HEIGHT": "Jump Height",

  // Footer
  "FOOTER_COPYRIGHT": "Splatoon and all related copyrights/assets used on this page are the property of Nintendo.",
  "FOOTER_ABOUT": "about",

  // Misc. Strings

  // For stats that do not work yet
  "UNAVAILABLE": "Unavailable",
  // For weapons and gear that are not available yet
  "UNRELEASED": "Unreleased",
  //// Will be used in tables - keep these short
  "KID_FORM": "Kid",
  "SQUID_FORM": "Squid",

  // Popup headers/buttons
  "UI_WEAPON_PICKER": "Weapon Picker",
  "UI_GEAR_PICKER": "Gear Picker",
  "UI_ABOUT": "About",
  "UI_CHANGELOG": "What's New?",
  "UI_OK": "OK",
  "UI_CANCEL": "Cancel",
  "UI_CONFIRM_CASUAL": "Got it!",
  "UI_EXCESSIVE_AP_HEADER": "Excessive AP Warning",
  "UI_EXCESSIVE_AP_WARNING": "Using too much of one ability has significant diminishing returns. Proceed with caution when using this gear. This message will not display again.",
  "UI_SPYKE_TOOLTIP": "Spyke Integration",
  "UI_SPYKE_WARNING": "You are about to be redirected to the Spyke Discord application: http://spyke.h3xmani.ac/",
  "UI_SEARCH": "Search...",
  "UI_STAT_TOGGLE_NOTICE": "Abilities marked with a [+] may be toggled by clicking on the name.",
  "UI_X_RANK_POPULARITY": "X Rank Popularity",
  "UI_X_RANK_POPULARITY_TOOLTIP": "How frequently the weapon is used in X rank.",

  // Tooltips for utility buttons
  "UI_COPY_LINK": "Copy Link",
  "UI_SCREENSHOT_MODE": "Toggle Screenshot Mode",
  "UI_CLEAR_ABILITIES": "Clear Abilities",
  "UI_CLEAR_ALL": "Clear All",
  // Tooltips for special icons
  "UI_NONSTANDARD_SPLATNET": "Non-standard. Only on SplatNet",
  "UI_NOT_POSSIBLE": "Not possible with selected main",

  // Stats - these appear over the stat bars.
  // If there is an asterisk (*), leave it in after the stat name.
  "STAT_SWIM_SPEED": "Swim Speed",
  "STAT_RUN_SPEED": "Run Speed",
  "STAT_RUN_SPEED_RESIST": "Run Speed (Enemy Ink)",
  "STAT_RUN_SPEED_FIRING": "Run Speed (Firing)",
  "STAT_RUN_SPEED_ROLLING": "Run Speed (Rolling)",
  "STAT_RUN_SPEED_CHARGING": "Run Speed (Charging)",
  "STAT_RECOVERY_SQUID": "Ink Recovery Speed (Squid)",
  "STAT_RECOVERY_KID": "Ink Recovery Speed (Kid)",
  "STAT_SAVER_MAIN": "Ink Consumption (Main)",
  "STAT_SAVER_SUB": "Ink Consumption (Sub)",
  "STAT_SPECIAL_CHARGE": "Special Charge Speed",
  "STAT_SPECIAL_SAVER": "Special Saved",
  "STAT_SPECIAL_SAVER_ON_DEATH": "Special Saved (On-Use Death)",
  "STAT_SPECIAL_POWER": "Special Power",
  "STAT_SPECIAL_POWER_UNKNOWN": "Special Power (???)",
  "STAT_SPECIAL_POWER_DURATION": "Special Power (Duration)",
  "STAT_SPECIAL_POWER_BALLER": "Special Power (Baller HP)",
  "STAT_SPECIAL_POWER_TENTA": "Special Power (Targeting Radius)",
  "STAT_SPECIAL_POWER_SPLASHDOWN": "Special Power (Lethal Radius)",
  "STAT_SPECIAL_POWER_BUBBLE": "Special Power (Max Bubble Radius)",
  "STAT_SPECIAL_POWER_BOOYAH": "Special Power (Max Charge Time)",
  "STAT_SUB_POWER": "Sub Power",
  "STAT_SUB_POWER_RANGE": "Sub Power (Bomb Range)",
  "STAT_SUB_POWER_CURLING": "Sub Power (Bomb Speed)",
  "STAT_SUB_POWER_MINE": "Sub Power (Mine Radius)",
  "STAT_SUB_POWER_WALL": "Sub Power (Wall HP)",
  "STAT_SUB_POWER_SPRINKLER": "Sub Power (Full-Power Duration)",
  "STAT_SUB_POWER_BEAKON": "Sub Power (Jump Speed to Beakon)",
  "STAT_SUB_POWER_DURATION": "Sub Power (Duration)",
  "STAT_JUMP_SQUID": "Super Jump Time (Squid)",
  "STAT_JUMP_KID": "Super Jump Time (Kid)",
  "STAT_QUICK_RESPAWN": "Quick Respawn Time",
  "STAT_QUICK_RESPAWN_PUNISHER": "Quick Respawn Time",
  "STAT_TRACKING_TIME": "Tracking Time",
  "STAT_TRACKING_TIME_POINT_SENSOR": "Tracking Time (Point Sensor)",
  "STAT_TRACKING_TIME_INK_MINE": "Tracking Time (Ink Mine)",
  "STAT_MAIN_POWER_UP": "Main Power Up",
  "STAT_MAIN_POWER_UP_UNUSED": "Main Power Up (Unused)",
  "STAT_MAIN_POWER_UP_MIN_DAMAGE": "Main Power Up (Min Damage)",
  "STAT_MAIN_POWER_UP_MAX_DAMAGE": "Main Power Up (Max Damage)",
  "STAT_MAIN_POWER_UP_INK_COVERAGE": "Main Power Up (Ink Coverage)",
  "STAT_MAIN_POWER_UP_JUMP_SHOT_RANDOMIZATION": "Main Power Up (Jump Shot Randomization)",
  "STAT_MAIN_POWER_UP_BULLET_VELOCITY": "Main Power Up (Bullet Velocity)",
  "STAT_MAIN_POWER_UP_HIGH_DAMAGE_RADIUS": "Main Power Up (High Damage Radius)",
  "STAT_MAIN_POWER_UP_VERTICAL_MIN_DAMAGE": "Main Power Up (Vertical Min Damage)",
  "STAT_MAIN_POWER_UP_VERTICAL_MAX_DAMAGE": "Main Power Up (Vertical Max Damage)",
  "STAT_MAIN_POWER_UP_SPRINT_SPEED": "Main Power Up (Sprint Speed)",
  "STAT_MAIN_POWER_UP_MAX_CHARGE_DISTANCE": "Main Power Up (Max Charge Distance)",
  "STAT_MAIN_POWER_UP_FULL_CHARGE_MIN_DAMAGE": "Main Power Up (Full Charge Min Damage)",
  "STAT_MAIN_POWER_UP_FULL_CHARGE_MAX_DAMAGE": "Main Power Up (Full Charge Max Damage)",
  "STAT_MAIN_POWER_UP_PARTIAL_CHARGE_MIN_DAMAGE": "Main Power Up (Partial Charge Min Damage)",
  "STAT_MAIN_POWER_UP_PARTIAL_CHARGE_MAX_DAMAGE": "Main Power Up (Partial Charge Max Damage)",
  "STAT_MAIN_POWER_UP_MAX_DAMAGE_RANGE": "Main Power Up (Max Damage Range)",
  "STAT_MAIN_POWER_UP_BURST_DURATION": "Main Power Up (Burst Duration)",
  "STAT_MAIN_POWER_UP_CANOPY_REGENERATION_TIME": "Main Power Up (Canopy Regeneration Time)",
  "STAT_MAIN_POWER_UP_CANOPY_HP": "Main Power Up (Canopy HP)",
  
  // Labels that go on the stat bars themselves. Keep these SHORT!
  "LABEL_DISTANCE_PER_FRAME": "{{value}} DU/f",
  "LABEL_PERCENT": "{{value}}%",
  // LABEL_MAIN_COST is combined with "SHOT_UNIT" values below
  "LABEL_MAIN_COST": "{{value}}% tank/{{unit}}",
  "LABEL_SUB_COST": "{{value}}% tank",
  "LABEL_TIME": "{{value}}s",
  "LABEL_HP": "{{value}} HP",
  "LABEL_NO_UNIT": "{{value}}",

  // Tooltips for stats
  "DESC_PUNISHER_DISCLAIMER": "Respawn Punisher is affecting this stat.",
  "DESC_TRACKING": "Point Sensor/Ink Mine duration",
  "DESC_RECOVERY_TIME": "{{value}}s from empty to full",
  "DESC_MAIN_COST": "{{totalShots}} to empty ({{reduction}}% reduction)",
  "DESC_SUB_COST": "{{reduction}}% reduction",
  "DESC_SPECIAL_COST": "{{value}}p for special",
  "DESC_DISTANCE": "{{value}} Distance Units",
  "DESC_QUICK_RESPAWN": "Respawn time when splatted without splatting others.",
  "UNIT_DISTANCE_UNITS_PER_FRAME": "Distance Units/frame",
  "ROLL_SPEED": "Roll Speed for Rollers and Brushes is constant.",  
  
  // The "unit" weapons fire in
  // Used in phrases like "200 shots to empty"
  "SHOT_UNIT_SHOT": "shot",
  "SHOT_UNIT_SHOT_PLURAL": "shots",
  "SHOT_UNIT_FLICK": "flick",
  "SHOT_UNIT_FLICK_PLURAL": "flicks",
  "SHOT_UNIT_FLICK_HORIZ": "horizontal flick",
  "SHOT_UNIT_FLICK_HORIZ_PLURAL": "horizontal flicks",
  "SHOT_UNIT_FLICK_VERT": "vertical flick",
  "SHOT_UNIT_FLICK_VERT_PLURAL": "vertical flicks",
  "SHOT_UNIT_SLOSHER": "slosh",
  "SHOT_UNIT_SLOSHER_PLURAL": "sloshes",
  "SHOT_UNIT_CHARGER": "full charge",
  "SHOT_UNIT_CHARGER_PLURAL": "full charges",

  // Future feature - ink breakdown
  //// Combined with SHOT_UNIT
  "INK_BREAKDOWN_SHOTS_AFTER_SUB": "{{unitPlural}} after sub: {{value}}",
  "INK_BREAKDOWN_TOTAL_SHOTS": "{{value}} to empty",
  "INK_BREAKDOWN_INK_PER_SHOT": "{{value}}/{{unit}}",
  "INK_BREAKDOWN_INK_PER_SECOND": "{{value}}/second",
  "INK_BREAKDOWN_RECOVERY": "Full Recovery Time",

  // Future feature - Comeback/Tenacity/
  "HEADER_WITH_ABILITY": "{{ability}} Stats",

  // Future feature - a few explanations
  "UI_DISTANCE_EXPLANATION": "Distance Units per Frame is a measurement of speed in-game.",
  "UI_DISTANCE_EQUIVALENT": "Each line in the testing area is 50 Distance Units apart.",
  "UI_FRAMES_EXPLANATION": "One second is 60 frames.",

  // Future feature - options
  "UI_OPTIONS": "Options",
  "UI_ENABLE_UNRELEASED": "Enable Unreleased Weapons",
  "UI_UNRELEASED_DISCLAIMER": "Stats for unreleased weapons may not be accurate.",
  "UI_UNRELEASED_WEAPONS": "Unreleased Weapons",
  // Future feature - gear tabs
  "UI_SPLATNET_GEAR": "SplatNet Gear",
  "UI_STANDARD_GEAR": "Standard Gear",
  "UI_UNRELEASED_GEAR": "Unreleased Gear",
  // Future feature - set saving
  "UI_LOADOUT": "Loadout",
  "UI_SAVE_LOADOUT": "Save Loadout",
  "UI_LOAD_LOADOUT": "Load Loadout",
  "UI_SAVE": "Save",
  "UI_LOAD": "Load",
  "UI_NAME": "Name",
  "UI_ENTER_NAME": "Enter a name for this loadout:",
  "UI_ERROR_NAME_TOO_LONG": "Name must be shorter than 20 characters.",
  "UI_ERROR_DUPLICATE_NAME": "You already have a loadout with this name.",
  "UI_ERROR_INVALID_NAME": "Please pick a different name.",
  "UI_DELETE_LOADOUT": "Delete Loadout",
  "UI_DELETE": "Delete",
  "UI_VERIFY": "Are you sure?",
  "UI_SAVED_LOADOUTS": "Saved Loadouts",
  "UI_DELETE_ALL": "Delete All Loadouts",
  "UI_UPDATE": "There's been an update!",
  "UI_VERSION_PREFIX": "Loadout v",

  // For Google and other search engines
  //// This will appear when loadout.ink appears in search results.
  //// Please write a short description for loadout.ink. It should be two to three sentences.
  "PAGE_DESCRIPTION": "Gear planner and stat calculator for Splatoon 2. Create gear configurations and see the effects on your stats.",

  // Page Title
  //// This will appear in the browser's title for the webpage, and on search results.
  //// It should start with "loadout.ink" and then an even shorter description than the one above.
  "PAGE_TITLE": "loadout.ink - Gear Planner/Stat Calculator for Splatoon 2",

  // This goes in the "about" popup.
  /// Leave the HTML tags alone.
  "UI_ABOUT_CONTENT": `Built primarily with AngularJS 1.6.5 and Bootstrap 3.<br><br>
  This tool was developed using info and assets datamined by <a href="https://twitter.com/LeanYoshi" target="_blank">Lean</a>, as well as information provided by several members of the Inkademy and Splatoon Developers servers on Discord.
  <br><br>Thanks to everyone who gave me help and data!<br><br>
  Many of the formulas used can be seen on <a href="https://splatoonwiki.org/wiki/User:Heddy/Charts" target="_blank">Heddy's charts</a> on Inkipedia.<br><br>
  Any feature suggestions, bug reports, and feedback can be left as issues on the project's <a href="https://github.com/DeviPotato/splat2-calc" target="_blank">GitHub</a>. <br>
  You can also reach me on the project's <a href="https://twitter.com/loadout_ink" target="_blank">twitter</a>.`
}
