const Page = require('./page')

class SearchCategoryPage extends Page {
    get categoriesMenu() { 
        return $('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)');
    }

    get searchField() {
        return $('input[placeholder="cari"]')
    }

    async addCategory (categoryName, description) {
        await this.inputCategoryName.setValue(categoryName);
        await this.inputDescription.setValue(description);
        await this.btnSimpan.click();
    }

    async searchCategory(query){
        await this.searchField.setValue(query);
    }

    async getSearchResults() {
        const results = await $$('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/table/tbody');
        const searchResults = [];
        for (const result of results) {
          searchResults.push(await result.getText());
        }
        return searchResults;
      }

    open (path) {
        return browser.url(`https://kasirdemo.belajarqa.com`)
    }
}

module.exports = new SearchCategoryPage();