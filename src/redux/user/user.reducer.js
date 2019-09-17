import { UserActionTypes } from './user.types';


// INITIAL_STATE is the same as this.state in constructor in App.js for expample
const INITIAL_STATE = {
  currentUser: null
}

// state = INITIAL STATE, to set the default value of state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
     return state;
  }
}

export default userReducer;