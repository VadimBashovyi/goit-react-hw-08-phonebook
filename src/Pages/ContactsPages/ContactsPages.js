import Contacts from '../../components/Contacts/Contacts'
import { ImUserPlus } from 'react-icons/im'
import Filter from '../../components/Filter/Filter'
import { useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from './ContactsPages.module.css'
import { useSelector } from 'react-redux'

export default function ContactsPages() {
  const { path } = useRouteMatch()
  const contactsItem = useSelector((state) => state.contacts.items)

  return (
    <section className={styled.sections}>
      <div className={styled.backContainer}>
        <div className={styled.container}>
          <div className={styled.six}>
            <h1 className={styled.title}>
              <span>Contacts</span>
            </h1>
          </div>
          <Link className={styled.userLink} to={`${path}/add`}>
            <ImUserPlus style={{ fontSize: ' 30px' }} />
          </Link>
        </div>
        {contactsItem.length >= 2 && <Filter />}
        <Contacts />
      </div>
    </section>
  )
}
