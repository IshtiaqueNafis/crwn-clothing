import React from 'react';
import './header.styles.scss'
import {Link} from "react-router-dom";
import {connect} from 'react-redux' // this is a higher order component. will help connect gain redux
import {ReactComponent as Logo} from "../../assests/crown.svg";
import {auth} from "../firebase/firebase.utils";

const Header = ({currentUser}) => {
    //region
    /*
    ***{currentUser}***
    * currentUser is coming from store = createStore(rootReducer, applyMiddleware(...middlewares));
    * rootReducer --> comes from export default combineReducers({user: UserReducer, // --> user is the object which holds the UserReducer})
    * user: UserReducer -->  currentUser: null thus the value is being extracted.
     */

    //endregion
    return (
        <div className="header">
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>
                            Sign Out
                        </div>

                        : <div/>
                }
            </div>
        </div>
    );
};
//region  const mapStateToProps = (state) --> maps and creates currentUser object to State.user.currentUser.
const mapStateToProps = (state) => ({
    //state is reducer which is the store we get from the  <Provider store={store}> thus this is from the store const store = createStore(rootReducer, applyMiddleware(...middlewares));
    currentUser: state.user.currentUser, // currentUser cromes from state.user.currentUser which is from user reducer.
    // returns an object with he following.
})

//endregion

export default connect(mapStateToProps)(Header);
