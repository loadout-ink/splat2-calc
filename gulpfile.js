var gulp = require('gulp');
var translate = require('gulp-translator');
var cachebust = require('gulp-cache-bust');

var localized_dirs = [
  'dist/en_US/',
  'dist/ja_JP/',
  'dist/fr_FR/',
  'dist/fr_CA/',
  'dist/es_ES/',
  'dist/es_MX/'
]

gulp.task('stage', function() {
  gulp.src(['common/*','common/**'])
    .pipe(gulp.dest('dist/common'))
  return gulp.src(['app/*','app/**'])
    .pipe(gulp.dest('dist/staging'))
})

gulp.task('localize_prep', ['stage'], function() {
  gulp.src(['dist/staging/*','dist/staging/**'])
    .pipe(gulp.dest('dist/en_US'))
    .pipe(gulp.dest('dist/ja_JP'))
    .pipe(gulp.dest('dist/fr_FR'))
    .pipe(gulp.dest('dist/fr_CA'))
    .pipe(gulp.dest('dist/es_ES'))
    .pipe(gulp.dest('dist/es_MX'))
  return gulp.src(['common/*', 'common/**'])
    .pipe(gulp.dest('dist/common'))
})

gulp.task('localize', ['localize_prep'], function() {
  var translations = ['en_US', 'ja_JP', 'fr_FR', 'fr_CA', 'es_ES', 'es_MX'];
  var options = {
    localeDirectory: 'locale/',
    localeExt: '.json'
  }

  translations.forEach(function(translation){
    options.lang = translation;
    gulp.src(['app/index.html', 'app/modals.js', 'app/stats.js'])
      .pipe(
        translate(options)
        .on('error', function(){
          console.error(arguments);
        })
      )
      .pipe(gulp.dest('dist/' + translation));
    gulp.src('app/data/weapons.js')
      .pipe(
        translate(options)
        .on('error', function(){
          console.error(arguments);
        })
      )
      .pipe(gulp.dest('dist/' + translation + '/data'));
  });
});


gulp.task('bust', function() {
  return localized_dirs.forEach(function(dir) {
  gulp.src(dir + 'index.html')
    .pipe(cachebust({
      type: 'MD5'
    }))
      .pipe(gulp.dest(dir))
  })
})

gulp.task('default', ['stage', 'localize_prep', 'localize'])
