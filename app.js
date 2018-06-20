class User {
  constructor(email,name){
    this.email  = email;
    this.name   = name;
    this.score  = 0;
  }

  login(){
    console.log(this.email, 'just logged in');
    return this;
  }

  logout(){
    console.log(this.name, 'just logged out');
    return this;
  }

  updateScore(){
    this.score++;
    console.log(this.email, 'score is now' , this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user){
    users = users.filter(u => {
      return u.email != user.email
    });
  }
}

var userOne = new User('haidi@gmail.com','haidi');
var userTwo = new User('andi@gmail.com','andi');
var admin   = new Admin('keren@gmail.com','keren');

var users = [userOne, userTwo, admin];

userTwo.deleteUser(userOne); // won't work

console.log(users);
