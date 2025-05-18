import "./App.scss"
import { Route, Routes, Navigate, Outlet } from "react-router"
import { HomePage } from "./pages/Home"
import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { EditProduct } from "@/pages/EditProduct"
import { Userpage } from "./Userpage/userpage"
import { Dashboard } from "./dashboard/dashboard"
import { ProductReview } from "./pages/ProductReview"

export default function App() {
  const ProtectedRoute = () => {
    const { authState } = useContext(AuthContext)

    if (authState.loading) {
      return null
    }

    if (authState.user !== null) {
      return <Outlet />
    } else {
      return <Navigate to="/login" />
    }
  }

  const RedirectIfLoggedIn = () => {
    const { authState } = useContext(AuthContext)

    if (authState.loading) {
      return null
    }

    if (authState.user !== null) {
      return <Navigate to="/" />
    } else {
      return <Outlet />
    }
  }


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<RedirectIfLoggedIn />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/secret" element={<h1>2 x 2 = 4</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-product" element={<EditProduct />} />
      </Route>
      <Route path="/product" element={<ProductReview />} />
    </Routes>
  )
}
