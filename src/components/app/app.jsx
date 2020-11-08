import React from 'react';
import './app.scss';
import {Route, Switch} from "react-router-dom";
import Navbar from "../navbar";
import HomePage from "../home-page";
import MenuListContainer from "../menu-list";
import OrderListContainer from "../order-list";
import About from "../about";
import ContactPage from "../contact-page";


const AppContent = ({children}) => {
    return (
        <div className='app-content'>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <AppContent>
                    <Route path='/menu' exact component={MenuListContainer}/>
                    <Route path='/order' exact component={OrderListContainer}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/contact' exact component={ContactPage}/>
                </AppContent>
            </Switch>
        </div>
    );
};


export default App;