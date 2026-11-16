/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from 'react'
import { userService } from '../services/userServices'
import { readPersistedUserID, persistedUserID } from './AuthStorage'
const AuthContext = createContext(null)
function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let cancel = false
        async function hydrate() {
            const usuarioIdPersistido = readPersistedUserID()
            if (!usuarioIdPersistido) {
                if (!cancel) setLoading(false)
                return
            }
            try {
                const found = await userService.searchById(usuarioIdPersistido)
                if (cancel) {
                    return
                }
                if (found) {
                    setUser(found)
                } else {
                    persistedUserID(null)
                }
            } catch (error) {
                console.error("Erro ao carregar utilizador:", error)
            } finally {
                if (!cancel) {
                    setLoading(false)
                }
            }
        }
        hydrate()
        return () => {
            cancel = true
        }
    }, [])
    async function  login(email, password) {
        const found = await userService.verifyCredentials(email, password)
        if (!found) {
            return null
        }
        setUser(found)
        persistedUserID(found.id)
        return found
    }
    function logout() {
        setUser(null)
        persistedUserID(null)
    }
    async function cadastrar(dades) {
        const newUser = await userService.create(dades)
        setUser(newUser)
        persistedUserID(newUser.id)
        return newUser
    }
    const value = {
        user,
        authenticated: !!user,
        loading,
        login,
        logout,
        cadastrar,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth precisa ser usado dentro de um AuthProvider')
    }
    return context
}
export { AuthProvider, useAuth}