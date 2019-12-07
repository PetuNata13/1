import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import'react-bootstrap' ;
import Menu from '../src/component/menu'
import Header from "./component/header";
import Magazine from "../src/layouts/Magazine";
import Footer from "../src/component/Footer";
import Contact from "./layouts/contact";
import TovarPage from "./component/TovarPage";

import {Route,Switch} from 'react-router-dom'

class App extends React.Component {
  render (){
    return (
    <div className='container-fluid'>
      <Header/>
      <Menu/>
      <Switch>
          <Route path='/tovar/:IdTovar' component={TovarPage}/>
      <Route exact path='/' component={Magazine}/>
      <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer/>
    </div>
    )
}
}

export default App;
