import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
