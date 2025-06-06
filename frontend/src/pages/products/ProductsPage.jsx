import { ProductCard } from "@/pages/products/ProductCard.jsx"
import { useEffect, useState } from "react"
import { axiosInstance } from "@/lib/axiosInstance.js"

export const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axiosInstance.get("/products")
      setProducts(response.data)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h2 className="page-title">All products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product._id}
            category={product.category}
            title={product.title}
            regularPrice={product.regularPrice}
            salePrice={product.salePrice}
            thumbnail={product?.imageUrl || "https://placehold.co/600x400"}
          />
        ))}
      </div>
    </>
  )
}
