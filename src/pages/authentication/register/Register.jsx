import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageContainer from "../../../components/containers/PageContainer";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  return (
    <PageContainer padding="p-5 md:p-8 lg:p-16">
      <div
        className={`w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-purple-300`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
          Food Delivery App
        </h2>
        <p className="text-center mb-4">Register to Continue</p>

        <input
          type="text"
          placeholder="Enter your name"
          className={`w-full p-2 mb-4 border border-gray-300 rounded bg-transparent  focus:outline-none focus:ring-2 focus:ring-purple-300`}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className={`w-full p-2 mb-4 border border-gray-300 rounded bg-transparent  focus:outline-none focus:ring-2 focus:ring-purple-300`}
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className={`w-full p-2 border border-gray-300 rounded bg-transparent  focus:outline-none focus:ring-2 focus:ring-purple-300`}
          />
          <button
            onClick={togglePasswordVisibility}
            className={`absolute top-1/2 right-3 transform -translate-y-1/2  hover:text-white`}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="relative mb-4 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between py-1 px-2">
          <input
            type="file"
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            accept="image/*"
            onChange={handleFileChange}
          />
          <span className="py-1 px-2 rounded-lg w-fit bg-base-300">Choose File</span>
          <span className="text-sm">{fileName || "No file chosen"}</span>
        </div>

        <button className="w-full py-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white rounded font-medium hover:opacity-90 cursor-pointer ">
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
    </PageContainer>
  );
};

export default Register;
