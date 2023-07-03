const Page = require('./page');

class LoginPage extends Page {
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get errMsgIncorrectPass(){
        return $('//*[contains(text(), "Kredensial yang Anda berikan salah")]')
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
    async getErrMsgIncorrectPass(){
        await expect(this.errMsgIncorrectPass).toBeExisting()
    }

    open (path) {
        return browser.url(`https://kasirdemo.belajarqa.com`)
    }
}

module.exports = new LoginPage();
