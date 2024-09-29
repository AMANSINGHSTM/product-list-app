import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind styles
import { Provider } from "react-redux"; // Import Provider
import { store } from "./redux/store"; // Import your store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the App component with Redux Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
