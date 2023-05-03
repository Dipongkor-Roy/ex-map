import React from "react";
import { Link, Outlet } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <img
            className="btn btn-ghost normal-case text-xl"
            src="https://cdn-icons-png.flaticon.com/512/10552/10552114.png "
            width="80"
            height="100"
            alt=""
            title=""
            class="img-small"
          ></img>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <Link to='/'>
                Topics
              </Link>
              {/* <ul className="p-2 bg-base-100">
                <li>
                  <Link to='/react'>React</Link>
                </li>
                <li>
                  <Link to='/javaScript'>JavaScript</Link>
                </li>
                <li>
                  <Link to='/css'>CSS</Link>
                </li>
                <li>
                  <Link to='/github'>Git</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link to='/statics'>Statics</Link>
            </li>

            <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <Outlet></Outlet>
      </section>
     
    </div>
  );
};

export default NavBar;
