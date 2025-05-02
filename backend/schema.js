import { object, string, ref, number, boolean, array } from "yup"

export const loginSchema = object({
  email: string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required(),
  password: string().min(8).required()
})

export const registerSchema = object({
  email: string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required(),
  username: string().min(3).max(20).required(),
  password: string().min(8).required(),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords do not match")
    .required("Password confirmation is required")
})

export const productSchema = object({
  name: string().required(),
  category: string().required(),
  regularPrice: number().required(),
  salePrice: number().optional(),
  isOnSale: boolean().default(false),
  variants: array().of(
    object({
      color: string().required(),
      stock: number().required(),
      sizes: array().of(
        object({
          men: number().optional(),
          women: number().optional(),
        })
      ).optional(),
      images: array().of(string().required()),
    })
  ).optional(),
  reviews: array().of(
    object({
      text: string().optional(),
      headline: string().required(),
      starRating: number().optional(),
    })
  ).optional(),
})
