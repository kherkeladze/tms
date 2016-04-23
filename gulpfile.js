var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlMin = require('gulp-htmlmin');

gulp.task('indexFile', function() {
    gulp.src('./public/src/index.html').
        pipe(htmlMin({ collapseWhitespace: true })).pipe(gulp.dest('./public/generated/'));
});

gulp.task('pages', function() {
    gulp.src('./public/src/pages/*.html').
    pipe(htmlMin()).pipe(gulp.dest('./public/generated/pages/'));
});

gulp.task('scripts', function() {
    gulp.src('./public/src/js/*.js').
    pipe(uglify({ mangle: false })).pipe(gulp.dest('./public/generated/js/'));
});


gulp.task('watcher', function () {
    gulp.watch('./public/src/index.html', ['indexFile']);
    gulp.watch('./public/src/pages/*.html', ['pages']);
    gulp.watch('./public/src/js/*.js', ['scripts']);
});