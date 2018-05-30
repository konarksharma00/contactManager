import _ from 'lodash';
import { EDIT_CONTACT, RESET_FORM  } from '../actions';

export default function(state ={} ,action){
    switch (action.type){
        case EDIT_CONTACT:
            return { ...state, ...action.payload };
        break;
        case RESET_FORM:
            return {
                ...state, ...action.payload 
            }
        default:
            return state;
    }
}