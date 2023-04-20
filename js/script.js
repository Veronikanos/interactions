import './trending-movies.js';
import './search-form.js';
import {UserData} from './service/api.js';

// fetch(
//   'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=2d95e97f255e7635245c1980eab541d3'
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const guest_session_id = data.guest_session_id;
//     console.log(guest_session_id);
//   })
//   .catch((error) => console.error(error));

document.addEventListener('load', async () => {
  // create guest session so the user can rate movies
  const userData = new UserData();
  await userData.fetchGuestSessionId();
});
