import { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const UserProfileMenu = () => {
  const {user, logOut} = useAuth()
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li className="relative" ref={ref}>
      {/* Avatar */}
      <img
        onClick={() => setOpen(!open)}
        className="w-10 h-8 object-cover rounded-full p-0"
        title={user?.displayName || "User"}
        src={user?.photoURL}
        alt="User avatar"
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-[#f4a261] dark:bg-[#f4a261] rounded-xl shadow-lg p-4 z-50">
          <div className="flex items-center gap-3">
            <img
              src={user?.photoURL}
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                {user?.displayName}
              </p>
            </div>
          </div>

          <hr className="my-3 border-gray-200 dark:border-gray-700" />

          <button
            onClick={logOut}
            className="w-full text-left px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      )}
    </li>
  );
};

export default UserProfileMenu;
