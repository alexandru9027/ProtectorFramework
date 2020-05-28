class filesPage{
    constructor(){
        this._newFolder=element(By.css('button[data-automation-id="create-new-folder"]'));
        this._delete=element(By.css('button[title="Delete"]'));
        this._folderName=element(By.id('adf-folder-name-input'));
        this._createFolderButton=element(By.id('adf-folder-create-button'));
        this._dialogPanel=element(By.className('mat-dialog-container'));
        this._folderLineCreated=element(By.xpath('//div[@data-automation-id="alexandru9027"]/parent::*'));
        this._existingFolder=element(By.xpath('*//simple-snack-bar/span[contains(text(),"Try a different name")]'));
        this._cancelFolderCreation=element(By.id('adf-folder-cancel-button'));
        
    
    }

    get CancelFolderCreation(){
        return this._cancelFolderCreation;
    }
    get NewFolder(){
        return this._newFolder;
    }
    get ExistingFolder(){
        return this._existingFolder;
    }

    get Delete(){
        return this._delete;
    }

    get FolderName(){
        return this._folderName;
    }
    get FolderLine(){
        return this._folderLineCreated;
    }

    get CreateFolderButtonUsingGithubUser(){
        return this._createFolderButton;
    }

    get DialogPanel(){
        return this._dialogPanel;
    }

    get 

}
module.exports=new filesPage();