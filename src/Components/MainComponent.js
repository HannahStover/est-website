import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import ClientDetail from './ClientDetailComponent';
import Clients from './ClientsComponent';
import Contact from './ContactComponent';
import Approach from './ApproachComponent';
import Forms from './FormsComponent';
import Footer from './FooterComponent';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchClients,
  postFeedback,
  loginUser,
  logoutUser
} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    clients: state.clients,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  fetchClients: () => {
    dispatch(fetchClients());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
  postFeedback: feedback => dispatch(postFeedback(feedback)),
  loginUser: creds => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser())
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  render() {
    const PrivateRoute = ({ component: Clients, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          loginUser.getToken() !== null ? (
            <Clients {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    const clientWithId = ({ match }) => {
      return this.props.auth.isAuthenticated ? (
        <ClientDetail
          client={
            this.props.clients.clients.filter(
              client => client._id === match.params.clientId
            )[0]
          }
          isLoading={this.props.clients.isLoading}
          errMess={this.props.clients.errMess}
        />
      ) : null;
    };

    return (
      <div className='masthead'>
        <Header
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
        />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames='page'
            timeout={300}
          >
            <Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/approach' component={Approach} />
              <Route exact path='/forms' component={Forms} />
              <Route
                exact
                path='/clients'
                component={() => <Clients clients={this.props.clients} />}
              />
              <Route path='/clients/:clientId' component={clientWithId} />
              <Route
                exact
                path='/contact'
                component={() => (
                  <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                  />
                )}
              />
              <PrivateRoute
                path='/clients'
                component={() => <Clients clients={this.props.clients} />}
                exact
              />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
