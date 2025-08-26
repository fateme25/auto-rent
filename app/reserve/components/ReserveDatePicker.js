"use client";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { TextField } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function ReserveDatePicker({label , defaultValue}) {
  const [date, setDate] = useState(defaultValue);

  return (
    <DatePicker
      value={date}
      onChange={(newValue) => setDate(newValue?.format?.() || "")}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      containerStyle={{
        width: "100%",
      }}
      render={(value, openCalendar) => (
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
      )}
    />
  );
}
