import { Badge } from './Badge'
const PRIORITYS = {
    baixa: { label: 'Baixa', tone: 'neutral' },
    media: { label: 'Média', tone: 'secondary'},
    alta: { label: 'Alta', tone: 'primary' },
    urgente: { label: 'Urgente', tone: 'danger' },
}

function PriorityBadge({ prioridade }) {
    const { label, tone } = PRIORITYS[prioridade] ?? PRIORITYS.media
    return <Badge tone={tone}>{label}</Badge>
}

export { PriorityBadge }