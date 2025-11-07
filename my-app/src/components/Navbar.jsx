import React, { useState } from 'react';
import shoppingBag from '../assets/Navbar/shoppingBag.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");

  // Menu items only for existing pages
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Web Design", path: "/web" },
    { name: "PPC Package", path: "/ppc" },
    { name: "SEO Plan", path: "/seo" },
    { name: "Social Media", path: "/social" },
    { name: "Graphics", path: "/graphics" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm #FEFFFF fixed w-full z-50 max-w-[1500px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setActive(item.name)}
                    className={`font-medium ${active === item.name ? 'text-[#FF6A00]' : 'text-black'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Get A Quote only for small screen */}
              <li className="block lg:hidden mt-2">
                <Link
                  to="/quote"
                  onClick={() => setActive("Get A Quote")}
                  className="btn h-[39px] w-full bg-[#FF6A00] text-white rounded-xl"
                >
                  Get A Quote
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl">
            RR <span className="text-[#FF6A00]">Softech</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setActive(item.name)}
                  className={`font-medium ${active === item.name ? 'text-[#FF6A00]' : 'text-black'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get A Quote only visible on large screens */}
        <div className="navbar-end hidden lg:flex">
          <img className="mr-3" src={shoppingBag} alt="Shopping Bag" />
          <Link to="/quote" className="btn h-[39px] w-[148px] bg-[#FF6A00] text-white rounded-xl">
            Get A Quote
          </Link>
        </div>
      </div>

      {/* Optional spacing so content isn't hidden behind the navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
