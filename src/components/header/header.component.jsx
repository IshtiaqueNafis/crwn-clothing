import React from 'react';
import './header.styles.scss'
import {connect} from 'react-redux' // this is a higher order component. will help connect gain redux
import {ReactComponent as Logo} from "../../assests/crown.svg";
import {auth} from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-Icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../redux/user/user.selector";
import {selectCartHidden} from "../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from "./headers.styles";

const Header = ({currentUser, hidden}) => {
    //region
    /*
    ***{currentUser}***
    * currentUser is coming from store = createStore(rootReducer, applyMiddleware(...middlewares));
    * rootReducer --> comes from export default combineReducers({user: UserReducer, // --> user is the object which holds the UserReducer})
    * user: UserReducer -->  currentUser: null thus the value is being extracted.
     */

    //endregion
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>Contact</OptionLink>
                {
                    currentUser ? <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv> :
                        <OptionLink className='option' to='/contact'>Sign in</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {hidden ? null : <CartDropDown/>}

        </HeaderContainer>
    );
};
//region  const mapStateToProps = (state) --> maps and creates currentUser object to State.user.currentUser.
const mapStateToProps = createStructuredSelector({
    // createStructuredSelector can pass a reference easily instead of creating currentUser:selectCurremtUser(state)
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

})

//endregion

export default connect(
    mapStateToProps)
(Header);
