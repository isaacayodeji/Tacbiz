import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="text-left">
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "40px",
            left: "50px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
          }}
          className="text-sky-500"
          onClick={scrollUp}
        >
          <FaArrowAltCircleUp/>
        </button>
      )}
    </div>
  );
};
export default BackToTop;