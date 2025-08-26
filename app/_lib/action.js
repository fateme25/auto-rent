"use server";

import { supabase } from "@/app/_lib/supabase";

export async function verifyUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "ایمیل یا رمز عبور اشتباه است" };
  }

  return { user: data.user };
}

// make car booking
export async function createReservation(data) {
  const { data: insertData, error } = await supabase
    .from("car-booking")
    .insert([data])
    .select();

  if (error) {
    console.error("Reservation error:", error.message);
    throw new Error(error.message);
  }

  return insertData;
}
