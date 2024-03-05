import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Cikka_Logo_Dashboard.png";

export const Sidebar = ({ isCollapsed, closeSidebar }) => {
  return (
    <aside
      className={`sidebar-left border-right shadow ${isCollapsed ? 'collapsed' : ''}`}
      id="leftSidebar"
      data-simplebar
    >
      <a
        className="btn collapseSidebar toggle-btn d-lg-none  ml-2 mt-3"
        data-toggle="toggle"
        onClick={closeSidebar}
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
          </li>
          <li className="nav-item">
            <NavLink
              to="/Vouchers"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-gift fe-16"></i>
              <span className="ml-1 item-text">Vouchers</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Merchants"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-framer fe-16"></i>
              <span className="ml-1 item-text">Merchants</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Purchases"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-shopping-cart fe-16"></i>
              <span className="ml-1 item-text">Purchases</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Transactions"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-dollar-sign fe-16"></i>
              <span className="ml-1 item-text">Transactions</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/BusinessCategories"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-briefcase fe-16"></i>
              <span className="ml-1 item-text">Business Categories</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Categories"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-shopping-bag fe-16"></i>
              <span className="ml-1 item-text">Categories</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Industries"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-trello fe-16"></i>
              <span className="ml-1 item-text">Industries</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Countries"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-globe fe-16"></i>
              <span className="ml-1 item-text">Countries</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/States"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-map fe-16"></i>
              <span className="ml-1 item-text">States</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Cities"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-map-pin fe-16"></i>
              <span className="ml-1 item-text">Cities</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Documents"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-file fe-16"></i>
              <span className="ml-1 item-text">Documents</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Events"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-calendar fe-16"></i>
              <span className="ml-1 item-text">Events</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-tool fe-16"></i>
              <span className="ml-1 item-text">Services</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/ListtedBusiness"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-command fe-16"></i>
              <span className="ml-1 item-text">Listted Business</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/notification-templates"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-bell fe-16"></i>
              <span className="ml-1 item-text">Notification Templates</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/notification-triggers"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fe fe-bell fe-16"></i>
              <span className="ml-1 item-text">Notification Triggers</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
