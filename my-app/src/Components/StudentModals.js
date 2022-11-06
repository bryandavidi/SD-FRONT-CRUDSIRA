import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function StudentModals() {
  const [show, setShow] = useState(true);

  const handleClose = () =>{
  setShow(false)
  window.location.href="/menu";
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Codigo Estudiante</Form.Label>
              <Form.Control type="number" placeholder="Ejemplo : 201910225" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tipo de documento</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione un tipo de documento</option>
                <option value="1">Cedula</option>
                <option value="2">Pasaporte</option>
                <option value="3">Tarjeta de identidad</option>
            </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Numero de documento</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo : 1193148979" autoFocus/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo : Bryan David" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo : Ibañez Gutierrez" autoFocus/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Estado</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Estado</option>
                <option value="1">Matriculado</option>
                <option value="2">No Matriculado</option>
                </select>      
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fotografia</Form.Label>
              <Form.Control type="file" placeholder="Ejemplo : 201910225" autoFocus/>
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

export default StudentModals;