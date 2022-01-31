import { useDispatch } from "react-redux";
import styles from "./ContactItem.module.css";
import { deletedContact } from "../../utilits/Api"

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch()
  return (
    <>
      <span className={styles.itemText}>{name}</span>
      <span className={styles.itemText}>{number}</span>
      <button
        type="button"
        className={styles.button}
        
        onClick={() => dispatch(deletedContact(id))}
      >
        Delete
      </button>
    </>
  );
}




