import { useSelector } from 'react-redux';
import styles from "./Contacts.module.css";
import ContactItem from "../ContactItem/ContactItem";
import { getFilteredContacts } from "../../redux/phonebook/redux-selector"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from "../../utilits/Api"



export default function Contacts() {
  const filContacts = useSelector(getFilteredContacts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllContacts())
  }, [dispatch])
  
    return (
      <ul className={styles.list}>
        {filContacts.map((el) => (
          <li className={styles.item} key={el.id}>
            <ContactItem
              id={el.id}
              name={el.name}
              number={el.number}
            />
          </li>
        ))}
      </ul>
    );
    
  
}




