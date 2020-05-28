## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
- install Jasmine for BDD 

## Description
 -Tests are separated in tests suites
- From the command line you can easily switch between tests. Run tests: using commands like `protractor protractor.conf.js --suite settings` in order to navigate to settings page and change provider and click apply. Verification that Login page is displayed is also performed
-Running `protractor protractor.conf.js --suite login` user navigates to login page and complete email and password inputs. There, a verification is made that user is actually logged in, by checking that correct user information is displayed on Homepage
-When running `protractor protractor.conf.js --suite files` user navigates to Files page, create a new folder using Github username, verification that folder is created is made; try to create existing folder with Github username and delete the folder
## Explanation
-Page Objects model is used. Every page is implemented in separate file (e:g Login, Settings pages and Files)


