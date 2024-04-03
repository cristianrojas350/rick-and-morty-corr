import React from "react";
import { styled } from "@mui/material/styles";
//import { makeStyles } from '@mui/styles';


// Estilo personalizado para los botones de filtro seleccionados
const StyledLabel = styled('label')({
  backgroundColor: '#0b5ed7',
  color: 'white',
});

/**
 * Componente de botón de filtro
 * @param {Object} props - Propiedades del componente
 * @param {string} props.input - Valor del botón de filtro
 * @param {function} props.task - Función para ejecutar al hacer clic en el botón de filtro
 * @param {function} props.updatePageNumber - Función para actualizar el número de página
 * @param {number} props.index - Índice del botón de filtro
 * @param {string} props.name - Nombre del grupo de botones de filtro
 * @returns {JSX.Element} Componente de botón de filtro
 */
const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      {/* Estilos CSS en línea para los botones de filtro */}
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      {/* Botón de filtro */}
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        {/* Label del botón de filtro */}
        {/* Utilizamos un componente styled de Material-UI para aplicar el estilo personalizado */}
        <StyledLabel
          onClick={(x) => {
            // Ejecutamos la tarea asociada al botón de filtro
            task(input);
            // Actualizamos el número de página a 1 al hacer clic en el botón de filtro
            updatePageNumber(1);
          }}
          htmlFor={`${name}-${index}`}
        >
          {input}
        </StyledLabel>
      </div>
    </div>
  );
};

export default FilterBTN;
