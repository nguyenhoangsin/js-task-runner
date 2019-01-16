var gulp = require('gulp');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});
gulp.task('fileinclude', function() {
    return gulp.src('app/dev/*html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('app'));
});
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*', ['sass']);
    gulp.watch('app/dev/**/*', ['fileinclude']);
    gulp.watch('app/css/**/*', browserSync.reload);
    gulp.watch('app/*html', browserSync.reload);
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        port: 80
    });
});
gulp.task('default', ['sass', 'fileinclude', 'browserSync', 'watch'], function() {});