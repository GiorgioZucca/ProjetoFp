import styles from './Circ.module.css'

function Circ({title, image}) {
    return ( 
        <div className={styles.circCont}>
        <div className={styles.circText}>
            <h1>{title}</h1>
            <p>A clínica é meticulosamente projetada para oferecer uma experiência excepcional aos clientes. Cada detalhe é cuidadosamente considerado para criar um ambiente sofisticado e relaxante, onde o conforto e o bem-estar são prioridades. Desde a decoração elegante e contemporânea até a escolha de materiais de alta qualidade, o espaço reflete o compromisso com o luxo e a excelência.</p>
            <p>A atmosfera é serena, com iluminação suave e música suave que acalma os sentidos. Salas de tratamento são equipadas com equipamentos de última geração, proporcionando uma variedade de opções de procedimentos de estética avançada. Uma atenção especial é dada à privacidade e ao atendimento personalizado, com profissionais altamente treinados que orientam os clientes em suas jornadas de beleza e bem-estar.</p>
        </div>
        <div className={styles.circImage}>
            <img src={image}/>
        </div>
        </div>
    )
}

export default Circ