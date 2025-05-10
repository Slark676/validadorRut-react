import { useState } from "react";
import { validadorFormatoRut } from "./hooks/ValidadorFormatoRut";
import MensajeValidador from "./MensajeValidador";

function AddRut() {
  const [valor, setValor] = useState("");
  const { error, mensajeError, rutValido } = validadorFormatoRut(valor);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Ingrese su RUT con punto y guion."
          onChange={(e) => setValor(e.target.value)}
        />
      </form>
      <MensajeValidador
        error={error}
        mensajeError={mensajeError}
        rutValido={rutValido}
      />
    </div>
  );
}

export default AddRut;
