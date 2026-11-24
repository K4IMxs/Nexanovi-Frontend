import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useAuth } from '../context/AuthContext'
import { Button } from './Button'
import { Card } from './Card'
import { Input } from './Input'
import { TermsUseModal } from './TermsUseModal'
import styles from '../styles/components/registerForm.module.css'

const esquema = z
    .object({
        name: z.string().min(1, 'Informe seu nome.'),
        email: z.string().min(1, 'Informe seu email.').email('E-mail invalido.'),
        password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres.'),
        confirmPassword: z.string().min(1, 'Confirme sua senha.'),
        aceptTerms: z
            .boolean()
            .refine((valor) => valor === true, {
                message: 'É preciso aceitar os termos de uso.'
            })
    })
    .refine((dados) => dados.password === dados.confirmPassword, {
        message: 'As senhas não conferem.',
        path: ['confirmPassword'],
    })

function RegisterForm() {
    const { cadastrar } = useAuth()
    const navigate = useNavigate()

    const [erroRegister, setErroRegister] = useState(null)
    const [openTerms, setOpenTerms] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(esquema),
        defaultValues: {
            aceptTerms: false
        }
    })

    async function aoSubmeter(dados) {
        setErroRegister(null)

        try {
            await cadastrar({
                name: dados.name,
                email: dados.email,
                password: dados.password
            })

            navigate('/login')
        } catch (erro) {
            setErroRegister(erro.message)
        }
    }

    return (
        <Card className={styles.card}>
            <h1 className={styles.title}>Criar Conta</h1>

            <form
                onSubmit={handleSubmit(aoSubmeter)}
                className={styles.form}
                noValidate
            >
                <Input
                    label="Nome"
                    id="name"
                    placeholder="Digite seu nome"
                    {...register('name')}
                />

                <Input
                    label="E-mail"
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register('email')}
                />

                <Input
                    label="Senha"
                    id="password"
                    type="password"
                    placeholder="**********"
                    {...register('password')}
                />

                <Input
                    label="Confirmar Senha"
                    id="confirmPassword"
                    type="password"
                    placeholder="**********"
                    {...register('confirmPassword')}
                />
                
                <div className={styles.termsCamp}>
                    <label className={styles.terms}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            {...register('aceptTerms')}
                        />

                        <span>
                            Ao continuar, você aceita os {' '}

                            <button
                                type="button"
                                className={styles.linkTerms}
                                onClick={() => setOpenTerms(true)}
                            >
                                termos de uso
                            </button>

                            {''} do ToDo List
                        </span>
                    </label>

                    {errors.aceptTerms && (
                        <p className={styles.errorGeneral}>
                            {errors.aceptTerms.message}
                        </p>
                    )}
                </div>

                {erroRegister && (
                    <p role="alert" className={styles.errorGeneral}>
                        {erroRegister}
                    </p>
                )}

                <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Criando...' : 'Criar Conta'}
                </Button>
            </form>

            <p className={styles.footer}>
                Ja tem conta? <Link to="/login">Entrar</Link>
            </p>

            <TermsUseModal
                open={openTerms}
                onClose={() => setOpenTerms(false)}
            />
        </Card>
    )
}

export { RegisterForm }
