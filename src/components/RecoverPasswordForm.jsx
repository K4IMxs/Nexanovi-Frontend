import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { Button } from './Button'
import { Card } from './Card'
import { Input } from './Input'
import styles from '../styles/components/RecoverPasswordForm.module.css'

const scheme = z.object({
    email: z.string().min(1, 'Informe seu e-mail').email('E-mail inválido')
})
function RecoverPasswordForm() {
    const [send, setSend] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({resolver: zodResolver(scheme) })
    async function  aoSubmit() {
        setSend(true)
    }
    if (send) {
        return (
            <Card className={styles.Card}>
                <h1 className={styles.title}>Verifique seu e-mail</h1>
                <p className={styles.message}>
                    Se esse e-mail estiver cadastrado, enviamos intruções para redefinir sua senha.
                </p>
                <Link to="/login" className={styles.link}>
                    Voltar para o login
                </Link>
            </Card>
        )
    }
    return (
        <Card className={styles.Card}>
            <h1 className={styles.title}>Recuperar senha</h1>
            <p className={styles.message}> Informe seu e-mail e enviaremos intruções de recuperação</p>
            <form onSubmit={handleSubmit(aoSubmit)} className={styles.form} noValidate>
                <Input
                    label="E-mail"
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail."
                    autoComplete="email"
                    error={errors.email?.message}
                    {...register('email')}
                />
                <Button type="submit" variant="primary" disable={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar instruções'}
                </Button>
            </form>
            <p className={styles.footer}>
                <Link to="/login">Voltar para o login</Link>
            </p>
        </Card>
    )
} export {RecoverPasswordForm}
    
