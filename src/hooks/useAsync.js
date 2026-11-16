
import { useCallback, useEffect, useState } from 'react'

function useAsync(funcaoAssincrona) {
  const [dado, setDado] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    let cancelado = false
 
    funcaoAssincrona()

      .then((resultado) => !cancelado && setDado(resultado))
      .catch((e) => !cancelado && setErro(e))
      .finally(() => !cancelado && setCarregando(false))
 
    return () => {
      cancelado = true
    }
  }, [funcaoAssincrona, tentativa])
 
  const recarregar = useCallback(() => setTentativa((atual) => atual + 1), [])
 
  return { dado, carregando, erro, recarregar }
}
 
export { useAsync }