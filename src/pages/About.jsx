import { useTheme } from "../components/ThemeProviderComponent";
import { IoColorFilterOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiEnlightenment } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import missionImage from "../images/smiley-couple.jpg"


const About = () => {
  const { themeMode } = useTheme();
  return (
    <>
      <div  className="space-y-40 max-w-[1860px] mx-auto">
        <section
          id="about"
          data-aos="fade-left"
          data-aos-duration="3000"
          className="aboutus flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-start items-center gap-10 rounded-xl"
          style={{
            // backgroundImage: "url('/images/contact-us.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px", // Increase the height
            width: "90%", // Increase the width
          }}
        >
          <div className="flex flex-col gap-7 w-full md:w-1/2 items-center justify-center bg-sky-100 bg-opacity-80 p-5 rounded-md md:max-w-[500px] mx-10">
            <span className="text-[26px] font-extrabold text-sky-500">
              About us
            </span>
            <span className="text-[1rem] text-left w-[90%] items-center text-black">
              At Tacbiz we will do everything that a normal accountant would be
              able to do for you as a business owner. A virtual accountant works
              with you to set up your books, keeps your records accurate and
              current, and provides relevant reports that aid business decision
              making.Our services are provided at a fraction of the cost of
              traditional book keeping services
            </span>
          </div>
        </section>

        {/* Section 2 */}
        <main className="flex flex-col-reverse md:flex-row-reverse mt-10 md:mx-10 mx-auto justify-center items-center gap-10  aos-animinate">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-around items-center gap-4">
            <div data-aos="fade-left" data-aos-duration="3000">
              <h2 className=" text-[30px] md:text-[36px] font-extrabold text-sky-500 text-center">
                Our Vision
              </h2>
              <p className="text-[1rem] text-center w-[60%] items-center mx-auto ">
                To provide financial expertise to small and medium businesses in
                every industry.
              </p>
            </div>

            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              className="w-full max-w-[600px] h-auto rounded-xl"
              src={missionImage}
            />

            <div data-aos="fade-left" data-aos-duration="3000">
              <h2 className="text-[30px] md:text-[36px] font-extrabold text-sky-500 text-center">
                Our Mission
              </h2>
              <p className="text-[1rem] text-center w-[60%] items-center mx-auto">
                To powered by a mix of qualified Accountants, Tax practitioners
                expert and technology
              </p>
            </div>
          </div>
        </main>

        {/* Section 3 */}
        <div className="h-[auto] aos-animinate">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center max-md:grid-cols-1 mt-12 md:px-20 gap-5 justify-around">
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
                    We create possibilities by leading the way with innovation
                    and vision
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
                    We build trust, inspire confidence and fostering
                    accountability.
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
      </div>
    </>
  );
};
export default About;
