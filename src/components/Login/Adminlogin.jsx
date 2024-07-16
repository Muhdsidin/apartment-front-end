import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
function Adminlogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const Login = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios("https://apartment-one.vercel.app/admin-login",{
               method:"POST",
               data:{
                email,
                password
               }
            })
            console.log(response.data)
            Cookies.set("token",response.data)
            navigate("/home")
        } catch (error) {
           console.log(error.message) 
        }
    }

    return (
        <Container style={{ marginTop: '7em' }}>
            <Form>
                <h2 style={{ textAlign: 'center', color: "white" }}>Login To Continue</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <br />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button onClick={Login} variant="" type="submit" style={{ float: "right", color: "black", background: 'white' }}>
                    Submit
                </Button>
            </Form>
        </Container>

    )


}
export default Adminlogin
