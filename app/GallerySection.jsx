import React from "react";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const gallery = ["/g1.png", "/g2.png", "/g3.png"];

const GallerySection = () => {
  const t = useTranslations("gallery");

  return (
    <section className="py-16 md:py-24 mx-auto">
      <div className="container mx-auto px-4 md:w-[70%]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center mx-auto w-28 border-black border-b-2 justify-center gap-2">
            <BookOpen size={20} strokeWidth={1.5} className="text-sky-600" />
            <span className="text-sky-600 font-medium tracking-widest uppercase">
              {t("gallery")}
            </span>
          </div>
          <h2 className="text-3xl pt-2 font-bold text-gray-900">
            {t("Our Photo")}{" "}
            <span className="text-sky-600">{t("Gallery")}</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="course gallery"
              width={1080}
              height={720}
              className="rounded-lg shadow-lg h-96 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
