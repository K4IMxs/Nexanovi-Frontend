const FORMATION_DATE = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short' })
function formatarPrazo(prazo) {
    return FORMATION_DATE.format(new Date(`${prazo}T00:00:00`))
}
function estaAtrasada(task) {
    if (task.status === 'concluida' || !task.prazo) return false
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
    return new Date(`${task.prazo} t00:00:00`) < hoje
}
 
export { formatarPrazo, estaAtrasada }