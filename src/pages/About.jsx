// import { useTheme } from "../components/ThemeProviderComponent";
import missionImage from "../images/smiley-couple.jpg"
import Core from "./Core";


const About = () => {
  // const { themeMode } = useTheme();
  return (
    <>
      <div className="space-y-40 max-w-[1860px] mx-auto">
        <section
          id="about"
          data-aos="fade-left"
          data-aos-duration="3000"
          className="aboutus flex flex-col md:flex-row mt-10 md:px-10 mx-auto justify-start items-center gap-10 rounded-xl"
          style={{
            // backgroundImage: "url('../src/images/man-pointing-tablet.jpg')",
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

        {/* Section 1 */}
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

        {/* Section 2 */}
        <Core />
      </div>
    </>
  );
};
export default About;
