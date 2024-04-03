import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

/**
 * Componente de filtro que muestra opciones para filtrar por estado, especie y género
 * @param {Object} props - Propiedades del componente
 * @param {number} props.pageNumber - Número de página actual
 * @param {function} props.updatePageNumber - Función para actualizar el número de página
 * @param {function} props.updateStatus - Función para actualizar el estado seleccionado
 * @param {function} props.updateGender - Función para actualizar el género seleccionado
 * @param {function} props.updateSpecies - Función para actualizar la especie seleccionada
 * @returns {JSX.Element} Componente de filtro
 */
const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  // Función para limpiar todos los filtros y recargar la página
  const clearFilters = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    <Box className="col-lg-3 col-12 mb-5">
      <Typography variant="h5" align="center" fontWeight="bold" mb={2}>Filtro</Typography>
      <Typography variant="body1" align="center" color="primary" sx={{ cursor: "pointer", textDecoration: "underline" }} onClick={clearFilters} mb={3}>Eliminar Filtro</Typography>
      <Divider />
      <div className="accordion" id="accordionExample">
        {/* Componente de filtro por estado */}
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        {/* Componente de filtro por especie */}
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        {/* Componente de filtro por género */}
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </Box>
  );
};

export default Filter;
