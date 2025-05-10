import { useState, useEffect } from "react";

export const validadorFormatoRut = (rut) => {
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const [rutValido, setRutValido] = useState(false);

  const FormatoRut = () => {
    const regex = /^\d{1,3}(\.\d{3})*-\d{1}$/;

    if (rut === "") {
      setMensajeError(" Ingrese su RUT");
      setError(true);
      return false; // Retorna false si hay un error
    }
    if (!regex.test(rut)) {
      setMensajeError(
        "❌ Solo se permiten números, puntos, guiones y la letra 'K'."
      );
      setError(true);
      return false; // Retorna false si hay un error
    }
    const limpio = rut.replace(/[\.\-]/g, "").trim();
    if (limpio.length < 8 || limpio.length > 9) {
      setMensajeError(
        "❌ El RUT debe tener entre 8 y 9 caracteres (sin contar puntos ni guiones)."
      );
      setError(true);
      return false; // Retorna false si hay un error
    }
    setMensajeError("");
    setError(false);
    return true; // Retorna true si el formato es válido
  };

  const validarRut = (rut) => {
    const limpio = rut
      .replace(/[\.\-]/g, "")
      .trim()
      .toUpperCase();
    const cuerpo = limpio.slice(0, -1);
    const dv = limpio.slice(-1);
    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo[i]) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    const resto = 11 - (suma % 11);
    const dvCalculado = resto === 11 ? "0" : resto === 10 ? "K" : String(resto);
    if (dvCalculado === dv) {
      setRutValido(true);
      return;
    }
    setRutValido(false);
  };

  useEffect(() => {
    const esFormatoValido = FormatoRut(); // Llama a FormatoRut y obtiene si el formato es válido
    if (esFormatoValido) {
      validarRut(rut); // Solo valida el RUT si el formato es válido
    }
  }, [rut]);

  return { error, mensajeError, rutValido };
};
