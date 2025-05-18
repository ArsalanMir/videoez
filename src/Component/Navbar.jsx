import { Link } from "react-router-dom";
import Videoze from "../assets/Videoze.png";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-center text-sm py-2 px-4">
        <p className="font-medium">
          LAST CHANCE! New Launch Sale this week!{" "}
          <Link to="/signup" className="underline font-semibold">
            Click here to Sign-up and save 25%
          </Link>
        </p>
      </div>

      {/* Main Nav */}
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Videoze} alt="Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <Link to="/features">Features</Link>
            <Link to="/use-cases">Use Cases</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/affiliates">Affiliates</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="border border-indigo-400 text-indigo-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-50 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
