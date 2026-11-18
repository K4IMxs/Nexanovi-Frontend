import { Modal } from './Modal'
import styles from '../styles/components/TermsUseModal.module.css'
function TermsUseModal({ open, onClose }) {
    return (
        <Modal open={open} onClose={onClose} title="Termos de Uso">
            <div className={styles.content}>
                <section>
                    <h4 className={styles.section}>1. O que é a Klozet?</h4>
                    <p>
                        A Klozet é uma plataforma de moda circular, criada como projeto de estudo do
                        curso Desenvolvedor Full Stack (SENAC). Ao criar uma conta, voce concorda com estes
                        termos.
                    </p>
                </section>
                <section>
                    <h4 className={styles.section}>2. Dados que pedimos</h4>
                    <ul className={styles.list}>
                        <li>Dados de cadastro: nome, e-mail e senha.</li>
                        <li>Dados de uso: produtos, pedidos e informações da sua loja.</li>
                    </ul>
                </section>
                <section>
                    <h4 className={styles.section}>3. Para que usamos?</h4>
                    <p>Usamos seus dados apenas para permitir o acesso à conta e os serviços da Klozet.</p>
                </section>
                <section>
                    <h4 className={styles.section}>4. Onde tudo fica guardado?</h4>
                    <p>
                        Este é um projeto didático - não existe servidor real por trás dele. Sua conta e suas
                        produtos e dados ficam salvos somente no armazenamento local do seu navegador e não são enviados para
                        lugar nenhum.
                    </p>
                </section>
                <section>
                    <h4 className={styles.section}>5. Apagar seus dados</h4>
                    <p>
                        Você pode excluir seus dados a qualquer momento pelo próprio aplicativo ou limpar os dados do navegador.
                        vez limpando os dados do site nas configurações do navegador.
                    </p>
                </section>
                <p className={styles.aviso}>
                    Projeto didático (SENAC - desenvolvedor Full Stack). Nenum dado é enviado a servidores
                    reais; tudo é simulado e armazenado só no seu navegador.
                </p>
            </div>
        </Modal>
    )
} export { TermsUseModal }