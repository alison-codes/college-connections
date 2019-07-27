const BASE_URL = '/api/users/';

function signup(user) {
    return fetch(BASE_URL + 'signup/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(user)
    })
    .then(res => {
      if (res.ok) return res.json();
      // duplicate username
      throw new Error('Username already taken');
    });
  }
  
  
  function login(creds) {
    console.log(creds);
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(creds)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad Credentials');
    });
  }
  
  export default {
    signup,
    // logout, //TODO Logout function
    login
  };