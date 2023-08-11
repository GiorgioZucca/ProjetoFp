import Banner from '../layout/Banner';
import Rect from '../layout/Rect';
import Card from '../layout/Card';
import Circ from '../layout/Circ';
import Footer from '../layout/Footer';

function Landing() {
  return (
    <div className="Landing">
      <Banner/>
      <Rect
        title="Sobre nós"  
        className = 'about'
        image="https://prontodermi.com.br/wp-content/uploads/2020/03/home-tratamentos-esteticistas-foto1.jpg">
          
        </Rect>
      
      <Card text1="Luz pulsada" text2="Botox" text3="Ultraformer"/>
      <Circ title="Espaço" 
      image="https://i.pinimg.com/originals/77/8e/4b/778e4b15c86e6e70f39598d23c17b879.jpg"/>
      <Footer/>
    </div>
  )
}

export default Landing;