'use strict';

var gulp = require('gulp'),
	del = require('del'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	filter = require('gulp-filter'),
    glob = require('glob'),
	jshint = require('gulp-jshint'),
    karma = require('gulp-karma'),
	mainBowerFiles = require('main-bower-files'),
	minifyCss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch');

var config = {
	paths: {
		assets: './www/assets',
		app: './app',
		dist: './www',
		fonts: './app/fonts',
		images: './app/images',
		javascripts: './app/javascripts',
		jshint: './.jshintrc',
		stylesheets: './app/stylesheets',
		templates: './app/templates',
        tests: './test',
        vendor: './vendor',
		fontAwesomeFonts: './bower_components/font-awesome/fonts/**/*',
		fontAwesome: './bower_components/font-awesome/**/*'
	},
	filters: {
		js: filter('*.js'),
		css: filter('*.css'),
		images: filter(['*.png', '*.jpg', '*.jpeg']),
		fonts: filter(['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2'])
	},
};

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: config.paths.dist
		},
		open: true
	});
});

gulp.task('templates', function () {
	return gulp.src([config.paths.app + '/index.html', config.paths.templates + '/**/*.html'], {base: config.paths.app})
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('javascripts', function () {
	return gulp.src([config.paths.javascripts + '/application.js', config.paths.javascripts + '/**/*.js'])
		.pipe(jshint('./.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(sourcemaps.init())
		.pipe(concat('application.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.assets + '/javascripts'));
});

gulp.task('stylesheets', function () {
	return gulp.src(config.paths.stylesheets + '/application.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(concat('application.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.assets + '/stylesheets'));
});

gulp.task('images', function () {
	return gulp.src([config.paths.images + '/**/*'])
		.pipe(gulp.dest(config.paths.assets + '/images'));
});

gulp.task('icons', function() {
	return gulp.src(config.bowerDir + '/font-awesome/fonts/**/*')
		.pipe(gulp.dest(config.paths.assets + '/fonts'));
});

gulp.task('fonts', function () {
	return gulp.src(config.paths.fonts + '/**/*')
		.pipe(gulp.dest(config.paths.assets + '/fonts'));
});

gulp.task('clean', function (done) {
	del(config.paths.dist + '/**/*', done);
});

gulp.task('vendor', function () {
    var customVendorFiles = glob.sync(config.paths.vendor + '/**/*'),
		fontAwesomeFiles = glob.sync(config.paths.fontAwesome),
    	files = mainBowerFiles().concat(customVendorFiles).concat(fontAwesomeFiles);
    return gulp.src(files)
		.pipe(config.filters.js)
		.pipe(concat('vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.paths.assets + '/javascripts'))
		.pipe(config.filters.js.restore())

		.pipe(config.filters.css)
		.pipe(concat('vendor.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(config.paths.assets + '/stylesheets'))
		.pipe(config.filters.css.restore())

		.pipe(config.filters.fonts)
		.pipe(gulp.dest(config.paths.assets + '/fonts'))
		.pipe(config.filters.fonts.restore())

		.pipe(config.filters.images)
		.pipe(gulp.dest(config.paths.assets + '/images'));
});

gulp.task('watch', ['browser-sync'], function () {
	watch(config.paths.dist + '/**/*', {verbose: false}, browserSync.reload);
	gulp.watch(config.paths.stylesheets + '/**/*.scss', ['stylesheets']);
	gulp.watch(config.paths.javascripts + '/**/*.js', ['javascripts']);
	gulp.watch(config.paths.images + '/**/*.*', ['images']);
	gulp.watch([config.paths.templates + '/**/*.html', config.paths.app + '/index.html'], ['templates']);
});

gulp.task('test', function() {
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: config.paths.tests + '/_config/karma.config.js',
            action: 'run'
        })).on('error', function(err) { throw err; });
});

gulp.task('autotest', function() {
    //return gulp.src('./foobar')
    //    .pipe(karma({
    //        configFile: config.paths.tests + '/_config/karma.config.js',
    //        action: 'watch'
    //    }));
});

gulp.task('build', ['clean'], function () {
	gulp.start('stylesheets', 'javascripts', 'images', 'fonts', 'vendor', 'templates');
});

gulp.task('default', ['clean'], function () {
	gulp.start('autotest', 'watch', 'stylesheets', 'javascripts', 'images', 'fonts', 'icons', 'vendor', 'templates');
});
