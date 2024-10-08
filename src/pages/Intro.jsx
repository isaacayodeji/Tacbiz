/* eslint-disable react/no-unescaped-entities */
import AnimationBoxes from "../features/AnimationBox";
import IntoImage from "../images/choosing-right-strategy.jpg";



const Intro = () => {
  return (
    <section >
     
      <div id="home" className="px-20 max-w-[1860px] mx-auto pb-10 w-[100%]">
      <AnimationBoxes />
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center lg:w-[100%] gap-6 pt-20 max-sm:-mx-20">
          <div className="space-y-4">
            <h2 className="lg:text-5xl text-3xl font-bold flex-wrap xl:w-[70%] pb-8">
              Your Strategic Partner for Financial Solution{" "}
            </h2>
            <button className="bg-sky-500 text-white p-4 rounded-full">
              Book an Appointment
            </button>
            <div className="pt-6 lg:w-[70%]">
              <hr />
              <p>
                Helping companies provide financial expertise to small and
                medium businesses in every industry.
              </p>
            </div>
          </div>
          <div className="">
            <img className="rounded-2xl " src={IntoImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
