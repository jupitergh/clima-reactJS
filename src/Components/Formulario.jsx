import React, { useState } from 'react';
import Error from './Error';
import propTypes from 'prop-types';

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {

     // state

     const [error, setError] = useState(false);

     const { ciudad, pais } = busqueda;

     const handleChange = e => {
          setBusqueda({
               ...busqueda,
               [e.target.name]: e.target.value
          });
     }

     const handleSubmit = e => {
          e.preventDefault();

          // validar
          if (ciudad.trim() === '' || pais.trim() === '')
               return setError(true);

          setConsultar(true);

     }

     return (
          <form
               onSubmit={handleSubmit}
          >
               {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
               <div className="input-field col s12">
                    <input
                         type="text"
                         name="ciudad"
                         id="ciudad"
                         value={ciudad}
                         onChange={handleChange}
                    ></input>
                    <label htmlFor="ciudad">Ciudad: </label>
               </div>
               <div className="input-field col s12">
                    <select
                         name="pais"
                         id="pais"
                         value={pais}
                         onChange={handleChange}
                    >
                         <option value="">-- Seleccione un país --</option>
                         <option value="US">Estados Unidos</option>
                         <option value="MX">México</option>
                         <option value="AR">Argentina</option>
                         <option value="CO">Colombia</option>
                         <option value="CR">Costa Rica</option>
                         <option value="ES">España</option>
                         <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">País: </label>
               </div>
               <div className="input-field col s12">
                    <button
                         type="submit"
                         className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                    >Buscar clima</button>
               </div>
          </form>

     );
}

Formulario.propTypes = {
     busqueda: propTypes.object.isRequired,
     setBusqueda: propTypes.func.isRequired,
     setConsultar: propTypes.func.isRequired
}

export default Formulario;