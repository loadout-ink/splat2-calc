var gulp = require('gulp');
var translate = require('gulp-translator');
var cachebust = require('gulp-cache-bust');

gulp.task('stage', function() {
  return gulp.src(['app/*','app/**'])
    .pipe(gulp.dest('dist/staging'))
})

gulp.task('bust', ['stage'], function() {
  return gulp.src('dist/staging/index.html')
    .pipe(cachebust({
      type: 'MD5'
    }))
    .pipe(gulp.dest('dist/staging'))
})

gulp.task('localize_prep', ['bust'], function() {
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

gulp.task('default', ['stage', 'bust', 'localize_prep', 'localize'])
