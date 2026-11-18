import { CheckSquare, HeartHandshake, Home, LogOut, Store, UserRound } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom' // <-- Adicionado useNavigate
import { useAuth } from '../context/AuthContext'
import styles from '../styles/components/Sidebar.module.css'

const ITENS = [
    { rota: '/dashboard', rotulo: 'Painel', icon: Home},
    { rota: '/tasks', rotulo: 'Produtos', icon: Store},
    { rota: '/analytics', rotulo: 'Pedidos', icon: CheckSquare},
    { rota: '/campaigns', rotulo: 'Campanhas', icon: HeartHandshake},
    { rota: '/profile', rotulo: 'Perfil da loja', icon: UserRound},
]

function Sidebar() {
    const { logout } = useAuth()
    const navigate = useNavigate() // <-- Inicializado aqui

    function aoSair() {
        logout()
        navigate('/login', { replace: true }) // <-- Redireciona para o login e limpa o histórico
    }

    return (
        <nav className={styles.nav} aria-label='Navegação principal'>
            <Link to='/' className={styles.mark}>
                <img src="/Klozet.png" alt="" />
                <span>KLOZET</span>
            </Link>
            <ul className={styles.list}>
                {ITENS.map(({ rota, rotulo, icon}) => {
                    const Icon = icon
                    return (
                        <li key={rota}>
                            <NavLink
                              to={rota}
                              end
                              className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
                            >
                                <Icon size={20} aria-hidden='true' />
                                <span className={styles.itemLabel}>{rotulo}</span>
                            </NavLink>
                        </li>
                    )
                })}
                <li>
                    <button type='button' onClick={aoSair} className={styles.item}>
                        <LogOut size={20} aria-hidden='true' />
                        <span className={styles.itemLabel}>Sair</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
} 

export { Sidebar }