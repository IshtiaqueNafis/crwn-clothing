import React from 'react';
import FormInput from "../form-input/form-input.componenet";
import CustomButton from "../custom-button/custom-Button.componenet";
import './sign-in.styles.scss'
import {auth, signInWithGoogle} from "../firebase/firebase.utils";

class SignIn extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (e) {
            console.log(e)
        }

    }
    handleChange = (e) => {
        const {value, name} = e.target; //
        this.setState({[name]: value})
        // [name] means value is being dynamically created from the name option.
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
                        type="password"
                        handleChange={this.handleChange}
                        label='Password'
                        required/>
                    <div className='buttons'>

                        <CustomButton  type="submit" >Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>

                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;
