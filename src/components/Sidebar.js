import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export const Sidebar = () => {
  return (
    <aside
      className="sidebar-left border-right shadow"
      id="leftSidebar"
      data-simplebar
    >
      <a
        href="#"
        className="btn collapseSidebar toggle-btn d-lg-none  ml-2 mt-3"
        data-toggle="toggle"
      >
        <i className="fe fe-x">
          <span className="sr-only"></span>
        </i>
      </a>
      <nav className="vertnav navbar navbar-light">
        <div className="w-100 mb-4 d-flex sidebar-logo">
          <a
            className="navbar-brand mx-auto mt-2 flex-fill text-center"
            href="index.html"
          >
            <img src={Logo} />
          </a>
        </div>
        <ul className="navbar-nav flex-fill w-100 mb-2">
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-home fe-16"></i>
              <span className="ml-1 item-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-user fe-16"></i>
              <span className="ml-1 item-text">Users</span>
            </NavLink>
            <li className="nav-item">
            <NavLink
              to="/Vouchers"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-user fe-16"></i>
              <span className="ml-1 item-text">Vouchers</span>
            </NavLink>
          </li>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
