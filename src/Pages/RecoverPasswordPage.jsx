import { RecoverPasswordForm } from '../components/RecoverPasswordForm'
import styles from '../styles/pages/RecoverPasswordPage.module.css'

function RecoverPasswordPage() {
    return(
    <div className={styles.wrapper}>
        <RecoverPasswordForm />
    </div>
    )
}export { RecoverPasswordPage }