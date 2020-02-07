import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Services from './ServicesComponent';
import Contact from './ContactComponent';
import Approach from './ApproachComponent';
import Forms from './FormsComponent';
import Footer from './FooterComponent';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapDispatchToProps = dispatch => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
  postFeedback: feedback => dispatch(postFeedback(feedback))
});

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/approach' component={Approach} />
          <Route exact path='/forms' component={Forms} />
          <Route exact path='/services' component={Services} />
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
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapDispatchToProps)(Main));
