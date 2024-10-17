import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

// Dashboard with user info
const Page = async () => {
  // Fetch the session using getServerSession
  const session = await getServerSession(authOptions);

  // Check if session exists and user is logged in
  if (session?.user) {
    return (
      <div>
        <h1 className="text-2xl font-bold">
          Admin page - Welcome back, {session.user.username || session.user.name}
        </h1>
      </div>
    );
  }

  // When there's no session (user not logged in)
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Please login to see this page.
      </h2>
    </div>
  );
};

export default Page;
