'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify({
          insertGlobals: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    gulp.run('default','sass');
});

gulp.task('sass', () => {
    gulp.src('src/sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('dist/css'));
});
 
gulp.watch(['src/**'], function () {
    gulp.run('js');
});

gulp.task('sass:watch', () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});