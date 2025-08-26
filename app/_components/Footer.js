import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const contactItems = [
  {
    icon: <LocalPhoneOutlinedIcon />,
    title: "ارتباط با ما",
    detail: "0912-21326545",
  },
  {
    icon: <MailOutlinedIcon />,
    title: "ایمیل",
    detail: "autorent@info.com",
  },
  {
    icon: <MapOutlinedIcon />,
    title: "آدرس",
    detail: "تهران - خ شادمان",
  },
];
function Footer() {
  return (
    <Container
      sx={{
        backgroundColor: "#212121",
        borderRadius: "8px",
        color: "#FFF",
        padding: "30px 10px",
        marginBlock: "3rem",
      }}
    >
      <Grid
        container
        sx={{ border: "1px solid #868686", borderRadius: 2, p: "15px 30px" }}
      >
        {contactItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", gap: 3 }}>
              <Box
                sx={{
                  border: "1px solid white",
                  borderRadius: 2,
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="subtitle2"
                textAlign="center"
                lineHeight="25px"
              >
                {item.title}
                <br />
                {item.detail}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        sx={{ borderBottom: "1px solid #868686" }}
        columnSpacing={8}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Image
            src="/assets/images/footer-logo.png"
            alt="autorent logo"
            quality={100}
            width={80}
            height={40}
          />
          <Typography variant="body2">
            اتورنت با رویکرد اعتماد به مشتری، با در اختیار داشتن بزرگترین ناوگان
            خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در
            سراسر کشور ایران آماده خدمت‌رسانی به مشتریان است.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <List>
            <List>
              {["دسترسی آسان", "سوالات متداول", "تماس با ما", "درباره ما"].map(
                (text, index) => (
                  <ListItem key={index}>{text}</ListItem>
                )
              )}
            </List>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} marginTop={6}>
          <Typography paddingBottom={2}>خبر نامه</Typography>
          <form>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #C2C2C2",
              }}
            >
              <TextField
                placeholder="ایمیل خود را وارد کنید"
                type="email"
                required
                fullWidth
                sx={{
                  border: "none",
                  "& input": {
                    padding: "10px",
                    color: "#FFF",
                    "&:focus": {
                      outline: "none",
                    },
                  },

                  "& fieldset": {
                    border: "none",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "4px",
                  margin: "3px",
                  padding: "3px",
                  backgroundColor: "#FDB713",
                }}
                type="submit"
              >
                ارسال
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>

      <Typography color="#868686" textAlign="center" paddingTop={2}>
        &copy; تمامی حقوق این وبسایت متعلق به اتورنت می‌باشد
      </Typography>
    </Container>
  );
}

const ContactItem = ({ icon, title, detail }) => (
  <Box sx={{ display: "flex", gap: 3 }}>
    <Box
      sx={{
        border: "1px solid white",
        borderRadius: 2,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </Box>
    <Typography variant="subtitle2" textAlign="center" lineHeight="25px">
      {title}
      <br />
      {detail}
    </Typography>
  </Box>
);

export default Footer;
