import React, { Component } from 'react';
// import Main from './components/MainComponent';
import logo from './logo.svg';
import './App.css';
import { callAPI } from './redux/ActionCreators';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'read-redux';
// import { ConfigureStore } from './redux.configureStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:900/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'></img>
          <h1 className='App-title'>Welcome to react</h1>
        </header>
        <p className='App-intro'>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;

// const store = ConfigureStore();

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>
//           <div>
//             <Main />
//           </div>
//         </BrowserRouter>
//       </Provider>
//     );
//   }
// }

// export default App;
