import { Box, Container, Typography, Button } from "@mui/material";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

function Hero() {
  return (
    <Container
      disableGutters={true}
      className="hero"
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Moves everything inside this box to the right
          width: "100%", // Ensures full width
          padding: "0 5%", // Adds some spacing from the edges
        }}
      >
        <Typography variant="h2" fontWeight={500} color="#FDB713" sx={{
          fontSize:{
            xs:"3rem",
            sm:"3.5rem"
          }
        }}>
          اُتـــو رِنت؛ سریع، <br />
          آسان و به صرفه
        </Typography>
        <Typography variant="h6" fontWeight={200} sx={{ paddingTop: "15px" }}>
          سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!
        </Typography>

        <Box
          paddingTop="45px"
          display="flex"
          sx={{
            fontSize: {
              xs: "15px",
              sm: "18px",
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FDB713",
              color: "#000000",
              fontWeight: "700",
              borderRadius: "10px",
              marginInlineEnd: "15px",
              padding: {
                xs: "5px 10px",
                sm: "10px 20px",
              },
            }}
          >
            <DriveEtaIcon sx={{ marginLeft: "8px" }} />
            رزرو آسان خودرو
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              marginLeft: "20px",
              fontWeight: "700",
              borderRadius: "8px",
              padding: "8px 15px",
            }}
          >
            تماس با ما
            <ArrowCircleLeftOutlinedIcon sx={{ marginRight: "8px" }} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
