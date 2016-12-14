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


// Postcss plugins
var plugins = [
    stylelint(),
    autoprefixer({browsers: ['> 1%'], cascade: false}),
    // Pretty reporting config
    reporter({
        clearMessages: true,
        throwError: false
    })
];


gulp.task('style:lint', function(){
    return gulp.src([
        './src/sass/*.scss',
        '!.src/sass/vendor/**.*.scss'
    ])
    .pipe(postcss(plugins, {syntax: syntax_scss}))

});


// Task: Compile sass into CSS, compress and auto-inject into browsers
gulp.task('style', ['style:lint'] ,function() {
	return gulp.src([
			'./src/sass/*.scss',
			'!.src/sass/**/_*.scss'
		])
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				sourceComments: 'map',
				errLogToConsole: true
			}).on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(minify({sourceMap: true}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});