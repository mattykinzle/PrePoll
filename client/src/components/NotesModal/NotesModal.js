import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

function NotesModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
  }

  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Candidate Notes
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.TItle>Candidate Notes</Modal.TItle>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default NotesModal;