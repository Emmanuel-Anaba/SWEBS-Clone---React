import Card from "../../components/Card";
import Img1 from "../../assets/images/ugo.webp";
import Img2 from "../../assets/images/tosin.webp";
import Img3 from "../../assets/images/precious.webp";

const KeyPartners = () => {
  const Partners = [
    {
      img: Img1,
      name: "Ugochi Onyenaucheya",
      position: "CEO, Swebs Limited",
    },
    {
      img: Img2,
      name: "Tosin Oguntunde",
      position: "Founder, OpportunityGist",
    },
    {
      img: Img3,
      name: "Precious Uche",
      position: "CreditSafe(UK), Software Engineer",
    },
  ];

  return (
    <section className="bg-[#bdd2fc] dark:bg-[#1e4fb0] pt-4 pb-8">
      <p className="text-center text-3xl mb-4 font-medium">Our Key Partners</p>
      <div className="myContainer grid md:grid-cols-3 gap-4 lg:gap-10">
        {Partners.map((item) => (
          <Card
            key={item.name}
            className="text-center rounded-lg border-[#f0f5ff] dark:border-[#1c5bd9] border-[1px] my-auto">
            <img
              className="mx-auto"
              src={item.img}
              alt="partners"
              width="100%"
            />
            <div className="bg-[#f0f5ff] py-2 dark:bg-[#1c5bd9]">
              <p className="font-medium text-xl">{item.name}</p>
              <span className="line-b4 pl-12 before:w-10 before:bg-[#1c5bd9] dark:before:bg-[#f0f5ff]">
                {item.position}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyPartners;
