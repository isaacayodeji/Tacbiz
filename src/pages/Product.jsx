import AnimationBoxes from "../features/AnimationBox";
import { useTheme } from "../components/ThemeProviderComponent";
import Image from "../images/man-pointing-tablet.jpg"

const Product = () => {
  // const cards = [
  //   {
  //     id: 1,
  //     title: "Abc Bank App",
  //     description:
  //       " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //     stacks: "Html, tailwind, react, javascript",
  //     image: BankApp,
  //     liveLink: "#live",
  //     github: "#github",
  //   },
  //   {
  //     id: 2,
  //     title: "Backroad Travels",
  //     description:
  //       " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //     stacks: "Html, tailwind, react, javascript",
  //     image: image,
  //     liveLink: "#live",
  //     github: "#github",
  //   },
  //   {
  //     id: 3,
  //     title: "Conform store",
  //     description:
  //       " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //     stacks: "Redux, tailwind, react, javascript",
  //     image: ComfortStore,
  //     liveLink: "#live",
  //     github: "#github",
  //   },
  //   {
  //     id: 4,
  //     title: "Bank App",
  //     description:
  //       " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //     stacks: "Html, tailwind, react, javascript",
  //     image: image,
  //     liveLink: "#live",
  //     github: "#github",
  //   },
  //   {
  //     id: 5,
  //     title: "Xpress payment website",
  //     description:
  //       " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //     stacks: "Nextjs, tailwind, react, javascript",
  //     image: image,
  //     liveLink: "#live",
  //     github: "#github",
  //   },
  //   {
  //     id: 6,
  //     title: "Cartsy Medicine store",
  //     description:
  //       " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //     stacks: "Redux, tailwind, react, javascript",
  //     image: CartyMedicine,
  //     liveLink: "#live",
  //     github: "#github",
  //   },
  // ];
  const { themeMode } = useTheme();
  return (
    <>
      <section id="project" className="lg:p-20  max-w-[1860px] mx-auto">
      <AnimationBoxes />
        <div className="lg:px-10 flex flex-col space-y-10">
          {/* Heading */}
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="text-center space-y-2"
          >
            <h2 className="font-bold text-[30px] md:text-[36px] text-sky-500">
              Product
            </h2>
            <p
              className={`${
                themeMode === "dark" ? "text-white" : "text-[#666666]"
              }`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              labore iste impedit ipsa natus 
            </p>
          </div>
          {/* CARD CONTAINER */}
          <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
            >
              <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-sky-500">
                <p>Reckip accounting software</p>
              </h1>
              {/* <p className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
                 Join us for fast, secure collections.
             </p> */}
            </div>
            <div className="flex">
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="bg-sky-200 h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
              >
                <img
                  className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
                  src={Image}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
            <div className="flex">
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="bg-sky-200 h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
              >
                <img
                  className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
                  src={Image}
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
            >
              <h1 className="text-[2rem] md:text-[2.2rem] font-extrabold text-sky-500">
                <p>Xtafpey – Automated payroll solution</p>
              </h1>
              {/* <p className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
                 Join us for fast, secure collections.
             </p> */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
            >
              <h1 className="text-[2rem] md:text-[2.2rem] font-extrabold text-sky-500">
                <p>Inventory Management Solution</p>
              </h1>
              {/* <p className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
                 Join us for fast, secure collections.
             </p> */}
            </div>
            <div className="flex">
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="bg-sky-200 h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
              >
                <img
                  className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
                  src={Image}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-[100px] ml-7 mr-7 justify-between gap-[50px] aos-animinate">
            <div className="flex">
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="bg-sky-200 h-[280px] w-[280px] md:h-[380px] md:w-[380px] rounded-[100%] p-5  m-auto md:m-0 flex items-center justify-center"
              >
                <img
                  className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-[100%] object-cover"
                  src={Image}
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="flex flex-col gap-3 justify-center w-[100%] md:w-[50%]"
            >
              <h1 className="text-[2rem] md:text-[2.2rem] font-extrabold text-sky-500">
                <p>Cash requisition confirmation solution.</p>
              </h1>
              {/* <p className="text-[1rem] md:text-[1.2rem] w-[100%] flex">
                 Join us for fast, secure collections.
             </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
