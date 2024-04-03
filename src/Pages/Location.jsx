import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

/**
 * Componente para mostrar información de una ubicación.
 * @returns {JSX.Element} Componente de ubicación.
 */
const Location = () => {
  // Estado para almacenar los resultados de los residentes de la ubicación.
  const [results, setResults] = useState([]);
  // Estado para almacenar la información de la ubicación.
  const [info, setInfo] = useState({});
  const { dimension, type, name } = info;
  // Estado para almacenar el número de la ubicación.
  const [number, setNumber] = useState(1);

  // URL de la API para obtener la información de la ubicación.
  const api = `https://rickandmortyapi.com/api/location/${number}`;

  // Efecto para cargar los datos de la ubicación cuando cambia el número de la misma.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api).then((res) => res.json());
        setInfo(data);

        // Obtener información de los residentes de la ubicación.
        const residentsData = await Promise.all(
          data.residents.map((resident) => fetch(resident).then((res) => res.json()))
        );
        setResults(residentsData);
      } catch (error) {
        console.error("Error en data:", error);
      }
    };

    fetchData();

    // Cleanup para evitar múltiples solicitudes en caso de cambios rápidos.
    return () => {
      setInfo({});
      setResults([]);
    };
  }, [api, number]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
        Ubicación :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimensión: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Tipo: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Elegir ubicación</h4>
          {/* Componente de selección de ubicación */}
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            {/* Componente de tarjeta para mostrar los residentes de la ubicación */}
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
