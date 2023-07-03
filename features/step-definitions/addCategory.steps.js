const { Given, When, Then } = require('@wdio/cucumber-framework')
import LoginPage from '../pageobjects/login.page';
import CategoryPage from '../pageobjects/category.page';

Given(/^I login with email (.*) and password (.*)$/, async (email, password) => {
	await LoginPage.open();
	await LoginPage.login(email, password)
	await LoginPage.btnSubmit.click()
});

When(/^I click on the "Kategori" menu$/, async () => {
	await CategoryPage.categoriesMenu.click()
});

When(/^I click on the button$/, async () => {
	await CategoryPage.btnTambah.click()
});

When(/^I enter the category name as (.*) and description as (.*)$/, async (categoryName,description) => {
	await CategoryPage.addCategory(categoryName, description)
});

When(/^I click button to save$/, async () => {
	await CategoryPage.btnSimpan.click()
});

Then(/^I must see a successful message$/, async() => {
	await expect(CategoryPage.successMessage).toExist();
    await expect(CategoryPage.itemDitambahkan).toExist();
});

