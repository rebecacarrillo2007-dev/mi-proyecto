class Alumnos {
  async consultar() {
    try {
      const response = await fetch("https://68c1975698c818a694026ea5.mockapi.io/jacob");
      if (!response.ok) throw new Error("Error en la consulta");
      return await response.json();
    } catch (error) {
      console.error("Error al consultar API:", error);
      return [];
    }
  }
}

export default Alumnos;
