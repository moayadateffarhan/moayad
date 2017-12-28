// Karma configuration file, see link for more information
<<<<<<< HEAD
// https://karma-runner.github.io/1.0/config/configuration-file.html
=======
// https://karma-runner.github.io/0.13/config/configuration-file.html
>>>>>>> 4268e33e0131d4f2b2013d44c5a00ccda987a421

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
<<<<<<< HEAD
=======
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
>>>>>>> 4268e33e0131d4f2b2013d44c5a00ccda987a421
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
<<<<<<< HEAD
    reporters: ['progress', 'kjhtml'],
=======
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul']
              : ['progress', 'kjhtml'],
>>>>>>> 4268e33e0131d4f2b2013d44c5a00ccda987a421
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
