import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, website, instructions, selectedPlan } = req.body;

  if (!name || !email || !website || !selectedPlan) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // You can store this in DB or email it using Resend/Nodemailer
  console.log("📥 New lead received:", { name, email, website, instructions, selectedPlan });

  return res.status(200).json({ message: "Form submitted successfully!" });
}
