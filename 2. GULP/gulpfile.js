var gulp = require('gulp');
gulp.task('default', function() {
    gulp.watch('src/**/*', ['default']);
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dest'))
});