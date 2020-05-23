var loginPage=function() {
    var username=element(By.id('username'));
    var password=element(By.id('password'));
    var loginButton=element(By.id('login-button'));
    var userInfo=element(By.id('adf-userinfo-ecm-name-display'));

    
    this.get = function async () {
        await browser.driver.manage().window().maximize();
        await browser.get('http://qaexercise.envalfresco.com/login');

    };
 

    this.enterUsername=  async function(user){

        await username.sendkeys(user);
    };

    this.enterPassword= async function(pass){

        await password.sendkeys(pass);
    };
    
    this.clickLogin=async function(){
        await loginButton.click();
    };

    this.getuserInfoText = function() {
        return userInfo.getText();
      };
};
module.exports=new loginPage();