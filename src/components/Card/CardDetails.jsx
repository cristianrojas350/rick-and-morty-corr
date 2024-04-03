import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "@mui/material"; // Importar Badge de Material-UI

const CardDetails = () => {
  let { id } = useParams();

  const [fetchedData, updateFetchedData] = useState({});
  const { name, location, origin, gender, image, status, species } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Error de servicio");
        }
        const data = await response.json();
        updateFetchedData(data);
      } catch (error) {
        console.error("Error en los Datos:", error);
      }
    };

    fetchData();
  }, [api]);

  // Definir el color de fondo dinámico en función del estado
  const getBackgroundColor = () => {
    switch (status) {
      case "Dead":
        return "#FF0000"; // Rojo
      case "Alive":
        return "#00FF00"; // Verde
      default:
        return "#808080"; // Gris
    }
  };
  return (
    <div className="container d-flex justify-content-center mb-5">
      {/* Agregar estilos para el fondo dinámico */}
      <div className="card-details-container" style={{ margin: "40px", padding: "40px", border: "1px solid #ccc", borderRadius: "5px", background: `linear-gradient(to bottom right, ${getBackgroundColor()}, #ffffff)` }}>
        <div className="d-flex flex-column gap-3">
          <h1 className="text-center">{name}</h1>
          {/* Establecer un ancho máximo para la imagen */}
          <img className="img-fluid" src={image} alt="" style={{ maxWidth: "100%" }} />
          {/* Usar Badge de Material-UI con condicional ternario para asignar color */}
          <Badge variant="outlined" color={status === "Dead" ? "error" : status === "Alive" ? "success" : "secondary"} className="fs-5">
            Estado :{status}
          </Badge>
          <div className="content">
            <div className="">
              <span className="fw-bold">Genero : </span>
              {gender}
            </div>
            <div className="">
              <span className="fw-bold">Lugar: </span>
              {location?.name}
            </div>
            <div className="">
              <span className="fw-bold">Origen: </span>
              {origin?.name}
            </div>
            <div className="">
              <span className="fw-bold">Especie: </span>
              {species}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;