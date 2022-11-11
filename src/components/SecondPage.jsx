import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import List from './List';


const Login = () => {
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem("lastName")

    console.log()
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Alert variant="success">
                        <Alert.Heading>{`  ${firstName} ${lastName} عزیز خوش آمدید`}</Alert.Heading>
                        <p>
                            لیست زیر شامل اطلاعات افرادی میباشد که در صفحه قبل به ثبت رسیده است.شما میتوانید با اعمال فیلتر لیست درخواستی خود را جهت نمایش فراهم کنید همچنین میتوانید از قسمت عملیات اطلاعات وارد شده را تغییر و یا حذف نمایید.
                        </p>
                    </Alert>
                </Col>
            </Row>
            <List />
        </Container >
    );
};

export default Login;