import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utility/userSlice";
import { USER_ICON } from "../utility/constant";
import { clearMovies } from "../utility/movieSlice";
import { clearGptResults, clearGptToggle } from "../utility/gptSlice";
import { clearLanguage } from "../utility/configSlice";

const MenuProfile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    window.localStorage.removeItem("email");
    dispatch(removeUser());
    dispatch(clearMovies());
    dispatch(clearGptResults());
    dispatch(clearGptToggle());
    dispatch(clearLanguage());
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-4 py-4 text-sm font-semibold text-gray-900 ">
          <img className="w-8 h-8 mx-1" src={USER_ICON} alt="userIcon" />
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black opacity-60 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <p className="block px-4 py-2 text-sm font-bold text-gray-300 data-[focus]:outline-none">
              {user.email}
            </p>
          </MenuItem>
          <MenuItem>
            <p className="block px-4 py-2 cursor-pointer text-sm text-gray-400 data-[focus]:bg-gray-100  data-[focus]:rounded-lg data-[focus]:text-gray-900 data-[focus]:outline-none data-[focus]:mx-1">
              Profile
            </p>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <p className="block px-4 py-2 cursor-pointer text-sm text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none data-[focus]:mx-1">
              Setting
            </p>
          </MenuItem>
          <MenuItem>
            <p className="block px-4 py-2 cursor-pointer text-sm text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none data-[focus]:mx-1">
              Mode
            </p>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <p className="block px-4 py-2 text-sm cursor-pointer text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none data-[focus]:mx-1">
              Downloads
            </p>
          </MenuItem>
          <MenuItem>
            <p className="block px-4 py-2 text-sm cursor-pointer text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none data-[focus]:mx-1">
              Add to favorites
            </p>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <p
              onClick={logoutHandler}
              className="block px-4 py-2 text-sm cursor-pointer text-gray-300 data-[focus]:rounded-lg data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none data-[focus]:mx-1"
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
