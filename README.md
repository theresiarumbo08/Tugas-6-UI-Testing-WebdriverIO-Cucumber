# UI Automation Testing Using Cypress
Tugas 6 - Cucumber
- Making test scenarios on UI testing
- Search for the locator of a web element
- Using Cypress to create UI automation testing


#### Library for Automation Test:
1. Webdriver.io
2. Cucumber
3. Web Element Locator
4. Page Object Model

#### Installation and Configuration
1. Install node.js
2. Check npm version

#### Installing Packages
`npm init wdio`


#### WDIO Configuration Wizard:
- Local machine
- Using Cucumber
- Using Babel for the compiler
- Using spec and cucumberjs-json reporter
- Using "Wait for" to add a plugin
- Using Chrome driver to add a service
- Base URL: http://localhost

#### To run test cases, use the following command:
`npm run wdio`

To run all files/some files, you can set the configuration file `wdio.conf.js`

#### Folder structure:
1. features -> pageObjects = contains pages used in the implementation of the page object model
2. features -> .feature = contains a collection of gherkin syntax files
3. features -> stepDefinition = folder containing the generated gherkin syntax file to javascript
