import "./shared/App.scss"
import { Route, Routes, Navigate, Outlet } from "react-router"
import { HomePage } from "./pages/home/HomePage.jsx"
import { useContext } from "react"
import { AuthContext } from "./lib/AuthContext.jsx"
import { LoginPage } from "./pages/login/LoginPage.jsx"
import { RegisterPage } from "./pages/register/RegisterPage.jsx"
import { EditProductPage } from "@/pages/product-edit/EditProductPage.jsx"
import { ProfilePage } from "./pages/profile/ProfilePage.jsx"
import { DashboardPage } from "./pages/dashboard/DashboardPage.jsx"
import { ProductReview } from "./pages/product/ProductReview.jsx"
import { Layout } from "@/shared/Layout.jsx"

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
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route element={<RedirectIfLoggedIn />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/secret" element={<h1>2 x 2 = 4</h1>} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products/1/edit" element={<EditProductPage />} />
        </Route>
        <Route path="/products/1" element={<ProductReview />} />
      </Route>
    </Routes>
  )
}
