import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    this.props.loginUser({
      username: this.username.value,
      password: this.password.value
    });
    event.preventDefault();
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light expand='md' sticky='top'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className='mr-auto' href='/'>
              <img src='../eds.png' height='40' width='51' alt='EDS' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/approach'>
                    Approach
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/clients'>
                    Clients
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/forms'>
                    Forms
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/contact'>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <div
                    class='fb-login-button'
                    data-width=''
                    data-size='medium'
                    data-button-type='continue_with'
                    data-auto-logout-link='true'
                    data-use-continue-as='true'
                  ></div>
                  <br></br>
                  <br></br>
                  {!this.props.auth.isAuthenticated ? (
                    <Button outline onClick={this.toggleModal}>
                      <span></span> Login
                      {this.props.auth.isFetching ? <span></span> : null}
                    </Button>
                  ) : (
                    <div>
                      <div className='navbar-text mr-3'>
                        {this.props.auth.user.username}
                      </div>
                      <Button outline onClick={this.handleLogout}>
                        <span></span> Logout
                        {this.props.auth.isFetching ? <span></span> : null}
                      </Button>
                    </div>
                  )}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Input
                  type='text'
                  id='username'
                  name='username'
                  innerRef={input => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  innerRef={input => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type='checkbox'
                    name='remember'
                    innerRef={input => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <div
                class='fb-login-button'
                data-width=''
                data-size='medium'
                data-button-type='continue_with'
                data-auto-logout-link='true'
                data-use-continue-as='true'
              ></div>
              <Button type='submit' value='submit' color='primary'>
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
