const fs = require('fs');
const createTestCafe = require('testcafe');
const testControllerHolder = require ('../support/testControllerHolder');
const {AfterAll, setDefaultTimeout, Before, After, Status} = require('@cucumber/cucumber');
const errorHandling = require('../support/errorhandling');
//const { attachScreenshotToReport } = require('./world');
//const { error } = require('console');
//const { path } = require('@ffmpeg-installer/ffmpeg');
const TIMEOUT = 20000;

let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

function createTestFile(){
    fs.writeFileSync('test.js',
    'import errorHandling from "./features/support/errorHandling.js";\n' +
    'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

    'fixture("fixture")\n' +
    'test\n' +
    '("test", testControllerHolder.capture)')

}

function runTest(iteration, browser) {
    createTestCafe('localhost')
    .then(function(tC) {
        cafeRunner = tc;
        const runner = tc.createRunner();
        return runner
        .src('./test.js')
        .screenshots('reports/screenshots/', true)
        .browsers(browser)
        .run()
        .catch(function(error){
            console.error(error);
        });
    })
.then(function(report){
});
}

setDefaultTimeout(TIMEOUT);

Before(function() {
    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController.then(function(testController) {
        return testController.maximizeWindow();

    });
});

After(function(){
    fs.unlinkSync('test.js;');
});

After(async function(testCase){
    const world = this;
    if (testCase.result.status === Status.FAILED) {
        isTestCafeError = true;
        attachScreenshotToReport = world.attachScreenshotToReport;
        errorHandling.addErrorToController();
        await errorHandling.addErrorToController();
        await errorHandling.ifErrorTakeScreenshot(testController)
    }
});

AfterAll(function() {
    let intervalId = null;

    function waitForTestCafe(){
        intervalId = setInterval(checkLastResponce, 500);
    }

function checkLastResponce() {
    if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
        cafeRunner.close();
        process.exit();
        clearInterval(intervalId);

    }
}
waitForTestCafe();
testControllerHolder.free();

});

const getIsTestCafeError = function() {
    return isTestCafeError;

};

const getAttachScreenshotToReport = function(path) {
    return attachScreenshotToReport(path);

};

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;
