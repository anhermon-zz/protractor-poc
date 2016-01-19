exports.config = {
    framework: 'jasmine2',
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'reports',
            filePrefix: 'xmloutput'
        }));
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/spec.js']
}