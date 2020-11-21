import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {  // dont forget to add addItem and removeItem
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item '>
      <div className='image-container'>
        <img src={ imageUrl } alt='item'/>
      </div>
    <span className='name'>{ name }</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{ quantity  }</span>
      <div className='arrow' onClick={ () => addItem(cartItem) }>&#10095;</div>
    </span>
    <span className='price'>{ price }</span>
    <div onClick={ () => clearItem(cartItem) } className='remove-button'>&#10005;</div>
    </div>
  )
};


const mapDispatchFromProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchFromProps)(CheckoutItem);