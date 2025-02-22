"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Menu as MenuIcon } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const AppMenu = () => {
  const t = useTranslations("HomePage"); // Load translations
  const params = useParams(); // Get locale from params
  const locale = params.locale; // Extract locale
  const router = useRouter();
  const pathname = usePathname(); // Get current path
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define menu items
  const pages = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/Aboutus" },
    { name: t("courses"), href: "/courses" },
    { name: t("events"), href: "/events" },
    { name: t("news"), href: "/News" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("contact"), href: "/contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add background color and opacity when scrolled
      } else {
        setIsScrolled(false); // Remove background color and opacity when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to switch language
  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const newPath = `/${newLocale}${pathname.replace(`/${locale}`, "")}`;
    router.push(newPath);
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-[#9ea9b4] bg-opacity-80" : "bg-transparent"
      } text-white fixed w-full top-0 left-0 z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center md:w-[66%] justify-between py-4 px-6">
        {/* Logo */}
        <Link href={`/${locale}/`}>
          <Image src="/logo.png" alt="Logo" width={70} height={50} />
        </Link>

        {/* Centered Menu */}
        <div className="flex items-center space-x-16">
          <div className="hidden md:flex font-bold justify-center space-x-6">
            {pages.map(({ name, href }) => (
              <Link
                key={name}
                href={`/${locale}${href}`}
                className="hover:text-sky-500"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={switchLanguage}
              className="hidden md:flex bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-bold text-white transition"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <div className="hidden md:flex">
              <DarkModeToggle />
            </div>
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
        <div className="md:hidden bg-gray-300 bg-opacity-50 z-220  py-2 px-4 shadow-lg">
          {pages.map(({ name, href }) => (
            <div key={name} onClick={() => setMenuOpen(false)}>
              <Link
                href={`/${locale}${href}`}
                className="block text-black py-2 hover:text-gray-300"
              >
                {name}
              </Link>
            </div>
          ))}
          <div className="flex gap-4 h-12 items-center justify-center">
            <button
              onClick={switchLanguage}
              className=" bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-bold text-white  transition"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <div className="flex">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppMenu;
