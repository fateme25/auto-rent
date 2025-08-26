import { getCars } from "@/app/_lib/data"; // Adjust the import path

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("filter") ?? "پرطرفدار";

  try {
    const cars = await getCars(filter);
    return Response.json(cars);
  } catch (error) {
    return Response.json({ error: "Failed to fetch cars" }, { status: 500 });
  }
}
