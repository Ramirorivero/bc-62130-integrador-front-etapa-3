import { useState } from "react"

//useLocalStorage('productos',[])

export const useLocalStorage = (clave,valorInicial = [] ) =>{
    
const getValorAlmacenado = () =>{
     try {
        const valorAlmacenado = window.localStorage.getItem(clave)

    return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial

} catch (error) {
    console.error(`Error al obtener ${clave} del localStorage ${error}`)
    return valorInicial
}

    }
 
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValor = (valorNuevo) => {
    try {
        const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]
         setValorAlmacenado(nuevoValorAlmacenado)
         window.localStorage.setItem(clave,JSON.stringify(nuevoValorAlmacenado))

    } catch (error) {
        console.error(`Error al guardar ${clave} del localStorage: ${error}`)
    }

   
    }
          
    
    const eliminarValor = (id) =>{
        try {
          const nuevoValorAlmacenado =[...valorAlmacenado]
          const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
          nuevoValorAlmacenado.splice(indice,1)
          setValorAlmacenado(nuevoValorAlmacenado)
          window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
          } catch (error) {
         console.error(`Error al eliminar ${clave} del localStorage ${error}` )
       }
    }

    const limpiarStorage = () =>{
       window.localStorage.clear()
       window.localStorage.setItem(clave, JSON.stringify(valorInicial))
       setValorAlmacenado(valorInicial)
    }

return [guardarValor, eliminarValor, limpiarStorage, valorAlmacenado]

}