import {Card} from './Card'
import styles from '../styles/components/LandingFeatures.module.css'

const FUNCIONALIDADES = [
    {
        titulo: "Venda suas peças",
        descricao: "Transforme roupas que você não usa em novas oportunidades."
    },
    {
        titulo: "Compre com intenção",
        descricao: "Encontre estilos únicos em um marketplace de moda circular."
    },
    {
        titulo: "Doe e faça diferença",
        descricao: "Ajude campanhas e organizações com roupas em bom estado."
    },
    {
        titulo: "Acompanhe sua loja",
        descricao: "Gerencie produtos, pedidos e o desempenho do seu negócio."
    },
]

function LandingFeatures() {
    return (
        <>
    <section id="funcionalidades" className={styles.LandingFeatures}>
        <h2 className={styles.tittle}>
            Tudo para renovar seu guarda-roupa
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