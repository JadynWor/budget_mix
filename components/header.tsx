// components/header.tsx
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import UserAccountnav from "./UserAccountnav";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white text-black p-4 flex justify-between items-center">
      <div>
      <h1 className="text-4xl font-bold">
        <Link href="/">BugetMix</Link>
      </h1>        
      <p className="text-lg" >Your Personal Finance Tracker</p>
      </div>
      <div className="flex space-x-4">
        {!session?.user ? (
          <>
            <Link className={buttonVariants()} href="/sign-in">
              Sign In
            </Link>
            <Link className={buttonVariants()} href="/sign-up">
              Sign Up
            </Link>
            <Link className={buttonVariants()} href="/about">
              About Us
            </Link>
          </>
        ) : (
          <>
            <UserAccountnav />

            <Link className={buttonVariants()} href="/about">
                About Us
              </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
