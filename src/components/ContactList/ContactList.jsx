import React from 'react';
import styles from '../ContactList/contact-list.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import filterSlice from '../../redux/filter/filter-slice';
import { deleteContact } from '../../redux/contacts/contacts-slice';

const DeleteMyContact = () => {
  const contacts = useSelector(state => state.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterSlice);

  const searchName = () => {
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
  };

  return (
    <>
      <ul className={styles.list}>
        {searchName().map(({ id, name, number }) => (
          <li key={id} className={styles.contacts}>
            {name}: {number}
            <button
              className={styles.delete}
              onClick={() => dispatch(deleteContact(id))}
              type="button"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DeleteMyContact;
