import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/slice';
import { selectFilter } from '../../redux/contacts/selectors'; 
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter); 

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value)); 
  };

  return (
    <input
      className={css.searchBox}
      type="text"
      name="search"
      placeholder="Search contacts..."
      value={filterValue}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}
