import React from 'react';
import Main from './components/MainComponent';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'read-redux';
import { ConfigureStore } from './redux.configureStore';

const store = ConfigureStore();

function App() {
  return (
   render() {
     <Provider store={store}>
       <BrowserRouter>
         <div>
           <Main />
         </div>
       </BrowserRouter>
     </Provider>
   }
  );
}

export default App;
