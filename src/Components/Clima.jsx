import React, { } from 'react';
import propTypes from 'prop-types';

const Clima = ({ resultado }) => {

     // const { nombre, temperatura } = resultado;

     if (!resultado.name)
          return null;

     return (

          < div className="card-panel white col s12" >
               <div className="black-text">
                    <h2>El clima de {resultado.name} es de: </h2>
                    <p className="temperatura">
                         {resultado.main.temp} <span>&#x2103;</span>
                    </p>
                    <p>Temperatura máxima: {resultado.main.temp_max} <span>&#x2103;</span></p>
                    <p>Temperatura mínima: {resultado.main.temp_min} <span>&#x2103;</span></p>
               </div>
          </div >


     );
}

Clima.propTypes = {
     resultado: propTypes.object.isRequired
}

export default Clima;