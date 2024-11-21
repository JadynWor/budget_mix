/* eslint-disable @next/next/no-img-element */
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { FaUserCheck, FaChartLine, FaMobileAlt } from "react-icons/fa";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundColor: "#000000",
        fontFamily: "Poppins, sans-serif",
        color: "#ffffff",
      }}
    >
      {/* Header Section */}
      <img
        src="BudgetMixLogo.PNG" // Replace with the correct image path
        alt="Logo"
        className="mb-6"
        style={{
          width: "300px", // Adjust the size to make it bigger
          height: "auto",
          marginBottom: "24px",
          filter: "invert(1)", // This filter will make the black logo white
        }}
      />

      <h1 className="text-4xl font-bold mb-2" style={{ fontWeight: "bold" }}>
        Welcome to BudgetMix!
      </h1>
      <h3 className="text-xl mb-4" style={{ opacity: 0.8 }}>
        The Future of Finance Tracking
      </h3>
      <p className="text-lg mb-6" style={{ textAlign: "center", maxWidth: "600px" }}>
        Your personal finance tracker that helps you take control of your finances,
        manage your budget, and plan for the future.
      </p>

      {/* CTA Button */}
      <Link href="/admin">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700"
          style={{ marginBottom: "32px", fontWeight: "bold" }}
        >
          Open Admin Dashboard
        </button>
      </Link>

      {/* Features Section in Boxes */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mb-12 items-center justify-center">
        <div
          className="flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg"
          style={{
            backgroundColor: "#1c1c1c",
            color: "#ffffff",
            width: "250px",
            minHeight: "300px",
          }}
        >
          <FaUserCheck size={60} color="#007bff" />
          <h4 className="text-lg font-bold mt-4">User-Friendly</h4>
          <p className="text-md mt-2">
            Simple and intuitive interface to make finance management easy for everyone.
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg"
          style={{
            backgroundColor: "#1c1c1c",
            color: "#ffffff",
            width: "250px",
            minHeight: "300px",
          }}
        >
          <FaChartLine size={60} color="#007bff" />
          <h4 className="text-lg font-bold mt-4">Advanced Analytics</h4>
          <p className="text-md mt-2">
            Gain deep insights into your spending with detailed analytics and reports.
          </p>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg"
          style={{
            backgroundColor: "#1c1c1c",
            color: "#ffffff",
            width: "250px",
            minHeight: "300px",
          }}
        >
          <FaMobileAlt size={60} color="#007bff" />
          <h4 className="text-lg font-bold mt-4">Mobile Optimized</h4>
          <p className="text-md mt-2">
            Manage your finances on-the-go with mobile-friendly features.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div
        className="max-w-3xl text-center p-8 rounded-lg shadow-lg mb-12"
        style={{
          backgroundColor: "#1c1c1c",
          color: "#ffffff",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-md mb-4">
          BudgetMix is your comprehensive solution for finance management, helping you track expenses,
          plan budgets, and reach your financial goals with ease. Our mission is to empower you with the
          best financial tools so that you can take control of your financial future.
        </p>
      </div>

      {/* Horizontal Accordion for Packages */}
      <div
        className="w-full max-w-3xl p-4 rounded-lg shadow-lg mb-8"
        style={{
          color: "#ffffff",
          backgroundColor: "#1c1c1c",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Our Packages</h2>
        <div className="flex space-x-4 justify-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="bronze-package">
              <AccordionTrigger className="text-lg font-bold">
                Bronze Package
              </AccordionTrigger>
              <AccordionContent className="text-md">
                The beginner package for getting started with finance tracking.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="silver-package">
              <AccordionTrigger className="text-lg font-bold">
                Silver Package
              </AccordionTrigger>
              <AccordionContent className="text-md">
                The middle package for more advanced finance management.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="gold-package">
              <AccordionTrigger className="text-lg font-bold">
                Gold Package
              </AccordionTrigger>
              <AccordionContent className="text-md">
                The best package we have, ideal for full-featured finance tracking.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
