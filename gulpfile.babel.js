'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const jasmine = require('gulp-jasmine');

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('browserify', ['default'], function () {
    gulp.src('dist/main.js')
        .pipe(browserify({
          insertGlobals: true,
          debug: !gulp.env.production
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('js', function () {
    runSequence(['default', 'browserify']);
    gulp.run('sass');
    gulp.run('jasmine');
});

gulp.task('sass', () => {
    gulp.src('src/sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('dist/css'));
});
 
gulp.watch(['src/**'], function () {
    gulp.run('js');
});

gulp.task('jasmine', () =>
    gulp.src('spec/test.js')
        .pipe(jasmine())
);

gulp.task('sass:watch', () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});