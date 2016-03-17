/**
 * Created by wittbulter on 16/3/17.
 */
var gulp = require('gulp'),
    rubySass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


gulp.task('sass', function () {
    return rubySass('./sass/scss/*.scss',{sourcemap: true})
        .on('error', rubySass.logError)
        .pipe(sourcemaps.write('../css',{
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('./css'))
})

gulp.task('js', function () {
    return gulp.src('./src/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function () {
    gulp.run('sass');
    gulp.watch(['./sass/scss/*.scss','./sass/components/*.scss'], function () {
        gulp.run('sass');
    })
})

gulp.task('default', function () {
    gulp.start('sass')
})