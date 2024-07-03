"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import { handleClientScriptLoad } from "next/script";

type Props = {};

const Navbar = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="w-100 py-2 bg-secondary">
      <Container className="flex justify-between items-center">
        {/* big menu */}
        <div className="main-nav lg:block hidden">
          <ul className="flex gap-10 text-[16px] font-semibold">
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* search bar and hamburger */}
        <div className="sub-nav lg:w-auto w-full flex gap-6 justify-between items-center">
          {/* search */}
          <form className="flex items-center max-w-sm llg:mx-auto">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border-2 ring-gray-100 focus:ring-2 p-3 text-gray-900 text-sm rounded-lg rounded-r-none"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="p-3.5 text-sm font-medium text-white bg-primary rounded-lg rounded-l-none"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          <div
            className="hamburger bg-primary w-fit h-fit p-1 rounded-md lg:hidden block"
            onClick={toggleMenu}
          >
            <IoMenu size="36" color="white" />
          </div>
        </div>
      </Container>

      {showMenu && (
        <>
          {/* overlay */}
          <div className="overlay fixed top-0 left-0 h-screen w-screen bg-black opacity-70 z-10"></div>

          {/* side menu */}
          <div className="side-menu fixed top-0 right-0 h-screen w-[90%] max-w-[350px] z-20 bg-white">
            {/* header */}
            <div className="header bg-primary min-h-[70px] px-4 w-full flex items-center justify-between ">
              <h2 className="text-white text-2xl">
                <Link href="/">
                  {/* <Image src="/assets/zuventus.png" alt="Zuventus" height="60" width="130" />
                   */}
                  Company Logo
                </Link>
              </h2>

              <button className="closs-menu" onClick={() => toggleMenu()}>
                <RxCross2 size={"30"} className="text-secondary" />
              </button>
            </div>

            {/* side-menu nav */}
            <ul className="side-menu-nav flex flex-col w-full">
              <Link
                href="/products"
                className="text-lg"
                onClick={() => setShowMenu(false)}
              >
                <li className="hover:bg-secondary p-4 flex items-center justify-between">
                  Products
                  <GoArrowUpRight size={30} />
                </li>
              </Link>
              <Link
                href={"/about"}
                className="text-lg"
                onClick={() => setShowMenu(false)}
              >
                <li className="hover:bg-secondary p-4 flex items-center justify-between">
                  About us
                  <GoArrowUpRight size={30} />
                </li>
              </Link>
              <Link
                href={"/about"}
                className="text-lg"
                onClick={() => setShowMenu(false)}
              >
                <li className="hover:bg-secondary p-4 flex items-center justify-between">
                  Contact Us
                  <GoArrowUpRight size={30} />
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
