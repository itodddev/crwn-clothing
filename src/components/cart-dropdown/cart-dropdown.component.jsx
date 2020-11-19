import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';
// memotize
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
     { cartItems.map( item => <CartItem key={ item.id } item={item} />) }
    </div>
    <CustomButton>GO To CHECKOUT</CustomButton>
  </div>
)
// memotize
// const mapStateToProps = ({ cart: { cartItems }}) => ({
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown);

