import { useState } from "react"

//contexto
import contextNota from "../contexts/contextNota";

function Input() {
  const [valor, setValor] = useState("");

  return (
    < contextNota.Consumer>
      { ({ setAlgumValor }) => (

        <input
          type="text"
          value={valor}
          onChange={(e) => {
            setValor(e.target.value);
            if (setAlgumValor) {
              setAlgumValor(e.target.value);
            }
          }}
        />
      )}
    </contextNota.Consumer>
  );
}

export default Input;