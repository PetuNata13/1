import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav,Button,ButtonToolbar} from "react-bootstrap";
import '../App.css'

class Magazin1 extends React.Component {
    render (){
        return (
            <div className='container' >
                <div className="Header">
                    <nav>
                        <ul className="MainMenu">
                            <li>
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">Велосипеды</a>
                            </li>
                            <li>
                                <a href="#">Запчасти</a>
                            </li>
                            <li>
                                <a href="#">Аксессуары</a>
                            </li>
                            <li>
                                <a href="#">Покупателям</a>
                            </li>

                        </ul>
                    </nav>
                </div>

                <h2> Велосипед горный NAMELESS S6500D 26''/ 17'' </h2>
                <div className="Price">
                    <p>Цена в рассрочку:12 850 руб.</p>
                    <p>Цена в магазине:10 250 руб.</p>
                    <input type="button" id='buy'/>
                </div>
                <div className="character">
                    <h4> Описание и характеристики </h4>
                    <p> СКОПИРОВАТЬ С САЙТА</p>
                    <h4>Ключевые характеристики</h4>
                    <h5>Артикул</h5>
                    <p>S6500D-BK/BR-19</p>
                </div>
                <div className="Footer">
                    <ul className="Menu">
                        <li>
                            <a href="#"> ГЛАВНАЯ </a>
                        </li>
                        <li>
                            <a href="#"> Велсипеды </a>
                        </li>
                        <li>
                            <a href="#"> Запчасти </a>
                        </li>
                        <li>
                            <a href="#"> Аксессуары </a>
                        </li>
                        <li>
                            <a href="#"> ПОКУПАТЕЛЯМ </a>
                        </li>
                        <li>
                            <a href="#"> О нас </a>
                        </li>
                        <li>
                            <a href="#"> Гарантии </a>
                        </li>
                        <li>
                            <a href="#"> Как купить </a>
                        </li>
                        <li>
                            <a href="#"> Самовывоз </a>
                        </li>
                        <li>
                            <a href="#"> Доставка </a>
                        </li>
                        <li>
                            <a href="#"> Контакты </a>
                        </li>
                    </ul>
                    <p align="right"> 8 (800) 250-74-79 </p>
                    <p align="right"> info@moyvelosiped.ru </p>
                    <p align="right"> Пн.-Сб.: 9:00-:19:00 </p>
                    <p align="right"> Вс.:10:00-19:00 </p>
                </div>
            </div>
        )
    }
        }
export default Magazin1

