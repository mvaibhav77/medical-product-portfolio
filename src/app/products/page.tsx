"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "../components/_shared/PageHeader";
// import Medicine from "../../assets/medicine.jpg";
import Products from "../../assets/products.jpg";
import { Product } from "@/types/product";
import products from "../../data/products.json";
import SearchFilter from "../components/product/SearchFilter";
import ProductCard from "./ProductCard";
import Container from "../components/_shared/Container";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [currentItems, setCurrentItems] = useState(6);

  const loadMore = () => {
    setCurrentItems((prev) => prev + 3);
  };

  // Function to filter and sort products based on search and category
  const handleFilter = () => {
    let filtered = products.slice(); // Copy to avoid mutation
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) =>
          product.therapyArea.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    // Sort by title alphabetically if no search terms or filters
    if (!searchTerm && !selectedCategory) {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    // filtered =
    //   filtered.length > 2
    //     ? filtered.slice(
    //         0,
    //         filtered.length % 2 === 0 ? filtered.length : filtered.length - 1
    //       )
    //     : filtered;
    setFilteredProducts(filtered);
  };

  // Call handleFilter on initial render and whenever searchTerm or selectedCategory changes
  useEffect(() => {
    handleFilter();
  }, [searchTerm, selectedCategory]);

  return (
    <main className="min-h-[65vh] mb-12">
      <PageHeader title="Products" image={Products} />

      <Container className="product-search-filter py-12">
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Container>

      <Container
        className="product-grid grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center
      "
      >
        {filteredProducts.length > 0 ? (
          filteredProducts
            .slice(0, currentItems)
            .map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p className="text-center">
            No products found matching your search criteria.
          </p>
        )}
      </Container>

      {/* load more button */}
      {filteredProducts.length - currentItems > 0 && (
        <div className="flex justify-center mt-6">
          <button
            className="btn px-6 py-4 text-xl hover:text-primary border-[1px] hover:border-primary hover:bg-white rounded-lg bg-primary text-white border-white"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
};

export default Page;
