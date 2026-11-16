const PREFIXO = 'todolist:mock:'
function keyDe(colection) {
    return `${PREFIXO}${colection}`
}

function readCollection(colecao, fixture) {
    const key = keyDe(colecao)
    const bruto = localStorage.getItem(key)
    if (bruto === null) {
        const semeada = [ ... fixture]
        localStorage.setItem(key, JSON.stringify(semeada))
        return semeada
    }

    return JSON. parse(bruto)
}

function writeCollection(colecao, dades) {
    localStorage.setItem(keyDe(colecao), JSON.stringify(dades))
}
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}   
function generateId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}
export { readCollection, writeCollection, delay, generateId }