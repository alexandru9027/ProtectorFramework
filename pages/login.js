class login {

    constructor(){
     this._username=element(By.id('username'));
     this._password=element(By.id('password'));
     this._loginButton=element(By.id('login-button'));
     this._userInfo=element(By.id('adf-userinfo-ecm-name-display'));
    }
    get username() {
        return this._username;
      }

      get password() {
        return this._password;
      }

      get loginButton() {
        return this._loginButton;
      }

    
}

module.exports=new login();