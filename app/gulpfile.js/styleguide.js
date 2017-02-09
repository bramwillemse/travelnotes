'use strict';

// Generated styleguide
// Based on Sass documentation

// required modules
var gulp = require('gulp'),
    shell = require('gulp-shell');



// Default task
gulp.task('styleguide', [
    'clean:styleguide',
    'styleguide:generate'
]);



    // Generate styleguide using KSS shell task
    gulp.task('styleguide:generate', shell.task([
        'kss-node --config kss-config.json',
    ]));