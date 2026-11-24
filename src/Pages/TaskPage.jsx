import { useState } from 'react'
import { Card } from '../components/Card'
import { PageStateBoundary } from '../components/PageStateBoundary'
import { TaskFilters } from '../components/TaskFilters'
import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/TaskList'
import { useTasks } from '../hooks/useTasks'
import styles from '../styles/pages/TaskPage.module.css'
const FILTROS_INICIAIS = { busca: '', status: 'todas', prioridade: 'todas', ordenarPor: 'recente' }
function TaskPage() {
    const [filtros, setFiltros] = useState(FILTROS_INICIAIS)
    const { dado: task, carregando, erro, recarregar } = useTasks(filtros)
    function aoMudarFiltros(patch) {
        setFiltros((atual) => ({ ...atual, ...patch }))
    }
    const temFiltroAtivo =
        filtros.busca.trim().length >= 3 || filtros.status !== 'todas' || filtros.prioridade !== 'todas'
    return (
        <div className={styles.wrapper}>
            <div className={styles.cabecalho}>
                <h1 className={styles.titulo}>Organize suas tarefas</h1>
                <p className={styles.subtitulo}>Mantenha sua produtividade em dia</p>
            </div>

            <Card className={styles.card}>
                <TaskForm aoSalvar={recarregar} />
            </Card>

            <Card className={styles.card}>
                <TaskFilters filtros={filtros} onChangeFiltros={aoMudarFiltros} />
            </Card>
            <PageStateBoundary
                carregando={carregando}
                erro={erro}
                recarregar={recarregar}
                mensagemCarregando="Carregando tarefas..."
            >
                <TaskList tasks={task ?? []} temFiltroAtivo={temFiltroAtivo} onAlterada={recarregar} />
            </PageStateBoundary>
        </div>
    )
}

export { TaskPage }