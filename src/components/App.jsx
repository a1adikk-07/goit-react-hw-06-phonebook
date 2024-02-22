// import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styles from './app-style.module.css';
// import { setFilter } from '../redux/filter/filter-slice';
// import { getFilteredContacts } from '../redux/contacts/contacts-selector';

function App() {
  // const contacts = useSelector(getFilteredContacts);
  // const dispatch = useDispatch();

  // const isDublicate = ({ name }) => {
  //   const normolizedName = name.toLowerCase();
  //   const dublicate = contacts.find(item => {
  //     const normalizedCurrentName = item.name.toLowerCase();
  //     return normalizedCurrentName === normolizedName;
  //   });
  //   return Boolean(dublicate);
  // };

  // const onAddContact = data => {
  //   if (isDublicate(data)) {
  //     return alert(` ${data.name} is already in contacts`);
  //   }

  //   const action = addContact(data);
  //   dispatch(action);
  // };

  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  // const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.appdiv}>
      <div>
        <h1 className={styles.appTitle}>Your phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.listContacts}>
        <h1 className={styles.appTitle}>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
