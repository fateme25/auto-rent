// app/api/register/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/app/_lib/supabase";

export async function POST(req) {
  try {
    const { email, phone, password } = await req.json();

    if (!email || !phone || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { phone } },
    });

    if (error)
      return NextResponse.json({ message: error.message }, { status: 400 });

    return NextResponse.json({ message: "ثبت‌نام انجام شد." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "مشکلی پیش آمد!" }, { status: 500 });
  }
}
