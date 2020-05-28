var login=require('..//pages/login');
var homepage=require('../pages/homePage');
var files=require('../pages/filesPage');
var GitHubUserName="alexandru9027";

describe('Create new folder test from File Page', function() {
    it('verify folder name is created and then delete it', function() {
        browser.driver.manage().window().maximize();
        browser.get('http://qaexercise.envalfresco.com/login');
        browser.waitForAngular();
  
        login.username.sendKeys("guest@example.com");
        login.password.sendKeys("Password");
        login.loginButton.click();

        homepage.ContentService.click();
        browser.sleep(2000);
        browser.waitForAngular();

        //click on Create
        files.NewFolder.click();

        browser.waitForAngular();

        var EC = protractor.ExpectedConditions;
        //verify dialog panel is displayed
        browser.wait(EC.visibilityOf(files.DialogPanel),3000);
        expect(files.DialogPanel.isPresent()).toBeTruthy();

        //introduce username user
        files.FolderName.sendKeys(GitHubUserName);

        //click on Create button from dialog
        files.CreateFolderButtonUsingGithubUser.click();
        browser.waitForAngular();

        //verify folder with username alexandru9027 is created
        expect(element.all(by.xpath("//span[text()='alexandru9027']")).count()).toBeGreaterThan(0);
        //select created folder
        files.FolderLine.click();

        //try to create a folder with an existing name
        files.NewFolder.click();
        files.FolderName.sendKeys(GitHubUserName);
        files.CreateFolderButtonUsingGithubUser.click();
        files.CancelFolderCreation.click();

        //press delete button
        files.Delete.click();
        
        browser.sleep(3000);
        



    });


});
