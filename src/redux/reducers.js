// we can identify the type of actions.

import {SET_USER_NAME, SET_USER_AGE, INCREASE_AGE} from './action';

// define the default values of the states.
const initialState = {
  name: '',
  age: 0,
};

// we create a function according to the action called, perform the operation.
function userReducer(state = initialState, action) {
  // at the input of this function, we put state and action.
  // in fact, whenever any of these actions are called, there are placed inside this function.
  switch (action.type) {
    case SET_USER_NAME:
      // name with a new value that comes from the action side.
      // we first hold the current state object and then fill the state.
      return {...state, name: action.payload};
    case SET_USER_AGE:
      return {...state, age: action.payload};
    case INCREASE_AGE:
      return {...state, age: state.age + 1};
    default:
      return state; // we return the state, without manipulation.
  }
}

// export this function to call it out of this file!!
export default userReducer;
