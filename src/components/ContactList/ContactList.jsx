import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts, selectLoading } from '../../redux/contacts/slice';
import { RxCross1 } from "react-icons/rx";
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
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
    <div className={css.tableWrapper}>
      {isLoading ? (
        <p>Loading...</p>
      ) : contacts.length > 0 ? (
        <table className={css.table}>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>
                  <div className={css.deleteBtnWrapper}>
                    <RxCross1 size='24px' className={css.deleteBtn} onClick={() => handleDelete(contact.id)}/> 
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
}
