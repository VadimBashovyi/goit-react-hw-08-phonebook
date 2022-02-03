import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/auth-operations'
import styled from '../RegistrationForm/RegistrationForm.module.css'
import { Link } from 'react-router-dom'

export default function RegistrForm() {
  const dispatch = useDispatch()

  const clickSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    dispatch(register({ name, email, password }))
    reset(e)
  }

  const reset = (e) => {
    e.target.name.value = ''
    e.target.email.value = ''
    e.target.password.value = ''
  }

  return (
    <div className={styled.container}>
      <form className={styled.registerForm} onSubmit={clickSubmit}>
        <label className={styled.userLabel}>
          <span className={styled.textInput}>Name</span>
          <input
            className={styled.userInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styled.userLabel}>
          <span className={styled.textInput}>Email</span>
          <input
            className={styled.userInput}
            type="email"
            name="email"
            required
          />
        </label>
        <label className={styled.userLabel}>
          <span className={styled.textInput}>Password</span>
          <input
            className={styled.userInput}
            type="password"
            name="password"
            minLength="7"
            autoComplete="off"
            placeholder="at least 7 characters ..."
            required
          />
        </label>
        <button type="submit" className={styled.registrBtn}>
          Register
        </button>
        <Link className={styled.userLink} to="/login">
          <button className={styled.registrBtn}>Login Page</button>
        </Link>
      </form>
    </div>
  )
}
