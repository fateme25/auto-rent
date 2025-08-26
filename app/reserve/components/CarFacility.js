import { Box, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";

function CarFacility() {
  const facilities = [
    "گرمکن صندلی",
    "سیستم PRE-SAFE Brake ",
    "گیربکس 7 سرعته اتوماتیک",
    "گرمکن و تهویه مطبوع صندلی‌ها",
    "استارت بدون کلید",
    "تعلیق تمام الکترونیکی",
  ];

  return (
    <Box
      sx={{
        maxWidth: 800,
        m: "2rem auto",
        p: 2,
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <Typography variant="subtitle1" fontWeight={700}>
        امکانات
      </Typography>
      <Divider
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "5px",

          "&:before": {
            content: '""',
            flex: "1",
            backgroundColor: "#FDB713",
            padding: "2px",
            borderRadius: "4px",
          },
          "&::after": {
            content: '""',
            flex: "16",
            backgroundColor: "#D7D7D7",
            padding: "1px",
            borderRadius: "4px",
          },
        }}
      ></Divider>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {facilities.map((facility, index) => (
          <Grid size={{ xs: 2, sm: 4 }} key={index}>
            <Box display="flex" alignItems="center" gap={1.5}>
              <Image
                src="/assets/icons/arrow-swap.png"
                alt="Picture of the author"
                width={30}
                height={30}
                style={{
                  padding: "5px",
                  border: "1px solid #C2C2C2",
                  borderRadius: "4px",
                }}
              />
              <Box
                sx={{
                  lineHeight: "10px",
                }}
              >
                <Typography variant="body2"> {facility}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CarFacility;
