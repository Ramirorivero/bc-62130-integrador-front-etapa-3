



/* CRUD => R:READ => GET  */ 
export const get = async (url) => {

    try{

         const respuesta = await fetch(url)
        console.log (respuesta)
          if(!respuesta.ok){
            throw new Error(`Algo paso: ${respuesta.status},${respuesta.statusText}`)
          }
          const data = await respuesta.json()
          return data

}     catch (error){
        console.error(`ERROR GET:`,error)

}

}






/* CRUD C:CREATE => POST  */ 
export const post = async( url, dato) => {
 
  let config = {}
  try {
      if( dato instanceof FormData){
        config ={
          method :'POST',
          body: dato
        }

      }else{
         config ={
          method:'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify(dato)
        }
      }


   
    const respuesta= await fetch(url,config)
    if(!respuesta.ok){
      throw new Error(`Algo paso: ${respuesta.status},${respuesta.statusText}`)
    }
    const  productoGuardado=await respuesta.json()
    return productoGuardado
  } catch (error) {
    console.error(`ERROR POSR`, error)
    
  }
}

/* CRUD => U:UPDATE => PUT  */
export const put = async (url, id, dato)=> {
  try {
    const config ={
      method:'PUT',
      headers:{"content-type":"application/json"},
      body: JSON.stringify(dato)
    }
    const urlFuLL = url +id
     const respuesta = await fetch (urlFuLL, config)
     if(!respuesta.ok){
      throw new Error(`Algo ocurrio, ${respuesta.status} ${respuesta.statusText}`)
     }
     const productoEditado = await respuesta.json()

     return productoEditado

  } catch (error) {
    console.error("ERROR PUT",error)
  }
} 


/* CRUD => D:DELETE => DELETE  */ 
export const del =async(url,id)=>{
  
    const config = {
      method: 'DELETE'
    }
    const urlFuLL = url + id
    console.warn(urlFuLL)
  try{
    const respuesta = await fetch ( urlFuLL,config )
    if(!respuesta.ok){
      throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
    }
     const resultado = await respuesta.json()
     return resultado

  } catch (error) {
    console.error('ERROR DELETE',error)
  }
}