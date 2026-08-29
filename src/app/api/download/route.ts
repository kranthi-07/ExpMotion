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
    const decoded = jwt.verify(token, JWT_SECRET) as { productId: string, effectId?: string };
    
    // Determine which file to serve based on the purchase
    let fileName = "vol_01_source.zip"; // Default for bundle/pro
    
    if (decoded.productId === "single" && decoded.effectId) {
      const map: Record<string, string> = {
        "cursor": "CursorSpotlight.zip",
        "glass": "LiquidGlass.zip",
        "magnetic": "MagneticButton.zip",
        "neon": "NeonBorder.zip",
        "layers": "ParallaxLayers.zip"
      };
      
      if (map[decoded.effectId]) {
        fileName = map[decoded.effectId];
      }
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

  } catch (error) {
    console.error("JWT Verification failed:", error);
    return new NextResponse("Invalid or expired download link", { status: 403 });
  }
}
