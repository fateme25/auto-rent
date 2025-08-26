import { Box, Typography, Divider, Stack } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Rating from "@mui/material/Rating";

function CarTitle({ car }) {
  const features = [
    "حداقل سن راننده: ۲۵ سال",
    "تعداد سرنشین: ۴ نفر",
    "چمدان: ۲ چمدان بزرگ",
  ];
  return (
    <Stack borderRadius="8px" backgroundColor="white" padding="1rem">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography paddingTop="0.5rem" variant="subtitle1" fontWeight={700}>
          {car.name.replace("اجاره", "")}
        </Typography>
        <Rating name="half-rating" value={4} readOnly />
      </Box>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </Box>
    </Stack>
  );
}

const FeatureItem = ({ text }) => (
  <Typography
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap="5px"
    padding="10px"
    variant="caption"
    sx={{
      flexDirection: { xs: "column", sm: "row" },
      textAlign: { xs: "center", sm: "left" },
    }}
  >
    <CheckCircleOutlinedIcon
      sx={{ color: "#494949", fontSize: { xs: "0.5rem", sm: "1rem" } }}
    />
    {text}
  </Typography>
);

export default CarTitle;
