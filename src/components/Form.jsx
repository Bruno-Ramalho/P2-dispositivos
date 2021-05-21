import Input from "../components/Input"

//contexto
import contextoForm from "../contexts/contextoForm"

function Form() {
  return (
    <contextoForm.Consumer>
      {({  cadastrarDados }) => (

        <>
          <form>
            <h3>CATEGORIA * DATA</h3>
            <Input />
            <Input />
            <Input />
                <button type="button" onClick={() => { cadastrarDados();}}>Cadastrar</button>
          </form>
        </>
      )}

    </contextoForm.Consumer>
  );
}

export default Form;