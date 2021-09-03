import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AddContact from './components/AddContact.jsx';
import Nav from './components/Nav.jsx';
import Contacts from './components/Contacts.jsx';
import './App.css';
import ContactDetail from './components/ContactDetail.jsx';

function App({ contacts }) {
  return (
    <div className="App">
      <header className="App-header">
      <Route path='/' component={Nav} />
      <Route path='/' exact component={Contacts} />
      <Route path='/add-contact' exact component={AddContact} />
      <Route path='/contact/:id' exact render={({match, history})=>{
        const contact= contacts.find((contact) => contact.id=== parseInt(match.params.id))
        return <ContactDetail contact={contact} push={history.push}/>
      }} 
      />
      </header>
    </div>
  );
}
function mapStateToProps(state){
  return {
      contacts: state
  }
}


export default connect (mapStateToProps) (App);
