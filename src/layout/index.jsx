import Home from "../pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <div className="h-screen w-[100%] grid grid-rows-[4rem_1fr_auto]">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
};
export default Layout;
