import React, { useEffect, useState } from 'react';
import '../App.css';
import Pelicula from './Pelicula';
import PageWraper from './PageWraper';
import Paginacion from './Paginacion';
import peliculasJson from '../peliculas.json';

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  // const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 5;

  /*useEffect(() => {
    buscarPeliculas();
  }, []);*/

  let peliculas = peliculasJson;

  /*Argumento get para barra buscador*/
  /*const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';

    let respuesta = await fetch(url, {
      "method": 'GET',
      "mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      }
    });

    let json = await respuesta.json();
    setPeliculas(json);
  }*/

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();


  return (
    <PageWraper>

      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />

    </PageWraper>
  );
}
export default ListadoPeliculas;
