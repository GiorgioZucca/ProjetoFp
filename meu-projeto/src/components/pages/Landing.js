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
        paragraph="Bem-vindo à JJ Estética Jovem, o seu refúgio exclusivo para cuidados estéticos em São José dos Campos! Entendemos que cada pessoa é única, e é por isso que nossa abordagem se baseia em atendimento personalizado, focado em soluções sob medida para atender às suas necessidades individuais. Acreditamos profundamente que a verdadeira beleza só se manifesta quando há equilíbrio entre cuidados externos e internos, e é por isso que reunimos uma equipe de especialistas dedicados a ajudar você a alcançar resultados excepcionais.

        Nossa equipe diversificada inclui uma esteticista altamente capacitada, pronta para revitalizar sua pele com procedimentos de drenagem e limpeza que deixam você com uma sensação renovada. Nossa dermatologista experiente é habilidosa em uma variedade de tratamentos, desde os mais delicados, como a aplicação de botox, até procedimentos avançados que demandam precisão técnica. Complementando nosso time, temos uma nutricionista especializada em harmonizar sua alimentação, assegurando que seu bem-estar interno se reflita em sua aparência externa.
        
        Na JJ Estética Jovem, não enxergamos apenas clientes, mas indivíduos únicos em busca de cuidado excepcional. Venha nos visitar e descubra a verdadeira harmonia entre beleza e equilíbrio em cada aspecto da sua jornada estética.
        
        
        
        
        "
        image="https://images.unsplash.com/photo-1564277287253-934c868e54ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80">
          
        </Rect>
      
      <Card text1="Tratamento 1" text2="Tratamento 2" text3="Tratamento 3"/>
      <Circ title="Espaço" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vehicula elit. Quisque non congue dui. Nullam sit amet turpis id libero feugiat cursus vitae nec ante. Sed ullamcorper id quam a tincidunt. Vivamus laoreet, ex nec varius aliquam, purus ipsum sodales orci, eu egestas orci odio non urna."
      image="https://images.unsplash.com/photo-1631248207065-771ae9ac32f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"/>
      <Footer/>
    </div>
  )
}

export default Landing;