import { useReducer } from "react"
import { Link, Route } from 'react-router-dom';

import Educacao from "../components/Educacao";


function loginReducer(estadoAtual, acao) {
  if (acao.type === "ALTERAR_NOME") {
    return {
      ...estadoAtual,
      nome: acao.payload,
    }
  } else if (acao.type === "ALTERAR_SENHA") {
    return {
      ...estadoAtual,
      senha: acao.payload,
    }
  } else if (acao.type === "AUTENTICAR") {
    return {
      ...estadoAtual,
      autenticando: true,
    }
  } else if (acao.type === "FALHAR_AUTENTICACAO") {
    return {
      ...estadoAtual,
      autenticado: false,
      loginInvalido: true,
    }
  } else if (acao.type === "CONFIRMAR_AUTENTICACAO") {
    return {
      ...estadoAtual,
      autenticando: false,
      autenticado: true,
      loginInvalido: false,
    }
  } else if (acao.type === "SAIR") {
    return {
      ...estadoAtual,
      autenticado: false,
      nome: "",
      senha: "",
    }
  }
  return estadoAtual;
}

const estadoInicial = {
  nome: "",
  senha: "",
  autenticado: false,
  autenticando: false,
  loginInvalido: false,
}

function Login() {
  const [{ nome, senha, loginInvalido, autenticando, autenticado }, dispatch] = useReducer(loginReducer, estadoInicial);

  const validarAcesso = function () {
    dispatch({ type: "AUTENTICAR" });
    setTimeout(() => {
      if ((nome === "bruno" && senha === "teste1") || (nome === "leandro" && senha === "teste2")) {
        dispatch({ type: "CONFIRMAR_AUTENTICACAO" })
      } else {
        dispatch({ type: "FALHAR_AUTENTICACAO" })
      }
    }, 3000);
  };

  const sair = function () {
    dispatch({ type: "SAIR" })
  }
  return (autenticado ? (
    <>
      <h1>Seja bem vindo(a), {nome}!</h1>
      <Educacao />
      <button onClick={sair}>Sair</button>

    </>
  ) : (
    <>
      <h1>Controle de Acesso</h1>
      {loginInvalido && (
        <p>Usuário e/ou senha inválido(s)! Tente novamente.</p>
      )}
      <input
        type="text"
        value={nome}
        onChange={(e) => dispatch({ type: "ALTERAR_NOME", payload: e.target.value })}
      />
      <input
        type="text"
        value={senha}
        onChange={(e) => dispatch({ type: "ALTERAR_SENHA", payload: e.target.value })}
      />
      <button onClick={validarAcesso}>
        {autenticando ? "Acessando..." : "Acessar"}
      </button>
    </>
  )
  )
}

export default Login;