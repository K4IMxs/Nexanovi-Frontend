import styles from '../styles/pages/CartPage.module.css'

function CartPage() {
  return (
    <div className={styles.wrapper}>
      <h1>Carrinho</h1><p>Peças prontas para ganhar uma nova história.</p>
      <div className={styles.layout}>
        <div className={styles.items}>
          <article><div className={styles.photo}>Jaqueta Puffer</div><div><h2>Jaqueta Puffer</h2><strong>Recanto Vintage</strong><span>Tamanho: P · Cor: Off-white</span><button type="button">Remover</button></div><b>R$ 180,90</b></article>
          <article><div className={styles.photo}>Calça Wide Leg</div><div><h2>Calça Wide Leg</h2><strong>Recanto Vintage</strong><span>Tamanho: M · Cor: Brown</span><button type="button">Remover</button></div><b>R$ 331,80</b></article>
        </div>
        <aside><h2>Resumo do pedido</h2><div><span>Subtotal</span><strong>R$ 512,70</strong></div><div><span>Frete</span><strong>R$ 21,90</strong></div><div className={styles.total}><span>Total da compra</span><strong>R$ 534,60</strong></div><button type="button">Finalizar compra</button></aside>
      </div>
    </div>
  )
}
export { CartPage }
