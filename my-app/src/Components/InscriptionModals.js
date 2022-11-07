import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function InscriptionModals() {
  const [show, setShow] = useState(true);

  const handleClose = () =>{
  setShow(false)
  window.location.href="/menu";
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Inscripcion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID estudiante</Form.Label>
              <Form.Control type="number" placeholder="Ejemplo : 201910225" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID materia</Form.Label>
              <Form.Control type="number" placeholder="Ejemplo : 1193148979" autoFocus/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de inscripcion</Form.Label>
              <Form.Control type="date" placeholder="Ejemplo : Sistemas distribuidos" autoFocus/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InscriptionModals;