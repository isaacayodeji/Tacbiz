import {
  ImDatabase,
  ImKey,
  ImEqualizer,
  ImCalendar,
  ImAddressBook,
  ImStatsDots,
  ImTerminal,
  ImShrink,
} from "react-icons/im";
// import { useTheme } from "../components/ThemeProviderComponent";

const Service = () => {
  // const { themeMode } = useTheme();
  return (
    <section id="tech" className="px-18  mx-auto py-20">
      {/* Container */}
      <div className="">
        {/* CARDS */}
        <div className="flex justify-center items-center flex-col mt-2">
          <h1
            data-aos="slide-left"
            data-aos-duration="3000"
            className="text-[30px] md:text-[36px] font-extrabold text-sky-500 "
          >
            Our Services
            {/* <span className="text-orange-700"> features</span> */}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-center ml-[10%] mr-[10%] mt-[60px]">
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                <ImDatabase className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Virtual Book-Keeping
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                {" "}
                <ImKey className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Tax filling & Advisory
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center mt-4"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                {" "}
                <ImEqualizer className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Scheduled Financial
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                {" "}
                <ImCalendar className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Control process evaluation and designing
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center -mt-6"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                {" "}
                <ImAddressBook className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Data Analytics
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center mt-4"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                {" "}
                <ImStatsDots className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Business Strategy
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 text-center ml-[10%] mr-[10%] mt-[20px]">
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                <ImTerminal className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Scalability and Customization
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="3000"
              className="flex flex-col gap-3 items-center justify-center mt-4"
            >
              <div className="bg-sky-300 p-4 rounded-2xl">
                {" "}
                <ImShrink className="w-[35px] h-[35px] text-white" />
              </div>
              <div className="font-extrabold text-[1.3rem] text-sky-500">
                Management Reporting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
