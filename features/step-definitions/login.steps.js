const { Given, When, Then } = require('@wdio/cucumber-framework')
import SecurePage from '../pageobjects/secure.page';
import LoginPage from '../pageobjects/login.page';

Given(/^I am on the login page$/, async () => {
    await browser.url('https://kasirdemo.belajarqa.com')
});

When(/^I login with email (.*) and password (.*)$/, async (email, password) => {
	await LoginPage.login(email, password)
});

When(/^I click button login$/, async () => {
	await LoginPage.btnSubmit.click()
});

Then(/^I must navigate to dashboard page$/, async() => {
	await expect(SecurePage.flashAlert).toExist();
});

Then(/^I should see a flash message saying (.*)$/, async(message) => {
	await LoginPage.getErrMsgIncorrectPass(message)
});