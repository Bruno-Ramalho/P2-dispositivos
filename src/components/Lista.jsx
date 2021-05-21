import contextNotas from "../contexts/contextNota"

function Lista() {

  return (
    <contextNotas.Consumer >
      {({ notas }) => (
        <>
          <ul>
            {
              notas.map(item => (
                <>
                  <li key={item.id}>{item.titulo} -  Nota: {item.valor} - Categoria: {item.categoria}</li>
                </>
              ))
            }
          </ul>
        </>
      )}
    </contextNotas.Consumer>
  );
}

export default Lista;