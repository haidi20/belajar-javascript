function User(email, name){
  this.email  = email;
  this.name   = name;
  this.online = false;
  this.login  = function(){
    console.log(this.email, 'has logged in');
  };
}

var userOne   = new User('haidi@gmail.com','haidi');
var userTwo   = new User('andi@gmail.com','andi');

console.log(userOne);
userTwo.login();
