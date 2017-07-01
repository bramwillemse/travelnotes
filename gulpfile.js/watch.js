'use strict';

/** 
 * TASK: WATCH
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var	reload = browserSync.reload;


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