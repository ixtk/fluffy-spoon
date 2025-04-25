import "./ProductReview.scss"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react"
import { useFormik } from "formik";
import { object, string, array, boolean} from "yup";
import * as React from 'react';
import Rating from '@mui/material/Rating';


export const ProductReview = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [reviews, setReviews] = useState([])


    const formSchema = object({
        headline: string().min(3).max(20).required(),
        review: string().min(3).max(200).required(),
        rating: string().min(1).max(5).required(),
      });

      const formik = useFormik({
        initialValues: {
          headline: '',
          review: '',
          rating: ''
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values);
            setReviews([...reviews, values])
          },
      });

      const handleSubmit = () => {
        formik.handleSubmit(); 
        setTimeout(() => setIsOpen(false), 1500);
      };


    return <>
    <div className="reviewPage">
        <h1 className="reviewTitle">Customer Reviews</h1>
        <Rating className="defaultStars" size="large" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        <button className="reviewButton" onClick={() => setIsOpen(true)}>Write a Review</button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="writeReview">
        <div className="">
            <DialogTitle className={"writeRevTitle"}>Write a review</DialogTitle>
            <DialogTitle className={"ratingTitle"}>
                Rating
            </DialogTitle>
            <label htmlFor=""><Rating size="large" className="stars" value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur}  name="rating" defaultValue={2.5} precision={0.5} /> {formik.touched.rating &&
                <span className="error">
                {formik.errors.rating}
                </span>}
                </label>
            <DialogTitle className={"headline"}>Headline</DialogTitle>
            <label htmlFor="">
            <input value={formik.values.headline} onChange={formik.handleChange} onBlur={formik.handleBlur} name="headline" type="text" className="headlineInput" placeholder="Summarize your experience"></input> {formik.touched.headline &&
                <span className="error">
                {formik.errors.headline}
                </span>}
            </label>
            <DialogTitle className={"review"}>Review</DialogTitle>
            <label htmlFor="">
            <textarea value={formik.values.review}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} name="review" className="reviewInput" placeholder="Share your experience with this product" ></textarea>
                {formik.touched.review &&
                <span className="error">
                {formik.errors.review}
                </span>}
            </label>
            <button className="cancelBtn" onClick={() => setIsOpen(false)}>Cancel</button>
            <button type="button" onClick={handleSubmit} className="submitBtn">Submit review</button>
            
        </div>
        </Dialog>
       <div className="reviews">
         <div className="customerOne" >
           <h3 className="customerName">John D.</h3>
           <div className="customerTitle"><p className="verified">Verified Purchase</p></div>
           <Rating className="defaultStars customerRating" size="small" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
           <h3 className="customerHeadline">Best running shoes ever!</h3>
           <p className="customerReview">I Love the color and the way they feel on the only thing is I got them a little to big but other than that I Love them </p>
           <p className="date">2/5/2024</p>
         </div>
         <div className="customerTwo" >
           <h3 className="customerName">Sarah M.</h3>
           <div className="customerTitle"><p className="verified">Verified Purchase</p></div>
           <Rating className="defaultStars customerRating" size="small" name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly />
           <h3 className="customerHeadline">Great shoes, but runs small</h3>
           <p className="customerReview">Beautiful feels great looks great comfortable. Not sure about durability because I haven't had them long enough yet. </p>
           <p className="date">2/10/2024</p>
         </div>
         {reviews && reviews.length > 0 ? (
         <div>
          {reviews.map((review, index) => (
           <div className="customerOne" >
           <h3 className="customerName">Guest</h3>
           <div className="customerTitle"><p className="verified">NonVerified Purchase</p></div>
           <Rating className="defaultStars customerRating" size="small" name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly />
           <h3 className="customerHeadline">{review.headline}</h3>
           <p className="customerReview">{review.review}</p>
           <p className="date">2/5/2024</p>
           </div>
            ))}
           </div>
           ) : (
        <p>No more reviews yet!</p>
          )}
       </div>

    </div>


    </>
}

