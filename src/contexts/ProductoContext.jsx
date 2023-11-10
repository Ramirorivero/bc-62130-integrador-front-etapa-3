import { createContext, useEffect, useState } from "react";
import {del, get, post, put} from "../utils/http";

const ProductoContext = createContext()

const  url = 'https://ramiro-rivero-etapa-3.onrender.com/api/productos/'
//'https://ramiro-rivero-etapa-3.onrender.com/api/productos/'
//'http://localhost:8080/api/productos/'

const ProductoProvider = ( {children} ) => {
   
     const[productos,setProductos]=  useState(null)

 useEffect(() =>{
    obtenerProductos()
 },[])
    
    const obtenerProductos = async ()=>{

        try {
            const products = await get(url) 
            setProductos(products)
        } catch (error) {
            console.error(`ERROR obtenerProductos:${error}`)
        }
    }

   const  crearProductoContext = async (productoNuevo) => {
      try {

        const productoBackNuevo = await post(url,productoNuevo)
        setProductos([...productos,productoBackNuevo])
        
      } catch (error) {
        console.error('Fallo crearProductoContext', error)
      }
   }
   const actualizarProductoContext = async (productoEditar) =>{
    try {
      const productoEditado = await put(url, productoEditar.id, productoEditar)
     
      const nuevaDB = productos.map(producto => producto.id === productoEditado.id ? productoEditado : producto)
      console.log(nuevaDB)
      setProductos(nuevaDB)
    } catch (error) {
      console.log(`ERROR en actualizarProductocontext`,error)
    }
   }

   const eliminarProductoContext = async (id)=>{
   try {
    const productoEliminado= await del(url,id)
    console.log(productoEliminado)
    const nuevaDB= productos.filter(producto => producto.id !== id)
    setProductos(nuevaDB)
   } catch (error) {
    console.log('todo salio mal en el elminarProductoContext',error)
   }
   }

    const data = {productos,crearProductoContext, eliminarProductoContext, actualizarProductoContext}

    return <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>

}

export {ProductoProvider}

export default ProductoContext