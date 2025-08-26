"use client";

import { useState, useMemo } from "react";
import RentalTypeSelector from "@/app/_components/RentalTypeSelector";
import {
  Container,
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import LocationPicker from "@/app/_components/LocationPicker";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TimeSelector from "@/app/_components/TimeSelector";
import DateSelector from "@/app/_components/DateSelector";
import ToggleButton from "@/app/_components/ToggleButton";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

import { createReservation } from "@/app/_lib/action";

const priceStyle = {
  color: "#194BF0",
  fontWeight: 700,
};
function SubmitReservation({ user, car }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");

  const options = [{ label: "بیمه پایه" }, { label: "بیمه کامل" }];
  const [insuranceType, setInsuranceType] = useState(options[0].label);

  const DateDifference = useMemo(() => {
    const delivery = new DateObject({
      date: pickupDate,
      calendar: persian,
      locale: persian_fa,
    });
    const returnDateObj = new DateObject({
      date: returnDate,
      calendar: persian,
      locale: persian_fa,
    });

    const diff = returnDateObj.toDays() - delivery.toDays();

    return diff >= 0 ? diff : "";
  }, [pickupDate, returnDate]);

  const price = [{ value: 2500 }, { value: 12500 }];

  const formatPrice = (value) => {
    const fullPrice = (value * 1000).toLocaleString();
    return fullPrice;
  };

  // insert data for booking
  async function handleSubmit() {
    if (!user) return;

    setLoading(true);
    try {
      const response = await createReservation({
        user_id: user?.email,
        car_id: car.id,
        pickup_location: pickupLocation,
        return_location: returnLocation,

        pickup_date: pickupDate.toISOString(),
        return_date: returnDate.toISOString(),

        pickup_time: pickupTime.toISOString(),
        return_time: returnTime.toISOString(),
        insurance_type: insuranceType,
      });
      setLoading(false);
      setResult(response);
    } catch (error) {
      alert("خطا در ثبت نام");
    }
  }
  return (
    <Container
      disableGutters
      sx={{
        margin: "2rem auto",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <Box
        display="flex"
        gap={2}
        sx={{
          "& > *": {
            backgroundColor: "#F3F3F3",
            padding: "8px",
            borderRadius: "4px",
            display: "flex",
          },
        }}
      >
        <Box>
          <Typography variant="button">
            از ۱ تا30روز:{" "}
            <span style={priceStyle}>{formatPrice(price[0].value)}</span>
          </Typography>
          <Typography variant="caption" marginRight={2}>
            روزانه
          </Typography>
        </Box>
        <Box>
          <Typography variant="button">
            از ۱ تا30روز:{" "}
            <span style={priceStyle}>{formatPrice(price[1].value)}</span>
          </Typography>
          <Typography variant="caption" marginRight={2}>
            ماهانه
          </Typography>
        </Box>
      </Box>

      <RentalTypeSelector
        buttonStyle={{
          fontSize: { xs: "0.70rem" },
          marginInline: "4px",
          marginTop: "1.5rem",
        }}
      />

      <LocationPicker
        location="محل تحویل خودرو"
        value={pickupLocation}
        onChange={setPickupLocation}
        style={{
          ".MuiSelect-select": {
            color: "#9A9A9A",
            paddingBlock: "11px",
          },
        }}
        icon={<FmdGoodOutlinedIcon sx={{ marginRight: "-1rem" }} />}
      />
      <LocationPicker
        location="محل بازگشت خودرو"
        value={returnLocation}
        onChange={setReturnLocation}
        style={{
          ".MuiSelect-select": {
            color: "#9A9A9A",
            paddingBlock: "11px",
          },
        }}
        icon={<FmdGoodOutlinedIcon sx={{ marginRight: "-1rem" }} />}
      />
      <DateSelector
        variant="textField"
        label="تاریخ تحویل"
        value={pickupDate}
        onChange={setPickupDate}
      />
      <TimeSelector
        variant="textField"
        label="ساعت تحویل"
        value={pickupTime}
        onChange={setPickupTime}
      />
      <DateSelector
        variant="textField"
        label="تاریخ برگشت"
        value={returnDate}
        onChange={setReturnDate}
      />

      <TimeSelector
        variant="textField"
        label="ساعت برگشت"
        value={returnTime}
        onChange={setReturnTime}
      />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
      >
        <Typography variant="subtitle2" color="#353535">
          نوع بیمه :
        </Typography>
        <ToggleButton
          value={insuranceType}
          changeOption={setInsuranceType}
          options={options}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#F3F3F3",
          padding: "6px",
        }}
      >
        <Typography variant="body2">
          {DateDifference} روز:{" "}
          <span
            style={{
              color: "#194BF0",
              fontWeight: 700,
            }}
          >
            {typeof DateDifference === "number" &&
              formatPrice(DateDifference * price[0].value)}
          </span>
        </Typography>
      </Box>

      <Button
        variant="contained"
        fullWidth
        disabled={!user || result}
        sx={{
          backgroundColor: "#194BF0",
          mt: 2,
          py: 1,
          "&:hover": {
            backgroundColor: "#163FCC",
          },
        }}
        onClick={() => handleSubmit()}
      >
        {loading ? (
          <CircularProgress size="30px" color="white" />
        ) : user ? (
          "ثبت درخواست"
        ) : (
          "ابتدا ثبت نام کنید"
        )}
      </Button>

      {loading ? (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          رزرو با موفقیت انجام شد
        </Alert>
      ) : (
        ""
      )}
    </Container>
  );
}
export default SubmitReservation;
