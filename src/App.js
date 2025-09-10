import React, { useEffect, useState } from "react";
import Alumnos from "./api/Alumnos";

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const alumnoCtrl = new Alumnos();

  useEffect(() => {
    (async () => {
      const data = await alumnoCtrl.consultar();
      console.log("Datos de la API:", data); // 👀 Para verificar qué llega
      setAlumnos(data);
    })();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Alumnos</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {alumnos.map((a) => (
          <li
            key={a.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img
              src={a.avatar}
              alt={a.name}
              width="60"
              height="60"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <div>
              <p><strong>ID:</strong> {a.id}</p>
              <p><strong>Nombre:</strong> {a.name}</p>
              <p><strong>Email:</strong> {a.email}</p>
              <p><strong>Fecha creación:</strong> {a.createdAt}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
