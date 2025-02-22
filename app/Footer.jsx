import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Facebook,
  Mail,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-sky-900 dark:bg-black text-white pt-12">
      <div className="container mx-auto border-b-2 border-gray-700 px-4 w-[70%] p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="RCOG Logo" width={120} height={120} />
            <p className="text-sm text-white mt-4">{t("description")}</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-4 w-32 border-b-2 border-gray-600">
              {t("QuickLinks")}
            </h3>
            <ul className="space-y-3">
              {[
                t("AboutUs"),
                t("Home"),
                t("Gallery"),
                t("Courses"),
                t("News"),
                t("Contact"),
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white hover:text-white flex items-center"
                  >
                    <span className="text-sky-400 mr-2">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-4 w-32 border-b-2 border-gray-600">
              {t("OurCourses")}
            </h3>
            <ul className="space-y-3">
              {[
                t("TrainingCourses"),
                t("RevisionCourses"),
                t("FranchiseCourses"),
                t("TrainingOnline"),
                t("Webnaisr"),
              ].map((course) => (
                <li key={course}>
                  <Link
                    href="#"
                    className="text-white hover:text-white flex items-center"
                  >
                    <span className="text-sky-400 mr-2">›</span>
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-4 w-32 border-b-2 border-gray-600">
              {t("ContactUs")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone
                  className="text-white bg-sky-500 p-1 rounded-sm mr-3"
                  size={25}
                />
                <span>{t("Phone")}: +2 123 654 7898</span>
              </li>
              <li className="flex items-center">
                <MapPin
                  className="text-white bg-sky-500 p-1 rounded-sm mr-3"
                  size={25}
                />
                <span>{t("Location")}: Mohandessin, Giza, Egypt</span>
              </li>
              <li className="flex items-center">
                <Mail
                  className="text-white bg-sky-500 p-1 rounded-sm mr-3"
                  size={25}
                />
                <span>{t("Email")}: info@RCOG.com</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-gray-800 w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-700 transition-all duration-300"
                >
                  <Icon size={20} color="white" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="p-4 w-[70%] mx-auto">
        <p className="text-gray-400">
          {t("Copyright")} <span className="text-sky-400">RCOG</span>{" "}
          {t("AllRightsReserved")}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
