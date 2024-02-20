import styles from '../ContactList/contact-list.module.css';
// import { useSelector } from 'react-redux';

export const deleteContact = ({ items }) => {
  return (
    <>
      <ul className={styles.list}>
        {items.map(({ id, name, number }) => (
          <li key={id} className={styles.contacts}>
            {name}: {number}{' '}
            <button
              className={styles.delete}
              onClick={() => deleteContact(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
// };
