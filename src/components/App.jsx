import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import Stats from './Stats/Stats';
import Loader from './Loader/Loader';
import css from './App.module.css';
import { FaAddressBook } from "react-icons/fa";
import { selectLoading } from '../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1><FaAddressBook className={css.icon} />Phonebook</h1>
      <ContactForm />
      <Stats />
      <SearchBox />
      {loading && <Loader />}
      {!loading && <ContactList />}
    </div>
  );
}
