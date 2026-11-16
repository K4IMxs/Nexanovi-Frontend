import { AlertTriangle } from "lucide-react";
import { EmptyState } from "./EmptyState";
import styles from '../styles/components/PageStateBoundary.module.css'

function PageStateBoundary ({
    carregando,
    erro,
    vazio = false,
    recarregar,
    mensagemCarregando = 'Carregando...',
    estadoVazio,
    children,
}) {
    if (carregando) {
        return <p className={styles.status}>{mensagemCarregando}</p>
    }

    if (erro) {
        return (
            <div className={styles.status} role="alert">
                <EmptyState
                    icon={AlertTriangle}
                    title='Algo deu errado'
                    description='Não foi possível carregar os dados.'
                    actionLabel={recarregar ? 'Tentar novamente' : undefined}
                    onAction={recarregar}
                />
            </div>
        )
    }
    if (vazio && estadoVazio) {
        return (
            <div className={styles.status}>
                <EmptyState {...estadoVazio} />
            </div>
        )
    }

    return children
}

export { PageStateBoundary }