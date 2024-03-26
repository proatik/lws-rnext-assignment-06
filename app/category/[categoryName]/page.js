// react components.
import ProductItem from "@/components/ProductItem";
import CategoryList from "@/components/CategoryList";

// utility functions.
import { getProductsByCategory } from "@/lib/product";

const CategoryPage = ({ params: { categoryName } }) => {
  const products = getProductsByCategory(categoryName);

  return (
    <>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]" />

      <main>
        <section className="items-start justify-between w-11/12 py-0 mx-auto lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
          <CategoryList category={categoryName} />

          {products?.length === 0 && (
            <div className="grid w-full h-32 p-5 text-2xl border rounded-md place-items-center text-slate-500 bg-slate-100/40 border-slate-200">
              No products are available in this category.
            </div>
          )}

          {products?.length > 0 && (
            <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
              {products?.map((product) => (
                <ProductItem key={product?.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
