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
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


// Main scripts task
// Convert ES6 ode in all js files in src/js folder and copy to
// build folder as bundle.js
gulp.task('scripts', /*['scripts:lint'],*/ function(){
     return browserify({entries: './src/scripts/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/scripts'))
    .pipe(reload({stream:true}))
});


// Sub-task Linting
gulp.task('scripts:lint', function() {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(eslint());
});
