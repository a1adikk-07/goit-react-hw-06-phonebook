import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const isDublicate = ({ name }) => {
    const normolizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normolizedName;
    });
    return Boolean(dublicate);
  };

  const onAddContact = data => {
    if (isDublicate(data)) {
      return alert(` ${data.name} is already in contacts`);
    }

    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      <ContactList items={contacts} deleteContact={onDeleteContact} />
    </div>
  );
};

export default App;
