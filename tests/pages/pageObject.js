/*jshint esnext: true */
'use strict';
class PageObject {
    constructor(driver, url, isAngular) {
        driver.ignoreSynchronization = !isAngular;
        this.driver = driver;
        this.url    = url;

    }

    navigate() {
        this.driver.driver.get(this.url);
        return this;
    }

    /**
     * Assert curent page matches page object
     */
    assertPage() {}

}
module.exports = PageObject;