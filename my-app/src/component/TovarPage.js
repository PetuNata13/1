import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Card, Table} from "react-bootstrap";
import bike from './bike'
class TovarPage extends React.Component {
    state = {
        props: true,
    }
    render() {
        const id = (this.props.match.params.IdTovar - 1);
        return (
            <div className='Body container'>
                <Card>
                    <Card.Img className='cardImg' variant="top" src={bike[id].img}/>
                    <Card.Body>
                        <h3>Описание</h3>
                        <Card.Title>{bike[id].name}</Card.Title>
                        <h3>Характеристика</h3>
                        <Card.Text>
                            {bike[id].title}
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Рама</th>
                                    <th>Материал рамы</th>
                                    <th>Количество скоростей</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td></td>
                                    <td>{bike[id].characteristic.size}</td>
                                    <td>{bike[id].characteristic.material}</td>

                                    <td>{bike[id].characteristic.speed}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default TovarPage
