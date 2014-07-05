"use strict";

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  safe = function(plugin) {
    return plugin.on('error', function (e) {
      $.util.log(e);
      this.emit('end');
    })
  };

gulp.task('build', function () {
  return gulp.src('src/communal.scss')
    .pipe(safe($.sass()))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.'))
    .pipe($.csso())
    .pipe($.rename('communal.min.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('src/**', ['build']);
});

gulp.task('default', ['build', 'watch']);
