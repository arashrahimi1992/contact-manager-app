import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { ContactContext } from '../context/contactContext';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { firstName, setFirstName, lastName, setLastName, password, setPassword, mobile, setMobile, email, setEmail, age, setAge, job, setJob, register } = useContext(ContactContext)
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const setContact = () => {
    if (firstName === "" || lastName === "" || password === "" || mobile === "" || email === "" || age === "" || job === "") {
      alert("لطفا تمامی فیلدها را پر کنید")
    }else{
      register()
      setFirstName("")
      setLastName("")
      setPassword("")
      setMobile("")
      setEmail("")
      setAge("")
      setJob("")
      navigate("/");
    }


    }
    
  const handleClose = () => {
    setShow(false)
    setFirstName("")
    setLastName("")
    setPassword("")
    setMobile("")
    setEmail("")
    setAge("")
    setJob("")
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-secondary" style={{ width: "100%" }} onClick={handleShow}>
        ثبت نام
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>فرم ثبت نام</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='mt-1'>نام :</Form.Label>
              <Form.Control name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="نام خود را وارد کنید" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>نام خانوادگی :</Form.Label>
              <Form.Control name='lastName' value={lastName} type="text" onChange={e => setLastName(e.target.value)} placeholder="نام خانوادگی خود را وارد کنید" required={true} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> کلمه عبور :</Form.Label>
              <Form.Control name='password' value={password} type="text" onChange={e => setPassword(e.target.value)} placeholder="کلمه عبور خود را وارد کنید" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>  شماره تماس :</Form.Label>
              <Form.Control name='mobile' value={mobile} type="text" onChange={e => setMobile(e.target.value)} placeholder=" شماره تماس  خود را وارد کنید" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>  ایمیل :</Form.Label>
              <Form.Control name='email' value={email} type="text" onChange={e => setEmail(e.target.value)} placeholder=" ایمیل خود را وارد کنید" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>  سن :</Form.Label>
              <Form.Control name='age' value={age} type="text" onChange={e => setAge(e.target.value)} placeholder=" ایمیل خود را وارد کنید" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>  شغل :</Form.Label>
              <Form.Control name='job' value={job} type="text" onChange={e => setJob(e.target.value)} placeholder=" ایمیل خود را وارد کنید" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { handleClose(); setContact() }} style={{ width: "100%" }}>
            ثبت نام
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Register;