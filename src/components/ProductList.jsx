import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const searchQuery = useSelector((state) => state.search.query);

  const [skip, setSkip] = useState(0);

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: selectedCategory,
        searchQuery,
        limit: 10,
        skip,
      })
    );
  }, [dispatch, selectedCategory, searchQuery, skip]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      setSkip(skip + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skip]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
