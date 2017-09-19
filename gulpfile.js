var gulp = require('gulp');
var translate = require('gulp-translator');

gulp.task('prep', function() {
  gulp.src(['app/*','app/**'])
    .pipe(gulp.dest('dist/en_US'))
    .pipe(gulp.dest('dist/ja_JP'))
    .pipe(gulp.dest('dist/fr_FR'))
    .pipe(gulp.dest('dist/fr_CA'))
  return gulp.src(['common/*', 'common/**'])
    .pipe(gulp.dest('dist/common'))
})

gulp.task('localize', ['prep'], function() {
  var translations = ['en_US', 'ja_JP', 'fr_FR', 'fr_CA'];
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

gulp.task('default', ['prep', 'localize'])
