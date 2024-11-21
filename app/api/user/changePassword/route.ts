import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { hash, compare } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { userId, currentPassword, newPassword } = await req.json();

    if (!userId || !currentPassword || !newPassword) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Fetch the user from the database
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || !user.password) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Verify the current password
    const isPasswordValid = await compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Incorrect current password" }, { status: 401 });
    }

    // Hash the new password and update it in the database
    const hashedNewPassword = await hash(newPassword, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedNewPassword },
    });

    return NextResponse.json({ message: "Password changed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error changing user password:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
