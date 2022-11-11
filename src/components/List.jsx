import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Edit from './Edit';
import Delete from './Delete';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ContactContext } from '../context/contactContext';



const List = () => {
    const{post,setPost,currentPage,setCurrentPage,lengthArray,setLengthArray,number,setNumber}=useContext(ContactContext)
    const [paginatedPost, setPaginatedPost] = useState(null)
    const [currentLength, setCurrentLength] = useState()
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState();
    const [postPageNumber, setPostPageNumber] = useState()
    const itemPerPage = 5
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [job,setJob]=useState("")
  
    useEffect(() => {
        const lengthPost = post.length
        setLengthArray(post.length)
        const endOffset = itemOffset + itemPerPage;
        setPageCount(Math.ceil(lengthPost / itemPerPage));
        setPostPageNumber(Math.ceil(lengthPost / itemPerPage))
        setPaginatedPost(post.slice(itemOffset, endOffset));
        setCurrentPage(post)
        handlePageClick(0)
    }, [post])
    useEffect(() => {
        setCurrentLength(currentPage.length)
        const endOffset = itemOffset + itemPerPage;
        setPageCount(Math.ceil(currentLength / itemPerPage));
        setPaginatedPost(currentPage.slice(itemOffset, endOffset));
    }, [itemOffset, itemPerPage, currentPage, pageCount])
    const handlePageClick = (numb) => {
        const newOffset = (numb * itemPerPage) % lengthArray;
        setItemOffset(newOffset);
    };
    const changeFilter = () => {
        var test = [...post]
        setNumber(0)
        if (firstName !== "") {
            test = test.filter(post => post.firstName===firstName)
        }
        if (lastName !== "") {
            test = test.filter(post => post.lastName===lastName)
        }
        if (mobile !== "") {
            
            test = test.filter(post => post.mobile===mobile)
        }
        if (email !== "") {
            
            test = test.filter(post => post.email===email)
        }
        if (age !== "") {
            
            test = test.filter(post => post.age===age)
        }
        if (job!== "") {
            
            test = test.filter(post => post.job===job)
        }
        setCurrentPage(test)
        setNumber(0)
        setItemOffset(0)
        setPageCount(1)
    }
    return (
        <>
            <Row>
                <Col sm={12}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> فيلتر</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col sm={12} md={2}>
                                        <Form.Label htmlFor="inputPassword5">نام</Form.Label>
                                        <Form.Control value={firstName} onChange={e=> setFirstName(e.target.value)}
                                            type="text"
                                            id="inputPassword5"
                                        />
                                    </Col>
                                    <Col sm={12} md={2}>
                                        <Form.Label htmlFor="inputPassword5">نام خانوادگي</Form.Label>
                                        <Form.Control value={lastName} onChange={e=> setLastName(e.target.value)}
                                            type="text"
                                            id="inputPassword5"
                                        />
                                    </Col>
                                    <Col sm={12} md={2}>
                                        <Form.Label htmlFor="inputPassword5">موبایل</Form.Label>
                                        <Form.Control value={mobile} onChange={e=> setMobile(e.target.value)}
                                            type="text"
                                            id="inputPassword5"
                                        />
                                    </Col>
                                    <Col sm={12} md={2}>
                                        <Form.Label htmlFor="inputPassword5">ایمیل</Form.Label>
                                        <Form.Control value={email} onChange={e=> setEmail(e.target.value)}
                                            type="text"
                                            id="inputPassword5"
                                        />
                                    </Col>
                                    <Col sm={12} md={2}>
                                        <Form.Label htmlFor="inputPassword5">شغل</Form.Label>
                                        <Form.Control value={job} onChange={e=> setJob(e.target.value)}
                                            type="text"
                                            id="inputPassword5"
                                        />
                                    </Col>
                                    <Col sm={12} md={2}>
                                        <Form.Label htmlFor="inputPassword5">سن</Form.Label>
                                        <Form.Control
                                        value={age} onChange={e=> setAge(e.target.value)}
                                            type="text"
                                            id="inputPassword5"
                                        />
                                    </Col>
                                    </Row>
                                    <Row className="justify-content-center mt-1">
                                        <Col sm={1}>
                                        <Button variant="primary" onClick={e => { changeFilter();setNumber(-1) }} >اعمال فیلتر</Button>
                                        </Col>
                                        <Col sm={1}>
                                        <Button variant="secondary" onClick={() => {
                                                    setCurrentPage(post)
                                                    setItemOffset(0)
                                                    setNumber(0)
                                                    setPageCount(postPageNumber)
                                                }}  >حذف فیلتر</Button>
                                        </Col>
                                    </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    {
                        !paginatedPost ? ("ليستي جهت نمايش وجود ندارد") :
                            (
                                <Table responsive hover>
                                    <thead  >
                                        <tr>
                                            <th>ردیف</th>
                                            <th>نام</th>
                                            <th>نام خانوادگی</th>
                                            <th>پسورد</th>
                                            <th>موبایل</th>
                                            <th>ایمیل</th>
                                            <th>شغل</th>
                                            <th>سن</th>
                                            <th>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            paginatedPost.map((list, index) =>
                                            (
                                                <tr key={index}>
                                                    <td>{index + 1 + itemOffset}</td>
                                                    <td>{list.firstName}</td>
                                                    <td>{list.lastName}</td>
                                                    <td>{list.password}</td>
                                                    <td>{list.mobile}</td>
                                                    <td>{list.email}</td>
                                                    <td>{list.job}</td>
                                                    <td>{list.age}</td>
                                                    <td>{<><Edit id={list.id} list={list}/> <Delete  id={list.id} /> </>
                                                    }</td>
                                                </tr>
                                            )
                                            )}
                                    </tbody>
                                </Table>
                            )
                    }
                </Col>
            </Row>
            <Nav style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5rem",
                fontSize: "1.2rem",
                gap: "5px",

            }}>
              <ReactPaginate
                            breakLabel="..."
                            nextLabel="بعدي"
                            onPageChange={(e) => handlePageClick(e.selected)}
                            pageRangeDisplayed={0}
                            pageCount={pageCount}
                            previousLabel=" قبلي"
                            containerClassName="pagination p-0"
                            pageClassName="page-num"
                            previousLinkClassName="page-num"
                            nextLinkClassName="page-num"
                            activeLinkClassName="active"
                            forcePage={number}
                        />
            </Nav>
        </>
    );
};
export default List;