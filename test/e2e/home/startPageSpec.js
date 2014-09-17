// spec.js
describe('Start Page', function() {

    beforeEach(function(){
        browser.get("http://localhost:8100/");
        browser.sleep(3000);
    });

    it('should first load the login url', function() {

        expect(browser.getTitle()).toEqual('http://localhost:8100/#/app/login');
    });

});