import BackToTop from "../components/backToTop";
import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Product from "./Product";
import Service from "./Services";

const Home = () => {
  return (
    <section className="p-4">
      <Intro />
      <About />
      <Service />
      <Product />
      <Contact />
      <BackToTop/>
    </section>
  );
};
export default Home;
