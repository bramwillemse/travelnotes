'use strict';

// Clean up all generated files

// Required modules
var gulp = require('gulp'),
	clean = require('gulp-rimraf');



// Main task
// Clean up all generated files
gulp.task('clean', [
	'clean:style',
	'clean:scripts'
]);

	// Sub-task: Clean up generated stylesheets
	gulp.task('clean:style', function() {
		return gulp.src('./dist/css/*', { read: false })
			.pipe(clean());
	});

	// Sub-task: Clean up generated scripts
	gulp.task('clean:scripts', function() {
		return gulp.src('./dist/js/*', { read: false })
			.pipe(clean());
	});

	// Sub-task: Clean up generated styleguide
	// gulp.task('clean:styleguide', function() {
	// 	return gulp.src('./dist/styleguide/*', { read: false })
	// 		.pipe(clean());

	// });
