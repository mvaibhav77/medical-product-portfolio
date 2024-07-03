import React from "react";
import products from "../../../data/products.json";
import { Product } from "@/types/product";
import Container from "@/app/components/Container";
import PhotoCarousel from "./PhotoCarousel";
import Accordian from "./Accordian";
import Link from "next/link";
import NotFound from "@/app/not-found";

type Props = {
  params: {
    product: string;
  };
};

const page = ({ params }: Props) => {
  const product: Product | undefined = products.find(
    (product) => product.slug === params.product
  );

  if (!product) {
    return <NotFound />;
  }

  return (
    <main>
      {/* breadcrumbs */}
      <section>
        <hr className=" border-black" />
        <Container>
          <nav className="text-black py-2">
            <a href="/" className="hover:underline text-gray-700">
              Home
            </a>{" "}
            /{" "}
            <a href="/products" className="hover:underline text-gray-700">
              Products
            </a>{" "}
            / {product.name}
          </nav>
        </Container>
        <hr className="border-black" />
      </section>

      {/* main section in grid of 2 columns */}
      <section className="py-4 mb-20">
        <Container>
          {/* header */}
          <div className="product-header mb-4">
            <h2 className="md:text-4xl text-2xl font-bold">{product.name}</h2>
          </div>

          <div className="main-content grid md:grid-cols-2 grid-cols-1 gap-6">
            {/* col1:-  photo crousel of product with zoom functionality */}
            <div className="images">
              {/* photos carousel */}
              <div className="photos-carousel h-fit">
                <PhotoCarousel product={product} />
              </div>
            </div>

            {/* col2:- deatils about the product in dropdown format example Therapy Area */}
            <div className="details flex flex-col gap-4 justify-between">
              <div className="accordian">
                <Accordian product={product} />
              </div>
              <Link href={product.catalogue} className="w-full">
                <button className="btn w-full bg-primary text-white p-4 text-lg">
                  Get More Details
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default page;
