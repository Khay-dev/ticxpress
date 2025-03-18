"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full flex items-center justify-center px-6 pt-[50px]">
      <nav className="bg-[#f8f9fa] text-[#2a2a2a] rounded-4xl flex items-center h-full md:justify-center justify-between md:w-fit w-full px-4 gap-x-5 ">
        <Link
          href="/"
          className="inline-flex gap-x-2 items-center md:border-r border-gray-200 pe-4 h-[50px]"
        >
          <Image src="icon.svg" alt="Logo" width={50} height={50} />
          <p className="flex items-center hover:scale-105 transition-transform duration-300">
            TicXpress
          </p>
        </Link>
        <Link
          href="#"
          className="border-r border-gray-200 pe-4 md:flex items-center h-[50px] hover:scale-105 transition-transform duration-300 hidden"
        >
          Events
        </Link>
        <Link
          href="#"
          className="border-r border-gray-200 pe-4 md:flex items-center h-[50px] hover:scale-105 transition-transform duration-300 hidden"
        >
          About
        </Link>
        <Link
          href="#"
          className="md:flex items-center h-[50px] hover:scale-105 transition-transform duration-300 hidden"
        >
          Get Started
        </Link>

        {/* Burger Menu Button */}
        <button type="button" className="block md:hidden" onClick={toggleMenu}>
          Menu
        </button>

        {/* Animated Full-screen menu */}
        <div
          className={`fixed top-0 left-0 w-full bg-white flex flex-col justify-center items-center z-50 transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? "translate-y-0 h-[100vh] opacity-100" : "-translate-y-full h-0 opacity-0"
            }`}
        >
          <button
            type="button"
            className="absolute top-16 right-10"
            onClick={toggleMenu}
          >
            Close
          </button>
          <div className="mb-4 text-lg font-bold">Logo</div>
          <ul className="text-center text-gray-800">
            <li className="mb-4">
              <Link href="#" className="text-2xl" onClick={toggleMenu}>
                Events
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="text-2xl" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded text-2xl"
                onClick={toggleMenu}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}
