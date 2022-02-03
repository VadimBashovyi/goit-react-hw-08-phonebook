import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail} from '../../redux/auth/auth-selectors';
import { logOut } from "../../redux/auth/auth-operations"
import styled from "./UserMenu.module.scss"
import { ImEnter } from 'react-icons/im';


export default function UserMenu() {
    const dispatch = useDispatch()
    const userName = useSelector(getUserEmail)



    return (
        <div className={styled.userContainer}>
            <span className={styled.userText}>{userName}</span>
            <button className={styled.userLogin} type='button' onClick={() => dispatch(logOut())}>
                <ImEnter  />
            </button>
            
        </div>

    )
}