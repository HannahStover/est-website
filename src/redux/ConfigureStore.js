import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Clients } from './clients';
import { Auth } from './auth';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      clients: Clients,
      auth: Auth,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
