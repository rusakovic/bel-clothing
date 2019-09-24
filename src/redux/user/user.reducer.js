import  UserActionTypes from './user.types';


// INITIAL_STATE is the same as this.state in constructor in App.js for expample
const INITIAL_STATE = {
  currentUser: null,
  error: null
}

// state = INITIAL STATE, to set the default value of state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      } 
    case UserActionTypes.SIGN_IN_FAILURE:  
    case UserActionTypes.SIGN_OUT_FAILURE:  
    case UserActionTypes.SIGN_UP_FAILURE:  
      return {
        ...state,
        error: action.payload
      }
    default:
     return state;
  }
}

export default userReducer;