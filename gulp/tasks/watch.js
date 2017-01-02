var gulp    = require('gulp'),
watch       = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
// watches development j.s. files and fires scriptsRefresh
  watch('./app/assets/js/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

// once quoteGenerator/gulp/tasks/scripts.js is finished scriptsRefresh can fire

gulp.task('scriptsRefresh', ['scripts'], function() {
  // loads browser sync
  browserSync.reload();
});
