import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import PublicRoute from './components/PublicRoute'
import LoginIn from './components/LoginIn/LoginIn'
import Header from './components/Header/Header'
import styled from './App.css'
import Container from './components/Container/Container'
import Phonebook from './components/Phonebook/Phonebook'
import Contacts from './components/Contacts/Contacts'
import Filter from './components/Filter/Filter'

import { Switch } from 'react-router-dom'

export default function App() {
  const filterCon = useSelector((state) => state.contacts.items)

  return (
    <div className={styled.allContainer}>
      <Header />
      <div className={styled.app}>
        <Switch>
          {/* <PublicRoute path="/register" restricted> */}
          <LoginIn />
          {/* </PublicRoute> */}
          {/* <Container title="Phonebook">
          <Phonebook />
        </Container>
        <Container title="Contacts">
          {filterCon.length >= 2 && <Filter />}
          <Contacts />
        </Container> */}
        </Switch>
      </div>
    </div>
  )
}
