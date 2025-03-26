import { MdLogout } from "react-icons/md";
import useContextValue from "../../hooks/useContextValue";
import Swal from "sweetalert2";

const Logout = () => {
  const { signOutUser } = useContextValue();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await signOutUser();
          Swal.fire({
            title: "Logged Out Successfully",
            icon: "success",
            showConfirmButton: false,
            position: "center",
            timer: 1500,
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error.message,
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      }
    });
  };

  return (
    <button onClick={handleLogout} className="flex items-center gap-3">
      <span>Logout</span> <MdLogout />
    </button>
  );
};

export default Logout;
