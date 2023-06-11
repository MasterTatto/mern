import * as api from '../api'
import {createPost} from "../api";

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        const action = {type: 'FETCH_ALL', payload: data}
        dispatch(action)
    } catch (e) {
        console.log(e)
    }
}
export const createPosts = (newPost) => async (dispatch) => {
    try {
        const {data} = await api.createPost(newPost)
        const action = {type: 'CREATE', payload: data}
        dispatch(action)
    } catch (e) {
        console.log(e)
    }
}
