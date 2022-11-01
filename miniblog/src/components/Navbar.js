import { NavLink } from 'react-router-dom';

//CSS
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand} >
            Carola's <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list} >
            <li>
                <NavLink to='/' classname={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
            </li>
            <li>
            <NavLink to='/login' classname={({isActive}) => (isActive ? styles.active : '')} >Entrar</NavLink>
            </li>
            <li>
            <NavLink to='/register' classname={({isActive}) => (isActive ? styles.active : '')} >Registre-se</NavLink>
            </li>
            <li>
            <NavLink to='/about' classname={({isActive}) => (isActive ? styles.active : '')} >Sobre</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
