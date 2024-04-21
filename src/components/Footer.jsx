import bg from "../assets/images/footer_bg.png";
import logo from "../assets/images/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      link: "link to ",
    },
    {
      icon: <FaInstagram />,
      link: "link to ",
    },

    {
      icon: <FaTwitter />,
      link: "link to ",
    },
    {
      icon: <FaWhatsapp />,
      link: "link to ",
    },
    {
      icon: <FaGooglePlusG />,
      link: "link to ",
    },
  ];
  return (
    <>
      <footer
        className="text-[#f0f5ff]"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="myContainer grid md:grid-cols-3 py-8 gap-4 md:gap-0">
          <img src={logo} alt="logo" />
          <div className="md:col-start-3 grid place-items-center md:block">
            <p className="font-medium text-lg">Contact Us</p>
            <p>Need help or have a question?</p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
              info@swebsinstitute.com
            </p>
            {/* Socials */}
            <div className="pt-2 flex items-center gap-4">
              {socials.map(({ link, icon }) => (
                <a key={link} href={link}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#f0f5ff] text-center py-2">
          Copyright &copy; {new Date().getFullYear()} Swebs Institute
        </div>
      </footer>
    </>
  );
};

export default Footer;
