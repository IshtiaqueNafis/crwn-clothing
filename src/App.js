import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homePage.Component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth} from "./components/firebase/firebase.utils";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentUser: null

        }
    }

    unsubscribeFromAUth = null;

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            // auth will change user will be updated here.  user is the parameter for the user object.
            this.setState({currentUser: user})
            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAUth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>

                    <Route exact path='/' component={HomePage}/>
                    {/*
        /*
        exact is what the exact path will be the path has to be exactly for it to work.
        path --> how will we get to page
        component --> where will the page will go.
        */}
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/contact' component={SignInSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
