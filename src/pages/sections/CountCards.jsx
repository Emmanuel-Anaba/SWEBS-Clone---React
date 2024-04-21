import Card from "../../components/Card";

const CountCards = () => {
  const cardContent = [
    { h: "237", p: "Students" },
    { h: "102", p: "Working Students" },
    { h: "11", p: "Instructors" },
    { h: "9", p: "Partners" },
  ];

  return (
    <section className="bg-[#bdd2fc] dark:bg-[#1e4fb0] text-white pt-4 pb-8">
      <div className="myContainer grid md:grid-cols-4 gap-4 lg:gap-8 relative bottom-10">
        {cardContent.map((item) => (
          <Card
            key={item.h}
            className="rounded-md grid place-items-center bg-[#ffac05] p-8">
            <p className="text-3xl font-medium">{item.h}</p>
            <p className="text-base">{item.p}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CountCards;
