import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import DocumentTitle from '../../components/DocumentTitle'; 
import ContactForm from '../../components/ContactForm/ContactForm'; 
import ContactList from '../../components/ContactList/ContactList'; 
import SearchBox from '../../components/SearchBox/SearchBox'; 
import Stats from '../../components/Stats/Stats'; 
import Loader from '../../components/Loader/Loader'; 
import { FaAddressBook } from "react-icons/fa"; 
import { selectLoading } from '../../redux/contacts/selectors'; 
import { fetchContacts } from '../../redux/contacts/operations'; 
import css from './ContactsPage.module.css'; 

const ContactsPage = () => {
  const dispatch = useDispatch(); 
  const isLoading = useSelector(selectLoading); 
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <DocumentTitle>Contacts</DocumentTitle>
      <h1><FaAddressBook className={css.icon} /> Contacts</h1>
      <ContactForm />
      <Stats />
      <SearchBox />
      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
}

export default ContactsPage;
