//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'assets/lib/angular/angular.js',
      'assets/lib/angular-ui-router/release/angular-ui-router.min.js',
      'assets/lib/angular-mocks/angular-mocks.js',
      'assets/lib/angular-bootstrap/ui-bootstrap.min.js',
      'app.js',
      'config.js',
      'components/**/*.js',
      'shared/**/*.js'
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