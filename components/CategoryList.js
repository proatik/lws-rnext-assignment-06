import Link from "next/link";

// all the available categories.
const categories = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Smartphones", value: "smartphones" },
  { id: 3, label: "Laptops", value: "laptops" },
  { id: 4, label: "Fragrances", value: "fragrances" },
  { id: 5, label: "Skincare", value: "skincare" },
  { id: 6, label: "Groceries", value: "groceries" },
];

const CategoryList = ({ category }) => {
  return (
    <div className="flex items-center justify-between w-full my-10 lg:block lg:w-2/12 lg:my-0 lg:mt-4">
      {categories.map(({ id, label, value }) => (
        <Link key={id} href={`/category/${value}`}>
          <button
            className={`box-border block h-6 mt-4 border-black hover:border-b ${
              category === value && "text-teal-500 border-b-teal-500"
            }`}
          >
            {label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
