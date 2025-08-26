import { Container, Box, Typography} from "@mui/material";
import Image from "next/image";

import Grid from "@mui/material/Grid2";

function BookingGuid() {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: "6.5rem" }}>
        <Typography variant="h5" color="#5E5E5E">
          چگونه در وب سایت
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          <span
            style={{
              color: "#D79C10",
            }}
          >
            اُتـــورِنت،
          </span>
          خودرو رزرو کنیم؟
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {/* First Column (Contains Two Rows) */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container direction="column" spacing={{ xs: 6, md: 20 }}>
            <Grid>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Image
                  src="/assets/images/guid1.svg"
                  width={220}
                  height={100}
                  alt="guid1"
                />
              </Box>
            </Grid>
            <Grid>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Image
                  src="/assets/images/guid3.svg"
                  width={220}
                  height={100}
                  alt="guid3"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Column (Single Item) */}
        <Grid size={{ md: 4 }}>
          <Box
            sx={{
              p: 2,
              textAlign: "center",
              height: "100%",

              display: { xs: "none", md: "block" },
              position: "relative",
            }}
          >
            <Image src="/assets/images/main-car.svg" fill  alt="car image of guiding section"/>
          </Box>
        </Grid>

        {/* Third Column (Contains Two Rows) */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container direction="column" spacing={{ xs: 6, md: 20 }}>
            <Grid>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Image
                  src="/assets/images/guid2.svg"
                  width={220}
                  height={100}
                  alt="guid2"
                />
              </Box>
            </Grid>
            <Grid>
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Image
                  src="/assets/images/guid4.png"
                  width={220}
                  height={100}
                  alt="guid4"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookingGuid;
