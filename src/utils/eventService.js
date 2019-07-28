import tokenService from "./tokenService";

const BASE_URL = '/api/events/';

function index() {
  return fetch(BASE_URL, {
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    })
}).then(res => res.json())
.catch(err => console.log(err));
}


export default {
  index
};