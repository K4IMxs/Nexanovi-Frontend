const KEY_SECTION = 'todolist:sessao'

function readPersistedUserID() {
    return localStorage.getItem(KEY_SECTION)
}

function persistedUserID(userId) {
    if (userId) {
        localStorage.setItem(KEY_SECTION, userId)
    } else {
        localStorage.removeItem(KEY_SECTION)
    }
}

export { readPersistedUserID, persistedUserID }