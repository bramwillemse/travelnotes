'use strict';

// Required modules
var gulp = require('gulp'),
	browserSync = require('browser-sync');



// Settings
var	reload = browserSync.reload;



// Task: Static Server + watching scss/html files
gulp.task('watch', function() {
    
    // Watch Templates
    gulp.watch('./**/*.html', reload);

	// Watch Sass
    gulp.watch('./src/styles/**/*.scss', ['style']);

    // Watch scripts
    gulp.watch('./src/scripts/**/*.js', ['scripts', reload]);

    // Watch image files
    // gulp.watch('./src/img/raster/*', ['images']);

    // Watch SVG files
    // gulp.watch('./src/images/vector/*', ['svgs']);

    // Watch Styleguide
    // gulp.watch('./dist/styleguide/*', [reload]);

});