import Image from "next/image";
import React from "react";
import { Product } from "@/types/product";
import Link from "next/link";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card w-full">
      <div className="image-container">
        <Image
          src={product.image}
          alt={product.name}
          height={100}
          width={400}
          className="w-full h-auto md:max-h-auto max-h-[300px]"
        />
      </div>
      <div className="product-details flex justify-between items-center bg-secondary py-4 px-6">
        <div className="desc">
          <h3 className="font-semibold text-lg text-primary">{product.name}</h3>
          <p>{product.description}</p>
        </div>

        {/* View Deatils button */}
        <Link href={`/products/${product.slug}`}>
          <button className="btn px-4 py-2 text-primary border-[1px] border-primary rounded-lg hover:bg-primary hover:text-white hover:border-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
