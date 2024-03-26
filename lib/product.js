import products from "@/data/products.json";

export const getProducts = () => {
  return products;
};

export const getProduct = (productId) => {
  return products.find(({ id }) => id == productId) || {};
};

export const getProductsByCategory = (categoryName) => {
  return (
    products.filter(
      ({ category }) => category === categoryName || categoryName === "all"
    ) || []
  );
};

export const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
  const discount = discountPercentage / 100;

  const newPrice = originalPrice * (1 - discount);

  return newPrice.toFixed(2);
};
