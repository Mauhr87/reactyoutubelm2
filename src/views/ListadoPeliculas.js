import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from "./Paginacion";
import { useState, useEffect } from 'react';


function ListadoPeliculas() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 4;

  useEffect(() => {
    buscarPeliculas();
  }, []);

  const buscarPeliculas = async () => {
    let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';

    let respuesta = await fetch(url, {
      "method": 'Get',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "Origin": 'https://lucasmoy.dev/'
      }
    });

    let json = await respuesta.json();
    setPeliculas(json);
  }


  const getTotalPaginas = () => {
    let cantidadTotalPeliculas = peliculas.length;
    return Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);
  }

  let peliculasPorPagina = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);

  return (
    <PageWrapper>
      
      {peliculasPorPagina.map(pelicula => 
          <Pelicula imagen={pelicula.img} titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}>{pelicula.descripcion}</Pelicula>
      )}
      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) =>{
        setPaginaActual(pagina);
      }}/>
    </PageWrapper>
  );
}

export default ListadoPeliculas;