import { Box, Typography, Divider } from "@mui/material";

function CarDescription({ carName }) {
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
        درباره خودرو{carName}
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

      <Typography variant="subtitle2" fontWeight={700}>
        اجاره خودرو بنز S500
      </Typography>

      <Typography variant="body2" lineHeight={2} color="#212121">
        اجاره خودرو {carName} ،  یک خودرو لوکس فول سایز و پرچم‌دار خودروهای
        سواری مرسدس بنز است. نسل اول S کلاس در سال 1972 معرفی شد. هر چند در سال
        های پیش از آن هم، کمپانی آلمانی مرسدس بنز، خودرو لوکس دیگری را در سبد
        محصولات خود با نام دیگری داشت. این نسل از S کلاس در نمایشگاه خودرو
        دیترویت 2006 به معرض دید عموم درآمد  در حال حاضر نیز مدل های از این
        خودرو در پارکینگ اجاره خودرو اتوزرین موجود است. سیستم تعلیق خیلی مدرن
        ایرماتیک که در پی آن ناهمواری های جاده به فراموشی سپرده می شود. به همین
        دلیل یک خودروی بسیار مناسب برای مسافرت های خارج از شهر می باشد و به دلیل
        زیبایی این خودرو جز خودروهای تشریفاتی نیز به حساب می آید.
      </Typography>
    </Box>
  );
}

export default CarDescription;
