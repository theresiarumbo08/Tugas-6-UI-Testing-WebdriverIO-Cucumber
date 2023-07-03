const { Given, When, Then } = require('@wdio/cucumber-framework')
import LoginPage from '../pageobjects/login.page';
import SearchCategoryPage from '../pageobjects/searchCategory.page';
import SecurePage from '../pageobjects/secure.page';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
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

When(/^I click on the "Kategori" menu$/, async () => {
	await SearchCategoryPage.categoriesMenu.click()
});

When(/^I click on the search button$/, async () => {
	await SearchCategoryPage.searchField.click()
});

When(/^I enter (.*) in the search field$/, async (query) => {
	await SearchCategoryPage.searchCategory(query)
});

Then(/^I should see the search results for (.*)$/, async (query) => {
	const searchResults = await SearchCategoryPage.getSearchResults();
	// Use assertions to verify the search results
	expect(searchResults).toHaveTextContaining(query);
});

