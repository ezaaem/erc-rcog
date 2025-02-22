"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("HomePage"); // Load translations

  return (
    <div className="container mx-auto px-4 max-sm:pt-40 md:mt-64 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:w-[70%]">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <div className="rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt={t("imageAlt")}
            className="w-full rounded-3xl h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="flex items-center gap-2 border-black border-b-2 w-28">
          <BookOpen
            size={20}
            strokeWidth={1}
            className="w-5 h-5 text-sky-600"
          />
          <span className="text-sky-600 font-medium tracking-wide uppercase">
            {t("aboutus")}
          </span>
        </div>

        <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight">
          {t("headline")} <span className="text-sky-600">{t("highlight")}</span>
        </h2>

        <p className="text-base text-gray-600 leading-relaxed">
          {t("description")}
        </p>

        <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
          {t("buttonText")}
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
};

export default AboutSection;
