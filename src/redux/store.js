import { createStore } from 'redux';
import contactReducer from "./contacts/contactReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(contactReducer , composeWithDevTools())
export default store