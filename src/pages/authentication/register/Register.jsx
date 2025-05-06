import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../../../components/containers/PageContainer";
import usePublicLink from "../../../hooks/usePublicLink";
import useContextValue from "../../../hooks/useContextValue";
import Swal from "sweetalert2";
import SocialLogin from "../social-login/SocialLogin";
import { useForm } from "react-hook-form";
import Input from "../../../components/inputs/Input.jsx";

const IMG_API_LINK = import.meta.env.VITE_IMG_API;

const Register = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  const { createUser, updateUser, setUser } = useContextValue();
  const publicAPI = usePublicLink();
  const navigate = useNavigate();

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const togglePasswordVisibility = (field) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit = async (data) => {
    let image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await publicAPI.post(IMG_API_LINK, formData);
      if (!res?.data?.data?.display_url) {
        return Swal.fire({
          title: "Error",
          text: "Failed to upload image",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }

      data.image = res?.data?.data?.display_url;

      const { user } = await createUser(data?.email, data?.password);
      setUser(user);
      await updateUser({ displayName: data?.name, photoURL: data?.image });

      const { data } = await publicAPI.post("/users", {
        name: data?.name,
        email: data?.email,
        image: data?.image,
        isRobot: !data?.robot,
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
        reset();
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
      <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border border-purple-300">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Food Delivery App
        </h2>
        <p className="text-center mb-4">Register to Continue</p>

        <SocialLogin>Register with Google</SocialLogin>
        <p className="text-center my-4">Or continue with</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            placeholder="Enter your name"
            validation={{
              ...register("name", {
                required: "Name is required",
              }),
            }}
            errorText={errors?.name?.message}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            validation={{
              ...register("email", {
                required: "Email is required",
              }),
            }}
            errorText={errors?.email?.message}
          />

          <div className="relative">
            <Input
              type={showPassword.password ? "text" : "password"}
              placeholder="Enter your password"
              validation={{
                ...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]).{8,}$/,
                    message:
                      "Password must be 8 characters long with at least 1 uppercase, 1 number, and 1 special character",
                  },
                }),
              }}
              errorText={errors?.password?.message}
            />
            <button
              onClick={togglePasswordVisibility("password")}
              className="absolute top-3 right-3"
            >
              {showPassword.password ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative">
            <Input
              type={showPassword.confirm ? "text" : "password"}
              placeholder="Confirm password"
              validation={{
                ...register("confirm_password", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Password do not match",
                }),
              }}
              errorText={errors?.confirm_password?.message}
            />
            <button
              onClick={togglePasswordVisibility("confirm")}
              className="absolute top-3 right-3"
            >
              {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div>
            <Input
              type="file"
              inputType="file-input"
              accept="image/*"
              validation={{
                ...register("image", { required: "Image is required" }),
              }}
              errorText={errors?.image?.message}
            />
          </div>

          <div>
            <div className="flex items-center gap-x-3 bg-gray-200 dark:bg-white text-gray-800 max-w-60 min-h-16 p-2">
              <Input
                id="regCheck"
                type="checkbox"
                inputType="checkbox"
                width=""
                clearStyles={true}
                className="border-gray-500 text-gray-700 before:text-gray-700 rounded"
                validation={{
                  ...register("robot", { required: "Agree with this" }),
                }}
              />
              <label htmlFor="regCheck">I am not robot</label>
            </div>
            {errors?.robot && (
              <span className="inline-block text-base text-error mt-1">
                {errors?.robot?.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-primaryColor to-secondaryColor text-white rounded font-medium hover:opacity-90"
          >
            Register
          </button>
        </form>

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
