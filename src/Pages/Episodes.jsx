import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

const Episodes = () => {
  // Estado para almacenar los resultados de la consulta a la API de episodios
  const [results, setResults] = useState([]);
  // Estado para almacenar la información del episodio seleccionado
  const [info, setInfo] = useState({});
  // Estado para almacenar el ID del episodio seleccionado
  const [id, setID] = useState(1);

  // URL de la API para obtener detalles de un episodio específico
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  // Efecto para cargar los datos del episodio seleccionado cuando cambia su ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos del episodio
        const response = await fetch(api);
        const data = await response.json();
        // Actualizar el estado con la información del episodio
        setInfo(data);

        // Obtener detalles de los personajes del episodio
        const charactersData = await Promise.all(
          data.characters.map((characterUrl) => fetch(characterUrl).then((res) => res.json()))
        );
        // Actualizar el estado con los resultados de los personajes
        setResults(charactersData);
      } catch (error) {
        console.error("Error en data:", error);
      }
    };

    fetchData();
  }, [api, id]);

  // Extraer la información del episodio
  const { air_date, name } = info;

  return (
    <div className="container">
      <div className="row mb-3">
        {/* Mostrar el nombre y la fecha de emisión del episodio */}
        <h1 className="text-center mb-3">
          Nombre del Episodio :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Fecha: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          {/* Componente para seleccionar un episodio */}
          <h4 className="text-center mb-4">Selecciona Episodio</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {/* Componente para mostrar tarjetas de personajes del episodio */}
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
