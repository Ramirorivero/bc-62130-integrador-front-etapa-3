import './Contacto.scss'

const Contacto =() =>{
  return (
    <>
      <h1 className='titulo-contacto'>Datos de Contacto</h1>
      <form className="form" action="" method="get">

        <fieldset className="primerfieldset">
          
          <label className="primerfieldset__elementobloque" htmlFor="nombre"
          >Nombre Completo:*</label>
          <input
            className="primerfieldset__inputcajas"
            type="text"
            id="nombre"
            name="nombrecito"
            required /><br />
          <label className="primerfieldset__elementobloque" htmlFor="telefono"
          >Teléfono:</label>
          <input
            className="primerfieldset__inputcajas"
            type="tel"
            id="telefono"
            name="telefonito"
            placeholder="Código de área y número" /><br />
          <label className="primerfieldset__elementobloque" htmlFor="correo"
          >Direccion de correo electrónico:*</label>
          <input
            className="primerfieldset__inputcajas"
            type="email"
            id="correo"
            name="correito"
            required
            placeholder="Ej:mail@gmail.com" />
          <label className="primerfieldset__elementobloque" htmlFor="comentarios"
          >Comentarios, contanos tu duda o problema de la manera más detallada
            posible.</label>
          <textarea
            className="primerfieldset__textarea"
            maxLength="350"
            id="comentarios"
            name="comentaritos"
          ></textarea>
        </fieldset>
        <div className="contenedorbotones">
          <button className="contenedorbotones__btn1" type="submit">Enviar</button>
          <button className="contenedorbotones__btn2" type="reset">Cancelar</button>
        </div>
      </form>
    </>
  )
}
export default Contacto

