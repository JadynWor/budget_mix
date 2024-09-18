// pages/signup.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  /**
    const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error("Signup failed!");
        }
  
        // Redirect to login page upon successful signup
        router.push("/login");
      } catch (err) {
        setError(err.message);
      }
    };
  */

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form /**
        onSubmit={handleSignup}
      */ className="flex flex-col w-full max-w-sm">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-full px-4 py-2 shadow-md transition duration-300 hover:bg-gray-800"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <a href="/login" className="text-blue-500">Log in</a>
      </p>
    </div>
  );
}
