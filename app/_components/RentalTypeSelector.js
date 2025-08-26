"use client";
import { useState } from "react";
import { Button } from "@mui/material";

function RentalTypeSelector({ buttonStyle = {} }) {
  const [activeButton, setActiveButton] = useState(1);

  const ButtonClickHandler = (buttonId) => setActiveButton(buttonId);
  const buttons = [
    "اجاره خودرو با راننده",
    "اجاره خودرو بی راننده",
    "اجاره ماشین عروس",
  ];

  return (
    <>
      {buttons.map((label, index) => {
        const isActive = activeButton === index + 1;
        return (
          <Button
            key={index}
            variant="outlined"
            onClick={() => ButtonClickHandler(index + 1)}
            sx={{
              ...buttonStyle,
              fontWeight: 700,
              borderRadius: "20px",
              borderColor: isActive ? "#194BF0" : "#D7D7D7",
              color: isActive ? "white" : "#000000",
              backgroundColor: isActive ? "#194BF0" : "transparent",
            }}
          >
            {label}
          </Button>
        );
      })}
    </>
  );
}

export default RentalTypeSelector;
