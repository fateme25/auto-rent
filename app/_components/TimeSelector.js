"use client";

import { AccessTime } from "@mui/icons-material";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { TextField } from "@mui/material";

export default function TimeSelector({ label, variant, value, onChange }) {
  const [selectedTime, setSelectedTime] = useState(value || new Date());

  return (
    <DatePicker
      disableDayPicker
      value={selectedTime}
      onChange={(newTime) => {
        setSelectedTime(newTime);
        if (onChange) onChange(newTime.toDate());
      }}
      containerStyle={{
        width: "100%",
      }}
      format="HH:mm"
      plugins={[<TimePicker position="bottom" hideSeconds />]}
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
                  <AccessTime
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
              paddingInline: " 12px",
              cursor: "pointer",
              gap: "8px",
              fontSize: "0.9rem",
              color: "#333",
            }}
          >
            <AccessTime fontSize="small" style={{ color: "#666" }} />
            <span>{value || "00:00"}</span>
          </div>
        )
      }
    />
  );
}
