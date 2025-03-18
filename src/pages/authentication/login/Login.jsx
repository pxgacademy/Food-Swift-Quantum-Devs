import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageContainer from "../../../components/containers/PageContainer";
import useContextValue from "../../../hooks/useContextValue";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useContextValue();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await signInUser(email, password);
      Swal.fire({
        title: "Logged In Successfully!",
        icon: "success",
        position: 'center',
        showConfirmButton: false,
        timer: 1500,
      });
      event.target.reset()
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };

  return (
    <PageContainer padding="p-5 md:p-8 lg:p-16">
      <div
        className={`w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-purple-300`}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
          Food Delivery App
        </h2>
        <p className="text-center mb-4">Login to Continue</p>
        <hr className="w-full border-t border-gray-300 my-4" />
        <button className="w-full py-2 bg-gray-300 text-gray-800 rounded mb-4 font-medium cursor-pointer ">
          Default Credentials
        </button>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className={`w-full p-2 mb-4 border border-gray-300 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-300`}
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              className={`w-full p-2 border border-gray-300 rounded bg-transparent  focus:outline-none focus:ring-2 focus:ring-purple-300`}
            />
            <button
              onClick={togglePasswordVisibility}
              className={`absolute top-1/2 right-3 transform -translate-y-1/2`}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="w-full py-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white rounded font-medium hover:opacity-90 cursor-pointer">
            Login
          </button>
        </form>

        <p className="text-center my-4">Or continue with</p>

        <button className="w-full flex items-center justify-center py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
          <FaGoogle className="mr-2 text-xl" />
          <span className="font-semibold">Sign in with Google</span>
        </button>

        <p className="text-center mt-4">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-300 font-medium hover:underline"
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </PageContainer>
  );
};

export default Login;
