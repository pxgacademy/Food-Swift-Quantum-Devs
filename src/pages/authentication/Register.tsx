import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PageContainer from "../../components/containers/PageContainer";
import SectionContainer from "../../components/containers/SectionContainer";
import { Eye, EyeOff } from "lucide-react";
import bannerImage from "../../assets/images/3896377.jpg";
import { useAuthStore } from "../../stores/useAuthStore";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().regex(passwordRegex, {
      message:
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character and be at least 8 characters long",
    }),
    confirmPassword: z.string(),
    isHuman: z.literal(true, {
      errorMap: () => ({ message: "Please confirm you are not a robot" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof schema>;

interface SignupResponse {
  isSuccess: boolean;
  message: string;
};



const Register: FC = () => {
  const {signup} = useAuthStore()
  
  const [isEye, setIsEye] = useState({
    pass: false,
    confirmPass: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // const {isSuccess, message}: SignupResponse = await signup(data)
    // console.log(isSuccess, message);
    console.log(data);
  };

  return (
    <PageContainer>
      <SectionContainer margin="" className="flex gap-14">
        <div className="lg:flex-1 w-full max-w-xl  flex items-center justify-center">
          <div className="w-full max-w-lg mx-auto lg:mx-0 p-10 sm:p-20 border-[2px] rounded-4xl sm:rounded-full">
            <h2 className="text-xl text-center mb-3">Registration Form</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-3"
            >
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  {...register("firstName")}
                  className="input w-full"
                />
                {errors.firstName && (
                  <span className="text-error text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  {...register("lastName")}
                  className="input w-full"
                />
                {errors.lastName && (
                  <span className="text-error text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="johndoe@mail.com"
                  {...register("email")}
                  className="input w-full"
                />
                {errors.email && (
                  <span className="text-error text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label>Password</label>
                <div className="flex items-center relative">
                  <input
                    type={isEye.pass ? "text" : "password"}
                    placeholder="********"
                    {...register("password")}
                    className="input w-full"
                  />
                  <button
                    onClick={() =>
                      setIsEye((prv) => ({ ...prv, pass: !prv.pass }))
                    }
                    type="button"
                    className="absolute right-2 cursor-pointer z-10"
                  >
                    {isEye.pass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-error text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div>
                <label>Confirm Password</label>
                <div className="flex items-center right-2">
                  <input
                    type={isEye.confirmPass ? "text" : "password"}
                    placeholder="********"
                    {...register("confirmPassword")}
                    className="input w-full"
                  />
                  <button
                    onClick={() =>
                      setIsEye((prv) => ({
                        ...prv,
                        confirmPass: !prv.confirmPass,
                      }))
                    }
                    type="button"
                    className="absolute right-2 cursor-pointer z-10"
                  >
                    {isEye.confirmPass ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-error text-sm">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center">
                  <input
                    id="human_checkbox"
                    type="checkbox"
                    {...register("isHuman")}
                    className="mr-2 checkbox"
                  />
                  <label htmlFor="human_checkbox" className="cursor-pointer">
                    I am not a robot
                  </label>
                </div>
                {errors.isHuman && (
                  <span className="text-error text-sm">
                    {errors.isHuman.message}
                  </span>
                )}
              </div>

              <div className="absolute right-0 bg-base-100 border-[2px] p-2 rounded-full">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-base-300 rounded-full p-2 cursor-pointer transition-all duration-150"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden lg:block lg:flex-1 py-16 px-10 bg-primary/5">
          <img src={bannerImage} alt="Banner Image" className="rounded-xl" />
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Register;
