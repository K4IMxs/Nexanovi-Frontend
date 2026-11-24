import { Link } from "react-router-dom";
import styles from "../styles/components/LandingFooter.module.css"

function LandingFooter() {
    return (
        <footer className={styles.footer}>
            <span className={styles.marca}>Todo-list</span>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>
                Inicio</Link>
                <Link to="/about" className={styles.link}>
                Sobre</Link>
                <Link to="/" className={styles.link}>
                Minhas Tarefas</Link>
            </nav>
            <p className={styles.copyright}>
                Desenvolvido por Ryan Oliveira Andrade - Projeto de estudo senac tec
            </p>
        </footer>
    )
}export { LandingFooter }