"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // 1. Register
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      // 2. Automatic login
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      // 3. Navigate to main page
      router.push("/");
    } catch (error) {
      alert("Error during registration or login: " + error.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleRegister}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        ثبت نام
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: "20px" }}>
        قبلا ثبت‌ نام کرده ‌اید؟{" "}
        <Link href="/login" underline="none">
          وارد شوید
        </Link>
      </Typography>
      <TextField
        placeholder="ایمیل"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />
      <TextField
        placeholder="شماره تلفن"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        fullWidth
      />
      <TextField
        placeholder="گذرواژه"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />
      <Button
        type="submit"
        sx={{ backgroundColor: "#194BF0", color: "white" }}
        fullWidth
      >
        ثبت‌نام
      </Button>
    </Box>
  );
}
