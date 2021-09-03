import {ADD_CONTACT, REMOVE_CONTACT,ADD_FAV,REMOVE_FAV} from './types'

export function addContact(name, surname, phone){
    return {
        type:ADD_CONTACT,
        payload: {name, surname, phone, fav:false}
    }
}
export function removeContact(id){
    return {
        type:REMOVE_CONTACT,
        payload: id
    }
};

export function addFav(id){
    return {
        type:ADD_FAV,
        payload: id
    }
}
export function removeFav(id){
    return {
        type:REMOVE_FAV,
        payload: id
    }
}


//todas las acciones mandan data al reducer payload es la propiedad de la accion a la que le voy a mandar info a mi reducer