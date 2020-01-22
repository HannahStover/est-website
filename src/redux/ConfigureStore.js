import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import Forms from './FormsComponent';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      forms: Forms,
      schedule: Schedule,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thnuk, logger)
  );
  return store;
};
