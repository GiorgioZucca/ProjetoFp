import Banner from '../layout/Banner';
import Rect from '../layout/Rect';
import Card from '../layout/Card';
import Circ from '../layout/Circ';
import styles from '../layout/Rect.module.css'
import Btn from '../layout/Btn'

function Cadastro({image, title}) {
    return( 
        <div className={styles.rectCont}>
            <div className={styles.rectText}>
            <h1>{title}</h1>


            <Btn message="Sobre nós"/>
            </div>

            <div className={styles.rectImage}>
                <img src={image}/>
            </div>
        </div>
    )
}
export default Cadastro