import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { EFFECTS_CATALOG } from "@/lib/data";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const effectId = url.searchParams.get("id");

  if (!effectId) {
    return new NextResponse("Missing effect ID", { status: 400 });
  }

  // Verify the effect is actually marked as free in our catalog
  const effect = EFFECTS_CATALOG.find(e => e.id === effectId);
  if (!effect || !effect.isFree) {
    return new NextResponse("Unauthorized or not a free component", { status: 403 });
  }

  // Map the ID to the zip file
  const map: Record<string, string> = {
    "magic": "MagicButton.zip"
  };
  
  const fileName = map[effectId];
  if (!fileName) {
    return new NextResponse("Asset mapping not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "src", "assets", fileName);
  
  if (!fs.existsSync(filePath)) {
    return new NextResponse("Asset not found on server", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
