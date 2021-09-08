import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homePage.Component";
import ShopPage from "./pages/shop/shop.component";


const App = () => (
    <div>
        <Switch>

            <Route exact path='/' component={HomePage}/>
            {/*
        /*
        exact is what the exact path will be the path has to be exactly for it to work.
        path --> how will we get to page
        component --> where will the page will go.
        */}
        </Switch>
        <Route path='/shop' component={ShopPage}/>
    </div>
);

export default App;
