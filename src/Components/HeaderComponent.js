import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
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
      <React.Fragment>
        <Navbar light expand='md' sticky='top'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/approach'>
                    Approach
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/services'>
                    Services
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
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
