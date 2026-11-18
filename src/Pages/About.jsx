import {BarChart3, CheckSquare, Component, Lock, Route, Zap} from 'lucide-react'
import { Card } from '../components/Card'
import { LandingFooter } from '../components/LandingFooter'
import styles from '../styles/pages/About.module.css'

const CONCEITOS = [
    {
        icon: Component,
        tittle: 'Componentização',
        description: 'Design system próprio - Button, Input, Card, Modal e outros, reutilizados em todo o app.',
    },

    {
        icon: Zap,
        tittle: 'Hooks',
        description: 'useState, useEffect e hooks customizados (usaeTasks, aseAuth, useAsync).',
    },
    {
        icon: Route,
        tittle: 'Roteamento',
        description: 'React Router - rotas protegidas pra quem precisa estar logado.',
    },
    {
        icon: Lock,
        tittle: 'Autenticação',
        description: 'Sessão via Context API - hoje mockada, pronta pra virar um API de verdade.',
    },
    {
        icon: CheckSquare,
        tittle: 'Tarefas',
        description: 'Prioridade, prazo, buscas e filtros - organizar o que importa, não só listar.',
    },
    {
        icon: BarChart3,
        tittle: 'Analytics',
        description: 'Taxa de conclusão e evolução ao longo do tempo, num painel de produtividade simples.',
    },
    
]

function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1 className={styles.tittle}>Sobre esta aplicação</h1>
                <p className={styles.subtittle}>Conheça mais sobre o projeto</p>
            </div>

            <Card className={styles.Card}>
                <p className={styles.description}>
                    A Klozet é uma plataforma de moda circular desenvolvida com React e Vite -
                    marketplace, cadastro e login, vendas, doações e um painel de resumo da
                    produtividade. Foi criada com o objetivo de praticar conceitos fundamentais do React:
                </p>

                <div className={styles.grade}>
                    {CONCEITOS.map(({icon, tittle, description}) =>{
                        const Icon = icon
                        return (
                            <div key={tittle} className={styles.item}>
                                <span className={styles.iconWrapper} aria-hidden="true">
                                    <Icon size={20} />
                                </span>
                                <h3 className={styles.itemTittle}>{tittle}</h3>
                                <p className={styles.itemDescription}>{description}</p>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.credits}>
                    <p className={styles.creditsLine}>
                        Desenvolvido por <strong className={styles.creditsName}>Ryan Oliveira Andrade</strong>
                    </p>
                    <p className={styles.creditsLine}>Como parte de um projeto de estudo em React</p>
                </div>
            </Card>
            <LandingFooter/>
        </div>)}export {About}

