import Image from "next/image";

// icons/images
import StarIcon from "@/public/svg/star.svg";

// react components.
import ProductImages from "@/components/ProductImages";

// utility functions.
import { getProduct, calculateDiscountedPrice } from "@/lib/product";

export const metadata = {
  title: "LWS Shop Center | Product",
};

const ProductPage = ({ params: { productId } }) => {
  const {
    price,
    title,
    rating,
    images,
    category,
    description,
    discountPercentage,
  } = getProduct(productId);

  const ratings = Array.from({ length: Math.round(rating) }, (e, i) => i + 1);

  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="flex flex-col items-center justify-between w-11/12 gap-12 mx-auto lg:w-8/12 max-w-7xl lg:flex-row">
        <ProductImages images={images} />

        <div className="w-full lg:w-5/12">
          <h1 className="font-serif text-xl italic font-semibold lg:text-3xl">
            {title}
          </h1>
          <span className="text-[#919090] my-3"> {category}</span>
          <div className="flex items-center justify-start gap-1 mt-3">
            {ratings.map((r) => (
              <Image key={r} src={StarIcon} width="20px" alt="star icon" />
            ))}
          </div>
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="line-through text-rose-600 opacity-60">
                ${price}
              </span>
              <span className="text-2xl font-bold"> {discountedPrice}</span>
            </p>
          </div>
          <div>
            <p className="leading-7">{description}</p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${discountedPrice}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
