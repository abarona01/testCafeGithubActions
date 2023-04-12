const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { registerpage } = require('../../pages/RegisterPage');

const URL= 'https://demo.nopcommerce.com/register';
var randomNumber = Math.floor(Math.random() * 1000);

Given('I open the registration page', async function () {
    await testController.navigateTo(URL);
  });
  When('I select the gender', async function () {
   await testController.click(registerpage.RegisterPage.GenderButton());
  
  });

  When('I enter First name', async function (firstname) {
    await testController.typeText(registerpage.RegisterPage.FirstName(),firstname)
  });
  When('I enter Last Name', async function (lastname) {
    await testController.typeText(registerpage.RegisterPage.LastName(),lastname);
 
  });
  When('I select Date of Birth', async function (day) {
     await testController.click(registerpage.RegisterPage.DateOfBirthDate());
     await testController.click(registerpage.RegisterPage.ListOption().withText(day));
  });
  When('I select Month of Birth', async function (month) {
    await testController.click(registerpage.RegisterPage.MonthOfBirth());
    await testController.click(registerpage.RegisterPage.ListOption().withText(month));
  });
  When('I select Year of Birth', async  function (year) {
    await testController.click(registerpage.RegisterPage.YearOfBirth());
    await testController.click(registerpage.RegisterPage.ListOption().withText(year));
  });
  When('I enter Email', async  function (email) {
    await testController.typeText(registerpage.RegisterPage.Email(),email+randomNumber+"@test.com");
  });
  When('I enter Password', async function (password) {
    await testController.typeText(registerpage.RegisterPage.Password(),password)
 
  });
  When('I enter Confirm Password', async function (confirmpassword) {
    await testController.typeText(registerpage.RegisterPage.ConfirmPassword(),confirmpassword)
  });
  When('I click register button', async function () {
 await testController.click(registerpage.RegisterPage.RegisterButton());
  });
  Then('successful message is displayed', async function () {
 await testController.expect(registerpage.RegisterPage.Successfulmessage().exists).ok;
  });

  