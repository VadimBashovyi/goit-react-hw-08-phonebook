import UserMenu from "../UserMenu/UserMenu"
import { getUserIsLoggedIn } from "../../redux/auth/auth-selectors"
import { useSelector } from 'react-redux';
import styled from "./Header.module.css"



const Header=() => {
    
    const isLoggedIn = useSelector(getUserIsLoggedIn)
    
    return (
        <div className={styled.container}>
            <div className={styled.navMenu}>
                <h1 className={styled.title}>Phonebook</h1>
                {isLoggedIn && <UserMenu/>}
            </div>
        </div>
        
    )
}

export default Header