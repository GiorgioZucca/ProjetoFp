import styles from './Btn.module.css'

function Btn({message}) {
    return(
        <a className={styles.btnFlat}>{message}</a>
    )
}
export default Btn