import { useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'
import { addContacts } from '../../utilits/Api'
import { getContacts } from '../../redux/phonebook/redux-selector'
import styled from '../ContactsForm/ContactsForm.module.css'
import { Link } from 'react-router-dom'

export default function ContactsForm() {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()
  const history = useHistory()
  const contactsRef = useRef(false)

  useEffect(() => {
    if (!contactsRef.current) {
      contactsRef.current = true
      return
    }
    history.push('/contacts')
  }, [history, contacts])

  const clickSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const number = e.target.number.value

    if (nameVerfContacts(name)) {
      toast.error(`${name} is alreary in contacts`)
      return
    }
    const newContacts = {
      name,
      number,
    }
    dispatch(addContacts(newContacts))
    reset(e)
  }

  const nameVerfContacts = (name) => {
    return contacts.find((contact) => name === contact.name)
  }

  const reset = (e) => {
    e.target.name.value = ''
    e.target.number.value = ''
  }
  return (
    <div className={styled.container}>
      <form className={styled.userForm} onSubmit={clickSubmit}>
        <label className={styled.userLabel}>
          <span className={styled.userText}>Name</span>
          <input
            className={styled.userInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов."
            required
          />
        </label>
        <label className={styled.userLabel}>
          <span className={styled.userText}>Number</span>
          <input
            className={styled.userInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={styled.btnAddContactas}>
          Add contact
        </button>
        <Link className={styled.userLink} to="/register">
          <span>Go to contacts page</span>
        </Link>
      </form>
    </div>
  )
}
