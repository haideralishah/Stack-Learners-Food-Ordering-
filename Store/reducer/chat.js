import { GET_ALL_RECIPIENT } from "../constant/ActionTypes";


const INIT_STATE = {
    chats: [],
    recipients: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_RECIPIENT: {
            let allRecepients = state.recipients.slice(0);
            allRecepients.push(action.payload);
            return {
                ...state,
                recipients: allRecepients
            }
        }

        default:
            return state;
    }
}
