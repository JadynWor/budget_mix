import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";



// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Added image tag */}
      <img 
        src="BudgetMix Logo.PNG"  // Replace with the correct image path
        alt="Logo"
        className="h-20 w-20 mb-4" // Adjust the size as needed
      />
      
      <h1 className="text-2xl font-bold">Welcome to BugetMix!</h1>
      <h3>Finance tracking</h3>
      <p className="mt-4">Your Personal Finance Tracker.</p>

      <Link className={buttonVariants()} href="/admin">
        Open Admin Dashboard
      </Link>
    </div>
  );
}