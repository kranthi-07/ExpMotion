import { NextResponse } from "next/server";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_local_dev";
const RAZORPAY_SECRET = process.env.RAZORPAY_KEY_SECRET || "mock_secret";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, isMock, productId } = await req.json();

    let isValid = false;

    if (isMock) {
      // For mock orders without API keys, we just trust it for development testing
      isValid = true;
    } else {
      // Actual Razorpay cryptographic verification
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");
      
      isValid = expectedSignature === razorpay_signature;
    }

    if (isValid) {
      // Payment verified! Generate a secure JWT token for downloading
      const token = jwt.sign(
        { productId, orderId: razorpay_order_id, timestamp: Date.now() },
        JWT_SECRET,
        { expiresIn: "24h" } // Link expires in 24 hours
      );

      return NextResponse.json({ success: true, token });
    } else {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
