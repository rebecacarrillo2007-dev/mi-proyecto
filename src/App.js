import React from "react";
import Card from "./Card";

function App() {
  const data = [
    {
      lang: "Python..",
      url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      fcolor: "#1E3A8A", // Azul oscuro
      scolor: "#ffffff"
    },
    {
      lang: "PHP..",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      fcolor: "#1F2937", // Gris oscuro
      scolor: "#ffffff"
    },
    {
      lang: "Java..",
      url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      fcolor: "#991B1B", // Rojo oscuro
      scolor: "#ffffff"
    }
  ];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
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
