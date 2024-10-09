import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

export default async function handler(req, res) {
  try {
    await NextAuth(req, res, authOptions);
  } catch (error) {
    console.error("NextAuth error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}

export { handler as GET, handler as POST };
