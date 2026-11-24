import { Card } from "./Card";
import { Check } from 'lucide-react'
import styles from "../styles/components/LandingBenefits.module.css"

const BENEFICIOS = [
    'nunca mais esqueça de um prazo importante',
    'foque primeiro mo que tem mais prioridade',
    'veja sua produtividade aumentar com o tempo e dados reais',
    'simples desde o primeiro uso, facil e intuitivo'
]

function LandingBenefits() {
    return (
        <section className={styles.sectionBenefits}>
            <Card className={styles.Card}>
                <h2 className={styles.Tittle}>Por que usar o todo-list?</h2>
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
