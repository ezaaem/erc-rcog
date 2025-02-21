import React from "react";
import { BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 mt-64 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:w-[70%]">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <div className="rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Medical students collaborating"
            className="w-full rounded-3xl h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6 ">
        <div className="flex items-center gap-2   border-black border-b-2 w-28  ">
          <BookOpen
            size={20}
            strokeWidth={1}
            className="w-5 h-5 text-sky-600"
          />
          <span className="text-sky-600 font-medium tracking-wide uppercase">
            About Us
          </span>
        </div>

        <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight">
          Our RCOG System <span className="text-sky-600">Inspires</span> You
          More.
        </h2>

        <p className="text-base text-gray-600 leading-relaxed">
          Education and Training: We organize conferences, workshops, and
          educational courses to ensure healthcare professionals have access to
          the latest advancements and best practices in obstetrics and
          gynaecology.
        </p>

        <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
          Discover More
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
