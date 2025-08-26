import Header from "../../_components/Header";
import { Box, CardMedia, Typography } from "@mui/material";

export const metadata = {
  title: "اجاره خودرو",
  description: "لیست خودرو های اجاره ای"
};
function layout({ children }) {
  return (
    <div>
      <Header />
      <Box sx={{ position: "relative", height: "350px" }}>
        <CardMedia
          style={{ height: "350px" }}
          component="img"
          image={"/assets/images/reserve-header.png"}
          alt="banner image"
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
          }}
        >
          <Typography variant="h4" color="#FDB713">
            اجاره خودرو
          </Typography>

          <Typography variant="body2" color="white">
            اتورنت &gt; لیست خودرو های اجاره ای
          </Typography>
        </Box>
      </Box>
      {children}
    </div>
  );
}

export default layout;
