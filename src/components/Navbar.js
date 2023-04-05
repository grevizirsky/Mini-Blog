import { Link } from "react-router-dom"

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/" className={styles.brand}>
            Mini <span>Blog</span>
        </Link>
        <ul className={styles.links_list}>
            <li>
                <Link to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</Link>
            </li>
            <li>
                <Link to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</Link>
            </li>
            <li>
                <Link to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</Link>
            </li>
            <li>
                <Link to="/about" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar