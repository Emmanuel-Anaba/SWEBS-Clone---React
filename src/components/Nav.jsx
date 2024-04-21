import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import {
  FaHome,
  FaRegClock,
  FaUser,
  FaSun,
  FaMoon,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaGooglePlusG,
} from "react-icons/fa";
import { close, menu } from "ionicons/icons";

const Nav = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    // localStorage.setItem("color-theme", "dark");
    document.body.classList.toggle("dark");
  };

  // useState to control the Navbar
  const [open, setOpen] = useState(false);

  // A way to easily add navLinks by mapping out stuff from this array
  const navLinks = [
    {
      icon: <FaHome />,
      name: "Home",
      type: "link",
      link: "/#home",
    },
    {
      icon: <FaUser />,
      name: "About",
      type: "link",
      link: "/#about",
    },
    { name: "Apply", type: "btn", link: "/apply" },
  ];

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
      <div className="bg-[#f0f5ff] dark:bg-slate-700 text-sm">
        <div className="myContainer py-1 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-4">
            <FaRegClock />
            <p>MON - SAT: 9AM - 4PM</p>
            <p>SUN: CLOSED</p>
          </div>
          <div className="flex gap-3 md:gap-4">
            {socials.map(({ link, icon }) => (
              <a href={link} key={link}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <nav
        className={`shadow-md w-full sticky top-0 bg-[#d9e5fc] text-[#1e4fb0] h-[60px] grid place-items-center z-20 border-[#2667eb] transition-all duration-500 ${
          open ? "border-b-[1px] " : "border-b-0"
        }`}>
        <div className="flex items-center justify-between md:myContainer w-full relative px-3 md:p-0">
          {/* Logo */}
          <img src={Logo} className="h-10" />

          <div className="flex items-center gap-6">
            <div className="cursor-pointer" onClick={() => darkModeHandler()}>
              {dark && <FaSun />}
              {!dark && <FaMoon />}
            </div>

            {/* ToggleBtn */}
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl cursor-pointer md:hidden grid">
              <IonIcon icon={open ? close : menu}></IonIcon>
            </div>

            {/* NavLinks */}
            <ul
              className={`bg-[#d9e5fc] md:flex md:items-center md:pb-0 md:static md:z-auto absolute z-[-1] left-0 w-full md:w-auto p-3 md:p-0 grid gap-4 transition-all duration-500 md:duration-0 ease-in ${
                open ? "top-[50px] " : "top-[-490px]"
              }`}>
              {navLinks.map(({ icon, name, link, type }) => {
                if (type !== "btn") {
                  return (
                    <li key={name}>
                      <a href={link} className="flex items-center gap-1">
                        {icon}
                        {name}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={name}>
                    <Link className="btn text-sm bg-[#1e4fb0]" to={link}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
