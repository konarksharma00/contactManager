import axios from 'axios';

export const EDIT_CONTACT = 'editContact';
export const RESET_FORM = 'resetForm';

export function resetForm() {
    return {
        type :RESET_FORM,
    };
}

export function editContact(contact){
    return {
        type:EDIT_CONTACT,
        payload : contact
    }
}