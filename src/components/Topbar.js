import React, { useEffect } from 'react';
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Topbar = ({ toggleSidebar }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    let logoutTimer;
    const handleLogout = () => {
      localStorage.clear();
      navigate("/auth/login");
    };

    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(handleLogout, 2 * 60 * 1000); // 2 minutes in milliseconds
    };

    const handleUserActivity = () => {
      resetLogoutTimer();
    };

    // Initial setup of the logout timer and event listeners
    resetLogoutTimer();
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    // Cleanup function to remove event listeners
    return () => {
      clearTimeout(logoutTimer);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
    };
  }, [navigate]);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <nav className="topnav navbar navbar-light">
      <button
        type="button"
        className={`navbar-toggler mt-2 p-0 mr-3 collapseSidebar ${window.innerWidth > 992 ? 'disable-button' : ''
          }`}
        onClick={toggleSidebar}
      >
        <i className="fe fe-menu navbar-toggler-icon"></i>
      </button>
      {/* <form className="form-inline mr-auto searchform">
        <input
          className="form-control mr-sm-2 border-0"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form> */}
      <ul className="nav top-nav-right text-right">
        {/* <li className="nav-item">
            <a className="nav-link" href="#" id="modeSwitcher" data-mode="dark">
              <img src={SettingIcon} alt="" />
            </a>
          </li>
          <li className="nav-item nav-notif">
            <a className="nav-link" href="./#" data-toggle="modal" data-target=".modal-notif">
              <img src={NotiIcon} alt="" />
            </a>
          </li> */}
        <NavDropdown
          className="avatar"
          title={
            <span className="avatar avatar-sm mt-2">{user.firstName}</span>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </ul>
    </nav>
  );
};
