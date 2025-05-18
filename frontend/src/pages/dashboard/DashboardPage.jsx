import { useState, useEffect } from "react";
import "./Dashboard.scss";

const allProducts = [
  {
    id: 1,
    name: "Leather Hiking Boots",
    category: "Apparel",
    price: 89.99,
    oldPrice: 119.99,
    stock: 12,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Wooden Coffee Table",
    category: "Furniture",
    price: 149.0,
    oldPrice: 179.99,
    stock: 4,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    oldPrice: 79.99,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    category: "Electronics",
    price: 29.5,
    oldPrice: 39.99,
    stock: 8,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Velvet Armchair",
    category: "Furniture",
    price: 249.99,
    oldPrice: 289.99,
    stock: 1,
    status: "Low Stock",
  },
  {
    id: 6,
    name: "Cotton T-Shirt - Black",
    category: "Apparel",
    price: 14.99,
    oldPrice: 19.99,
    stock: 25,
    status: "In Stock",
  },
  {
    id: 7,
    name: "Smartphone Stand",
    category: "Electronics",
    price: 9.99,
    oldPrice: 12.99,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 8,
    name: "Modern Bookshelf",
    category: "Furniture",
    price: 179.99,
    oldPrice: 209.99,
    stock: 2,
    status: "Low Stock",
  },
  {
    id: 9,
    name: "Men's Winter Jacket",
    category: "Apparel",
    price: 129.99,
    oldPrice: 159.99,
    stock: 6,
    status: "In Stock",
  },
  {
    id: 10,
    name: "Wireless Keyboard",
    category: "Electronics",
    price: 49.99,
    oldPrice: 59.99,
    stock: 10,
    status: "In Stock",
  },
  {
    id: 11,
    name: "Fabric Sofa",
    category: "Furniture",
    price: 599.0,
    oldPrice: 699.0,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 12,
    name: "Casual Sneakers",
    category: "Apparel",
    price: 64.95,
    oldPrice: 74.95,
    stock: 9,
    status: "In Stock",
  },
  {
    id: 13,
    name: "Laptop Cooling Pad",
    category: "Electronics",
    price: 24.99,
    oldPrice: 29.99,
    stock: 3,
    status: "Low Stock",
  },
];

export const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const productsPerPage = 10;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const currentProducts = allProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Product Management</h1>

      <div className="summary">
        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon">📦</span>
            <h1 className="summary-title">Total products</h1>
          </div>
          <h2 className="summary-number">{allProducts.length}</h2>
        </div>

        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon in-stock">✅</span>
            <h1 className="summary-title">In Stock</h1>
          </div>
          <h2 className="summary-number">
            {allProducts.filter(p => p.status === "In Stock").length}
          </h2>
        </div>

        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon low-stock">⚠️</span>
            <h1 className="summary-title">Low Stock</h1>
            <span className="summary-alert">Needs attention</span>
          </div>
          <h2 className="summary-number">
            {allProducts.filter(p => p.status === "Low Stock").length}
          </h2>
        </div>

        <div className="summary-item">
          <div className="summary-top">
            <span className="summary-icon out-of-stock">🚫</span>
            <h1 className="summary-title">Out of Stock</h1>
            <span className="summary-alert">Unavailable products</span>
          </div>
          <h2 className="summary-number">
            {allProducts.filter(p => p.status === "Out of Stock").length}
          </h2>
        </div>
      </div>

      <div className="table-controls">
        <div className="table-controls-left">
          <div className="search">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <select className="filter">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Apparel</option>
            <option>Furniture</option>
          </select>

          <select className="filter">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <button className="add-button">
          <span className="add-icon">+</span> Add Product
        </button>
      </div>

      <table className="product-table">
        <thead className="table-head">
          {!isSmallScreen && (
            <tr className="table-row">
              <th className="table-header">Image</th>
              <th className="table-header">Product</th>
              <th className="table-header">Category</th>
              <th className="table-header">Price</th>
              <th className="table-header">Stock</th>
              <th className="table-header">Status</th>
              <th className="table-header">Actions</th>
            </tr>
          )}
        </thead>
        <tbody className="table-body">
          {currentProducts.map(product => (
            <tr className="table-row" key={product.id}>
              <td className="table-data" data-label="Image">
                <img src="/placeholder.png" alt="Product" width={40} />
              </td>
              <td className="table-data" data-label="Product">{product.name}</td>
              <td className="table-data" data-label="Category">{product.category}</td>
              <td className="table-data" data-label="Price">
                <span className="table-price-old">${product.oldPrice.toFixed(2)}</span>${product.price.toFixed(2)}
              </td>
              <td className="table-data" data-label="Stock">{product.stock}</td>
              <td className="table-data" data-label="Status">
                <span
                  className={`status ${
                    product.status === "In Stock"
                      ? "in-stock"
                      : product.status === "Low Stock"
                      ? "low-stock"
                      : "out-of-stock"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="table-data" data-label="Actions">
                <span className="action-icon">✏️</span>
                <span className="action-icon">👁️</span>
                <span className="action-icon">🗑️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
        >
          ‹ Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
        >
          Next ›
        </button>
      </div>
    </div>
  );
};