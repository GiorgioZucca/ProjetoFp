import styles from './Rect.module.css'
import Btn from './Btn'

function Rect({image, title}) {
    return(
        <div className = 'about'> 
            <div className={styles.rectCont}>
                <div className={styles.rectImage}>
                    <img src={image}/>
                </div>
                <div className={styles.rectText}>
                <h1>{title}</h1>
                <p>Bem-vindo à JJ Estética Jovem, o seu refúgio exclusivo para cuidados estéticos em São José dos Campos! Entendemos que cada pessoa é única, e é por isso que nossa abordagem se baseia em atendimento personalizado, focado em soluções sob medida para atender às suas necessidades individuais. Acreditamos profundamente que a verdadeira beleza só se manifesta quando há equilíbrio entre cuidados externos e internos, e é por isso que reunimos uma equipe de especialistas dedicados a ajudar você a alcançar resultados excepcionais.</p>
                <p>Nossa equipe diversificada inclui uma esteticista altamente capacitada, pronta para revitalizar sua pele com procedimentos de drenagem e limpeza que deixam você com uma sensação renovada. Nossa dermatologista experiente é habilidosa em uma variedade de tratamentos, desde os mais delicados, como a aplicação de botox, até procedimentos avançados que demandam precisão técnica. Complementando nosso time, temos uma nutricionista especializada em harmonizar sua alimentação, assegurando que seu bem-estar interno se reflita em sua aparência externa.</p>
                <p>Na JJ Estética Jovem, não enxergamos apenas clientes, mas indivíduos únicos em busca de cuidado excepcional. Venha nos visitar e descubra a verdadeira harmonia entre beleza e equilíbrio em cada aspecto da sua jornada estética.</p>
                </div>
            </div>
        </div>
    )
}
export default Rect