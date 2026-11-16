import { useCallback } from "react";
import { useAuth } from '../context/AuthContext'
import { taskService } from '../services/taskService'
import { useAsync } from './useAsync'
const PESO_PRIORIDADE = { urgente: 0, alta: 1, media: 2, baixa: 3}
function ordenar(task, ordenarPor) {
    const copy = [...task]
    if (ordenarPor === 'prazo') {
        return copy.sort((a, b) => {
            if (!a.prazo) return 1
            if (!b.prazo) return -1
            return new Date(a.prazo) - new Date(b.prazo)
        })
    }
    if (ordenarPor === 'priorite' || ordenarPor === 'prioridade') {
        return copy.sort((a, b) => (PESO_PRIORIDADE[a.prioridade || a.priorite] ?? 99) - (PESO_PRIORIDADE[b.prioridade || b.priorite] ?? 99))
    }
    return copy.sort((a, b) => new Date(b.criadoEm || b.createIn) - new Date(a.criadoEm || a.createIn))
}
function useTasks(filters = {}) {
    const { user } = useAuth()
    const { find = '', status = 'todas', priorite = 'todas', ordenarPor = 'recente'} = filters
    const userId = user && user.id
    const search = useCallback(async () => {
        if (!userId) return []
        const tasks = await taskService.listarPorUsuario(userId)
        const term = find.trim().toLowerCase()
        const filtered = tasks.filter((task) => {
            const tituloVal = (task.titulo || task.title || '').toLowerCase()
            const prioridadeVal = task.prioridade || task.priorite
            const bateFind = term.length < 3 || tituloVal.includes(term)
            const bateStats = status === 'todas' || task.status === status
            const batePriorite = priorite === 'todas' || prioridadeVal === priorite
            return bateFind && bateStats && batePriorite
        })
        return ordenar(filtered, ordenarPor)
    }, [userId, find, status, priorite, ordenarPor])
    return useAsync(search)
}
export { useTasks }