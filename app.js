class User {
  constructor(email, name){
    this.email  = email;
    this.name   = name;
    this.score  = 0;
  }

  login(){
    console.log(this.email, 'just logged in');
  }

  logout(){
    console.log(this.email, 'just logged out');
  }

  updateScore(){
    this.score++;
    console.log(this.email, 'score is now' , this.score);
    return this;
  }
}

var userOne = new User('haidi@gmail.com','haidi');
var userTwo = new User('andi@gmail.com','andi');

userOne.updateScore().updateScore().logout().login();

console.log(userOne);
