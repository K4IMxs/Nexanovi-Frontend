import { HeartHandshake } from 'lucide-react'
import styles from '../styles/pages/CampaignsPage.module.css'

const campanhas = [
  { nome: 'Inverno solidário', descricao: 'Agasalhos e peças de frio para famílias atendidas por ONGs parceiras em Minas Gerais.', meta: 200, atual: 90, status: 'Participando' },
  { nome: 'Volta às aulas', descricao: 'Uniformes e roupas infantis para crianças em início de ano letivo.', meta: 150, atual: 80, status: 'Ativa' },
  { nome: 'Reconstrução do Sul', descricao: 'Doações para famílias afetadas por enchentes no Rio Grande do Sul.', meta: 300, atual: 0, status: 'Em breve' },
]

function CampaignsPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div><h1>Campanhas de Doação</h1><p>Inscreva seu brechó em campanhas solidárias do Klozet.</p></div>
        <button type="button" className={styles.button}>Participar de campanha</button>
      </header>
      <div className={styles.stats}>
        <article><strong>2</strong><span>Campanhas ativas</span></article>
        <article><strong>7</strong><span>Peças doadas</span></article>
        <article><strong>1</strong><span>Aguardando coleta</span></article>
      </div>
      <h2>Campanhas disponíveis</h2>
      <div className={styles.grid}>
        {campanhas.map((campanha) => (
          <article className={styles.card} key={campanha.nome}>
            <div className={styles.icon}><HeartHandshake size={28} /></div>
            <span className={styles.status}>{campanha.status}</span>
            <h3>{campanha.nome}</h3>
            <p>{campanha.descricao}</p>
            {campanha.atual > 0 && (
              <div className={styles.progress}>
                <span>Meta: {campanha.meta} peças</span><strong>{campanha.atual}/{campanha.meta}</strong>
                <div><i style={{ width: `${(campanha.atual / campanha.meta) * 100}%` }} /></div>
              </div>
            )}
            <button type="button" className={styles.action}>{campanha.status === 'Em breve' ? 'Avisar quando abrir' : campanha.status === 'Participando' ? 'Ver campanha' : 'Participar'}</button>
          </article>
        ))}
      </div>
    </div>
  )
}

export { CampaignsPage }
