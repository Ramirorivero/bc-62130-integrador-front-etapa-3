
import { useContext, useEffect, useState } from 'react'
import './Formulario.scss'
import ProductoContext from '../contexts/ProductoContext'
import { useForm } from '../hooks/useForm'
import DragDrop from './DragDrop'

const formInicial={
  id:null,
  nombre:'',
  precio:'',
  stock:'',
  marca:'',
  categoria:'',
  detalles:'',
  foto:'',
  envio: false,

 }

const Formulario = ({productoAEditar,setProductoAEditar}) => {
    const [foto, setFoto]  = useState('')
    const [srcImagen,setSrcImagen] = useState('')

 const [form,setForm,handleChange] = useForm(formInicial)
 const { crearProductoContext , actualizarProductoContext } = useContext(ProductoContext)

useEffect(()=>{
productoAEditar ? setForm(productoAEditar): setForm(formInicial) 

},[productoAEditar,setProductoAEditar])





 const handleSubmit = async (e) => {
   e.preventDefault()
   try{
         if(form.id=== null){
          const productoNuevo = {...form, ...foto}

          await crearProductoContext(productoNuevo)
         }else{
          const productoEditado = {...form, ...foto}
            await actualizarProductoContext(productoEditado)
         }
         handleReset()
  } catch (error){
      console.error(`Ocurrio un error en el handleSubmit`,error)
  }
 }

 const handleReset=()=>{
    setForm(formInicial)
    setProductoAEditar(null)
 }


  return (
    <>


    <form className='form1' onSubmit={handleSubmit}>
      <fieldset className='primerfieldset1'>
        <div>
          <label htmlFor="lbl-nombre" className='primerfieldset1__elementobloque'>Nombre</label>
          <input className='primerfieldset1__inputcajas' type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-precio" className='primerfieldset1__elementobloque'>Precio</label>
          <input className='primerfieldset1__inputcajas' type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-stock" className='primerfieldset1__elementobloque'>Stock</label>
          <input className='primerfieldset1__inputcajas' type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-marca" className='primerfieldset1__elementobloque'>Marca</label>
          <input className='primerfieldset1__inputcajas' type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-categoria" className='primerfieldset1__elementobloque'>Categoría</label>
          <input className='primerfieldset1__inputcajas' type="text" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-detalles" className='primerfieldset1__elementobloque'>Detalles</label>
          <input className='primerfieldset1__inputcajas' type="text" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
        </div>
        {/* <div>
          <label htmlFor="lbl-foto" className='primerfieldset1__elementobloque'>Foto</label>
          <input className='primerfieldset1__inputcajas' type="text" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange} />
         </div>*/}
         <DragDrop setFoto={setFoto} setSrcImagen={setSrcImagen} srcImagen={srcImagen}/>

        <div>
          <label htmlFor="lbl-envio" className='primerfieldset1__elementobloque'>Envío</label>
          <input className='primerfieldset1__inputcajas' type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
        </div>

         <div className='contenedorbotones1'>
        <button className='contenedorbotones1__btn1' type="submit">Guardar</button>
        <button className='contenedorbotones1__btn2' type="reset" onClick={handleReset}>Limpiar</button>
        </div>

      </fieldset>
    </form>
    </>
  )
}

export default Formulario