import axios from 'axios';

export const FETCH_POSTS = 'fetchPosts';
export const CREATE_POST = 'createPost';
export const FETCH_POST = 'fetchPost';
export const DELETE_POST='delete_post';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=thetest1243'

export function fetchPosts() {
    const request = axios.get(`${rootUrl}/posts${apiKey}`)
    console.log('actions')
    console.log(request + 'nothing')
    return {
        type :FETCH_POSTS,
        payload: request
    };
}

export function createContact(values){
    return {
        type:CREATE_POST,
        payload : values
    }
}

export function fetchPost(id){
    const request = axios.get(`${rootUrl}/posts/${id}${apiKey}`)
    return {
        type:FETCH_POST,
        payload : request
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