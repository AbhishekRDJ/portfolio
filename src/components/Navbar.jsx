import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, Logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97]`}
    >
      <div className="flex justify-between items-center mx-auto w-full max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex items-center h-[50px] overflow-hidden">
            <img
              src={Logo}
              alt="logo"
              className="w-[150px] object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-8 list-none">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[18px] font-medium font-mova 
                uppercase tracking-[2px] cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(true)}
          />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-flashWhite shadow-lg z-50 transform transition-transform duration-300 ${toggle ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <img
              src={close}
              alt="close"
              className="w-[22px] h-[22px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-6 px-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                  } text-[20px] font-bold font-arenq uppercase cursor-pointer`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Background Overlay (click to close) */}
        {toggle && (
          <div
            className="z-40 fixed inset-0 bg-black bg-opacity-30"
            onClick={() => setToggle(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
