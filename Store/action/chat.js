import * as firebase from 'firebase';
import { GET_ALL_RECIPIENT } from '../constant/ActionTypes';


export function fetchAllRecepient(uid) {
    return async dispatch => {
        console.log('testing');
        let allUsers = await firebase.firestore().collection('users').get();
        allUsers.forEach(function (doc) {
            let user = doc.data();
            user.id = doc.id;
            if (user.uid !== uid) {
                console.log(doc.data());
                dispatch({ type: GET_ALL_RECIPIENT, payload: user })

            }
        });
    }
}