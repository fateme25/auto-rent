"use client";

import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { TextField } from "@mui/material";

export default function DateSelector({ label, variant, value, onChange }) {
  const [date, setDate] = useState(value || new Date());

  return (
    <DatePicker
      value={date}
      onChange={(newValue) => {
        setDate(newValue); // for changing date in ui
        if (onChange) onChange(newValue.toDate());
      }}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      containerStyle={{
        width: "100%",
      }}
      render={(value, openCalendar) =>
        variant === "textField" ? (
          <TextField
            fullWidth
            label={label}
            value={value || ""}
            onClick={openCalendar}
            sx={{
              marginTop: 2,
              "& .MuiInputLabel-root": {
                right: 28,
                left: "auto",
                transformOrigin: "top right",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                textAlign: "right",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <CalendarTodayIcon
                    position="start"
                    fontSize="small"
                    style={{ color: "#666" }}
                    sx={{ marginRight: 2 }}
                  />
                ),
              },
            }}
          />
        ) : (
          <div
            onClick={openCalendar}
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: "12px",
              cursor: "pointer",
              gap: "8px",
              fontSize: "0.9rem",
              color: "#333",
            }}
          >
            <CalendarTodayIcon fontSize="small" style={{ color: "#666" }} />
            <span>{value}</span>
          </div>
        )
      }
    />
  );
}
