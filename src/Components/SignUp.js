import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create new account
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="mb-1"
                type="name"
                placeholder="First Name"
                autoFocus
              />
              <Form.Control
                className="mb-1"
                type="name"
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="mb-1"
                type="email"
                placeholder="Email"
              />
              <Form.Control
                className="mb-1"
                type="password"
                placeholder="Password"
              />
              <Form.Control
                className="mb-1"
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
          </Form>
          <img className="sign-up-image" src="./Images/signup.png" alt="image" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Already have an account?
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;