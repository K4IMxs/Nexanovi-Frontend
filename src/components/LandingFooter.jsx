import { Link } from "react-router-dom";
import styles from "../styles/components/LandingFooter.module.css"

function LandingFooter() {
    return (
        <footer className={styles.footer}>
            <span className={styles.marca}>KLOZET</span>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>
                Início</Link>
                <Link to="/marketplace" className={styles.link}>
                Marketplace</Link>
                <Link to="/" className={styles.link}>
                Minha loja</Link>
            </nav>
            <p className={styles.copyright}>
                Desenvolvido por Ryan Oliveira Andrade - Projeto de estudo senac tec
            </p>
        </footer>
    )
}export { LandingFooter }