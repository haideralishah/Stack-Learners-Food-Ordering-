import { NEW_DISH, ADD_TO_CART } from "../constant/ActionTypes";


const INIT_STATE = {
    dishes: [],
    cart: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case NEW_DISH: {
            let dishesClone = state.dishes.slice(0);
            dishesClone.push(action.payload);
            return {
                ...state,
                dishes: dishesClone
            }
        }

        case ADD_TO_CART: {
            let cartClone = state.cart.slice(0);
            let dishItem = action.payload;


            let isAlreadyInCart = false;
            let cartIndex;
            for (var i = 0; i < cartClone.length; i++) {                
                if (cartClone[i].dishName == dishItem.dishName) {
                    isAlreadyInCart = true;
                    cartIndex = i;
                    break;
                }
            }
            if (isAlreadyInCart) {
                dishItem = cartClone[cartIndex];
                dishItem.quantity++;
                dishItem.totalPrice = dishItem.quantity * dishItem.price;
                cartClone.splice(cartIndex, 1, dishItem);
            }
            else {
                dishItem.quantity = 1;
                dishItem.totalPrice = dishItem.quantity * dishItem.price;
                cartClone.push(dishItem);
            }
            return {
                ...state,
                cart: cartClone
            }
        }
        default:
            return state;

    }
}

