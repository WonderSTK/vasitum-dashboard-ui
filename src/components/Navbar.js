'use client'
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleNotificationDropdown = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  return (
    <div className="flex items-center justify-between p-4 lg:ml-10 border-b-[1px]">
      {/* search bar for desktop view */}
      <div className="hidden md:flex items-center relative w-[300px]">
        <input
          type="text"
          placeholder="search"
          className="w-full px-4 py-2 bg-[#FAFAFA] text-gray-600 placeholder:text-gray-400 
                   border border-gray-200 rounded outline-none shadow-sm"
        />
        <div className="absolute right-3">
          <Image 
            src="/search.svg" 
            alt="search" 
            width={16} 
            height={16}
            className="text-gray-400"
          />
        </div>
      </div>

      {/* search bar for mobile view */}
      <div className="md:hidden flex items-center gap-3">
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
        {showMobileSearch ? (
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="search"
              className="w-full px-4 py-2 bg-[#FAFAFA] text-gray-600 placeholder:text-gray-400 
                         border border-gray-200 rounded outline-none shadow-sm"
            />
            <div className="absolute right-3" onClick={toggleMobileSearch}>
              <Image 
                src="/search.svg" 
                alt="search" 
                width={24} 
                height={24}
                className="text-gray-400"
              />
            </div>
          </div>
        ) : (
          <div onClick={toggleMobileSearch}>
            <Image src="/search.svg" alt="search" width={24} height={24} />
          </div>
        )}
      </div>

      {/* icons and user profile */}
      <div className="flex items-center gap-3 md:gap-6 justify-end w-full">
        <div className="relative">
          <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer" onClick={toggleNotificationDropdown}>
            <Image src="/notifications.svg" alt="notifications" width={25} height={25} />
          </div>
          {showNotificationDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20">
              <div className="block px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 cursor-pointer">unread notification 1</div>
              <div className="block px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 cursor-pointer">unread notification 2</div>
              <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">read notification 1</div>
              <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">read notification 2</div>
              <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">see all notifications</div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/messages.svg" alt="messages" width={20} height={20} />
        </div>

        <div className="relative flex items-center justify-center gap-3">
          <Image
            src="/profile.png"
            alt="profile"
            width={36}
            height={36}
            className="rounded-full cursor-pointer"
            onClick={toggleProfileDropdown}
          />
          <span className="hidden md:flex text-base leading-3 font-medium cursor-pointer" onClick={toggleProfileDropdown}>
            admirra john
          </span>
          <Image 
            src="/arrow-down.svg" 
            alt="expand" 
            width={14} 
            height={14} 
            className="cursor-pointer"
            onClick={toggleProfileDropdown}
          />
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20" style={{ top: '100%' }}>
              <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">profile</div>
              <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">settings</div>
              <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;