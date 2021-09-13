import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils";
import {connect} from 'react-redux';
import HomePage from "./pages/homepage/homePage.Component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {setCurrentUser} from "./components/redux/user/user.action";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./components/redux/user/user.selector";

//region redux mapStateToProps,mapDispatchToProps
//region const mapStateToProps = ({user}) --> get the current user from user.currentUser and set it to currentUser:
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})


//endregion

//region  mapDispatchToProps = dispatch --> dispatches action setCurrentUser
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
//endregion
//endregion

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

        const {setCurrentUser} = this.props; // this is coming from

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // auth.onAuthStateChanged --> will check whether user status have changed or not.--> change only happneds when the user has logged in.
            // usually returns a user.
            //userAuth --> returns a property about the user in this case it will be name, email uid which are the most important.

            if (userAuth) { // checks if userAuth is not null
                const userRef = await createUserProfileDocument(userAuth); // documentreference

                userRef.onSnapshot(snapshot => { // returns a snapshot For the user. which comes from docment reference.
                    setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    );
                })
            } else {
                setCurrentUser(userAuth);
            }


        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
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
                    <Route exact path='/contact'
                           render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage/>)}/>
                </Switch>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(App); // mapState to props cause there is no item necessary there.
