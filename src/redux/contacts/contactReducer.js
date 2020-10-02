import {ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT,DELETE_CONTACT} from "./contactTypes";
import shortid from 'shortid';

const initialState ={
    allContacts:[
        {
            id:shortid.generate(),
            name:"asad",
            email:"asadalkhair1994@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },
        {
            id:shortid.generate(),
            name:"mohsin",
            email:"mohsin@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },
        {
            id:shortid.generate(),
            name:" aiqa",
            email:"aiqa@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },
        {
            id:shortid.generate(),
            name:" Nadeem arif",
            email:"arif@gmail.com",
            dateCreated:"10/02/2020",
            dateModified:"10/02/2020",
        },

    ],
    contact:null,
}
 const contactReducer=(state=initialState, action)=>{
    switch (action.type){
        case ADD_CONTACT:return{
            ...state,
            allContacts: [action.payload, ...state.allContacts]
        }
        case GET_CONTACT:
            let arr = state.allContacts.filter((contact) => contact.id === action.payload)
            arr = arr.values();
            for (let val of arr){
                arr= val
            }
            return{

            ...state,
            contact: arr
        }
        case UPDATE_CONTACT:return{
            ...state,
            allContacts: state.allContacts.map(contact=> contact.id === action.payload ? action.payload : contact)
        }
        case DELETE_CONTACT:return{
            ...state,
            allContacts: state.allContacts.filter(contact=> contact.id !== action.payload)
        }
        default : return state
    }
}
export default contactReducer;