import PropTypes from "prop-types";
import { FaGoogle } from "react-icons/fa";
import useContextValue from "../../../hooks/useContextValue";
import Swal from "sweetalert2";

const SocialLogin = ({ children }) => {
  const { googleSignIn, setUser } = useContextValue();

  const handleGoogleLogin = async () => {
    try {
      const { user } = await googleSignIn();
      setUser(user);
      Swal.fire({
        title: "Logged In Successfully!",
        icon: "success",
        position: "center",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="btn w-full btn-secondary">
      <FaGoogle className="mr-2 text-xl" />
      <span className="font-semibold">{children}</span>
    </button>
  );
};

SocialLogin.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SocialLogin;
