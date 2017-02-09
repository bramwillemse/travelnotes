'use strict';

// Start a server using Browsersync

// Required modules
var gulp = require('gulp'),
	browserSync = require('browser-sync');



// Task: Static Server
gulp.task('serve', function() {
    browserSync.init({
        proxy: "tvn.dev"
    });
});