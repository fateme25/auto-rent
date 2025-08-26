import { getServerSession } from "next-auth";
import { authConfig } from "../_lib/auth";
import Navigation from "./Navigation";

export default async function Header() {
  const session = await getServerSession(authConfig);

  return <Navigation email={session?.user?.email} />;
}
