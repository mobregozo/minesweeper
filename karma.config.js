//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'assets/lib/angular/angular.js',
      'assets/lib/angular-route/angular-route.js',
      'assets/lib/angular-mocks/angular-mocks.js',
      'app.js',
      'config.js',
      'components/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};