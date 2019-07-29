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

function addReaction(eventId, userId) {
  console.log('adding reaction');
  return fetch(`${BASE_URL}${eventId}/reactions`, {
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    method: "POST",
    body: JSON.stringify({
      user: userId
    })
  }).then(res => res.json())
  .catch(err => console.log(err));
}

function removeReaction(data) {
  return fetch(`${BASE_URL}${data.event._id}/reactions/${data.reaction._id}`, {
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    }),
    method: "DELETE"
  }).then(res => res.json())
  .catch(err => console.log(err));
}


export default {
  index,
  addReaction,
  removeReaction
};