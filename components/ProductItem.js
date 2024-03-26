import Link from "next/link";

// utility functions.
import { calculateDiscountedPrice } from "@/lib/product";

const ProductItem = ({ product }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${product.thumbnail})` }}
        className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
      ></div>
      <h2 className="mt-2 text-sm lg:text-base">
        <Link href={`/products/${product?.id}`} className="text-base font-bold">
          {product?.title}
        </Link>
        <span className="text-[#919090]">
          <Link href={`/category/${product?.category}`}>
            {" "}
            ({product?.category})
          </Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{product?.description}</p>

      <p className="mt-4 text-sm text-rose-600">
        <span className="text-[#919090] line-through">${product?.price}</span> $
        {calculateDiscountedPrice(product?.price, product?.discountPercentage)}
      </p>
    </div>
  );
};

export default ProductItem;
