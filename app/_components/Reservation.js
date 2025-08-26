"use client";

import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import SearchIcon from "@mui/icons-material/Search";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import TimeSelector from "./TimeSelector";
import DateSelector from "./DateSelector";
import LocationPicker from "./LocationPicker";
import RentalTypeSelector from "./RentalTypeSelector";

function Reservation() {
  const CustomFlexBox = styled(Box)({
    display: "flex",
    gap: "16px",
    alignItems: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  });

  return (
    <>
      <Grid xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: {
                xs: "column",
                sm: "row",
              },

              paddingBottom: {
                xs: "1rem",
                sm: "0.75rem",
              },
            }}
          >
            <RentalTypeSelector
              buttonStyles={{
                fontSize: { xs: "0.7rem", sm: "1rem" },
                padding: { xs: "4px 8px", sm: "6px 16px" },
              }}
            />
          </Box>
          <Typography variant="subtitle2" color="#194BF0" textAlign="center">
            اطلاعات بیشتر در مورد رزرو خودرو
          </Typography>
        </Box>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            order: { xs: 1, sm: "unset" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
              }}
            >
              <ArrowCircleLeftOutlinedIcon />
              محل تحویل خودرو
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 6, md: 6 }}
          sx={{
            order: { xs: 3, sm: "unset" },
          }}
        >
          <CustomFlexBox sx={{ display: "flex", gap: 2 }}>
            {["تاریخ تحویل", "ساعت تحویل", "تاریخ بازگشت", "ساعت بازگشت"].map(
              (text, index) => (
                <Typography
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: {
                      xs: "0.75rem",
                      sm: "0.775rem",
                    },
                  }}
                >
                  <ArrowCircleLeftOutlinedIcon />
                  {text}
                </Typography>
              )
            )}
          </CustomFlexBox>
        </Grid>

        {/* location picker */}
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            order: { xs: 2, sm: "unset" },
          }}
        >
          <LocationPicker
            style={{
              boxShadow: "none",
              "& .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
            }}
            location="تهران ، فرودگاه امام خمینی"
          />
        </Grid>
        <Grid
          size={{ xs: 6, md: 6 }}
          sx={{
            order: { xs: 4, sm: "unset" },
          }}
        >
          <CustomFlexBox
            sx={{
              display: "flex",
              gap: 2,
              paddingTop: {
                sm: "2rem",
                xs: "unset",
              },
            }}
          >
            <DateSelector label="تاریخ تحویل" />

            <TimeSelector label="ساعت تحویل" />

            <DateSelector label="تاریخ برگشت" />

            <TimeSelector label="ساعت برگشت" />
          </CustomFlexBox>
        </Grid>
        <Grid
          size={{ xs: 12, md: 1 }}
          sx={{
            order: { xs: 4, sm: "unset" },
            paddingTop: 2,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              color: "#000",
              backgroundColor: "#FDB713",
              minWidth: "unset",
              borderRadius: "20%",
              p: 0,
              width: {
                xs: "100%",
                sm: 40,
              },
              height: {
                xs: 40,
                sm: 40,
              },
              borderRadius: {
                xs: 2,
                sm: "20%",
              },
              "&:hover": { backgroundColor: "#f9a602" },
            }}
          >
            <SearchIcon sx={{ color: "#000000" }} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Reservation;
