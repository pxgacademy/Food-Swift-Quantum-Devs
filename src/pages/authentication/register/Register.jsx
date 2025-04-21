import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../../../components/containers/PageContainer";
import usePublicLink from "../../../hooks/usePublicLink";
import useContextValue from "../../../hooks/useContextValue";
import Swal from "sweetalert2";
import SocialLogin from "../social-login/SocialLogin";

const IMG_API_LINK = import.meta.env.VITE_IMG_API;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const { createUser, updateUser, setUser } = useContextValue();
  const publicAPI = usePublicLink();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState({
    isErr: false,
    passErr: null,
    confirmPass: null,
  });

  // const passRegex = /^(?=.[A-Z])(?=.)̣(?=.*[@#%^&+=!]).{8,}$/;
  const passRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  const passTester = (value) => {
    if (errMsg.isErr) {
      const isValidPass = passRegex.test(value);
      console.log(isValidPass);
      if (isValidPass) {
        setErrMsg({...errMsg, passErr: false});
      }
    }
  };

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowPassword(!showPassword);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    let image = form.image.files[0];

    const isValidPass = passRegex.test(password);
    if (!isValidPass) {
      return setErrMsg({
        ...errMsg,
        passErr:
          "Password must be 8 characters long with at least 1 uppercase, 1 number, and 1 special character",
      });
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await publicAPI.post(IMG_API_LINK, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      image = res?.data?.data?.display_url;

      if (!image)
        return Swal.fire({
          title: "Error",
          text: "Failed to upload image",
          icon: "error",
          confirmButtonText: "Okay",
        });

      const { user } = await createUser(email, password);
      await updateUser({ displayName: name, photoURL: image });
      setUser(user);

      const { data } = await publicAPI.post("/users", {
        name,
        email,
        image,
        isBlock: false,
      });

      if (data?.insertedId) {
        Swal.fire({
          title: "Success",
          text: "User registered successfully!",
          icon: "success",
          showConfirmButton: false,
          position: "center",
          timer: 2000,
        });
        event.target.reset();
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay",
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
        <p className="text-center mb-4">Register to Continue</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className={`w-full p-2 mb-4 border border-gray-300 rounded bg-transparent  focus:outline-none focus:ring-2 focus:ring-purple-300`}
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className={`w-full p-2 mb-4 border border-gray-300 rounded bg-transparent  focus:outline-none focus:ring-2 focus:ring-purple-300`}
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              required
              onChange={(e) => passTester(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded bg-transparent  focus:outline-none focus:ring-2 focus:ring-purple-300`}
            />
            <button
              onClick={(event) => togglePasswordVisibility(event)}
              className={`absolute top-1/2 right-3 transform -translate-y-1/2  hover:text-white`}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errMsg.passErr && (
            <span className="text-error text-sm mb-2 inline-block">
              {errMsg.passErr}
            </span>
          )}

          <div className="relative mb-4 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between py-1 px-2">
            <input
              type="file"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              name="image"
              required
              accept="image/*"
              onChange={handleFileChange}
            />
            <span className="py-1 px-2 rounded-lg w-fit bg-base-300">
              Choose File
            </span>
            <span className="text-sm">{fileName || "No file chosen"}</span>
          </div>

          <button className="w-full py-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white rounded font-medium hover:opacity-90 cursor-pointer ">
            Register
          </button>
        </form>

        <p className="text-center my-4">Or continue with</p>

        <SocialLogin>Register with Google</SocialLogin>

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
