import React from "react";

function MensajeValidador({ error, mensajeError, rutValido }) {
  return (
    <div>
      {error && <p style={{ color: "red" }}>{mensajeError}</p>}
      {rutValido && !error && (
        <p style={{ color: "green" }}>✅ El RUT es válido</p>
      )}
      {!rutValido && !error && (
        <p style={{ color: "red" }}>❌ El RUT no es válido</p>
      )}
    </div>
  );
}

export default MensajeValidador;
