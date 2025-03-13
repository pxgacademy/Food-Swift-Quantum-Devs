
import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-purple-600 to-pink-500"
      }`}
    >
      {/* Header Section */}
      <div
        className={`w-full max-w-6xl px-4 py-4 flex flex-wrap justify-between items-center ${
          darkMode ? "" : "bg-transparent"
        }`}
      >
        <h1 className="text-lg sm:text-2xl font-bold text-center sm:text-left w-full sm:w-auto mb-4 sm:mb-0">
          FOOD DELIVERY APP
        </h1>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-white text-sm sm:text-base">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
          >
            Register for Free
          </Link>
        </div>
      </div>
      <hr className="w-full border-t border-gray-300 my-4" />
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-5 right-5 px-3 py-1 sm:px-4 sm:py-2 ${
          darkMode ? "bg-gray-700" : "bg-gray-800"
        } text-white rounded-md hover:bg-gray-600 transition`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div
        className={`w-full max-w-md p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-purple-300 ${
          darkMode
            ? "bg-gray-800"
            : "bg-gradient-to-r from-purple-500 to-pink-500"
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
          Food Delivery App
        </h2>
        <p className="text-center mb-4">Register to Continue</p>

        <input
          type="text"
          placeholder="Enter your name"
          className={`w-full p-2 mb-4 border border-gray-300 rounded bg-transparent ${
            darkMode
              ? "text-white placeholder-gray-300"
              : "text-black placeholder-gray-800"
          } focus:outline-none focus:ring-2 focus:ring-purple-300`}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className={`w-full p-2 mb-4 border border-gray-300 rounded bg-transparent ${
            darkMode
              ? "text-white placeholder-gray-300"
              : "text-black placeholder-gray-800"
          } focus:outline-none focus:ring-2 focus:ring-purple-300`}
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className={`w-full p-2 border border-gray-300 rounded bg-transparent ${
              darkMode
                ? "text-white placeholder-gray-300"
                : "text-black placeholder-gray-800"
            } focus:outline-none focus:ring-2 focus:ring-purple-300`}
          />
          <button
            onClick={togglePasswordVisibility}
            className={`absolute top-1/2 right-3 transform -translate-y-1/2 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            } hover:text-white`}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* <div className="relative mb-4 border border-gray-300 rounded-lg p-2 cursor-pointer flex items-center justify-between">
          <input
            type="file"
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            onChange={handleFileChange}
          />
          <span className="text-gray-700 w-fit bg-white">Choose File</span>
          <span className="text-gray-500 text-sm">{fileName}</span>
          <label>
            <input
              type="file"
              className="cursor"
              hidden
              accept="image/*"
              id="image"
            />
            
          </label>
        </div> */}
        <div className="relative mb-4 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between">
          <input
            type="file"
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            accept="image/*"
            onChange={handleFileChange}
          />
          <span className="text-black p-2 rounded-lg w-fit bg-white">Choose File</span>
          <span className="text-black text-sm">
            {fileName || "No file chosen"}
          </span>
        </div>

        <button className="w-full py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded font-medium hover:opacity-90">
          Register
        </button>

        <p className="text-center my-4">Or continue with</p>

        <button className="w-full flex items-center justify-center py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
          <FaGoogle className="mr-2 text-xl" />
          <span className="font-semibold">Sign up with Google</span>
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-300 font-medium hover:underline"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
