import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

export const renderModal = (modal, toggleModalFunction) => {
  return (
    <Modal isOpen={modal} toggle={toggleModalFunction}>
      <ModalHeader toggle={toggleModalFunction}>Connexion</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="id">Identifiant</Label>
            <Input type="text" name="id" id="id" placeholder="ID User" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="password" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
