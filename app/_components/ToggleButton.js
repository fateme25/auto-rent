"use client";

import { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

function ToggleButton({ gap, value, changeOption, options }) {
  return (
    <FormGroup
      sx={{
        display: "flex",
        justifyContent: { xs: "flex-end" },
        flexDirection: { xs: "row" },
        gap,
      }}
    >
      {options?.map((option) => (
        <FormControlLabel
          key={option.label}
          control={
            <Checkbox
              size="small"
              icon={<RadioButtonUncheckedOutlinedIcon />}
              checkedIcon={<RadioButtonCheckedOutlinedIcon />}
              checked={value === option.label}
              onChange={() => changeOption(option.label)}
            />
          }
          label={option.label}
          sx={{ margin: 0 }}
        />
      ))}
    </FormGroup>
  );
}

export default ToggleButton;
