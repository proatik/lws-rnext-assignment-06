"use client";

import { useState } from "react";

import Image from "next/image";

const ProductImages = ({ images }) => {
  const [featured, setFeatured] = useState(images[0]);

  return (
    <div className="w-full p-4 border lg:w-7/12 border-slate-500/20">
      <Image
        width={400}
        height={500}
        alt="image 1"
        src={featured}
        className="w-[400px] h-[500px] mx-auto object-cover"
      />

      <div className="flex gap-4 mt-4 overflow-x-auto">
        {images?.map((url, index) => (
          <Image
            src={url}
            key={index}
            width={100}
            height={100}
            alt={`image ${index + 1}`}
            onClick={() => setFeatured(url)}
            className={`w-[100px] h-[100px] mx-auto border object-cover cursor-pointer ${
              featured === url && "opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
