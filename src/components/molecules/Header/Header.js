import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

import { renderModal } from './Modal';

import './style.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <div className="nav-link">
                  <Link to="/info">Info pratique</Link>
                </div>
              </NavItem>
              <Button outline color="primary" onClick={this.toggleModal}>
                Connexion
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
        {renderModal(this.state.modal, this.toggleModal)}
      </div>
    );
  }
}

export default Header;
