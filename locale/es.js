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

var es_strings = {
  // Gear section
  "HAT_SLOT": "Accesorios",
  "CLOTHES_SLOT": "Ropa",
  "SHOES_SLOT": "Calzado",

  // Stats section
  "STATS_HEADER": "Estadísticas",
  "INACCURATE_DISCLAIMER": "La estadística no es precisa por falta de datos",
  "BOMB_HEADER": "Daño por bombas",
  // Will be used in tables - keep these short
  "BOMB_TABLE_BOMB": "Bomba",
  "TABLE_DIRECT": "Directo",
  "TABLE_NEAR": "Cercano",
  "TABLE_FAR": "Lejano",
  "TABLE_HIT": "Directo",
  "SPECIAL_HEADER": "Daño especial",
  "SPECIAL_TABLE_SPECIAL": "Especial",

  // Footer
  "FOOTER_COPYRIGHT": "Splatoon y todos los derechos de autor / bienes relacionados utilizados en esta página son propiedad de Nintendo.",
  "FOOTER_ABOUT": "about",

  // Misc. Strings
  "UNAVAILABLE": "No disponible",
  "UNRELEASED": "No liberado",
  //// Will be used in tables - keep these short
  "KID_FORM": "Inkling",
  "SQUID_FORM": "Calamar",

  // Popup headers/buttons
  "UI_WEAPON_PICKER": "Armas",
  "UI_GEAR_PICKER": "Ropa",
  "UI_ABOUT": "About",
  "UI_CHANGELOG": "Novedades",
  "UI_OK": "OK",
  "UI_CANCEL": "Cancelar",
  "UI_CONFIRM_CASUAL": "¡Vale!",

  // Tooltips for utility buttons
  "UI_COPY_LINK": "Copiar enlace",
  "UI_SCREENSHOT_MODE": "Modo captura",
  "UI_CLEAR_ABILITIES": "Limpiar potenciadores",
  "UI_CLEAR_ALL": "Limpiar todo",
  // Tooltips for special icons
  "UI_NONSTANDARD_SPLATNET": "Solo disponible en SplatNet2",
  "UI_NOT_POSSIBLE": "No es posible obtenerlo con este potenciador",

  // Stats - these appear over the stat bars.
  // If there is an asterisk (*), leave it in after the stat name.
  "STAT_SWIM_SPEED": "Velocidad de buceo",
  "STAT_RUN_SPEED": "Velocidad de carrera",
  "STAT_RUN_SPEED_RESIST": "Velocidad de desplazamiento (Tinta enemiga)",
  "STAT_RUN_SPEED_FIRING": "Velocidad de desplazamiento (Disparando)",
  "STAT_RUN_SPEED_ROLLING": "Velocidad de desplazamiento (Arrollando)",
  "STAT_RECOVERY_SQUID": "Recarga Rápida (Calamar)",
  "STAT_RECOVERY_KID": "Recarga Rápida (Inkling)",
  "STAT_SAVER_MAIN": "Tintahorro principal",
  "STAT_SAVER_SUB": "Tintahorro secundario",
  "STAT_SPECIAL_CHARGE": "Recarga especial",
  "STAT_SPECIAL_SAVER": "Reducción Especial *",
  "STAT_SPECIAL_POWER": "Superarma Especial",
  "STAT_SPECIAL_POWER_UNKNOWN": "Superarma especial (???)",
  "STAT_SPECIAL_POWER_DURATION": "Superarma especial (Duración)",
  "STAT_SPECIAL_POWER_BALLER": "Superarma especial (Vida de la esfera)",
  "STAT_SPECIAL_POWER_TENTA": "Superarma especial (Aumento de la mira)",
  "STAT_SPECIAL_POWER_SPLASHDOWN": "Superarma especial (Diámetro de Salpicadura)",
  "STAT_SPECIAL_POWER_BUBBLE": "Superarma especial (Tamaño de la Burbuja)",
  "STAT_SUB_POWER": "Superarma secundaria",
  "STAT_SUB_POWER_RANGE": "Superarma secundaria (Rango de la bomba)",
  "STAT_SUB_POWER_CURLING": "Superarma secundaria (Velocidad de la bomba)",
  "STAT_SUB_POWER_MINE": "Superarma secundaria (Radio de la bomba trampa)",
  "STAT_SUB_POWER_WALL": "Superarma secundaria (Vida del telón)",
  "STAT_SUB_POWER_SPRINKLER": "Superarma secundaria (Dura más en su primera fase)",
  "STAT_SUB_POWER_BEAKON": "Superarma secundaria (Velocidad de salto a Balizas)",
  "STAT_JUMP_SQUID": "Supersalto Rápido (Calamar)",
  "STAT_JUMP_KID": "Supersalto rápido (Inkling)",
  "STAT_QUICK_RESPAWN": "Retorno exprés",
  "STAT_QUICK_RESPAWN_PUNISHER": "Tiempo de reaparición (Castigo Póstumo) *",
  "STAT_TRACKING_TIME": "Tiempo de rastreo",

  // Labels that go on the stat bars themselves. Keep these SHORT!
  "LABEL_DISTANCE_PER_FRAME": "{{value}} UD/f",
  "LABEL_PERCENT": "{{value}}%",
  // LABEL_MAIN_COST is combined with "SHOT_UNIT" values below
  "LABEL_MAIN_COST": "{{value}}% tanque/{{unit}}",
  "LABEL_SUB_COST": "{{value}}% tanque",
  "LABEL_TIME": "{{value}}s",
  "LABEL_HP": "{{value}} HP",

  // Tooltips for stats
  "DESC_PUNISHER_DISCLAIMER": "Los efectos del Castigo Póstumo aún se desconocen",
  "DESC_TRACKING": "Duración del Rastreador y la Bomba Trampa",
  "DESC_RECOVERY_TIME": "{{value}}s para llenar el tanque",
  "DESC_MAIN_COST": "{{totalShots}} para vaciar el tanque ({{reduction}}% de reducción)",
  "DESC_SUB_COST": "{{reduction}}% de reducción",
  "DESC_SPECIAL_COST": "{{value}}p para el especial",
  "DESC_DISTANCE": "{{value}} Distance Units",
  "DESC_QUICK_RESPAWN": "Tiempo de reaparición cuando te liquidan sin liquidar a otros",
  "UNIT_DISTANCE_UNITS_PER_FRAME": "Unidades de distancia / frame",

  // The "unit" weapons fire in
  // Used in phrases like "200 shots to empty"
  "SHOT_UNIT_SHOT": "Disparo",
  "SHOT_UNIT_SHOT_PLURAL": "Disparos",
  "SHOT_UNIT_FLICK": "Barrido",
  "SHOT_UNIT_FLICK_PLURAL": "Barridos",
  "SHOT_UNIT_FLICK_HORIZ": "Barrido horizontal",
  "SHOT_UNIT_FLICK_HORIZ_PLURAL": "Barridos horizontales",
  "SHOT_UNIT_FLICK_VERT": "Barrido vertical",
  "SHOT_UNIT_FLICK_VERT_PLURAL": "Barridos verticales",
  "SHOT_UNIT_SLOSHER": "Cubazo",
  "SHOT_UNIT_SLOSHER_PLURAL": "Cubazos",
  "SHOT_UNIT_CHARGER": "Disparo cargado",
  "SHOT_UNIT_CHARGER_PLURAL": "Disparos cargados",

  // Future feature - ink breakdown
  //// Combined with SHOT_UNIT
  "INK_BREAKDOWN_SHOTS_AFTER_SUB": "{{unitPlural}} tras sec.: {{value}}",
  "INK_BREAKDOWN_TOTAL_SHOTS": "{{value}} para descarga",
  "INK_BREAKDOWN_INK_PER_SHOT": "{{value}}/{{unit}}",
  "INK_BREAKDOWN_INK_PER_SECOND": "{{value}}/por segundo",
  "INK_BREAKDOWN_RECOVERY": "Tiempo completo de recuperación",

  // Future feature - Comeback/Tenacity/
  "HEADER_WITH_ABILITY": "{{ability}} Estadísticas",

  // Future feature - a few explanations
  "UI_DISTANCE_EXPLANATION": "La unidad de distancia por frame es una unidad de medida de velocidad en el juego.",
  "UI_DISTANCE_EQUIVALENT": "Cada línea de la zona de prueba se encuentra a unas 50 unidades de distancia.",
  "UI_FRAMES_EXPLANATION": "Un segundo son 60 frames.",

  // Future feature - options
  "UI_OPTIONS": "Opciones",
  "UI_ENABLE_UNRELEASED": "Habilitar armas no liberadas",
  "UI_UNRELEASED_DISCLAIMER": "Las estadísticas de las armas no liberadas pueden ser inexactas.",
  "UI_UNRELEASED_WEAPONS": "Armas no liberadas",
  // Future feature - gear tabs
  "UI_SPLATNET_GEAR": "Equipo SplatNet",
  "UI_STANDARD_GEAR": "Equipo básico",
  "UI_UNRELEASED_GEAR": "Equipo no liberado",
  // Future feature - set saving
  "UI_LOADOUT": "Equipamiento",
  "UI_SAVE_LOADOUT": "Guardar equipamiento",
  "UI_LOAD_LOADOUT": "Cargar equipamiento",
  "UI_SAVE": "Guardar",
  "UI_LOAD": "Cargar",
  "UI_NAME": "Nombre",
  "UI_ENTER_NAME": "Introduzca un nombre para este equipamiento:",
  "UI_ERROR_NAME_TOO_LONG": "El número de caracteres de este nombre debe ser inferior a 20.",
  "UI_ERROR_DUPLICATE_NAME": "Ya posees un equipamiento con este nombre.",
  "UI_ERROR_INVALID_NAME": "Por favor, escoja un nombre diferente.",
  "UI_DELETE_LOADOUT": "Eliminar equipamiento",
  "UI_DELETE": "Eliminar",
  "UI_VERIFY": "¿Estás seguro?",
  "UI_SAVED_LOADOUTS": "Guardar equipamientos",
  "UI_DELETE_ALL": "Eliminar todos los equipamientos",

  // This goes in the "about" popup.
  /// Leave the HTML tags alone.
  "UI_ABOUT_CONTENT": `Creado principalmente con AngularJS 1.6.5 y Bootstrap 3.<br><br>
 Esta herramienta fue desarrollada utilizando información y recursos extraídos de <a href="https://twitter.com/LeanYoshi" target="_blank">Lean</a>, así como de información proporcionada por varios miembros de Inkademy y de los servidores de desarrolladores de Splatoon en Discord.
  <br><br>¡Agradecimientos a todos los que me prestaron su ayuda e información!<br><br>
  Muchas de las fórmulas usadas puedes verlas en <a href="https://splatoonwiki.org/wiki/User:Heddy/Charts" target="_blank">Heddy's charts</a> en Inkipedia.<br><br>
  Puedes dejar cualquier sugerencia, informe de error o comentario en el apartado "issues" de la página <a href="https://github.com/DeviPotato/splat2-calc" target="_blank">GitHub</a>. <br> del proyecto
  También puedes contactarme a través del <a href="https://twitter.com/loadout_ink" target="_blank">twitter</a>.` del proyecto
