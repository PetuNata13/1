import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav,Button,ButtonToolbar} from "react-bootstrap";
import '../App.css'
import {Card} from "react-bootstrap"

class TovarCard extends React.Component {
    render (){
        const bikes= this.props.bikes;
        return (
            <div className='row' >
                {
                    bikes.map((bike)=> {
                        return <div key={bike.id} className='by col-md-4'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={bike.img} />
                                <Card.Body>
                                    <Card.Title>{bike.name}</Card.Title>
                                    <Card.Text>
                                        {bike.description}
                                    </Card.Text>
                                    <Button variant="primary"> Посмотреть </Button>
                                </Card.Body>
                            </Card>
                        </div>

                    })
                }


            </div>
        )
    }
}
export default TovarCard