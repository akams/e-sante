import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { Field } from 'redux-form';
import renderInputReduxForm from '../../atomes/Input/Input';

export const renderModal = (
  modal,
  toggleModalFunction,
  handleSubmitFunction,
  onValidateFunction
) => {
  return (
    <Modal isOpen={modal} toggle={toggleModalFunction}>
      <ModalHeader toggle={toggleModalFunction}>Connexion</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Field
              name="username"
              type="text"
              label="Identifiant"
              placeholder="identifiant"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="password"
              type="password"
              label="Password"
              typeLabel="password"
              placeholder="password"
              component={renderInputReduxForm}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
          <Button onClick={handleSubmitFunction(onValidateFunction)}>Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
