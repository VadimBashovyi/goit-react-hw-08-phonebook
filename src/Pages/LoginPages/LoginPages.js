import LoginIn from '../../components/LoginIn/LoginIn'
import styled from '../../Pages/LoginPages/LoginPages.module.scss'

export default function UserLoginPages() {
  return (
    <section className={styled.userSections}>
      <div className={styled.container}>
        <LoginIn />
      </div>
    </section>
  )
}
