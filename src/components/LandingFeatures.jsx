import {Card} from './Card'
import styles from '../styles/components/LandingFeatures.module.css'

const FUNCIONALIDADES = [
    {
        titulo: "Gerencie suas Tarefas", 
        descricao: "Crie, Edite, e Conclua suas Tarefas com poucos cliques."
    },
    {
        titulo: "Prioridade e prazo", 
        descricao: "Organize suas tarefas por critérios e datas."
    },
    {
        titulo: "Busque filtros", 
        descricao: "Acompanhe de perto a evolução das suas tarefas."
    },
    {
        titulo: "Analytics de produtividade", 
        descricao: "Acompanhe quantas tarefas você concluiu e quanto foi sua taxa de conclusão"
    },
]

function LandingFeatures() {
    return (
        <>
    <section id="funcionalidades" className={styles.LandingFeatures}>
        <h2 className={styles.tittle}>
            Tudo que você precisa para manter seu ritmo organizado
        </h2>
        <div className={styles.LandingGrade}>
            {FUNCIONALIDADES.map(({titulo, descricao}) => {
                return (
                    <Card key={titulo} className={styles.item}> 
                        <h3 className={styles.itemTittle}>{titulo}</h3>
                        <p className={styles.itemDescription}>{descricao}</p>
                    </Card>
                )
            })}
        </div>
    </section>
        </>
    );
}export {LandingFeatures}