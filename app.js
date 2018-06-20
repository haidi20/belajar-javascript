var userOne = {
  email: 'haidi@gmail.com',
  name: 'haidi',
  login(){
    console.log(this.email, 'has logged in');
  },
  logout(){
    console.log(this.email, 'has logged out');
  }
};

var prop = 'name'

userOne.age = 25;
userOne.logInfo = function () {
  console.log(this.name, this.age, this.email);
}

userOne.logInfo();
userOne.login();
userOne.logout();
