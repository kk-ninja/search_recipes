import react from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import $ from 'jquery';
import Popper from 'popper.js';
import { Redirect, Route, Switch } from "react-router-dom"

import Navbar from "./Navbar";
import Home from "./Home";
import OurMenu from "./OurMenu";
import Recipe from "./Recipe";

import Footer from "./Footer";

const App = () =>{
    return(  
        <>
        <Navbar />
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/menu" component={OurMenu} />
                <Route exact path="/recipe" component={Recipe} />
                <Redirect to="/" />
            </Switch>

        <Footer />
                  
        </>
    )
    
}

export default App;     