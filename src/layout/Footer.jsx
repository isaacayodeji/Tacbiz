/* eslint-disable no-unused-vars */
import Github from "../images/github.svg";
import Linkedin from "../images/linkdin.svg";
import Twitter from "../images/twitter.svg";
import { animateScroll as scroll, scroller } from "react-scroll";
import { useTheme } from "../components/ThemeProviderComponent";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const { themeMode } = useTheme();
  return (
    <footer className="px-6">
      <div className="flex border-b-2 justify-between p-6">
        <h2 className="font-bold text-[1.2rem] text-sky-500 max-md:hidden">
          Tacbiz
        </h2>
        <div className="flex md:flex-row flex-col gap-6 lg:gap-10">
          <a href="mailto:+(234) 81689 55109">+2348032111020 </a>
          <a href="mailto:saacayodejiewulotan@gmail.com">tacbizng@gmail.com</a>
          <div className="flex justify-between gap-3">
            <a
              className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
              href="https://github.com/isaacayodeji"
              target="_blank"
            >
              <img src={Github} alt="github" />
            </a>
            <a
              className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
              href="https://www.linkedin.com/in/ayodeji-olu-ewulo-a964b924b/"
              target="_blank"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a
              className="icons rounded-[50%] hover:bg-sky-500 hover:scale-90 hover:translate-y-1"
              href="#"
              target="_blank"
            >
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between md:flex-row flex-col gap-y-4 ">
          <ul
            className={`flex justify-between gap-4  ${
              themeMode === "dark" ? " text-white" : "text-[#666666]"
            } `}
          >
            <li className="cursor-pointer">
              <a
                onClick={() => {
                  scrollTo("home");
                }}
                href="/#home"
              ></a>
              Home
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => {
                  scrollTo("about");
                }}
                href="/#about"
              >
                About
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => {
                  scrollTo("tech");
                }}
                href="/#tech"
              >
                Service
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => {
                  scrollTo("project");
                }}
                href="/#project"
              >
                Product
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => {
                  scrollTo("contact");
                }}
                href="/#contact"
              >
                Contact us
              </a>
            </li>
          </ul>
          <h2>
            Designed and built by{" "}
            <a
              href="https://www.instagram.com/zeekq_?igsh=cXg1bHF5ZGd0ZG5m"
              target="_blank"
              className="text-sky-500"
            >
              Isaac Ayodeji
            </a>{" "}
            with Love & Coffee
          </h2>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
