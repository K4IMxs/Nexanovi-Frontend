import {delay, generateId, readCollection, writeCollection} from './mockStorage'
const COLECTION = 'users'
const usersFixture = [
    {
        id: 'usuario-1',
        name: 'Usuario Demo',
        email: 'demo@todolist.com',
        password: 'demo123',
        creatEm: '2026-01-01T00:00:00.000Z',
    },
]
function getAll() {
    return readCollection(COLECTION, usersFixture)
}
async function searchById(id) {
    await delay(200)
    return getAll().find((user) => user.id === id)
}
async function verifyCredentials (email, password) {
    await delay(400)
    const user = getAll().find(
        (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password,
    )
    return user ?? null
}

async function create(dades) {
    await delay(400)
    const users = getAll()

    if (users.some((user) => user.email.toLowerCase() === dades.email.toLowerCase())) {
        throw new Error('Ja existe uma conta com este e-mail.')
    }
    const newUser = {
        ...dades,
        id: generateId('user'),
        creatEm: new Date().toISOString(),
    }
    writeCollection(COLECTION, [...users, newUser])
    return newUser
}

const userService = {
    searchById,
    verifyCredentials,
    create,
}
export { userService }