import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from '../images/SecondLogo.png'


function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.navLinks}>
                <Link className={styles.navLink} to="/">Ínicio</Link>
                <Link className={styles.navLink} to="/cadastro">Cadastre-se</Link>
            </div>
        </nav>
    )
}

export default Navbar