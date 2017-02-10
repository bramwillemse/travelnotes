'use strict';

// Javascript
// Required modules
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var debug = require('gulp-debug');

var browserify = require('browserify');
var babelify = require('babelify');

var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync');
var reload = browserSync.reload;


// Main scripts task
//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task('scripts', /*['scripts:lint'],*/ function(){
    return browserify({
        entries: ['./src/scripts/app.js'],
        debug: true // sourcemaps! 
    })
        .transform(babelify.configure({
            presets : ['es2015'],
            sourceMaps: true
        }))
        .bundle()
    .pipe(source('app.js'))
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(sourcemaps.init())
    .pipe(plumber())    
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min',
        sourceMaps: true
    }))
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(sourcemaps.write('.'))
    .pipe(reload({stream:true}))
});


// Sub-task Linting
gulp.task('scripts:lint', function() {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(eslint());
});
