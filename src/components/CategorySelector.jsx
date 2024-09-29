import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../redux/categoriesSlice";
import { fetchProducts, clearProducts } from "../redux/productsSlice";
import { useEffect } from "react";

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  useEffect(() => {
    dispatch(fetchProducts({ category: selectedCategory, limit: 10, skip: 0 }));
  }, [dispatch, selectedCategory]);

  const handleCategoryChange = (e) => {
    dispatch(setSelectedCategory(e.target.value));
    dispatch(clearProducts()); 
    dispatch(fetchProducts({ category: e.target.value, limit: 10, skip: 0 }));
  };

  return (
    <div className="flex items-center justify-center my-4">
      <label
        htmlFor="category"
        className="mr-2 text-lg font-semibold text-gray-700"
      >
        Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
