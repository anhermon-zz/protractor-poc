'use strict';

var PageObject = require('./pageObject');

class WelcomePage extends PageObject{
    /**
     * Selectors
     **/
    static get userMenuSelector() {
        return by.css('.cs-top-bar-user-menu-button');
    }
    static get logOutBtnSelector() {
        return by.xpath('//a[text() = "Logout"]');
    }
    static get homeTabSelector() {
        return by.xpath('//span[@class="cs-side-menu-item-title"][text() = "Home"]');
    }
    static get environmentsTabSelector() {
        return by.xpath('//span[@class="cs-side-menu-item-title"][text() = "Environments"]');
    }
    static get cloudFoldersTabSelector() {
        return by.xpath('//span[@class="cs-side-menu-item-title"][text() = "CloudFolders"]');
    }
    static get trainingTabSelector() {
        return by.xpath('//span[@class="cs-side-menu-item-title"][text() = "Training"]');
    }
    static get usersTabSelector() {
        return by.xpath('//span[@class="cs-side-menu-item-title"][text() = "Users"]');
    }
    static get reportsTabSelector() {
        return by.xpath('//span[@class="cs-side-menu-item-title"][text() = "Reports"]');
    }
    /**
     * Getters
     **/
    get userMenu() {
        return this.driver.element(WelcomePage.userMenuSelector);
    }
    get logOutBtn() {
        return this.driver.element(WelcomePage.logOutBtnSelector);
    }
    get homeTab() {
        return this.driver.element(WelcomePage.homeTabSelector);
    }
    get environmentsTab() {
        return this.driver.element(WelcomePage.environmentsTabSelector);
    }
    get cloudFoldersTab() {
        return this.driver.element(WelcomePage.cloudFoldersTabSelector);
    }
    get trainingTab() {
        return this.driver.element(WelcomePage.trainingTabSelector);
    }
    get usersTab() {
        return this.driver.element(WelcomePage.usersTabSelector);
    }
    get reportsTab() {
        return this.driver.element(WelcomePage.reportsTabSelector);
    }

    constructor(driver) {
        super(driver, "https://webintg.cloudshare.com/Ent/VendorHome.mvc", false);
    }
    assertPageObject(){
        expect(this.driver.getTitle()).toEqual('CloudShare - Welcome');
        return this;
    }
    //high lvl functions
    doValidateTabs() {
        return this.validateHomeTab()
            .validateEnvironmentsTab()
            .validateTrainingTab()
            .validateUsersTab()
            .validateReportsTab();
    }
    doLogout() {
        let LoginPage  = require('./loginPage');
        this.clickUserMenuButton()
            .clickLogoutButton();
        return new LoginPage(this.driver);

    }
    //low lvl function
    validateHomeTab() {
        expect(this.homeTab.isPresent()).toBe(true);
        return this;
    }
    validateEnvironmentsTab() {
        expect(this.environmentsTab.isPresent()).toBe(true);
        return this;
    }
    validateTrainingTab() {
        expect(this.trainingTab.isPresent()).toBe(true);
        return this;
    }
    validateUsersTab() {
        expect(this.usersTab.isPresent()).toBe(true);
        return this;
    }
    validateReportsTab() {
        expect(this.reportsTab.isPresent()).toBe(true);
        return this;
    }
    clickUserMenuButton() {
        this.userMenu.click();
        return this;
    }
    clickLogoutButton() {
        this.logOutBtn.click();
        return this;
    }
}
module.exports = WelcomePage;