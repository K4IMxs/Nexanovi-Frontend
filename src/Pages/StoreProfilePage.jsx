import styles from '../styles/pages/StoreProfilePage.module.css'

function StoreProfilePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div><h1>Perfil da loja</h1><p>Personalize como seu brechó aparece para os clientes.</p></div>
        <button type="button" className={styles.cover}>Alterar capa</button>
      </header>
      <div className={styles.store}>
        <div className={styles.banner}>
          <div className={styles.logo}>AV</div>
        </div>
        <div className={styles.storeInfo}>
          <div><strong>Aconchego Vintage</strong><span>Brechó em Pouso Alegre, MG</span></div>
          <button type="button">Ver minha vitrine</button>
        </div>
      </div>
      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>Informações da loja</h2>
          <label>Nome do Brechó<input defaultValue="Aconchego Vintage" /></label>
          <label>Sobre o Brechó<textarea defaultValue="Peças selecionadas com carinho, do vintage ao contemporâneo. Moda circular com preço justo." /></label>
          <label>Categoria Principal<select defaultValue="Roupas femininas"><option>Roupas femininas</option><option>Roupas masculinas</option></select></label>
          <label>Instagram<input defaultValue="@aconchegovintage" /></label>
        </section>
        <section className={styles.card}>
          <h2>Contato e localização</h2>
          <label>E-mail<input defaultValue="contato@aconchegovintage.com" /></label>
          <label>Telefone / WhatsApp<input defaultValue="(35) 99910-1653" /></label>
          <div className={styles.two}><label>Cidade<input defaultValue="Pouso Alegre" /></label><label>Estado<input defaultValue="MG" /></label></div>
          <h2>Preferências</h2>
          <label className={styles.toggle}><span>Receber novos pedidos<small>Notificação a cada compra</small></span><input type="checkbox" defaultChecked /></label>
          <label className={styles.toggle}><span>Loja visível<small>Desative para pausar sua vitrine</small></span><input type="checkbox" defaultChecked /></label>
          <label className={styles.toggle}><span>Participar de campanhas<small>Apareça nas ações solidárias</small></span><input type="checkbox" defaultChecked /></label>
        </section>
      </div>
      <footer className={styles.footer}><button type="button">Cancelar</button><button type="button" className={styles.save}>Salvar alterações</button></footer>
    </div>
  )
}

export { StoreProfilePage }
