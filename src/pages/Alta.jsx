import './Alta.scss'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import { useState } from 'react'
import TarjetaAEditar from '../components/TarjetaAEditar'


const Alta = () => {
  const [productoAEditar, setProductoAEditar,] = useState(null)
 

  return (
   <>
   <h1 className='tituloh1-alta'>Formulario de alta de productos</h1>
   <h2 className='tituloh2-alta'> {productoAEditar ? 'Editando' : 'Agregando'}</h2>
   <div className='contenido-editar'>
    <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
    {productoAEditar && <TarjetaAEditar producto={productoAEditar} />}
   </div>
   
   <hr/>
   <Tabla setProductoAEditar={setProductoAEditar} />
   </>
  )
}

export default Alta