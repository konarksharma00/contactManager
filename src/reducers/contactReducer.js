import _ from 'lodash';
import { EDIT_CONTACT, RESET_FORM  } from '../actions';

export default function(state ={} ,action){
    switch (action.type){
        case EDIT_CONTACT:
            return action.payload 
        break;
        case RESET_FORM:
        return _.omit(...state, '');
        default:
            return state;
    }
}