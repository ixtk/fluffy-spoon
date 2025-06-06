import "./AddProduct.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { axiosInstance } from "@/lib/axiosInstance"
import { useNavigate } from "react-router"

export const AddProductPage = () => {
  const navigate = useNavigate()

  const initialValues = {
    title: "",
    category: "Electronics",
    regularPrice: "",
    salePrice: "",
    imageUrl: "",
    description: ""
  }

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(2, "Title must be at least 2 characters")
      .required("Required"),
    category: Yup.string().required("Required"),
    regularPrice: Yup.number()
      .min(1, "Price must be at least 1")
      .max(100000, "Price too high")
      .required("Required"),
    salePrice: Yup.number()
      .min(1, "Sale price must be at least 1")
      .max(100000, "Sale price too high")
      .notRequired()
      .nullable()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" ? null : value
      )
      .test(
        "salePriceLessThanPrice",
        "Sale Price must be less than or equal to Price",
        function (salePrice) {
          const { price } = this.parent
          if (salePrice == null) return true
          return salePrice <= price
        }
      ),
    imageUrl: Yup.string().url("Must be a valid URL").required("Required"),
    description: Yup.string().notRequired()
  })

  const handleSubmit = async values => {
    console.log("Form data:", values)
    // You can send values to backend here
    const response = await axiosInstance.post("/products", values)
    navigate(`/products/${response.data._id}`)
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="product-form">
            <div className="title">
              <label htmlFor="title">Title</label>
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Product Title"
              />
              <ErrorMessage name="title" component="span" className="error" />
            </div>

            <div className="category">
              <label htmlFor="category">Category</label>
              <Field as="select" id="category" name="category">
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
                <option value="Home">Home</option>
                <option value="Toys">Toys</option>
              </Field>
              <ErrorMessage
                name="category"
                component="span"
                className="error"
              />
            </div>

            <div className="price">
              <label htmlFor="price">Price</label>
              <Field
                type="number"
                id="price"
                name="regularPrice"
                min="1"
                max="100000"
                placeholder="Price"
              />
              <ErrorMessage name="price" component="span" className="error" />
            </div>

            <div className="sale-price">
              <label htmlFor="salePrice">Sale Price (optional)</label>
              <Field
                type="number"
                id="salePrice"
                name="salePrice"
                min="1"
                max="100000"
                placeholder="Sale Price"
              />
              <ErrorMessage
                name="salePrice"
                component="span"
                className="error"
              />
            </div>

            <div className="img-url">
              <label htmlFor="imageUrl">Image URL</label>
              <Field
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
              />
              <ErrorMessage
                name="imageUrl"
                component="span"
                className="error"
              />
            </div>

            <div className="description">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows="4"
                placeholder="Product description"
              />
              <ErrorMessage
                name="description"
                component="span"
                className="error"
              />
            </div>

            <div className="save">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
