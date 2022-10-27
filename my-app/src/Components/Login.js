import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import  Form  from "react-bootstrap/Form";

import '../css/Login.css';

function Login (){
    return(
        <Container id="main-container" className="d-grid h-100">
            <Form id="sign-in-form" className="text-center p-3 w-100">
                <img className="mb-4 sesion-logo" 
                src = "https://cdn-icons-png.flaticon.com/512/929/929422.png"
                alt= "sesion"
                />

                <Form.Group className="mb-1">
                    <Form.Control type="text" size="lg" placeholder="usuario" autoComplete="usuario"/>
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Control type="password" size="lg" placeholder="contrasena" autoComplete="contrasena"/>
                </Form.Group>

                <div className="d-grid">
                    <Button variant="primary" size="lg">Iniciar sesion</Button>
                </div>
                <p className="mt-5">&copy; Sistemas distribuidos 2022-2</p>
            </Form>
        </Container>
    );
}

export default Login;