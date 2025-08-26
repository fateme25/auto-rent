import { Box } from "@mui/material";
import CarImageSlider from "./CarImageSlider";
import carFolderMap from "@/app/_lib/carFolderMap";
import { getCarImages } from "@/app/_lib/data";
import { Typography } from "@mui/material";

async function CarImages({ carName }) {
  const folderName = carFolderMap[carName.replace("اجاره", "").trim()];
  const images = await getCarImages(folderName);

  if (!folderName) return <Typography variant="h6">عکسی یافت نشد</Typography>;

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
      <CarImageSlider images={images} />
    </Box>
  );
}

export default CarImages;
