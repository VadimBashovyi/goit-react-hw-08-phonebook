import { useDispatch } from 'react-redux'
import { logIn } from '../../redux/auth/auth-operations'
import styled from './LoginIn.module.scss'
import { Link } from 'react-router-dom'

export default function LoginIn() {
  const dispatch = useDispatch()

  const clickSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    dispatch(logIn({ email, password }))
    reset(e)
  }

  const reset = (e) => {
    e.target.email.value = ''
    e.target.password.value = ''
  }

  return (
    <div className={styled.containerForm}>
      <span className={styled.titleForm}>Enter your login or register</span>
      <form className={styled.userForm} onSubmit={clickSubmit}>
        <label className={styled.userLabel}>
          <span className={styled.userEmail}>Email</span>
          <input
            className={styled.userInput}
            type="email"
            name="email"
            required
          ></input>
        </label>
        <label className={styled.userLabel}>
          <span className={styled.userEmail}>Password</span>
          <input
            className={styled.userInput}
            type="password"
            name="password"
            required
          ></input>
        </label>
        <button type="submit" className={styled.userBtnSubmit}>
          Login
        </button>
        <Link className={styled.userLink} to="/register">
          <button className={styled.userBtnSubmit}>Registration</button>
        </Link>
      </form>
    </div>
  )
}
