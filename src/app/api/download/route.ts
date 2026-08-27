import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_local_dev";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return new NextResponse("Missing download token", { status: 401 });
  }

  try {
    // Verify the JWT signature and expiration
    const decoded = jwt.verify(token, JWT_SECRET) as { productId: string };
    
    // Valid token. Fetch the asset from the secure folder.
    // We are serving the file securely via stream rather than a public URL.
    const filePath = path.join(process.cwd(), "src", "assets", "vol_01_source.zip");
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Asset not found on server", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="EXP_MOTION_${decoded.productId}_assets.zip"`,
      },
    });

  } catch (error) {
    console.error("JWT Verification failed:", error);
    return new NextResponse("Invalid or expired download link", { status: 403 });
  }
}
