import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav,Button,ButtonToolbar} from "react-bootstrap";
import '../App.css'

class Footer extends React.Component {
    render (){
        return (
            <div className='Footer container-fluid' >
                <span className='Text' > Copyright 2019 МОЙВЕЛОСИПЕД.РФ </span>

            </div>
        )
    }
}
export default Footer