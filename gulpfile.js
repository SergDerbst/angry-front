'use strict';

var gulp = require('gulp'),
	del = require('del'),
	KarmaServer = require('karma').Server,
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	filter = require('gulp-filter'),
	glob = require('glob'),
	htmlify = require('gulp-angular-htmlify'),
	jshint = require('gulp-jshint'),
	ngAnnotate = require('gulp-ng-annotate'),
	mainBowerFiles = require('main-bower-files'),
	minifyCss = require('gulp-minify-css'),
	replace = require('gulp-replace'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify');

var config = {
	env: process.env.NODE_ENV,
	port: 3000,
	apiUrl: {
		active: '//localhost:8080',
		development: '//localhost:8080',
		beta: '//localhost:8080',
		production: '//localhost:8080'
	},
	paths: {
		assets: 'www/assets',
		app: 'app',
		dist: 'www',
		fonts: 'app/fonts',
		images: 'app/images',
		modules: 'app/modules',
		jshint: '.jshintrc',
		stylesheets: 'app/stylesheets',
		tests: __dirname + '/test',
		vendor: 'vendor',
		fontAwesomeFonts: './bower_components/font-awesome/fonts/**/*',
		fontAwesome: './bower_components/font-awesome/**/*',
		i18n: 'app/i18n'
	},
	htmlifyOptions: {
		customPrefixes: ['ui-']
	}
};

// Detect and set environment specific config values
if (config.env === 'production') {
	config.apiUrl.active = config.apiUrl.production;
} else if (config.env === 'beta') {
	config.apiUrl.active = config.apiUrl.beta;
}

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: config.paths.dist
		},
		port: config.port
	});
});

gulp.task('javascripts', function() {
	return gulp.src([
		config.paths.modules + '/**/module.js',
		config.paths.modules + '/app.js',
		config.paths.modules + '/**/*.js'])
		.pipe(replace(/\{\{apiUrl}}/g, config.apiUrl.active))
		.pipe(jshint('./.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(sourcemaps.init())
		.pipe(concat('application.js'))
		.pipe(ngAnnotate())
		//.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.assets + '/javascripts'))
		.pipe(browserSync.stream());
});

gulp.task('templates', function() {
	var indexFilter = filter(['index.html'], {restore: true});
	return gulp.src([config.paths.modules + '/**/*.html'])
		.pipe(indexFilter)
		.pipe(htmlify(config.htmlifyOptions))
		.pipe(gulp.dest(config.paths.dist))

		.pipe(indexFilter.restore)
		.pipe(htmlify(config.htmlifyOptions))
		.pipe(gulp.dest(config.paths.dist + '/templates'))
		.pipe(browserSync.stream());
});

gulp.task('stylesheets', function() {
	return gulp.src(config.paths.stylesheets + '/application.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(concat('application.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.paths.assets + '/stylesheets'))
		.pipe(browserSync.stream());
});

gulp.task('images', function() {
	return gulp.src([config.paths.images + '/**/*'])
		.pipe(gulp.dest(config.paths.assets + '/images'))
		.pipe(browserSync.stream());
});

gulp.task('icons', function() {
	return gulp.src(config.bowerDir + '/font-awesome/fonts/**/*')
		.pipe(gulp.dest(config.paths.assets + '/fonts'));
});

gulp.task('fonts', function() {
	return gulp.src(config.paths.fonts + '/**/*')
		.pipe(gulp.dest('www/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('i18n', function() {
	return gulp.src(config.paths.i18n + '/**/*.json', {base: config.paths.app})
		.pipe(gulp.dest(config.paths.dist))
		.pipe(browserSync.stream());
});

gulp.task('clean', function() {
	del.sync([config.paths.dist + '/**/*']);
});

gulp.task('vendor', function() {
	var mainFiles = mainBowerFiles(),
		customVendorFiles = glob.sync(config.paths.vendor + '/**/*'),
		fontAwesomeFiles = glob.sync(config.paths.fontAwesome),
		jsFilter = filter('*.js', {restore: true}),
		cssFilter =  filter('*.css', {restore: true}),
		imagesFilter =  filter(['*.png', '*.jpg', '*.jpeg'], {restore: true}),
		fontsFilter = filter(['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2'], {restore: true});
	return gulp.src(mainFiles.concat(customVendorFiles).concat(fontAwesomeFiles))
		.pipe(jsFilter)
		.pipe(concat('vendor.js'))
		//.pipe(uglify())
		.pipe(gulp.dest(config.paths.assets + '/javascripts'))
		.pipe(jsFilter.restore)

		.pipe(cssFilter)
		.pipe(concat('vendor.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(config.paths.assets + '/stylesheets'))
		.pipe(cssFilter.restore)

		.pipe(fontsFilter)
		.pipe(gulp.dest(config.paths.assets + '/fonts'))
		.pipe(fontsFilter.restore)

		.pipe(imagesFilter)
		.pipe(gulp.dest(config.paths.assets + '/images'))

		.pipe(browserSync.stream());
});

gulp.task('watch', ['stylesheets', 'javascripts', 'templates', 'images', 'fonts', 'vendor', 'i18n', 'browser-sync'], function() {
	gulp.watch(config.paths.stylesheets + '/**/*.scss', ['stylesheets']);
	gulp.watch(config.paths.modules + '/**/*.js', ['javascripts']);
	gulp.watch(config.paths.modules + '/**/*.html', ['templates']);
	gulp.watch(config.paths.images + '/**/*.*', ['images']);
	gulp.watch(config.paths.i18n + '/**/*.json', ['i18n']);
});

gulp.task('test', function(done) {
	new KarmaServer({
		configFile: config.paths.tests + '/_config/karma.config.js'
	}, done).start();
});

gulp.task('autotest', function(done) {
	new KarmaServer({
		configFile: config.paths.tests + '/_config/karma.config.js',
		singleRun: false,
		autoWatch: true,
		reporters: ['dots', 'coverage']
	}, done).start();
});

gulp.task('build', ['clean'], function() {
	gulp.start('stylesheets', 'javascripts', 'templates', 'images', 'fonts', 'icons', 'vendor', 'i18n');
});

gulp.task('default', ['clean'], function() {
	gulp.start('watch');
});
