'use strict';
var LoginPage = require('../pages/loginPage')
describe('Protractor Demo App', function() {
    var loginPage;
    var welcomePage;
    it('should have a title', function() {
        browser.ignoreSynchronization = true;
        loginPage = new LoginPage(browser)
                            .navigate()
                            .assertPage();
    });
    it('login', function() {
        welcomePage = loginPage.doLogin('user', 'password');
    });
    it('tabs should be visible', function() {
        welcomePage = welcomePage.doValidateTabs();
    });
    it('logout', function() {
        welcomePage.doLogout();
    });


});