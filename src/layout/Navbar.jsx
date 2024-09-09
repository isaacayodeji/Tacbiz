/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
// import Github from "../images/github.svg";
// import Linkedin from "../images/linkdin.svg";
import Tacbiz from "../images/tacbliz.png";
import TacbizDark from "../images/tacbliz-dark.png";
import { DarkMode, LightMode } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { animateScroll as scroll, scroller } from "react-scroll";
import saveAs from "file-saver";
import { useTheme } from "../components/ThemeProviderComponent";

const Navbar = () => {
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

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };
  const { themeMode, toggleTheme } = useTheme();
  // console.log(themeMode, toggleTheme());
  const { pathname } = useLocation;
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      {/* <motion.div
        variants={menuVars}
        initial="initial"
        animate="animate"
        exit={"exit"}
      > */}
      <div
        className={`lg:hidden block absolute top-16 w-full left-0 right-0 ${
          themeMode === "dark" ? "bg-black" : "bg-white"
        } dark:!bg-[#050505d24] transition`}
      >
        <ul className="text-center  text-xl p-20">
          <a
            onClick={() => {
              scrollTo("home");
            }}
            href="/#home"
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Home
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("about");
            }}
            href="/#about-us"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              About
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("tech_stack");
            }}
            href="/#tech"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Tech stack
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("contact");
            }}
            href="/#contact"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Contact
            </li>
          </a>
          <a
            onClick={() => {
              scrollTo("project");
            }}
            href="/#project"
            target=""
          >
            <li
              onClick={handleClick}
              className="my-4 py-4 border-b border-x-slate-800 hover:rounded"
            >
              Project
            </li>
          </a>
        </ul>
      </div>
      {/* </motion.div> */}
    </>
  );
  return (
    <div className="flex top-0 z-50 bg-opacity-55 ">
      <section
        className={`p-4  w-full text-center ${
          themeMode === "dark" ? "bg-[#33332866]" : "bg-white"
        } fixed `}
      >
        <navbar className="flex justify-between items-center ">
          {/* <h2 className="font-bold text-[1.2rem] text-sky-500">Tacbiz</h2> */}
          <img src={`${themeMode === "dark" ? TacbizDark : Tacbiz}`} alt="" />
          <ul
            className={`flex justify-between gap-4 ${
              themeMode === "dark" ? " text-white" : "text-[#666666]"
            }  max-md:hidden`}
          >
            <li className={`${themeMode === "dark" ? "hover:text-sky-200" : "hover:text-black"}  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("home");
                }}
                href="/#home"
              >
                Home
              </a>
            </li>
            <li className={`${themeMode === "dark" ? "hover:text-sky-200" : "hover:text-black"}  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("about");
                }}
                href="/#about"
              >
                About
              </a>
            </li>
            <li className={`${themeMode === "dark" ? "hover:text-sky-200" : "hover:text-black"}  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("tech");
                }}
                href="/#tech"
              >
                Services
              </a>
            </li>
            <li className={`${themeMode === "dark" ? "hover:text-sky-200" : "hover:text-black"}  hover:translate-y-1 `}>
              <a
                onClick={() => {
                  scrollTo("project");
                }}
                href="/#project"
              >
                product
              </a>
            </li>
            <li className={`${themeMode === "dark" ? "hover:text-sky-200" : "hover:text-black"}  hover:translate-y-1 `}>
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
          <div className="flex gap-4 max-md:hidden">
            <button onClick={toggleTheme}>
              {themeMode === "dark" ? <LightMode /> : <DarkMode />}
            </button>
          </div>
          <>{click && content}</>
          <button onClick={toggleTheme} className="md:hidden">
            {themeMode === "dark" ? <LightMode /> : <DarkMode />}
          </button>
          <button
            className="block md:hidden transition w-[10]"
            onClick={handleClick}
          >
            {click ? (
              <FaTimes className="text-sky-500" />
            ) : (
              <CiMenuBurger className="text-sky-500" />
            )}
          </button>
        </navbar>
      </section>
    </div>
  );
};
export default Navbar;
