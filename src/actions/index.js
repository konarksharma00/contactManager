import axios from 'axios';

export const EDIT_CONTACT = 'editContact';
export const CREATE_POST = 'createPost';
export const FETCH_CONTACT = 'fetchContact';
export const DELETE_POST='delete_post';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=thetest1243'

export function fetchContact(index) {
    const request = axios.get(`${rootUrl}/posts${apiKey}`)
    console.log('actions')
    console.log(request + 'nothing')
    return {
        type :FETCH_CONTACT,
        payload: index
    };
}

export function createContact(values){
    return {
        type:CREATE_POST,
        payload : values
    }
}

export function editContact(index){
    return {
        type:EDIT_CONTACT,
        payload : index
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${rootUrl}/posts/${id}${apiKey}`).then(
        ()=>callback()
    )
    return{
        type:DELETE_POST,
        payload:id
    }
}