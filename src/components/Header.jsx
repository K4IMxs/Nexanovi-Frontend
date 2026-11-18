import { Link, useLocation} from 'react-router-dom'
import styles from '../styles/components/Hero.module.css'

function Header() {
    const { pathname } = useLocation()
    return(
        <header className={styles.header}>
            <Link to='/' className={styles.marca}>
                <img src="/Klozet.png" alt="" className={styles.logoMark} />
                <span>KLOZET</span>
            </Link>
            <nav className={styles.nav} aria-label='Navegação principal'>
                {pathname !== '/login' ? (
                    <Link to="/login" className={styles.entrar}>Entrar</Link>
                    ):null}
            </nav>
        </header>
    )
}export {Header}