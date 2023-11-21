import { useFormik } from 'formik'
import './Contacto.scss'

const Contacto =() =>{
  const valoresIniciales = {
    nombre: '',
    telefono: '',
    email: '',
    comentarios: ''
  
  }

  const envioDeDatos = (values) => {
    console.log('Enviando formulario...', values)
  }

  const validaciones = (values) => {
    let errores = {}
  
    
    const expresionRegularEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const expresionRegularTelefono = /^[0-9]*$/;

    if(!values.nombre) {
      errores.nombre = 'El campo nombre es obligatorio'
    } else if (values.nombre.length < 10) {
      errores.nombre = 'El campo nombre tiene que tener al menos 10 caracteres'
    }

    if(!values.telefono) {
      errores.telefono = 'El campo telefono es obligatorio'
    }else if(!expresionRegularTelefono.test(values.telefono)){
      errores.telefono ='El campo telefono solo debe contener numeros'
    }

    if(!values.email) {
      errores.email = 'El campo email es obligatorio'
    } else if (!expresionRegularEmail.test(values.email)) {
      errores.email = 'El email ingresado no es válido'
    }
    if(!values.comentarios) {
      errores.comentarios = 'El campo comentario es obligatorio'
    } else if (values.comentarios.length < 20 || values.comentarios.length > 300) {
      errores.comentarios = 'El campo comentario tiene que tener al menos 20 caracteres y como maximo 300'
    }

    

    return errores
  }

  const { values, errors, handleChange, handleSubmit, handleReset }  = useFormik({
    initialValues: valoresIniciales,
    onSubmit: envioDeDatos,
    validate: validaciones
  })

  return (
    <>
      <h1 className='titulo-contacto'>Datos de Contacto</h1>
      <form className="form" action="" method="get">

        <fieldset className="primerfieldset">
          <div>
          <label className="primerfieldset__elementobloque" htmlFor="nombre"
          >Nombre Completo:*</label>
          <input
            className= "primerfieldset__inputcajas"
            type="text"
            id="nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            required /> <br />
               { errors.nombre ? <small className="primerfieldset_error">{errors.nombre}</small> : null}
            </div>

            <div>
          <label className="primerfieldset__elementobloque" htmlFor="telefono"
          >Teléfono:</label>
          <input
            className="primerfieldset__inputcajas"
            type="tel"
            id="telefono"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            placeholder="Código de área y número" /> <br />
           { errors.telefono ? <small className="primerfieldset_error">{errors.telefono}</small> : null}
            </div>

        <div>
          <label className="primerfieldset__elementobloque" htmlFor="correo"
          >Direccion de correo electrónico:*</label>
          <input
            className="primerfieldset__inputcajas"
            type="email"
            id="correo"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
            placeholder="Ej:mail@gmail.com" /> <br />
            { errors.email ? <small className="primerfieldset_error">{errors.email}</small> : null}
            </div>
         <div>
          <label className="primerfieldset__elementobloque" htmlFor="comentarios"
          >Comentarios, contanos tu duda o problema de la manera más detallada
            posible.</label>
          <textarea
            className="primerfieldset__textarea"
            
            id="comentarios"
            name="comentarios"
            value={values.comentarios}
            onChange={handleChange}
          ></textarea> <br />
          { errors.comentarios ? <small className="primerfieldset_error">{errors.comentarios}</small> : null}
        </div>
        <div className="contenedorbotones">
          <button className="contenedorbotones__btn1" type="submit" onClick={handleSubmit}>Enviar</button>
          <button className="contenedorbotones__btn2" type="reset" onClick={handleReset}>Cancelar</button>
        </div>
        </fieldset>
      </form>
    </>
  )
}
export default Contacto

