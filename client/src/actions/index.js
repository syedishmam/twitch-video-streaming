import streams from '../apis/streams';
import {SIGN_IN, SIGN_OUT, CREATE_STREAM} from './types';

export const signIn = (userId) => {
    return  {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return  {
        type: SIGN_OUT
    }
}

//Posts form object of newly created stream when submit button is clicked in StreamCreate.js
export const createStream = (formValues) => async (dispatch) => {
    streams.post('/streams', formValues);
}