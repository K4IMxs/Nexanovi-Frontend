import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { taskService } from '../services/taskService'
function useCreateTask(aoConcluir) {
    const auth = useAuth()
    const [enviando, setEnviando] = useState(false)
    const [erro, setErro] = useState(null)

    async function criar(dados) {
        setEnviando(true)
        setErro(null)
        try {
            const userObj = auth?.user || auth?.usuario
            const userId = userObj && userObj.id
            
            if (!userId) {
                console.log('Conteúdo retornado pelo AuthContext:', auth)
                throw new Error('Utilizador não autenticado.')
            }
            const nova = await taskService.criar({ ...dados, userId: userId, usuarioId: userId })
            aoConcluir?.(nova)
            return nova
        } catch (e) {
            setErro(e)
            throw e
        } finally {
            setEnviando(false)
        }
    }

    return { criar, enviando, erro }
}
export { useCreateTask }