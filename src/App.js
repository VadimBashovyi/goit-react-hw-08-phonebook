import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import ContactsPages from './Pages/ContactsPages/ContactsPages'
import ContactsAdd from './Pages/ContactsAdd/ContactsAdd'
import LoginPages from './Pages/LoginPages/LoginPages'
import RegistrPages from './Pages/RegistrPages/RegistrPages'
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
// import LoginIn from './components/LoginIn/LoginIn'
import Header from './components/Header/Header'
import { ToastContainer } from 'react-toastify'
// import RegistrForm from './components/RegistrationForm/RegistrationForm'
import styled from './App.css'
import Container from './components/Container/Container'
// import Phonebook from './components/Phonebook/Phonebook'
// import Contacts from './components/Contacts/Contacts'
// import Filter from './components/Filter/Filter'
import { Redirect, Switch } from 'react-router-dom'
import { fetchCurrentUser } from './redux/auth/auth-operations'
import { getFetchingCurrentUser } from './redux/auth/auth-selectors'

export default function App() {
  const dispatch = useDispatch()
  const fetchingCurrentUser = useSelector(getFetchingCurrentUser)
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    !fetchingCurrentUser && (
      <div className={styled.allContainer}>
        <Header />
        <Container>
          <div className={styled.app}>
            <Switch>
              <PublicRoute path="/register" restricted>
                <RegistrPages />
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <LoginPages />
              </PublicRoute>
              <PrivateRoute path="/contacts/add">
                <ContactsAdd />
              </PrivateRoute>
              <PrivateRoute path="/contacts">
                <ContactsPages />
              </PrivateRoute>
              <Redirect to="/contacts" />
            </Switch>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </Container>
      </div>
    )
  )
}
