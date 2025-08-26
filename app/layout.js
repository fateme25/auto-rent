import "./_style/globals.css";
import Footer from "./_components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata = {
  title: "اجاره خودرو",
  description: "وب سایت و سیستم اجاره روزانه و ماهانه خودرو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider options={{ key: "mui" }}>
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
