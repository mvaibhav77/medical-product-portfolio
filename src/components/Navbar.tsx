"use client";

import Link from "next/link";
import React, { ReactEventHandler, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import Container from "./Container";
import { RxCross2 } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import Data from "../data/products.json";
import { Product } from "@/types/product";
import { Card, List, ListItem, ThemeProvider } from "@material-tailwind/react";
import Logo from "../assets/logo.png";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState<Product[]>(Data);
  const [isInputFocused, setIsInputFocused] = useState(false); // Track input focus state

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value.toLowerCase()); // Convert search term to lowercase for case-insensitive search
  };

  const handleInputFocus = (event: any) => {
    setIsInputFocused(true); // Set focus state when input receives focus
  };

  const handleInputBlur = (event: any) => {
    setTimeout(() => {
      setIsInputFocused(false);
    }, 500);
  };

  const filterSearchResults = () => {
    if (!products.length) return;
    const matchingProducts = products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    const filteredProducts = matchingProducts.map((product) => ({
      title: product.name,
      link: `/products/${product.slug}`,
    }));

    const filteredPages = [
      { title: "Products Page", link: "/products" },
      { title: "About Us Page", link: "/about" },
      { title: "Contact Us Page", link: "/contact" },
    ].filter((page) => page.title.toLowerCase().includes(searchTerm));

    const combinedResults: any = [...filteredProducts, ...filteredPages];
    console.log(combinedResults);
    setSearchResults(combinedResults);
  };

  useEffect(() => {
    filterSearchResults();
  }, [searchTerm]);

  return (
    <ThemeProvider>
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
          <div className="sub-nav lg:w-auto w-full flex gap-12 justify-between items-center">
            {/* search */}
            <form className="flex items-center lg:max-w-auto max-w-[250px] lg:mx-auto">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus} // Add focus event handler
                  onBlur={handleInputBlur}
                  autoComplete="off"
                  className="bg-gray-50 border-2 ring-gray-100 focus:ring-2 p-3 text-gray-900 text-sm rounded-lg rounded-r-none"
                  placeholder="Search"
                  required
                />
                {isInputFocused && searchResults.length > 0 && (
                  <Card
                    className="w-full absolute focus:visible z-[10000]"
                    placeholder={""}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <List
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {searchResults
                        .slice(0, 5)
                        .map((result: any, index: number) => (
                          <Link
                            key={index}
                            href={result.link}
                            onClick={() => setIsInputFocused(false)}
                          >
                            <ListItem
                              placeholder={undefined}
                              onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined}
                            >
                              {result.title}
                            </ListItem>
                          </Link>
                        ))}
                    </List>
                  </Card>
                )}
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
            <div className="side-menu fixed top-0 right-0 h-screen w-[90%] md:max-w-[300px] max-w-[250px] z-20 bg-white">
              {/* header */}
              <div className="header bg-secondary py-2 min-h-[70px] px-4 w-full flex items-center justify-between ">
                <h2 className="text-white text-xl">
                  <Link href="/">
                    <Image src={Logo} alt="Novotel" height="60" width="130" />
                  </Link>
                </h2>

                <button className="closs-menu" onClick={() => toggleMenu()}>
                  <RxCross2 size={"36"} className="text-black" />
                </button>
              </div>

              {/* side-menu nav */}
              <ul className="side-menu-nav flex flex-col w-full">
                <Link
                  href="/products"
                  className="md:text-lg"
                  onClick={() => setShowMenu(false)}
                >
                  <li className="hover:bg-tertiary p-4 flex items-center justify-between">
                    Products
                    <GoArrowUpRight size={20} />
                  </li>
                </Link>
                <Link
                  href={"/about"}
                  className="md:text-lg"
                  onClick={() => setShowMenu(false)}
                >
                  <li className="hover:bg-tertiary p-4 flex items-center justify-between">
                    About us
                    <GoArrowUpRight size={20} />
                  </li>
                </Link>
                <Link
                  href={"/contact"}
                  className="md:text-lg"
                  onClick={() => setShowMenu(false)}
                >
                  <li className="hover:bg-tertiary p-4 flex items-center justify-between">
                    Contact Us
                    <GoArrowUpRight size={20} />
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
