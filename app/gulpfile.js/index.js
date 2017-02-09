'use strict';

// Default Gulp task
// Include all gulp files
require('require-dir')('./', {recurse: true});


// Required modules
var gulp = require('gulp');


// DEFAULT TASKS
// Run local development task
gulp.task('default', [
    'style',
    'scripts',
    'serve',
    'watch'
]);