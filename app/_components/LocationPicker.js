"use client";

import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const cities = [
  "تهران",
  "شیراز",
  "مشهد",
  "اصفهان",
  "تبریز",
  "رشت",
  "کیش",
  "قشم",
];

export default function LocationPicker({ style = {}, location, icon }) {
  const [selectedCities, setSelectedCities] = useState("");
  const [open, setOpen] = useState(false);

  const handleItemClick = (city) => {
    setSelectedCities(city);

    setOpen(false);
  };

  const CustomIcon = ({ open }) =>
    open ? (
      <KeyboardArrowUpIcon
        sx={{ position: "absolute", left: 8, color: "#868686" }}
      />
    ) : (
      <KeyboardArrowDownIcon
        sx={{ position: "absolute", left: 8, color: "#868686" }}
      />
    );

  return (
    <FormControl fullWidth sx={{ mt: 3 }}>
      <Select
        // multiple
        displayEmpty
        sx={{ ...style }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={selectedCities}
        input={<OutlinedInput />}
        renderValue={(selected) =>
          !selected ? (
            <em
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {icon}
              {location}
            </em>
          ) : (
            selected
          )
        }
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "شهرها" }}
        IconComponent={() => <CustomIcon open={open} />}
      >
        {cities.map((city) => (
          <MenuItem
            key={city}
            value={city}
            onClick={() => handleItemClick(city)}
          >
            {city}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
