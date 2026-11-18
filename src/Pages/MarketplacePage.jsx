import styles from '../styles/pages/MarketplacePage.module.css'

const produtos = [
  ['Jaqueta Puffer','R$ 180,90'],['Camisa Jeans','R$ 49,90'],['Calça Reta','R$ 79,90'],['Moletom','R$ 89,90'],
  ['Calça Flare','R$ 69,90'],['Calça Wide Leg','R$ 331,80'],['Vestido Floral','R$ 70,99'],['Jaqueta Jeans','R$ 40,94'],
]

function MarketplacePage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <div><span>Bem-vindo de volta, Ryan</span><h1>Novas peças chegaram hoje.<br/>Vamos garimpar?</h1></div>
        <label><input placeholder="Buscar peças, marcas ou brechós..." /><button type="button">Buscar</button></label>
      </header>
      <nav className={styles.categories} aria-label="Categorias">
        {['Tudo','Jaquetas','Calças','Moletons','Vestidos','Acessórios'].map((item, index) => <button type="button" className={index === 0 ? styles.active : ''} key={item}>{item}</button>)}
      </nav>
      <h2>MARKETPLACE</h2>
      <div className={styles.grid}>
        {produtos.map(([nome, preco]) => (
          <article className={styles.card} key={nome}>
            <div className={styles.photo}><span>{nome}</span></div>
            <h3>{nome}</h3><strong>{preco}</strong><button type="button">Saiba mais</button>
          </article>
        ))}
      </div>
    </div>
  )
}

export { MarketplacePage }
