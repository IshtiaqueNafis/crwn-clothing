import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homePage.Component";

const HatsPage = () => (
    <div>
        <h1>Hats page </h1>
    </div>
);

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
        <Route path='/hats' component={HatsPage}/>
    </div>
);

export default App;
