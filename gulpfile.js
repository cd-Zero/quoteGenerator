// gulpfile created in root
  var gulp          = require('gulp'),
      watch         = require("gulp-watch"),
      postcss       = require('gulp-postcss'),
      autoprefixer  = require('autoprefixer'),
      cssvars       = require('postcss-simple-vars'),
      nested        = require('postcss-nested'),
      cssImport     = require('postcss-import');
// test gulp function
gulp.task('default', function(){
    console.log("gulp function correctly!");
});

gulp.task('css', function(){
return  gulp.src('/home/zero/Desktop/fccProjects/quote-generator/assets/css/main.css')
  .pipe(postcss([cssImport, cssvars, nested,  autoprefixer]))
  .pipe(gulp.dest('/home/zero/Desktop/fccProjects/quote-generator/temp'));
});

gulp.task('html', function(){
  console.log("html files linked");
});

// gulp-watch automation

gulp.task("watch",function(){
  watch('/home/zero/Desktop/fccProjects/quote-generator/index.html',function(){
    // detects html changes
    gulp.start('html')
  })

  watch("/home/zero/Desktop/fccProjects/quote-generator/assets/css/**/*.css",function(){
    gulp.start('css')
  })

});
