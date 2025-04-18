import "./App.scss"
import { Route, Routes } from "react-router"
import { HomePage } from "./pages/Home"
import { ProductReview } from "./pages/ProductReview"

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/product" element={<ProductReview />} />
    </Routes>
  )
}

export default App
