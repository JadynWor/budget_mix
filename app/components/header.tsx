// components/header.tsx
export default function Header() {
    return (
      <header className="bg-white text-black p-4 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">BugetMx</h1>
          <p className="text-lg">Your Personal Finance Tracker</p>
        </div>
        <div className="flex space-x-4"> 
          <a
            href="/loginForm"
            className="bg-black text-white rounded-full px-4 py-2 shadow-md transition duration-300 hover:bg-gray-800"
          >
            Login
          </a>
          <a
            href="/signUpForm"
            className="bg-black text-white rounded-full px-4 py-2 shadow-md transition duration-300 hover:bg-gray-800"
          >
            Sign Up
          </a>
          <a
            href="/about" 
            className="bg-black text-white rounded-full px-4 py-2 shadow-md transition duration-300 hover:bg-gray-800"
          >
            About Us
          </a>
        </div>
      </header>
    );
  }
  