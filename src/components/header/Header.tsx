import { Link } from "react-router-dom";
import { User } from "lucide-react";
import deliveryIcon from "/food-delivery.png";

export default function Header() {
  // TODO:
  const user: { email: string; photoURL?: string } = { email: "" };

  const location_button = (
    <button className="flex btn">
      <span className="hidden md:inline">Select</span> Your Location
    </button>
  );

  return (
    <nav className="border-b border-primary/30 py-3">
      <div className="container mx-auto px-3 sm:px-5 flex justify-between">
        {/* left side nav */}
        <Link to="/">
          <div className="flex items-center">
            <img src={deliveryIcon} alt="logo" className="size-8 sm:size-10" />
            <h2 className="text-lg sm:text-2xl md:text-2xl bg-base-100 px-5 py-1 rounded font-Lobster text-primary">
              Loizar
            </h2>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <div className={`${!user && "hidden"} sm:block`}>
            {location_button}
          </div>

          {!user && (
            <>
              <Link to="/login">
                <button className="btn btn-neutral">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline">Register</button>
              </Link>
            </>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar text-center"
            >
              <div className="size-7 sm:size-10 rounded-full">
                {user?.photoURL ? (
                  <img alt="" src={user?.photoURL} className="rounded-full" />
                ) : (
                  <span className="w-full h-full flex items-center justify-center border border-primary/40 rounded-full">
                    <User size={32} />
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {user && (
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
              )}
              <li>
                <a>Settings</a>
              </li>
              {user && <li>{/* <Logout /> */}</li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
