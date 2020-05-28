var login=require('..//pages/login');
var homepage=require('../pages/homePage');
describe ('Test login functionality', function() {
    it ('insert username and password and then login', function() {

        browser.driver.manage().window().maximize();
        browser.get('http://qaexercise.envalfresco.com/login');
        browser.waitForAngular();
  
        login.username.sendKeys("guest@example.com");
        login.password.sendKeys("Password");
      
        login.loginButton.click();
      
        //assert that user is actually logged in by verifying correct user info are displayed
        expect(homepage.UserInfo.getText()).toEqual('guest guest');
       // browser.waitForAngular();
       // browser.sleep(3000);
        //var content=element(By.css('mat-list-item[data-automation-id="Content Services"]'))
        //content.click();
       // browser.sleep(3000);
        //browser.waitForAngular();
        //var create_folder=element(By.css('button[data-automation-id="create-new-folder"]'));
       // create_folder.click();

         //login.enterPassword('Password')
       // login.clickLogin();
         //expect( login.getuserInfoText()).toEqual('Guest Guest');

        browser.sleep(3000);

    });
});
