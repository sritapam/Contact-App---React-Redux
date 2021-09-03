import React from 'react';
import {addContact} from '../actions/index.js';
import { connect } from 'react-redux';


function validate(data){
    const errors = {};
    if (!data.name)errors.name = 'Debe ingresar un nombre';
    if (!data.surname)errors.surname = 'Debe ingresar un apellido';
    if (!data.phone)errors.phone = 'Debe ingresar un nombre';
    return errors;
}

function AddContact({addContact}){
    const [formData,setFormData]= React.useState({name:'',surname:'',phone:''});
    const [errors,setErrors]= React.useState({});

    function handleChange(e){
        setFormData((prevData)=> {
            const state = {
                ...prevData, 
                [e.target.name]: e.target.value,
            };
        const validations = validate(state);
        setErrors(validations);
        return state;
        });
    }

    function handleSubmit(e){
    e.preventDefault();
    if(Object.values(errors).length > 0) alert('Completar la informacion solicitada')
    else{
    addContact(formData.name, formData.surname, formData.phone);
    setFormData({name:'',surname:'',phone:''})}
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormItem label='Nombre:'name='name' value={formData.name} handleChange={handleChange} error={errors.name}
                />
                <FormItem label='Apellido:'name='surname' value={formData.surname} handleChange={handleChange} error={errors.surname}
                />
                <FormItem label='Teléfono:'name='phone' value={formData.phone} handleChange={handleChange} error={errors.phone}
                />
                <input type='submit' value='Guardar'></input>
            </form>
        </div>
    ) 
        
}

function FormItem({label, name, value, handleChange, error}){
    return (
                <div>
                    <label >{label}</label>
                    <input name= {name} value={value} onChange={handleChange}/>
                    <span>{error}</span>
                </div>
    )
}

export default connect (null, {addContact})(AddContact);

//</form>button type='submit'>Guardar</button> otra forma de boton 
// en el primer div del form puedo poner estilos <div> style= {display='flex', direction= 'column', width='20rem'}
//en el ultimo <span style={{colore:'red', fonrweith:700}}

//en el return en el <form onSubmit= {handleSubmit} style={{margin:'0 auto', width: 20 rem }}>