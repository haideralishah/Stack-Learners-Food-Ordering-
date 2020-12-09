import * as firebase from 'firebase';
import { GET_ALL_RECIPIENT, FETCH_ALL_CHATS, CLEAR_CHAT } from '../constant/ActionTypes';


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

let unsubscribe;
export function fetchAllMsgs(currentUserUid, recepientUid) {
    return async dispatch => {
        let chatDocId = makeDocId(currentUserUid, recepientUid);

        unsubscribe = firebase.firestore().collection("chat").doc(chatDocId).collection('messages')
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        console.log("new msg: ", change.doc.data());
                        dispatch({ type: FETCH_ALL_CHATS, payload: change.doc.data() })
                    }
                    // if (change.type === "modified") {
                    //     console.log("Modified city: ", change.doc.data());
                    // }
                    // if (change.type === "removed") {
                    //     console.log("Removed city: ", change.doc.data());
                    // }
                });
            });
    }
}

function makeDocId(uid1, uid2) {
    let docId;
    if (uid1 > uid2) {
        docId = uid1 + uid2;
    }
    else {
        docId = uid2 + uid1;
    }
    return docId
}

export function detachMsgListener() {
    return async dispatch => {
        unsubscribe();
        dispatch({ type: 'CLEAR_CHAT' })
    }
}


export function sendMsg(msg) {
    return async dispatch => {
        console.log(msg);
        let chatDocId = makeDocId(msg.sender, msg.receiver);

        firebase.firestore()
            .collection("chat")
            .doc(chatDocId)
            .collection('messages')
            .add(msg);

    }
}