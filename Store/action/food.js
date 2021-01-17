import { NEW_DISH, ADD_TO_CART } from '../constant/ActionTypes';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage';



async function uploadPic(image) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(image);
            const fetchResponse = await fetch(image);
            const blob = await fetchResponse.blob();
            let storage = firebase.storage();
            let storageRef = storage.ref();
            let imageName = Date.now();
            let imagesRef = storageRef.child(`dishItem/${imageName}.jpg`);
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




export function addNewDish(food) {
    return async dispatch => {
        let imageURL = await uploadPic(food.imageUri);
        delete food.imageUri;
        food.imageURL = imageURL;
        food.uid = firebase.auth().currentUser.uid;
        await firebase.firestore().collection('dish').add(food);
        dispatch({ type: NEW_DISH, payload: food })
    }
}







export function fetchRestaurantDishes(food) {
    return async dispatch => {
        let uid = firebase.auth().currentUser.uid;
        console.log('uid found', uid)
        let dishItem = await firebase.firestore().collection('dish').where("uid", "==", uid).get();
        dishItem.forEach(function (doc) {
            let dish = doc.data()
            dish.id = doc.id;

            dispatch({ type: NEW_DISH, payload: dish })
        });
    }
}




export function fetchAllDishes(food) {
    return async dispatch => {
        let dishItem = await firebase.firestore().collection('dish').get();
        dishItem.forEach(function (doc) {
            let dish = doc.data()
            dish.id = doc.id;
            dispatch({ type: NEW_DISH, payload: dish })
        });

    }
}



export function addDishToCart(food) {
    return async dispatch => {
        dispatch({ type: ADD_TO_CART, payload: food });
    }
}




export function placeOrderNow(order) {
    return async dispatch => {
        await firebase.firestore().collection('order').add(order);

    }
}
