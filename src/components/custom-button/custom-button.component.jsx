import React from 'react';

import './custom-button.styles.scss';

// children is passed in with props, its the content between
// <CustomButton>Sign in</CustomButton>
// Sign in is the children
// ...buttonProps has all the props, like type="submit"
const CustomButton = ({ 
  children,
  isGoogleSignIn,
  inverted, 
  ...buttonProps
 }) => (
  <button 
    className={
      `${ inverted ? 'inverted' : ''}
       ${ isGoogleSignIn ? 'google-sign-in' : ''} custom-button` }
       { ...buttonProps }
  >
    { children } 
  </button>
);

export default CustomButton;