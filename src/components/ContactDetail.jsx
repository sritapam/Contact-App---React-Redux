import React from 'react';
import { connect } from 'react-redux';
import { removeContact, addFav, removeFav } from '../actions/index.js';

function ContactDetail({ contact, removeContact, addFav, removeFav, push }){

return(
<div>
    {contact ? <><div>
        <label>Nombre:</label>
        <span>{contact.name}</span>
    </div>
    <div>
        <label>Apellido:</label>
        <span>{contact.surname}</span>
    </div>
    <div>
        <label>Telefono:</label>
        <span>{contact.phone}</span>
    </div>
    <div>
        <label>Favorito:</label>
        <span>{contact.fav && 'Contacto Favorito'}</span>
    </div>
    <div>
        <button 
        onClick= {()=> {
        removeContact(contact.id)
        push('/')}}
        >Eliminar contacto</button>
        <button onClick={()=> (contact.fav ? removeFav(contact.id) : addFav(contact.id))}
    >
        {contact.fav ? 'Remover de FAV': 'Agregar a FAV'}
        </button>
    </div>
    </> : <h4>Contacto no encontrado</h4>}
</div>
);
}


export default connect (null, { removeContact, addFav, removeFav } )(ContactDetail);