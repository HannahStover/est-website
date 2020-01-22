import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <>
        <Navbar color='light' light expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className='mr-auto' href='/'>
              <img src='' height='30' width='41' alt='Elaine D Stover' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    <span className=''></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/about'>
                    <span className=''></span> Approach
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/menu'>
                    <span className=''></span> Fees & Forms
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/contactus'>
                    <span className=''></span> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1>Elaine D Stover</h1>
                <p>marriage & family therapist</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
