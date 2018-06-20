var userOne = {
  email: 'haidi@gmail.com',
  name: 'haidi',
  login(){
    console.log(this.email,'has logged in');
  },
  logout(){
    console.log(this.email,'has logged out');
  }
};

userOne.login();
userOne.logout();
