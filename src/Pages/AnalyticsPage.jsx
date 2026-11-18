import { Search } from 'lucide-react'
import styles from '../styles/pages/AnalyticsPage.module.css'

const pedidos = [
  { numero: '#34567', cliente: 'Ana Maria', item: 'Vestido Floral M', data: '07/09/2026', valor: 'R$ 70,99', status: 'Pendente' },
  { numero: '#12345', cliente: 'Júlia Santos', item: 'Jaqueta Jeans P', data: '07/08/2026', valor: 'R$ 40,94', status: 'A caminho' },
  { numero: '#90908', cliente: 'Júlio César', item: 'Camisa Social G', data: '15/10/2025', valor: 'R$ 49,00', status: 'Cancelado' },
  { numero: '#51186', cliente: 'Sara Martins', item: 'Jaqueta Jeans P', data: '15/10/2025', valor: 'R$ 40,94', status: 'Enviado' },
]

function AnalyticsPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.cabecalho}>
        <h1>Pedidos</h1>
        <p>Acompanhe e gerencie as compras feitas na sua vitrine.</p>
      </header>
      <div className={styles.stats}>
        <article><strong>3</strong><span>Pendentes</span></article>
        <article><strong>2</strong><span>A caminho</span></article>
        <article><strong>18</strong><span>Entregues</span></article>
        <article><strong>R$ 1.249,90</strong><span>Vendas do mês</span></article>
      </div>
      <div className={styles.toolbar}>
        <label><Search size={18} /><input placeholder="Buscar por cliente ou nº do pedido..." /></label>
        <select aria-label="Período"><option>Últimos 30 dias</option><option>Últimos 7 dias</option></select>
      </div>
      <div className={styles.tableWrap}>
        <table>
          <thead><tr><th>Pedidos</th><th>Cliente</th><th>Item</th><th>Data</th><th>Valor</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.numero}>
                <td>{pedido.numero}</td><td>{pedido.cliente}</td><td>{pedido.item}</td><td>{pedido.data}</td><td>{pedido.valor}</td>
                <td><span className={`${styles.status} ${styles[pedido.status.toLowerCase().replace(' ', '')]}`}>{pedido.status}</span></td>
                <td><button type="button">Detalhes</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { AnalyticsPage }
