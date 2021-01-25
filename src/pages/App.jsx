import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "..//..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "..//..//node_modules/bootstrap/dist/js/bootstrap.bundle";
import $ from 'jquery';
import Icofont from 'react-icofont';
import 'boxicons/css/boxicons.css';


import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Header from '..//components/Header';

const App = () =>{
    
    
    return(
        <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
         </Switch>
        </>
    )
}
export default App;