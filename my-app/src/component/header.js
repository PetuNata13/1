import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav,Button,ButtonToolbar} from "react-bootstrap";
import '../App.css'

class Header extends React.Component {
    render (){
        return (
            <div className='container block' >
                <div className='logo'> </div>
                <span className='phone'> 8 800 250-74-79 </span>

            </div>
        )
    }
}
export default Header