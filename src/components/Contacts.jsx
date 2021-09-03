import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

function Contacts({contacts}){
return(
    <div>
<ul>
    {contacts.map((contact)=> (
    <Link to={`/contact/${contact.id}`}><li key={contact.id}>{`${contact.name} ${contact.surname}`}</li></Link>))}
</ul>
    </div>
)
}

function mapStateToProps(state){
    return {
        contacts: state
    }
}
export default connect(mapStateToProps)(Contacts);

// 