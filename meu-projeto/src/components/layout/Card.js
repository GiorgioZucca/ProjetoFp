import styles from './Card.module.css'

function Card({text1, text2, text3}) {
    return (
    <div> 
        <div className={styles.cards}>
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://www.icosmetologia.com.br/Arquivos/Noticia/noticia-142929.jpg)",}}>
                {text1} 
            </div>
    
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://karengoulart.com.br/wp-content/uploads/2020/02/aplica%C3%A7%C3%A3o-botox-1024x768.jpg)",}}>
                {text2}
            </div>
    
            <div className={styles.cardCategory} style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://mealthclinic.com.br/wp-content/uploads/2023/02/slide-ultraformer-ipad.jpg)",}}>
                {text3}
            </div>
        </div>

        <div className={styles.cardsT}>
            <p>A luz pulsada intensa (IPL) é um procedimento estético avançado que utiliza pulsos de luz para tratar diversos problemas de pele. Seus benefícios abrangem a remoção de manchas, combatendo sardas e manchas solares, o controle da acne ao reduzir inflamações e bactérias, a diminuição de rugas e linhas finas ao estimular o colágeno, além da eficácia na remoção de pelos indesejados. Com a capacidade de melhorar a aparência geral da pele, a IPL oferece uma solução versátil e não invasiva.</p>
            <p>O procedimento de aplicação de Botox, também conhecido como toxina botulínica, é uma técnica não cirúrgica utilizada para reduzir temporariamente as rugas e linhas de expressão que surgem na pele devido à contração repetida dos músculos faciais ao longo do tempo</p>
            <p>O procedimento com Ultraform oferece uma alternativa inovadora ao lifting cirúrgico convencional, com resultados notáveis de rejuvenescimento e firmeza. Sua abordagem não invasiva, combinada com benefícios de recuperação rápida e resultados naturais, faz do Ultraform uma opção atraente para aqueles que desejam melhorar sua aparência sem os compromissos associados à cirurgia estética tradicional.</p>
        </div>
    </div>
    )
}

export default Card