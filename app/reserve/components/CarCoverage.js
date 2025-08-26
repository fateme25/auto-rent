import ToggleButton from "@/app/_components/ToggleButton";
import {
  Typography,
  Divider,
  Box,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

function CarCoverage() {
  const data = [
    { title: "قیمت", value: ["0", "۳۲,۰۴۵,۲۷۵"] },
    { title: "ودیعه", value: ["۲۵۰,۰۰۰,۰۰۰", "۲۵۰,۰۰۰,۰۰۰"] },
    { title: "حداکثر تعهد خسارت جزئی", value: ["۲۵,۰۰۰,۰۰۰", "۵۰,۰۰۰,۰۰۰"] },
    { title: "حداکثر تعهد خسارت کلی", value: ["۱,۵۰۰,۰۰۰,۰۰۰", "۵۰,۰۰۰,۰۰۰"] },
    {
      title: "اخذ افت خودرو در زمان تصادف",
      value: ["بطور کامل", "اخذ نميگردد"],
    },
    {
      title: "خواب خودرو",
      value: [
        "تمام روزهای خواب به قیمت اجاره",
        "نصف قیمت اجاره حداکثر بمدت 30 روز",
      ],
    },
  ];
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
      <Typography variant="subtitle1" fontWeight={700}>
        پوشش ها
      </Typography>
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
      <Box marginLeft="2rem">
        <ToggleButton gap={{ xs: "1rem", sm: "10rem" }} />
      </Box>
      <TableContainer component={Paper}>
        <Table dir="rtl">
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    textAlign: "right",
                    fontWeight: "700",
                    minWidth: { xs: "130px" },
                  }}
                >
                  {row.title}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    paddingLeft: { xs: "1rem", sm: "8rem" },
                    width: { xs: "100px", sm: "250px" },
                    minWidth: { xs: "150px" },
                  }}
                >
                  {row.value[0]}
                </TableCell>
                <TableCell
                  sx={{
                    width: { xs: "100px", sm: "150px" },
                    minWidth: { xs: "150px" },
                  }}
                >
                  {row.value[1]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CarCoverage;
