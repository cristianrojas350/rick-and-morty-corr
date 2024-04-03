export function listarPersonajesOrdenAlfabetico(data) {
    try {
      // Verificar que el objeto tiene la propiedad 'results' que contiene la lista de personajes
      if (!data.results) {
        throw new Error("El objeto no contiene la propiedad 'results'.");
      }
  
      // Obtener la lista de personajes
      const characters = data.results;
  
      // Ordenar los personajes alfabéticamente por nombre
      const charactersSorted = characters.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
  
      // Devolver la lista de personajes ordenada
      return { ...data, results: charactersSorted }; // Devuelve una copia del objeto original con la lista de personajes ordenada
    } catch (error) {
      console.error("Error al ordenar personajes:", error);
      return data; // Devuelve los datos sin cambios en caso de error
    }
  }
  