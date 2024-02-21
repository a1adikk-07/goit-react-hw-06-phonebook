import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';
import style from '../ContactForm/contact-form.module.css';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

export const ContactForm = () => {
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

  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  // const [state, setState] = { ...INITIAL_STATE };

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;

  //   setState(prevState => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = evt => {
  //   evt.preventDefault();

  //   onSubmit({ ...state });

  //   reset();
  // };

  // const reset = () => {
  //   setState({ ...INITIAL_STATE });
  // };

  // const { name, number } = state;
  // onSubmit = { onAddContact };

  return (
    <form>
      <div className={style.phoneBook}>
        <label>Name</label>
        <input
          className={style.input}
          // value={name}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="enter new contact"
          required
        ></input>
        <label>Number</label>
        <input
          className={style.input}
          // value={number}
          type="tel"
          name="number"
          onChange={changeFilter}
          placeholder="enter phone number"
          required
        ></input>
        <button
          onAddContact={onAddContact}
          className={style.phoneBtn}
          type="submit"
        >
          Add contact
        </button>
      </div>
    </form>
  );
};
