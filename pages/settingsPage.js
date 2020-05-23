var settingsPage=function() {

    var provider_select_input=element(By.id('adf-provider-selector'));
    var option_ECM=element(By.id('mat-option-1'));
    var applyButton=element(By.id('host-button'));


    this.get=function(){
        browser.driver.manage().window().maximize();
        browser.get('http://qaexercise.envalfresco.com/settings');

    };

    this.clickProvider=function(){
        provider_select_input.click();
    };
    
    this.selectOptionECM=function(){
        option_ECM.click();
    };

    this.clickApply=function(){
        applyButton.click();
    };

    this.verifyLoginPageDisplayed=function(){
        var EC = protractor.ExpectedConditions;
    // Waits for the title to be 'Afrescu ADF Application'.
    browser.wait(EC.titleIs('Welcome - Alfresco ADF Application'), 5000);

    };

};
module.exports=new settingsPage();