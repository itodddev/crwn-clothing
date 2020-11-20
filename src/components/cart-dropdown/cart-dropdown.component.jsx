import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
// memoize
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch  }) => ( // history from withRouter
  <div className='cart-dropdown'>
    <div className='cart-items'>
     { 
        cartItems.length
        ?
        cartItems.map( item => <CartItem key={ item.id } item={item} />) 
        :
        <span className='empty-message'>Your cart is empty</span>
     }
    </div>
    <CustomButton
      onClick={ () => {  
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }} >
        GO To CHECKOUT
      </CustomButton>
  </div>
)
// memoize
// const mapStateToProps = ({ cart: { cartItems }}) => ({
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
// withRouter is a HOC, that gets passed the component returned from connect
// if connect doesnt have a second arugument, it automatically passes dispatch as a prop
