import { Link } from 'react-router-dom'
import { Heart, Package, ShoppingBag, Star } from 'lucide-react'
import styles from '../styles/pages/DashboardPage.module.css'

function DashboardPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.cabecalho}>
        <p>Olá, Nome do Brechó</p>
        <h1>Como anda seu brechó</h1>
      </header>
      <section className={styles.stats}>
        <article><Package /><span>Produtos ativos</span><strong>24</strong></article>
        <article><ShoppingBag /><span>Pedidos pendentes</span><strong>3</strong></article>
        <article><Star /><span>Avaliação</span><strong>4,8</strong></article>
        <article><Heart /><span>Peças doadas</span><strong>7</strong></article>
      </section>
      <section className={styles.review}>
        <div className={styles.reviewTop}>
          <h2>Suas avaliações</h2>
          <button type="button">Ver mais</button>
        </div>
        <article>
          <div className={styles.avatar}>CV</div>
          <div><strong>Carmen Vitória</strong><p>Amei as roupas desse brechó, comprei esse lindo vestido e adorei!</p></div>
          <span>5h atrás</span>
        </article>
      </section>
      <section className={styles.quick}>
        <Link to="/tasks"><Package /> Meus produtos</Link>
        <Link to="/analytics"><ShoppingBag /> Pedidos</Link>
        <Link to="/campaigns"><Heart /> Campanhas</Link>
        <Link to="/profile"><Star /> Perfil da loja</Link>
      </section>
    </div>
  )
}

export { DashboardPage }
