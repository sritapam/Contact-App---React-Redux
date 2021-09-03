import {ADD_CONTACT, REMOVE_CONTACT,ADD_FAV,REMOVE_FAV} from '../actions/types'

const initialState= []
let prevId=0;

function reducer (state=initialState, {type, payload}){
    switch(type){
        case ADD_CONTACT: return [...state, {...payload, id: ++prevId}]
        case REMOVE_CONTACT: return state.filter((contact)=>contact.id !== payload);
        case ADD_FAV: return state.map((contact)=>{if (contact.id === payload){
            return {...contact, fav:true}   
                } else return {...contact};
            });
        case REMOVE_FAV:return state.map((contact)=>{if (contact.id === payload){
            return {...contact, fav:false}   
                } else return {...contact};
            });;
        default: return state;
    }
    
}

export default reducer;