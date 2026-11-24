import {Link} from "react-router-dom"
import styles from "../styles/components/LandingHero.module.css"
import ButtonStyles from "../styles/components/Button.module.css"

function LandingHero() {
    return (
        <section className={styles.hero}>
            <span className={styles.badge}>Gratis, sem custo algum!</span>
            <h1 className={styles.tittle}>Organize suas tarefas e visualize sua produtividade</h1>
            <p className={styles.subtitle}>Crie, priorize e acompanhe suas tarefas num só lugar
                e enxergue, com dados de verdade, como sua rotina evolui.</p>
                <div className={styles.CTA}>
                    <Link to="/register" className={`
                        ${ButtonStyles.button} 
                        ${ButtonStyles.primary} 
                        ${ButtonStyles.lg}`}
                    > Comece agora</Link>
                    <a href="#funcionalidades" className={`
                        ${ButtonStyles.button} 
                        ${ButtonStyles.secondary} 
                        ${ButtonStyles.lg}`}>
                        Veja como funciona
                    </a>
                </div>
        </section>
    )
}export {LandingHero}