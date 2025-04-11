import React from "react";
import PageContainer from "../../../components/containers/PageContainer";
import SectionContainer from "../../../components/containers/SectionContainer";
import Input from "../../../components/inputs/Input";
import Select from "../../../components/inputs/Select";
import { food_categories } from "../../../utilities/arrays-and-objects/ArraysAndObjects";
import SectionTitle from "../../../components/containers/SectionTitle";
import Swal from "sweetalert2";
import usePublicLink from "../../../hooks/usePublicLink";
import usePrivateLink from "../../../hooks/usePrivateLink";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useContextValue from "../../../hooks/useContextValue";
import Loading from "../../../components/loading/Loading";
import Textarea from "../../../components/inputs/Textarea";

const IMG_API_LINK = import.meta.env.VITE_IMG_API;

const Food_form = () => {
  const publicAPI = usePublicLink();
  const privateAPI = usePrivateLink();
  const navigate = useNavigate();
  const { user } = useContextValue();

  const { data: restaurant_ids, isLoading } = useQuery({
    queryKey: ["restaurant_ids", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await privateAPI.get(`/restaurant-ids/${user?.email}`);
      return data;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    let logo = form.logo.files[0];
    let banner = form.banner.files[0];

    if (!logo || !banner) return;

    const logoData = new FormData();
    const bannerData = new FormData();
    logoData.append("image", logo);
    bannerData.append("image", banner);

    try {
      const logoResponse = await publicAPI.post(IMG_API_LINK, logoData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const bannerResponse = await publicAPI.post(IMG_API_LINK, bannerData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (logoResponse?.data?.data?.url && bannerResponse?.data?.data?.url) {
        logo = logoResponse?.data?.data?.url;
        banner = bannerResponse?.data?.data?.url;
      } else
        return Swal.fire({
          title: "Error",
          text: "Failed to upload images",
          icon: "error",
          confirmButtonText: "Okay!",
        });

      const name = form.name.value;
      const phone = form.phone.value;
      const email = form.email.value;
      const city = form.city.value;
      const state = form.state.value;
      const address = form.address.value;
      const zip_code = form.zip_code.value;
      const country = form.country.value;
      const opening_time = form.opening_time.value;
      const closing_time = form.closing_time.value;

      const value = {
        name,
        logo,
        banner,
        phone,
        email,
        city,
        state,
        address,
        zip_code,
        country,
        opening_time,
        closing_time,
      };

      const { data } = await privateAPI.post("/restaurants", value);
      if (data?.insertedId) {
        Swal.fire({
          title: "Successfully Added",
          icon: "success",
          confirmButtonText: "Okay!",
        });
        form.reset();
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

  if (isLoading || !user?.email) return <Loading />;

  return (
    <PageContainer>
      <SectionContainer className="mt-10">
        <SectionTitle>Foods Form</SectionTitle>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5"
        >
          <Select
            label="Restaurant Name"
            name="restaurant_id"
            option={restaurant_ids?.map((id, i) => (
              <option key={i} value={id?._id}>
                {id?.name}
              </option>
            ))}
          />
          <Input placeholder="Food Name" name="name" label="Food Name" />
          <Select
            label="Food Category"
            name="category"
            option={food_categories?.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          />
          <Input
            name="image"
            label="Select an Image"
            type="file"
            className="file-input w-full outline-none focus:outline-none"
          />
          <Input
            placeholder="Price"
            name="price"
            label="Price (Tk)"
            type="number"
          />
          <Textarea
            label="Description"
            placeholder="Description"
            divStyles="md:col-span-2 lg:col-span-3"
          />

          <label className="md:col-span-2 lg:col-span-3 flex items-center justify-center">
            <button
              role="button"
              className="btn btn-wide bg-primaryColor/90 hover:bg-primaryColor"
            >
              Submit
            </button>
          </label>
        </form>
      </SectionContainer>
    </PageContainer>
  );
};

export default Food_form;
