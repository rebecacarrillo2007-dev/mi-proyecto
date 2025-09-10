import React from "react";
import Card from "./Card";

function App() {
  // Datos con props dinámicas
  const data = [
    {
      lang: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      fcolor: "#e8f5ff",
      scolor: "#007acc"
    },
    {
      lang: "Vue",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      fcolor: "#e9fce9",
      scolor: "#42b883"
    },
    {
      lang: "Angular",
      url: "https://angular.io/assets/images/logos/angular/angular.svg",
      fcolor: "#ffe9e9",
      scolor: "#dd0031"
    }
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Mis Cards</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {data.map(({ lang, url, fcolor, scolor }) => (
          <Card
            key={lang}
            lang={lang}
            url={url}
            fcolor={fcolor}
            scolor={scolor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
