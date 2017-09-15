var gulp = require('gulp');
var translate = require('gulp-translator');

gulp.task('dist', function() {
  gulp.src(['app/*','app/**'])
    .pipe(gulp.dest('dist/en_US'))
    .pipe(gulp.dest('dist/ja_JP'))
  gulp.src(['common/*', 'common/**'])
    .pipe(gulp.dest('dist/common'))
})

gulp.task('translate', function() {
  var translations = ['en_US', 'ja_JP'];
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
