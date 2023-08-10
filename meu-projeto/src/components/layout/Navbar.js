import { Link } from "react-router-dom"
import styles from './Navbar.module.css'


function Navbar(props){
    const scroll_about = () => {
        const element = document.getElementsByClassName(props.local_sobrenos)
        console.log(element)
        if (element) element[0].scrollIntoView()
    };

    return(
        <nav>
            <Link to="/">Ínicio</Link>
            <Link to="/procedimentos">Procedimentos</Link>
            <button onClick={scroll_about} >Sobre nós</button>
            <Link to="/cadastro">Cadastre-se</Link>

        </nav>
    )
}

export default Navbar