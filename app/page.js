import { Box } from "@mui/material";
import Hero from "./_components/Hero";
import Reservation from "./_components/Reservation";
import Branding from "./_components/Branding";
import About from "./_components/About";
import CarsList from "./_components/CarsList";
import FAQ from "./_components/FQA";
import BookingGuid from "./_components/BookingGuid";
import Testimonial from "./_components/Testimonial";
import Blog from "./_components/Blog";
import Header from "./_components/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Box
        position="sticky"
        zIndex={2}
        maxWidth="85%"
        margin="auto"
        sx={{
          background: " white",
          marginTop: "-4rem",
          borderRadius: "8px",
          padding: "10px 20px",
          border: "1px solid #D7D7D7",
        }}
      >
        <Reservation />
      </Box>

      <Box marginY="4rem">
        <Branding />
      </Box>

      <About />

      <CarsList />

      <BookingGuid />
      <FAQ />

      <Testimonial />

      <Blog />
    </>
  );
}
