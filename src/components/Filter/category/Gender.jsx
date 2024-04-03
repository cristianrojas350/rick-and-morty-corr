import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import FilterBTN from "../FilterBTN";

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="gender-content"
        id="gender-header"
      >
        <Typography>Genero</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="d-flex flex-wrap gap-3">
          {genders.map((gender, index) => (
            <FilterBTN
              key={index}
              name="gender"
              index={index}
              updatePageNumber={updatePageNumber}
              task={updateGender}
              input={gender}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Gender;
