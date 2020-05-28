// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
     sharedTestFiles: true,
      maxInstances: 2,
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../tests/loginTests.js'],

  suites: {
    settings: '../tests/example_spec.js',
    login: '../tests/login_tests.js',
    files:'../tests/files_test.js'
  },

  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
      displaySpecDuration: true,
      // overrides jasmine's print method to report dot syntax for custom reports
      print: () => {},
      defaultTimeoutInterval: 50000
  }
};
