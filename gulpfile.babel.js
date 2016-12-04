'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify({
          insertGlobals: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss')
       .pipe(sass())
       .pipe(concat('main.css'))
       .pipe(gulp.dest('dist/css'));
});

gulp.task('default', () => {
    gulp.start(['js', 'sass']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
});