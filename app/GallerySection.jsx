import React from "react";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const gallery = ["/g1.png", "/g2.png", "/g3.png"];

const GallerySection = () => {
  const t = useTranslations("gallery");

  return (
    <section className="py-16 md:py-24 mx-auto dark:bg-gray-900">
      <div className="container mx-auto px-4 md:w-[70%]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center mx-auto w-28 border-black dark:border-gray-300 border-b-2 justify-center gap-2">
            <BookOpen size={20} strokeWidth={1.5} className="text-sky-600" />
            <span className="text-sky-600 font-medium tracking-widest uppercase">
              {t("gallery")}
            </span>
          </div>
          <h2 className="text-3xl pt-2 font-bold text-gray-900 dark:text-gray-100">
            {t("Our Photo")}{" "}
            <span className="text-sky-600">{t("Gallery")}</span>
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={1080}
                height={720}
                className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
