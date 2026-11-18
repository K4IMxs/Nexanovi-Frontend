import { Search } from 'lucide-react'
import styles from '../styles/pages/TaskPage.module.css'
const PRODUTOS = [
  { nome: 'Jaqueta Jeans P', categoria: 'Feminino', preco: 'R$ 40,94', status: 'Ativo' },
  { nome: 'Vestido Floral M', categoria: 'Feminino', preco: 'R$ 70,99', status: 'Encomendado' },
  { nome: 'Camisa Social G', categoria: 'Masculino', preco: 'R$ 49,00', status: 'Esgotado' },
]
function TaskPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cabecalho}>
                <h1 className={styles.titulo}>Meus produtos</h1>
                <p className={styles.subtitulo}>24 produtos cadastrados na sua vitrine</p>
            </div>
            <div className={styles.toolbar}>
              <label className={styles.busca}>
                <Search size={18} aria-hidden="true" />
                <input placeholder="Buscar produto..." />
              </label>
              <select aria-label="Categoria">
                <option>Todas as categorias</option>
                <option>Feminino</option>
                <option>Masculino</option>
              </select>
              <button type="button" className={styles.novo}>Adicionar produto</button>
            </div>
            <div className={styles.filtros} role="list">
              <button type="button" className={styles.ativo}>Todos (24)</button>
              <button type="button">Ativos (24)</button>
              <button type="button">Reservados (3)</button>
              <button type="button">Esgotados (2)</button>
            </div>
            <div className={styles.grade}>
              {PRODUTOS.map((produto) => (
                <article className={styles.card} key={produto.nome}>
                  <div className={styles.foto}>
                    <span>{produto.nome.split(' ')[0]}</span>
                  </div>
                  <div className={styles.info}>
                    <h2>{produto.nome}</h2>
                    <p>{produto.categoria}</p>
                    <strong>{produto.preco}</strong>
                    <span className={`${styles.status} ${styles[produto.status.toLowerCase()]}`}>{produto.status}</span>
                  </div>
                  <div className={styles.acoes}>
                    <button type="button">Editar</button>
                    <button type="button">Remover</button>
                  </div>
                </article>
              ))}
            </div>
        </div>
    )
}

export { TaskPage }