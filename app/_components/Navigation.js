"use client";
import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Link from "next/link";

const headerURL = [
  { id: 1, title: "رزرو خودرو" },
  { id: 2, title: "خدمات ما" },
  { id: 3, title: "بلاگ" },
  { id: 4, title: "درباره ما" },
  { id: 5, title: "تماس با ما" },
];

function Navigation({ email }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        left: 0,
        backgroundColor: "#fff",
        zIndex: 10,
        maxWidth: "85%",
        margin: "auto",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
    >
      <Container sx={{ maxWidth: "98%", margin: "auto" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Hamburger Menu - Left */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ color: "#353535", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo - Always on Right */}
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Logo />
          </Box>

          {/* Navigation Links - Hidden on Mobile */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {headerURL.map((page) => (
              <Button
                key={page.id}
                sx={{
                  color: "#353535",
                  fontWeight: 500,
                  padding: "12px",
                }}
              >
                {page.title}
              </Button>
            ))}
            <IconButton
              size="large"
              aria-label="search"
              sx={{ color: "#353535" }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Login Button - Hidden on Mobile */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              href="/login"
              style={{
                backgroundColor: "#194BF0",
                fontSize: "12px",
                borderRadius: "4px",
                textDecoration: "none",
                padding: "12px 30px",
                color: "white",
                "&:hover": { backgroundColor: "#3F69F3" },
              }}
            >
              {email ? email.slice(0, 6) : "ورود / ثبت نام"}
              {/* ورود / ثبت نام */}
            </Link>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "&.MuiDrawer-paper": {
            width: "75%",
            backgroundColor: "#fff",
            color: "#333",
            padding: "15px 20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "right",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignSelf="end">
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {headerURL.map((page) => (
            <ListItem
              button
              key={page.id}
              onClick={handleDrawerToggle}
              sx={{
                padding: "12px 10px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <ListItemText primary={page.title} sx={{ textAlign: "right" }} />
            </ListItem>
          ))}
          <ListItem button onClick={handleDrawerToggle}>
            <SearchBar />
          </ListItem>
          <ListItem button>
            <Link
              href="/login"
              style={{
                backgroundColor: "#194BF0",
                fontSize: "12px",
                borderRadius: "4px",
                padding: "12px 30px",
                textDecoration: "none",
                color: "white",
                "&:hover": { backgroundColor: "#3F69F3" },
              }}
            >
              {email ? email.slice(0, 6) : "ورود / ثبت نام"}
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navigation;
