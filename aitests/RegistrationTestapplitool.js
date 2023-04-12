import { ClientFunction } from "testcafe";
import homePage from "./pages/homePage";
import registerPage from "./pages/registerPage";
import loginPage from "./pages/loginPage";
import customerPage from "./pages/customerPage";
import Eyes from "@applitools/eyes-testcafe";

const eyes = new Eyes();

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'ailene'+randomNumber+'@test.com';

fixture ("Registration Fixture")
.page(URL)
.afterEach(async () => eyes.close())
.after(async () => eyes.waitForResults(true));
test('Assert Home Page Test',async t =>{
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(homePage.subtitleHeader.exists).ok();
});

test('User Registration and Login Test', async t => {
    await eyes.open({
        appName: 'TestCafe!',
        testName: 'User Registration and Login Test',
        browser: [{ width: 800, height: 600, name: 'chrome' }],
        t
    });
    await eyes.checkWindow('Home Page');
    await t
    .click(homePage.RegisterLink)
    .expect((getURL())).contains('register')
    await eyes.checkWindow('Registration Page');
    await t
    .click(registerPage.GenderOption)
    .typeText(registerPage.FirstName,'Ailene')
    .typeText(registerPage.LastName,'Nabil');
    
    await registerPage.selectDay('5');
    await registerPage.selectMonth('November');
    await registerPage.selectYear('1983');
    await t
    .typeText(registerPage.Email,userEmail)
    .typeText(registerPage.Password,'123456')
    .typeText(registerPage.ConfirmPassword,'123456')
    .click(registerPage.RegisterButton)
    await eyes.checkWindow('Success Page');
    await t
    .expect(registerPage.Successfulmessage.exists).ok()
    //.click(homePage.LogoutLink)
    .click(homePage.LoginLink)
    .expect(loginPage.accountHeader.exists).ok()
    .typeText(loginPage.emailInput,userEmail)
    .typeText(loginPage.passwordInput,'123456')
    .click(loginPage.submitButton)
    //Go to my Account
    .click(homePage.MyAccountLink)
    //check Orders is displayed
    .expect(customerPage.ordersLink.exists).ok()
    .click(customerPage.ordersLink)
    .expect(customerPage.noOrdersLabel.exists).ok()
    .takeScreenshot();

})