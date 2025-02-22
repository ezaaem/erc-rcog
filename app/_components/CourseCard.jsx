"use client";

import React from "react";
import { Users, Clock, Award, BookText } from "lucide-react";
import { useTranslations } from "next-intl";

const CourseCard = ({ title, description, image, category, date, status }) => {
  const t = useTranslations("Coursescard");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="pt-2">
        {/* Category and Date */}
        <div className="flex justify-between items-center p-2">
          <span className="text-gray-600 dark:text-gray-300 flex gap-1 justify-center items-center text-sm">
            <BookText size={15} strokeWidth={1} /> {category}
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 pb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 border-b-2 border-gray-100 dark:border-gray-700 pb-3">
          <button className="bg-sky-600 flex hover:bg-sky-700 text-white text-sm font-semibold p-2 rounded-lg transition-colors duration-200">
            {t("joinCourse")}{" "}
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
          <button className="border flex bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold p-2 rounded-lg transition-colors duration-200">
            {t("details")}{" "}
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

        {/* Status Icons */}
        <div className="flex items-center pt-2 gap-4 text-gray-500 dark:text-gray-400">
          {status.online && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">{t("online")}</span>
            </div>
          )}
          {status.active && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{t("active")}</span>
            </div>
          )}
          {status.specialty && (
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span className="text-sm">{t("specialty")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
