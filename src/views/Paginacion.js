function Paginacion(props){

  const getPaginas = () => {
    const resultado = [];
    for (let index = 0; index < props.total; index++) {
      let pagina = index + 1;
      resultado.push(
        <a onClick={() => props.onChange(pagina)} className={props.pagina === pagina ? 'active' : ''}>{pagina}</a>
      );
    }
    return resultado;
  }

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>Page {props.pagina} of {props.total}:</span>
        {getPaginas()}
      </div>
    </div>
  );
}

export default Paginacion;