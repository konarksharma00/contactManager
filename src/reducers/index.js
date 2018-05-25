import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import  contactReducer from './contactReducer';

const rootReducer = combineReducers({
  contact:contactReducer,
  form:formReducer
});

export default rootReducer;
