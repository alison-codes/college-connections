import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
    return fetch(BASE_URL + 'signup/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify(user)
    })
    .then(res => {
      if (res.ok) return res.json();
      // duplicate username
      throw new Error('Username already taken');
    })
    .then(({token}) => tokenService.setToken(token));
  }

  function getUser() {
    return tokenService.getUserFromToken();
  }

  function logout() {
    tokenService.removeToken();
  }
  
  
  function login(creds) {
    console.log(creds);
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify(creds)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad Credentials');
    })
    .then(({token}) => tokenService.setToken(token));
  }
  
  export default {
    signup,
    logout, 
    login,
    getUser
  };