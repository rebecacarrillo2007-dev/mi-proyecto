import React, { useEffect, useState } from "react";
import Alumnos from "./api/Alumnos";

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const alumnoCtrl = new Alumnos();

  useEffect(() => {
    (async () => {
      const data = await alumnoCtrl.consultar();
      console.log("Datos de la API:", data);
      setAlumnos(data);
    })();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Lista de Alumnos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {alumnos.map((a) => (
          <div
            key={a.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
              <img
                src={a.avatar}
                alt={a.name}
                width="70"
                height="70"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #fff",
                  marginRight: "15px",
                }}
              />
              <h2 style={{ margin: 0, fontSize: "1.4rem", color: "#fff" }}>{a.name}</h2>
            </div>
            <p>
              <strong>ID:</strong> {a.id}
            </p>
            <p>
              <strong>Email:</strong> {a.email}
            </p>
            <p>
              <strong>Fecha creación:</strong> {new Date(a.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
