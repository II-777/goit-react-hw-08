import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
      })
      .catch((error) => {
        console.error('Failed to delete contact:', error);
      });
  };

  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} onDelete={() => handleDelete(contact.id)} />
          </li>
        ))
      ) : (
        <li className={css.item}>No contacts found</li>
      )}
    </ul>
  );
}
