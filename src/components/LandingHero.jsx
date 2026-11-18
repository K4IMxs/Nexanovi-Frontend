import {Link} from "react-router-dom"
import { PackagePlus, Shirt, HeartHandshake, UserRound } from "lucide-react"
import styles from "../styles/components/LandingHero.module.css"
import ButtonStyles from "../styles/components/Button.module.css"

const DESTAQUES = [
    { titulo: "Monte sua vitrine", icon: PackagePlus },
    { titulo: "Garimpe roupas", icon: Shirt },
    { titulo: "Campanhas de doação", icon: HeartHandshake },
    { titulo: "Tenha seu próprio perfil", icon: UserRound },
]

function LandingHero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.tittle}>Klozet: Desapegue do que passou.<br />Descubra um novo look.</h1>
            <p className={styles.subtitle}>O fim do guarda-roupa de alguém é o começo do seu próximo look favorito.</p>
            <div className={styles.CTA}>
                <Link to="/register" className={`${ButtonStyles.button} ${ButtonStyles.primary} ${ButtonStyles.lg}`}>
                    Cadastrar agora
                </Link>
                <Link to="/marketplace" className={`${ButtonStyles.button} ${ButtonStyles.secondary} ${ButtonStyles.lg}`}>
                    Começar a garimpar
                </Link>
            </div>
            <div className={styles.destaques}>
                {DESTAQUES.map(({ titulo, icon: Icon }) => (
                    <article className={styles.destaque} key={titulo}>
                        <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                        <span>{titulo}</span>
                    </article>
                ))}
            </div>
        </section>
    )
}export {LandingHero}