import Img1 from "../../assets/images/curriculum.webp";
import Img2 from "../../assets/images/expert_faculty.webp";
import Img3 from "../../assets/images/infrastructure.webp";
import Img4 from "../../assets/images/partnership.webp";
import Card from "../../components/Card";

const PillarsOfExcellence = () => {
  const Pillars = [
    {
      id: crypto.randomUUID(),
      img: Img1,
      headText: "Cutting-Edge Curriculum",
      mainText:
        "Our evolving curriculum, attuned to the latest industry trends and technological advancements, provides students with hands-on experience through real-world projects. This approach ensures they acquire the skills necessary to seamlessly transition into their professional roles upon graduation.",
    },
    {
      id: crypto.randomUUID(),
      img: Img2,
      headText: "Expert Faculty",
      mainText:
        "Our team, a blend of industry veterans and top-notch academics, is passionate about teaching and empowering the next generation of software engineers. Their wealth of practical knowledge creates a dynamic classroom experience, ensuring students receive valuable insights for their future careers",
    },
    {
      id: crypto.randomUUID(),
      img: Img3,
      headText: "State-of-the-Art Infrastructure",
      mainText:
        "Substantial investment has gone into crafting a contemporary and invigorating learning space. Our labs boast state-of-the-art software development tools and technologies, fostering an environment that nurtures collaboration, creativity, and innovation on our campus.",
    },
    {
      id: crypto.randomUUID(),
      img: Img4,
      headText: "Strong Industry Partnerships",
      mainText:
        "Our strong partnerships with top technology companies guarantee valuable benefits for students—internship access, mentorship programs, and enhanced job placement opportunities. This strategic collaboration markedly enhances their chances of success in the dynamic job market.",
    },
  ];

  return (
    <section className="bg-[#bdd2fc] dark:bg-[#1e4fb0] pt-4 pb-8">
      <p className="text-center text-3xl mb-4 font-medium">
        Our Pillars of Excellence
      </p>
      <div className="myContainer grid md:grid-cols-4 gap-4 lg:gap-5">
        {Pillars.map((item) => (
          <Card key={item.id} className="rounded-lg bg-[#f0f5ff] dark:bg-[#1c5bd9]">
            <img src={item.img} alt="about" width="100%" />
            <div className="p-3">
              <p className="line-b4 pl-12 before:w-10 dark:before:bg-[#bdd2fc] before:bg-[#1c5bd9] font-medium text-lg line-b4 flex items-center">
                {item.headText}
              </p>
              <p>{item.mainText}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PillarsOfExcellence;
