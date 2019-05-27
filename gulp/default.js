var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        'copy',
        'templates',
        'styles',
        'server',
        'copy:watch',
        'templates:watch',
        'styles:watch',
    );
});
