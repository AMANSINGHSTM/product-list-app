import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categoriesSlice";
import CategorySelector from "./components/CategorySelector";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Product Listing App</h1>
      <SearchBar />
      <CategorySelector />
      <ProductList />
    </div>
  );
};

export default App;

// ***Limitations of the App:******

//  * Pagination Loading: ****
//    The app fetches product data in batches of 10 without traditional UI pagination controls,
//    so users may experience delays as they scroll and wait for more products to load.

// *** No Error Handling for API Calls:****
//    There is no user-friendly error handling if the API fails or returns an error
//    (e.g., if the DummyJSON API is unavailable or the internet connection is down).

// *****Limited Search Functionality:*****
//    The search only works on the currently fetched products and doesn't query the API for a global search across all products.
//    This limits the search to products already loaded in the state, which may miss out on other relevant products.

// ******* UI/UX Enhancements:******
//    While functional, the app's user interface is basic, and it doesn't have advanced styling, animations,
//    or transitions that could improve the overall user experience.

// ***** Query Parameters Limitations:****
//    The search input and selected category are stored as query parameters, but refreshing the page
//    resets the state, so users may lose their selections and search results.

// **** Lack of Product Details:***
//    The app only shows a list of products with basic information. There's no detailed view of individual products
//    or the ability to see more information about a specific product.

// **** No Loading Indicators: *****
//    When fetching products or categories, there are no loading indicators, which may cause confusion for users,
//    as they won’t know if more products are being fetched or if the app is idle.

// ***** Mobile Responsiveness: *****
//    The app's responsiveness is limited, and certain elements may not adjust well on smaller
//  screens without further CSS optimization for mobile devices.

// *****Caching Data:*****
//    The app does not cache previously fetched product data, so if a user switches between
// categories or performs searches, the data is fetched from the API again in
