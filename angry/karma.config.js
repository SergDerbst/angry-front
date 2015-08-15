module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        '../../bower_components/angular/angular.js',
        '../../bower_components/angular-mocks/angular-mocks.js',
        '../../bower_components/a0-angular-storage/dist/angular-storage.js',
        '../../bower_components/angular-resource/angular-resource.js',
        '../../bower_components/angular-ui-router/release/angular-ui-router.js',
        '../../bower_components/leaflet/dist/leaflet.js',
        '../../app/javascripts/application.js',
        '../../app/javascripts/map/*.js',
        '../../app/javascripts/auth/*.js',
        '../**/*Spec.js'
    ],
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};