import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
return(
    <nav>
<NavLink to= '/' exact>
    Contactos
</NavLink>
<NavLink to= '/add-contact' exact>
    Agregar Contacto
</NavLink>
 </nav>
)
}

export default Nav