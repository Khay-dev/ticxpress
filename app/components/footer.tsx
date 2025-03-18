"use client"
import React from "react";
import Image from "next/image";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="md:py-6 border-b-[6px] border-b-[#2a2a2a] bg-white">
      <div className="py-12 px-4 md:px-8 lg:px-16 flex flex-row  items-center justify-between">
        <div className="inline-flex gap-x-2 items-center">
          <Image
            src="icon.svg" width={200}
            height={60}
            alt="Logo"
            className="w-auto lg:h-[60px] md:h-[25px] h-[30.63px] "
          />
          <p className="flex items-center text-2xl font-black text-[#2a2a2a] hover:scale-105 transition-transform duration-300">
            TicXpress
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className=" bg-[#2a2a2a] text-white py-2 px-4 rounded hover:bg-[#f8f9fa] hover:text-[#2a2a2a] transition-all duration-300 w-fit"
        >
          <FiArrowUp className="text-lg font-bold" />
        </button>
      </div>
      <div className="md:pt-12 py-10 md:pb-0 px-4 md:px-8 lg:px-16 text-center md:text-left">
        <p className="text-xl text-[#999999]">
          Copyright © TicXpress {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
