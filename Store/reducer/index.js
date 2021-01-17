import Auth from './auth';
import Chat from './chat';
import Appointments from './appointments';
import Food from './food';
import { combineReducers } from 'redux';

export default combineReducers({
    auth: Auth,
    chat: Chat,
    appointments: Appointments,
    food: Food
});