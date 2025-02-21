"use client";
import AboutSection from "./AboutSection";
import CoursesSection from "./CoursesSection";
import Header from "./Header";
import GallerySection from "./GallerySection";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import SocialBar from "./_components/SocialBar";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <CoursesSection />
      <GallerySection />
      <BlogSection />
      <Footer />
      <SocialBar />
    </div>
  );
}
