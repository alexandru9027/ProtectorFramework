var loginPage=require('../pages/loginPage');
describe ('Test login functionality', function() {
    it ('insert username and password and then login', async function() {
         await loginPage.get();
         browser.sleep(2000);
          await loginPage.enterUsername('guest@example.com');
         await loginPage.enterPassword('Password');
         await loginPage.clickLogin();

         expect(await loginPage.getuserInfoText()).toEqual('Guest Guest');

        browser.sleep(3000);

    });
});
