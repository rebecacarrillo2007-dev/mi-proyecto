import React, { useEffect, useState } from "react";
import Alumnos from "./api/Alumnos";

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const alumnoCtrl = new Alumnos();

  useEffect(() => {
    (async () => {
      const data = await alumnoCtrl.consultar();
      setAlumnos(data);
    })();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Alumnos</h1>
      <ul>
        {alumnos.map((a) => (
          <li key={a.id}>
            {a.nombre} - {a.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
