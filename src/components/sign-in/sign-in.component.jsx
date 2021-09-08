import React from 'react';

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
                    <input
                        name='email'
                        value={this.state.email}
                        type="text"
                        onChange={this.handleChange}
                        required/>
                    <label>EMAIL</label>
                    <input
                        name='password'
                        value={this.state.password}
                        type="text"
                        onChange={this.handleChange}
                        required/>
                    <label>Password</label>
                    <input type="submit" value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;
