export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 p-6 border-t border-gray-300">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-center">&copy; {new Date().getFullYear()} Budget Mix Corporation. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-gray-600 hover:text-gray-900 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
