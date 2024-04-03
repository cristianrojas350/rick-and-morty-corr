import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import FilterBTN from "../FilterBTN";

/**
 * Componente de especies que muestra un grupo de botones para filtrar por especie
 * @param {Object} props - Propiedades del componente
 * @param {function} props.updateSpecies - Función para actualizar la especie seleccionada
 * @param {function} props.updatePageNumber - Función para actualizar el número de página
 * @returns {JSX.Element} Componente de especies
 */
const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="species-content"
        id="species-header"
      >
        <Typography>Especie</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              key={index}
              name="species"
              index={index}
              updatePageNumber={updatePageNumber}
              task={updateSpecies}
              input={item}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Species;
