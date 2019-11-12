import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav} from "react-bootstrap";
import '../App.css'
import {Link} from "react-router-dom";

class Menu extends React.Component {
    render (){
        return (
            <div className='container menu'>

                <div >
                <Navbar className="Men" bg="light" variant="light">

                    <Nav className="Menu mr-auto">
                        <Link to="/contact">Покупателям</Link>
                        <Link to="/">Велосипеды</Link>


                    </Nav>
                    <input type='button' className='busket'/>
                </Navbar>


                </div>
            </div>)
    }
}
 export default Menu