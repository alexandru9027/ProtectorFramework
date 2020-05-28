class homePage{
    constructor(){
        this._ContentService=element(By.css('mat-list-item[data-automation-id="Content Services"]'));
        this._userInfo=element(By.id('adf-userinfo-ecm-name-display'));
    }
    get ContentService(){
        return this._ContentService;
    }

    get UserInfo(){
        return this._userInfo;
    }
}
module.exports=new homePage();