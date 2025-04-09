import React from "react";
import PageContainer from "../../../components/containers/PageContainer";
import SectionContainer from "../../../components/containers/SectionContainer";
import Input from "../../../components/inputs/Input";
import Select from "../../../components/inputs/Select";
import { cities } from "../../../components/citiesAndStates/CitiesAndStates";
import SectionTitle from "../../../components/containers/SectionTitle";
import Swal from "sweetalert2";
import usePublicLink from "../../../hooks/usePublicLink";
import usePrivateLink from "../../../hooks/usePrivateLink";
import axios from "axios";

const IMG_API_LINK = import.meta.env.VITE_IMG_API;

const Restaurant_form = () => {
  const publicAPI = usePublicLink();
  const privateAPI = usePrivateLink()

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
      /*
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

        */

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


      const { data } = await axios.post("/ax", {abd: 'hitting'});

      console.log(data);


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
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5"
        >
          <Input
            placeholder="Restaurant Name"
            name="name"
            label="Restaurant Name"
          />
          <Input
            name="logo"
            label="Select a Logo"
            type="file"
            className="file-input w-full outline-none focus:outline-none"
          />
          <Input
            name="banner"
            label="Select a Banner"
            type="file"
            className="file-input w-full outline-none focus:outline-none"
          />
          <Input placeholder="Phone Number" name="phone" label="Phone Number" />
          <Input
            placeholder="Email Address"
            name="email"
            label="Email Address"
          />
          <Select
            label="City"
            name="city"
            option={cities?.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          />
          <Input placeholder="State" name="state" label="State" />
          <Input placeholder="Address" name="address" label="Address" />
          <Input placeholder="Zip_Code" name="zip_code" label="Zip_Code" />
          <Input
            placeholder="Country"
            name="country"
            label="Country"
            defaultValue="Bangladesh"
            readOnly
          />
          <Input name="opening_time" label="Opening Time" type="time" />
          <Input name="closing_time" label="Closing Time" type="time" />

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

export default Restaurant_form;
