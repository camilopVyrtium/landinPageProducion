import { headers } from "next/headers";
import { isDesktop } from "./detect-device";

export async function shouldShowSpline(): Promise<boolean> {
  const headersList = await headers();
  const ua = headersList.get("user-agent") || "";
  return isDesktop(ua);
}