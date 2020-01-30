import * as ActionTypes from './ActionTypes';

export const Clients = (
  state = {
    isLoading: true,
    errMess: null,
    clients: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.CLIENTS_LOADING:
      return { ...state, isLoading: true, errMess: null, clients: [] };

    case ActionTypes.CLIENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        clients: []
      };

    case ActionTypes.ADD_CLIENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        clients: action.payload
      };

    default:
      return state;
  }
};
