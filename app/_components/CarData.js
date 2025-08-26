import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
  Badge,
} from "@mui/material";

import Link from "next/link";

function CarData({ car }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        padding: "0",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2" }}>
        {car.discount && (
          <Badge
            badgeContent={
              <Typography variant="body2" sx={{ color: "#fff" }}>
                %{car.discount}
              </Typography>
            }
            color="secondary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              "& .MuiBadge-badge": {
                top: "2rem",
                left: "2rem",
                backgroundColor: "#08237D",
                padding: "15px 4px",
                borderRadius: "8px",
              },
            }}
          ></Badge>
        )}
        <CardMedia
          component="img"
          image={car.image}
          alt={car.name}
          width="200px"
          height="220px"
          sx={{ objectFit: "cover", padding: "8px 10px" }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="subtitle2" fontWeight={900}>
          {car.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          مدل : {car.model}
        </Typography>
        {["روزانه", "ماهانه"].map((type) => (
          <Box
            key={type}
            display="flex"
            justifyContent="space-between"
            borderRadius="4px"
            sx={{
              backgroundColor: "#F3F3F3",
              padding: "20px 8px",
              marginY: 2,
            }}
          >
            <Typography>
              از 1 تا 30 روز :
              <span style={{ color: "#194BF0" }}>8,500,000</span>
            </Typography>
            <Typography>{type}</Typography>
          </Box>
        ))}

        <Divider />

        <Box display="flex" justifyContent="space-between" paddingTop={2}>
          <Typography>مبلغ ضمانت :</Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {car.guaranteeAmount} میلیون
          </Typography>
        </Box>

        <Box>
          <Link href={`/reserve/${encodeURIComponent(car.name)}`}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#194BF0",
                paddingY: "12px",
                borderRadius: "8px",
                marginTop:"10px"
              }}
            >
              درخواست رزرو
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CarData;
