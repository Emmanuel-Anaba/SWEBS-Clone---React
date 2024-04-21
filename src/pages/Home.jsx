import Header from "./sections/Header";
import Courses from "./sections/Courses";
import WhoWeAre from "./sections/WhoWeAre";
import PillarsOfExcellence from "./sections/PillarsOfExcellence";
import Testimonials from "./sections/Testimonials";
import CountCards from "./sections/CountCards";
import KeyPartners from "./sections/KeyPartners";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <Courses />
        <WhoWeAre />
        <PillarsOfExcellence />
        <Testimonials />
        <CountCards />
        <section className="bg-[#5f93fa] dark:bg-[#2667eb]">
          <div className="myContainer py-16 grid md:grid-cols-5 gap-8 md:gap-0">
            <p className="text-4xl md:text-5xl font-medium text-dark col-span-3">
              Do you want to learn how to code?
              <br />
              Join the next cohort now
            </p>
            <Link to={"app"} className="btn col-span-2 mr-auto md:m-auto bg-[#1e4fb0]">
              Apply Now
            </Link>
          </div>
        </section>
        <KeyPartners />
      </main>
    </>
  );
};

export default Home;
