import { Link } from "react-router-dom"
import styles from './Navbar.module.css'


function Navbar(props){
    const scroll = () => {
        const element = document.getElementsByClassName('about')
        console.log(element)
        if (element) element[0].scrollIntoView()
    };

    return(
        <nav>
            <Link to="/">Ínicio</Link>
            <Link to="/procedimentos">Procedimentos</Link>
            <button onClick={scroll} >Sobre nós</button>
            <Link to="/cadastro">Cadastre-se</Link>

        </nav>
    )
}

export default Navbar