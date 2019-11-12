import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import data from './bike'
import TovarCard from "../component/TovarCard";

class Magazine extends React.Component {
    render (){
        return (
            <div className='container' >
                <h1> Каталог товаров </h1>
                <TovarCard bikes={data}/>

            </div>
        )
    }
}
export default Magazine