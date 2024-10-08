import { IoColorFilterOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiEnlightenment } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import { useTheme } from "../components/ThemeProviderComponent";


const Core = () => {
      const { themeMode } = useTheme();
  return (
    <div className="h-[auto] aos-animinate ">
      <div className=" mt-10">
        {/* CORE VALUES HEADER */}
        <div data-aos="fade-up" data-aos-duration="3000">
          <h1 className="text-center font-extrabold text-[30px] md:text-[36px] text-sky-500">
            Core Values
          </h1>
          <h1 className="text-center text-[1rem] ">
            Were passionate about delivering the best solution for our clients
          </h1>
        </div>
        {/* CORE VALUES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center max-md:grid-cols-1 mt-12 md:px-20 gap-5 justify-between">
          <div data-aos="fade-right" data-aos-duration="3000">
            <div className="bg-sky-100 m-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
              <div className="flex justify-center items-center mt-8">
                <GoVerified className="w-[10rem] h-[5rem] text-slate-600" />
              </div>

              <span className="text-[24px] font-extrabold text-center text-sky-500">
                Reliability
              </span>
              <span
                className={`text-center mx-auto ${
                  themeMode === "dark" ? "text-black" : "text-slate-500"
                }`}
              >
                We build trust in every step by delivering excellence.
              </span>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="3000">
            <div className="bg-sky-100 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
              <div className="flex justify-center items-center mt-8">
                <FaRegLightbulb className="w-[10rem] h-[5rem] text-slate-600" />
              </div>
              <span className="text-[24px] font-extrabold text-sky-500 text-center">
                Innovation
              </span>
              <span
                className={`text-center mx-auto ${
                  themeMode === "dark" ? "text-black" : "text-slate-500"
                }`}
              >
                We create possibilities by leading the way with innovation and
                vision
              </span>
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="4000">
            <div className="bg-sky-100 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
              <div className="flex justify-center items-center mt-8 ">
                <IoColorFilterOutline className="w-[10rem] h-[5rem] text-slate-600" />
              </div>
              <span className="text-[24px] font-extrabold text-sky-500 text-center">
                Transparency
              </span>
              <span
                className={`text-center mx-auto ${
                  themeMode === "dark" ? "text-black" : "text-slate-500"
                }`}
              >
                We build trust, inspire confidence and fostering accountability.
              </span>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000">
            <div className="bg-sky-100 mx-5 rounded-[5%] pt-5 pr-10 pl-5 pb-5 cursor-pointer mts__bounce flex flex-col gap-3">
              <div className="flex justify-center items-center mt-8">
                <GiEnlightenment className="w-[10rem] h-[5rem] text-slate-600" />
              </div>
              <span className="text-[24px] font-extrabold text-sky-500 text-center">
                Empathy
              </span>
              <span
                className={`text-center mx-auto ${
                  themeMode === "dark" ? "text-black" : "text-slate-500"
                }`}
              >
                We connect hearts, change lives, inspire understanding, and
                ignite Change.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Core;
