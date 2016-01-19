/*jshint esnext: true */
'use strict';

const PageObject = require('./pageObject');

class LoginPage extends PageObject{
    constructor(driver) {
        super(driver, 'https://webintg.cloudshare.com/Login.aspx', false);
    }
    /**
     * Selectors
     **/
    static get userNameTBSelector() {
        return by.id('ContentPlaceHolder1_UserName');
    }

    static get passwordTBSelector() {
        return by.id('ContentPlaceHolder1_Password');
    }

    static get loginButtonSelector() {
        return by.id('ContentPlaceHolder1_LoginButton');
    }
    /**
     * Getters
     **/
    get userNameTB() {
        return this.driver.element(LoginPage.userNameTBSelector);
    }
    get passwordTB() {
        return this.driver.element(LoginPage.passwordTBSelector);
    }
    get loginButton() {
        return this.driver.element(LoginPage.loginButtonSelector);
    }
    /**
     * Setters
     **/
    set userNameTB(value) {
        this.userNameTB.sendKeys(value);
    }
    set passwordTB(value) {
        this.passwordTB.sendKeys(value);
    }
    /**
     * Assert curent page matches page object
     */
    assertPage() {
        expect(this.driver.getTitle()).toEqual('CloudShare | Login');
        return this;
    }

    /**
     * Functions containing multiple steps
     */
    doLogin(username, password) {
        this.userNameTB = username;
        this.passwordTB = password;
        return this.clickLoginButton();
    }

    /**
     * Single step functions
     */
    clickLoginButton(){
        let WelcomePage = require('./welcomePage');
        this.loginButton.click();
        return new WelcomePage(this.driver);
    }
    
}
module.exports = LoginPage;