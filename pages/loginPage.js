'use strict';
function loginPage() {
    
    var username=element(By.id('username'));
    var password=element(By.id('password'));
    var loginButton=element(By.id('login-button'));
    var userInfo=element(By.id('adf-userinfo-ecm-name-display'));
  
    
    
    this.enterUsername=function(user){

       username.sendkeys(user);
    };

    this.enterPassword=function(pass){

         password.sendkeys(pass);
    };
    
    this.clickLogin=function(){
         loginButton.click();
    };

    this.getuserInfoText=function() {
         userInfo.getText();
      };
};
module.exports=loginPage;