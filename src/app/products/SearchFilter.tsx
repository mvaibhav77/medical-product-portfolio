"use client";

import React from "react";
import { Select, Option, ThemeProvider } from "@material-tailwind/react";

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  selectedCategory: string | undefined;
  setSelectedCategory: (category: string | undefined) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = (props) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (val: string) => {
    props.setSelectedCategory(val);
  };

  return (
    <>
      <ThemeProvider>
        <div className="search-filter flex lg:flex-row flex-col items-center gap-6 justify-center lg:px-6 px-4">
          {/* search bar */}
          <form className="relative w-full min-w-[350px] max-w-[450px]">
            <label htmlFor="simple-search" className="sr-only">
              Search By Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="product-search"
                value={props.searchTerm}
                onChange={handleSearchChange}
                className="bg-gray-50 border-2 w-full h-[60px] ring-gray-100 focus:ring-2 p-3 px-6 text-gray-900 text-lg rounded-full"
                placeholder="Search By Name"
                required
              />
            </div>
            <button
              type="submit"
              className="absolute top-0 right-0 p-5 h-[60px] w-[60px] text-xl text-center font-medium text-white bg-primary rounded-full"
            >
              <svg
                className="w-5 h-5"
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

          {/* select category */}
          {/* <select
            value={props.selectedCategory}
            onChange={handleCategoryChange}
            id="category-filter"
            className="rounded-md px-6 py-4 text-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-primary focus:!containerbg-primary text-white selection:p-6"
          >
            <option className="py-4 px-6 text-lg" value="">
              All Categories
            </option>
            <option
              className="py-4 px-6 text-lg"
              value="Vitamins and Supplements"
            >
              Vitamins and Supplements
            </option>
            <option className="py-4 px-6 text-lg" value="Physical Health">
              Physical Health
            </option>
          </select> */}
          <div className="select-category w-full lg:max-w-[350px] max-w-[450px]">
            <Select
              color="red"
              label="Select Category"
              variant="outlined"
              size="lg"
              onChange={(value: string | undefined) =>
                props.setSelectedCategory(value)
              }
              value={props.selectedCategory}
              placeholder={"Select a category"}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className=""
            >
              <Option className="py-4 px-6" value="">
                All Categories
              </Option>
              <Option className="py-4 px-6" value="Vitamins and Supplements">
                Vitamins and Supplements
              </Option>
              <Option className="py-4 px-6" value="Physical Health">
                Physical Health
              </Option>
            </Select>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default SearchFilter;
