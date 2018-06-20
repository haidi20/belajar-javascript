class User {
  constructor(email, name){
    this.email  = email;
    this.name   = name;
  }

  login(){
    console.log(this.email, 'just logged in');
  }

  logout(){
    console.log(this.email, 'just logged out');
  }
}

var userOne = new User('haidi@gmail.com','haidi');
var userTwo = new User('andi@gmail.com','andi');

userOne.login();
userTwo.logout();
