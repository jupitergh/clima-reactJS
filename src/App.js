import React, { Fragment, useState, useEffect } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';
import Error from './Components/Error';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, seterror] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {


    const req = async () => {
      if (consultar) {
        try {
          const key = 'c7f9a498a88a8a9a7ab62006feb63ead';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}&units=metric`;
          const res = await (await fetch(url)).json();

          setResultado(res);
          setConsultar(false);

          if (resultado.cod === "404")
            seterror(true);
          else
            seterror(false);

        } catch (e) {
          throw new Error('Clima error: ', e);
        }
      }
    }


    req();
  }, [consultar, ciudad, pais, resultado]);

  let componente;
  if (error)
    componente = <Error mensaje="No hay resultados" />
  else
    componente = <Clima resultado={resultado} />

  return (
    <Fragment>
      <Header
        titulo="Clima ReactJS"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
