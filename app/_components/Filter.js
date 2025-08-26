"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Container, Box, Typography, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParams.get("cars") ?? "پرطرفدار";

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("cars", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", paddingX: "1px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "center" },
          marginRight: { sm: "6rem", xs: "0" },
          flex: 2,
          gap: { xs: 1, sm: 2 },
        }}
      >
        {["پرطرفدار", "لوکس", "اقتصادی"].map((item) => (
          <FilterBtn
            key={item}
            filter={item}
            handleFilter={handleFilter}
            activeFilter={activeFilter}
          >
            {item}
          </FilterBtn>
        ))}
      </Box>
      <Box display="flex">
        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: "#194BF0",
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          مشاهده همه
          <ChevronLeftIcon />
        </Typography>
      </Box>
    </Container>
  );
}

function FilterBtn({ filter, handleFilter, activeFilter, children }) {
  return (
    <Button
      variant={filter === activeFilter ? "contained" : "outlined"}
      sx={{
        padding: { xs: "5px 16px", sm: "8px 28px" },
        backgroundColor: filter === activeFilter ? "#194BF0" : "",
        color: filter === activeFilter ? "#FFF" : "#194BF0",
      }}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </Button>
  );
}
