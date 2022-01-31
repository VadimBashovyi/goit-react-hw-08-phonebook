import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import { addContacts } from '../../utilits/Api'
import { getContacts} from "../../redux/phonebook/redux-selector"


import styles from "./Phonebook.module.css";

export default function Phonebook() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const valueSubmit = (e) => {
    e.preventDefault();
    const contactsNew = {
      id: uuidv4(),
      name,
      number,
    }
    if (onCheck(name)) {
      alert(`${name} is already in contacts`)
      return
    }
    dispatch(addContacts(contactsNew));
    reset(e);
  };

  const reset = () => {
    setName("")
    setNumber("")
  };

  const onCheck = () => {
    return contacts.find((el) => el.name.toUpperCase() === name.toUpperCase())
  }
    return (
      <>
        <form className={styles.mainForm} onSubmit={valueSubmit}>
          <label htmlFor="name" className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              className={styles.input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={(e) => {setName(e.currentTarget.value)}}
              
            />
          </label>
          <label htmlFor="number" className={styles.label}>
            Phone
            <input
              type="tel"
              name="number"
              className={styles.input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={(e)=>{setNumber(e.currentTarget.value)}}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </>
    );
}



