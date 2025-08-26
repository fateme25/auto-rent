"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { IndeterminateCheckBoxOutlined as MinusIcon } from "@mui/icons-material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

export default function FAQSection() {
  const faqs = [
    {
      question: "در صورت بروز نقص فنی برای خودرو چه اتفاقی می افتد؟",
      answer:
        "در صورت بروز نقص فنی برای خودرو، مالک خودرو باید فوراً اقدام به تعمیر یا جایگزینی قطعات کند تا از خسارت مالی و خطر برای راننده و سرنشینان جلوگیری شود",
    },
    {
      question: "هزینه بنزین و کارواش در خودروهای اجاره ای به عهده کیست؟",
      answer:
        "در زمان اجاره خودرو بدون راننده خودروها کارواش شده و با باک بنزین پر تحویل مشتریان عزیز می گردد. در زمان استرداد خودرو در صورتی که خودرو به کارواش نیاز داشته و یا خودرو دارای کسر سوخت باشد هزینه آن بر عهده مشتری می باشد.",
    },
    {
      question: "آیا بیمه در اجاره خودرو لحاظ شده است؟",
      answer:
        "بیمه در اجاره خودرو لحاظ شده است تا مالک خودرو و راننده و سرنشینان در امنیت باشند. ما بیمه پایه را برای خودروهای اجاره‌ای خود در نظر گرفته‌ایم و همچنین پوشش اضافی را برای پوشش کامل خسارات وارده به خودرو و اشخاص ثالث ارائه می‌دهیم.",
    },
    {
      question: "آیا ماشین های اتورنت دارای بیمه هستند؟",
      answer:
        " ما بیمه پایه را برای ماشین‌های اتورنت خود در نظر گرفته‌ایم و همچنین پوشش اضافی را برای پوشش کامل خسارات وارده به ماشین و اشخاص ثالث ارائه می‌دهیم.",
    },
    {
      question: "محدودیت کیلومتر در اجاره خودرو چقدر می باشد؟",
      answer:
        "محدودیت کیلومتر در اجاره خودرو بستگی به نوع خودرو و مدت زمان اجاره دارد. ما محدودیت کیلومتری را برای اجاره خودروهای خود در نظر گرفته‌ایم تا از خسارت وارده به خودرو جلوگیری شود.",
    },
  ];

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event , isExpanded) => {
    console.log(panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", paddingY: "2rem" }}>
        <Typography variant="h6" fontWeight={200} color="#5E5E5E" gutterBottom>
          پر تکرارترین سؤالاتی که پرسیدید
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          سؤالات <span style={{ color: "#D79C10" }}>متداول</span>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* FAQ Section */}
        <Grid size={{ xs: 12, md: 8 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded == `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              sx={{
                padding: "8px",
                marginBottom: "20px",
                borderRadius: "8px",
                outline: "none",
                border: "1px solid #D7D7D7",
                boxShadow: "none",
                "&::before": {
                  content: '""',
                  backgroundColor: "transparent", // Ensure no line appears before the accordion
                },
              }}
            >
              <AccordionSummary
                sx={{
                  display: "flex",
                  justifyContent: "space-between", // This moves the icon to the right
                }}
                expandIcon={
                  expanded === `panel${index + 1}` ? (
                    <MinusIcon sx={{ fontSize: "1.25rem", color: "#194BF0" }} />
                  ) : (
                    <AddBoxOutlinedIcon
                      sx={{ fontSize: "1.25rem", color: "#194BF0" }}
                    />
                  )
                }
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
              >
                <Typography variant="body1" fontWeight={600}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="#727272">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {/* Image Section */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: "relative", height: "400px" }}>
            <Image
              src="/assets/images/man.svg"
              alt="FAQ Image"
              layout="fill"
              objectFit="cover"
              quality={100}
              style={{
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
