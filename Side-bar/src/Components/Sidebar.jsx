/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
];
const Sidebar = ({ children }) => {
  return (
    <div className="main-container">
      <motion.div animate={{ width: "200px" }} className="sidebar">
        <section className="routes">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              <div className="icon">{route.icon}</div>
              <div className="link_text">{route.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
