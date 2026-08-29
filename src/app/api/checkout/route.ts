import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize Razorpay conditionally (if no keys, we will return a mock)
const razorpay = process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET 
  ? new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })
  : null;

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();

    // Map productId to pricing logic
    let amount = 0;
    if (productId === "single") amount = 99 * 100; // Razorpay expects paise (INR)
    else if (productId === "bundle") amount = 399 * 100;
    else if (productId === "pro") amount = 999 * 100;
    else return NextResponse.json({ error: "Invalid product" }, { status: 400 });

    // If we have real keys, generate a real Razorpay order
    if (razorpay) {
      const order = await razorpay.orders.create({
        amount,
        currency: "INR",
        receipt: `rcpt_${Date.now()}`,
      });
      return NextResponse.json({ 
        id: order.id, 
        amount, 
        currency: order.currency, 
        keyId: process.env.RAZORPAY_KEY_ID,
        isMock: false 
      });
    } 
    
    // Fallback mock order if no keys present
    return NextResponse.json({
      id: `mock_order_${Date.now()}`,
      amount,
      currency: "INR",
      isMock: true
    });
    
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
