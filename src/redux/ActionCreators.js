import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// Contact
export const contactMe = contact => dispatch => {
  const data = {
    ...feedback,
    date: new Date()
  };

  return fetch(baseUrl + 'feedback', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .catch(error => {
      console.log('Contact Me', error.message);
    });
};
