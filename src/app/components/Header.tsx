"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center w-full h-14 p-4 justify-between">
      <Image
        src="/Logo.svg"
        alt="Логотип"
        width={140}
        height={23.24}
        className="object-contain cursor-pointer"
      />
      <div className="w-6 h-6 flex flex-col justify-center space-y-1.5  cursor-pointer">
        <span className="block h-1 w-6 bg-[#FFCF01] rounded-full"></span>
        <span className="block h-1 w-6 bg-[#FFCF01] rounded-full"></span>
        <span className="block h-1 w-6 bg-[#FFCF01] rounded-full"></span>
      </div>
    </header>
  );
}
