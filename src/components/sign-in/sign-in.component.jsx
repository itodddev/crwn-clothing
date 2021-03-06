import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
    
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className='sign-in'>
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password </span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput 
            name="email"
            type="email"
            label="email"
            value={ this.state.email }
            required
            handleChange={ this.handleChange }  // function sent to child
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={ this.state.password }
            required
            handleChange={ this.handleChange }
          />
          <div className='buttons'>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign in With Google</CustomButton>
            {/* type="button", this prevents the sign in fields to trigger asking to fill in, this is because any     buttons inside a form element will cause the form to treat the buttons as type='submit' */}
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;