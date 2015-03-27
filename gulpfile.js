var gulp = require('gulp');
var coffee = require('gulp-coffee');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var server = require('gulp-server-livereload');

gulp.task('default', function() {
  gulp.src('src/*.coffee')
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));

  gulp.src('src/*.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
  gulp.src('.')
    .pipe(server(({
      livereload: true,
      directoryListing: true,
      open: true
    })));
});
