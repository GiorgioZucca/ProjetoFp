import styles from './Banner.module.css'
import Btn from './Btn'

function Banner(){
  return(
    <div className={styles.banner} style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://i.pinimg.com/originals/eb/d0/c8/ebd0c8fe4921c8ca33b46fac156ba10d.jpg)`,
      }}>
        <div className={styles.bannerContainer}>
          <h1>
          JJ ESTÉTICA JOVEM 
          </h1>
          <p>A Arte da Beleza Autêntica Prevalece ao Cuidar da Sua Essência</p>
        </div>
      </div>
  )
}
export default Banner