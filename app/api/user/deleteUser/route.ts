import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export async function DELETE(req: Request) {
  try {
    // Parse the request body to get the username and password
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: "Username and password are required" }, { status: 400 });
    }

    // Find the user by username
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || !user.password) {
      return NextResponse.json({ message: "User not found or password missing" }, { status: 404 });
    }

    // Verify the password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    }

    // Delete the user
    await prisma.user.delete({
      where: { username },
    });

    return NextResponse.json({ message: "User account deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting user account:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
