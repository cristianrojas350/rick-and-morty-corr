import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

/**
 * Componente de grupo de entrada que muestra un menú desplegable con opciones
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Nombre del grupo de entrada
 * @param {function} props.changeID - Función para manejar el cambio de ID seleccionado
 * @param {number} props.total - Total de opciones disponibles en el menú
 * @returns {JSX.Element} Componente de grupo de entrada
 */
const InputGroup = ({ name, changeID, total }) => {
  return (
    <FormControl fullWidth variant="outlined" className="mb-3">
      <InputLabel id={`${name}-label`}>Buscar... {name}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        value=""
        onChange={(e) => changeID(e.target.value)}
        label={`Choose ${name}`}
      >
        <MenuItem value="">
          <em>Buscar...</em>
        </MenuItem>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <MenuItem key={index} value={x + 1}>
              {name} - {x + 1}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default InputGroup;
