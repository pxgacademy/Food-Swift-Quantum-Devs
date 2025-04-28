import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../../../components/containers/PageContainer";
import useContextValue from "../../../hooks/useContextValue";
import Swal from "sweetalert2";
import SocialLogin from "../social-login/SocialLogin";
import usePublicLink from "../../../hooks/usePublicLink";
import { TbFlowerFilled } from "react-icons/tb";

const Login = () => {
  const publicAPI = usePublicLink();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, setUser } = useContextValue();
  const [isLoading, setIsLoading] = useState(false);
  const [loginTimes, setLoginTimes] = useState(1);
  const [isBlock, setIsBlock] = useState(false);
  const [isError, setIsError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsError(false);

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      if (loginTimes > 3) {
        await publicAPI.patch(`/users/block-req-one/${email}`, {});
        setIsBlock(true);
        return;
      }
      const { user } = await signInUser(email, password);
      setUser(user);
      Swal.fire({
        title: "Logged In Successfully!",
        icon: "success",
        position: "center",
        showConfirmButton: false,
        timer: 1500,
      });
      event.target.reset();
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      const message = "Firebase: Error (auth/invalid-credential).";

      if (errorMessage === message) setIsError(true);
    }

    setLoginTimes(loginTimes + 1);
  };

  const checkIsBlock = async (email) => {
    if (email === "" || !email.includes("@")) return;
    setIsLoading(true);
    setIsBlock(false);
    try {
      const { data } = await publicAPI.get(`/users/isBlocked/${email}`);
      setIsBlock(data?.isBlock);
    } finally {
      setIsLoading(false);
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
            onBlur={(e) => checkIsBlock(e.target.value)}
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className={`w-full input focus:outline-none`}
          />

          <div className="relative my-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              required
              className={`w-full input focus:outline-none`}
            />
            <button
              onClick={togglePasswordVisibility}
              className={`absolute top-1/2 right-3 transform -translate-y-1/2`}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {isError && (
            <p className="text-error mb-2">Invalid email or password</p>
          )}

          {isBlock && (
            <p className="text-error mb-2">
              This email has been temporarily blocked
            </p>
          )}

          <button
            disabled={isBlock || isLoading}
            className="w-full min-h-10 flex items-center justify-center py-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white rounded font-medium hover:opacity-90 cursor-pointer text-center disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span
                style={{ animationDuration: "2.5s" }}
                className="animate-spin text-2xl"
              >
                <TbFlowerFilled />
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center my-4">Or continue with</p>

        <SocialLogin>Login with Google</SocialLogin>

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
