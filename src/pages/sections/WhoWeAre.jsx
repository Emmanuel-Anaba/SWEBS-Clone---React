import Img from "../../assets/images/about.webp";
import bg1 from "../../assets/images/bg-1.jpg";

const WhoWeAre = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white text-white pt-4 pb-8"
        style={{ backgroundImage: `url(${bg1})` }}>
        <div className="myContainer grid md:grid-flow-col md:grid-cols-2 place-items-center gap-8 py-8">
          <img src={Img} className="rounded-lg shadow-lg md:w-[80%]" alt="us" />
          <div>
            <p className="line-b4 pl-12 before:w-10 before:bg-white text-2xl lg:text-3xl font-medium">
              Who We Are
            </p>
            <p className="lg:text-xl">
              Swebs Institute&apos;s vision is simple yet ambitious – to create
              a world-class learning ecosystem that nurtures the next generation
              of exceptional software engineers. We envision a place where
              aspiring talents, regardless of their background, can unlock their
              full potential and become industry-leading software engineers
              equipped with the skills and mindset needed to thrive in
              today&apos;s technology-driven world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
