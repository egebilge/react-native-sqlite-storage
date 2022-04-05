//Define const "how many values" to display the type of actions.
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_AGE = 'INCREASE_AGE';

//create the action to save the name
export const setName = name => dispact => {
  dispact({
    type: SET_USER_NAME,
    payload: name,
    //pass the action, which is the name here.
  });
};

//create the action to save the age
export const setAge = age => dispact => {
  dispact({
    type: SET_USER_AGE,
    payload: age,
    //pass the action, which is the age here.
  });
};
export const increaseAge = age => dispatch => {
  dispatch({
    type: INCREASE_AGE,
    payload: age,
  });
};
