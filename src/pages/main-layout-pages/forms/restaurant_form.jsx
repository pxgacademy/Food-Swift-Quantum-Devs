import React from "react";
import PageContainer from "../../../components/containers/PageContainer";
import SectionContainer from "../../../components/containers/SectionContainer";
import Input from "../../../components/inputs/Input";
import Select from "../../../components/inputs/Select";
import SectionTitle from "../../../components/containers/SectionTitle";
import Swal from "sweetalert2";
import usePublicLink from "../../../hooks/usePublicLink";
import usePrivateLink from "../../../hooks/usePrivateLink";
import { useNavigate } from "react-router-dom";
import useContextValue from "../../../hooks/useContextValue";
import { useForm } from "react-hook-form";
import AddressInputs from "./address-inputs/AddressInputs";
import { restaurantImportanceInfo } from "./importance_info/RestaurantImportanceInfo";

const IMG_API_LINK = import.meta.env.VITE_IMG_API;

const Restaurant_form = () => {
  const publicAPI = usePublicLink();
  const privateAPI = usePrivateLink();
  const navigate = useNavigate();
  const { user } = useContextValue();

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data) return;

    try {
      const { data } = await privateAPI.post("/restaurants", data);
      if (data?.insertedId) {
        Swal.fire({
          title: "Successfully Added",
          icon: "success",
          confirmButtonText: "Okay!",
        });
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
    <PageContainer>
      <SectionContainer className="mt-10">
        <SectionTitle>Restaurant Form</SectionTitle>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-300 dark:border-gray-600 p-5 md:p-8 rounded-2xl"
        >
          {/* Restaurant Details */}
          <h4 className="text-xl font-semibold mb-3">Restaurant Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            <Input
              placeholder="Restaurant Name"
              label="Restaurant Name"
              validation={{
                ...register("name", {
                  required: "Restaurant name is required",
                }),
              }}
              errorText={errors?.name?.message}
            />
            <Input
              placeholder="Username"
              label="Username"
              validation={{
                ...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[a-z0-9_]+$/,
                    message:
                      "only lowercase letters, numbers, and underscores allowed",
                  },
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters",
                  },
                }),
              }}
              errorText={errors?.username?.message}
            />
            <Input
              label="Select a Logo"
              type="file"
              inputType="file-input"
              accept="image/*"
              validation={{
                ...register("logo", {
                  required: "Logo is required",
                  validate: {
                    lessThan1MB: (files) =>
                      files[0]?.size < 1048576 ||
                      "File size must be less than 1MB",
                  },
                }),
              }}
              errorText={errors?.logo?.message}
            />
            <Input
              label="Select a Banner"
              type="file"
              inputType="file-input"
              accept="image/*"
              validation={{
                ...register("banner", {
                  required: "Banner is required",
                }),
              }}
              errorText={errors?.banner?.message}
            />
            <Input
              placeholder="e.g., 01XXXXXXXXX"
              label="Phone Number"
              type="tel"
              validation={{
                ...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^01\d{9}$/,
                    message: "Phone number must be 11 digits and start with 01",
                  },
                  onChange: (e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 11);
                    setValue("phone", value);
                  },
                }),
              }}
              errorText={errors?.phone?.message}
            />
            <Input
              label="Email Address"
              placeholder="Email Address"
              type="email"
              readOnly
              validation={{
                ...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                }),
              }}
              errorText={errors?.email?.message}
            />
            <Input
              label="Opening Time"
              type="time"
              validation={{
                ...register("opening_time", {
                  required: "Opening time is required",
                }),
              }}
              errorText={errors?.opening_time?.message}
            />
            <Input
              label="Closing Time"
              type="time"
              validation={{
                ...register("closing_time", {
                  required: "Closing time is required",
                }),
              }}
              errorText={errors?.closing_time?.message}
            />
          </div>

          {/* Restaurant Address */}
          <h4 className="text-xl font-semibold mt-5 mb-3">
            Restaurant Address
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
            <AddressInputs register={register} errors={errors} watch={watch} />
          </div>

          <div className="flex items-center justify-center mt-8">
            <button
              role="button"
              className="btn btn-wide bg-primaryColor/90 hover:bg-primaryColor"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-8 border border-gray-300 dark:border-gray-600 p-5 md:p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            📝 Why We Ask These Inputs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {restaurantImportanceInfo?.map((input, index) => (
              <div
                key={index}
                className=" bg-gray-100 dark:bg-base-200 border border-gray-300 dark:border-gray-700 p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold">{input.label}</h3>
                <p className="text-sm mt-1">
                  <strong>Importance:</strong> {input.importance}
                </p>
                <p className="text-sm">
                  <strong>Why it matters:</strong> {input.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Restaurant_form;
