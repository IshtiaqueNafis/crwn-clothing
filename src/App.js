import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homepage/homePage.Component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from "./components/redux/user/user.action";

class App extends React.Component {

    unsubscribeFromAUth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props

        this.unsubscribeFromAUth = auth.onAuthStateChanged(async userAuth => {
            // auth.onAuthStateChanged --> will check whether user status have changed or not.--> change only happneds when the user has logged in.
            // usually returns a user.
            //userAuth --> returns a property about the user in this case it will be name, email uid which are the most important.

            if (userAuth) { // checks if userAuth is not null
                const userRef = await createUserProfileDocument(userAuth); // documentreference

                userRef.onSnapshot(snapshot => { // returns a snapshot For the user. which comes from docment reference.
                    setCurrentUser({
                        // set currentUser is the function that is being passed.
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
        this.unsubscribeFromAUth();
    }

    render() {
        return (
            <div>
                <Header/>
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

const mapDispatchToProps = dispatch => ({
    // mapDispatchToProps --> gets the dispatch property
    // returns an object prop name what ever props will be passed.
    // which is set current user.
    setCurrentUser: user => dispatch(setCurrentUser(user))

    //region **setCurrentUser: user => dispatch(setCurrentUser(user))**
    /*
    ***dispatch**
    * this is a property launches the new action we want to pass.
    * this is also a function,
    ***setCurrentUser***
    * is the key at the end going to be an object.
    * user is passed as value
    ***dispatch(setCurrentUser(user)***
    * where user is passed as an argument
    * will return an action object
     */
    //endregion

})
export default connect(null, mapDispatchToProps)(App); // mapState to props cause there is no item necessary there.
