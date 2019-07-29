import tokenService from "./tokenService";

const BASE_URL = "/api/users/";

function signup(user) {
  console.log(`user: ${user}`)
  return fetch(BASE_URL + "signup/", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    body: JSON.stringify(user)
  }).then(res => {
      if (res.ok) return res.json();
      // duplicate username
      throw new Error("Username already taken");
    })
    .then(({ token }) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  console.log("fetching");
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    body: JSON.stringify(creds)
  }).then(res => {
      if (res.ok) return res.json();
      throw new Error("Bad Credentials");
    })
    .then(({ token }) => tokenService.setToken(token));
}

function sendInterests(data) {
  return fetch(BASE_URL + "interest", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    body: JSON.stringify(data)
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error("Interests Not Received");
  });
}

export default {
  signup,
  logout,
  login,
  getUser,
  sendInterests
};
