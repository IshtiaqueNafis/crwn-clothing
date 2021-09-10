import React from 'react';
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.componenet";
import CustomButton from "../custom-button/custom-Button.componenet";
import {auth, createUserProfileDocument} from "../firebase/firebase.utils";

class SignUp  extends React.Component {


    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password); // userobject is being recived from auth

            await createUserProfileDocument(user, {displayName}); // creates a doucmentreference
            // after that set everythign to null.

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        } catch (e) {
            console.log(e)
        }

    }


    handleChange = e => {

        const {name, value} = e.target; // this is the dynamic property.
        this.setState({[name]: value});
    }

    render() {

        const {displayName, email, password, confirmPassword} = this.state

        return (
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up' onSubmit={this.handleSubmit}>

                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </div>
        );
    }
}

export default SignUp ;
