module.exports = function(config) {
    config.set({
        basePath: '),
        frameworks: ['jasmine'],
        files: [
            '../../bower_components/angular/angular.js',
            '../../bower_components/angular-mocks/angular-mocks.js',
            '../../bower_components/a0-angular-storage/dist/angular-storage.js',
            '../../bower_components/angular-resource/angular-resource.js',
            '../../bower_components/angular-animate/angular-animate.js',
            '../../bower_components/angular-translate/angular-translate.js',
            '../../bower_components/angular-ui-router/release/angular-ui-router.js',
            '../../app/application.js',
            '../../app/javascripts/**/*.js',
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