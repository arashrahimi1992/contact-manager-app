import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Register from './Register';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ContactContext } from '../context/contactContext';


const Login = () => {
    const { list } = useContext(ContactContext)
    const [elogin, setElogin] = useState("")
    const [plogin, setPlogin] = useState("")
    const navigate = useNavigate();

    const login = () => {
        const found = list.find(index => index.email === elogin && index.password === plogin)
        if (found) {
            toast.success('با موفقيت وارد شديد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('firstName', found.firstName);
            localStorage.setItem('lastName', found.lastName);
            navigate("/Spage");
        } else {
            toast.error('نام كاربري يا رمز عبور اشتباه است', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <Container className='mt-5'>
            <Row className="justify-content-center pt-2 ">
                <Col sm={5} className=" bg-light ">
                    <i className="fa fa-user" style={{ fontSize: "100px", marginRight: "44%" }}></i>
                </Col>
            </Row>
            <Row className="justify-content-center ">
                <Col sm={5} className="bg-light">
                    <InputGroup className="mb-3 pt-3">
                        <InputGroup.Text id="basic-addon1"><i className="fa fa-user" ></i></InputGroup.Text>
                        <Form.Control
                            value={elogin}
                            onChange={(e) => setElogin(e.target.value)}
                            placeholder=" ایمیل خود را وارد کنید"
                            required
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 pt-2">
                        <InputGroup.Text id="basic-addon1"><i className="fa fa-key" ></i></InputGroup.Text>
                        <Form.Control
                            value={plogin}
                            onChange={(e) => setPlogin(e.target.value)}
                            placeholder="پسورد خود را وارد کنید"
                        />
                    </InputGroup>
                    <Button variant="primary" onClick={login} style={{ width: "100%" }}>ورود</Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col sm={5} className="bg-light">
                    <Register />
                </Col>
            </Row>
        </Container>
    );
};
export default Login;