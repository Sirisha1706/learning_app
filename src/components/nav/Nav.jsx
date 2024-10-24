import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            {/* Second Task */}
            <Link to="/">
              <img
                className={style.logo}
                src="https://img.freepik.com/premium-vector/young-woman-writing-code-desktop-computer-software-developer-work-programming_625536-3104.jpg"
                alt="logo"
              />
            </Link>
            <h4>Learn Programming</h4>
          </div>
          <div className={style.nav_details}>
            <button>
               {/* Second Task */}
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
