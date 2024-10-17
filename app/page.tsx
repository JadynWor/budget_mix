import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"




// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Added image tag */}
      <img 
        src="BudgetMixLogo.PNG"  // Replace with the correct image path
        alt="Logo"
        className="h-40 w-40 mb-4" // Adjust the size as needed
        style={{ width: '250px', height: '200px', marginBottom: '16px' }}
      />
      

      <h1 className="text-2xl font-bold">Welcome to BugetMix!</h1>
      <h3>Finance tracking</h3>
      <p className="mt-4">Your Personal Finance Tracker.</p>

      <Link className={buttonVariants()} href="/admin">
        Open Admin Dashboard
      </Link>

      <Accordion type="single" collapsible  style={{ width: '250px', height: '200px', marginTop: '50px' }}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Bronze Package</AccordionTrigger>
    <AccordionContent>
      The beginner package
    </AccordionContent>
    <AccordionTrigger>Silver package?</AccordionTrigger>
    <AccordionContent>
      The middle package we have
    </AccordionContent>
    <AccordionTrigger>Gold Package?</AccordionTrigger>
    <AccordionContent>
      The best package we have
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
  );
}