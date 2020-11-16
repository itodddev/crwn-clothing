import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
}

// state - default value = INITIAL_STATE, if state is undefind then default to INITIAL_STATE, if state is defined use current state
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;
  
// all reducers get all the actions, if none match the case statement then just return the state (default)