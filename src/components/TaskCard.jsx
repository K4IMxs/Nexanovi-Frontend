import { AlertTriangle, Calendar, Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useUpdateTask } from '../hooks/useUpdateTask'
import { useDeleteTask } from '../hooks/useDeleteTask'
import { estaAtrasada, formatarPrazo } from '../utils/task'
import { Button } from './Button'
import { Card } from './Card'
import { Modal } from './Modal'
import { PriorityBadge } from './PriorityBadge'
import { TaskForm } from './TaskForm'
import styles from '../styles/components/TaskCard.module.css'
function TaskCard({ task, onAlterada }) {
    const [editando, setEditando] = useState(false)
    const [confirmandoExclusao, setConfirmandoExclusao] = useState(false)
    const [erro, setErro] = useState(null)
    const { atualizar, enviando: alternando } = useUpdateTask(onAlterada)
    const { excluir, enviando: excluindo } = useDeleteTask(onAlterada)
    const concluida = task.status === 'concluida'
    const atrasada = estaAtrasada(task)
    async function aoAlternarStatus() {
        setErro(null)
        try {
            await atualizar(task.id, { status: concluida ? 'pendente' : 'concluida' })
        } catch (e) {
            setErro(e.message)
        }
    }
    async function aoConfirmarExclusao() {
        setErro(null)
        try {
            await excluir(task.id)
            setConfirmandoExclusao(false)
        } catch (e) {
            setErro(e.message)
        }
    }

    return (
        <Card className={`${styles.card} ${concluida ? styles.concluida : ''}`}>
            <div className={styles.linha}>
                <input
                    type="checkbox"
                    checked={concluida}
                    onChange={aoAlternarStatus}
                    disabled={alternando}
                    aria-label={concluida ? 'Reabrir tarefa' : 'Concluir tarefa'}
                    className={styles.checkbox}
                />

                <div className={styles.info}>
                    <span className={styles.titulo}>{task.titulo}</span>
                    <div className={styles.meta}>
                        <div className={styles.prioridade}>
                            <PriorityBadge prioridade={task.prioridade} />
                        </div>
                        {task.prazo ? (
                            <span className={`${styles.prazo} ${atrasada ? styles.prazoAtrasado : ''}`}>
                                {atrasada ? (
                                    <AlertTriangle size={14} aria-hidden="true" />
                                ) : (
                                    <Calendar size={14} aria-hidden="true" />
                                )}
                                {formatarPrazo(task.prazo)}
                            </span>
                        ) : null}
                    </div>
                </div>
                <div className={styles.acoes}>
                    <Button variant="ghost" size="sm" onClick={() => setEditando(true)} aria-label="Editar tarefa">
                        <Pencil size={16} aria-hidden="true" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setConfirmandoExclusao(true)}
                        aria-label="Excluir tarefa"
                    >
                        <Trash2 size={16} aria-hidden="true" />
                    </Button>
                </div>
            </div>
            {erro ? (
                <p role="alert" className={styles.erro}>
                    {erro}
                </p>
            ) : null}
            <Modal open={editando} onClose={() => setEditando(false)} title="Editar tarefa">
                <TaskForm
                    tarefaEmEdicao={task}
                    aoSalvar={() => {
                        setEditando(false)
                        onAlterada()
                    }}
                    aoCancelar={() => setEditando(false)}
                />
            </Modal>
            <Modal
                open={confirmandoExclusao}
                onClose={() => setConfirmandoExclusao(false)}
                title="Excluir tarefa"
            >
                <p className={styles.confirmacaoTexto}>
                    Tem certeza que deseja excluir <strong>{task.titulo}</strong>? Essa ação não pode ser
                    desfeita.
                </p>
                <div className={styles.confirmacaoAcoes}>
                    <Button variant="ghost" onClick={() => setConfirmandoExclusao(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={aoConfirmarExclusao} disabled={excluindo}>
                        {excluindo ? 'Excluindo...' : 'Excluir'}
                    </Button>
                </div>
            </Modal>
        </Card>
    )
}

export { TaskCard }