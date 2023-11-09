import { useContext } from 'react'
import './Carrito.scss'
import CarritoContext from '../contexts/CarritoContext'
import { Link } from 'react-router-dom'

const Carrito = () => {
 const {carrito, eliminarCarritoContext,guardarCarritoContext} = useContext(CarritoContext)

  const handleEliminar = (id) =>{
  eliminarCarritoContext(id)

   }
const calcularTotal = () =>{
  let sumaTotal = carrito.reduce((total, prod)=>{
  return total + (prod.precio * prod.cantidad)
    },0)
    return sumaTotal
}


   const handleComprar =() =>{
    
   guardarCarritoContext()
   }

  return (
    <>
    <h1 className='titulo-carrito'>Listado de productos en el carrito</h1>
    
    <table className='tabla-carrito'>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {
        carrito.length <= 0 ? (
          <tr >
            <td  colSpan={5} style={{textAlign: 'center'}}><Link to='/' className='contenedor-sin-productos'><strong className='sin-productos'>No hay productos</strong></Link></td>
          </tr>
        ) : (
          carrito.map((producto, idx) =>(
          <tr key={idx}>
          <td className='carrito-foto'>
            <img id='img-carrito' src={producto.foto} alt={producto.nombre} width="50px" />
          </td>
          <td>{producto.nombre}</td>
          <td className='carrito-cantidad'>{producto.cantidad}</td>
          <td className='carrito-precio'>{producto.precio}</td>
          <td className='carrito-btn-conteiner'>
            <button className='btn-carrito-eliminar' onClick={() => handleEliminar(producto.id)}>Eliminar</button>
          </td>
        </tr>
          ))
        )
      }
      <tr>
        <td colSpan={3}><strong>Total</strong></td>
        <td className='carrito-total'><strong>$ {parseFloat(calcularTotal()).toFixed(2)}</strong></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <div className='btn-conteiner-comprar'>
    {!carrito.length <= 0 && <button className='boton-comprar' onClick={handleComprar}>Comprar</button>}
    </div>
    </>
    
  )
}

export default Carrito