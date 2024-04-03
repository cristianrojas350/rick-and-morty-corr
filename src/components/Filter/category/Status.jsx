import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import FilterBTN from "../FilterBTN";

/**
 * Componente de estado que muestra un grupo de botones para filtrar por estado
 * @param {Object} props - Propiedades del componente
 * @param {function} props.updateStatus - Función para actualizar el estado seleccionado
 * @param {function} props.updatePageNumber - Función para actualizar el número de página
 * @returns {JSX.Element} Componente de estado
 */
const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="status-content"
        id="status-header"
      >
        <Typography>Estado</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Status;
