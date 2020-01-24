import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Clients } from './clients';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      clients: Clients
    }),
    applyMiddleware(thnuk, logger)
  );
  return store;
};
