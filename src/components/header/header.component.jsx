import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, cartHidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />       
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    { cartHidden ? null : <CartDropdown />}
  </div>
);

// can be named anything, but mapStateToProps is a standard
// state gets passed the root reducer which has a property 'user' that has the 'currentUser' object passed from user.reducer.js
// mapStateToProps and connect is used anywhere we need props from our reducers
const  mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
