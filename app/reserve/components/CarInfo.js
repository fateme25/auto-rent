import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";

function CarInfo() {
  const carInformation = [
    { title: "مسافت پیموده", value: "12 کیلومتر", image: "speedometer.png" },
    { title: "نوع دنده", value: "اتوماتیک", image: "gear.png" },
    { title: "سوخت", value: "بنزین", image: "gas.png" },
    { title: "ظرفیت", value: "4نفر", image: "chair.png" },
    { title: "فرمان", value: "هیدرولیک", image: "steering-wheel.png" },
    { title: "مدل", value: "2014", image: "engine.png" },
  ];

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "2rem auto",
        padding: 2,
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {carInformation.map(({ title, value, image }, index) => (
          <Grid size={{ xs: 2, sm: 4 }} key={index}>
            <Box display="flex" alignItems="center" gap={1.5}>
              <Image
                src={`/assets/icons/${image}`}
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
                <Typography variant="body1"> {title}</Typography>
                <Typography variant="caption">{value}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CarInfo;
