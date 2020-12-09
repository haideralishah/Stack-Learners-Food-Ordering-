import { GET_ALL_RECIPIENT, FETCH_ALL_CHATS, CLEAR_CHAT } from "../constant/ActionTypes";


const INIT_STATE = {
    chats: [],
    recipients: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_RECIPIENT: {
            let allRecepients = state.recipients.slice(0);
            let newUser = true;
            allRecepients.map((recipient) => {
                if (recipient.id === action.payload.id) {
                    newUser = false;
                }
            })

            if (allRecepients.length === 0 || newUser) {
                allRecepients.push(action.payload);
            }
            return {
                ...state,
                recipients: allRecepients
            }
        }

        case FETCH_ALL_CHATS: {
            let chatClone = state.chats.slice(0);
            chatClone.push(action.payload);
            return {
                ...state,
                chats: chatClone
            }
        }
        case CLEAR_CHAT: {
            return {
                ...state,
                chats: []
            }
        }
        default:
            return state;
    }
}
