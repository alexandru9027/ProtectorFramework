var settingsPage=require('../pages/settingsPage');


describe('access Settings page', function() {
  it('change provider and click Appy', function() {
    
    settingsPage.get();
    settingsPage.clickProvider();
    settingsPage.selectOptionECM();
    settingsPage.clickApply();
    settingsPage.verifyLoginPageDisplayed();

    browser.sleep(3000);
   
   //browsert.restart();
  });
});

