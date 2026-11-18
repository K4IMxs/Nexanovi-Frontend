import { Card } from "./Card";
import { Check } from 'lucide-react'
import styles from "../styles/components/LandingBenefits.module.css"

const BENEFICIOS = [
    'roupas com história ganham uma nova chance',
    'estilo único sem pagar o preço da moda rápida',
    'compras e vendas com impacto positivo',
    'uma comunidade simples, segura e sustentável'
]

function LandingBenefits() {
    return (
        <section className={styles.sectionBenefits}>
            <Card className={styles.Card}>
                <h2 className={styles.Tittle}>Por que escolher o Klozet?</h2>
                <ul className={styles.List}>
                    {BENEFICIOS.map((beneficio) => (
                        <li key={beneficio} className={styles.item}>
                            <span className={styles.Check} aria-hidden="true">
                                <Check size={14} strokeWidth={3} />
                            </span>
                            {beneficio}
                        </li>
                    ))}
                </ul>
            </Card>
        </section>
    );
}export { LandingBenefits }
