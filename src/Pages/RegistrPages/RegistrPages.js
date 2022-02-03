import RegistrForm from '../../components/RegistrationForm/RegistrationForm'

import styled from '../RegistrPages/RegistrPages.module.scss'

export default function UserRegisterForm() {
  return (
    <section className={styled.userSections}>
      <div className={styled.container}>
        <RegistrForm />
      </div>
    </section>
  )
}
