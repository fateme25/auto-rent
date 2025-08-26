import { Box, Typography, Divider, Paper } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

function CarFeedback() {
  const styles = {
    flexCenter: {
      display: "flex",
      alignItems: "center",
    },
    gap1: {
      gap: 1,
    },
    gap05: {
      gap: 0.5,
    },
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        m: "2rem auto",
        p: 2,
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <Typography variant="subtitle1" fontWeight={700}>
        نظرات
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

      <Paper
        variant="outlined"
        sx={{
          padding: "10px",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box sx={{...styles.flexCenter , ...styles.gap1}}>
            <img src="/assets/images/woman2.svg" />
            <Typography variant="caption" color="#9C9C9C">
              تاریخ:1402/03/12
            </Typography>
          </Box>
          <Box sx={{...styles.flexCenter , ...styles.gap05}}>
            <Typography>4/2</Typography>
            <StarRateIcon
              sx={{
                fontSize: "20px",
                color: "#EDB628",
              }}
            />
          </Box>
        </Box>
        <Typography variant="body2" color="#757575" marginBlock={2}>
          خیلی عالی بود پیشنهاد می‌کنم یکبارم شده از اتورنت ماشین اجاره کنید.
        </Typography>
      </Paper>
    </Box>
  );
}

export default CarFeedback;
