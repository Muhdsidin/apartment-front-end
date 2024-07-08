import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
function Adminlogin() {




    return (
        <Container style={{ marginTop: '7em' }}>
            <Form>
                <h2 style={{ textAlign: 'center',color:"white" }}>Login To Continue</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="" type="submit" style={{float:"right",color:"black",background:'white'}}>
                    Submit
                </Button>
            </Form>
        </Container>

    )


}
export default Adminlogin
