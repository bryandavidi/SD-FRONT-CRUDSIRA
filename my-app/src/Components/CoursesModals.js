import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CourseModals() {
  const [show, setShow] = useState(true);

  const handleClose = () =>{
  setShow(false)
  window.location.href="/menu";
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Materia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID materia</Form.Label>
              <Form.Control type="number" placeholder="Ejemplo : 201910225" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Codigo materia</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo : 1193148979" autoFocus/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre materia</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo : Sistemas distribuidos" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Creditos
              </Form.Label>
              <Form.Control type="number" placeholder="Ejemplo : 4" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cupos</Form.Label>
              <Form.Control type="number" placeholder="Ejemplo : 20" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tipo de documento</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Estado de la materia</option>
                <option value="1">Materia Activa</option>
                <option value="2">Materia Desactivada</option>
            </select>
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

export default CourseModals;