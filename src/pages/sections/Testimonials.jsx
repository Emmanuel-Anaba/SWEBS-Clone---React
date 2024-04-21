import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Card from "../../components/Card";
import Img1 from "../../assets/images/alex.webp";
import Img2 from "../../assets/images/emily.webp";
import Img3 from "../../assets/images/joy.webp";
import Img4 from "../../assets/images/nathaniel.webp";
import "swiper/css";

const Testimonials = () => {
  const Pillars = [
    {
      id: crypto.randomUUID(),
      img: Img1,
      name: "Alex I. Harrison",
      position: "Software Engineer, DEV World Inc.",
      mainText:
        "The best learning environment ever. Emphasis on creativity, innovation, and support from leading tech companies, including partnerships with GlobalTech Solutions, created a pathway to success. I'm thriving in my career, all thanks to this program.",
    },
    {
      id: crypto.randomUUID(),
      img: Img2,
      name: "Uchechi Williams",
      position: "React Developer, TechMesh Inc.",
      mainText:
        "Top-notch academics and industry veterans, including Professor Anderson, provided valuable insights. Real-world projects honed my skills. Transitioning from student to professional was seamless.",
    },
    {
      id: crypto.randomUUID(),
      img: Img3,
      name: "Joy Adedeji",
      position: "Data Analyst, CyberSpace Corps.",
      mainText:
        "The commitment to staying abreast of industry trends sets this program apart. A collaboration-driven campus and state-of-the-art labs made learning engaging. Strategic partnerships with companies like InnovateTech secured a fantastic job post-graduation.",
    },
    {
      id: crypto.randomUUID(),
      img: Img4,
      name: "Nathaniel Dike",
      position: "Database Admin, Innovate Ltd.",
      mainText:
        "Enrolling at this institution was a game-changer. The dynamic curriculum, hands-on projects, and experienced instructors, particularly Professor Johnson, prepared me for the tech industry. I now feel ready for real-world challenges.",
    },
  ];

  return (
    <section className="bg-slate-300 dark:bg-slate-700 pt-4 pb-8">
      <p className="text-center text-3xl font-medium">Testimonials</p>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        centeredSlides={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-full myContainer py-10 grid place-items-center">
        {Pillars.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className="border-[#1e4fb0] dark:border-[#bdd2fc] border-[1px] rounded-lg p-4 grid gap-2 shadow-[#92b6fc]x">
              <p>{item.mainText}</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt="students"
                  className="rounded-full w-[20%]"
                />
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p>{item.position}</p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
