import { CHANGE_AUTH, CHANGE_ROLLNUMBER, CHANGE_USERNAME, TOGGLE_BULB, USER_REGISTERED, USER_LOGOUT } from '../constant/ActionTypes';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage';

// export function signupUser(user) {
//     return dispatch => {
//         firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//             .then((registeredUser) => {
//                 console.log(`User has be created.`, registeredUser);
//                 delete user.password;
//                 console.log(user);
//                 firebase
//                     .firestore()
//                     .collection('users')
//                     .add(user)
//                     .then(() => {
//                         console.log('data has been saved.')
//                         user.uid = registeredUser.user.uid;
//                         dispatch({ type: USER_REGISTERED, payload: user })

//                     })
//                     .catch((e) => {
//                         console.log(e)
//                     })

//             })
//         console.log('ousid promise');
//     }
// }


async function uploadPic(image) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(image);
            const fetchResponse = await fetch(image);
            const blob = await fetchResponse.blob();
            let storage = firebase.storage();
            let storageRef = storage.ref();
            let imageName = Date.now();
            let imagesRef = storageRef.child(`restaurantCover/${imageName}.jpg`);
            var file = blob;

            return imagesRef.put(file).then(function (snapshot) {
                console.log('Uploaded a blob or file!');
                imagesRef.getDownloadURL().then(function (url) {
                    console.log('Uploaded a blob or file!', url);
                    resolve(url);
                })
            });

        } catch (error) {
            console.log('ERR: ' + error.message);
        }

    })

}


export function signupUser(user) {
    return async dispatch => {
        let imageURL = await uploadPic(user.imageUri);
        let registeredUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
        delete user.password;
        delete user.imageUri;
        user.imageURL = imageURL;
        user.uid = registeredUser.user.uid;
        console.log(user, 'user data')
        await firebase.firestore().collection('restaurantUsers').add(user);
        dispatch({ type: USER_REGISTERED, payload: user })
    }
}



export function signin(user) {
    return async dispatch => {
        let authenticatedUser = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
        delete user.password;
        user.uid = authenticatedUser.user.uid;
        console.log(user, 'user');

        let userFound = await firebase.firestore().collection('restaurantUsers').where("uid", "==", user.uid).get();
        userFound.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            dispatch({ type: USER_REGISTERED, payload: user })
        });


    }
}




// let user2Uid = '32UTvjICmZhxw5GyLR2FQjS6v682';
// let user1Uid = 'MgGfxAQOtTbvhehWuWhHPgyWgFR2';

// let chatDocId;

// if (user1Uid > user2Uid) {
//     chatDocId = user1Uid + user2Uid;
// }
// else {
//     chatDocId = user2Uid + user1Uid;
// }






export function fetchUserInfo(uid) {
    return async dispatch => {
        let userFound = await firebase.firestore().collection('users').where("uid", "==", uid).get();
        userFound.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            dispatch({ type: USER_REGISTERED, payload: doc.data() })
        });
    }
}






export function logout() {
    return async dispatch => {
        console.log('logout');
        await firebase.auth().signOut();
        dispatch({ type: USER_LOGOUT })
    }
}



















export function chagneAuth() {
    return dispatch => {
        dispatch({ type: CHANGE_AUTH })
    }
}

export function changeRollNumber() {
    return dispatch => {
        dispatch({ type: CHANGE_ROLLNUMBER, payload: 2643 })
    }
}


export function changeUserName(name) {
    return dispatch => {
        console.log(name, 'inside auth action')
        dispatch({ type: CHANGE_USERNAME, payload: name })
    }
}



export function toggleBulb() {
    return dispatch => {
        dispatch({ type: TOGGLE_BULB })
    }
}












