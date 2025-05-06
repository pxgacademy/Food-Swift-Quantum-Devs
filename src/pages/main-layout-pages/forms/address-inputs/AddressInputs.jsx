import PropTypes from "prop-types";
import Select from "../../../../components/inputs/Select";
import Input from "../../../../components/inputs/Input";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDivisions = () => {
  return useQuery({
    queryKey: ["divisions"],
    queryFn: async () => {
      const { data } = await axios("https://pxga-bd-api.vercel.app/divisions");
      return data;
    },
  });
};

const useCities = (divisionName) => {
  return useQuery({
    queryKey: ["cities", divisionName],
    queryFn: async () => {
      const { data } = await axios(
        `https://pxga-bd-api.vercel.app/districts/${divisionName}`
      );
      return data;
    },
    enabled: !!divisionName,
  });
};

const useStates = (cityName) => {
  return useQuery({
    queryKey: ["states", cityName],
    queryFn: async () => {
      const { data } = await axios(
        `https://pxga-bd-api.vercel.app/upazillas/${cityName}`
      );
      return data;
    },
    enabled: !!cityName,
  });
};

const useAreas = (stateName) => {
  return useQuery({
    queryKey: ["areas", stateName],
    queryFn: async () => {
      const { data } = await axios(
        `https://pxga-bd-api.vercel.app/unions/${stateName}`
      );
      return data;
    },
    enabled: !!stateName,
  });
};

const AddressInputs = ({ register, errors, watch }) => {
  const division = watch("division");
  const city = watch("city");
  const state = watch("state");

  const { data: divisions } = useDivisions();
  const { data: cities } = useCities(division);
  const { data: states } = useStates(city);
  const { data: areas } = useAreas(state);

  return (
    <>
      <Select
        label="Division"
        option={
          <>
            <option className="hidden" value="">
              Select a Division
            </option>
            {divisions?.map((division, i) => (
              <option key={i} value={division?.name}>
                {`${division?.name} - ${division?.bn_name}`}
              </option>
            ))}
          </>
        }
        validation={{
          ...register("division", {
            required: "Division name is required",
          }),
        }}
        errorText={errors?.division?.message}
      />
      <Select
        label="City"
        option={
          <>
            <option className="hidden" value="">
              Select a City
            </option>
            {cities?.map((city, i) => (
              <option key={i} value={city?.name}>
                {`${city?.name} - ${city?.bn_name}`}
              </option>
            ))}
          </>
        }
        validation={{
          ...register("city", {
            required: "City name is required",
          }),
        }}
        errorText={errors?.city?.message}
      />
      <Select
        label="State"
        option={
          <>
            <option className="hidden" value="">
              Select a State
            </option>
            {states?.map((state, i) => (
              <option key={i} value={state?.name}>
                {`${state?.name} - ${state?.bn_name}`}
              </option>
            ))}
          </>
        }
        validation={{
          ...register("state", {
            required: "State name is required",
          }),
        }}
        errorText={errors?.state?.message}
      />
      <Select
        label="Area"
        option={
          <>
            <option className="hidden" value="">
              Select an Area
            </option>
            {areas?.map((area, i) => (
              <option key={i} value={area?.name}>
                {`${area?.name} - ${area?.bn_name}`}
              </option>
            ))}
          </>
        }
        validation={{
          ...register("area", {
            required: "Area name is required",
          }),
        }}
        errorText={errors?.area?.message}
      />

      <Input
        placeholder="Address"
        label="Address"
        validation={{
          ...register("address", {
            required: "Address is required",
          }),
        }}
        errorText={errors?.address?.message}
      />
      <Input
        placeholder="Zip_Code"
        label="Zip_Code"
        validation={{
          ...register("zip_code", {
            required: "Zip code is required",
          }),
        }}
        errorText={errors?.zip_code?.message}
      />
    </>
  );
};

AddressInputs.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func,
};

export default AddressInputs;
