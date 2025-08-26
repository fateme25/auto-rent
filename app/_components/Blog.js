import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Grid from "@mui/material/Grid2";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const blogPosts = ["car1", "car2", "car3"];
function Blog() {
  return (
    <Container sx={{ marginTop: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          alignItems: "center",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h6" color="#5E5E5E">
            مقالات ما
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            مجله{" "}
            <span
              style={{
                color: "#D79C10",
              }}
            >
              خودرو
            </span>
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 0,
          }}
        >
          <Link href="/blog" passHref legacyBehavior>
            <Typography
              variant="subtitle2"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: "#194BF0",
                fontSize: { xs: "0.875rem", sm: "1rem" },
                ml: "auto",
              }}
            >
              مشاهده همه
              <ChevronLeftIcon />
            </Typography>
          </Link>
        </Box>
      </Box>

      <Grid container spacing={3} marginTop={3}>
        {blogPosts.map((imageName, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <BlogCard imageName={imageName} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function BlogCard({ imageName }) {
  return (
    <Card sx={{ borderRadius: "10px", border: "1px solid #D7D7D7" }}>
      <CardMedia sx={{ height: 200, position: "relative" }}>
        <Image
          src={`/assets/images/${imageName}.svg`}
          alt="blog image"
          fill
          objectFit="cover"
          quality={100}
          style={{ padding: "12px", borderRadius: "8px" }}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="subtile2" fontWeight={700}>
          روش های مختلف برای اجاره خودرو
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", paddingTop: "15px" }}
        >
           امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به وجود
          آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی شده
          است...
        </Typography>

        <Box sx={{ display: "flex", gap: 2, color: "#757575", pt: 2 }}>
          {[
            { icon: <AccessTimeIcon fontSize="small" />, text: "3 دقیقه" },
            {
              icon: <RemoveRedEyeOutlinedIcon fontSize="small" />,
              text: "1,213",
            },
          ].map((item, index) => (
            <Typography
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              {item.icon}
              {item.text}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Blog;
