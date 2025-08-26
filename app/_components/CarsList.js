"use client";
import { useState, useEffect, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import Filter from "./Filter";
import CarData from "./CarData";

export default function CarsList() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("cars") ?? "پرطرفدار";

  const [cars, setCars] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchCars = async () => {
      startTransition(async () => {
        const response = await fetch(`/api/cars?filter=${filter}`);
        const data = await response.json();
        setCars(data);
      });
    };
    fetchCars();
  }, [filter]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        marginY: "6rem",
      }}
    >
      <Typography variant="subtitle1" color="#727272">
        مشاهده موجودی خودروها
      </Typography>

      <Typography variant="h4">
        رزرو خودرو در <span style={{ color: "#D79C10" }}>اُتـــورِنت</span>
      </Typography>

      {/* Filter Component (updates the URL) */}
      <Filter />

      {isPending ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <CircularProgress />
        </Box>
      ) : cars.length ? (
        <Container
          sx={{
            padding: "20px",
            display: "grid",
            columnGap: 3,
            rowGap: 4,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {cars.map((car) => (
            <CarData key={car.id} car={car} />
          ))}
        </Container>
      ) : (
        <Typography>هیچ خودرویی یافت نشد.</Typography>
      )}
    </Box>
  );
}
