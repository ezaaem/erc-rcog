import React from "react";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import CourseCard from "./_components/CourseCard";
const courses = [
  {
    id: 1,
    title: "Revision courses MRCOG",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80",
    category: "Category of Course",
    date: "Date Instead",
    status: {
      online: true,
      active: true,
      specialty: true,
    },
  },
  {
    id: 2,
    title: "Revision courses MRCOG",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80",
    category: "Category of Course",
    date: "Date Instead",
    status: {
      online: true,
      active: true,
      specialty: true,
    },
  },
  {
    id: 3,
    title: "Revision courses MRCOG",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80",
    category: "Category of Course",
    date: "Date Instead",
    status: {
      online: true,
      active: true,
      specialty: true,
    },
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-200 mx-auto ">
      <div className="container mx-auto px-4 md:w-[70%]">
        {/* Header */}
        <div className="text-center    mb-12">
          <div className="flex items-center mx-auto w-40 border-black border-b-2  justify-center gap-2 ">
            <BookOpen size={20} strokeWidth={1.5} className="text-sky-600" />
            <span className="text-sky-600  font-medium tracking-widest uppercase">
              Our Courses
            </span>
          </div>
          <h2 className="text-3xl pt-2 font-bold text-gray-900">
            Our <span className="text-sky-600">Courses</span>
          </h2>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2 pt-8 p-5">
          <div className="w-6 h-3 rounded-full bg-gray-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>

        {/* More Courses Button */}
        <div className="text-center pb-5">
          <button className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center group">
            MORE COURSES
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
    </section>
  );
};

export default CoursesSection;
