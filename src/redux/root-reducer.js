import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

// returns one big object with all the section reducers combined, key values like user:, home:, etc. 
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});


