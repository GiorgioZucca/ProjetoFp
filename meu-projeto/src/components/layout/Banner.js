import styles from './Banner.module.css'
import Btn from './Btn'

function Banner(){
  return(
    <div className={styles.banner} style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/background.png)`,
      }}>
        <div className={styles.bannerContainer}>
          <h1>
            Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!
          </h1>
          <p>Change your life and learn to code at one of our campuses around the world.</p>
          <Btn message="Cadastre-se"/>
        </div>
      </div>
  )
}
export default Banner