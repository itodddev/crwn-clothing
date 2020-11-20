import { createSelector } from 'reselect';

// state is passed in from selectCartItemsCount(state) in cart-icon.component
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],  // collection of input selectors
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],  // from above, more specific slice from cartItems
  cartItems =>
    cartItems.reduce(
      (accumulator, cartItem) => 
        accumulator + cartItem.quantity
      , 0  // initial value
    )
);
 
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (cartTotal, cartItem) =>
        cartTotal + (cartItem.quantity * cartItem.price)
      , 0
    )
)