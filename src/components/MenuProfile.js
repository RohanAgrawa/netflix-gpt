import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utility/userSlice";

const MenuProfile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);
  const logoutHandler = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-4 py-4 text-sm font-semibold text-gray-900 ">
          <img
            className="w-8 h-8 mx-1"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="logo"
          />
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black opacity-70 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <p className="block px-4 py-2 text-sm font-bold text-gray-300 data-[focus]:outline-none">
              {user.email}
            </p>
          </MenuItem>
          <MenuItem>
            <p className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-gray-100  data-[focus]:rounded-lg data-[focus]:text-gray-900 data-[focus]:outline-none">
              Profile
            </p>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <p className="block px-4 py-2 text-sm text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
              Setting
            </p>
          </MenuItem>
          <MenuItem>
            <p className="block px-4 py-2 text-sm text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none">
              Mode
            </p>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <p
              href="/"
              className="block px-4 py-2 text-sm text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Downloads
            </p>
          </MenuItem>
          <MenuItem>
            <p
              href="/"
              className="block px-4 py-2 text-sm text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Add to favorites
            </p>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <p
              onClick={logoutHandler}
              className="block px-4 py-2 text-sm text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Logout
            </p>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
export default MenuProfile;
