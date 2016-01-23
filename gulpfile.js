'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();

gulp.task('build:html', () => {
	return gulp.src('./src/**/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('build:js', () => {
	return browserify('./src/index.js')
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['build:html', 'build:js']);

gulp.task('watch', () => {
	gulp.watch('./src/**/*.js', ['build:js']);
	gulp.watch('./src/**/*.html', ['build:html']);
});

gulp.task('server', ['build'], () => {
	return browserSync.init({
		server: {
			baseDir: './dist'
		}});
});

gulp.task('default', ['server', 'watch']);

