import _ from 'lodash'
import { FETCH_POSTS, EDIT_CONTACT, DELETE_POST, CREATE_POST  } from '../actions';

export default function(state ={} ,action){
    switch (action.type){
        case DELETE_POST:
            return _.omit(state, action.payload);
            break;
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        break;
        case EDIT_CONTACT:
            return { ...state, 'editContact':action.payload.data };
        break;
        case CREATE_POST:
            return {
                ...state, 'options':action.payload
            }
        default:
            return state;
    }
}