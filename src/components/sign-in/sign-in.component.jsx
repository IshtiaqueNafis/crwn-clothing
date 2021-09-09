import React from 'react';
import FormInput from "../form-input/form-input.componenet";
import CustomButton from "../custom-button/custom-Button.componenet";
import './sign-in.styles.scss'
import {signInWithGoogle} from "../firebase/firebase.utils";

class SignIn extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})

    }
    handleChange = (e) => {
        const {value, name} = e.target; //
        this.setState({[name]: [value]})
    }

    render() {

        return (
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        value={this.state.email}
                        type="email"
                        handleChange={this.handleChange}
                        label='Email'
                        required/>

                    <FormInput
                        name='password'
                        value={this.state.password}
                        type="Password"
                        handleChange={this.handleChange}
                        label='password'
                        required/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>


                    <CustomButton onClick={signInWithGoogle}
                                  isGoogleSignIn
                    >Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;
