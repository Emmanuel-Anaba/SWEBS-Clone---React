import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../assets/images/home-a.webp";
import bg2 from "../../assets/images/home-b.webp";
import bg3 from "../../assets/images/home-c.webp";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Header = () => {
  const slider = [
    { id: crypto.randomUUID(), bg: bg1 },
    { id: crypto.randomUUID(), bg: bg2 },
    { id: crypto.randomUUID(), bg: bg3 },
  ];

  return (
    <>
      <header className="h-[90svh] bg-slate-600" id="home">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper h-full">
          {slider.map((item) => (
            <SwiperSlide
              key={item.id}
              className="h-full"
              style={{ backgroundImage: `url(${item.bg})` }}>
              <div className="myContainer">
                <div className="absolute top-[20%]">
                  <p className="text-6xl font-medium">
                    Kickstart Your Career <br /> In Tech
                  </p>
                  <Link className="btn bg-[#1e4fb0] mt-8" to={item.link}>
                    Apply
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </>
  );
};

export default Header;
