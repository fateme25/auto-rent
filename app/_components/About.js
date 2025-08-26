import { Paper, Box, Typography, Container } from "@mui/material";
import Image from "next/image";

function About() {
  return (
    <Paper
      sx={{
        backgroundImage: "url('/assets/images/image52.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        maxWidth: "90%",
        margin: "auto",
        borderRadius: "10px",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "70%",
            margin: "auto",
          }}
        >
          <Typography
            variant="h4"
            color="#FDB713"
            sx={{
              // paddingTop: "5px",
              paddingBottom: "20px",
            }}
          >
            چــــــرا اُتو رِنت؟
          </Typography>

          <Typography
            variant="body2"
            color="#FFF"
            fontWeight="normal"
            lineHeight={2}
          >
            اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در
            مسافرت ها، قرار ملاقات‌ های مهم، مجالس و مراسم‌های خانوادگی ماشین
            مناسب خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار
            ندارید یا خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی مناسب
            خود را کرایه کرده و با آسودگی به سفر بروید.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {[
            {
              icon: "/assets/images/delivery-icon.svg",
              title: "تحویل در محل",
              description:
                "تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود.",
            },
            {
              icon: "/assets/images/24icon.svg",
              title: "پشتیبانی 24 ساعته",
              description:
                "کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات شما خواهند بود.",
            },
            {
              icon: "/assets/images/cash-icon.svg",
              title: "قیمت مناسب",
              description:
                "هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت ممکن است.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #D7D7D7",
                borderRadius: "20px",
                padding: "20px",
                marginTop: "2.5rem",
              }}
            >
              <Image
                src={item.icon}
                alt="icon"
                quality={100}
                width={60}
                height={60}
              />
              <Typography variant="h5" fontWeight={700}>
                {item.title}
              </Typography>
              <Typography variant="subtitle2" color="#757575">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Paper>
  );
}

export default About;
