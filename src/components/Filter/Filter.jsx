import { useSelector, useDispatch } from 'react-redux';
import styles from "./Filter.module.css";
import { contactFilter} from "../../redux/phonebook/slice-filter"

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
 
  return (
    <label htmlFor="name" className={styles.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        className={styles.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onInput={e => dispatch(contactFilter(e.target.value))}
      />
    </label>
  );
}


