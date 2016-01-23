'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();

gulp.task('bundle', () => {
	return browserify('./src/index.js')
	.transform('babelify', {presets: ['es2015', 'react']})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('index', () => {
	return gulp.src('./src/index.html')
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', () => {
	gulp.watch('./src/**/*.js', ['bundle']);
	gulp.watch('./src/index.html', ['index']);
});

gulp.task('default', ['bundle', 'index', 'watch'], () => {
	return browserSync.init({
		server: {
			baseDir: './dist'
		}});
});
