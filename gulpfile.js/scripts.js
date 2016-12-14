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

var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync');
var reload = browserSync.reload;


// Settings
var uglifyOptions = {
        mangle: true,
        output: { beautify: false },
        outSourceMap: true
    };


// Main scripts task
//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task('scripts', ['scripts:lint'], function(){
    return browserify({
        entries: ['./src/scripts/main.js'],
        debug: true
    })
    .transform(babelify.configure({
        presets : ['es2015'],
        sourceMaps: true
    }))
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify(uglifyOptions))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(sourcemaps.write('.'))
    .pipe(reload({stream:true}))
});


// Sub-task Linting
gulp.task('scripts:lint', function() {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(eslint());
});
