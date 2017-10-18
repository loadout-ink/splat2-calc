var gulp = require('gulp');
var translate = require('gulp-translator');
var cachebust = require('gulp-cache-bust');
var connect = require('gulp-connect');
var del = require('del');

var translations = ['en_US', 'ja_JP', 'fr_FR', 'fr_CA', 'es_ES', 'es_MX'];

gulp.task('clean', function() {
  return del([
    'dist/**/*'
  ])
})


gulp.task('prep', ['clean'], function() {
  gulp.src(['common/*','common/**'])
    .pipe(gulp.dest('dist/common'))
  translations.forEach(function(lang) {
    gulp.src(['app/*','app/**'])
      .pipe(gulp.dest('dist/' + lang))
  })
  return gulp.src(['common/*', 'common/**'])
    .pipe(gulp.dest('dist/common'))
})

gulp.task('localize', ['prep'], function() {
  var options = {
    localeDirectory: 'locale/',
    localeExt: '.json'
  }

  translations.forEach(function(translation){
    options.lang = translation;
    gulp.src(['app/*.html', 'app/*.js'])
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
  return translations.forEach(function(lang) {
  gulp.src('dist/' + lang + '/index.html')
    .pipe(cachebust({
      type: 'MD5'
    }))
      .pipe(gulp.dest('dist/' + lang))
  })
})

gulp.task('webserver', function() {
  connect.server({
      root: 'dist'
  })
});

gulp.task('watch', function() {
  const watchedPaths = ['app/**', 'common/**', 'locale/**'];
  gulp.watch(watchedPaths, '', ['prep', 'localize']);
});

gulp.task('serve', ['default', 'webserver', 'watch']);

gulp.task('default', ['clean', 'prep', 'localize'])
