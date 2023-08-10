import styles from './Card.module.css'

function Card({text1, text2, text3}) {
    return (
        <div className={styles.cards}>
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)",}}>
                {text1} 
            </div>
    
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/lunch.jpg)",}}>
                {text2}
            </div>
    
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/dinner.jpg)",}}>
                {text3}
            </div>
        </div>
    )
}

export default Card