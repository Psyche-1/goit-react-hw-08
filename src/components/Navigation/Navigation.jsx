import clsx from 'clsx'
import {NavLink} from 'react-router-dom'
import css from './Navigation.module.css'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

    return <>
        <nav className={css.nav}>
            <NavLink className={({isActive}) => clsx(css.link, isActive && css.active)} to='/'>Home</NavLink>
            { isLoggedIn ?(<NavLink className={({isActive}) => clsx(css.link, isActive && css.active)} to='/contacts'>Contacts</NavLink>)  :null}
        </nav>
    </>
}
export default Navigation;