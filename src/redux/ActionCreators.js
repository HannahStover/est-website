import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchClients = () => dispatch => {
  dispatch(clientsLoading());
  return fetch(baseUrl + 'clients')
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
    .then(clients => dispatch(addClients(clients)))
    .catch(error => dispatch(clientsFailed(error.message)));
};

export const clientsLoading = () => ({
  type: ActionTypes.CLIENTS_LOADING
});

export const clientsFailed = errmess => ({
  type: ActionTypes.CLIENTS_FAILED,
  payload: errmess
});

export const addClients = clients => ({
  type: ActionTypes.ADD_CLIENTS,
  payload: clients
});
