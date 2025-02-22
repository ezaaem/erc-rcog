"use client";
import React, { useState } from "react";
import AppMenu from "./_components/AppMenu";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = ["/header3.jpg", "/header2.jpg", "/header.png"];

function Header() {
  const t = useTranslations("HomePage");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <AppMenu className="z-1" />
      <Image
        className="absolute top-0 left-0 w-full brightness-50 object-cover -z-10 h-[85vh]"
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt="Header"
        width={1920}
        height={1080}
      />
      <div className="mt-44 flex mx-auto w-[95%] justify-between">
        <div className="flex rounded-full bg-gray-200 p-3 bg-opacity-25 hover:bg-opacity-100 group">
          <button onClick={nextSlide}>
            <svg
              className="w-5 h-5 transform text-white group-hover:text-black rotate-180 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
        <p className="text-white flex items-center max-sm:text-3xl justify-center font-bold text-4xl">
          {t("welcome", { defaultTranslation: "Welcome to" })}{" "}
          <span className="text-outline ml-2">
            {t("title", { defaultTranslation: "ERC ROCG" })}
          </span>
        </p>
        <div className="flex rounded-full bg-gray-200 p-3 bg-opacity-25 hover:bg-opacity-100 group">
          <button onClick={prevSlide}>
            <svg
              className="w-5 h-5  transform text-white group-hover:text-black group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center space-x-3 mt-5">
        <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
          {t("courses", { defaultTranslation: "Courses" })}
          <svg
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        <button className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
          {t("events", { defaultTranslation: "Events" })}
          <svg
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
