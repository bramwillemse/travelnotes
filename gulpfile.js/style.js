'use strict';

// Stylesheets

// Required modules
var gulp            = require('gulp');
var postcss         = require('gulp-postcss');
var reporter        = require('postcss-reporter');
var syntax_scss     = require('postcss-scss');
var stylelint       = require('stylelint');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var autoprefixer    = require('autoprefixer');
var minify          = require('gulp-clean-css');
var rename          = require('gulp-rename');
var browserSync     = require('browser-sync');
var debug           = require('gulp-debug');


// PostCSS plugins
var plugins = [
        stylelint(),
        autoprefixer({browsers: ['> 1%'], cascade: false}),
        reporter({ // Pretty reporting config
            clearMessages: true,
            throwError: false
        })
    ];


// Task: Sass Compilation, compression & injection
gulp.task('style', ['style:lint'] ,function() {
	return gulp.src([
			'./src/styles/*.scss',
			'!.src/styles/**/_*.scss'
		])
        .pipe(sourcemaps.init({loadMaps: true}))
		.pipe(
			sass({
				sourceComments: 'map',
				errLogToConsole: true
			}).on('error', sass.logError))
		.pipe(gulp.dest('dist/styles'))
		.pipe(minify({sourceMap: true}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
});


// Sub task: Stylelint
gulp.task('style:lint', function(){
    return gulp.src([
        './src/styles/*.scss',
        '!.src/sass/vendor/**.*.scss'
    ])
    .pipe(postcss(plugins, {syntax: syntax_scss}))

});