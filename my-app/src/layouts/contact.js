import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav,Button,ButtonToolbar} from "react-bootstrap";
import '../App.css'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

class Contact extends React.Component {
    render (){
        return (
            <div className='Container Contactblock'>
                <div className="Info">

                    <h1> Остались вопросы? </h1>
                    <h2> Оставьте,пожалйста, ваш номер, и мы вам перезвоним!</h2>
                <Form>
                    <Row>
                    <Form.Group controlId="formGroupName">
                        <Col>
                            <Form.Control placeholder="Ваше имя" />
                        </Col>
                    </Form.Group>
                        <Form.Group controlId="formGroupNumber">
                            <Col>
                            <Form.Control placeholder="Номер телефона" />
                            </Col>
                        </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    </Row>
                    <Form.Group className="Message" controlId="formGroupMessage">
                        <Form.Control className="Mes" placeholder="Ваше сообщение" />
                    <p> </p>
                    <Button variant="primary" type="submit">
                        Отправить
                    </Button>
                </Form.Group>
                </Form>
                </div>
                <div class="Adres">
                    <hr></hr>
            <div className='ContactInfo'>
            <div className='Info1'>
                <h2> Контактная информация </h2>
                <span className='ContactsTitle'>Контактный номер: <span className='ContactsText'>8 800 250-74-79 </span></span>
                <span className='ContactsTitle'>Адрес:<span
                    className='ContactsText'> г.Тула пр-т Ленина 124 к.2 </span></span>
                <span className='ContactsTitle'> Email: <span
                    className='ContactsText'>info@moyvelosiped.ru </span></span>
            </div>
                <div className='logo2'></div>
            </div>
                    <iframe
                        src=""
                        style={{margin:'auto', width:'70%', height:'300px', frameBorder:'0'}}>
                    </iframe>
                </div>
            </div>
        )
    }
}
export default Contact