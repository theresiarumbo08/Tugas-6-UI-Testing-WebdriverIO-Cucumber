const Page = require('./page')

class CategoryPage extends Page {
    get categoriesMenu() { 
        return $('//div[contains(text(),"kategori")]');
    }

    get btnTambah() {
        return $('a[href="/categories/create"]')
    }

    get inputCategoryName() {
        return $('#nama')
    }

    get inputDescription() {
        return $('#deskripsi')
    }

    get btnSimpan() {
        return $('button[class="chakra-button css-l5lnz6"]')
    }

    get successMessage() {
        return $('//*[contains(text(),"success")]')
    }

    get itemDitambahkan() {
        return $('//*[contains(text(),"item ditambahkan")]')
    }

    async addCategory (categoryName, description) {
        await this.inputCategoryName.setValue(categoryName);
        await this.inputDescription.setValue(description);
    }
    
    open (path) {
        return browser.url(`https://kasirdemo.belajarqa.com`)
    }
}

module.exports = new CategoryPage();