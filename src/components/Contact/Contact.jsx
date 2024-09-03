
import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';

export default function Contact({ data: { name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <p className={css.name}>
        <FaUser className={css.icon} /> {name}
      </p>
      <p className={css.phone}>
        <ImPhone className={css.icon} /> {number}
      </p>
      <button className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
