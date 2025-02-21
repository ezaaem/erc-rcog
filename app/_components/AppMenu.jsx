"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Corrected import
import { Menu as MenuIcon } from "lucide-react";

const pages = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/Aboutus" },
  { name: "Courses ⌵", href: "/courses" },
  { name: "Events", href: "/events" },
  { name: "News", href: "/News" },
  { name: "Gallery ⌵", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function AppMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white  mx-auto  md:w-[66%]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="">
          <Image src="/logo.png" alt="Logo" width={70} height={50} />
        </Link>

        {/* Centered Menu */}
        <div className="flex items-center space-x-16">
          <div className="hidden md:flex   font-bold justify-center  space-x-6">
            {pages.map(({ name, href }) => (
              <Link key={name} href={href} className="hover:text-sky-500">
                {name}
              </Link>
            ))}{" "}
          </div>
          <div>
            <button className="hidden md:flex bg-sky-600  hover:bg-sky-700 p-3 rounded-md  font-bold text-white">
              {" "}
              ARABIC{" "}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          {pages.map(({ name, href }) => (
            <div key={name} onClick={() => setMenuOpen(false)}>
              <Link href={href} className="block py-2 hover:text-gray-300">
                {name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
