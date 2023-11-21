import { useContext } from 'react'
import './TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

const TablaFila = ({producto, setProductoAEditar}) => {
  const {eliminarProductoContext} = useContext(ProductoContext)
  
  const handleDelete = async (id) => {
   
   // let isDelete= window.confirm(`
   // ¿Estas seguro de eliminar el producto con el 'id':${id}
    //`)
    const isDelete = await Swal.fire({
      title: `¿Estás seguro que queire elimiar ${producto.nombre}?`,
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro',
    });

    if(isDelete.isConfirmed){
      eliminarProductoContext(id)
      Swal.fire('¡Confirmado!', 'La acción se completó con éxito.', 'success');
    }else{
      return 
    }
  }
 const handleUpdate = (producto) => {
  setProductoAEditar(producto)
  
 
 
}

 const subirATarjetaAEditar = () => {
  window.scrollTo(0, 130);
}


  return (
    <tr>
           <td>{producto.nombre}</td>
           <td>{producto.precio}</td>
           <td className='contenedor-stock'>{producto.stock}</td>
           <td>{producto.marca}</td>
           <td>{producto.categoria}</td>
           <td className='detalles'>{producto.detalles}</td>
           <td className='foto-conteiner'> 
            <img  id='img-row' src={producto.foto} alt={producto.nombre}/>
           </td>
           <td className='envio'>
            {producto.envio ? 'SI' : 'NO'}
            <p id={`${producto.id}`}></p>
            </td>
           <td className='contenedorbtn-tabla'>
            <button className='btn-editar' onClick={()=> {handleUpdate(producto);subirATarjetaAEditar() }}>Editar</button>
            <button onClick={()=>handleDelete(producto.id)} className='btn-borrar'>Borrar</button>
            </td>
    </tr>
  )
}

export default TablaFila