import {Link} from "react-router-dom"
import styles from "../styles/components/LandingCTA.module.css"
import ButtonStyles from "../styles/components/Button.module.css"

function LandingCTA() {
    return (
        <section className={styles.wraper}>
            <h2 className={styles.tittle}>Pronto para renovar seu estilo?</h2>
            <Link to="/register" className={`
                ${ButtonStyles.button} 
                ${ButtonStyles.primary} 
                ${ButtonStyles.lg}
                button`}
            >Começar agora</Link>
        </section>
    )
}export {LandingCTA}