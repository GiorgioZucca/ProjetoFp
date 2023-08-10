import styles from './Rect.module.css'
import Btn from './Btn'

function Rect({image, title, paragraph}) {
    return(
        <div className = 'about'> 
            <div className={styles.rectCont}>
                <div className={styles.rectImage}>
                    <img src={image}/>
                </div>
                <div className={styles.rectText}>
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <Btn message="Sobre nós"/>
                </div>
            </div>
        </div>
    )
}
export default Rect