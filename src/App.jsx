import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddRut from "./components/AddRut";

function App() {
  const [rut, setRut] = useState("");
  return (
    <div className="App">
      <Header />
      <AddRut rut={rut} setRut={setRut} />
    </div>
  );
}

export default App;
