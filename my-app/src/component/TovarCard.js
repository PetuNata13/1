import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from "react-bootstrap";
import '../App.css'
import {Card} from "react-bootstrap"
import {withRouter} from 'react-router';

class TovarCard extends React.Component {
    About=(bike)=>{
        console.log(bike)
        this.props.history.push(`/tovar/${bike.id}`);
    };
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
                                    <Button variant="primary" onClick={() => this.About(bike)}>Просмотреть</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    })
                }


            </div>
        )
    }
}
export default withRouter(TovarCard)