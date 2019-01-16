var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
gulp.task('default', ['fileinclude'], function() {
    gulp.watch('app/dev/**/*', ['fileinclude']);
});
gulp.task('fileinclude', function() {
    return gulp.src('app/dev/*html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('app'));
});