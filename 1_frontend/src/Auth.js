class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(callback) {
    this.authenticated = true;
  }

  logout(callback) {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();

// const Auth = {
//     authenticated: false,
//     login: function (callback) {
//       Auth.authenticated = true;
//     },
//     logout: function (callback) {
//       Auth.authenticated = false;
//     },
//     isAuthenticated: function () {
//       return this.authenticated;
//     },
//   };

//   export default Auth;
