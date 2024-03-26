// react components.
import Header from "@/components/Header";
import GetUpdates from "@/components/GetUpdates";
import ProductItem from "@/components/ProductItem";

// utility functions.
import { getProducts } from "@/lib/product";

export default function Home() {
  const products = getProducts();

  return (
    <>
      <Header />

      <main>
        <section className="w-11/12 py-10 mx-auto lg:w-10/12 max-w-7xl">
          <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4 lg:my-10">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </section>

        <GetUpdates />
      </main>
    </>
  );
}
