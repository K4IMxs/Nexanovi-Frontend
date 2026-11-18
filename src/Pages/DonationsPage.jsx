import styles from '../styles/pages/DonationsPage.module.css'

function DonationsPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}><div><span>DOAÇÃO</span><h1>Dê um novo destino às peças que você não usa mais</h1><p>Ajude quem precisa e apoie o consumo consciente.</p></div></header>
      <div className={styles.stats}><article><strong>5</strong><span>Peças que você já doou</span></article><article><strong>2</strong><span>Campanhas que você apoia</span></article><article><strong>340</strong><span>Famílias impactadas</span></article></div>
      <h2>Campanhas ativas</h2>
      <div className={styles.grid}>
        <article><span>Ativa</span><h3>Inverno solidário</h3><p>Agasalhos e peças de frio para famílias atendidas por ONGs parceiras em Minas Gerais.</p><strong>Meta: 150 peças</strong><div className={styles.progress}><i /></div><button type="button">Doar para essa campanha</button></article>
        <article><span>Ativa</span><h3>Volta às aulas</h3><p>Uniformes e roupas infantis para crianças em início de ano letivo.</p><strong>Meta: 150 peças</strong><div className={styles.progress}><i /></div><button type="button">Doar para essa campanha</button></article>
        <article className={styles.soon}><span>Em breve</span><h3>Reconstrução Sul</h3><p>Doações para famílias afetadas por enchentes no Rio Grande do Sul.</p><strong>Início em 05/10</strong><button type="button">Avisar quando abrir</button></article>
      </div>
      <section className={styles.register}><h2>Quer doar uma peça específica?</h2><p>Separe a roupa, escolha a campanha e o Klozet cuida da coleta com um brechó parceiro perto de você.</p><button type="button">Cadastrar peça para doação</button></section>
    </div>
  )
}
export { DonationsPage }
