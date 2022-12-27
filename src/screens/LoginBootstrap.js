import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginBT.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function telaLogin() {
    return (
        <Container>
            <Row className='main'>
                <Col className='banner_login'>

                </Col>
                <Col className='form-login'>
                    <Form>
                        <h2>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Informe seu e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Informe sua senha" />
                        </Form.Group>
                       
                        <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size='lg'>
                            Acessar
                        </Button>
                        </div>
                    </Form>

                    <Link to='/login2'><p>Ver Tela de Login HTML</p></Link>
                </Col>
            </Row>
        </Container>
    );
}



export default telaLogin;