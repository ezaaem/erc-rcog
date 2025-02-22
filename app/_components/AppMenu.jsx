"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Menu as MenuIcon } from "lucide-react";

const AppMenu = () => {
  const t = useTranslations("HomePage"); // Load translations
  const params = useParams(); // Get locale from params
  const locale = params.locale; // Extract locale
  const router = useRouter();
  const pathname = usePathname(); // Get current path
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Function to switch language
  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const newPath = `/${newLocale}${pathname.replace(`/${locale}`, "")}`;
    router.push(newPath);
  };

  return (
    <nav className="bg-transparent  text-white mx-auto md:w-[66%]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
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
          <div>
            <button
              onClick={switchLanguage}
              className="hidden md:flex bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-bold text-white transition"
            >
              {locale === "en" ? "العربية" : "English"}
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
              <Link
                href={`/${locale}${href}`}
                className="block text-black py-2 hover:text-gray-300"
              >
                {name}
              </Link>
            </div>
          ))}
          <button
            onClick={switchLanguage}
            className="w-full bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-bold text-white mt-2 transition"
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default AppMenu;
