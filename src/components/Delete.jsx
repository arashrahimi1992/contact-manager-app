import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { ContactContext } from '../context/contactContext';

const Delete = ({id}) => {
    const{Del,number,setNumber}=useContext(ContactContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(id)
    setNumber(0)
    
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                حذف
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> حذف</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    آیا مطمئنین حذف شود؟!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        بستن
                    </Button>
                    <Button variant="danger" onClick={() => { handleClose(); Del(id) }}>حذف</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default Delete;