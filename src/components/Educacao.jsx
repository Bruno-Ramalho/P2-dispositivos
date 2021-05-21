import { useState, useEffect } from "react";
import contextNota from "../contexts/contextNota";
import contextoForm from "../contexts/contextoForm"

import Lista from "./Lista";
import Input from "./Input";
import Form from "./Form";

function Educacao() {
  const [categoriaNota, setCategoriaNota] = useState("");
  const [tituloNota, setTituloNota] = useState("");
  const [valorNota, setValorNota] = useState(0);
  const [notas, setNotas] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const [adiconar, setAdicionar] = useState(false);

  useEffect(() => {
    if (carregado === false) {
      carregarDados();
      setCarregado(true);
    }
  }, notas[{}]);

  const carregarDados = async () => {
    const dados = await fetch('http://localhost:3333/notas');
    const result = await dados.json();
    setNotas(result);
    console.log(dados);
  }

  const cadastrarDados = async () => {
    fetch('http://localhost:3333/notas', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titulo: tituloNota,
        categoria: categoriaNota,
        valor: valorNota
      })
    })
    setCarregado(false);
  }

  return (
    <contextNota.Provider value={{ notas }}>
      <>
        <h2>TODAS NOTAS</h2>
        <Input /><button>Pesquisar</button>
        <br />
        <br />
        <button type="button" onClick={() => setAdicionar(true)} >Nova nota</button>
        <Lista />
        {adiconar ?
          <contextoForm.Provider value={{ cadastrarDados }}>
            <h1>MINHA NOTA</h1>
            <Form />
          </contextoForm.Provider>
          :
          <></>
        }
      </>
    </contextNota.Provider >
  );
}

export default Educacao;