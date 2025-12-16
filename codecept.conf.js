exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Users\\Patriota 2\\Downloads\\qafoodcompletao.apk',
      host: '127.0.0.1',
      port: 4723,
      path: '/',
      desiredCapabilities: {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'TESTE_MOBILE',
        'appium:platformVersion': '16',
        'appium:app': 'C:\\Users\\Patriota 2\\Downloads\\qafoodcompletao.apk',
        'appium:appPackage': 'com.qazandoqafood',
        'appium:appActivity': '.MainActivity'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: require('./server/bootstrap.js'),
  timeout: null,
  teardown: require('./server/teardown.js'),
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
      enable: true
    },
    retryFailedStep: {
      enable: true
    },
    htmlReporter: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*_test.js',
  name: 'Mobile-automacao'
}