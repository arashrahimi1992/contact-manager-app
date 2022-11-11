import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useContext } from 'react';
import { ContactContext } from '../context/contactContext';

const Edit = ({ id,list}) => {
    const{update,number,setNumber}=useContext(ContactContext)

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setPassword] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [job, setJob] = useState()
   
   

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    useEffect(() => {
        const fetchData = async () => {

            setFirstName(list.firstName)
            setLastName(list.lastName)
            setPassword(list.password)
            setMobile(list.mobile)
            setEmail(list.email)
            setJob(list.job)
            setAge(list.age)
        }
        fetchData()
    }, [])
const edit=()=>{
    const contact = {
        firstName,
        lastName,
        password,
        mobile,
        email,
        age,
        job
    }
    update(id,contact)
    setNumber(null)
}
    return (
        <>
        {list?(
            <>
            <Button variant="success" onClick={handleShow}>
                ویرایش
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>ویرایش اطلاعات</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='mt-1'>نام :</Form.Label>
                            <Form.Control name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} type="text" placeholder="نام خود را وارد کنید" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>نام خانوادگی :</Form.Label>
                            <Form.Control name='lastName' value={lastName} type="text" onChange={e => setLastName(e.target.value)} placeholder="نام خانوادگی خود را وارد کنید" />
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
                    <Button variant="secondary" onClick={handleClose}>
                        بستن
                    </Button>
                    <Button variant="success" onClick={(e) => { handleClose();edit() }}>ویرایش</Button>
                </Modal.Footer>
            </Modal>
            </>
        ):""}    
        </>
    );
};
export default Edit;