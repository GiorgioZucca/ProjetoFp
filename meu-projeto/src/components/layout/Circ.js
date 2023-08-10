import styles from './Circ.module.css'

function Circ({title, paragraph, image}) {
    return ( 
        <div className={styles.circCont}>
        <div className={styles.circText}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
        <div className={styles.circImage}>
            <img src={image}/>
        </div>
        </div>
    )
}

export default Circ