var gulp = require('gulp'),
  $ = require('gulp-load-plugins');

gulp.task('default', function () {
  return gulp.src('src/communal.scss')
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('.'));
});
