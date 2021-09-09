import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homePage.Component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentUser: null

        }
    }

    unsubscribeFromAUth = null;

    componentDidMount() {
        this.unsubscribeFromAUth = auth.onAuthStateChanged(async userAuth => {
   // auth.onAuthStateChanged --> will check whether user status have changed or not.--> change only happneds when the user has logged in.
            // usually returns a user.
            //userAuth --> returns a property about the user in this case it will be name, email uid which are the most important.

            if (userAuth) { // checks if userAuth is not null
                const userRef = await createUserProfileDocument(userAuth); // create user ref based on userAuth
                userRef.onSnapshot(snapshot => { // returns a snapshot For the user.
                    this.setState({
                        currentUser: { //crate currentUser based on currentUser
                            id: snapshot.id, // pass the id.
                            ...snapshot.data() // creates SnapShotData()
                        }
                    });
                })
            } else {
                this.setState({currentUser: userAuth}) // sets the current user to null

            }


        })
    }

    componentWillUnmount() {

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
