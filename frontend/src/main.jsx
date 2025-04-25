import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // use `react-router-dom` here
import HomePage from "./pages/Home.jsx"; // assuming you use default export

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </StrictMode>
);
