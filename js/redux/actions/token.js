import {updateToken} from '../helper';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const handleUpdateToken = () => {
    return (dispatch) => {
        dispatch(updateToken(Math.random().toString()));
    };
};
