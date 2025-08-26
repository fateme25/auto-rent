"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  marginLeft: 0,
  width: "100%",
  maxWidth: "300px",
});

const SearchIconWrapper = styled("div")({
  padding: "10px",
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
});

const StyledInputBase = styled(InputBase)({
  color: "inherit",
  width: "100%",
  padding: "10px",
  paddingLeft: "40px", // Leaves space for the icon
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
});

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="جستجو..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
