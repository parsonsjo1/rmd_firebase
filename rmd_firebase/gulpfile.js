var gulp = require('gulp');
var util = require('gulp-util');

var browserSync = require('browser-sync').create();

var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');

var uglify = require('gulp-uglify');
var pump = require('pump');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: ["./dist/"]
        }
    });
});

gulp.task('copy-html', function() {
	return gulp.src('./angular-app/**/*.html')
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream());
});

gulp.task('copy-img', function() {
	return gulp.src('./angular-app/**/**/*.jpg')
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream());
});

gulp.task('sass', function() {
	return gulp.src('./angular-app/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('./dist/**/*.css')
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./angular-app/**/*.js'),
        uglify(),
        gulp.dest('./dist')
    ],
    cb
  );
});

gulp.task('default',['copy-html', 'copy-img', 'minify-css', 'compress', 'browser-sync'], function() {
	gulp.watch('./angular-app/**/*.html', ['copy-html']);
	gulp.watch('./angular-app/**/*.scss', ['sass','minify-css']);
	gulp.watch('./angular-app/**/*.js', ['compress']);
});