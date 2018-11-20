import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { renderModal } from './Modal';
import { createInitFormData } from '../../../redux/form/helpers';
import { myStore } from '../../../../src/App';
import ENV from '../../../constants/environment/environment';
import { dispatchSignInUser } from '../../../redux/action/auth';

import './style.scss';

const formName = 'header';
const RESOURCE = '/users';
export const initFormData = createInitFormData(formName);

const requestLogin = payload => axios.post(ENV.apiUrl + `${RESOURCE}/login`, payload);

const formToAPi = data => {
  return {
    email: data.username,
    password: data.password,
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  async onValidate(data) {
    requestLogin(formToAPi(data))
      .then(({ data }) => {
        console.log({ data });
        this.props.dispatchSignInUserFunction(data);
      })
      .catch(error => {
        console.log({ error });
      });
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
    console.log('props', this.props);
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
        {renderModal(this.state.modal, this.toggleModal, this.props.handleSubmit, this.onValidate)}
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchSignInUserFunction: user => dispatchSignInUser(user),
};

const mapStateToProps = state => ({
  dispatch: myStore.dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: formName,
  })(Header)
);
