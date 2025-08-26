import { getCar } from "@/app/_lib/data";
import Grid from "@mui/material/Grid2";
import CarTitle from "../components/CarTitle";
import CarImages from "../components/CarImages";
import CarCoverage from "../components/CarCoverage";
import CarInfo from "../components/CarInfo";
import CarFacility from "../components/CarFacility";
import CarDescription from "../components/CarDescription";
import CarFeedback from "../components/CarFeedback";
import SubmitReservation from "../components/SubmitReservation";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/app/_lib/auth";
import {Typography} from "@mui/material";

async function page({ params }) {
  const { name } = await params;
  const session = await getServerSession(authConfig);

  const decodedName = decodeURIComponent(name);
  const car = await getCar(decodedName);
  if (!car) {
    return (
      <div sx={{ p: 2 }}>
        <Typography variant="h4" align="center">
          خودرویی یافت نشد
        </Typography>
      </div>
    );
  }

  return (
    <Grid container spacing={2} margin={{ xs: 4, sm: 8 }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <CarTitle car={car} />
        <CarImages carName={car.name} />
        <CarCoverage />
        <CarInfo />
        <CarFacility />
        <CarDescription carName={car.name} />
        <CarFeedback />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <SubmitReservation user={session?.user} car={car} />
      </Grid>
    </Grid>
  );
}

export default page;
