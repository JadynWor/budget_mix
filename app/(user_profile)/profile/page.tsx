import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Avatar, Link } from "@mui/material";
import { PrismaClient } from "@prisma/client";
import React from "react";
import DeleteAccountButton from "@/app/api/user/deleteUser/deleteAccountButton";

// Instantiate the Prisma Client
const prisma = new PrismaClient();

const ProfilePage = async () => {
  // Fetch the session data
  const session = await getServerSession(authOptions);

  // If no session, redirect to the sign-in page
  if (!session) {
    redirect("/sign-in");
  }

  // Fetch user data from the database
  const user = await prisma.user.findUnique({
    where: { email: session.user.email || undefined },
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>User not found. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8 text-white">
      <div className="bg-white p-8 shadow-xl rounded-lg w-full max-w-lg flex flex-col items-center text-gray-800">
        <Avatar
          sx={{ width: 100, height: 100, mb: 4 }}
          alt={user?.username || "User"}
        >
          {user?.username?.charAt(0).toUpperCase() || "U"}
        </Avatar>
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {user?.username || user?.name || "User"}!
        </h1>
        <div className="w-full text-left mt-6">
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-700 mb-1">Username</p>
            <p className="text-gray-800 border rounded-lg p-3 bg-gray-100">{user?.username || "N/A"}</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-700 mb-1">Full Name</p>
            <p className="text-gray-800 border rounded-lg p-3 bg-gray-100">{user?.name || "N/A"}</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-700 mb-1">Email</p>
            <p className="text-gray-800 border rounded-lg p-3 bg-gray-100">{user?.email || "N/A"}</p>
          </div>
        </div>       
        <DeleteAccountButton username={user?.username || ""} /> {/* Pass the username to DeleteAccountButton */}
        <Link
          href="/changePassword"
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-800"
        >
          Change Password
        </Link> 
      </div>
    </div>
  );
};

export default ProfilePage;
