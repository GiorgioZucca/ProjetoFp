import { Link } from "react-router-dom"
import styles from './Navbar.module.css'


function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src="/path/to/your/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.navLinks}>
                <Link className={styles.navLink} to="/">Ínicio</Link>
                <Link className={styles.navLink} to="/cadastro">Cadastre-se</Link>
            </div>
        </nav>
    )
}

export default Navbar