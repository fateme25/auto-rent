"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#f0f0f0",
});

const StyledForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  width: "100%",
  maxWidth: 400,
  mx: "auto",
  mt: 8,
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});

const StyledInput = styled(TextField)({
  marginBottom: "20px",
  width: "100%",
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("مشکلی در ورود پیش آمد");
    } else {
      router.push("/");
    }
  };

  return (
    <StyledBox>
      <StyledForm component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          ورود
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          حساب کاربری ندارید؟{" "}
          <Link href="/register" underline="none">
            ثبت نام کنید
          </Link>
        </Typography>

        {error && (
          <Typography color="error" sx={{ marginBottom: "10px" }}>
            {error}
          </Typography>
        )}

        <StyledInput
          placeholder="ایمیل"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <StyledInput
          placeholder="گذرواژه"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Button
          type="submit"
          sx={{ backgroundColor: "#194BF0", color: "white" }}
          fullWidth
        >
          ورود
        </Button>
      </StyledForm>
    </StyledBox>
  );
};

export default LoginForm;
