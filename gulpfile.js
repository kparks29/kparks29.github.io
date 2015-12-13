(function () {
	'use strict';

	var gulp = require('gulp'),
		gulpLoadPlugins = require('gulp-load-plugins'),
		plugins = gulpLoadPlugins(),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer'),
		browserify = require('browserify'),
		watchify = require('watchify'),
		babelify = require('babelify'),
		argv = require('yargs').argv,
		path = require('path'),
		bundler = browserify({
			entries: 'src/app.js',
			extensions: ['.js'],
			debug: true
		}).transform(babelify, { presets: ['es2015'] });

	function rebundle() {
		return bundler.bundle().on('error', function (err) {
			console.error(err);
			this.emit('end');
			})
			.pipe(source('build.js'))
			.pipe(buffer())
			.pipe(plugins.sourcemaps.init({ loadMaps: true }))
			.pipe(plugins.sourcemaps.write('./'))
			.pipe(gulp.dest('./build'));
	}

	gulp.task('lint', function () {
		return gulp.src([
			'src/**/*.js',
			'!src/**/*.spec.js'
			])
			.pipe(plugins.eslint())
			.pipe(plugins.eslint.format())
			.pipe(plugins.eslint.failAfterError());
	});

	gulp.task('test', function (cb) {
		var Server = require('karma').Server;
		new Server.start({ configFile: __dirname + '/karma.conf.js' }, cb);
	});

	gulp.task('build', rebundle);
	gulp.task('watch', function () {
		watchify(bundler);
		return bundler.on('update', rebundle);
	});

	gulp.task('serve', ['build', 'watch'], function () {
		return gulp.src('./')
			.pipe(plugins.webserver({
				host: 'localhost',
				port: 8000,
				livereload: {
					enable: true,
					port: 8180
				},
				directoryListing: false
			}));
	});

	gulp.task('default', ['serve']);

})();