import { Link } from 'react-router-dom';
import './TarjetaAEditar.scss'

  
   const TarjetaAEditar =({producto})=>{
    
  return (
    <a href={`#${producto.id}`} className='tarjeta-aeditar' >
      <article className="tarjeta-aeditar__article">
              <div className="tarjeta-aeditar__image-container">
                <img
                  className="tarjeta-aeditar__image"
                  src={producto.foto}
                  alt={producto.nombre}
                />
              </div>
              <div className="tarjeta-aeditar__content">
                <h2 className="tarjeta-aeditar__heading">{producto.nombre}</h2>
                <div className="tarjeta-aeditar__description">
                  <p className='tarjeta-aeditar__detalles'>Precio: ${producto.precio}</p>
                  <hr />
                  <p className='tarjeta-aeditar__detalles'>Stock: {producto.stock}</p>
                  <hr />
                  <p className='tarjeta-aeditar__detalles'>Marca: {producto.marca}</p>
                  <hr />
                  <p className='tarjeta-aeditar__detalles'>Categoría: {producto.categoria}</p>
                  <hr />
                  <p className='tarjeta-aeditar__detalles'>
                  Detalles: {producto.detalles}
                  </p>
                  <hr />
              
                </div>
                
              </div>
            </article>
    </a>
  );
  }
export default TarjetaAEditar