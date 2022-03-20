import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

export function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold mr-4 sm:text-4xl">
            BRAND.
          </a>

          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li className="mr-0">Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            sign In
          </button>
          <button className="px-8 py-3">Sign up</button>
        </div>

        <div
          className="md:hidden"
          onClick={() => {
            setToggleMenu((prevState) => !prevState);
          }}
        >
          {toggleMenu ? (
            <XIcon className="w-7 cursor-pointer hover:text-indigo-600" />
          ) : (
            <MenuIcon className="w-7 cursor-pointer hover:text-indigo-600" />
          )}
        </div>
      </div>

      <ul
        className={`${
          !toggleMenu && "hidden"
        } absolute bg-zinc-200 w-full md:hidden transition duration-1000 ease-in-out`}
      >
        <li className="border-b-2 border-zinc-300 pb-4">Home</li>
        <li className="border-b-2 border-zinc-300 pb-4">About</li>
        <li className="border-b-2 border-zinc-300 pb-4">Support</li>
        <li className="border-b-2 border-zinc-300 pb-4">Platform</li>
        <li>Pricing</li>

        <div className="flex flex-col mx-4 space-y-3 mt-8 mb-3">
          <button className="border-indigo-600-600 px-8 py-3 bg-transparent text-indigo-600">
            sign In
          </button>
          <button className="px-8 py-3">Sign up</button>
        </div>
      </ul>
    </header>
  );
}
