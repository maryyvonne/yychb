import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarNavItems } from "./SidebarNavItems";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { routes } from "../../utils/routes/Routes";
// import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.scss";
import '../../App.css'



const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = SidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <ProSidebar className="sidebar text-decoration-none text-white text-bold">
      <SidebarHeader className="sidebar__logo text-center ">
        <h4>Navigation</h4>
      </SidebarHeader>
      <SidebarContent>
        <Menu ref={sidebarRef} className="sidebar__menu ">
          {SidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div
                className={`sidebar__menu__item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="text-decoration-none text-white text-bold ">
                  <div className="sidebar__menu__item__icon">{item.icon}</div>
                  <div className="sidebar__menu__item__text">
                    {item.display}
                  </div>
                  <br />
                </div>
              </div>
            </Link>
          ))}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Sidebar;
