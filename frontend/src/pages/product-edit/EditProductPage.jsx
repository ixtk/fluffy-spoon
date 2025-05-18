import { ProductVariant } from "../components/ProductVariant.jsx"
import "./EditProduct.scss"
import { useFormik } from "formik"

export const EditProductPage = () => {
  const form = useFormik({
    initialValues: {
      productName: "UltraGlide Pro Running Shoes",
      category: "Athletic",
      regularPrice: "129.99",
      salePrice: 99.99,
      onSale: true,
      variants: [
        {
          color: "Midnight Black",
          quantity: 42,
          images: [
            "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG5TM1EovYcHRS_Uoi7lufuMrQ3slzfmoLg&s"
          ],
          sizes: [
            { men: 7, women: 8.5 },
            { men: 8, women: 9.5 },
            { men: 9, women: 10.5 },
            { men: 10, women: 11.5 }
          ]
        },
        {
          color: "Electric Blue",
          quantity: 35,
          images: [
            "https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg",
            "https://rukminim2.flixcart.com/image/850/1000/j1861zk0/poster/4/n/4/large-szpp294-deer-baby-cute-animal-poster-original-imaefzbj53p5jatd.jpeg?q=20&crop=false"
          ],
          sizes: [
            { men: 7, women: 8.5 },
            { men: 8, women: 9.5 },
            { men: 9, women: 10.5 }
          ]
        }
      ]
    }
  })

  return (
    <>
      <h1>Edit Product</h1>
      <form action="">
        {/* General info about the product listing */}
        <label htmlFor="productName">
          <p>Product Name</p>
          <input
            type="text"
            accept="image/*"
            name="productName"
            onChange={form.handleChange}
            value={form.values.productName}
          />
        </label>

        <label htmlFor="category">
          <p>Category</p>

          <select
            name="category"
            value={form.values.category}
            onChange={form.handleChange}
          >
            <option value="Athletic">Athletic</option>
            <option value="Fishing">Fishing</option>
          </select>
        </label>

        <section className="pricing-section">
          <h2>Pricing</h2>

          <p>Regular Price ($)</p>
          <label htmlFor="regularPrice">
            <input
              type="text"
              name="regularPrice"
              value={form.values.regularPrice}
              onChange={form.handleChange}
            />
          </label>

          <p>Sale Price ($)</p>
          <label htmlFor="salePrice">
            <input
              type="text"
              name="salePrice"
              value={form.values.salePrice}
              onChange={form.handleChange}
            />
          </label>

          <label htmlFor="onSale" id="sale-switch">
            <button
              type="button"
              onClick={() => {
                document.getElementById("onSale").click()
              }}
              style={{ justifyContent: form.values.onSale ? "end" : "start" }}
            >
              <div id="sale-switch-ball"></div>
              <input
                type="checkbox"
                id="onSale"
                name="onSale"
                checked={form.values.onSale}
                onChange={form.handleChange}
              />
            </button>

            <span>On Sale</span>
          </label>
        </section>

        {/* Different variants of this listing */}
        <section className="variants-section">
          <figure>
            <h2 style={{ width: "fit-content" }}>Variants</h2>
            <button
              type="button"
              onClick={() => {
                form.setFieldValue("variants", [
                  ...form.values.variants,
                  {
                    color: "",
                    quantity: 0,
                    images: [],
                    sizes: []
                  }
                ])
              }}
            >
              + Add Variant
            </button>
          </figure>

          {console.log(form.values.variants)}

          {form.values.variants.map((variant, index) => {
            return (
              <ProductVariant
                key={form.values.variants[index].sizes + index}
                variant={variant}
                form={form}
                originalIndex={index}
              />
            )
          })}
        </section>

        <button className="save-btn" type="button">
          Save Product
        </button>
      </form>
    </>
  )
}
